// src/app/portal/dashboard/player/profile/page.tsx
import { auth } from '~/server/auth';
import { redirect } from 'next/navigation';

export default async function PlayerProfilePage() {
  const session = await auth();

  if (!session || session.user.role !== 'PLAYER') {
    redirect('/portal/login?role=PLAYER');
  }

  const { user } = session;

  return (
    <main className="min-h-screen bg-gray-50 px-4 py-10">
      <div className="mx-auto max-w-3xl rounded-2xl bg-white p-8 shadow-lg ring-1 ring-gray-100">
        <header className="border-b border-gray-100 pb-6">
          <p className="text-sm font-medium uppercase tracking-wide text-green-700">
            Player Portal
          </p>
          <h1 className="mt-2 text-3xl font-bold text-gray-900">
            Profile Overview
          </h1>
          <p className="mt-2 text-sm text-gray-500">
            Manage your personal information and keep your details up to date.
          </p>
        </header>

        <section className="mt-8 grid gap-6 md:grid-cols-2">
          <div className="rounded-lg border border-gray-100 p-6">
            <h2 className="text-sm font-semibold uppercase tracking-wide text-gray-500">
              Basic Info
            </h2>
            <dl className="mt-4 space-y-3 text-sm text-gray-700">
              <div className="flex justify-between">
                <dt className="font-medium text-gray-500">Name</dt>
                <dd>{user.name ?? 'Unnamed Player'}</dd>
              </div>
              <div className="flex justify-between">
                <dt className="font-medium text-gray-500">Email</dt>
                <dd>{user.email ?? 'Not provided'}</dd>
              </div>
              <div className="flex justify-between">
                <dt className="font-medium text-gray-500">Role</dt>
                <dd>{user.role}</dd>
              </div>
            </dl>
          </div>

          <div className="rounded-lg border border-gray-100 p-6">
            <h2 className="text-sm font-semibold uppercase tracking-wide text-gray-500">
              Status
            </h2>
            <p className="mt-3 text-sm text-gray-600">
              You are currently registered for the 2025 Lucas Masterpieces Moripe
              Goodwill Games season. Fixture assignments will appear once a coach
              adds you to an official match-day squad.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}


