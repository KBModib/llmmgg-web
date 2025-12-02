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
export async function PATCH(req: Request, { params }: { params: Record<string, string> }) {
    try {
        const session = await auth();

        const { teamId } = params;

        // 1. Authorization
        if (!session || !session.user || session.user.role !== REQUIRED_ROLE) {
            return new NextResponse('Forbidden: Only Administrators can verify teams.', { status: 403 });
        }

        const adminId = session.user.id;

        // 2. Input Validation
        const body = await req.json();
        const validatedData = VerifySchema.safeParse(body);

        if (!validatedData.success) {
            return new NextResponse('Invalid input.', { status: 400 });
        }

        const { isVerified } = validatedData.data;
        const action = isVerified ? 'Verified Team Affiliation' : 'Unverified Team Affiliation';

        // 3. Transaction
        const [updatedTeam] = await db.$transaction([
            db.team.update({
                where: { id: teamId },
                data: { affiliationFeePaid: isVerified },
                select: { id: true, name: true, affiliationFeePaid: true }
            }),

            db.adminLog.create({
                data: {
                    userId: adminId,
                    action: `${action} for Team ID: ${teamId}`,
                    targetId: teamId,
                }
            }) // <-- MISSING CLOSURES ADDED BELOW
        ]); // <-- CLOSES $transaction array and function call

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
} // <-- CLOSES PATCH function
