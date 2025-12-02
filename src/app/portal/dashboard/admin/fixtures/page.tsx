// src/app/portal/dashboard/admin/fixtures/page.tsx
import { auth } from '~/server/auth';
import { redirect } from 'next/navigation';
import {
  AdminFixturesManager,
  type AdminFixtureRecord,
} from '../components/AdminFixturesManager';

export default async function AdminFixturesPage() {
  const session = await auth();

  if (!session || session.user.role !== "ADMIN") {
    redirect("/portal/login?role=ADMIN");
  }

  // Fetch live fixtures data
  let fixturesData: any[] = [];
  try {
    const response = await fetch(
      `${process.env.NEXTAUTH_URL || "http://localhost:3000"}/api/admin/fixtures`,
      {
        cache: "no-store",
      },
    );
    if (response.ok) {
      const data = await response.json();
      fixturesData = Array.isArray(data) ? data : [];
    }
  } catch (error) {
    console.error("Failed to fetch fixtures:", error);
  }

  // Map to AdminFixtureRecord format
  const fixtures: AdminFixtureRecord[] = fixturesData.map((f: any) => ({
    id: f.id,
    home: f.homeTeam,
    away: f.awayTeam,
    date: new Date(f.scheduledTime).toISOString().split("T")[0] ?? "",
    kickoff: new Date(f.scheduledTime).toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    }),
    venue: f.venue,
    status:
      f.status === "COMPLETED"
        ? "Completed"
        : f.status === "IN_PROGRESS"
          ? "Live"
          : "Scheduled",
  }));

  return (
    <main className="min-h-screen bg-gray-50 px-4 py-10">
      <div className="mx-auto max-w-5xl space-y-6">
        <header className="rounded-2xl bg-white p-8 shadow-lg ring-1 ring-gray-100">
          <p className="text-sm font-medium tracking-wide text-green-700 uppercase">
            Admin Portal
          </p>
          <h1 className="mt-2 text-3xl font-bold text-gray-900">Fixtures</h1>
          <p className="mt-2 text-sm text-gray-500">
            Centralised view of tournament fixtures. This page will later be
            wired to the fixtures administration API.
          </p>
        </header>

        <AdminFixturesManager initialFixtures={fixtures} />
      </div>
    </main>
  );
}


