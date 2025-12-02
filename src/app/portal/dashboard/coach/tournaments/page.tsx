// src/app/portal/dashboard/coach/tournaments/page.tsx
import { auth } from '~/server/auth';
import { redirect } from 'next/navigation';

const mockTournaments = [
  {
    id: 'coach-tourn-1',
    name: 'Gauteng Champions Cup',
    startDate: '12 Feb 2025',
    registration: 'Confirmed',
  },
  {
    id: 'coach-tourn-2',
    name: 'Winter Series Invitational',
    startDate: '07 Apr 2025',
    registration: 'Awaiting Squad Submission',
  },
];

export default async function CoachTournamentsPage() {
  const session = await auth();

  if (!session || session.user.role !== 'COACH') {
    redirect('/portal/login?role=COACH');
  }

  return (
    <main className="min-h-screen bg-gray-50 px-4 py-10">
      <div className="mx-auto max-w-5xl space-y-8">
        <header className="rounded-2xl bg-white p-8 shadow-lg ring-1 ring-gray-100">
          <p className="text-sm font-medium uppercase tracking-wide text-green-700">
            Coach Portal
          </p>
          <h1 className="mt-2 text-3xl font-bold text-gray-900">Tournaments</h1>
          <p className="mt-2 text-sm text-gray-500">
            Keep track of competitions your team is registered for. Tournament data will sync with the admin schedule in a future release.
          </p>
        </header>

        <section className="grid gap-6 md:grid-cols-2">
          {mockTournaments.map((tournament) => (
            <article key={tournament.id} className="rounded-xl bg-white p-6 shadow-lg ring-1 ring-gray-100">
              <p className="text-xs font-semibold uppercase tracking-wide text-gray-400">
                {tournament.startDate}
              </p>
              <h2 className="mt-2 text-xl font-semibold text-gray-900">
                {tournament.name}
              </h2>
              <p className="mt-3 inline-flex rounded-full bg-green-50 px-3 py-1 text-xs font-semibold text-green-700">
                {tournament.registration}
              </p>
            </article>
          ))}
        </section>
      </div>
    </main>
  );
}


