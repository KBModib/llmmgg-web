// src/app/api/admin/users/route.ts

import { NextResponse } from 'next/server';
import { auth } from '~/server/auth';
import { db } from '~/server/db';

const REQUIRED_ROLE = 'ADMIN';

// GET: Fetch all users with their details
export async function GET() {
  try {
    const session = await auth();

    if (!session?.user || session.user.role !== REQUIRED_ROLE) {
      return new NextResponse('Forbidden: Only Administrators can access user management.', { status: 403 });
    }

    const users = await db.user.findMany({
      select: {
        id: true,
        name: true,
        email: true,
        role: true,
        emailVerified: true,
        managedTeamId: true,
        managedTeam: {
          select: {
            name: true,
          }
        },
        playerProfile: {
          select: {
            id: true,
            team: {
              select: {
                name: true,
              }
            }
          }
        }
      },
      orderBy: { email: 'asc' },
    });

    return NextResponse.json(users, { status: 200 });
  } catch (error) {
    console.error('Admin Users GET API Error:', error);
    return new NextResponse('Internal Server Error while fetching users.', { status: 500 });
  }
}
