// src/app/api/coach/team/[teamId]/fixtures/route.ts

import { NextResponse } from 'next/server';
import { auth } from '~/server/auth';
import { db } from '~/server/db';
import { z } from 'zod';
import { MatchStatus } from "../../../../../../../generated/prisma";

const REQUIRED_ROLE = "COACH";

// --- ZOD SCHEMAS ---
const CreateFixtureSchema = z.object({
  opponentTeamId: z.string().min(1, "Opponent Team ID is required."),
  scheduledTime: z
    .string()
    .datetime({ message: "Must be a valid ISO date string." }),
  venue: z.string().min(1, "Venue is required.").max(255),
  isHomeGame: z.boolean().default(true).optional(),
});

// --- AUTHORIZATION HELPER ---
async function authorizeCoach(teamId: string) {
  const session = await auth();

  if (!session || !session.user) {
    return { authorized: false, status: 401, message: "Unauthorized." };
  }
  if (session.user.role !== REQUIRED_ROLE) {
    return {
      authorized: false,
      status: 403,
      message: "Forbidden: Only Coaches can view/manage fixtures.",
    };
  }
  if (session.user.managedTeamId !== teamId) {
    return {
      authorized: false,
      status: 403,
      message: "Forbidden: You do not manage this team.",
    };
  }
  return { authorized: true };
}

// --- API HANDLER: GET (FIXTURE RETRIEVAL) ---
export async function GET(
  req: Request,
  { params }: { params: Promise<{ teamId: string }> },
) {
  try {
    const { teamId } = await params;
    const authCheck = await authorizeCoach(teamId);
    if (!authCheck.authorized) {
      return new NextResponse(authCheck.message, { status: authCheck.status });
    }

    const myTeamId = teamId;
    const fixtures = await db.fixture.findMany({
      where: {
        OR: [{ homeTeamId: myTeamId }, { awayTeamId: myTeamId }],
      },
      select: {
        id: true,
        scheduledTime: true,
        venue: true,
        status: true,
        homeScore: true,
        awayScore: true,
        homeTeam: { select: { id: true, name: true } },
        awayTeam: { select: { id: true, name: true } },
      },
      orderBy: { scheduledTime: "asc" },
    });

    const formattedFixtures = fixtures.map((fixture) => {
      const isHomeGame = fixture.homeTeam.id === myTeamId;
      const opponent = isHomeGame ? fixture.awayTeam : fixture.homeTeam;

      return {
        id: fixture.id,
        scheduledTime: fixture.scheduledTime,
        venue: fixture.venue,
        status: fixture.status,
        opponentName: opponent.name,
        isHomeGame: isHomeGame,
        score:
          fixture.status === MatchStatus.COMPLETED
            ? `${fixture.homeScore} - ${fixture.awayScore}`
            : null,
      };
    });

    return NextResponse.json(formattedFixtures, { status: 200 });
  } catch (error) {
    console.error("GET Fixtures API Error:", error);
    return new NextResponse("Internal Server Error while fetching fixtures.", {
      status: 500,
    });
  }
}

// --- API HANDLER: POST (FIXTURE CREATION) ---
export async function POST(
  req: Request,
  { params }: { params: Promise<{ teamId: string }> },
) {
  try {
    const { teamId } = await params;
    const authCheck = await authorizeCoach(teamId);
    if (!authCheck.authorized) {
      return new NextResponse(authCheck.message, { status: authCheck.status });
    }

    const homeTeamId = teamId;
    const body = await req.json();
    const validatedData = CreateFixtureSchema.safeParse(body);

    if (!validatedData.success) {
      return new NextResponse(
        `Invalid input: ${validatedData.error.errors.map((e) => e.message).join(", ")}`,
        { status: 400 },
      );
    }

    const {
      opponentTeamId: otherTeamId,
      scheduledTime,
      venue,
      isHomeGame,
    } = validatedData.data;

    if (homeTeamId === otherTeamId) {
      return new NextResponse(
        "Bad Request: Cannot schedule a fixture against your own team.",
        { status: 400 },
      );
    }

    const newFixture = await db.fixture.create({
      data: {
        homeTeamId: isHomeGame ? homeTeamId : otherTeamId,
        awayTeamId: isHomeGame ? otherTeamId : homeTeamId,
        scheduledTime: new Date(scheduledTime),
        venue: venue,
        status: MatchStatus.SCHEDULED,
      },
      select: {
        id: true,
        scheduledTime: true,
        venue: true,
        homeTeam: { select: { name: true } },
        awayTeam: { select: { name: true } },
      },
    });

    return NextResponse.json(
      { message: `Fixture scheduled.`, fixture: newFixture },
      { status: 201 },
    );
  } catch (error) {
    console.error("Fixture POST API Error:", error);
    return new NextResponse("Internal Server Error while scheduling fixture.", {
      status: 500,
    });
  }
}