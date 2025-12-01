// src/app/api/register/route.ts

import { NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';
import { prisma } from '~/db'; // Ensure this path points to your actual Prisma client instance

// Define a POST handler for user registration
export async function POST(req: Request) {
    try {
        const body = await req.json();
        
        // Fields expected from the form (matching your schema)
        const { fullName, email, dateOfBirth, idNumber, teamName, role, password, confirmPassword } = body;

        // --- 1. Basic Validation ---
        if (!email || !password || !fullName || !role) {
            return new NextResponse('Missing required fields.', { status: 400 });
        }
        if (password !== confirmPassword) {
            return new NextResponse('Passwords do not match.', { status: 400 });
        }

        // --- 2. Check for existing user ---
        const existingUser = await prisma.user.findUnique({
            where: { email },
        });
        if (existingUser) {
            return new NextResponse('User with this email already exists.', { status: 409 });
        }
        
        // --- 3. Determine Role and Team Logic ---
        const hashedPassword = await bcrypt.hash(password, 10);
        let userRole: 'ADMIN' | 'COACH' | 'PLAYER';
        
        // Default player registration, unless specified otherwise
        switch (role.toUpperCase()) {
            case 'ADMIN':
                userRole = 'ADMIN';
                break;
            case 'COACH':
            case 'TEAM HEAD': // Assuming Team Head maps to COACH
                userRole = 'COACH';
                break;
            default:
                userRole = 'PLAYER';
        }

        let newUser;

        // Special logic for COACH: must create a Team and link the user as the manager
        if (userRole === 'COACH' && teamName) {
            
            // Check if a team with that name already exists
            const existingTeam = await prisma.team.findUnique({
                where: { name: teamName },
            });

            if (existingTeam) {
                 return new NextResponse(`Team "${teamName}" already registered.`, { status: 409 });
            }

            // Transaction: Create the User and the Team simultaneously, linking them
            // We use a transaction to ensure either both succeed or both fail.
            const [user, team] = await prisma.$transaction([
                prisma.user.create({
                    data: {
                        name: fullName,
                        email,
                        password: hashedPassword,
                        role: userRole,
                        dateOfBirth: dateOfBirth ? new Date(dateOfBirth) : undefined,
                        idNumber: idNumber || undefined,
                        // managedTeamId will be updated after team creation
                    },
                }),
                prisma.team.create({
                    data: {
                        name: teamName,
                    },
                }),
            ]);
            
            // Link the Coach to the newly created team
            newUser = await prisma.user.update({
                where: { id: user.id },
                data: {
                    managedTeamId: team.id,
                },
            });

        } else if (userRole === 'PLAYER' || userRole === 'ADMIN') {
            // Standard User creation for Players and Admins (no immediate team link)
            newUser = await prisma.user.create({
                data: {
                    name: fullName,
                    email,
                    password: hashedPassword,
                    role: userRole,
                    dateOfBirth: dateOfBirth ? new Date(dateOfBirth) : undefined,
                    idNumber: idNumber || undefined,
                    // Note: Players will be added to a team later by a Coach/Admin
                },
            });
        }
        
        if (!newUser) {
             return new NextResponse('Registration failed.', { status: 500 });
        }

        // --- 4. Return success response ---
        return NextResponse.json({ 
            message: 'User registered successfully. Proceed to login.', 
            user: { id: newUser.id, email: newUser.email, role: newUser.role } 
        }, { status: 201 });

    } catch (error) {
        console.error('Registration API Error:', error);
        return new NextResponse('An internal server error occurred.', { status: 500 });
    }
}