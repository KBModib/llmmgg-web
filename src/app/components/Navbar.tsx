'use client'; 

import React from 'react';
import Link from 'next/link';
// Import the necessary hook for the App Router
import { usePathname } from 'next/navigation'; 
// Assuming useSession and signOut are imported from next-auth/react
// import { useSession, signOut } from 'next-auth/react'; 

interface NavLink {
    href: string;
    label: string;
}

const navLinks: NavLink[] = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Us" },
    { href: "/events", label: "Events" },
    { href: "/gallery", label: "Gallery" },
    { href: "/contact", label: "Contact" },
];

export const Navbar: React.FC<{ status: string, loggedIn: boolean, signOut: () => void }> = ({ 
    status, 
    loggedIn, 
    signOut 
}) => {
    const pathname = usePathname(); 

    return (
        <header className="bg-[#3e7c13] shadow-md sticky top-0 z-10 p-6">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                {/* Main Flex Container: Logo/Links/Buttons spaced apart */}
                <div className="flex h-16 items-center justify-between">
                    
                    {/* LEFT SIDE: Logo and Navigation Links Grouped */}
                    <div className="flex items-center space-x-20">
                        
                        {/* Logo/Site Name */}
                        <Link href="/" className="font-bold text-black transition">
                            <img src="/assets/graphics/logo.png" alt="logo" width={120} height={140} className="mr-2" />
                        </Link>

                        {/* Center Links (Primary Navigation) */}
                        <nav className="hidden md:flex space-x-12 text-lg">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className={`font-medium transition 
                                        ${link.href === pathname 
                                            ? 'text-white' // Active link: white
                                            : 'text-black hover:text-yellow-400' // Inactive: black, hover yellow
                                        }`}
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </nav>
                    </div>

                    
                    {/* RIGHT SIDE: Auth Buttons/Avatar - Far Right */}
                    <div className="flex items-center space-x-4">
                        
                        {/* Show a loading state while fetching session data */}
                        {status === "loading" ? (
                            <div className="h-4 w-16 animate-pulse rounded bg-gray-200" />
                        ) : loggedIn ? (
                            // LOGGED IN STATE
                            <>
                                {/* Portal Button with Avatar Icon (Far Right) */}
                                <Link
                                    href="/portal"
                                    className="flex items-center justify-center h-10 w-10 rounded-full bg-white shadow-md hover:bg-gray-100 transition"
                                    title="Go to Portal"
                                >
                                    {/* Avatar Icon: Yellow icon with white background in a circle button */}
                                    <svg 
                                        className="h-6 w-6 text-yellow-400" 
                                        fill="currentColor" 
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                                    </svg>
                                </Link>

                                <button
                                    onClick={() => signOut()}
                                    className="text-sm font-medium text-black hover:text-red-600 transition hidden sm:block"
                                >
                                    Sign Out
                                </button>
                            </>
                        ) : (
                            // LOGGED OUT STATE: Portal/Sign In Button
                            <>
                                <Link
                                    href="/portal"
                                    className="flex items-center justify-center h-10 w-10 rounded-full bg-white shadow-md hover:bg-gray-100 transition"
                                    title="Sign In / Go to Portal"
                                >
                                    <svg 
                                        className="h-6 w-6 text-yellow-400" 
                                        fill="currentColor" 
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                                    </svg>
                                </Link>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </header>
    );
};
//   );
// };

export default Navbar;