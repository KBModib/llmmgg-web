// src/app/api/player/fixtures/route.ts
import { NextResponse } from 'next/server';
import { auth } from '~/server/auth';
import { db } from '~/server/db';

const REQUIRED_ROLE = 'PLAYER';

export async function GET() {
    try {
        const session = await auth();

        if (!session || !session.user || session.user.role !== REQUIRED_ROLE) {
            return NextResponse.json({ error: 'Forbidden: Only Players can access this resource.' }, { status: 403 });
        }

        // Fetch all fixtures - players can see all fixtures in the system
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
            },
            orderBy: { scheduledTime: 'asc' },
        });

        const formattedFixtures = fixtures.map(fixture => {
            return {
                id: fixture.id,
                homeTeam: fixture.homeTeam.name,
                awayTeam: fixture.awayTeam.name,
                date: new Date(fixture.scheduledTime).toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' }),
                kickoff: new Date(fixture.scheduledTime).toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: false }),
                venue: fixture.venue,
                status: fixture.status === 'COMPLETED' ? 'Completed' : fixture.status === 'LIVE' ? 'In Progress' : 'Scheduled',
            };
        });

        return NextResponse.json(formattedFixtures, { status: 200 });
    } catch (error) {
        console.error('GET Player Fixtures API Error:', error);
        return NextResponse.json({ error: 'Internal Server Error while fetching fixtures.' }, { status: 500 });
    }
}
