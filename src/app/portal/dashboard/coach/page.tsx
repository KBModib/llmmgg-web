// src/app/portal/dashboard/coach/page.tsx

import { auth } from '~/server/auth';
import { redirect } from 'next/navigation';

export default async function CoachDashboardPage() {
    // This server component ensures the user is a Coach before rendering the TeamManager
    const session = await auth();
    
    if (session?.user.role !== 'COACH') {
        // This should be caught by middleware, but it's a good fail-safe
        return <div className="p-8 text-red-600">Unauthorized Access.</div>;
    }

    redirect('/portal/dashboard/coach/team');
}