// src/app/portal/dashboard/admin/tournaments/page.tsx
import { auth } from '~/server/auth';
import { redirect } from 'next/navigation';
import {
  AdminTournamentsManager,
  type AdminTournamentRecord,
} from '../components/AdminTournamentsManager';

const mockStats = [
  { label: 'Active Tournaments', value: 3 },
  { label: 'Completed Tournaments', value: 5 },
  { label: 'Upcoming Tournaments', value: 2 },
];

const mockTournaments: AdminTournamentRecord[] = [
  {
    id: 'tournament-1',
    name: 'Gauteng Champions Cup',
    venue: 'Lucas Masterpieces Moripe Stadium',
    startDate: '2025-02-12',
    status: 'Confirmed',
  },
  {
    id: 'tournament-2',
    name: 'Winter Series Invitational',
    venue: 'Orlando Stadium',
    startDate: '2025-04-07',
    status: 'Draft',
  },
];

export default async function AdminTournamentsPage() {
  const session = await auth();

  if (!session || session.user.role !== 'ADMIN') {
    redirect('/portal/login?role=ADMIN');
  }

  return (
    <main className="min-h-screen bg-gray-50 px-4 py-10">
      <div className="mx-auto max-w-6xl space-y-8">
        <header className="rounded-2xl bg-white p-8 shadow-lg ring-1 ring-gray-100">
          <p className="text-sm font-medium uppercase tracking-wide text-green-700">
            Admin Portal
          </p>
          <h1 className="mt-2 text-3xl font-bold text-gray-900">
            Tournament Management
          </h1>
          <p className="mt-2 text-sm text-gray-500">
            Configure and monitor all tournaments registered under the Lucas Masterpieces Moripe Goodwill Games.
          </p>
        </header>

        <section className="grid gap-6 md:grid-cols-3">
          {mockStats.map((item) => (
            <div
              key={item.label}
              className="rounded-xl border border-gray-100 bg-white p-6 text-center shadow-sm"
            >
              <p className="text-3xl font-bold text-gray-900">{item.value}</p>
              <p className="mt-1 text-sm font-medium text-gray-500">
                {item.label}
              </p>
            </div>
          ))}
        </section>

        <AdminTournamentsManager initialTournaments={mockTournaments} />
      </div>
    </main>
  );
}


