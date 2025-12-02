// src/app/api/coach/fixtures/[fixtureId]/score/route.ts

import { NextResponse } from "next/server";
import { auth } from "~/server/auth";
import { db } from "~/server/db";
import { z } from "zod";
import { MatchStatus } from "../../../../../../../generated/prisma";

const REQUIRED_ROLE = "COACH";

// --- ZOD SCHEMA ---
const UpdateScoreSchema = z.object({
  homeScore: z.number().int().min(0),
  awayScore: z.number().int().min(0),
});

// --- HELPER FUNCTION: STATS CALCULATION (UNCHANGED) ---
function calculateStats(homeScore: number, awayScore: number) {
  const homeGoalsFor = homeScore;
  const homeGoalsAgainst = awayScore;
  let homeStats = { wins: 0, losses: 0, draws: 0, points: 0 };
  let awayStats = { wins: 0, losses: 0, draws: 0, points: 0 };

  if (homeScore > awayScore) {
    homeStats.wins = 1;
    homeStats.points = 3;
    awayStats.losses = 1;
  } else if (awayScore > homeScore) {
    awayStats.wins = 1;
    awayStats.points = 3;
    homeStats.losses = 1;
  } else {
    homeStats.draws = 1;
    homeStats.points = 1;
    awayStats.draws = 1;
    awayStats.points = 1;
  }

  return {
    home: {
      ...homeStats,
      goalsFor: homeGoalsFor,
      goalsAgainst: homeGoalsAgainst,
      goalDifference: homeGoalsFor - homeGoalsAgainst,
    },
    away: {
      ...awayStats,
      goalsFor: awayScore,
      goalsAgainst: homeScore,
      goalDifference: awayScore - homeScore,
    },
  };
}

// --- API HANDLER: PATCH (UPDATE SCORE & STATUS) ---

export const PATCH = async (
  req: Request,
  { params }: { params: Promise<{ fixtureId: string }> },
) => {
  try {
    const session = await auth();
    const { fixtureId } = await params;

    if (
      !session ||
      session.user.role !== REQUIRED_ROLE ||
      !session.user.managedTeamId
    ) {
      return new NextResponse("Forbidden.", { status: 403 });
    }
    const coachTeamId = session.user.managedTeamId;

    const body = await req.json();
    const validatedData = UpdateScoreSchema.safeParse(body);

    if (!validatedData.success) {
      return new NextResponse(
        `Invalid input: ${validatedData.error.errors[0]?.message}`,
        { status: 400 },
      );
    }

    const { homeScore, awayScore } = validatedData.data;

    const fixture = await db.fixture.findUnique({
      where: { id: fixtureId },
      select: { homeTeamId: true, awayTeamId: true, status: true },
    });

    if (!fixture) {
      return new NextResponse("Fixture not found.", { status: 404 });
    }
    if (
      fixture.homeTeamId !== coachTeamId &&
      fixture.awayTeamId !== coachTeamId
    ) {
      return new NextResponse("Forbidden: Not your fixture.", { status: 403 });
    }
    if (fixture.status === MatchStatus.COMPLETED) {
      return new NextResponse("Conflict: Match already completed.", {
        status: 409,
      });
    }

    const stats = calculateStats(homeScore, awayScore);

    const [updatedFixture] = await db.$transaction([
      db.fixture.update({
        where: { id: fixtureId },
        data: {
          homeScore: homeScore,
          awayScore: awayScore,
          status: MatchStatus.COMPLETED,
        },
      }),
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
      { message: `Fixture ${fixtureId} finalized.`, fixture: updatedFixture },
      { status: 200 },
    );
  } catch (error) {
    console.error("Score Update API Error:", error);
    return new NextResponse("Internal Server Error.", { status: 500 });
  }
};