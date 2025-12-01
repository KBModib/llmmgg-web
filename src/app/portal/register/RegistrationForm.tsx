// src/app/register/RegistrationForm.tsx

'use client'; 

import Link from 'next/link';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation'; // Import useRouter for redirection

// Use the primary green color from your designs
const primaryGreen = '#3e7c13';

// Placeholder for an eye icon (visibility toggle) - updated to use a contrasting color
const EyeIcon = ({ onClick, isPasswordVisible }: { onClick: () => void, isPasswordVisible: boolean }) => (
    <button 
        type="button" 
        onClick={onClick} 
        // Positioning adjusted to be relative to the input field, not the main div
        className="absolute right-0 top-1/2 transform -translate-y-1/2 pr-3 flex items-center text-gray-700 transition hover:text-gray-900"
        aria-label="Toggle Password Visibility"
    >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
            {isPasswordVisible ? (
                // Eye Open Icon
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.433 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
            ) : (
                // Eye Closed Icon
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 001.934 12c.355 1.83 1.157 3.55 2.296 5.053-.591-.703-1.127-1.487-1.597-2.348M15 12a3 3 0 11-6 0 3 3 0 016 0zm-2 0a1 1 0 11-2 0 1 1 0 012 0z" />
            )}
        </svg>
    </button>
);


export const RegistrationForm: React.FC = () => {
    const router = useRouter();
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [success, setSuccess] = useState<string | null>(null);

    // Initial state matching backend schema fields
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        dateOfBirth: '', // Date field
        idNumber: '', 
        teamName: '', 
        role: 'PLAYER', // Default role
        password: '',
        confirmPassword: '',
    });

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError(null);
        setSuccess(null);
        setLoading(true);

        if (formData.password !== formData.confirmPassword) {
            setError('Passwords do not match.');
            setLoading(false);
            return;
        }

        if (formData.role === 'COACH' && !formData.teamName.trim()) {
            setError('Coaches must enter a Team Name upon registration.');
            setLoading(false);
            return;
        }
        
        try {
            const response = await fetch('/api/register', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (!response.ok) {
                setError(data.message || 'Registration failed. Check your details.');
                return;
            }

            setSuccess('Registration successful! Redirecting to login...');
            
            // Redirect after successful registration
            setTimeout(() => {
                router.push('/portal/login'); 
            }, 2000);

        } catch (err) {
            console.error('Registration Submission Error:', err);
            setError('A network error occurred. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    const inputClasses = "w-full rounded-md px-4 py-3 text-gray-900 shadow-sm focus:ring-2 focus:ring-inset focus:ring-yellow-400 sm:text-sm sm:leading-6";
    const labelClasses = "text-white text-sm font-semibold block mb-1";

    return (
        <div 
            className="w-full max-w-lg mx-auto md:rounded-lg shadow-2xl overflow-hidden bg-white md:p-0 p-4" 
            
        >
            {/* Top Green Bar */}
            <div className="p-8 sm:p-10" style={{ backgroundColor: primaryGreen }}>
                 <h1 className="text-3xl font-bold text-white mb-6 text-center">Create Account</h1>

                 {/* Status Messages */}
                {error && <p className="text-red-300 font-medium text-center mb-4">{error}</p>}
                {success && <p className="text-yellow-400 font-bold text-center mb-4">{success}</p>}
            </div>

            {/* Form Fields - Styled to look like it's inside the green container */}
            <form onSubmit={handleSubmit} className="w-full p-8 sm:p-10 space-y-5 bg-white">
                
                {/* --- Role Selection --- */}
                <div>
                    <label htmlFor="role-select" className="text-gray-700 text-sm font-semibold block mb-1">
                        I am registering as:
                    </label>
                    <select
                        id="role-select"
                        name="role"
                        value={formData.role}
                        onChange={handleChange}
                        required
                        className={`${inputClasses} border border-gray-300`}
                    >
                        <option value="PLAYER">Player</option>
                        <option value="COACH">Coach</option>
                        <option value="ADMIN">Admin</option>
                    </select>
                </div>

                {/* --- Dynamic Team Name Field for Coaches --- */}
                {formData.role === 'COACH' && (
                    <div>
                        <label htmlFor="teamName" className="text-gray-700 text-sm font-semibold block mb-1">
                            Team Name (Required)
                        </label>
                        <input
                            type="text"
                            id="teamName"
                            name="teamName"
                            value={formData.teamName}
                            onChange={handleChange}
                            required
                            className={`${inputClasses} border border-gray-300`}
                            placeholder="Enter your team's name"
                        />
                    </div>
                )}
                
                {/* --- Full Name and Email --- */}
                <input 
                    type="text" 
                    name="fullName" 
                    value={formData.fullName} 
                    onChange={handleChange}
                    placeholder="Full Name"
                    required
                    className={`${inputClasses} border border-gray-300`}
                />
                <input 
                    type="email" 
                    name="email" 
                    value={formData.email} 
                    onChange={handleChange}
                    placeholder="Email Address"
                    required
                    className={`${inputClasses} border border-gray-300`}
                />

                {/* --- Date of Birth and ID Number --- */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input 
                        type="date" 
                        name="dateOfBirth" 
                        value={formData.dateOfBirth} 
                        onChange={handleChange}
                        className={`${inputClasses} border border-gray-300`}
                    />
                    <input 
                        type="text" 
                        name="idNumber" 
                        value={formData.idNumber} 
                        onChange={handleChange}
                        placeholder="ID/Passport Number (Optional)"
                        className={`${inputClasses} border border-gray-300`}
                    />
                </div>

                {/* --- Password Fields --- */}
                <div className="relative">
                    <input
                        type={passwordVisible ? 'text' : 'password'}
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        placeholder="Password"
                        required
                        className={`${inputClasses} border border-gray-300 pr-10`} // Added pr-10 for icon space
                    />
                    <EyeIcon onClick={togglePasswordVisibility} isPasswordVisible={passwordVisible} />
                </div>

                <div className="relative">
                    <input
                        type={passwordVisible ? 'text' : 'password'}
                        name="confirmPassword"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                        placeholder="Confirm Password"
                        required
                        className={`${inputClasses} border border-gray-300 pr-10`} // Added pr-10 for icon space
                    />
                    <EyeIcon onClick={togglePasswordVisibility} isPasswordVisible={passwordVisible} />
                </div>

                {/* --- Register Button --- */}
                <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-3 mt-4 text-white text-lg font-semibold rounded-md shadow-lg transition duration-200 hover:opacity-90 disabled:opacity-50"
                    style={{ backgroundColor: primaryGreen }}
                >
                    {loading ? 'Registering...' : 'Register'}
                </button>
                
                {/* Login link */}
                <p className="text-center text-sm pt-4 text-gray-600">
                    <Link href="/portal" className="text-blue-600 hover:text-blue-800 transition font-medium">
                        Already have an account? Log In
                    </Link>
                </p>
            </form>
        </div>
    );
};