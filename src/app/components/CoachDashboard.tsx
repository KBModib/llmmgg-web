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

const CoachDashboard: React.FC<CoachDashboardProps> = ({ user }) => {
  return (
    <div className="min-h-screen bg-gray-50">
      <DashboardHeader />
      
      {/* Main Content Area - Centered and Padded */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        
        {/* Page Title */}
        <h1 className="text-3xl font-bold text-gray-900 mb-8 border-b-4 border-green-700 pb-2 inline-block">
          Coach Dashboard
        </h1>

        {/* Action Buttons Grid (2x2 layout) */}
        <div className="grid grid-cols-2 gap-6 max-w-4xl mx-auto">
          
          {/* Row 1 */}
          <Link href="/coach/manage-team" className="p-10 bg-green-700 hover:bg-green-800 text-white font-semibold text-xl rounded-lg shadow-lg flex items-center justify-center transition duration-200">
            Manage Team
          </Link>
          <Link href="/coach/manage-players" className="p-10 bg-green-700 hover:bg-green-800 text-white font-semibold text-xl rounded-lg shadow-lg flex items-center justify-center transition duration-200">
            Manage Players
          </Link>
          
          {/* Row 2 */}
          <Link href="/tournaments" className="p-10 bg-green-700 hover:bg-green-800 text-white font-semibold text-xl rounded-lg shadow-lg flex items-center justify-center transition duration-200">
            View Tournaments
          </Link>
          <Link href="/fixtures" className="p-10 bg-green-700 hover:bg-green-800 text-white font-semibold text-xl rounded-lg shadow-lg flex items-center justify-center transition duration-200">
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