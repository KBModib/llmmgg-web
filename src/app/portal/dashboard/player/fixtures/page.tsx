// src/app/portal/dashboard/player/fixtures/page.tsx
import { auth } from '~/server/auth';
import { redirect } from 'next/navigation';

export default async function PlayerFixturesPage() {
  const session = await auth();

  if (!session || session.user.role !== "PLAYER") {
    redirect("/portal/login?role=PLAYER");
  }

  // Fetch live fixtures data for player's team
  let fixtures: any[] = [];
  try {
    const response = await fetch(
      `${process.env.NEXTAUTH_URL || "http://localhost:3000"}/api/player/fixtures`,
      {
        cache: "no-store",
      },
    );
    if (response.ok) {
      const data = await response.json();
      fixtures = Array.isArray(data) ? data : [];
    }
  } catch (error) {
    console.error("Failed to fetch fixtures:", error);
  }

  return (
    <main className="min-h-screen bg-gray-50 px-4 py-10">
      <div className="mx-auto max-w-4xl space-y-6">
        <header className="rounded-2xl bg-white p-8 shadow-lg ring-1 ring-gray-100">
          <p className="text-sm font-medium tracking-wide text-green-700 uppercase">
            Player Portal
          </p>
          <h1 className="mt-2 text-3xl font-bold text-gray-900">
            Upcoming Fixtures
          </h1>
          <p className="mt-2 text-sm text-gray-500">
            Fixture data will soon be served by the coach assignments API. For
            now review the provisional schedule below.
          </p>
        </header>

        <section className="overflow-hidden rounded-2xl bg-white shadow-lg ring-1 ring-gray-100">
          <table className="min-w-full divide-y divide-gray-100">
            <thead className="bg-gray-50 text-left text-xs font-semibold tracking-wide text-gray-500 uppercase">
              <tr>
                <th className="px-6 py-4">Date</th>
                <th className="px-6 py-4">Home Team</th>
                <th className="px-6 py-4">Away Team</th>
                <th className="px-6 py-4">Kick-off</th>
                <th className="px-6 py-4">Venue</th>
                <th className="px-6 py-4 text-right">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 text-sm text-gray-700">
              {fixtures.length > 0 ? (
                fixtures.map((fixture: any) => (
                  <tr key={fixture.id}>
                    <td className="px-6 py-4 font-medium text-gray-900">
                      {fixture.date}
                    </td>
                    <td className="px-6 py-4 font-semibold text-gray-800">
                      {fixture.homeTeam}
                    </td>
                    <td className="px-6 py-4 font-semibold text-gray-800">
                      {fixture.awayTeam}
                    </td>
                    <td className="px-6 py-4">{fixture.kickoff}</td>
                    <td className="px-6 py-4">{fixture.venue}</td>
                    <td className="px-6 py-4 text-right">
                      <span
                        className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold ${
                          fixture.status === "Completed"
                            ? "bg-gray-50 text-gray-700"
                            : fixture.status === "In Progress"
                              ? "bg-green-50 text-green-700"
                              : "bg-blue-50 text-blue-700"
                        }`}
                      >
                        {fixture.status}
                      </span>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={6} className="px-6 py-12 text-center">
                    <div className="text-gray-400">
                      <p className="text-sm font-medium text-gray-500">
                        No fixtures scheduled yet
                      </p>
                    </div>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </section>
      </div>
    </main>
  );
}


