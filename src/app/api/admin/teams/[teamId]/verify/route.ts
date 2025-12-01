// src/app/api/admin/teams/[teamId]/verify/route.ts

import { NextResponse } from 'next/server';
import { auth } from '~/server/auth';
import { db } from '~/server/db';
import { z } from 'zod';

const REQUIRED_ROLE = 'ADMIN';

// --- ZOD SCHEMAS ---
const VerifySchema = z.object({
    isVerified: z.boolean(),
});

// --- API HANDLER: PATCH (VERIFY TEAM) ---

export async function PATCH(
    req: Request, 
    { params }: { params: { teamId: string } }
) {
    try {
        const session = await auth();
        const { teamId } = params;

        // 1. Authorization: Only ADMIN can proceed
        if (!session || !session.user || session.user.role !== REQUIRED_ROLE) {
            return new NextResponse('Forbidden: Only Administrators can verify teams.', { status: 403 });
        }
        const adminId = session.user.id;

        // 2. Input Validation
        const body = await req.json();
        const validatedData = VerifySchema.safeParse(body);

        if (!validatedData.success) {
            return new NextResponse(`Invalid input.`, { status: 400 });
        }

        const { isVerified } = validatedData.data;
        const action = isVerified ? 'Verified Team Affiliation' : 'Unverified Team Affiliation';

        // 3. Transaction: Update Team status AND create Admin Log
        const [updatedTeam] = await db.$transaction([
            // a) Update Team affiliation status
            db.team.update({
                where: { id: teamId },
                data: { affiliationFeePaid: isVerified },
                select: { id: true, name: true, affiliationFeePaid: true }
            }),

            // b) Create Audit Log
            db.adminLog.create({
                data: {
                    userId: adminId,
                    action: `${action} for Team ID: ${teamId}`,
                    targetId: teamId,
                }
            })
        ]);

        return NextResponse.json(
            { 
                message: `Team '${updatedTeam.name}' successfully set to ${isVerified ? 'VERIFIED' : 'UNVERIFIED'}.`,
                team: updatedTeam
            }, 
            { status: 200 }
        );

    } catch (error) {
        console.error('Admin Team Verification API Error:', error);
        return new NextResponse('Internal Server Error during team verification.', { status: 500 });
    }
}