import type { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
    title: 'Events | Goodwill Games',
    description: 'View the upcoming, ongoing, and planned tournaments and events on the Lucas Masterpieces Moripe Goodwill Games calendar.',
};

export default function EventsPage() {
    return (
        <main className="flex flex-col items-center w-full bg-gray-50/0">
            <div className="w-full max-w-5xl px-4 py-12 sm:px-6 lg:px-8">
                <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-800 text-center mb-16">
                    TOURAMENTS & EVENTS
                </h1>

                <h4 className="text-3xl font-bold text-[#3e7c13] mb-6">Upcoming</h4>
                
                <div className="flex flex-col md:flex-row gap-6 p-2 border border-transparent mb-12">
                    
                    <div className="flex-shrink-0 w-full md:w-1/4 mx-auto md:mx-0">
                        <Image 
                            src="/assets/graphics/logo-1.png" 
                            alt="Goodwill Games Logo" 
                            width={350} 
                            height={350} 
                            className="rounded-full"
                        />
                    </div>
                    
                    <div className="flex-grow text-gray-700 space-y-2">
                        <h6 className="text-2xl font-bold text-gray-800">Leswika Lucas Masterpieces Moripe Goodwill Games</h6>
                        
                        <p className="text-md font-md">
                            18 December 2025 – 2 January 2026 <br />
                            <span className="text-md font-md">Mbolekwa Sports Complex · Lucas Moripe Stadium</span>
                        </p>
                        
                        <p className="text-md font-light pt-2">
                            The flagship event of the year and the official Silver Jubilee edition. Teams from across South Africa are invited to compete in this prestigious national tournament.
                        </p>
                        
                        <p>
                            <span className="font-light pb-4">Affiliation Fee: R5 000</span> <br />
                            <span className="font-bold text-md">Prizes:</span>
                        </p>
                        
                        <ul className="gap-y-8 text-md font-medium">
                            <li>1st Prize: R150 000</li>
                            <li>2nd Prize: R30 000</li>
                            <li>3rd Prize: R5 000</li>
                        </ul>
                    </div>
                </div>
                <div className="w-full bg-[#3e7c13] p-8 sm:p-12 shadow-xl mb-12">
                    <h4 className="text-3xl font-extrabold text-white mb-8">Other Events</h4>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-800">
                        
                        {[
                            { icon: 'events-1.png' },
                            { icon: 'events-2.png' },
                            { icon: 'events-3.png' },
                            { icon: 'events-4.png' },
                            { icon: 'events-5.png' },
                            { icon: 'events-6.png' },
                        ].map((event, index) => (
                            <div key={index} className="flex gap-4">
                                <div className="flex-shrink-0 w-full h-auto">
                                    <Image 
                                      src={`/assets/graphics/${event.icon}`}
                                      width={350}
                                      height={200} 
                                      alt={'null'}                                   
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                
                <h4 className="text-3xl font-bold text-[#3e7c13] mb-6">In the Pipeline</h4>
                
                <div className="space-y-6">
                    
                    {/* Ke Spinning */}
                    <div className="flex flex-col sm:flex-row gap-6 p-6 border border-transparent">
                        <div className="flex-shrink-0 w-full sm:w-1/4 mx-auto sm:mx-0">
                            <Image src="/assets/graphics/itp-1.png" alt="Ke Spinning" width={250} height={250} />
                        </div>
                        <div className="text-gray-700 mt-15">
                            <h6 className="text-xl font-bold text-black">Ke Spinning</h6>
                            <p className="text-sm mt-1">
                                A bold and innovative addition currently in development. **“Ke Spinning”** introduces a modern cultural and entertainment element to the Games, bringing high-energy spinning performances and car culture into the LMMGG experience.
                            </p>
                        </div>
                    </div>

                    {/* Coolerbox Chillas */}
                    <div className="flex flex-col sm:flex-row gap-6 p-6 border border-transparent">
                        <div className="flex-shrink-0 w-full sm:w-1/4 mx-auto sm:mx-0">
                            <Image src="/assets/graphics/itp-2.png" alt="Coolerbox Chillas" width={250} height={250} />
                        </div>
                        <div className="text-gray-700 mt-15">
                            <h6 className="text-xl font-bold text-black">Coolerbox Chillas</h6>
                            <p className="text-md mt-1">
                                A crowd-favourite lifestyle and music event on the LMMGG calendar. This annual celebration features top DJs and, this year, plans to host an international performer, blending sport, culture, and entertainment.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}