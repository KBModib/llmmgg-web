// src/app/portal/dashboard/coach/players/page.tsx
import { auth } from '~/server/auth';
import { redirect } from 'next/navigation';

const mockPlayers = [
  { name: 'Alex Johnson', position: 'Forward', status: 'Match Fit' },
  { name: 'Sipho Dlamini', position: 'Midfielder', status: 'Pending Medical' },
  { name: 'Kabelo Mokoena', position: 'Defender', status: 'Match Fit' },
];

export default async function CoachPlayersPage() {
  const session = await auth();

  if (!session || session.user.role !== 'COACH') {
    redirect('/portal/login?role=COACH');
  }

  return (
    <main className="min-h-screen bg-gray-50 px-4 py-10">
      <div className="mx-auto max-w-4xl space-y-6">
        <header className="rounded-2xl bg-white p-8 shadow-lg ring-1 ring-gray-100">
          <p className="text-sm font-medium uppercase tracking-wide text-green-700">
            Coach Portal
          </p>
          <h1 className="mt-2 text-3xl font-bold text-gray-900">Players</h1>
          <p className="mt-2 text-sm text-gray-500">
            Full roster view with quick status notes. Future iterations will use live data from the coach API.
          </p>
        </header>

        <section className="overflow-hidden rounded-2xl bg-white shadow-lg ring-1 ring-gray-100">
          <table className="min-w-full divide-y divide-gray-100">
            <thead className="bg-gray-50 text-left text-xs font-semibold uppercase tracking-wide text-gray-500">
              <tr>
                <th className="px-6 py-4">Player</th>
                <th className="px-6 py-4">Position</th>
                <th className="px-6 py-4 text-right">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 text-sm text-gray-700">
              {mockPlayers.map((player) => (
                <tr key={player.name}>
                  <td className="px-6 py-4 font-medium text-gray-900">{player.name}</td>
                  <td className="px-6 py-4">{player.position}</td>
                  <td className="px-6 py-4 text-right">
                    <span
                      className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold ${
                        player.status === 'Match Fit'
                          ? 'bg-green-50 text-green-700'
                          : 'bg-yellow-50 text-yellow-700'
                      }`}
                    >
                      {player.status}
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


