// src/app/components/Footer.tsx

'use client'; 

import React from 'react';

export const Footer: React.FC = () => {
const currentYear = new Date().getFullYear().toString();

    const backgroundImage = '/assets/graphics/footer.png';
    
    return (
        <footer className="w-full mt-6">
            <div 
                className="relative p-12 text-white bg-cover bg-center"
                style={{ backgroundImage: `url(${backgroundImage})` }}
            >           
            <div className="absolute inset-0 bg-[#3e7c13] opacity-80"></div> 
                <div className="relative z-10 max-w-4xl mx-auto text-center space-y-3">
                    <div className="flex flex-col space-y-1 text-lg font-light">
                        <p>5 Areca Crescent, Lotus Gardens</p>
                        <p>0025, Pretoria, South Africa</p>
                        <p className="pt-2">
                            <a href="tel:0761807542" className="hover:text-yellow-400 transition">076 180 7542</a> | 
                            <a href="tel:0730219955" className="hover:text-yellow-400 transition">073 021 9955</a> | 
                            <a href="tel:0697709735" className="hover:text-yellow-400 transition">069 770 9735</a>
                        </p>
                        
                        <a href="mailto:lmmgg2000@gmail.com" className="hover:text-yellow-400 transition">lmmgg2000@gmail.com</a>
                        <p className="pt-2">NPC No: 2002/031510/08 </p>
                        <p className="pt-2">PBO No: 930083579</p>
                    </div>

                </div>
            </div> 

            {/* 2. Copyright Bar: Moved OUTSIDE the max-width container to achieve FULL WIDTH */}
            <div className="w-full bg-yellow-400 p-3 text-center text-black text-md font-light">
                &copy; {currentYear} Lucas Masterpieces Moripe Goodwill Games | All Rights Reserved
            </div>
        </footer>
    );
};