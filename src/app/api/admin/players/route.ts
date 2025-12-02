// src/app/api/admin/players/route.ts
import { NextResponse } from 'next/server';
import { auth } from '~/server/auth';
import { db } from '~/server/db';

const REQUIRED_ROLE = 'ADMIN';

export async function GET() {
    try {
        const session = await auth();

        if (!session || !session.user || session.user.role !== REQUIRED_ROLE) {
            return NextResponse.json({ error: 'Forbidden: Only Administrators can access this data.' }, { status: 403 });
        }
        
        const players = await db.playerProfile.findMany({
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
                        idNumber: true,
                        dateOfBirth: true,
                    }
                },
                team: {
                    select: {
                        id: true,
                        name: true,
                    }
                },
            },
            orderBy: {
                user: {
                    name: 'asc'
                }
            },
        });

        const formattedPlayers = players.map(player => ({
            id: player.id,
            name: player.user.name,
            email: player.user.email,
            idNumber: player.user.idNumber,
            dateOfBirth: player.user.dateOfBirth,
            team: player.team?.name ?? 'Unassigned',
            teamId: player.team?.id,
            position: player.position ?? 'Not set',
            jerseyNumber: player.jerseyNumber,
            isCaptain: player.isCaptain,
        }));

        return NextResponse.json(formattedPlayers, { status: 200 });
    } catch (error) {
        console.error('GET Players API Error:', error);
        return NextResponse.json({ error: 'Internal Server Error while fetching players.' }, { status: 500 });
    }
}
