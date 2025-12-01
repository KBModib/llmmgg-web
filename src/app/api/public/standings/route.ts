// src/app/api/public/standings/route.ts

import { NextResponse } from 'next/server';
import { db } from '~/server/db';
// No auth/Prisma import needed as this is a simple public GET

// --- API HANDLER: GET (PUBLIC STANDINGS) ---

export async function GET() {
    try {
        const standings = await db.teamStats.findMany({
            select: {
                team: { 
                    select: { 
                        name: true, 
                        id: true,
                    } 
                },
                wins: true,
                losses: true,
                draws: true,
                points: true,
                goalsFor: true,
                goalsAgainst: true,
                goalDifference: true,
            },
            // Order by Points (desc), then Goal Difference (desc), then Goals For (desc)
            orderBy: [
                { points: 'desc' },
                { goalDifference: 'desc' },
                { goalsFor: 'desc' },
            ],
        });

        // Map the result to flatten the structure for cleaner consumption
        const formattedStandings = standings.map(stat => ({
            teamId: stat.team.id,
            teamName: stat.team.name,
            P: stat.wins + stat.losses + stat.draws, // Matches Played
            W: stat.wins,
            D: stat.draws,
            L: stat.losses,
            GF: stat.goalsFor,
            GA: stat.goalsAgainst,
            GD: stat.goalDifference,
            Pts: stat.points,
        }));

        return NextResponse.json(formattedStandings, { status: 200 });

    } catch (error) {
        console.error('Public Standings API Error:', error);
        return new NextResponse('Internal Server Error while fetching standings.', { status: 500 });
    }
}