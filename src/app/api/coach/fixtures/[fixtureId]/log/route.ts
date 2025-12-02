// src/app/api/coach/fixtures/[fixtureId]/log/route.ts

import { NextResponse } from 'next/server';
import { auth } from '~/server/auth';
import { db } from '~/server/db';
import { z } from 'zod';

// ✅ Correct Prisma imports
import { LogType, MatchStatus } from "../../../../../../../generated/prisma";

// --- CONSTANTS ---
const REQUIRED_ROLE = "COACH";

// --- ZOD SCHEMA ---
const MatchLogSchema = z.object({
  playerId: z.string().min(1, "Player ID is required."),
  eventType: z.nativeEnum(LogType),
  minute: z.number().int().min(1).max(150, "Minute must be realistic."),

  goalScorerId: z.string().optional(),
  assistPlayerId: z.string().optional(),
  detail: z.string().optional(),
});

// --- API HANDLER ---
export async function POST(
  req: Request,
  { params }: { params: Promise<{ fixtureId: string }> },
) {
  try {
    const session = await auth();
    const { fixtureId } = await params;

    // 1. AUTH
    if (!session || !session.user || session.user.role !== REQUIRED_ROLE) {
      return new NextResponse("Forbidden: Only Coaches can log match events.", {
        status: 403,
      });
    }

    const coachTeamId = session.user.managedTeamId;

    // 2. VALIDATION
    const body = await req.json();
    const validated = MatchLogSchema.safeParse(body);

    if (!validated.success) {
      return new NextResponse(
        validated.error.errors.map((e) => e.message).join(", "),
        { status: 400 },
      );
    }

    const { playerId, eventType, minute, assistPlayerId, detail } =
      validated.data;

    // 3. FIXTURE CHECK
    const fixture = await db.fixture.findUnique({
      where: { id: fixtureId },
      select: { homeTeamId: true, awayTeamId: true, status: true },
    });

    if (!fixture) {
      return new NextResponse("Fixture not found.", { status: 404 });
    }

    if (fixture.status !== MatchStatus.LIVE) {
      return new NextResponse(`Match is not live: ${fixture.status}`, {
        status: 400,
      });
    }

    // 4. PLAYER CHECK
    const player = await db.playerProfile.findUnique({
      where: { id: playerId },
      select: { teamId: true },
    });

    if (
      !player ||
      (player.teamId !== fixture.homeTeamId &&
        player.teamId !== fixture.awayTeamId)
    ) {
      return new NextResponse("Player not in this fixture.", { status: 400 });
    }

    if (player.teamId !== coachTeamId) {
      return new NextResponse(
        "Forbidden: You can only log events for your own team.",
        { status: 403 },
      );
    }

    // 5. CREATE MATCH LOG
    const matchLog = await db.matchLog.create({
      data: {
        fixtureId,
        logEntry:
          detail || `${eventType} for player ${playerId} at minute ${minute}.`,
      },
    });

    // 6. PLAYER LOG + STATS UPDATE
    const [playerLog] = await db.$transaction([
      // MATCH PLAYER LOG
      db.matchPlayerLog.create({
        data: {
          logId: matchLog.id,
          playerId,
          eventType,
          minute,
          goalScorerId: eventType === LogType.GOAL ? playerId : null,
          assistPlayerId: eventType === LogType.ASSIST ? assistPlayerId : null,
        },
      }),

      // PLAYER STATS UPDATE
      db.playerStats.update({
        where: { playerId },
        data: {
          goals: eventType === LogType.GOAL ? { increment: 1 } : undefined,
          assists: eventType === LogType.ASSIST ? { increment: 1 } : undefined,
          yellowCards:
            eventType === LogType.YELLOW_CARD ? { increment: 1 } : undefined,
          redCards:
            eventType === LogType.RED_CARD ? { increment: 1 } : undefined,
        },
      }),
    ]);

    return NextResponse.json(
      {
        message: `${eventType} logged successfully.`,
        log: playerLog,
      },
      { status: 201 },
    );
  } catch (error) {
    console.error("Match Log API Error:", error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}
