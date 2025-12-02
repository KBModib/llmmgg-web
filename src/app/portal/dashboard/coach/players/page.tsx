// src/app/portal/dashboard/coach/players/page.tsx
import { auth } from '~/server/auth';
import { redirect } from 'next/navigation';
import {
  CoachPlayersManager,
  type CoachPlayerRecord,
} from '../components/CoachPlayersManager';
import { TeamManager } from "../TeamManager";

export default async function CoachPlayersPage() {
  const session = await auth();

  if (!session || session.user.role !== "COACH") {
    redirect("/portal/login?role=COACH");
  }

  // Fetch live players data for coach's team
  let players: CoachPlayerRecord[] = [];
  try {
    const response = await fetch(
      `${process.env.NEXTAUTH_URL || "http://localhost:3000"}/api/coach/players`,
      {
        cache: "no-store",
      },
    );
    if (response.ok) {
      const data = await response.json();
      players = Array.isArray(data) ? data : [];
    }
  } catch (error) {
    console.error("Failed to fetch players:", error);
  }

  return (
    <main className="min-h-screen bg-gray-50 px-4 py-10">
      <div className="mx-auto max-w-5xl space-y-6">
        <header className="rounded-2xl bg-white p-8 shadow-lg ring-1 ring-gray-100">
          <p className="text-sm font-medium tracking-wide text-green-700 uppercase">
            Coach Portal
          </p>
          <h1 className="mt-2 text-3xl font-bold text-gray-900">Players</h1>
          <p className="mt-2 text-sm text-gray-500">
            Full roster view with quick status notes. Future iterations will use
            live data from the coach API.
          </p>
        </header>
        <CoachPlayersManager initialPlayers={players} />
      </div>
    </main>
  );
}


