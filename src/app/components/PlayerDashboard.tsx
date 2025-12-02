import React from 'react';
import Link from 'next/link';

// Assuming user prop is passed down from the main dashboard page
interface PlayerDashboardProps {
  user: {
    fullName: string;
    email: string;
    role: 'PLAYER';
    // Add other relevant player data fields here
  };
}

// Helper component for the Navigation (Header) - unchanged
const DashboardHeader: React.FC = () => (
  <header className="bg-green-700 shadow-md">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between py-4">
      {/* Logo/Brand Section */}
      <div className="flex items-center space-x-4">
        <div className="text-white text-lg font-bold flex items-center">
          {/* Placeholder for the Logo (Green background with yellow/green logo text) */}
          <div className="w-8 h-8 mr-2 rounded-full bg-green-500 flex items-center justify-center text-xs text-green-900 font-extrabold border border-white">
            LG
          </div>
          <span className="text-sm font-extrabold tracking-wider uppercase">GreenLeague LTD</span>
        </div>
      </div>

      {/* Navigation Links */}
      <nav className="flex space-x-6 text-sm font-semibold">
        <Link href="/portal/dashboard" className="text-white hover:text-yellow-300 transition duration-150">
          DASHBOARD
        </Link>
        <Link href="/portal/dashboard/player/profile" className="text-white hover:text-yellow-300 transition duration-150">
          PROFILE
        </Link>
        <Link href="/portal/dashboard/player/tournaments" className="text-white hover:text-yellow-300 transition duration-150">
          TOURNAMENTS
        </Link>
        <Link href="/portal/dashboard/player/fixtures" className="text-white hover:text-yellow-300 transition duration-150">
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

const PlayerDashboard: React.FC<PlayerDashboardProps> = ({ user }) => {
  return (
    <div className="min-h-screen bg-gray-50">
      <DashboardHeader />
      
      {/* Main Content Area - Centered and Padded */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        
        {/* Page Title */}
        <div className="mb-8 border-b-4 border-green-700 pb-4">
          <h1 className="text-3xl font-bold text-gray-900">
            Player Dashboard
          </h1>
          <p className="mt-2 text-sm text-gray-600">
            Welcome back, <span className="font-semibold">{user.fullName ?? 'Player'}</span>
          </p>
        </div>

        {/* 1. Action Buttons Grid (Kept) */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-10">
          
          {/* Profile Button */}
          <Link href="/portal/dashboard/player/profile" className="p-10 bg-green-600 hover:bg-green-700 text-white font-bold text-xl rounded-lg shadow-lg flex items-center justify-center transition duration-200 col-span-1">
            Profile
          </Link>
          
          {/* View Tournaments Button */}
          <Link href="/portal/dashboard/player/tournaments" className="p-10 bg-green-600 hover:bg-green-700 text-white font-bold text-xl rounded-lg shadow-lg flex items-center justify-center transition duration-200 col-span-1">
            View Tournaments
          </Link>
          
          {/* View Fixtures Button */}
          <Link href="/portal/dashboard/player/fixtures" className="p-10 bg-green-600 hover:bg-green-700 text-white font-bold text-xl rounded-lg shadow-lg flex items-center justify-center transition duration-200 col-span-1 max-w-sm">
            View Fixtures
          </Link>
          
        </div>
      </div>
      
      {/* Background Dots Pattern (Visual detail from the image) */}
      <div className="fixed inset-0 pointer-events-none opacity-20" style={{ backgroundImage: 'radial-gradient(circle, #00000010 1px, transparent 1px)', backgroundSize: '20px 20px', zIndex: -1 }}></div>

    </div>
  );
};

export default PlayerDashboard;