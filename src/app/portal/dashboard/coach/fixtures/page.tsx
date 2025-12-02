// src/app/portal/dashboard/coach/fixtures/page.tsx
import { auth } from '~/server/auth';
import { redirect } from 'next/navigation';

export default async function CoachFixturesPage() {
  const session = await auth();

  if (!session || session.user.role !== "COACH") {
    redirect("/portal/login?role=COACH");
  }

  // Fetch live fixtures data for coach's team
  let fixtures: any[] = [];
  try {
    const response = await fetch(
      `${process.env.NEXTAUTH_URL || "http://localhost:3000"}/api/coach/fixtures`,
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
      <div className="mx-auto max-w-5xl space-y-6">
        <header className="rounded-2xl bg-white p-8 shadow-lg ring-1 ring-gray-100">
          <p className="text-sm font-medium tracking-wide text-green-700 uppercase">
            Coach Portal
          </p>
          <h1 className="mt-2 text-3xl font-bold text-gray-900">Fixtures</h1>
          <p className="mt-2 text-sm text-gray-500">
            Monitor upcoming fixtures and selection status for your team.
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
                      <svg
                        className="mx-auto h-12 w-12 text-gray-300"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                        />
                      </svg>
                      <p className="mt-4 text-sm font-medium text-gray-500">
                        No fixtures scheduled yet
                      </p>
                      <p className="mt-1 text-xs text-gray-400">
                        Fixtures will appear here once your team is registered
                        for tournaments
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


