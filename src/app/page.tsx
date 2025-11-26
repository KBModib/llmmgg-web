"use client";

import Image from "next/image"; 

export default function HomePage() {
  return (
    <main className="flex flex-col items-center bg-gray-50/0">
      <div className="w-full">
        <img
          src="/assets/graphics/hero.png"
          alt="LESWIKA LUCAS MASTERPIECES MORIPE GOODWILL GAMES"
          className="w-full h-auto object-cover"
        />
      </div>
      
      {/* Main Content Container (Padded) */}
      <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16">
        <div className="w-full max-w-4xl text-center px-4 sm:px-6">
          <h1 className="text-3xl font-bold text-gray-800 p-4">
            Honouring 25 years of excellence, unity, <br className="hidden sm:inline" /> and community sport.
          </h1>
          <p className="text-lg font-light text-gray-700 mx-auto p-2">
            For 25 years, the <b> Lucas Masterpieces Moripe Goodwill Games</b> have united communities through sport, talent, and goodwill.
          </p>
          <p className="text-lg font-light text-gray-700 mx-auto p-2">
            This year marks our <b>Silver Jubilee</b>, a year-long celebration dedicated to honouring the late <b>Lucas “Masterpieces” Moripe</b> and the legacy he inspired.
          </p>
          <p className="text-lg font-light text-gray-700 mx-auto p-2">
            Powered by this year’s headline sponsor, <b>Leswika</b>, the 2025/26 edition promises the biggest spectacle yet.
          </p>
        </div>

        {/* ==================================================================== */}
        {/* 3. WELCOME & EVENT DETAILS BANNER */}
        {/* ==================================================================== */}
        <div className="relative overflow-visible z-1">
                        <Image
                            src="/assets/graphics/11.png" 
                            alt="Soccer Ball Icon" 
                            width={450} // Slightly larger icon size
                            height={400}
                            className="mx-auto"
                        />
                    </div>
        <div className="w-full bg-[#3e7c13] text-white pt-16 pb-1 relative overflow-hidden shadow-2xl -mt-83">
                
                {/* Content above the wave */}
                
                <div className="flex flex-col items-center justify-center text-center space-y-2 px-4 sm:px-6">
                      
                    
                    {/* Heading: Centered, tightly spaced */}
                    <h2 className="text-6xl font-extrabold tracking-wide mb-40 -mt-8">
                        WELCOME TO THE GAMES
                    </h2>
                    
                    {/* Event Details: Reduced vertical space between lines */}
                    <div className="text-3xl font-medium tracking-wide space-y-6 pb-8 mt-10">
                        <p>Dates: 18 December 2025 – 2 January 2026</p>
                        <p>Venue: Mbolekwa Sports Complex / Lucas Moripe Stadium</p>
                        <p className="pt-2">Affiliation Fee: R5000</p>
                    </div>
                </div>
                <div className="relative w-full h-auto -mt-35">
                    <Image
                        src="/assets/graphics/wave.png" 
                        alt="Decorative Green and Yellow Wave Separator"
                        width={1000} 
                        height={100} 
                        layout="responsive"
                        className="w-full h-auto block"
                    />
                </div>
            </div>
        <div className="w-full max-w-4xl pt-12 pb-8">
          <h2 className="text-4xl font-bold text-gray-800 text-center mb-10">
            PRIZES
          </h2>
          
          {/* Prize Grid: 3 columns on medium screens and up, stacking on small screens */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">  
            {/* 1st Prize */}
            <div className="bg-green-700 flex flex-col items-center justify-start text-center p-4 bg-gray-100 shadow-lg">
                {/* Placeholder for actual trophy image */}
                <div className="h-32 w-full flex items-center justify-center text-green-800 font-semibold">
                    <img src="./assets/graphics/t1.png" alt="null"/>
                </div>
                <h3 className="text-2xl font-extrabold text-white py-4 w-full">R150 000</h3>
            </div>
            
            {/* 2nd Prize */}
            <div className="bg-green-700 flex flex-col items-center justify-start text-center p-4 bg-gray-100 shadow-lg">
                {/* Placeholder for actual trophy image */}
                <div className="h-32 w-full flex items-center justify-center text-green-800 font-semibold">
                    <img src="./assets/graphics/t2.png" alt="null"/>
                </div>
                <h3 className="text-2xl font-extrabold text-white py-4 w-full">R30 000</h3>
            </div>
            
            {/* 3rd Prize */}
            <div className="bg-green-700 flex flex-col items-center justify-start text-center p-4 bg-gray-100 shadow-lg">
                 {/* Placeholder for actual trophy image */}
                 <div className="h-32 w-full flex items-center justify-center text-green-800 font-semibold">
                    <img src="./assets/graphics/t3.png" alt="null"/>
                </div>
                <h3 className="text-2xl font-extrabold text-white py-4 w-full">R5 000</h3>
            </div>
            
          </div>
        </div>
        
        {/* Placeholder for AuthShowcase component */}

      </div>
    </main>
  );
}