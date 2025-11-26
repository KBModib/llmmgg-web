'use client'; 

import Link from 'next/link';
import React, { useState } from 'react';

// Use the primary green color from your designs
const primaryGreen = '#3e7c13';

// Placeholder for an eye icon (visibility toggle) - use a simple SVG path
const EyeIcon = ({ onClick }: { onClick: () => void }) => (
    <button 
        type="button" 
        onClick={onClick} 
        className="absolute inset-y-0 right-0 pr-3 flex items-center text-white h-10 mt-8"
        aria-label="Toggle Password Visibility"
    >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.433 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
    </button>
);

export const RegistrationForm: React.FC = () => {
    // State to toggle password visibility
    const [passwordVisible, setPasswordVisible] = useState(false);

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };

    return (
        <div 
            className="w-full max-w-md mx-auto min-h-screen md:min-h-0 md:h-auto md:rounded-lg shadow-2xl overflow-hidden" 
            style={{ backgroundColor: primaryGreen }}
        >
            
            <div className="p-8 sm:p-10 flex flex-col items-center space-y-4">
                <h1 className="text-3xl font-bold text-white mb-6">Registration</h1>

                <form className="w-full space-y-6">
                    {['Full Name', 'Date of Birth', 'ID Number', 'Team Name'].map((label, index) => (
                        <div key={index}>
                            <label htmlFor={label.toLowerCase().replace(/\s/g, '-')} className="text-white text-sm font-semibold block mb-1">
                                {label}
                            </label>
                            <input
                                type={label === 'Date of Birth' ? 'date' : (label === 'ID Number' ? 'number' : 'text')}
                                id={label.toLowerCase().replace(/\s/g, '-')}
                                required
                                className="w-full rounded-md border-white border-1 px-4 py-3 text-gray-900 shadow-sm placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-yellow-400 sm:text-sm sm:leading-6"
                            />
                        </div>
                    ))}

                    {/* Role Selection (Dropdown) */}
                    <div>
                        <label htmlFor="role-select" className="text-white text-sm font-semibold block mb-1">
                            Role
                        </label>
                        <div className="relative">
                            <select
                                id="role-select"
                                required
                                defaultValue="Select Role"
                                className="w-full appearance-none rounded-md border-0 bg-white px-4 py-3 text-gray-900 shadow-sm focus:ring-2 focus:ring-inset focus:ring-yellow-400 sm:text-sm sm:leading-6"
                            >
                                <option disabled>Select Role</option>
                                <option value="Player">Player</option>
                                <option value="Coach/Team Head">Coach</option>
                                <option value="Admin">Admin</option>
                            </select>
                            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                            </div>
                        </div>
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
                            className="w-full rounded-md border-1 border-white px-4 py-3 text-gray-900 shadow-sm focus:ring-2 focus:ring-inset focus:ring-yellow-400 sm:text-sm sm:leading-6"
                        />
                        <EyeIcon onClick={togglePasswordVisibility} />
                    </div>

                    {/* Confirm Password Field */}
                    <div className="relative">
                        <label htmlFor="confirm-password" className="text-white text-sm font-semibold block mb-1">
                            Confirm Password
                        </label>
                        <input
                            type={passwordVisible ? 'text' : 'password'}
                            id="confirm-password"
                            required
                            className="w-full rounded-md border-1 border-white px-4 py-3 text-gray-900 shadow-sm focus:ring-2 focus:ring-inset focus:ring-yellow-400 sm:text-sm sm:leading-6"
                        />
                        <EyeIcon onClick={togglePasswordVisibility} />
                    </div>

                    {/* Register Button */}
                    <button
                        type="submit"
                        className="w-full mt-4 rounded-md bg-white py-3 text-lg font-semibold text-gray-800 shadow-sm transition hover:bg-[#ffd52c] focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2"
                    >
                        Register
                    </button>
                    
                    {/* Login link */}
                    <p className="text-center text-sm pt-2">
                        <Link href="/portal/login" className="text-white hover:text-yellow-400 transition">
                            Already have an account? Log In
                        </Link>
                    </p>
                </form>
            </div>
        </div>
    );
};