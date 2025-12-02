// src/app/api/coach/team/[teamId]/route.ts

import { NextResponse } from 'next/server';
import { auth } from '~/server/auth';
import { db } from '~/server/db';
import { z } from 'zod';

const REQUIRED_ROLE = 'COACH';

// Schema for updating basic team details
const UpdateTeamSchema = z.object({
    name: z.string().min(3, 'Team name must be at least 3 characters.').max(100).optional(),
    // NOTE: AffiliationFeePaid should typically only be updated by ADMIN, but 
    // we allow the coach to send a message or trigger a process. For now, keep it simple.
});


// PUT: Update a Coach's managed team details
export async function PUT(
    req: Request, 
    { params }: { params: Promise<{ teamId: string }> }
) {
    try {
        const session = await auth();
        const { teamId } = await params;
        
        // 1. Authorization: Check user role and management
        if (!session || !session.user || session.user.role !== REQUIRED_ROLE) {
            return new NextResponse('Forbidden: Only Coaches can update team details.', { status: 403 });
        }

        if (session.user.managedTeamId !== teamId) {
            return new NextResponse('Forbidden: You do not manage this team.', { status: 403 });
        }

        // 2. Input Validation
        const body = await req.json();
        const validatedData = UpdateTeamSchema.safeParse(body);

        if (!validatedData.success) {
            return new NextResponse(
                `Invalid input: ${validatedData.error.errors.map(e => e.message).join(', ')}`, 
                { status: 400 }
            );
        }

        const { name } = validatedData.data;
        
        if (!name) {
            return new NextResponse('No valid fields provided for update.', { status: 400 });
        }

        // 3. Update the team record
        const updatedTeam = await db.team.update({
            where: { id: teamId },
            data: {
                name: name,
            },
            select: {
                id: true,
                name: true,
                affiliationFeePaid: true,
            }
        });

        return NextResponse.json(
            { 
                message: `Team '${updatedTeam.name}' details successfully updated.`,
                team: updatedTeam
            }, 
            { status: 200 }
        );

    } catch (error) {
         // Check for unique constraint violation on Team Name
        if (error instanceof Error && 'code' in error && error.code === 'P2002') {
             return new NextResponse('Conflict: A team with that name already exists.', { status: 409 });
        }
        console.error('Team PUT API Error:', error);
        return new NextResponse('Internal Server Error while updating team details.', { status: 500 });
    }
}