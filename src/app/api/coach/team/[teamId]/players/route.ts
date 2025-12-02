// src/app/api/coach/team/[teamId]/players/route.ts

import { NextResponse } from 'next/server';
import { auth } from '~/server/auth';
import { db } from '~/server/db';
import { z } from 'zod';

const REQUIRED_ROLE = 'COACH';

// --- ZOD SCHEMAS ---

// Used for creating or updating a PlayerProfile
const PlayerSchema = z.object({
    // If you are creating a new player (POST), you typically need the userId
    userId: z.string().min(1, 'User ID is required for player association.').optional(), 
    
    // Optional for updates
    jerseyNumber: z.number().int().min(0).nullable().optional(), 
    position: z.string().max(50).nullable().optional(),
    isCaptain: z.boolean().optional(),
});

// --- HELPER FUNCTION: AUTHORIZATION ---

async function authorizeCoach(teamId: string) {
    const session = await auth();
    
    if (!session || !session.user) {
        return { authorized: false, status: 401, message: 'Unauthorized.' };
    }

    if (session.user.role !== REQUIRED_ROLE) {
        return { authorized: false, status: 403, message: 'Forbidden: Only Coaches can manage players.' };
    }

    if (session.user.managedTeamId !== teamId) {
        return { authorized: false, status: 403, message: 'Forbidden: You do not manage this team.' };
    }

    return { authorized: true, coachId: session.user.id };
}

// --- API HANDLERS ---

// GET: Retrieve the team roster
export async function GET(
    req: Request, 
    { params }: { params: Promise<{ teamId: string }> }
) {
    try {
        const { teamId } = await params;
        const authCheck = await authorizeCoach(teamId);
        if (!authCheck.authorized) {
            return new NextResponse(authCheck.message, { status: authCheck.status });
        }
        
        const players = await db.playerProfile.findMany({
            where: { teamId: teamId },
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
                        role: true,
                    },
                },
                playerStats: true, // Include stats for dashboard view
            },
            orderBy: {
                jerseyNumber: 'asc',
            },
        });

        return NextResponse.json(players, { status: 200 });

    } catch (error) {
        console.error('GET Roster API Error:', error);
        return new NextResponse('Internal Server Error while fetching roster.', { status: 500 });
    }
}


// POST: Create a new PlayerProfile for an existing User and add them to the team
export async function POST(
    req: Request, 
    { params }: { params: Promise<{ teamId: string }> }
) {
    try {
        const { teamId } = await params;
        const authCheck = await authorizeCoach(teamId);
        if (!authCheck.authorized) {
            return new NextResponse(authCheck.message, { status: authCheck.status });
        }

        const body = await req.json();
        const validatedData = PlayerSchema.safeParse(body);

        if (!validatedData.success) {
            return new NextResponse(`Invalid input: ${validatedData.error.errors.map(e => e.message).join(', ')}`, { status: 400 });
        }
        
        const { userId, jerseyNumber, position, isCaptain } = validatedData.data;

        if (!userId) {
            return new NextResponse('User ID is required to create a new player profile.', { status: 400 });
        }

        // 1. Check if user already has a PlayerProfile or is a Coach/Admin
        const user = await db.user.findUnique({
            where: { id: userId },
            select: { role: true, playerProfile: { select: { id: true } } }
        });

        if (!user || user.role !== 'PLAYER') {
            return new NextResponse('Cannot add user: user not found or is not a PLAYER.', { status: 400 });
        }

        if (user.playerProfile) {
             return new NextResponse('User already has an existing player profile.', { status: 400 });
        }

        // 2. Create the PlayerProfile
        const newPlayer = await db.playerProfile.create({
            data: {
                userId: userId,
                teamId: teamId,
                jerseyNumber: jerseyNumber,
                position: position,
                isCaptain: isCaptain ?? false, // Default to false if not provided
            },
            include: { user: true },
        });

        // 3. Initialize player stats cache (crucial for clean schema relations)
        await db.playerStats.create({
            data: { playerId: newPlayer.id }
        });

        return NextResponse.json(
            { message: `Player ${newPlayer.user.name ?? newPlayer.userId} added to the team roster.`, player: newPlayer },
            { status: 201 }
        );

    } catch (error) {
        // Check for unique constraint violation (e.g., jersey number conflict)
        if (error instanceof Error && 'code' in error && error.code === 'P2002') {
             return new NextResponse('Conflict: A player with that jersey number already exists on this team.', { status: 409 });
        }
        console.error('POST Player API Error:', error);
        return new NextResponse('Internal Server Error while adding player.', { status: 500 });
    }
}

// NOTE: PUT/DELETE/GET-Single player logic is handled in the dynamic route 
// src/app/api/coach/team/[teamId]/players/[playerId]/route.ts