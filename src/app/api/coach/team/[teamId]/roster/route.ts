// src/app/api/coach/team/[teamId]/roster/route.ts

import { NextResponse } from 'next/server';
import { auth } from '~/server/auth';
import { db } from '~/server/db';

const REQUIRED_ROLE = 'COACH';

// Handler for GET request (Fetching the entire team roster)
export async function GET(
    req: Request, 
    { params }: { params: Promise<{ teamId: string }> }
) {
    try {
        const session = await auth();
        const { teamId } = await params;

        // 1. Authorization: Check user role
        if (!session || !session.user || session.user.role !== REQUIRED_ROLE) {
            return new NextResponse('Forbidden: Only Coaches can view the roster.', { status: 403 });
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
        
        // 3. Fetch the Roster (PlayerProfiles)
        // We use Prisma's include feature to join the PlayerProfile data with the User data 
        // to retrieve the player's name (which is stored on the User model).
        const roster = await db.playerProfile.findMany({
            where: { 
                teamId: teamId,
            },
            select: {
                id: true, // This is the PlayerProfile ID
                jerseyNumber: true,
                position: true,
                isCaptain: true,
                teamId: true,
                user: { // Select the related User data
                    select: {
                        name: true, // The player's name
                        email: true,
                        id: true, // The User ID
                    }
                }
            },
            orderBy: {
                jerseyNumber: 'asc',
            },
        });

        // 4. Transform the data for the frontend
        // Flatten the structure for easier consumption (PlayerProfile + User.name)
        const playersData = roster.map(playerProfile => ({
            id: playerProfile.id,
            name: playerProfile.user?.name || '[Name Missing]', // Use User.name
            jerseyNumber: playerProfile.jerseyNumber,
            position: playerProfile.position,
            isCaptain: playerProfile.isCaptain,
            teamId: playerProfile.teamId,
            userId: playerProfile.user?.id,
        }));


        return NextResponse.json(playersData, { status: 200 });

    } catch (error) {
        console.error('Roster GET API Error:', error);
        return new NextResponse('Internal Server Error while fetching roster.', { status: 500 });
    }
}