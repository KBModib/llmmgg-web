// src/app/portal/dashboard/admin/teams/page.tsx
import { auth } from '~/server/auth';
import { redirect } from 'next/navigation';

const mockTeams = [
  { name: 'Mamelodi Rockets', coaches: 2, players: 25 },
  { name: 'Atteridgeville United', coaches: 1, players: 20 },
  { name: 'Pretoria City', coaches: 2, players: 23 },
];

export default async function AdminTeamsPage() {
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
          <h1 className="mt-2 text-3xl font-bold text-gray-900">Teams</h1>
          <p className="mt-2 text-sm text-gray-500">
            Overview of registered teams. This page will later integrate with the
            teams admin API.
          </p>
        </header>

        <section className="overflow-hidden rounded-2xl bg-white shadow-lg ring-1 ring-gray-100">
          <table className="min-w-full divide-y divide-gray-100">
            <thead className="bg-gray-50 text-left text-xs font-semibold uppercase tracking-wide text-gray-500">
              <tr>
                <th className="px-6 py-4">Team</th>
                <th className="px-6 py-4">Coaches</th>
                <th className="px-6 py-4">Players</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 text-sm text-gray-700">
              {mockTeams.map((team) => (
                <tr key={team.name}>
                  <td className="px-6 py-4 font-medium text-gray-900">
                    {team.name}
                  </td>
                  <td className="px-6 py-4">{team.coaches}</td>
                  <td className="px-6 py-4">{team.players}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      </div>
    </main>
  );
}


