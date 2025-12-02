// src/app/portal/dashboard/admin/fixtures/page.tsx
import { auth } from '~/server/auth';
import { redirect } from 'next/navigation';

const mockFixtures = [
  {
    id: 'adm-fixture-1',
    home: 'Mamelodi Rockets',
    away: 'Soweto Warriors',
    date: '22 Feb 2025',
    kickoff: '15:00',
    venue: 'Lucas Masterpieces Moripe Stadium',
  },
  {
    id: 'adm-fixture-2',
    home: 'Atteridgeville United',
    away: 'Pretoria City',
    date: '01 Mar 2025',
    kickoff: '18:00',
    venue: 'Orlando Stadium',
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

        <section className="overflow-hidden rounded-2xl bg-white shadow-lg ring-1 ring-gray-100">
          <table className="min-w-full divide-y divide-gray-100">
            <thead className="bg-gray-50 text-left text-xs font-semibold uppercase tracking-wide text-gray-500">
              <tr>
                <th className="px-6 py-4">Date</th>
                <th className="px-6 py-4">Match</th>
                <th className="px-6 py-4">Kick-off</th>
                <th className="px-6 py-4">Venue</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 text-sm text-gray-700">
              {mockFixtures.map((fixture) => (
                <tr key={fixture.id}>
                  <td className="px-6 py-4 font-medium text-gray-900">
                    {fixture.date}
                  </td>
                  <td className="px-6 py-4">
                    {fixture.home} vs {fixture.away}
                  </td>
                  <td className="px-6 py-4">{fixture.kickoff}</td>
                  <td className="px-6 py-4">{fixture.venue}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      </div>
    </main>
  );
}


