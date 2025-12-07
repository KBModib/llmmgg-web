// src/app/api/admin/users/[userId]/route.ts

import { NextResponse } from 'next/server';
import { auth } from '~/server/auth';
import { db } from '~/server/db';
import { z } from 'zod';
import { UserRole } from '../../../../../../generated/prisma';

const REQUIRED_ROLE = 'ADMIN';

const UpdateUserSchema = z.object({
  role: z.nativeEnum(UserRole).optional(),
  emailVerified: z.boolean().optional(),
});

// PUT: Update user role or email verification
export async function PUT(
  req: Request,
  { params }: { params: Promise<{ userId: string }> }
) {
  try {
    const session = await auth();
    const { userId } = await params;

    if (!session?.user || session.user.role !== REQUIRED_ROLE) {
      return new NextResponse('Forbidden: Only Administrators can update users.', { status: 403 });
    }

    // Prevent admin from modifying themselves
    if (session.user.id === userId) {
      return new NextResponse('Bad Request: Cannot modify your own account.', { status: 400 });
    }

    const body = await req.json();
    console.log('Received body:', body);
    const validated = UpdateUserSchema.safeParse(body);

    if (!validated.success) {
      console.error('Validation error:', validated.error);
      return NextResponse.json(
        { error: `Invalid input: ${validated.error.errors.map(e => `${e.path.join('.')}: ${e.message}`).join(', ')}` },
        { status: 400 }
      );
    }

    // Convert emailVerified boolean to Date or null
    const updateData: { role?: UserRole; emailVerified?: Date | null } = {};
    if (validated.data.role !== undefined) {
      updateData.role = validated.data.role;
    }
    if (validated.data.emailVerified !== undefined) {
      updateData.emailVerified = validated.data.emailVerified ? new Date() : null;
    }

    const updatedUser = await db.user.update({
      where: { id: userId },
      data: updateData,
      select: {
        id: true,
        name: true,
        email: true,
        role: true,
        emailVerified: true,
      }
    });

    // Log the action
    await db.adminLog.create({
      data: {
        userId: session.user.id,
        action: `Updated user ${updatedUser.email} - Role: ${updatedUser.role}`,
        targetId: userId,
      }
    });

    return NextResponse.json({ message: 'User updated successfully', user: updatedUser }, { status: 200 });
  } catch (error) {
    console.error('Admin User PUT API Error:', error);
    return new NextResponse('Internal Server Error while updating user.', { status: 500 });
  }
}

// DELETE: Delete a user
export async function DELETE(
  req: Request,
  { params }: { params: Promise<{ userId: string }> }
) {
  try {
    const session = await auth();
    const { userId } = await params;

    if (!session?.user || session.user.role !== REQUIRED_ROLE) {
      return new NextResponse('Forbidden: Only Administrators can delete users.', { status: 403 });
    }

    // Prevent admin from deleting themselves
    if (session.user.id === userId) {
      return new NextResponse('Bad Request: Cannot delete your own account.', { status: 400 });
    }

    const user = await db.user.findUnique({
      where: { id: userId },
      select: { email: true }
    });

    if (!user) {
      return new NextResponse('User not found.', { status: 404 });
    }

    await db.user.delete({
      where: { id: userId }
    });

    // Log the action
    await db.adminLog.create({
      data: {
        userId: session.user.id,
        action: `Deleted user ${user.email}`,
        targetId: userId,
      }
    });

    return NextResponse.json({ message: 'User deleted successfully' }, { status: 200 });
  } catch (error) {
    console.error('Admin User DELETE API Error:', error);
    return new NextResponse('Internal Server Error while deleting user.', { status: 500 });
  }
}
