// src/app/api/public/tournaments/route.ts
import { NextResponse } from 'next/server';
import { db } from '~/server/db';

export async function GET() {
    try {
        const tournaments = await db.tournament.findMany({
            select: {
                id: true,
                name: true,
                startDate: true,
                endDate: true,
                status: true,
                createdAt: true,
            },
            orderBy: { startDate: 'asc' },
        });

        return NextResponse.json(tournaments, { status: 200 });
    } catch (error) {
        console.error('GET Tournaments API Error:', error);
        return NextResponse.json({ error: 'Internal Server Error while fetching tournaments.' }, { status: 500 });
    }
}
