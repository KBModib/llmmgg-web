
'use client';

import { useSearchParams } from 'next/navigation';
import LoginForm from '~/app/portal/login/LoginForm';
import Link from 'next/link';

// Define valid roles (must match the enum and the roles used in role-selector.tsx)
const VALID_ROLES = ['ADMIN', 'COACH', 'PLAYER'];
type UserRole = 'ADMIN' | 'COACH' | 'PLAYER';

export default function LoginFormPage() {
    const searchParams = useSearchParams();
    const roleParam = searchParams.get('role');
    
    // Validate the role from the query parameter
    const selectedRole = VALID_ROLES.includes(roleParam as string) 
        ? (roleParam as UserRole)
        : null;

    if (!selectedRole) {
        // If the role is missing or invalid, prompt the user to select one
        return (
            <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
                <div className="text-center p-8 bg-white shadow-lg rounded-xl">
                    <h2 className="text-2xl font-bold text-red-600 mb-4">Role Selection Required</h2>
                    <p className="text-gray-600 mb-6">Please select a valid role before logging in.</p>
                    <Link 
                        href="/portal/login"
                        className="text-white bg-green-600 hover:bg-green-700 py-2 px-4 rounded-md font-semibold transition"
                    >
                        Go Back to Role Selector
                    </Link>
                </div>
            </div>
        );
    }
    
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
            {/* Pass the validated role down to the LoginForm component */}
            <LoginForm initialRole={selectedRole} />
        </div>
    );
}