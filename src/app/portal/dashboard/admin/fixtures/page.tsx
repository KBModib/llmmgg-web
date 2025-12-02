// src/app/portal/dashboard/admin/fixtures/page.tsx
import { auth } from '~/server/auth';
import { redirect } from 'next/navigation';
import {
  AdminFixturesManager,
  type AdminFixtureRecord,
} from '../components/AdminFixturesManager';

const mockFixtures: AdminFixtureRecord[] = [
  {
    id: 'adm-fixture-1',
    home: 'Mamelodi Rockets',
    away: 'Soweto Warriors',
    date: '2025-02-22',
    kickoff: '15:00',
    venue: 'Lucas Masterpieces Moripe Stadium',
    status: 'Scheduled',
  },
  {
    id: 'adm-fixture-2',
    home: 'Atteridgeville United',
    away: 'Pretoria City',
    date: '2025-03-01',
    kickoff: '18:00',
    venue: 'Orlando Stadium',
    status: 'Draft',
  },
];

export default async function AdminFixturesPage() {
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
          <h1 className="mt-2 text-3xl font-bold text-gray-900">Fixtures</h1>
          <p className="mt-2 text-sm text-gray-500">
            Centralised view of tournament fixtures. This page will later be
            wired to the fixtures administration API.
          </p>
        </header>

        <AdminFixturesManager initialFixtures={mockFixtures} />
      </div>
    </main>
  );
}


