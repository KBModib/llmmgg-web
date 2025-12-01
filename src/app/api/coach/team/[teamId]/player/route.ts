// src/app/api/coach/team/[teamId]/player/route.ts

import { NextResponse } from 'next/server';
import { auth } from '~/server/auth';
import { db } from '~/server/db';
import { z } from 'zod'; 

const REQUIRED_ROLE = 'COACH';

// Schema for input validation when creating a new player
const createPlayerSchema = z.object({
    name: z.string().trim().min(2, 'Player name is required.'),
    jerseyNumber: z.number().int().min(1, 'Jersey number must be between 1 and 99.').max(99),
    position: z.string().trim().min(2, 'Position is required.'),
    isCaptain: z.boolean().default(false).optional(),
});

// Handler for POST request (Creating a new player)
export async function POST(
    req: Request, 
    { params }: { params: { teamId: string } }
) {
    try {
        const session = await auth();
        const { teamId } = params;

        // 1. Authorization: Check user role
        if (!session || !session.user || session.user.role !== REQUIRED_ROLE) {
            return new NextResponse('Forbidden: Only Coaches can add players.', { status: 403 });
        }

        const coachId = session.user.id;
        const body = await req.json();

        // 2. Authorization: Check if the coach manages this specific team
        const coachProfile = await db.user.findUnique({
            where: { id: coachId },
            select: { managedTeamId: true },
        });

        if (coachProfile?.managedTeamId !== teamId) {
            return new NextResponse('Forbidden: You do not manage this team.', { status: 403 });
        }
        
        // 3. Validation
        const validationResult = createPlayerSchema.safeParse(body);
        if (!validationResult.success) {
            return new NextResponse(JSON.stringify(validationResult.error), { status: 400 });
        }
        
        const { name, jerseyNumber, position, isCaptain } = validationResult.data;

        // 4. Create the Player Record

        const stubUser = await db.user.create({
            data: {
                email: `coach_added_${Date.now()}@temp.com`, // Temporary unique email
                name: name, // Use the name provided by the coach
                password: 'placeholder-password-for-coach-added-player', 
                role: 'PLAYER',
                // Other fields left as default/null
            },
            select: { id: true, name: true }
        });

        const newPlayerProfile = await db.playerProfile.create({ // <-- CORRECTED MODEL NAME
            data: {
                userId: stubUser.id, // Link to the newly created stub User
                jerseyNumber,
                position,
                isCaptain: isCaptain ?? false, 
                teamId: teamId, 
            },
            select: {
                id: true,
                jerseyNumber: true,
                position: true,
                isCaptain: true,
                // Select the name from the related User model
                user: {
                    select: { name: true }
                }
            },
        });

        return NextResponse.json(
            { 
                message: `${stubUser.name} successfully added to the team roster.`,
                player: {
                    ...newPlayerProfile,
                    name: stubUser.name // Include the name in the final response object
                },
            }, 
            { status: 201 }
        );

    } catch (error) {
        console.error('Player POST API Error:', error);

        // Handle unique constraint violation (e.g., if jersey number must be unique per team)
        if (error instanceof Error && error.message.includes('Unique constraint failed')) {
            return new NextResponse('Jersey number is already taken on this team.', { status: 409 });
        }
        
        return new NextResponse('Internal Server Error while adding player.', { status: 500 });
    }
}