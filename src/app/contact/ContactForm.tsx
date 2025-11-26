// src/app/contact/ContactForm.tsx

'use client'; 

import React from 'react';

// Define custom colors
const primaryGreen = '#3e7c13';
const mustardYellow = '#b3a23a'; 

export const ContactForm: React.FC = () => {
    return (
        <div className="w-full max-w-5xl px-4 py-12 sm:px-6 lg:px-8">
            
            <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-800 text-center mb-10">
                CONTACT
            </h1>

            {/* ==================================================================== */}
            {/* CONTACT FORM & OVERLAY BLOCK */}
            {/* ==================================================================== */}
            <div className="relative max-w-4xl mx-auto"> 

                {/* LEFT BLOCK: FORM (Primary Green Background with Rounded Corner) */}
                {/* Note: max-w-[800px] ensures the form doesn't stretch the full width, leaving room for the overlap */}
                <div 
                    className="p-8 sm:p-12 text-white shadow-2xl rounded-tr-lg" 
                    style={{ 
                        backgroundColor: primaryGreen, 
                        borderRadius: '0 0 0 60px', // Custom rounded bottom-left corner
                        maxWidth: 'calc(100% - 25%)' // Leave space for overlay on desktop
                    }} 
                >
                    <form action="https://formspree.io/f/mjkzqveq" method="POST" className="space-y-4"> 
                        
                        <div className="flex flex-col sm:flex-row gap-4">
                            {/* First Name */}
                            <div className="flex-1">
                                <label htmlFor="first-name" className="sr-only">First Name</label>
                                <input 
                                    type="text" 
                                    name="first-name" 
                                    id="first-name" 
                                    placeholder="First Name" 
                                    required
                                    className="w-full rounded-md border-0 px-4 py-3 text-gray-900 shadow-sm placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-yellow-400 sm:text-sm sm:leading-6"
                                />
                            </div>
                            
                            {/* Last Name */}
                            <div className="flex-1">
                                <label htmlFor="last-name" className="sr-only">Last Name</label>
                                <input 
                                    type="text" 
                                    name="last-name" 
                                    id="last-name" 
                                    placeholder="Last Name" 
                                    required
                                    className="w-full rounded-md border-0 px-4 py-3 text-gray-900 shadow-sm placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-yellow-400 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>
                        
                        {/* Email Field */}
                        <div>
                            <label htmlFor="email" className="sr-only">Email Address</label>
                            <input 
                                type="email" 
                                name="email" 
                                id="email" 
                                placeholder="Email Address" 
                                required
                                className="w-full rounded-md border-0 px-4 py-3 text-gray-900 shadow-sm placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-yellow-400 sm:text-sm sm:leading-6"
                            />
                        </div>
                        
                        {/* Subject Field */}
                        <div>
                            <label htmlFor="subject" className="sr-only">Subject</label>
                            <input 
                                type="text" 
                                name="subject" 
                                id="subject" 
                                placeholder="Subject" 
                                className="w-full rounded-md border-0 px-4 py-3 text-gray-900 shadow-sm placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-yellow-400 sm:text-sm sm:leading-6"
                            />
                        </div>

                        {/* Message Area */}
                        <div>
                            <label htmlFor="message" className="sr-only">Message</label>
                            <textarea 
                                name="message" 
                                id="message" 
                                rows={5}
                                placeholder="Message" 
                                required
                                className="w-full rounded-md border-0 px-4 py-3 text-gray-900 shadow-sm placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-yellow-400 sm:text-sm sm:leading-6"
                            ></textarea>
                        </div>
                        
                        {/* Submit Button */}
                        <button 
                            type="submit" 
                            className="mt-2 rounded-md bg-yellow-400 px-6 py-2 text-base font-semibold text-black shadow-sm transition hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-offset-2"
                        >
                            Submit
                        </button>
                    </form>
                </div>

                {/* RIGHT BLOCK: GET IN TOUCH TEXT (Mustard Yellow Overlay) */}
                {/* Positioned absolutely to sit on top of the form for the overlay effect */}
                <div 
                    className="absolute top-0 right-0 p-8 sm:p-12 text-white w-full md:w-1/3 h-auto md:h-full flex flex-col justify-center rounded-tr-lg shadow-2xl z-10" 
                    style={{ backgroundColor: mustardYellow }}
                >
                    <h2 className="text-4xl sm:text-5xl font-extrabold leading-tight">
                        Get in <br />touch
                    </h2>
                    <p className="mt-4 text-sm font-light leading-relaxed">
                        Have a question, want to partner with us, or looking to get involved? We’d love to hear from you. Reach out to explore sponsorships, partnerships, media enquiries, or general information.
                    </p>
                </div>
            </div>

            {/* ==================================================================== */}
            {/* SOCIAL MEDIA ICONS (Using SVG placeholders) */}
            {/* ==================================================================== */}
            <div className="flex justify-center space-x-6 mt-12 text-gray-700">
                
                {/* Facebook Icon SVG Placeholder */}
                <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Visit us on Facebook">
                    <svg className="h-8 w-8 fill-current transition hover:text-[#3e7c13]" viewBox="0 0 24 24">
                        {/* REPLACE THIS WITH YOUR FACEBOOK PATH DATA */}
                        <path d="M12 2C6.477 2 2 6.477 2 12c0 5.143 3.774 9.429 8.75 9.925V14h-2v-3h2V9a4 4 0 014-4h3v3h-2.5c-.27 0-.5.23-.5.5v2.5h3l-.5 3h-2.5v7.925C18.226 21.429 22 17.143 22 12c0-5.523-4.477-10-10-10z"/>
                    </svg>
                </a>
                
                {/* Instagram Icon SVG Placeholder */}
                <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Visit us on Instagram">
                    <svg className="h-8 w-8 fill-current transition hover:text-[#3e7c13]" viewBox="0 0 24 24">
                        {/* REPLACE THIS WITH YOUR INSTAGRAM PATH DATA */}
                        <path d="M7 2a5 5 0 00-5 5v10a5 5 0 005 5h10a5 5 0 005-5V7a5 5 0 00-5-5H7zm0 2h10a3 3 0 013 3v10a3 3 0 01-3 3H7a3 3 0 01-3-3V7a3 3 0 013-3zm10.5 1.5a1 1 0 100 2 1 1 0 000-2zM12 9a3 3 0 100 6 3 3 0 000-6zm0 2a1 1 0 110 2 1 1 0 010-2z"/>
                    </svg>
                </a>
            </div>

        </div>
    );
};