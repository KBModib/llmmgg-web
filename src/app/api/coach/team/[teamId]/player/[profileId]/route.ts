// src/app/api/coach/team/[teamId]/player/[profileId]/route.ts

import { NextResponse } from 'next/server';
import { auth } from '~/server/auth';
import { db } from '~/server/db';
import { z } from 'zod'; // Use Zod for input validation

const REQUIRED_ROLE = 'COACH';

// Define the schema for the incoming PUT request body
const UpdatePlayerSchema = z.object({
    jerseyNumber: z.number().int().positive().nullable(), // Nullable since jerseys aren't always required
    position: z.string().max(50).nullable(),
    isCaptain: z.boolean(),
});

// --- DELETE Handler (from previous step, included for completeness) ---

export async function DELETE(
    req: Request, 
    { params }: { params: { teamId: string, profileId: string } }
) {
    // ... [DELETE logic as implemented previously] ...
    // Note: This is the same logic as the previous response
    try {
        const session = await auth();
        const { teamId, profileId } = params;

        // 1. Authorization: Check user role
        if (!session || !session.user || session.user.role !== REQUIRED_ROLE) {
            return new NextResponse('Forbidden: Only Coaches can remove players.', { status: 403 });
        }

        const coachId = session.user.id;

        // 2. Authorization: Check if the coach manages this specific team
        const coachProfile = await db.user.findUnique({
            where: { id: coachId },
            select: { managedTeamId: true },
        });

        if (coachProfile?.managedTeamId !== teamId) {
            return new NextResponse('Forbidden: You do not manage this team.', { status: 403 });
        }
        
        // 3. Find the PlayerProfile and its linked User ID
        const playerProfile = await db.playerProfile.findUnique({
            where: { id: profileId },
            select: { userId: true, teamId: true }
        });

        if (!playerProfile) {
            return new NextResponse('Not Found: Player profile does not exist.', { status: 404 });
        }

        // 4. Verify the profile belongs to the coach's team
        if (playerProfile.teamId !== teamId) {
            return new NextResponse('Forbidden: Player does not belong to your team.', { status: 403 });
        }

        // 5. Transaction: Delete PlayerProfile and the associated stub User
        await db.$transaction([
            db.playerProfile.delete({
                where: { id: profileId }
            }),
            db.user.delete({
                where: { id: playerProfile.userId }
            })
        ]);

        return NextResponse.json(
            { message: `Player profile ${profileId} and linked user successfully removed.` }, 
            { status: 200 }
        );

    } catch (error) {
        console.error('Player DELETE API Error:', error);
        return new NextResponse('Internal Server Error while removing player.', { status: 500 });
    }
}


// --- PUT Handler: Update an existing PlayerProfile ---

export async function PUT(
    req: Request, 
    { params }: { params: { teamId: string, profileId: string } }
) {
    try {
        const session = await auth();
        const { teamId, profileId } = params;
        
        // 1. Authorization: Check user role
        if (!session || !session.user || session.user.role !== REQUIRED_ROLE) {
            return new NextResponse('Forbidden: Only Coaches can update players.', { status: 403 });
        }

        const coachId = session.user.id;

        // 2. Authorization: Check if the coach manages this specific team
        const coachProfile = await db.user.findUnique({
            where: { id: coachId },
            select: { managedTeamId: true },
        });

        if (coachProfile?.managedTeamId !== teamId) {
            return new NextResponse('Forbidden: You do not manage this team.', { status: 403 });
        }

        // 3. Input Validation
        const body = await req.json();
        const validatedData = UpdatePlayerSchema.safeParse(body);

        if (!validatedData.success) {
            return new NextResponse(
                `Invalid input: ${validatedData.error.errors.map(e => e.message).join(', ')}`, 
                { status: 400 }
            );
        }

        const { jerseyNumber, position, isCaptain } = validatedData.data;

        // 4. Find the PlayerProfile and verify ownership
        const playerProfile = await db.playerProfile.findUnique({
            where: { id: profileId },
            select: { teamId: true }
        });

        if (!playerProfile) {
            return new NextResponse('Not Found: Player profile does not exist.', { status: 404 });
        }

        // 5. Verify the profile belongs to the coach's team
        if (playerProfile.teamId !== teamId) {
            return new NextResponse('Forbidden: Player does not belong to your team.', { status: 403 });
        }
        
        // 6. Update the PlayerProfile
        const updatedPlayer = await db.playerProfile.update({
            where: { id: profileId },
            data: {
                jerseyNumber,
                position,
                isCaptain,
            },
            select: {
                id: true,
                isCaptain: true,
                position: true,
                jerseyNumber: true,
            }
        });

        return NextResponse.json(
            { 
                message: `Player profile ${profileId} successfully updated.`,
                player: updatedPlayer
            }, 
            { status: 200 }
        );

    } catch (error) {
        console.error('Player PUT API Error:', error);
        return new NextResponse('Internal Server Error while updating player.', { status: 500 });
    }
}