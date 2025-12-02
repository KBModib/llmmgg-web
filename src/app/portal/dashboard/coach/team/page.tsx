// src/app/portal/dashboard/coach/team/page.tsx
import { auth } from '~/server/auth';
import { redirect } from 'next/navigation';
import { TeamManager } from '../TeamManager';

export default async function CoachTeamPage() {
  const session = await auth();

  if (!session || session.user.role !== 'COACH') {
    redirect('/portal/login?role=COACH');
  }

  return (
    <main className="min-h-screen bg-gray-50 px-4 py-8">
      <div className="mx-auto max-w-6xl space-y-8">
        <header className="rounded-2xl bg-white p-6 shadow">
          <p className="text-sm font-semibold uppercase tracking-wide text-green-700">
            Coach Portal
          </p>
          <h1 className="mt-2 text-3xl font-bold text-gray-900">Team Management</h1>
          <p className="mt-2 text-sm text-gray-500">
            Update your roster, add players, and maintain jersey assignments.
          </p>
        </header>

        <section className="rounded-2xl bg-white p-4 shadow md:p-6">
          <TeamManager />
        </section>
      </div>
    </main>
  );
}


