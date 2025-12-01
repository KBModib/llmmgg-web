// src/app/api/public/leaderboard/route.ts

import { NextResponse } from 'next/server';
import { db } from '~/server/db';
// No auth/Prisma import needed as this is a simple public GET

// --- API HANDLER: GET (PUBLIC LEADERBOARD) ---

export async function GET() {
    try {
        // Fetch players sorted by Goals (Top Scorer)
        const topScorers = await db.playerStats.findMany({
            where: { goals: { gt: 0 } },
            select: {
                goals: true,
                player: {
                    select: {
                        user: { select: { name: true } },
                        team: { select: { name: true } },
                    }
                }
            },
            orderBy: { goals: 'desc' },
            take: 10, // Limit to Top 10
        });

        // Fetch players sorted by Assists (Top Assister)
        const topAssisters = await db.playerStats.findMany({
            where: { assists: { gt: 0 } },
            select: {
                assists: true,
                player: {
                    select: {
                        user: { select: { name: true } },
                        team: { select: { name: true } },
                    }
                }
            },
            orderBy: { assists: 'desc' },
            take: 10, // Limit to Top 10
        });

        // Format and combine the results
        const scorers = topScorers.map(s => ({
            name: s.player.user.name,
            team: s.player.team.name,
            goals: s.goals,
        }));

        const assisters = topAssisters.map(a => ({
            name: a.player.user.name,
            team: a.player.team.name,
            assists: a.assists,
        }));


        return NextResponse.json({ 
            topScorers: scorers, 
            topAssisters: assisters 
        }, { status: 200 });

    } catch (error) {
        console.error('Public Leaderboard API Error:', error);
        return new NextResponse('Internal Server Error while fetching leaderboards.', { status: 500 });
    }
}