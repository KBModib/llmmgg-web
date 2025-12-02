// src/app/portal/dashboard/admin/teams/page.tsx
import { auth } from '~/server/auth';
import { redirect } from 'next/navigation';
import {
  AdminTeamsManager,
  type AdminTeamRecord,
} from '../components/AdminTeamsManager';

const mockTeams: AdminTeamRecord[] = [
  {
    id: 'team-1',
    name: 'Mamelodi Rockets',
    coach: 'Kabelo Mohoje',
    playerCount: 25,
    verified: true,
  },
  {
    id: 'team-2',
    name: 'Atteridgeville United',
    coach: 'Nomonde Nkosi',
    playerCount: 20,
    verified: false,
  },
  {
    id: 'team-3',
    name: 'Pretoria City',
    coach: 'Peter Mahlangu',
    playerCount: 23,
    verified: true,
  },
];

export default async function AdminTeamsPage() {
  const session = await auth();

  if (!session || session.user.role !== 'ADMIN') {
    redirect('/portal/login?role=ADMIN');
  }

  return (
    <main className="min-h-screen bg-gray-50 px-4 py-10">
      <div className="mx-auto max-w-6xl space-y-6">
        <header className="rounded-2xl bg-white p-8 shadow-lg ring-1 ring-gray-100">
          <p className="text-sm font-medium uppercase tracking-wide text-green-700">
            Admin Portal
          </p>
          <h1 className="mt-2 text-3xl font-bold text-gray-900">Teams</h1>
          <p className="mt-2 text-sm text-gray-500">
            Overview of registered teams. This page will later integrate with the
            teams admin API.
          </p>
        </header>

        <AdminTeamsManager initialTeams={mockTeams} />
      </div>
    </main>
  );
}


