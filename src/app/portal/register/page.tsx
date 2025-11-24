import type { Metadata } from 'next'; // App Router uses Metadata for titles
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Registration | Goodwill',
};

export default function EventsPage() {
  // This is a Server Component, so no "use client" needed unless you add interactivity
  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold">Registration</h1>
      <form>
        <label>Full Name</label>
        <input type="text" />
        <label>Date of Birth</label>
        <input type="date" />
        <label>ID Number</label>
        <input type="numeric" />
        <label>Team Name</label>
        <input type="text" />
        <datalist>
            <data value="Select Role">Select Role</data>
            <data value="Player">Player</data>
            <data value="Coach/Team Head">Team Head</data>
            <data value="Admin">Admin</data>
        </datalist>
        <label>Password</label>
        <input type="alphamuneric" />
        <label>Confirm Password</label>
        <input type="alphanumeric" />
        <button>
            <Link href="/portal/verifye mail">
                Register
            </Link>
        </button>
      </form>
    </main>
  );
}