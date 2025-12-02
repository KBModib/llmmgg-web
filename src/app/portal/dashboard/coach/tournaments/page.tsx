// src/app/portal/dashboard/coach/tournaments/page.tsx
import { auth } from '~/server/auth';
import { redirect } from 'next/navigation';

export default async function CoachTournamentsPage() {
  const session = await auth();

  if (!session || session.user.role !== "COACH") {
    redirect("/portal/login?role=COACH");
  }

  // Fetch live tournaments data
  let tournamentsData: any[] = [];
  try {
    const response = await fetch(
      `${process.env.NEXTAUTH_URL || "http://localhost:3000"}/api/public/tournaments`,
      {
        cache: "no-store",
      },
    );
    if (response.ok) {
      const data = await response.json();
      tournamentsData = Array.isArray(data) ? data : [];
    }
  } catch (error) {
    console.error("Failed to fetch tournaments:", error);
  }

  // Map to display format
  const tournaments = tournamentsData.map((t: any) => ({
    id: t.id,
    name: t.name,
    startDate: new Date(t.startDate).toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    }),
    registration:
      t.status === "ACTIVE"
        ? "Confirmed"
        : t.status === "UPCOMING"
          ? "Awaiting Squad Submission"
          : "Completed",
  }));

  return (
    <main className="min-h-screen bg-gray-50 px-4 py-10">
      <div className="mx-auto max-w-5xl space-y-8">
        <header className="rounded-2xl bg-white p-8 shadow-lg ring-1 ring-gray-100">
          <p className="text-sm font-medium tracking-wide text-green-700 uppercase">
            Coach Portal
          </p>
          <h1 className="mt-2 text-3xl font-bold text-gray-900">Tournaments</h1>
          <p className="mt-2 text-sm text-gray-500">
            Keep track of competitions your team is registered for. Tournament
            data will sync with the admin schedule in a future release.
          </p>
        </header>

        <section className="grid gap-6 md:grid-cols-2">
          {tournaments.map((tournament) => (
            <article
              key={tournament.id}
              className="rounded-xl bg-white p-6 shadow-lg ring-1 ring-gray-100"
            >
              <p className="text-xs font-semibold tracking-wide text-gray-400 uppercase">
                {tournament.startDate}
              </p>
              <h2 className="mt-2 text-xl font-semibold text-gray-900">
                {tournament.name}
              </h2>
              <p className="mt-3 inline-flex rounded-full bg-green-50 px-3 py-1 text-xs font-semibold text-green-700">
                {tournament.registration}
              </p>
            </article>
          ))}
        </section>
      </div>
    </main>
  );
}


