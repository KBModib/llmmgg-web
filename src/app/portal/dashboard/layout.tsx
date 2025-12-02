'use client';

import { useSession } from 'next-auth/react';
import { DashboardHeader } from '~/app/components/DashboardHeader';
import LoadingSpinner from '~/app/components/common/LoadingSpinner';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { data: session, status } = useSession();

  if (status === 'loading') {
    return <LoadingSpinner />;
  }

  const role = session?.user?.role;

  return (
    <>
      {role && <DashboardHeader role={role} />}
      {children}
    </>
  );
}
