'use client'; 

import React from 'react';
import Link from 'next/link';

// Use the primary green color from your designs
const primaryGreen = '#3e7c13';

// Define the roles and their links, using a query parameter for the role
const roles = [
    // The roleParam must exactly match the enum values (ADMIN, COACH, PLAYER) used in the backend
    { name: 'Admin', roleParam: 'ADMIN' },
    { name: 'Coach', roleParam: 'COACH' },
    { name: 'Player', roleParam: 'PLAYER' },
];

export const RoleSelector: React.FC = () => {
    return (
        <div 
            className="w-full max-w-lg mx-auto md:rounded-lg shadow-2xl overflow-hidden bg-white" 
        >
            {/* Header Area */}
            <div className="p-8 sm:p-10 flex flex-col items-center text-center" style={{ backgroundColor: primaryGreen }}>
                <h1 className="text-3xl font-bold text-white mt-4">Log In</h1>
                
                <p className="text-white text-lg font-light mt-2">
                    Please select your role to proceed to the login form.
                </p>
            </div>

            {/* Role Selection Buttons */}
            <div className="p-8 sm:p-10 space-y-4">
                {roles.map((role) => (
                    <Link 
                        key={role.roleParam}
                        // Directs to the unified login form, passing the role as a query parameter
                        href={`/login/form?role=${role.roleParam}`} 
                        className="w-full block rounded-md py-4 px-4 text-xl font-semibold text-gray-800 shadow-md transition hover:bg-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-offset-2 flex items-center justify-between"
                        style={{ backgroundColor: 'white', border: `2px solid ${primaryGreen}` }}
                    >
                        <div className='text-left'>
                            <p className="text-xl font-bold text-gray-800">{role.name}</p>
                        </div>
                        <svg className="w-6 h-6 text-gray-600 ml-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                        </svg>
                    </Link>
                ))}
            </div>

            {/* Registration Link */}
            <div className="p-4 bg-gray-50 border-t text-center">
                <p className="text-sm text-gray-600 mb-2">Don’t have an account?</p>
                <Link 
                    href="/portal/register" 
                    className="text-blue-600 font-semibold hover:text-blue-800 transition"
                >
                    Register Now
                </Link>
            </div>
        </div>
    );
};