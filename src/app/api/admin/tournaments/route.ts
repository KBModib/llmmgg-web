// src/app/api/admin/tournaments/route.ts
import { NextResponse } from 'next/server';
import { auth } from '~/server/auth';
import { db } from '~/server/db';

const REQUIRED_ROLE = 'ADMIN';

export async function GET() {
    try {
        const session = await auth();

        if (!session || !session.user || session.user.role !== REQUIRED_ROLE) {
            return NextResponse.json({ error: 'Forbidden: Only Administrators can access this data.' }, { status: 403 });
        }
        
        const tournaments = await db.tournament.findMany({
            select: {
                id: true,
                name: true,
                startDate: true,
                endDate: true,
                status: true,
            },
            orderBy: { startDate: 'desc' },
        });

        const formattedTournaments = tournaments.map(tournament => ({
            id: tournament.id,
            name: tournament.name,
            venue: 'TBD', // Venue not in Tournament model
            startDate: tournament.startDate,
            endDate: tournament.endDate,
            status: tournament.status,
            fixtureCount: 0, // Can be calculated separately if needed
        }));

        return NextResponse.json(formattedTournaments, { status: 200 });
    } catch (error) {
        console.error('GET Tournaments API Error:', error);
        return NextResponse.json({ error: 'Internal Server Error while fetching tournaments.' }, { status: 500 });
    }
}
