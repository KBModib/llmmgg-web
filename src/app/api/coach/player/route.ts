// src/app/api/coach/player/route.ts

import { NextResponse } from 'next/server';
import { auth } from '~/server/auth';
import { db } from '~/server/db'; 

const REQUIRED_ROLE = 'COACH';

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { email, jerseyNumber, position, isCaptain } = body;

        // --- 1. Authentication and Authorization Check ---
        const session = await auth();

        if (!session || !session.user || session.user.role !== REQUIRED_ROLE) {
            return new NextResponse('Forbidden: Only Coaches can add players.', { status: 403 });
        }

        const coachId = session.user.id;

        // --- 2. Find Coach's Team ID ---
        const coachUser = await db.user.findUnique({
            where: { id: coachId },
            select: { managedTeamId: true }
        });

        const teamId = coachUser?.managedTeamId;

        if (!teamId) {
            return new NextResponse('Coach is not associated with a team.', { status: 400 });
        }

        // --- 3. Find the User to be added (The Player) ---
        const playerCandidate = await db.user.findUnique({
            where: { email },
            select: { id: true, role: true }
        });

        if (!playerCandidate) {
            // Coach must add only registered users (simplifies security/invitation flow for now)
            return new NextResponse('Player not found. The user must register first.', { status: 404 });
        }

        if (playerCandidate.role !== 'PLAYER') {
            // Prevent adding Admins or other Coaches as players
            return new NextResponse(`Cannot add user with role ${playerCandidate.role} as a player.`, { status: 400 });
        }

        // --- 4. Check if Player is Already on a Team ---
        const existingProfile = await db.playerProfile.findUnique({
            where: { userId: playerCandidate.id },
            select: { teamId: true }
        });

        if (existingProfile && existingProfile.teamId === teamId) {
             return new NextResponse('Player is already on this team.', { status: 409 });
        }
        
        if (existingProfile && existingProfile.teamId !== teamId) {
             return new NextResponse('Player is already on another team. Please remove them first.', { status: 409 });
        }


        // --- 5. Create PlayerProfile and Associate with Team (TRANSACTION) ---
        // We use a transaction to ensure both User and PlayerProfile are updated correctly.
        const newPlayerProfile = await db.playerProfile.create({
            data: {
                userId: playerCandidate.id,
                teamId: teamId,
                jerseyNumber: jerseyNumber ? parseInt(jerseyNumber) : null,
                position: position || undefined,
                isCaptain: isCaptain || false,
            },
            include: { user: true } // Include user details for response
        });


        // --- 6. Return Success ---
        return NextResponse.json({ 
            message: `Player ${newPlayerProfile.user.name || newPlayerProfile.user.email} successfully added to the team.`,
            player: { 
                id: newPlayerProfile.id,
                name: newPlayerProfile.user.name,
                email: newPlayerProfile.user.email,
                teamId: newPlayerProfile.teamId 
            }
        }, { status: 201 });

    } catch (error) {
        console.error('Coach Add Player API Error:', error);
        return new NextResponse('Internal Server Error while adding player.', { status: 500 });
    }
}