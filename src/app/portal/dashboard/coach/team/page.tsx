// src/app/portal/dashboard/coach/team/page.tsx
import { auth } from '~/server/auth';
import { redirect } from 'next/navigation';
import { TeamManager } from '../TeamManager';
import { CoachTeamManager } from '../components/CoachTeamManager';

export default async function CoachTeamPage() {
  const session = await auth();

  if (!session || session.user.role !== "COACH") {
    redirect("/portal/login?role=COACH");
  }

  // Fetch live team settings data
  let teamSettings = {
    name: "",
    motto: "",
    homeGround: "",
    trainingDays: [] as string[],
  };

  try {
    const response = await fetch(
      `${process.env.NEXTAUTH_URL || "http://localhost:3000"}/api/coach/team/settings`,
      {
        cache: "no-store",
      },
    );
    if (response.ok) {
      const data = await response.json();
      teamSettings = {
        name: data.name || "",
        motto: data.motto || "",
        homeGround: data.homeGround || "",
        trainingDays: Array.isArray(data.trainingDays) ? data.trainingDays : [],
      };
    }
  } catch (error) {
    console.error("Failed to fetch team settings:", error);
  }

  return (
    <main className="min-h-screen bg-gray-50 px-4 py-8">
      <div className="mx-auto max-w-6xl space-y-8">
        <header className="rounded-2xl bg-white p-6 shadow">
          <p className="text-sm font-semibold tracking-wide text-green-700 uppercase">
            Coach Portal
          </p>
          <h1 className="mt-2 text-3xl font-bold text-gray-900">
            Team Management
          </h1>
          <p className="mt-2 text-sm text-gray-500">
            Update your roster, add players, and maintain jersey assignments.
          </p>
        </header>

        <CoachTeamManager initialTeam={teamSettings} />

        <section className="rounded-2xl bg-white p-4 shadow md:p-6">
          <TeamManager />
        </section>
      </div>
    </main>
  );
}


