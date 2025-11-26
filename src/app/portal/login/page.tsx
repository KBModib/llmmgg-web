// src/app/login/page.tsx

import type { Metadata } from 'next';
import { RoleSelector } from './RoleSelector';

export const metadata: Metadata = {
    title: 'Login | Goodwill Games',
    description: 'Select your user role (Admin, Coach, Player) to log into the portal.',
};

export default function LoginPage() {
    return (
        <main className="flex min-h-screen items-center justify-center bg-gray-100 p-4 sm:p-6">
            <RoleSelector />
        </main>
    );
}