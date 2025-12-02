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
      <div className="w-full max-w-sm rounded-lg bg-white p-8 text-center shadow-2xl">
        {/* Success Icon/Indicator */}
        <div className="mb-4 flex justify-center">
          <svg
            className="h-16 w-16 text-yellow-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8m-1 12H4a2 2 0 01-2-2V6a2 2 0 012-2h16a2 2 0 012 2v12a2 2 0 01-2 2z"
            />
          </svg>
        </div>

        <h2 className="mb-2 text-2xl font-bold text-gray-800">
          Verify Your Email
        </h2>
        <p className="mb-6 text-sm text-gray-600">
          A verification link has been sent to your registered email address.
          Please check your inbox and click the link to activate your account.
        </p>

        {/* Resend Link Placeholder */}
        <p className="mb-6 text-sm text-gray-500">
          Didn&apos;t receive the email?
          <button
            className="ml-1 font-medium text-blue-600 transition hover:text-blue-700"
            type="button"
          >
            Resend Link
          </button>
        </p>

        {/* Action Button */}
        <button
          onClick={handleLoginRedirect}
          className="w-full rounded-md bg-yellow-500 py-2 font-semibold text-white transition hover:bg-yellow-600"
        >
          Go to Login Page
        </button>
      </div>
    );
};