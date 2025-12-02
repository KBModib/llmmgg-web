// src/app/api/coach/team/[teamId]/fixtures/[fixtureId]/route.ts

import { NextResponse } from 'next/server';
import { auth } from '~/server/auth';
import { db } from '~/server/db';
import { z } from 'zod';
import { MatchStatus, Prisma } from "../../../../../../../../generated/prisma";

const REQUIRED_ROLE = "COACH";

// --- ZOD SCHEMAS ---
const UpdateFixtureSchema = z.object({
    scheduledTime: z.string().datetime({ message: "Must be a valid ISO date string." }).optional(),
    venue: z.string().min(1, 'Venue is required.').max(255).optional(),
    status: z.nativeEnum(MatchStatus).optional(),
});

// --- AUTHORIZATION HELPER ---
async function getAuthorizedFixture(teamId: string, fixtureId: string) {
    const session = await auth();
    
    if (!session || !session.user || session.user.role !== REQUIRED_ROLE) {
        return { authorized: false, status: 403, message: 'Forbidden: Only Coaches can modify fixtures.' };
    }
    if (session.user.managedTeamId !== teamId) {
        return { authorized: false, status: 403, message: 'Forbidden: You do not manage this team.' };
    }

    const fixture = await db.fixture.findUnique({
        where: { 
            id: fixtureId, 
            OR: [{ homeTeamId: teamId }, { awayTeamId: teamId }],
        },
    });

    if (!fixture) {
        return { authorized: false, status: 404, message: 'Fixture not found or does not belong to your team.' };
    }

    if (fixture.status === MatchStatus.COMPLETED || fixture.status === MatchStatus.LIVE) {
         return { authorized: false, status: 403, message: `Fixture is ${fixture.status} and cannot be modified by a coach.` };
    }

    return { authorized: true, fixture };
}

// --- API HANDLER: PUT (UPDATE FIXTURE DETAILS) ---
export async function PUT(
    req: Request, 
    { params }: { params: Promise<{ teamId: string; fixtureId: string }> }
) {
    try {
        const { teamId, fixtureId } = await params;
        const authCheck = await getAuthorizedFixture(teamId, fixtureId);
        
        if (!authCheck.authorized) {
            return new NextResponse(authCheck.message, { status: authCheck.status });
        }

        const body = await req.json();
        const validatedData = UpdateFixtureSchema.safeParse(body);

        if (!validatedData.success) {
            return new NextResponse(`Invalid input: ${validatedData.error.errors.map(e => e.message).join(', ')}`, { status: 400 });
        }

        const { scheduledTime, venue, status } = validatedData.data;

        // ✅ CORRECTED: Type the updateData object using Prisma.FixtureUpdateInput
        const updateData: Prisma.FixtureUpdateInput = {}; 

        if (scheduledTime) {
            updateData.scheduledTime = new Date(scheduledTime); 
        }
        if (venue) {
            updateData.venue = venue;
        }
        if (status) {
            updateData.status = status;
        }
        
        if (Object.keys(updateData).length === 0) {
            return new NextResponse('No valid fields provided for update.', { status: 400 });
        }

        const updatedFixture = await db.fixture.update({
            where: { id: fixtureId },
            data: updateData, 
            select: { id: true, status: true, scheduledTime: true, venue: true }
        });

        return NextResponse.json({ message: `Fixture ${updatedFixture.id} successfully updated.`, fixture: updatedFixture }, { status: 200 });

    } catch (error) {
        console.error('Fixture PUT API Error:', error);
        return new NextResponse('Internal Server Error while updating fixture.', { status: 500 });
    }
}


// --- API HANDLER: DELETE (CANCEL FIXTURE) ---
export async function DELETE(
    req: Request, 
    { params }: { params: Promise<{ teamId: string; fixtureId: string }> }
) {
    try {
        const { teamId, fixtureId } = await params;
        const authCheck = await getAuthorizedFixture(teamId, fixtureId);
        
        if (!authCheck.authorized) {
            return new NextResponse(authCheck.message, { status: authCheck.status });
        }

        // Delete the fixture record
        await db.fixture.delete({
            where: { id: fixtureId },
        });

        return NextResponse.json({ message: `Fixture ${fixtureId} successfully canceled and deleted.` }, { status: 200 });

    } catch (error) {
        console.error('Fixture DELETE API Error:', error);
        return new NextResponse('Internal Server Error while deleting fixture.', { status: 500 });
    }
}