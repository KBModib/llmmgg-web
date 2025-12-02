import React from 'react';
import Link from 'next/link';
import { DashboardHeader } from "./DashboardHeader";

// Assuming user prop is passed down from the main dashboard page
interface PlayerDashboardProps {
  user: {
    fullName: string;
    email: string;
    role: 'PLAYER';
    // Add other relevant player data fields here
  };
}

const PlayerDashboard: React.FC<PlayerDashboardProps> = ({ user }) => {
  return (
    <div className="min-h-screen bg-gray-50">
      <DashboardHeader role="PLAYER" />

      {/* Main Content Area - Centered and Padded */}
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        {/* Page Title */}
        <div className="mb-8 border-b-4 border-green-700 pb-4">
          <h1 className="text-3xl font-bold text-gray-900">Player Dashboard</h1>
          <p className="mt-2 text-sm text-gray-600">
            Welcome back,{" "}
            <span className="font-semibold">{user.fullName ?? "Player"}</span>
          </p>
        </div>

        {/* 1. Action Buttons Grid (Kept) */}
        <div className="mb-10 grid grid-cols-2 gap-6 md:grid-cols-3">
          {/* Profile Button */}
          <Link
            href="/portal/dashboard/player/profile"
            className="col-span-1 flex items-center justify-center rounded-lg bg-green-600 p-10 text-xl font-bold text-white shadow-lg transition duration-200 hover:bg-green-700"
          >
            Profile
          </Link>

          {/* View Tournaments Button */}
          <Link
            href="/portal/dashboard/player/tournaments"
            className="col-span-1 flex items-center justify-center rounded-lg bg-green-600 p-10 text-xl font-bold text-white shadow-lg transition duration-200 hover:bg-green-700"
          >
            View Tournaments
          </Link>

          {/* View Fixtures Button */}
          <Link
            href="/portal/dashboard/player/fixtures"
            className="col-span-1 flex max-w-sm items-center justify-center rounded-lg bg-green-600 p-10 text-xl font-bold text-white shadow-lg transition duration-200 hover:bg-green-700"
          >
            View Fixtures
          </Link>
        </div>
      </div>

      {/* Background Dots Pattern (Visual detail from the image) */}
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

export default PlayerDashboard;