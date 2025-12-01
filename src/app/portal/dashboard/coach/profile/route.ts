// src/app/api/coach/profile/route.ts

import { NextResponse } from 'next/server';
import { auth } from '~/server/auth';
import { db } from '~/server/db'; 

const REQUIRED_ROLE = 'COACH';

export async function GET() {
     try {
        const session = await auth();
        
        if (!session || !session.user || session.user.role !== REQUIRED_ROLE) {
            return new NextResponse('Forbidden: Only Coaches can access this profile.', { status: 403 });
        }

        const coachId = session.user.id;

        // Fetch the core user data and the ID of the team they manage
        const coachProfile = await db.user.findUnique({
            where: { id: coachId },
            select: {
                id: true,
                name: true,
                email: true,
                role: true,
                dateOfBirth: true,
                idNumber: true, // National ID or unique identifier
                image: true,
                managedTeamId: true, // The link to the team they manage
            },
        });

        if (!coachProfile) {
            return new NextResponse('Coach profile not found.', { status: 404 });
        }
        
        return NextResponse.json(coachProfile);

    } catch (error) {
        console.error('Coach Profile GET API Error:', error);
        return new NextResponse('Internal Server Error while fetching profile data.', { status: 500 });
    }
}

export async function PUT(req: Request) {
    try {
        const session = await auth();
        
        if (!session || !session.user || session.user.role !== REQUIRED_ROLE) {
            return new NextResponse('Forbidden: Only Coaches can update this profile.', { status: 403 });
        }

        const coachId = session.user.id;
        const body = await req.json();

        const { name, dateOfBirth, idNumber } = body;

        // Basic validation for required fields (can be expanded)
        if (!name) {
             return new NextResponse('Name is required.', { status: 400 });
        }

        // Prepare update data, only including fields that were provided
        const updateData: { 
            name: string; 
            dateOfBirth?: Date | null; // <-- Added | null to the type
            idNumber?: string | null; // <-- Added | null to the type
        } = { name };

        // ⭐ FIX FOR dateOfBirth: Convert '' to null, otherwise convert to Date object
        if (dateOfBirth === '') {
            updateData.dateOfBirth = null;
        } else if (dateOfBirth) {
            // Prisma expects a Date object for DateTime fields
            updateData.dateOfBirth = new Date(dateOfBirth); 
        }

        // FIX FOR idNumber: Convert '' to null
        if (idNumber !== undefined) {
             // Treat empty string as setting to null if allowed by schema (String? field)
            updateData.idNumber = idNumber === '' ? null : idNumber; 
        }

        // Update the User record
        const updatedProfile = await db.user.update({
            where: { id: coachId },
            data: updateData,
            select: {
                name: true,
                email: true,
                dateOfBirth: true,
                idNumber: true,
            },
        });

        return NextResponse.json({ 
            message: 'Profile successfully updated.',
            profile: updatedProfile
        });

    } catch (error) {
        console.error('Coach Profile PUT API Error:', error);
        // Check for unique constraint violation (e.g., if another user has the ID number)
        if (error instanceof Error && error.message.includes('Unique constraint failed')) {
            return new NextResponse('ID Number is already in use.', { status: 409 });
        }
        return new NextResponse('Internal Server Error while updating profile.', { status: 500 });
    }
}