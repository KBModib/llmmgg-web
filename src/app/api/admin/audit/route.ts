// src/app/api/admin/audit/route.ts

import { NextResponse } from 'next/server';
import { auth } from '~/server/auth';
import { db } from '~/server/db';

const REQUIRED_ROLE = 'ADMIN';

// --- API HANDLER: GET (AUDIT LOGS) ---

export async function GET() {
    try {
        const session = await auth();

        // 1. Authorization: Only ADMIN can proceed
        if (!session || !session.user || session.user.role !== REQUIRED_ROLE) {
            return new NextResponse('Forbidden: Only Administrators can access audit logs.', { status: 403 });
        }
        
        // 2. Fetch all admin logs
        const logs = await db.adminLog.findMany({
            select: {
                id: true,
                action: true,
                targetId: true,
                createdAt: true,
                user: { // Select the user who performed the action
                    select: { name: true, email: true }
                }
            },
            orderBy: { createdAt: 'desc' }, // Show most recent actions first
            take: 100, // Limit log history for performance
        });

        // 3. Format the data
        const formattedLogs = logs.map(log => ({
            id: log.id,
            timestamp: log.createdAt,
            adminName: log.user.name ?? log.user.email,
            action: log.action,
            targetId: log.targetId,
        }));

        return NextResponse.json(formattedLogs, { status: 200 });

    } catch (error) {
        console.error('Admin Audit Log API Error:', error);
        return new NextResponse('Internal Server Error while fetching audit logs.', { status: 500 });
    }
}