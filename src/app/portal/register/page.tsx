// src/app/(auth)/register/page.tsx

import type { Metadata } from 'next';
import { RegistrationForm } from './RegistrationForm';

// Metadata for the page
export const metadata: Metadata = {
    title: 'Registration | Goodwill Games',
    description: 'Register for the Lucas Masterpieces Moripe Goodwill Games.',
};

// This component is a Server Component by default
export default function RegisterPage() {
    return (
        // Center the form card in the viewport
        <main className="flex min-h-screen items-center justify-center bg-gray-100 p-4 sm:p-6">
            <RegistrationForm />
        </main>
    );
}