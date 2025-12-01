// src/app/api/admin/teams/route.ts

import { NextResponse } from 'next/server';
import { auth } from '~/server/auth';
import { db } from '~/server/db';

const REQUIRED_ROLE = 'ADMIN';

// --- API HANDLER: GET (ALL TEAMS) ---

export async function GET() {
    try {
        const session = await auth();

        // 1. Authorization: Only ADMIN can proceed
        if (!session || !session.user || session.user.role !== REQUIRED_ROLE) {
            return new NextResponse('Forbidden: Only Administrators can access this data.', { status: 403 });
        }
        
        // 2. Fetch all teams, including their coach and player counts
        const teams = await db.team.findMany({
            select: {
                id: true,
                name: true,
                affiliationFeePaid: true,
                createdAt: true,
                coach: {
                    select: { name: true, email: true, id: true }
                },
                _count: {
                    select: { players: true } // Count of players on the team
                }
            },
            orderBy: { createdAt: 'asc' },
        });

        // 3. Format the data
        const formattedTeams = teams.map(team => ({
            id: team.id,
            name: team.name,
            verified: team.affiliationFeePaid,
            dateCreated: team.createdAt,
            coach: team.coach ? { name: team.coach.name, email: team.coach.email } : null,
            playerCount: team._count.players,
        }));

        return NextResponse.json(formattedTeams, { status: 200 });

    } catch (error) {
        console.error('Admin Teams Retrieval API Error:', error);
        return new NextResponse('Internal Server Error while fetching teams.', { status: 500 });
    }
}