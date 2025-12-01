// src/app/api/coach/fixtures/[fixtureId]/score/route.ts

import { NextResponse } from 'next/server';
import { auth } from '~/server/auth';
import { db } from '~/server/db';
import { z } from 'zod';
import { Prisma } from '@prisma/client'; // ✅ CORRECTED IMPORT

const REQUIRED_ROLE = 'COACH';
const MatchStatus = Prisma.MatchStatus;

// --- ZOD SCHEMAS ---
const UpdateScoreSchema = z.object({
    homeScore: z.number().int().min(0, 'Score must be non-negative.'),
    awayScore: z.number().int().min(0, 'Score must be non-negative.'),
});

// --- HELPER FUNCTION: STATS CALCULATION ---

function calculateStats(homeScore: number, awayScore: number) {
    const homeGoalsFor = homeScore;
    const homeGoalsAgainst = awayScore;
    const awayGoalsFor = awayScore;
    const awayGoalsAgainst = homeScore;

    const homeGoalDiff = homeGoalsFor - homeGoalsAgainst;
    const awayGoalDiff = awayGoalsFor - awayGoalsAgainst;

    let homeStats = { wins: 0, losses: 0, draws: 0, points: 0 };
    let awayStats = { wins: 0, losses: 0, draws: 0, points: 0 };

    if (homeScore > awayScore) {
        homeStats.wins = 1; homeStats.points = 3;
        awayStats.losses = 1;
    } else if (awayScore > homeScore) {
        awayStats.wins = 1; awayStats.points = 3;
        homeStats.losses = 1;
    } else {
        homeStats.draws = 1; homeStats.points = 1;
        awayStats.draws = 1; awayStats.points = 1;
    }

    return {
        home: { ...homeStats, goalsFor: homeGoalsFor, goalsAgainst: homeGoalsAgainst, goalDifference: homeGoalDiff },
        away: { ...awayStats, goalsFor: awayGoalsFor, goalsAgainst: awayGoalsAgainst, goalDifference: awayGoalDiff },
    };
}


// --- API HANDLER: PATCH (UPDATE SCORE & STATUS) ---

export async function PATCH(
    req: Request, 
    { params }: { params: { fixtureId: string } }
) {
    try {
        const session = await auth();
        const { fixtureId } = params;

        // 1. Authorization
        if (!session || !session.user || session.user.role !== REQUIRED_ROLE) {
            return new NextResponse('Forbidden: Only Coaches can update match scores.', { status: 403 });
        }
        const coachTeamId = session.user.managedTeamId;

        // 2. Validation
        const body = await req.json();
        const validatedData = UpdateScoreSchema.safeParse(body);

        if (!validatedData.success) {
            return new NextResponse(`Invalid input: ${validatedData.error.errors.map(e => e.message).join(', ')}`, { status: 400 });
        }

        const { homeScore, awayScore } = validatedData.data;

        // 3. Fixture Ownership Check
        const fixture = await db.fixture.findUnique({
            where: { id: fixtureId },
            select: { id: true, homeTeamId: true, awayTeamId: true, status: true }
        });

        if (!fixture) {
            return new NextResponse('Fixture not found.', { status: 404 });
        }

        if (fixture.homeTeamId !== coachTeamId && fixture.awayTeamId !== coachTeamId) {
            return new NextResponse('Forbidden: You can only update scores for your own fixtures.', { status: 403 });
        }
        
        if (fixture.status === MatchStatus.COMPLETED) {
            return new NextResponse('Conflict: This fixture is already marked as COMPLETED.', { status: 409 });
        }


        // 4. Calculate Stats
        const stats = calculateStats(homeScore, awayScore);

        // 5. Execute Transaction (Atomic Update)
        const [updatedFixture, homeStatsUpdate, awayStatsUpdate] = await db.$transaction([
            // a) Update Fixture Score and Status
            db.fixture.update({
                where: { id: fixtureId },
                data: {
                    homeScore: homeScore,
                    awayScore: awayScore,
                    status: MatchStatus.COMPLETED,
                },
            }),

            // b) Update Home Team Stats
            db.teamStats.update({
                where: { teamId: fixture.homeTeamId },
                data: {
                    wins: { increment: stats.home.wins },
                    losses: { increment: stats.home.losses },
                    draws: { increment: stats.home.draws },
                    points: { increment: stats.home.points },
                    goalsFor: { increment: stats.home.goalsFor },
                    goalsAgainst: { increment: stats.home.goalsAgainst },
                    goalDifference: { increment: stats.home.goalDifference },
                },
            }),

            // c) Update Away Team Stats
            db.teamStats.update({
                where: { teamId: fixture.awayTeamId },
                data: {
                    wins: { increment: stats.away.wins },
                    losses: { increment: stats.away.losses },
                    draws: { increment: stats.away.draws },
                    points: { increment: stats.away.points },
                    goalsFor: { increment: stats.away.goalsFor },
                    goalsAgainst: { increment: stats.away.goalsAgainst },
                    goalDifference: { increment: stats.away.goalDifference },
                },
            }),
        ]);

        return NextResponse.json(
            { 
                message: `Fixture ${fixtureId} finalized. Score: ${updatedFixture.homeScore}-${updatedFixture.awayScore}. Team stats updated.`,
                fixture: updatedFixture,
            }, 
            { status: 200 }
        );

    } catch (error) {
        console.error('Score Update API Error:', error);
        return new NextResponse('Internal Server Error while finalizing match score and stats.', { status: 500 });
    }
}