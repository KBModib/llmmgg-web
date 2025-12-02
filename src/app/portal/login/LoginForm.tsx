'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { getRedirectPath } from '~/hooks/useAuth';
import { signIn } from 'next-auth/react';
import Link from 'next/link';

type UserRole = 'ADMIN' | 'COACH' | 'PLAYER';

interface LoginFormProps {
    initialRole: UserRole;
}

export default function LoginForm({ initialRole }: LoginFormProps) {
    const router = useRouter();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    // The role is fixed based on the selection from the previous page
    const role = initialRole; 
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError(null);
        setLoading(true);

        const result = await signIn('credentials', {
            redirect: false, 
            email,
            password,
            role, // Send the fixed role to the backend
        });

        setLoading(false);

        if (result?.error) {
            setError(result.error);
        } else if (result?.ok) {
            // Redirect based on the fixed role using shared helper
            const redirectPath = getRedirectPath(role);
            router.push(redirectPath);
        }
    };

    // Use the primary green color for styling
    const primaryGreen = '#3e7c13';
    const mustard = '#ffd52c'; 

    return (
        <div className="min-h-screen w-[50%] flex items-center justify-center bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-8 p-10 mt-4 bg-white rounded-xl shadow-lg border border-gray-200">
                <div className="text-center">
                    <h2 className="text-3xl font-extrabold text-gray-900" style={{ color: primaryGreen }}>
                     <span className="font-semibold text-capitalize" style={{ color: primaryGreen }}>{role}</span> Login
                    </h2>
                </div>
                
                <form onSubmit={handleSubmit} className="mt-8 space-y-6">
                    {/* Email Input */}
                    <div>
                        <label htmlFor="email" className="sr-only">Email Address</label>
                        <input
                            id="email"
                            name="email"
                            type="email"
                            autoComplete="email"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="appearance-none rounded-md relative block w-full px-4 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 focus:border-green-500 sm:text-sm transition duration-150 ease-in-out"
                            placeholder="Email Address"
                        />
                    </div>

                    {/* Password Input */}
                    <div>
                        <label htmlFor="password" className="sr-only">Password</label>
                        <input
                            id="password"
                            name="password"
                            type="password"
                            autoComplete="current-password"
                            required
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="appearance-none rounded-md relative block w-full px-4 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 focus:border-green-500 sm:text-sm transition duration-150 ease-in-out"
                            placeholder="Password"
                        />
                    </div>

                    {/* Error Message */}
                    {error && (
                        <div className="bg-red-50 border-l-4 border-red-400 p-4 rounded-md" role="alert">
                            <div className="flex items-center">
                                <div className="flex-shrink-0">
                                    <svg className="h-5 w-5 text-red-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                                    </svg>
                                </div>
                                <div className="ml-3">
                                    <p className="text-sm font-medium text-red-800">
                                        Authentication failed: <span className="font-bold">{error}</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Submit Button */}
                    <div>
                        <button
                            type="submit"
                            disabled={loading}
                            style={{ backgroundColor: primaryGreen }}
                            className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-md text-white hover:mustard focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 disabled:opacity-60 transition duration-150 ease-in-out"
                        >
                            {loading ? 'Logging In...' : `Login as ${role}`}
                        </button>
                    </div>
                </form>
                
                <div className="text-center mt-6">
                    <Link 
                        href="/portal/login" 
                        className="font-medium text-sm text-gray-600 hover:mustard transition duration-150 ease-in-out"
                    >
                        &larr; Change Role
                    </Link>
                </div>
            </div>
        </div>
    );
}