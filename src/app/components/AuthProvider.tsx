// src/components/AuthProvider.tsx

"use client"; // Must be a client component

import { SessionProvider } from "next-auth/react";
import React from "react";

// This component acts as a wrapper to provide the NextAuth context to the client.
export default function AuthProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return <SessionProvider>{children}</SessionProvider>;
}