// src/app/api/coach/team/[teamId]/game/route.ts

import { NextResponse } from 'next/server';
import { auth } from '~/server/auth';
import { db } from '~/server/db';
import { z } from 'zod';
import { MatchStatus } from "../../../../../../../generated/prisma";

const REQUIRED_ROLE = "COACH";

// Schema for the Fixture creation request body
const CreateFixtureSchema = z.object({
  opponentTeamId: z.string().min(1, "Opponent Team ID is required."),
  scheduledTime: z
    .string()
    .datetime({ message: "Must be a valid ISO date string." }),
  venue: z.string().min(1, "Venue is required.").max(255),
  isHomeGame: z.boolean().default(true).optional(),
});

export async function POST(
  req: Request,
  { params }: { params: Promise<{ teamId: string }> },
) {
  try {
    const session = await auth();
    const { teamId: homeTeamId } = await params; // Rename teamId to homeTeamId for clarity

    // 1. Authorization: Check user role and team management
    if (!session || !session.user || session.user.role !== REQUIRED_ROLE) {
      return new NextResponse("Forbidden: Only Coaches can schedule games.", {
        status: 403,
      });
    }
    if (session.user.managedTeamId !== homeTeamId) {
      return new NextResponse("Forbidden: You do not manage this team.", {
        status: 403,
      });
    }

    // 2. Input Validation
    const body = await req.json();
    const validatedData = CreateFixtureSchema.safeParse(body);

    if (!validatedData.success) {
      return new NextResponse(
        `Invalid input: ${validatedData.error.errors.map((e) => e.message).join(", ")}`,
        { status: 400 },
      );
    }

    const {
      opponentTeamId: awayTeamId,
      scheduledTime,
      venue,
      isHomeGame,
    } = validatedData.data;

    // Prevent scheduling a game against itself
    if (homeTeamId === awayTeamId) {
      return new NextResponse(
        "Bad Request: Cannot schedule a fixture against your own team.",
        { status: 400 },
      );
    }

    // 3. Create the Fixture record
    const newFixture = await db.fixture.create({
      data: {
        // Determine which ID goes into which field based on isHomeGame
        homeTeamId: isHomeGame ? homeTeamId : awayTeamId,
        awayTeamId: isHomeGame ? awayTeamId : homeTeamId,

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
      {
        message: `Fixture between ${newFixture.homeTeam.name} and ${newFixture.awayTeam.name} successfully scheduled.`,
        fixture: newFixture,
      },
      { status: 201 },
    );
  } catch (error) {
    console.error("Fixture POST API Error:", error);
    return new NextResponse("Internal Server Error while scheduling fixture.", {
      status: 500,
    });
  }
}