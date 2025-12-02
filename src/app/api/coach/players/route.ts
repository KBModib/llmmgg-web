// src/app/api/coach/players/route.ts
import { NextResponse } from 'next/server';
import { auth } from '~/server/auth';
import { db } from '~/server/db';

const REQUIRED_ROLE = 'COACH';

export async function GET() {
    try {
        const session = await auth();

        if (!session || !session.user || session.user.role !== REQUIRED_ROLE) {
            return NextResponse.json({ error: 'Forbidden: Only Coaches can access this resource.' }, { status: 403 });
        }

        const coachId = session.user.id;

        // Find coach's team
        const coachUser = await db.user.findUnique({
            where: { id: coachId },
            select: { managedTeamId: true }
        });

        if (!coachUser || !coachUser.managedTeamId) {
            return NextResponse.json({ message: 'Coach is not managing a team.', players: [] }, { status: 404 });
        }

        const teamId = coachUser.managedTeamId;

        // Fetch players from coach's team
        const players = await db.playerProfile.findMany({
            where: {
                teamId: teamId,
            },
            select: {
                id: true,
                jerseyNumber: true,
                position: true,
                isCaptain: true,
                user: {
                    select: {
                        id: true,
                        name: true,
                        email: true,
                    }
                },
            },
            orderBy: {
                jerseyNumber: 'asc',
            },
        });

        const formattedPlayers = players.map(player => ({
            id: player.id,
            name: player.user.name,
            position: player.position ?? 'Not set',
            jerseyNumber: player.jerseyNumber,
            status: 'Match Fit', // Can be enhanced with actual status field from DB
            isCaptain: player.isCaptain,
        }));

        return NextResponse.json(formattedPlayers, { status: 200 });
    } catch (error) {
        console.error('GET Coach Players API Error:', error);
        return NextResponse.json({ error: 'Internal Server Error while fetching players.' }, { status: 500 });
    }
}
