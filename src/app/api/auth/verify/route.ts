// src/app/api/auth/verify/route.ts
import { NextResponse } from 'next/server';
import { db } from '~/server/db';
import { z } from 'zod';
import bcrypt from 'bcryptjs';

const VerificationSchema = z.object({
    email: z.string().email('Invalid email format.'),
    verificationCode: z.string().length(6, 'Verification code must be 6 digits.'),
});

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const validatedData = VerificationSchema.safeParse(body);

        if (!validatedData.success) {
            return new NextResponse('Invalid input.', { status: 400 });
        }

        const { email, verificationCode } = validatedData.data;

        // 1. Find the user
        const user = await db.user.findUnique({
            where: { email },
            select: { 
                id: true, 
                emailVerified: true, 
                verificationToken: true, 
                verificationTokenExpires: true 
            },
        });

        if (!user) {
            return new NextResponse('User not found.', { status: 404 });
        }

        // 2. Check if already verified
        if (user.emailVerified) {
            return new NextResponse('Email is already verified.', { status: 400 });
        }

        // 3. Check for valid token and expiry
        if (!user.verificationToken || !user.verificationTokenExpires || user.verificationTokenExpires < new Date()) {
            return new NextResponse('Verification code is invalid or has expired.', { status: 400 });
        }

        // 4. Compare the provided code (Assuming you stored the code as plain text for easy comparison)
        // NOTE: If you chose to hash the code, you would use bcrypt.compare here.
        if (user.verificationToken !== verificationCode) {
            return new NextResponse('Invalid verification code.', { status: 401 });
        }
        
        // --- 5. Success: Update user status ---
        await db.user.update({
            where: { id: user.id },
            data: {
                emailVerified: new Date(),
                verificationToken: null, // Clear the used token
                verificationTokenExpires: null,
            },
        });

        return NextResponse.json({ message: 'Email successfully verified. You can now log in.' }, { status: 200 });

    } catch (error) {
        console.error('Email verification error:', error);
        return new NextResponse('Internal Server Error during verification.', { status: 500 });
    }
}