// src/app/portal/dashboard/coach/players/page.tsx
import { auth } from '~/server/auth';
import { redirect } from 'next/navigation';
import {
  CoachPlayersManager,
  type CoachPlayerRecord,
} from '../components/CoachPlayersManager';
import { TeamManager } from "../TeamManager";

const mockPlayers: CoachPlayerRecord[] = [
  {
    id: "coach-player-1",
    name: "Alex Johnson",
    position: "Forward",
    jerseyNumber: 9,
    status: "Match Fit",
  },
  {
    id: "coach-player-2",
    name: "Sipho Dlamini",
    position: "Midfielder",
    jerseyNumber: 8,
    status: "Pending Medical",
  },
  {
    id: "coach-player-3",
    name: "Kabelo Mokoena",
    position: "Defender",
    jerseyNumber: 4,
    status: "Match Fit",
  },
];

export default async function CoachPlayersPage() {
  const session = await auth();

  if (!session || session.user.role !== "COACH") {
    redirect("/portal/login?role=COACH");
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
        <CoachPlayersManager initialPlayers={mockPlayers} />
      </div>
    </main>
  );
}


