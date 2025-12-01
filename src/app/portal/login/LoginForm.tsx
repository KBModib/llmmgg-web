// src/app/login/form/LoginForm.tsx

'use client';

import React, { useState } from 'react';
import { signIn } from 'next-auth/react';
import { useRouter, useSearchParams } from 'next/navigation'; // <-- Key imports
import Link from 'next/link';

const primaryGreen = '#3e7c13';

// Placeholder for an eye icon (visibility toggle)
const EyeIcon = ({ onClick, isPasswordVisible }: { onClick: () => void, isPasswordVisible: boolean }) => (
    <button 
        type="button" 
        onClick={onClick} 
        className="absolute right-0 top-1/2 transform -translate-y-1/2 pr-3 flex items-center text-gray-700 transition hover:text-gray-900"
        aria-label="Toggle Password Visibility"
    >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
            {isPasswordVisible ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.433 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
            ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 001.934 12c.355 1.83 1.157 3.55 2.296 5.053-.591-.703-1.127-1.487-1.597-2.348M15 12a3 3 0 11-6 0 3 3 0 016 0zm-2 0a1 1 0 11-2 0 1 1 0 012 0z" />
            )}
        </svg>
    </button>
);


export const LoginForm: React.FC = () => {
    const router = useRouter();
    const searchParams = useSearchParams();
    
    // 1. GET THE SELECTED ROLE FROM THE URL
    const selectedRole = searchParams.get('role'); 
    
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError(null);
        setLoading(true);

        if (!selectedRole) {
            setError('Error: Please go back and select a role before logging in.');
            setLoading(false);
            return;
        }

        // 2. PASS THE ROLE ALONG WITH CREDENTIALS
        const result = await signIn('credentials', {
            ...formData,
            role: selectedRole, // <-- The role is passed here
            redirect: false,
        });

        setLoading(false);

        if (result?.error) {
            // Error handling covers incorrect password/email OR role mismatch
            setError('Invalid email or password, or incorrect role selected. Please try again.'); 
        } else {
            // Successful login! Redirect to the protected dashboard/portal
            router.push('/portal/dashboard'); 
        }
    };

    const inputClasses = "w-full rounded-md px-4 py-3 text-gray-900 shadow-sm focus:ring-2 focus:ring-inset focus:ring-yellow-400 sm:text-sm sm:leading-6 border border-gray-300";

    return (
        <div 
            className="w-full max-w-sm mx-auto md:rounded-lg shadow-2xl overflow-hidden" 
            style={{ backgroundColor: primaryGreen }}
        >
            {/* Top Green Bar */}
            <div className="p-8 sm:p-10 text-center">
                 <h1 className="text-3xl font-bold text-white mb-2">Log In</h1>
                 <p className="text-white text-lg font-semibold">Role: {selectedRole || 'N/A'}</p>
                 {!selectedRole && <p className="text-yellow-400 text-sm mt-2">No role selected. Please go back.</p>}
            </div>

            {/* Form Fields Area */}
            <form onSubmit={handleSubmit} className="w-full p-8 sm:p-10 space-y-5 bg-white md:rounded-b-lg">
                
                {/* --- Email --- */}
                <input 
                    type="email" 
                    name="email" 
                    value={formData.email} 
                    onChange={handleChange}
                    placeholder="Email Address"
                    required
                    className={inputClasses}
                />

                {/* --- Password Field --- */}
                <div className="relative">
                    <input
                        type={passwordVisible ? 'text' : 'password'}
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        placeholder="Password"
                        required
                        className={`${inputClasses} pr-10`}
                    />
                    <EyeIcon onClick={togglePasswordVisibility} isPasswordVisible={passwordVisible} />
                </div>

                {/* --- Status Message --- */}
                {error && <p className="text-red-600 font-medium text-center">{error}</p>}

                {/* --- Login Button --- */}
                <button
                    type="submit"
                    // Disable if loading or if no role was selected
                    disabled={loading || !selectedRole} 
                    className="w-full py-3 mt-4 text-white text-lg font-semibold rounded-md shadow-lg transition duration-200 hover:opacity-90 disabled:opacity-50"
                    style={{ backgroundColor: primaryGreen }}
                >
                    {loading ? 'Authenticating...' : `Log In as ${selectedRole || 'User'}`}
                </button>
                
                {/* Links */}
                <p className="text-center text-sm pt-4 text-gray-600">
                    <Link href="/portal/login" className="text-gray-500 hover:text-gray-800 transition font-medium">
                        <span className="mr-2">&larr;</span> Change Role
                    </Link>
                </p>
                <p className="text-center text-sm text-gray-600">
                    <Link href="/portal/register" className="text-blue-600 hover:text-blue-800 transition font-medium">
                        Don't have an account? Register
                    </Link>
                </p>
            </form>
        </div>
    );
};