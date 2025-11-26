// src/app/login/LoginForm.tsx

'use client'; 

import React, { useState } from 'react';
import Link from 'next/link';

// Use the primary green color from your designs
const primaryGreen = '#3e7c13';

// Placeholder for an eye icon (visibility toggle) - use a simple SVG path
const EyeIcon = ({ onClick }: { onClick: () => void }) => (
    <button 
        type="button" 
        onClick={onClick} 
        className="absolute inset-y-0 right-0 pr-3 flex items-center text-white"
        aria-label="Toggle Password Visibility"
    >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.433 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
    </button>
);

export const LoginForm: React.FC = () => {
    const [passwordVisible, setPasswordVisible] = useState(false);

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };

    return (
        // Main container for the form, styled as a full-height card
        <div 
            className="w-full max-w-md mx-auto min-h-screen md:min-h-0 md:h-auto md:rounded-lg shadow-2xl overflow-hidden" 
            style={{ backgroundColor: primaryGreen }}
        >
            
            {/* Top Bar with Home Icon (Matches Registration Design) */}
            <div className="relative w-full h-16 md:h-12" style={{ backgroundColor: primaryGreen }}>
                <Link 
                    href="/" // Link back to the home page or portal landing
                    className="absolute right-4 top-4 rounded-full p-2 text-white transition hover:bg-white/10"
                    aria-label="Go to Homepage"
                >
                    {/* Home Icon SVG (Yellow fill to match design) */}
                    <svg xmlns="http://www.w3.org/2000/svg" fill="#FFC400" viewBox="0 0 24 24" strokeWidth={2} stroke="#FFC400" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.954c.407-.407 1.069-.407 1.476 0l8.954 8.954M17.25 18V9.5a.75.75 0 00-.75-.75H7.5a.75.75 0 00-.75.75V18a1.5 1.5 0 001.5 1.5h6a1.5 1.5 0 001.5-1.5z" />
                    </svg>
                </Link>
            </div>
            
            {/* Form Content Area */}
            <div className="p-8 sm:p-10 flex flex-col items-center space-y-4">
                <h1 className="text-3xl font-bold text-white mb-6">Login</h1>

                <form className="w-full space-y-6">
                    
                    {/* Username/Email Input */}
                    <div>
                        <label htmlFor="username" className="text-white text-sm font-semibold block mb-1">
                            Username or Email
                        </label>
                        <input
                            type="text"
                            id="username"
                            required
                            placeholder="Enter Username or Email"
                            className="w-full rounded-md border-0 px-4 py-3 text-gray-900 shadow-sm placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-yellow-400 sm:text-sm sm:leading-6"
                        />
                    </div>

                    {/* Password Field */}
                    <div className="relative">
                        <label htmlFor="password" className="text-white text-sm font-semibold block mb-1">
                            Password
                        </label>
                        <input
                            type={passwordVisible ? 'text' : 'password'}
                            id="password"
                            required
                            placeholder="Enter Password"
                            className="w-full rounded-md border-0 px-4 py-3 text-gray-900 shadow-sm focus:ring-2 focus:ring-inset focus:ring-yellow-400 sm:text-sm sm:leading-6"
                        />
                        <EyeIcon onClick={togglePasswordVisibility} />
                    </div>

                    {/* Login Button */}
                    <button
                        type="submit"
                        className="w-full mt-4 rounded-md bg-white py-3 text-lg font-semibold text-gray-800 shadow-sm transition hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2"
                    >
                        Log In
                    </button>
                    
                    {/* Registration link */}
                    <p className="text-center text-sm pt-2">
                        <Link href="/register" className="text-white hover:text-yellow-400 transition">
                            Don't have an account? Register Here
                        </Link>
                    </p>
                </form>
            </div>
        </div>
    );
};