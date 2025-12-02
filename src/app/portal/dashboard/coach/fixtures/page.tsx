// src/app/portal/dashboard/coach/fixtures/page.tsx
import { auth } from '~/server/auth';
import { redirect } from 'next/navigation';

const mockFixtures = [
  {
    id: 'coach-fixture-1',
    opponent: 'Soweto Warriors',
    date: '22 Feb 2025',
    kickoff: '15:00',
    venue: 'Lucas Masterpieces Moripe Stadium',
    status: 'Squad Submitted',
  },
  {
    id: 'coach-fixture-2',
    opponent: 'Pretoria City',
    date: '01 Mar 2025',
    kickoff: '18:00',
    venue: 'Orlando Stadium',
    status: 'Selection Pending',
  },
];

export default async function CoachFixturesPage() {
  const session = await auth();

  if (!session || session.user.role !== 'COACH') {
    redirect('/portal/login?role=COACH');
  }

  return (
    <main className="min-h-screen bg-gray-50 px-4 py-10">
      <div className="mx-auto max-w-5xl space-y-6">
        <header className="rounded-2xl bg-white p-8 shadow-lg ring-1 ring-gray-100">
          <p className="text-sm font-medium uppercase tracking-wide text-green-700">
            Coach Portal
          </p>
          <h1 className="mt-2 text-3xl font-bold text-gray-900">Fixtures</h1>
          <p className="mt-2 text-sm text-gray-500">
            Monitor upcoming fixtures and selection status for your team.
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
                        fixture.status === 'Squad Submitted'
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


