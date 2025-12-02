// src/app/portal/dashboard/admin/players/page.tsx
import { auth } from '~/server/auth';
import { redirect } from 'next/navigation';
import {
  AdminPlayersManager,
  type AdminPlayerRecord,
} from '../components/AdminPlayersManager';

export default async function AdminPlayersPage() {
  const session = await auth();

  if (!session || session.user.role !== "ADMIN") {
    redirect("/portal/login?role=ADMIN");
  }

  // Fetch live players data
  let playersData: any[] = [];
  try {
    const response = await fetch(
      `${process.env.NEXTAUTH_URL || "http://localhost:3000"}/api/admin/players`,
      {
        cache: "no-store",
      },
    );
    if (response.ok) {
      const data = await response.json();
      playersData = Array.isArray(data) ? data : [];
    }
  } catch (error) {
    console.error("Failed to fetch players:", error);
  }

  // Map to AdminPlayerRecord format
  const players: AdminPlayerRecord[] = playersData.map((p: any) => ({
    id: p.id,
    name: p.name,
    team: p.team,
    status: "Active", // Can be enhanced with actual status if available in DB
  }));

  return (
    <main className="min-h-screen bg-gray-50 px-4 py-10">
      <div className="mx-auto max-w-5xl space-y-6">
        <header className="rounded-2xl bg-white p-8 shadow-lg ring-1 ring-gray-100">
          <p className="text-sm font-medium tracking-wide text-green-700 uppercase">
            Admin Portal
          </p>
          <h1 className="mt-2 text-3xl font-bold text-gray-900">Players</h1>
          <p className="mt-2 text-sm text-gray-500">
            View and manage all registered players across tournaments.
          </p>
        </header>

        <AdminPlayersManager initialPlayers={players} />
      </div>
    </main>
  );
}


