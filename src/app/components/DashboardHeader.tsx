'use client';

import React from 'react';
import Link from 'next/link';
import { signOut } from 'next-auth/react';

interface DashboardHeaderProps {
  role: 'ADMIN' | 'COACH' | 'PLAYER';
}

export const DashboardHeader: React.FC<DashboardHeaderProps> = ({ role }) => {
  const handleLogout = async () => {
    await signOut({ callbackUrl: '/' });
  };

  const getNavLinks = () => {
    switch (role) {
      case 'ADMIN':
        return [
          { href: '/portal/dashboard', label: 'DASHBOARD' },
          { href: '/portal/dashboard/admin/tournaments', label: 'TOURNAMENTS' },
          { href: '/portal/dashboard/admin/teams', label: 'TEAMS' },
          { href: '/portal/dashboard/admin/players', label: 'PLAYERS' },
          { href: '/portal/dashboard/admin/fixtures', label: 'FIXTURES' },
        ];
      case 'COACH':
        return [
          { href: '/portal/dashboard', label: 'DASHBOARD' },
          { href: '/portal/dashboard/coach/team', label: 'TEAM' },
          { href: '/portal/dashboard/coach/players', label: 'PLAYERS' },
          { href: '/portal/dashboard/coach/tournaments', label: 'TOURNAMENTS' },
          { href: '/portal/dashboard/coach/fixtures', label: 'FIXTURES' },
        ];
      case 'PLAYER':
        return [
          { href: '/portal/dashboard', label: 'DASHBOARD' },
          { href: '/portal/dashboard/player/profile', label: 'PROFILE' },
          { href: '/portal/dashboard/player/tournaments', label: 'TOURNAMENTS' },
          { href: '/portal/dashboard/player/fixtures', label: 'FIXTURES' },
        ];
      default:
        return [];
    }
  };

  const navLinks = getNavLinks();

  return (
    <header className="bg-green-700 shadow-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        {/* Logo/Brand Section */}
        <div className="flex items-center space-x-4">
          <div className="flex items-center text-lg font-bold text-white">
            <div className="mr-2 flex h-8 w-8 items-center justify-center rounded-full border border-white bg-green-500 text-xs font-extrabold text-green-900">
              LG
            </div>
            <span className="text-sm font-extrabold uppercase tracking-wider">
              GreenLeague LTD
            </span>
          </div>
        </div>

        {/* Navigation Links */}
        <nav className="flex space-x-6 text-sm font-semibold">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-white transition duration-150 hover:text-yellow-300"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Logout Button */}
        <button
          onClick={handleLogout}
          className="rounded bg-red-600 px-3 py-1 text-sm font-semibold text-white transition duration-150 hover:bg-red-700"
        >
          LOGOUT
        </button>
      </div>
    </header>
  );
};
