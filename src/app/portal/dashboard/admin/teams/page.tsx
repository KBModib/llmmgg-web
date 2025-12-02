// src/app/portal/dashboard/admin/teams/page.tsx
import { auth } from '~/server/auth';
import { redirect } from 'next/navigation';
import {
  AdminTeamsManager,
  type AdminTeamRecord,
} from '../components/AdminTeamsManager';

export default async function AdminTeamsPage() {
  const session = await auth();

  if (!session || session.user.role !== "ADMIN") {
    redirect("/portal/login?role=ADMIN");
  }

  // Fetch live teams data
  let teams: AdminTeamRecord[] = [];
  try {
    const response = await fetch(
      `${process.env.NEXTAUTH_URL || "http://localhost:3000"}/api/admin/teams`,
      {
        cache: "no-store",
      },
    );
    if (response.ok) {
      const data = await response.json();
      teams = Array.isArray(data) ? data : [];
    }
  } catch (error) {
    console.error("Failed to fetch teams:", error);
  }

  return (
    <main className="min-h-screen bg-gray-50 px-4 py-10">
      <div className="mx-auto max-w-6xl space-y-6">
        <header className="rounded-2xl bg-white p-8 shadow-lg ring-1 ring-gray-100">
          <p className="text-sm font-medium tracking-wide text-green-700 uppercase">
            Admin Portal
          </p>
          <h1 className="mt-2 text-3xl font-bold text-gray-900">Teams</h1>
          <p className="mt-2 text-sm text-gray-500">
            Overview of registered teams. This page will later integrate with
            the teams admin API.
          </p>
        </header>

        <AdminTeamsManager initialTeams={teams} />
      </div>
    </main>
  );
}


