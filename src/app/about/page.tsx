import type { Metadata } from 'next';
import Image from 'next/image'; // Assuming you might use Image component for the wave or other assets

export const metadata: Metadata = {
    title: 'About Us | Goodwill Games', // Updated title for consistency
    description: 'Learn more about the Lucas Masterpieces Moripe Goodwill Games',
};

export default function AboutPage() {
    return (
        <main className="flex flex-col items-center bg-gray-50/0"> 
            <section className="w-full max-w-5xl px-4 py-12 sm:px-6 lg:px-8 text-center">
                <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-800 mb-8">
                    ABOUT US
                </h1>
                <div className="space-y-6 text-lg text-gray-700 mx-auto max-w-3xl">
                    <p>
                        The <b>Lucas Masterpieces Moripe Goodwill Games (LMMGG)</b> is one of South Africa’s longest-running community sporting platforms, a tournament born from the belief that sport has the power to uplift, unite, and inspire.
                    </p>
                    <p>
                        For over two decades, the Games have showcased emerging talent, built community pride, and created pathways for young athletes to elevate their careers.
                    </p>
                    <p>
                        This year marks our <b>Silver Jubilee</b>, a milestone dedicated to honouring the legacy of Lucas Moripe and the enduring spirit of community sport.
                    </p>
                </div>
            </section>

            <section className="w-full max-w-5xl px-4 py-12 sm:px-6 lg:px-8 text-center bg-white rounded-lg shadow-sm">
                <div className="text-left max-w-xl mx-auto text-gray-700 text-lg text-center pb-2">
                    <div>
                        <h3 className="font-bold text-gray-800 mb-2">Address</h3>
                        <p>5 Areca Crescent, Lotus Gardens, 0025, Pretoria, South Africa</p>
                    </div>
                    <div>
                        <h3 className="font-bold text-gray-800 mb-2">Contact</h3>
                        <p>
                            <a href="tel:0761807542" className="hover:text-[#3e7c13] transition">076 180 7542</a> | 
                            <a href="tel:0730219955" className="hover:text-[#3e7c13] transition">073 021 9955</a> | 
                            <a href="tel:0697709735" className="hover:text-[#3e7c13] transition">069 770 9735</a>
                        </p>
                    </div>
                    <div className="md:col-span-2">
                        <h3 className="font-bold text-gray-800 mb-2">Email</h3>
                        <p><a href="mailto:lmmgg2000@gmail.com" className="hover:text-[#3e7c13] transition">lmmgg2000@gmail.com</a></p>
                    </div>
                    <div className="flex flex-col sm:flex-row justify-between w-full md:col-span-2 pt-4 border-t border-gray-200 mt-4">
                        <p className="font-medium">NPC No: 2002/031510/08</p>
                        <p className="font-medium mt-2 sm:mt-0">PBO No: 930083579</p>
                    </div>
                </div>
            </section>
            <div className="w-full relative h-32 md:h-40 overflow-visible">
                <Image
                    src="/assets/graphics/wave.png"
                    alt="Decorative Wave Separator"
                    fill              
                />
            </div>

            {/* ==================================================================== */}
            {/* 4. MISSION & VISION SECTION */}
            {/* ==================================================================== */}
            <section className="w-full bg-white text-[#3e7c13] py-16 px-4 sm:px-6 lg:px-8">
                <h2 className="text-4xl sm:text-5xl font-extrabold text-center mb-12">
                    MISSION & VISION
                </h2>
                
                {/* Two-column layout for Mission and Vision */}
                <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
                    {/* Mission Card */}
                    <div className="bg-[#3e7c13] rounded-lg p-6 shadow-xl flex flex-col h-full">
                        <h3 className="text-3xl font-bold mb-6 text-center text-white">Mission</h3>
                        <ul className="list-none space-y-4 text-lg font-light flex-grow text-white">
                            <li className="flex items-start">
                                <span className="mr-3 text-white text-xl">&bull;</span>
                                <span>To become the biggest community annual tournament in South Africa.</span>
                            </li>
                            <li className="flex items-start">
                                <span className="mr-3 text-white text-xl">&bull;</span>
                                <span>To become a premier choice for sponsors.</span>
                            </li>
                            <li className="flex items-start">
                                <span className="mr-3 text-white text-xl">&bull;</span>
                                <span>To expose and elevate young talent locally and nationally.</span>
                            </li>
                            <li className="flex items-start">
                                <span className="mr-3 text-white text-xl">&bull;</span>
                                <span>To innovate the way community tournaments are hosted.</span>
                            </li>
                            <li className="flex items-start">
                                <span className="mr-3 text-white text-xl">&bull;</span>
                                <span>To become the official template for how a world-class tournament is run.</span>
                            </li>
                        </ul>
                        <img src="/assets/graphics/wave.png" className=' -mb-6 overflow-visible' />
                    </div>

                    {/* Vision Card */}
                    <div className="bg-[#3e7c13] rounded-lg p-6 shadow-xl flex flex-col h-full text-white">
                        <h3 className="text-3xl font-bold mb-6 text-center text-white">Vision</h3>
                        <ul className="list-none space-y-4 text-lg font-light flex-grow">
                            <li className="flex items-start">
                                <span className="mr-3 text-white text-xl">&bull;</span>
                                <span>Grow the tournament to international standards.</span>
                            </li>
                            <li className="flex items-start">
                                <span className="mr-3 text-white text-xl">&bull;</span>
                                <span>Become a springboard for athletes in all sporting codes.</span>
                            </li>
                            <li className="flex items-start">
                                <span className="mr-3 text-white text-xl">&bull;</span>
                                <span>Upgrade hosting methods for efficiency and impact.</span>
                            </li>
                            <li className="flex items-start">
                                <span className="mr-3 text-white text-xl">&bull;</span>
                                <span>Introduce innovation across operations, technology, and event experience.</span>
                            </li>
                            <li className="flex items-start">
                                <span className="mr-3 text-white text-xl">&bull;</span>
                                <span>Increase reach, visibility, and brand awareness.</span>
                            </li>
                        </ul>
                      <img src="/assets/graphics/wave.png" className=' -mb-6 overflow-visible' />
                    </div>
                </div>
            </section>

        </main>
    );
}