import React from 'react';
import Link from 'next/link';

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
          href="/portal/dashboard/coach/team"
          className="text-white transition duration-150 hover:text-yellow-300"
        >
          TEAM
        </Link>
        <Link
          href="/portal/dashboard/coach/players"
          className="text-white transition duration-150 hover:text-yellow-300"
        >
          PLAYERS
        </Link>
        <Link
          href="/portal/dashboard/coach/tournaments"
          className="text-white transition duration-150 hover:text-yellow-300"
        >
          TOURNAMENTS
        </Link>
        <Link
          href="/portal/dashboard/coach/fixtures"
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

const CoachDashboard: React.FC<CoachDashboardProps> = ({ user }) => {
  return (
    <div className="min-h-screen bg-gray-50">
      <DashboardHeader />
      
      {/* Main Content Area - Centered and Padded */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        
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
      <div className="fixed inset-0 pointer-events-none opacity-20" style={{ backgroundImage: 'radial-gradient(circle, #00000010 1px, transparent 1px)', backgroundSize: '20px 20px', zIndex: -1 }}></div>

    </div>
  );
};

export default CoachDashboard;