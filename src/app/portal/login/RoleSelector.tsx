// src/app/login/RoleSelector.tsx

'use client'; 

import React from 'react';
import Link from 'next/link';

// Use the primary green color from your designs
const primaryGreen = '#3e7c13';

// Define the roles and their links (assuming you'll link to a common login form
// or a specific login form for that role, e.g., /login/admin)
const roles = [
    { name: 'Admin', href: '/login/admin' },
    { name: 'Coach', href: '/login/coach' },
    { name: 'Player', href: '/login/player' },
];

export const RoleSelector: React.FC = () => {
    return (
        // Main container for the form, styled as a full-height card
        <div 
            className="w-full max-w-md mx-auto min-h-screen md:min-h-0 md:h-auto md:rounded-lg shadow-2xl overflow-hidden" 
            style={{ backgroundColor: primaryGreen }}
        >
            
            {/* Top Bar with Home Icon (for navigation back to the Portal Landing) */}
            <div className="relative w-full h-16 md:h-12" style={{ backgroundColor: primaryGreen }}>
                <Link 
                    href="/portal" 
                    className="absolute right-4 top-4 rounded-full p-2 text-white transition hover:bg-white/10"
                    aria-label="Go back to Portal"
                >
                    {/* Home Icon SVG (Yellow fill to match design) */}
                    <svg xmlns="http://www.w3.org/2000/svg" fill="#FFC400" viewBox="0 0 24 24" strokeWidth={2} stroke="#FFC400" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.954c.407-.407 1.069-.407 1.476 0l8.954 8.954M17.25 18V9.5a.75.75 0 00-.75-.75H7.5a.75.75 0 00-.75.75V18a1.5 1.5 0 001.5 1.5h6a1.5 1.5 0 001.5-1.5z" />
                    </svg>
                </Link>
            </div>
            
            {/* Content Area */}
            <div className="p-8 sm:p-10 flex flex-col items-center text-center space-y-8">
                <h1 className="text-3xl font-bold text-white mt-4">Log In</h1>
                
                <p className="text-white text-lg font-light">
                    Please select your role to proceed to the login form.
                </p>

                {/* Role Selection Buttons */}
                <div className="w-full space-y-4">
                    {roles.map((role) => (
                        <Link 
                            key={role.name}
                            href={role.href}
                            className="w-full block rounded-md py-3 text-xl font-semibold text-gray-800 shadow-md transition hover:bg-yellow-400 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2"
                            style={{ backgroundColor: 'white' }}
                        >
                            {role.name}
                        </Link>
                    ))}
                </div>

                {/* Registration Link */}
                <div className="pt-4">
                    <p className="text-sm text-white mb-2">Don’t have an account?</p>
                    <Link 
                        href="/register"
                        className="text-yellow-400 font-semibold hover:text-white transition"
                    >
                        Register Here
                    </Link>
                </div>
            </div>
        </div>
    );
};