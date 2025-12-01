// src/app/api/coach/player/route.ts (Adding the DELETE handler)

import { NextResponse } from 'next/server';
import { auth } from '~/server/auth';
import { db } from '~/server/db'; 

const REQUIRED_ROLE = 'COACH';

// ... (Existing POST handler for adding players remains above) ...

export async function DELETE(req: Request) {
    try {
        // --- 1. Authentication and Authorization Check ---
        const session = await auth();

        if (!session || !session.user || session.user.role !== REQUIRED_ROLE) {
            return new NextResponse('Forbidden: Only Coaches can remove players.', { status: 403 });
        }
        
        const coachId = session.user.id;

        // --- 2. Extract Player Profile ID ---
        const { searchParams } = new URL(req.url);
        const profileId = searchParams.get('profileId'); 

        if (!profileId) {
            return new NextResponse('Missing player profile ID.', { status: 400 });
        }

        // --- 3. Find Coach's Team ID ---
        const coachUser = await db.user.findUnique({
            where: { id: coachId },
            select: { managedTeamId: true }
        });

        const teamId = coachUser?.managedTeamId;

        if (!teamId) {
            return new NextResponse('Coach is not associated with a team.', { status: 400 });
        }

        // --- 4. Verify Player is on Coach's Team ---
        const profileToDelete = await db.playerProfile.findUnique({
            where: { id: profileId },
            select: { teamId: true, user: { select: { name: true } } } // Select user name for response
        });

        if (!profileToDelete) {
            return new NextResponse('Player profile not found.', { status: 404 });
        }

        if (profileToDelete.teamId !== teamId) {
            // Coach is trying to delete a player from another team
            return new NextResponse('Forbidden: Cannot remove a player from a different team.', { status: 403 });
        }

        // --- 5. Delete PlayerProfile Record ---
        // Note: We only delete the PlayerProfile record, not the underlying User record.
        // This makes the player available to be added to another team later.
        await db.playerProfile.delete({
            where: { id: profileId },
        });

        // --- 6. Return Success ---
        return NextResponse.json({ 
            message: `Player ${profileToDelete.user.name || 'Profile'} successfully removed from the team.`,
        }, { status: 200 });

    } catch (error) {
        console.error('Coach Remove Player API Error:', error);
        return new NextResponse('Internal Server Error while removing player.', { status: 500 });
    }
}