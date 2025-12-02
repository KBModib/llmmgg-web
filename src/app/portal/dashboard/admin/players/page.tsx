// src/app/portal/dashboard/admin/players/page.tsx
import { auth } from '~/server/auth';
import { redirect } from 'next/navigation';
import {
  AdminPlayersManager,
  type AdminPlayerRecord,
} from '../components/AdminPlayersManager';

const mockPlayers: AdminPlayerRecord[] = [
  {
    id: 'player-1',
    name: 'Alex Johnson',
    team: 'Mamelodi Rockets',
    status: 'Active',
  },
  {
    id: 'player-2',
    name: 'Sipho Dlamini',
    team: 'Atteridgeville United',
    status: 'Pending',
  },
  {
    id: 'player-3',
    name: 'Kabelo Mokoena',
    team: 'Pretoria City',
    status: 'Active',
  },
];

export default async function AdminPlayersPage() {
  const session = await auth();

  if (!session || session.user.role !== 'ADMIN') {
    redirect('/portal/login?role=ADMIN');
  }

  return (
    <main className="min-h-screen bg-gray-50 px-4 py-10">
      <div className="mx-auto max-w-5xl space-y-6">
        <header className="rounded-2xl bg-white p-8 shadow-lg ring-1 ring-gray-100">
          <p className="text-sm font-medium uppercase tracking-wide text-green-700">
            Admin Portal
          </p>
          <h1 className="mt-2 text-3xl font-bold text-gray-900">Players</h1>
          <p className="mt-2 text-sm text-gray-500">
            View and manage all registered players across tournaments.
          </p>
        </header>

        <AdminPlayersManager initialPlayers={mockPlayers} />
      </div>
    </main>
  );
}


