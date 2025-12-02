// src/app/portal/dashboard/admin/tournaments/page.tsx
import { auth } from '~/server/auth';
import { redirect } from 'next/navigation';
import {
  AdminTournamentsManager,
  type AdminTournamentRecord,
} from '../components/AdminTournamentsManager';

export default async function AdminTournamentsPage() {
  const session = await auth();

  if (!session || session.user.role !== "ADMIN") {
    redirect("/portal/login?role=ADMIN");
  }

  // Fetch live tournaments data
  let tournamentsData: any[] = [];
  try {
    const response = await fetch(
      `${process.env.NEXTAUTH_URL || "http://localhost:3000"}/api/admin/tournaments`,
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

  // Map to AdminTournamentRecord format
  const tournaments: AdminTournamentRecord[] = tournamentsData.map(
    (t: any) => ({
      id: t.id,
      name: t.name,
      venue: t.venue,
      startDate: new Date(t.startDate).toISOString().split("T")[0] ?? "",
      status:
        t.status === "ACTIVE"
          ? "Confirmed"
          : t.status === "COMPLETED"
            ? "Completed"
            : "Draft",
    }),
  );

  // Calculate stats from live data
  const stats = [
    {
      label: "Active Tournaments",
      value: tournamentsData.filter((t: any) => t.status === "ACTIVE").length,
    },
    {
      label: "Completed Tournaments",
      value: tournamentsData.filter((t: any) => t.status === "COMPLETED")
        .length,
    },
    {
      label: "Upcoming Tournaments",
      value: tournamentsData.filter((t: any) => t.status === "UPCOMING").length,
    },
  ];

  return (
    <main className="min-h-screen bg-gray-50 px-4 py-10">
      <div className="mx-auto max-w-6xl space-y-8">
        <header className="rounded-2xl bg-white p-8 shadow-lg ring-1 ring-gray-100">
          <p className="text-sm font-medium tracking-wide text-green-700 uppercase">
            Admin Portal
          </p>
          <h1 className="mt-2 text-3xl font-bold text-gray-900">
            Tournament Management
          </h1>
          <p className="mt-2 text-sm text-gray-500">
            Configure and monitor all tournaments registered under the Lucas
            Masterpieces Moripe Goodwill Games.
          </p>
        </header>

        <section className="grid gap-6 md:grid-cols-3">
          {stats.map((item) => (
            <div
              key={item.label}
              className="rounded-xl border border-gray-100 bg-white p-6 text-center shadow-sm"
            >
              <p className="text-3xl font-bold text-gray-900">{item.value}</p>
              <p className="mt-1 text-sm font-medium text-gray-500">
                {item.label}
              </p>
            </div>
          ))}
        </section>

        <AdminTournamentsManager initialTournaments={tournaments} />
      </div>
    </main>
  );
}


