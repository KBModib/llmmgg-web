// Example: src/app/about/page.tsx

import type { Metadata } from 'next'; // App Router uses Metadata for titles

export const metadata: Metadata = {
  title: 'Login | Goodwill',
};

export default function EventsPage() {
  // This is a Server Component, so no "use client" needed unless you add interactivity
  return (
    <main className="p-8">
      <div>
        <h1>Log In</h1>
        <button>
            Admin
        </button>
        <button>
            Coach
        </button>
        <button>
            Player
        </button>

        <p>Don’t have an account?</p>
        <a href="/portal/register">Register</a>
      </div>
    </main>
  );
}