// src/app/api/admin/fixtures/route.ts
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
        
        const fixtures = await db.fixture.findMany({
            select: {
                id: true,
                scheduledTime: true,
                venue: true,
                status: true,
                homeScore: true,
                awayScore: true,
                homeTeam: {
                    select: {
                        id: true,
                        name: true,
                    }
                },
                awayTeam: {
                    select: {
                        id: true,
                        name: true,
                    }
                },
                tournament: {
                    select: {
                        id: true,
                        name: true,
                    }
                },
            },
            orderBy: { scheduledTime: 'asc' },
        });

        const formattedFixtures = fixtures.map(fixture => ({
            id: fixture.id,
            homeTeam: fixture.homeTeam.name,
            awayTeam: fixture.awayTeam.name,
            scheduledTime: fixture.scheduledTime,
            venue: fixture.venue,
            status: fixture.status,
            score: fixture.status === 'COMPLETED' 
                   ? `${fixture.homeScore} - ${fixture.awayScore}` 
                   : null,
            tournament: fixture.tournament?.name ?? 'N/A',
        }));

        return NextResponse.json(formattedFixtures, { status: 200 });
    } catch (error) {
        console.error('GET Fixtures API Error:', error);
        return NextResponse.json({ error: 'Internal Server Error while fetching fixtures.' }, { status: 500 });
    }
}
