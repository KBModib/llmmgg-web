import React from 'react';
import Link from 'next/link';

// Assuming user prop is passed down from the main dashboard page
interface AdminDashboardProps {
  user: {
    fullName: string;
    email: string;
    role: 'ADMIN';
    // Add other relevant admin data fields here
  };
  // Placeholder data props for the stats boxes
  stats: {
    activeTournaments: number;
    registeredTeams: number;
    totalPlayers: number;
    upcomingFixtures: number;
  }
}

// Helper component for the Navigation (Header) - Consistent across dashboards
const DashboardHeader: React.FC = () => (
  <header className="bg-green-700 shadow-md">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between py-4">
      {/* Logo/Brand Section */}
      <div className="flex items-center space-x-4">
        <div className="text-white text-lg font-bold flex items-center">
          {/* Placeholder for the Logo */}
          <div className="w-8 h-8 mr-2 rounded-full bg-green-500 flex items-center justify-center text-xs text-green-900 font-extrabold border border-white">
            LG
          </div>
          <span className="text-sm font-extrabold tracking-wider uppercase">GreenLeague LTD</span>
        </div>
      </div>

      {/* Navigation Links */}
      <nav className="flex space-x-6 text-sm font-semibold">
        <Link href="/dashboard" className="text-white hover:text-yellow-300 transition duration-150">
          DASHBOARD
        </Link>
        <Link href="/tournaments" className="text-white hover:text-yellow-300 transition duration-150">
          TOURNAMENTS
        </Link>
        <Link href="/teams" className="text-white hover:text-yellow-300 transition duration-150">
          TEAMS
        </Link>
        <Link href="/players" className="text-white hover:text-yellow-300 transition duration-150">
          PLAYERS
        </Link>
        <Link href="/fixtures" className="text-white hover:text-yellow-300 transition duration-150">
          FIXTURES
        </Link>
      </nav>

      {/* Logout Button */}
      <button className="text-white bg-red-600 hover:bg-red-700 px-3 py-1 rounded text-sm font-semibold transition duration-150">
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
    <div className="bg-white p-6 border border-gray-200 rounded-lg shadow-md text-center">
        <p className="text-3xl font-bold text-gray-800 mb-1">{value}</p>
        <p className="text-sm text-gray-500">{label}</p>
    </div>
);


const AdminDashboard: React.FC<AdminDashboardProps> = ({ user, stats }) => {
  return (
    <div className="min-h-screen bg-gray-50">
      <DashboardHeader />
      
      {/* Main Content Area - Centered and Padded */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        
        {/* Page Title */}
        <h1 className="text-3xl font-bold text-gray-900 mb-8">
          Admin Dashboard
        </h1>

        {/* 1. Statistics Cards Grid (4 boxes) */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10">
          <StatCard value={stats.activeTournaments} label="Active Tournaments" />
          <StatCard value={stats.registeredTeams} label="Registered Teams" />
          <StatCard value={stats.totalPlayers} label="Total Players" />
          <StatCard value={stats.upcomingFixtures} label="Upcoming Fixtures" />
        </div>

        <hr className="mb-10 border-gray-300" />
        
        {/* 2. Management Action Buttons Grid (2x2 layout) */}
        <div className="grid grid-cols-2 gap-6">
          
          {/* Row 1 */}
          <Link href="/admin/tournaments" className="p-8 bg-green-700 hover:bg-green-800 text-white font-semibold text-lg rounded-lg shadow-lg flex items-center justify-center transition duration-200">
            Manage Tournaments
          </Link>
          <Link href="/admin/teams" className="p-8 bg-green-700 hover:bg-green-800 text-white font-semibold text-lg rounded-lg shadow-lg flex items-center justify-center transition duration-200">
            Manage Teams
          </Link>
          
          {/* Row 2 */}
          <Link href="/admin/players" className="p-8 bg-green-700 hover:bg-green-800 text-white font-semibold text-lg rounded-lg shadow-lg flex items-center justify-center transition duration-200">
            Manage Players
          </Link>
          <Link href="/admin/fixtures" className="p-8 bg-green-700 hover:bg-green-800 text-white font-semibold text-lg rounded-lg shadow-lg flex items-center justify-center transition duration-200">
            Manage Fixtures
          </Link>
          
        </div>
      </div>
      
      {/* Background Dots Pattern (Visual detail) */}
      <div className="fixed inset-0 pointer-events-none opacity-20" style={{ backgroundImage: 'radial-gradient(circle, #00000010 1px, transparent 1px)', backgroundSize: '20px 20px', zIndex: -1 }}></div>

    </div>
  );
};

export default AdminDashboard;