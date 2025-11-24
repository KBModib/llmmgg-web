import type { Metadata } from 'next'; // App Router uses Metadata for titles
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Verify Registration | Goodwill',
};

export default function EventsPage() {
  // This is a Server Component, so no "use client" needed unless you add interactivity
  return (
    <main className="p-8">
        <div>
            <img src="null" alt="logo" />
            <h1>LUCAS MASTERPIECS MORIPE GOODWILL GAMES</h1>
            <p>A verification code has been sent to your email. <br />Please enter the code to verify your email address:</p>
            <input type="alphanumeric" name='Verification Code' />
            <button>
                <Link href='/portal/successreg'>
                    Verify Email
                </Link>
            </button>
        </div>
    </main>
  );
}