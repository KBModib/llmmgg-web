// src/app/portal/dashboard/player/fixtures/page.tsx
import { auth } from '~/server/auth';
import { redirect } from 'next/navigation';

const mockFixtures = [
  {
    id: 'fixture-1',
    opponent: 'Mamelodi Lions',
    date: '22 Feb 2025',
    kickoff: '15:00',
    venue: 'Lucas Masterpieces Moripe Stadium',
    status: 'Selected',
  },
  {
    id: 'fixture-2',
    opponent: 'Soweto Warriors',
    date: '01 Mar 2025',
    kickoff: '18:00',
    venue: 'Orlando Stadium',
    status: 'Pending Selection',
  },
];

export default async function PlayerFixturesPage() {
  const session = await auth();

  if (!session || session.user.role !== 'PLAYER') {
    redirect('/portal/login?role=PLAYER');
  }

  return (
    <main className="min-h-screen bg-gray-50 px-4 py-10">
      <div className="mx-auto max-w-4xl space-y-6">
        <header className="rounded-2xl bg-white p-8 shadow-lg ring-1 ring-gray-100">
          <p className="text-sm font-medium uppercase tracking-wide text-green-700">
            Player Portal
          </p>
          <h1 className="mt-2 text-3xl font-bold text-gray-900">
            Upcoming Fixtures
          </h1>
          <p className="mt-2 text-sm text-gray-500">
            Fixture data will soon be served by the coach assignments API. For now
            review the provisional schedule below.
          </p>
        </header>

        <section className="overflow-hidden rounded-2xl bg-white shadow-lg ring-1 ring-gray-100">
          <table className="min-w-full divide-y divide-gray-100">
            <thead className="bg-gray-50 text-left text-xs font-semibold uppercase tracking-wide text-gray-500">
              <tr>
                <th className="px-6 py-4">Date</th>
                <th className="px-6 py-4">Opponent</th>
                <th className="px-6 py-4">Kick-off</th>
                <th className="px-6 py-4">Venue</th>
                <th className="px-6 py-4 text-right">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 text-sm text-gray-700">
              {mockFixtures.map((fixture) => (
                <tr key={fixture.id}>
                  <td className="px-6 py-4 font-medium text-gray-900">{fixture.date}</td>
                  <td className="px-6 py-4">{fixture.opponent}</td>
                  <td className="px-6 py-4">{fixture.kickoff}</td>
                  <td className="px-6 py-4">{fixture.venue}</td>
                  <td className="px-6 py-4 text-right">
                    <span
                      className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold ${
                        fixture.status === 'Selected'
                          ? 'bg-green-50 text-green-700'
                          : 'bg-yellow-50 text-yellow-700'
                      }`}
                    >
                      {fixture.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      </div>
    </main>
  );
}


