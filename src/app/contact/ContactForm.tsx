// src/app/contact/ContactForm.tsx

'use client'; 

import React from 'react';

// Define custom colors
const primaryGreen = '#3e7c13';
const mustardYellow = '#938c13ff'; 

export const ContactForm: React.FC = () => {
    return (
        <div className="w-full max-w-5xl px-4 py-12 sm:px-6 lg:px-8">
            
            <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-800 text-center mb-10">
                CONTACT
            </h1>

            <div className="relative max-w-10xl mx-auto pr-10"> 

                <div 
                    className="pr-20 sm:p-12 text-white shadow-2xl" 
                    style={{ 
                        backgroundColor: primaryGreen, 
                        maxWidth: 'calc(100% - 25%)'
                    }} 
                >
                    <form action="https://formspree.io/f/mjkzqveq" method="POST" className="space-y-6"> 
                        
                        <div className="flex flex-col sm:flex-row gap-4">
                            <div className="flex-1">
                                <label htmlFor="first-name" className="sr-only">First Name</label>
                                <input 
                                    type="text" 
                                    name="first-name" 
                                    id="first-name" 
                                    placeholder="First Name" 
                                    required
                                    className="w-[90%]  border-0 px-2 py-3 text-gray-900 bg-white shadow-sm placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-yellow-400 sm:text-sm sm:leading-6"
                                />
                            </div>
                            
                            <div className="flex-1">
                                <label htmlFor="last-name" className="sr-only">Last Name</label>
                                <input 
                                    type="text" 
                                    name="last-name" 
                                    id="last-name" 
                                    placeholder="Last Name" 
                                    required
                                    className="w-[90%]  border-0 px-2 py-3 -ml-8 bg-white text-gray-900 shadow-sm placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-yellow-400 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>
                        
                        <div>
                            <label htmlFor="email" className="sr-only">Email Address</label>
                            <input 
                                type="email" 
                                name="email" 
                                id="email" 
                                placeholder="Email Address" 
                                required
                                className="w-[90%]  bg-white border-0 px-4 py-3 text-gray-900 shadow-sm placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-yellow-400 sm:text-sm sm:leading-6"
                            />
                        </div>

                        <div>
                            <label htmlFor="message" className="sr-only">Message</label>
                            <textarea 
                                name="message" 
                                id="message" 
                                rows={5}
                                placeholder="Message" 
                                required
                                className="w-[90%] bg-white border-0 px-4 py-3 text-gray-900 shadow-sm placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-yellow-400 sm:text-sm sm:leading-6"
                            ></textarea>
                        </div>
                        
                        <button 
                            type="submit" 
                            className="mt-2 rounded-sm bg-[#938c13ff] px-20 py-2 text-base font-semibold text-black shadow-sm transition hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-offset-2"
                        >
                            Submit
                        </button>
                    </form>
                </div>

                {/* RIGHT BLOCK: GET IN TOUCH TEXT (Mustard Yellow Overlay) */}
                {/* Positioned absolutely to sit on top of the form for the overlay effect */}
                <div 
                    className="sm:p-12 text-black text-normal w-full -mt-100 md:w-1/3 h-20 float-right md:h-full flex flex-col justify-center" 
                    style={{ backgroundColor: mustardYellow }}
                >
                    <h2 className="text-5xl sm:text-5xl font-extrabold leading-tight">
                        Get in <br />touch
                    </h2>
                    <p className="mt-4 text-sm font-light leading-relaxed">
                        Have a question, want to partner with us, or looking to get involved? We’d love to hear from you. Reach out to explore sponsorships, partnerships, media enquiries, or general information.
                    </p>
                </div>
            </div>

            <div className="flex justify-center space-x-6 mt-12 text-gray-700">
                <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Visit us on Facebook">
                    <svg className="h-12 w-12 fill-current transition text-[#3e7c13] hover:text-[#b3a23a]" viewBox="0 0 32 32">
                        <path d="M12 2C6.477 2 2 6.477 2 12c0 5.143 3.774 9.429 8.75 9.925V14h-2v-3h2V9a4 4 0 014-4h3v3h-2.5c-.27 0-.5.23-.5.5v2.5h3l-.5 3h-2.5v7.925C18.226 21.429 22 17.143 22 12c0-5.523-4.477-10-10-10z"/>
                    </svg>
                </a>
                <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Visit us on Instagram">
                    <svg className="h-12 w-12 fill-current transition text-[#3e7c13] hover:text-[#b3a23a]" viewBox="0 0 32 32">
                        <path d="M7 2a5 5 0 00-5 5v10a5 5 0 005 5h10a5 5 0 005-5V7a5 5 0 00-5-5H7zm0 2h10a3 3 0 013 3v10a3 3 0 01-3 3H7a3 3 0 01-3-3V7a3 3 0 013-3zm10.5 1.5a1 1 0 100 2 1 1 0 000-2zM12 9a3 3 0 100 6 3 3 0 000-6zm0 2a1 1 0 110 2 1 1 0 010-2z"/>
                    </svg>
                </a>
            </div>

        </div>
    );
};