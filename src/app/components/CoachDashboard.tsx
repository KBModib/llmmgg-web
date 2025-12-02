import React from 'react';
import Link from 'next/link';
import { DashboardHeader } from "./DashboardHeader";

// Assuming user prop is passed down from the main dashboard page
interface CoachDashboardProps {
  user: {
    fullName: string;
    email: string;
    role: 'COACH';
    teamName: string; 
    // Add other relevant coach data fields here
  };
}

const CoachDashboard: React.FC<CoachDashboardProps> = ({ user }) => {
  return (
    <div className="min-h-screen bg-gray-50">
      <DashboardHeader role="COACH" />

      {/* Main Content Area - Centered and Padded */}
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        {/* Page Title */}
        <div className="mb-8 inline-block border-b-4 border-green-700 pb-2">
          <h1 className="text-3xl font-bold text-gray-900">Coach Dashboard</h1>
          <p className="mt-2 text-sm text-gray-600">
            Managing <span className="font-semibold">{user.teamName}</span>
          </p>
        </div>

        {/* Action Buttons Grid (2x2 layout) */}
        <div className="mx-auto grid max-w-4xl grid-cols-2 gap-6">
          {/* Row 1 */}
          <Link
            href="/portal/dashboard/coach/team"
            className="flex items-center justify-center rounded-lg bg-green-700 p-10 text-xl font-semibold text-white shadow-lg transition duration-200 hover:bg-green-800"
          >
            Manage Team
          </Link>
          <Link
            href="/portal/dashboard/coach/players"
            className="flex items-center justify-center rounded-lg bg-green-700 p-10 text-xl font-semibold text-white shadow-lg transition duration-200 hover:bg-green-800"
          >
            Manage Players
          </Link>

          {/* Row 2 */}
          <Link
            href="/portal/dashboard/coach/tournaments"
            className="flex items-center justify-center rounded-lg bg-green-700 p-10 text-xl font-semibold text-white shadow-lg transition duration-200 hover:bg-green-800"
          >
            View Tournaments
          </Link>
          <Link
            href="/portal/dashboard/coach/fixtures"
            className="flex items-center justify-center rounded-lg bg-green-700 p-10 text-xl font-semibold text-white shadow-lg transition duration-200 hover:bg-green-800"
          >
            View Fixtures
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

export default CoachDashboard;