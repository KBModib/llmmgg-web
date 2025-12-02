'use client';

import { useSession, signOut } from 'next-auth/react';
import { usePathname } from 'next/navigation';
import { Navbar } from './Navbar';

export default function NavbarWrapper() {
  const { data: session, status } = useSession();
  const pathname = usePathname();
  
  const handleSignOut = async () => {
    await signOut({ callbackUrl: '/' });
  };

  // Hide main navbar on dashboard pages - they use DashboardHeader instead
  const isDashboardPage = pathname?.startsWith('/portal/dashboard');
  
  if (isDashboardPage && session) {
    return null;
  }

  return (
    <Navbar 
      status={status}
      loggedIn={!!session}
      signOut={handleSignOut}
    />
  );
}
