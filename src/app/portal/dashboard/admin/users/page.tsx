// src/app/portal/dashboard/admin/users/page.tsx

import { auth } from "~/server/auth";
import { redirect } from "next/navigation";
import Link from "next/link";
import { db } from "~/server/db";
import { UserManagementClient } from "./UserManagementClient";

export default async function AdminUsersPage() {
  const session = await auth();

  if (session?.user.role !== "ADMIN") {
    redirect("/portal/dashboard");
  }

  const users = await db.user.findMany({
    select: {
      id: true,
      name: true,
      email: true,
      role: true,
      emailVerified: true,
      managedTeamId: true,
      managedTeam: {
        select: {
          name: true,
        },
      },
      playerProfile: {
        select: {
          id: true,
          team: {
            select: {
              name: true,
            },
          },
        },
      },
    },
    orderBy: { email: "asc" },
  });

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">
              User Management
            </h1>
            <p className="mt-2 text-sm text-gray-600">
              Manage user accounts and roles
            </p>
          </div>
          <Link
            href="/portal/dashboard/admin"
            className="rounded-lg bg-gray-600 px-4 py-2 text-white transition hover:bg-gray-700"
          >
            ← Back to Dashboard
          </Link>
        </div>

        <UserManagementClient users={users} />
      </div>
    </div>
  );
}
