'use client'; 

import React from 'react';
import Link from 'next/link';

// Define a more vibrant green and a subtle background pattern
const primaryGreen = '#4CAF50'; // Vibrant green
const darkGreen = '#388E3C'; // Darker green for hover
const lightBgPattern = `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 0h-2v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`;

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
            className="min-h-screen flex w-[50%] items-center justify-center py-12 px-4 sm:px-6 lg:px-8"
            style={{ backgroundColor: '#f0f2f5', backgroundImage: lightBgPattern }} // Apply subtle pattern
        >
            <div 
                className="w-full mx-auto rounded-2xl shadow-2xl overflow-hidden" // More rounded and prominent shadow
            >
                {/* Header Area */}
                <div 
                    className="p-8 sm:p-10 flex flex-col items-center text-center rounded-t-2xl" 
                    style={{ backgroundColor: '#3e7c13' }}
                >
                    <h1 className="text-4xl font-extrabold text-white mt-4 tracking-tight">Log In</h1> 
                    
                    <p className="text-white text-lg font-light mt-2 opacity-90">
                        Select your role to proceed.
                    </p>
                </div>

                {/* Role Selection Buttons */}
                <div className="p-8 sm:p-10 space-y-5 bg-[#3e7c13]"> {/* Increased spacing and white background */}
                    {roles.map((role) => (
                        <Link 
                            key={role.roleParam}
                            href={`/portal/login/form?role=${role.roleParam}`} 
                            className="w-full flex justify-center py-4 px-6 border-2 border-transparent rounded-xl text-2xl font-semibold text-gray-800 shadow-md transition-all duration-200 ease-in-out
                                       hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-offset-2 focus:ring-green-400"
                            style={{ backgroundColor: 'white', color:primaryGreen, borderColor: 'white'}} // White button with green border and text
                        >
                            {role.name}
                        </Link>
                    ))}
                </div>

                {/* Registration Link */}
                <div className="p-6 bg-[#3e7c13] text-center rounded-b-2xl">
                    <p className="text-sm text-white mb-3">Don’t have an account?</p>
                    <Link 
                        href="/portal/register" 
                        className="text-base font-semibold transition duration-200 ease-in-out text-[#938c13] hover-[#ffd52c]"
                    >
                        Register Now
                    </Link>
                </div>
            </div>
        </div>
    );
};