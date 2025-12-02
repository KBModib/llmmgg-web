// src/app/api/coach/team/settings/route.ts
import { NextResponse } from 'next/server';
import { auth } from '~/server/auth';
import { db } from '~/server/db';

const REQUIRED_ROLE = 'COACH';

export async function GET() {
    try {
        const session = await auth();

        if (!session || !session.user || session.user.role !== REQUIRED_ROLE) {
            return NextResponse.json({ error: 'Forbidden: Only Coaches can access this resource.' }, { status: 403 });
        }

        const coachId = session.user.id;

        // Find coach's team
        const coachUser = await db.user.findUnique({
            where: { id: coachId },
            select: { managedTeamId: true }
        });

        if (!coachUser || !coachUser.managedTeamId) {
            return NextResponse.json({ error: 'Coach is not managing a team.' }, { status: 404 });
        }

        const teamId = coachUser.managedTeamId;

        // Fetch team data
        const team = await db.team.findUnique({
            where: { id: teamId },
            select: {
                id: true,
                name: true,
                createdAt: true,
            },
        });

        if (!team) {
            return NextResponse.json({ error: 'Team not found.' }, { status: 404 });
        }

        // Format team settings (add default values for fields not in DB)
        const teamSettings = {
            name: team.name,
            motto: '', // Not in schema, using default
            homeGround: '', // Not in schema, using default
            trainingDays: [], // Not in schema, using default
            createdAt: team.createdAt,
        };

        return NextResponse.json(teamSettings, { status: 200 });
    } catch (error) {
        console.error('GET Team Settings API Error:', error);
        return NextResponse.json({ error: 'Internal Server Error while fetching team settings.' }, { status: 500 });
    }
}

export async function PUT(request: Request) {
    try {
        const session = await auth();

        if (!session || !session.user || session.user.role !== REQUIRED_ROLE) {
            return NextResponse.json({ error: 'Forbidden: Only Coaches can access this resource.' }, { status: 403 });
        }

        const coachId = session.user.id;

        // Find coach's team
        const coachUser = await db.user.findUnique({
            where: { id: coachId },
            select: { managedTeamId: true }
        });

        if (!coachUser || !coachUser.managedTeamId) {
            return NextResponse.json({ error: 'Coach is not managing a team.' }, { status: 404 });
        }

        const teamId = coachUser.managedTeamId;

        // Parse request body
        const body = await request.json();
        const { name } = body;

        if (!name || typeof name !== 'string' || !name.trim()) {
            return NextResponse.json({ error: 'Team name is required.' }, { status: 400 });
        }

        // Update team name (only field supported in current schema)
        const updatedTeam = await db.team.update({
            where: { id: teamId },
            data: {
                name: name.trim(),
            },
            select: {
                id: true,
                name: true,
            },
        });

        return NextResponse.json({ 
            message: 'Team settings updated successfully.',
            team: updatedTeam 
        }, { status: 200 });
    } catch (error) {
        console.error('PUT Team Settings API Error:', error);
        return NextResponse.json({ error: 'Internal Server Error while updating team settings.' }, { status: 500 });
    }
}
