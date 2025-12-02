import React from 'react';
import Link from 'next/link';

// Assuming user prop is passed down from the main dashboard page
interface AdminDashboardProps {
  user: {
    id: string;
    email?: string | null;
    name?: string | null;
    role: "ADMIN";
    // Add other relevant admin data fields here
  };
  // Placeholder data props for the stats boxes
  stats?: {
    activeTournaments: number;
    registeredTeams: number;
    totalPlayers: number;
    upcomingFixtures: number;
  };
}

// Helper component for the Navigation (Header) - Consistent across dashboards
const DashboardHeader: React.FC = () => (
  <header className="bg-green-700 shadow-md">
    <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
      {/* Logo/Brand Section */}
      <div className="flex items-center space-x-4">
        <div className="flex items-center text-lg font-bold text-white">
          {/* Placeholder for the Logo */}
          <div className="mr-2 flex h-8 w-8 items-center justify-center rounded-full border border-white bg-green-500 text-xs font-extrabold text-green-900">
            LG
          </div>
          <span className="text-sm font-extrabold tracking-wider uppercase">
            GreenLeague LTD
          </span>
        </div>
      </div>

      {/* Navigation Links */}
      <nav className="flex space-x-6 text-sm font-semibold">
        <Link
          href="/portal/dashboard"
          className="text-white transition duration-150 hover:text-yellow-300"
        >
          DASHBOARD
        </Link>
        <Link
          href="/tournaments"
          className="text-white transition duration-150 hover:text-yellow-300"
        >
          TOURNAMENTS
        </Link>
        <Link
          href="/teams"
          className="text-white transition duration-150 hover:text-yellow-300"
        >
          TEAMS
        </Link>
        <Link
          href="/players"
          className="text-white transition duration-150 hover:text-yellow-300"
        >
          PLAYERS
        </Link>
        <Link
          href="/fixtures"
          className="text-white transition duration-150 hover:text-yellow-300"
        >
          FIXTURES
        </Link>
      </nav>

      {/* Logout Button */}
      <button className="rounded bg-red-600 px-3 py-1 text-sm font-semibold text-white transition duration-150 hover:bg-red-700">
        LOGOUT
      </button>
    </div>
  </header>
);

// Helper component for the Stat Box (Card)
interface StatCardProps {
  value: number;
  label: string;
}
const StatCard: React.FC<StatCardProps> = ({ value, label }) => (
  <div className="rounded-lg border border-gray-200 bg-white p-6 text-center shadow-md">
    <p className="mb-1 text-3xl font-bold text-gray-800">{value}</p>
    <p className="text-sm text-gray-500">{label}</p>
  </div>
);

const AdminDashboard: React.FC<AdminDashboardProps> = ({ user, stats }) => {
  const safeStats = stats ?? {
    activeTournaments: 0,
    registeredTeams: 0,
    totalPlayers: 0,
    upcomingFixtures: 0,
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <DashboardHeader />

      {/* Main Content Area - Centered and Padded */}
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        {/* Page Title */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Admin Dashboard</h1>
          <p className="mt-2 text-sm text-gray-600">
            Signed in as{" "}
            <span className="font-semibold">{user.name ?? "Admin User"}</span>
            {user.email ? ` (${user.email})` : null}
          </p>
        </div>

        {/* 1. Statistics Cards Grid (4 boxes) */}
        <div className="mb-10 grid grid-cols-2 gap-6 md:grid-cols-4">
          <StatCard
            value={safeStats.activeTournaments}
            label="Active Tournaments"
          />
          <StatCard
            value={safeStats.registeredTeams}
            label="Registered Teams"
          />
          <StatCard value={safeStats.totalPlayers} label="Total Players" />
          <StatCard
            value={safeStats.upcomingFixtures}
            label="Upcoming Fixtures"
          />
        </div>

        <hr className="mb-10 border-gray-300" />

        {/* 2. Management Action Buttons Grid (2x2 layout) */}
        <div className="grid grid-cols-2 gap-6">
          {/* Row 1 */}
          <Link
            href="/admin/tournaments"
            className="flex items-center justify-center rounded-lg bg-green-700 p-8 text-lg font-semibold text-white shadow-lg transition duration-200 hover:bg-green-800"
          >
            Manage Tournaments
          </Link>
          <Link
            href="/admin/teams"
            className="flex items-center justify-center rounded-lg bg-green-700 p-8 text-lg font-semibold text-white shadow-lg transition duration-200 hover:bg-green-800"
          >
            Manage Teams
          </Link>

          {/* Row 2 */}
          <Link
            href="/admin/players"
            className="flex items-center justify-center rounded-lg bg-green-700 p-8 text-lg font-semibold text-white shadow-lg transition duration-200 hover:bg-green-800"
          >
            Manage Players
          </Link>
          <Link
            href="/admin/fixtures"
            className="flex items-center justify-center rounded-lg bg-green-700 p-8 text-lg font-semibold text-white shadow-lg transition duration-200 hover:bg-green-800"
          >
            Manage Fixtures
          </Link>
        </div>
      </div>

      {/* Background Dots Pattern (Visual detail) */}
      <div
        className="pointer-events-none fixed inset-0 opacity-20"
        style={{
          backgroundImage:
            "radial-gradient(circle, #00000010 1px, transparent 1px)",
          backgroundSize: "20px 20px",
          zIndex: -1,
        }}
      ></div>
    </div>
  );
};

export default AdminDashboard;