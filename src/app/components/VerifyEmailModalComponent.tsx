// src/components/VerifyEmailModalContent.tsx (New file recommendation)

import React from 'react';
import { useRouter } from 'next/navigation';

const primaryGreen = '#3e7c13';

interface VerifyEmailModalContentProps {
    onClose: () => void;
}

export const VerifyEmailModalContent: React.FC<VerifyEmailModalContentProps> = ({ onClose }) => {
    const router = useRouter();

    const handleLoginRedirect = () => {
        onClose(); // Close the modal
        router.push('/portal'); // Redirect to the login page
    };

    return (
        <div className="bg-white rounded-lg p-8 max-w-sm w-full text-center shadow-2xl">
            {/* Success Icon/Indicator */}
            <div className="flex justify-center mb-4">
                <svg className="h-16 w-16 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8m-1 12H4a2 2 0 01-2-2V6a2 2 0 012-2h16a2 2 0 012 2v12a2 2 0 01-2 2z" />
                </svg>
            </div>
            
            <h2 className="text-2xl font-bold text-gray-800 mb-2">
                Verify Your Email
            </h2>
            <p className="text-gray-600 mb-6 text-sm">
                A verification link has been sent to your registered email address. Please check your inbox and click the link to activate your account.
            </p>

            {/* Resend Link Placeholder */}
            <p className="text-sm text-gray-500 mb-6">
                Didn't receive the email? 
                <button className="text-blue-600 font-medium hover:text-blue-700 ml-1 transition" type="button">
                    Resend Link
                </button>
            </p>

            {/* Action Button */}
            <button
                onClick={handleLoginRedirect}
                className="w-full py-2 bg-yellow-500 text-white font-semibold rounded-md hover:bg-yellow-600 transition"
            >
                Go to Login Page
            </button>
        </div>
    );
};