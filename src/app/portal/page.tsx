// Example: src/app/about/page.tsx

import type { Metadata } from 'next'; // App Router uses Metadata for titles
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Portal | Goodwill',
};

export default function EventsPage() {
  // This is a Server Component, so no "use client" needed unless you add interactivity
  return (
    <main className="p-8">
        <img src="null" alt="logo" />
        <h1 className="text-3xl font-bold">LUCAS MASTERPIECS MORIPE <br />GOODWILL GAMES</h1>
        <Link href="/portal/register">
            Register
        </Link>
        <p>Register to get started</p>
        <Link href="/portal/login">
        Login
        </Link>
        <p>Already registered as admin, coach or player? Log in here</p>
    </main>
  );
}