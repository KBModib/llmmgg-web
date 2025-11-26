
'use client'; 

import React from 'react';
import Link from 'next/link';

// Use the primary green color from your designs
const primaryGreen = '#3e7c13';

// Define the roles and their links (assuming you'll link to a common login form
// or a specific login form for that role, e.g., /login/admin)
const roles = [
    { name: 'Admin', href: '/portal/login/admin' },
    { name: 'Coach', href: '/portal/login/coach' },
    { name: 'Player', href: 'portal/login/player' },
];

export const RoleSelector: React.FC = () => {
    return (
        <div 
            className="w-full max-w-md mx-auto min-h-screen md:min-h-0 md:h-auto md:rounded-lg shadow-2xl overflow-hidden" 
            style={{ backgroundColor: primaryGreen }}
        >
            <div className="p-6 sm:p-10 flex flex-col items-center text-center space-y-8">
                <h1 className="text-3xl font-bold text-white mt-4">Log In</h1>
                
                <p className="text-white text-lg font-light">
                    Please select your role to proceed to the login form.
                </p>
                <div className="w-full space-y-4">
                    {roles.map((role) => (
                        <Link 
                            key={role.name}
                            href={role.href}
                            className="w-full block rounded-md py-3 text-xl font-semibold text-gray-800 shadow-md transition hover:bg-[#ffd52c] focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2"
                            style={{ backgroundColor: 'white' }}
                        >
                            {role.name}
                        </Link>
                    ))}
                </div>
                <div className="pt-4">
                    <p className="text-sm text-white mb-2">Don’t have an account?</p>
                    <Link 
                        href="/portal/register"
                        className="text-yellow-400 font-semibold hover:text-white transition"
                    >
                        Register
                    </Link>
                </div>
            </div>
        </div>
    );
};