// src/app/register/RegistrationForm.tsx

'use client'; 

import Link from 'next/link';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

// 🛑 FIX 2: Correcting the import path. Assuming the component is in a 'components' folder relative to 'app'. 
// Adjust this path if 'VerifyEmailModalComponent' is located elsewhere.
import { VerifyEmailModalContent } from '~/app/components/VerifyEmailModalComponent'; 

// Use the primary green color from your designs
const primaryGreen = '#3e7c13';
// Use a light off-white for the background of the inputs
const inputBgColor = '#ffffff';

// Placeholder for an eye icon (visibility toggle)
const EyeIcon = ({ onClick, isPasswordVisible }: { onClick: () => void, isPasswordVisible: boolean }) => (
    <button 
        type="button" 
        onClick={onClick} 
        className="absolute right-0 top-1/2 transform -translate-y-1/2 pr-3 flex items-center text-gray-500 transition hover:text-gray-700"
        aria-label="Toggle Password Visibility"
    >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
            {isPasswordVisible ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.433 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
            ) : (
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
    const [showModal, setShowModal] = useState(false); // NEW: State for modal visibility

    // Initial state matching backend schema fields
    const [formData, setFormData] = useState({
        fullName: '', email: '', dateOfBirth: '', idNumber: '', 
        teamName: '', role: 'PLAYER', password: '', confirmPassword: '',
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
        
        // Check for coach team name (assuming this logic is correct)
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

            // 🛑 FIX 1: Robust error handling to prevent SyntaxError
            if (!response.ok) {
                // If response failed (e.g., 400 or 500), read the body as plain text
                const errorBody = await response.text();
                
                // The error message starts with 'U' ('User with...') which is in the errorBody
                setError(errorBody || 'Registration failed due to a server error.');
                return;
            }
            
            // If response is OK, safely parse as JSON
            const data = await response.json(); 

            setSuccess('Registration successful!');
            
            // MODIFIED: SHOW MODAL INSTEAD OF REDIRECTING
            setTimeout(() => {
                setShowModal(true); // Open the verification modal
            }, 500); // Small delay for visual effect

        } catch (err) {
            // This catch block handles network errors or errors within response.json() if it was executed (now it won't be on bad status codes)
            console.error('Submission or Network Error:', err);
            setError('A network error occurred. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    // STYLED CLASSES
    const inputClasses = `w-full rounded-md px-4 py-3 text-gray-900 shadow-inner focus:ring-2 focus:ring-inset focus:ring-yellow-400 sm:text-sm sm:leading-6 border border-gray-300 placeholder-gray-500 bg-[${inputBgColor}]`;
    const labelClasses = "text-white text-sm font-semibold block mb-1";

    return (
        <div 
            className="w-[50%] mx-auto shadow-2xl overflow-hidden md:rounded-lg" 
            style={{ backgroundColor: primaryGreen }} 
        >
            {/* --------------------------- MODAL OVERLAY --------------------------- */}
            {showModal && (
                <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4">
                    {/* Render the new modal content component */}
                    <VerifyEmailModalContent 
                        onClose={() => setShowModal(false)}
                    />
                </div>
            )}
            {/* --------------------------------------------------------------------- */}

            {/* Header Section with Title */}
            <div className="sm:p-10 sm:pb-5">
                 <h1 className="text-4xl font-bold text-white text-center uppercase">Registration</h1>
                
                 {/* Status Messages */}
                {error && <p className="text-red-300 font-medium text-center mb-4">{error}</p>}
                {success && <p className="text-yellow-400 font-bold text-center mb-4">{success}</p>}
            </div>

            {/* Form Fields */}
            <form onSubmit={handleSubmit} className="w-full px-6 sm:px-10 pb-2 sm:pb-10 space-y-2">
                
                {/* --- Full Name --- */}
                <div>
                    <label htmlFor="fullName" className={labelClasses}>Full Name</label>
                    <input 
                        type="text" 
                        id="fullName" name="fullName" value={formData.fullName} onChange={handleChange}
                        required className={inputClasses}
                    />
                </div>
                
                {/* --- Date of Birth --- */}
                <div>
                    <label htmlFor="dateOfBirth" className={labelClasses}>Date of Birth</label>
                    <input 
                        type="date" 
                        id="dateOfBirth" name="dateOfBirth" value={formData.dateOfBirth} onChange={handleChange}
                        required className={inputClasses}
                    />
                </div>

                {/* --- ID Number --- */}
                <div>
                    <label htmlFor="idNumber" className={labelClasses}>ID Number</label>
                    <input 
                        type="text" 
                        id="idNumber" name="idNumber" value={formData.idNumber} onChange={handleChange}
                        placeholder="ID/Passport Number (Optional)" className={inputClasses}
                    />
                </div>

                {/* --- Team Name --- */}
                <div>
                    <label htmlFor="teamName" className={labelClasses}>Team Name</label>
                    <input
                        type="text" id="teamName" name="teamName" value={formData.teamName} onChange={handleChange}
                        required={formData.role === 'COACH'} 
                        className={inputClasses}
                        placeholder="Enter your team's name"
                    />
                </div>
                
                {/* --- Role Selection --- */}
                <div>
                    <label htmlFor="role-select" className={labelClasses}>Role</label>
                    <div className="relative">
                        <select
                            id="role-select" name="role" value={formData.role} onChange={handleChange} required
                            className={`${inputClasses} appearance-none pr-10 text-gray-900`}
                        >
                            <option value="PLAYER">Player</option>
                            <option value="COACH">Coach</option>
                            <option value="ADMIN">Admin</option>
                        </select>
                        {/* Custom dropdown arrow */}
                        <svg className="pointer-events-none absolute right-0 top-1/2 transform -translate-y-1/2 mr-3 h-5 w-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                        </svg>
                    </div>
                </div>
                <div> 
                    <label htmlFor="email" className={labelClasses}>Email Address</label>
                    <input 
                        type="email" id="email" name="email" value={formData.email} onChange={handleChange}
                        required className={inputClasses}
                    />
                </div>


                {/* --- Password Fields --- */}
                <div>
                    <label htmlFor="password" className={labelClasses}>Password</label>
                    <div className="relative">
                        <input
                            type={passwordVisible ? 'text' : 'password'}
                            id="password" name="password" value={formData.password} onChange={handleChange}
                            required className={`${inputClasses} pr-10`} 
                        />
                        <EyeIcon onClick={togglePasswordVisibility} isPasswordVisible={passwordVisible} />
                    </div>
                </div>

                <div>
                    <label htmlFor="confirmPassword" className={labelClasses}>Confirm Password</label>
                    <div className="relative">
                        <input
                            type={passwordVisible ? 'text' : 'password'}
                            id="confirmPassword" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange}
                            required className={`${inputClasses} pr-10`} 
                        />
                        <EyeIcon onClick={togglePasswordVisibility} isPasswordVisible={passwordVisible} />
                    </div>
                </div>

                {/* --- Register Button --- */}
                <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-3 mt-4 text-lg font-semibold rounded-md shadow-lg transition duration-200 bg-white text-gray-800 hover:bg-gray-100 disabled:opacity-50"
                >
                    {loading ? 'Registering...' : 'Register'}
                </button>
                
                {/* Login link */}
                <p className="text-center text-sm pt-4 text-white">
                    <Link href="/portal" className="text-yellow-200 hover:text-yellow-400 transition font-medium">
                        Already have an account? Log In
                    </Link>
                </p>
            </form>
        </div>
    );
};