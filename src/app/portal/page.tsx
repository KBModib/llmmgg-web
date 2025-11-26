import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
    title: 'Portal | Goodwill Games',
    description: 'Register or log in to the Lucas Masterpieces Moripe Goodwill Games user portal.',
};

const primaryGreen = '#3e7c13';

export default function PortalPage() {
    return (
        <main className="flex min-h-[80vh] items-center justify-center bg-gray-50/0 p-4 sm:p-6">
                        <div className="w-full max-w-lg bg-white shadow-2xl overflow-hidden">
                    <Link 
                        href="/" 
                        className="absolute right-4 top-4 rounded-full p-2 text-[#3e7c13] transition hover:bg-black/10"
                        aria-label="Go to Homepage"
                    >
                     
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.954c.407-.407 1.069-.407 1.476 0l8.954 8.954M17.25 18V9.5a.75.75 0 00-.75-.75H7.5a.75.75 0 00-.75.75V18a1.5 1.5 0 001.5 1.5h6a1.5 1.5 0 001.5-1.5z" />
                        </svg>
                    </Link>
                
                <div className="p-8 sm:p-10 flex flex-col items-center justify-center text-center space-y-6">
                    
                    <div className="flex flex-col items-center space-y-2">
                        <Image 
                            src="/assets/graphics/logo-1.png"
                            alt="Goodwill Games Logo" 
                            width={200} 
                            height={200}
                            className="h-48 w-48 mb-4"
                        />
                        <h1 className="text-xl font-bold text-gray-800">
                            LUCAS MASTERPIECES MORIPE <br />GOODWILL GAMES
                        </h1>
                    </div>
                    
                    <div className="flex w-full justify-around pt-6">
                        
                        <div className="flex flex-col items-center max-w-[45%]">
                            <Link 
                                href="/portal/register"
                                className="w-full rounded-md py-3 px-6 text-lg font-semibold text-white shadow-md transition hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-offset-2"
                                style={{ backgroundColor: primaryGreen }}
                            >
                                Register
                            </Link>
                            <p className="mt-2 text-sm text-gray-600">Register to get started.</p>
                        </div>
                        
                        <div className="flex flex-col items-center max-w-[45%]">
                            <Link 
                                href="/portal/login"
                                className="w-full rounded-md py-3 px-6 text-lg font-semibold text-white shadow-md transition hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-offset-2"
                                style={{ backgroundColor: primaryGreen }}
                            >
                                Log in
                            </Link>
                            <p className="mt-2 text-sm text-gray-600">Already registered as admin, coach or player? Log in here.</p>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}