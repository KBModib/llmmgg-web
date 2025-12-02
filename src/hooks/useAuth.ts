// src/hooks/useAuth.ts
'use client';

import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

type UserRole = 'ADMIN' | 'COACH' | 'PLAYER';

// Centralised redirect mapping based on user role
export const getRedirectPath = (role: UserRole): string => {
  switch (role) {
    case 'ADMIN':
      // Admins see the consolidated portal dashboard which renders the admin view
      return '/portal/dashboard';
    case 'COACH':
      // Coaches have a dedicated dashboard route
      return '/portal/dashboard';
    case 'PLAYER':
      // Players use the main portal dashboard
      return '/portal/dashboard';
    default:
      return '/';
  }
};

interface UseAuthOptions {
  /**
   * Optional custom route to redirect unauthenticated users to.
   * Defaults to the portal login selector.
   */
  redirectTo?: string;
  /**
   * Toggle automatic redirection behaviour.
   * Defaults to true.
   */
  enableRedirect?: boolean;
}

export const useAuth = (options?: UseAuthOptions) => {
  const { data: session, status } = useSession();
  const router = useRouter();

  const isLoading = status === 'loading';
  const isAuthenticated = status === 'authenticated';

  useEffect(() => {
    const shouldRedirect = options?.enableRedirect ?? true;
    if (!shouldRedirect) return;

    if (!isLoading && !isAuthenticated) {
      router.push(options?.redirectTo ?? '/portal/login');
    }
  }, [isLoading, isAuthenticated, options?.redirectTo, options?.enableRedirect, router]);

  return {
    user: session?.user ?? null,
    isLoading,
    isAuthenticated,
  };
};


