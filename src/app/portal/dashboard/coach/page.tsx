// src/app/portal/dashboard/coach/page.tsx

import { auth } from '~/server/auth';
import { TeamManager } from "./TeamManager";

export default async function CoachDashboardPage() {
    // This server component ensures the user is a Coach before rendering the TeamManager
    const session = await auth();
    
    if (session?.user.role !== 'COACH') {
        // This should be caught by middleware, but it's a good fail-safe
        return <div className="p-8 text-red-600">Unauthorized Access.</div>;
    }

    return (
        <main className="min-h-screen bg-gray-50 p-4 md:p-8">
            {/* The TeamManager is a client component that fetches data securely */}
            <TeamManager /> 
        </main>
    );
}