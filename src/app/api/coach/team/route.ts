import { NextResponse } from 'next/server';
import { auth } from '~/server/auth';
import { db } from '~/server/db'; 

const REQUIRED_ROLE = 'COACH';

export async function GET() {
    try {
        const session = await auth();
        
        if (!session || !session.user || session.user.role !== REQUIRED_ROLE) {
            return new NextResponse('Forbidden: Only Coaches can access this resource.', { status: 403 });
        }

        const coachId = session.user.id;

        // --- 1. Find the Team ID managed by this Coach ---
        // We fetch the Coach's (User) record to find the ID of the team they manage (managedTeamId).
        const coachUser = await db.user.findUnique({
            where: { id: coachId },
            select: { 
                managedTeamId: true,
                name: true,
                email: true 
            }
        });

        if (!coachUser || !coachUser.managedTeamId) {
            return NextResponse.json({ 
                message: 'Coach is not currently managing a team.',
                team: null 
            }, { status: 404 });
        }
        
        const teamId = coachUser.managedTeamId;

        // --- 2. Fetch Team Data and Roster (via PlayerProfile) ---
        const team = await db.team.findUnique({
            where: {
                id: teamId,
            },
            include: {
                // Players relation is a list of PlayerProfiles
                players: { 
                    select: {
                        id: true,
                        isCaptain: true,
                        jerseyNumber: true,
                        position: true,
                        // To get name/email, we must select the related User
                        user: { 
                            select: {
                                name: true,
                                email: true,
                                idNumber: true,
                                dateOfBirth: true,
                            }
                        }
                    }
                },
                // The coach relation is a back-relation; we can still include it 
                // but the details are already in coachUser.
                coach: { 
                    select: {
                        name: true,
                        email: true,
                    }
                }
            },
        });

        if (!team) {
            return new NextResponse('Team details not found, despite linking.', { status: 404 });
        }

        // --- 3. Format and Return Team Data ---
        // (Optional but helpful: flatten player data for the frontend)
        const formattedPlayers = team.players.map(profile => ({
            id: profile.id,
            isCaptain: profile.isCaptain,
            jerseyNumber: profile.jerseyNumber,
            position: profile.position,
            name: profile.user.name,
            email: profile.user.email,
            idNumber: profile.user.idNumber,
            dateOfBirth: profile.user.dateOfBirth,
        }));

        return NextResponse.json({
            ...team,
            players: formattedPlayers, // Return the flattened list
            manager: team.coach || { name: coachUser.name, email: coachUser.email }
        });

    } catch (error) {
        console.error('Coach Team GET API Error:', error);
        return new NextResponse('Internal Server Error while fetching team data.', { status: 500 });
    }
}