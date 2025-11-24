// src/app/page.tsx
"use client";

import { signIn, signOut } from "next-auth/react";
import Link from "next/link";
// NOTE: useSession is now handled via a separate hook or component in App Router client pages

// The component itself is simplified to a client component
export default function HomePage() {
  return (
    // NOTE: Global <Head> content is now handled by src/app/layout.tsx (Metadata export)
    <main className="flex min-h-[calc(100vh-64px)] flex-col items-center justify-center bg-gray-50">
      <div className="w-full">
         <img src="/assets/graphics/hero.png" alt="hero-banner"/>
        </div>
      <div className="container flex flex-col items-center justify-center gap-10 px-4 py-16">
        <div className="container w-[60%] flex-col items-center justify-center">
          <h1 className="text-4xl font-bold flex justify-center text-center p-8" >Honouring 25 years of excellence, unity, <br/> and community sport.</h1>
          <p className="text-xl font-light justify-center text-center p-2">For 25 years, the <b> Lucas Masterpieces Moripe Goodwill Games</b> have united communities through sport, talent, and goodwill.</p>
          <p className="text-xl font-light justify-center text-center p-4">This year marks our <b>Silver Jubilee</b>, a year-long celebration dedicated to honouring the late <b>Lucas “Masterpieces” Moripe</b> and the legacy he inspired.</p>
          <p className="text-xl  font-light justify-center text-center p-2">Powered by this year’s headline sponsor, <b>Leswika</b>, the 2025/26 edition promises the biggest spectacle yet.</p>
        </div>
        <div className="w-full bg-[#3e7c13] text-white font-bold justify-center text-center">
          <h2>Welcome to the Games</h2>
          <h4>Dates: 18 December 2025 – 2 January 2026</h4>
          <h4>Venue: Mbolekwa Sports Complex / Lucas Moripe Stadium</h4>
          <h4>Affiliation Fee: R5000</h4>
          <img src="/assets/graphics/wave.png" alt="banner" />
        </div>
        <div>
          <h2>Prizes</h2>
          <ul>
            <li>
              <img src="" alt="1st trophy" />
              <h3>R150 000</h3>
            </li>
            <li>
              <img src="" alt="2nd trophy" />
              <h3>R30 000</h3>
            </li>
            <li>
              <img src="" alt="3rd trophy" />
              <h3>R5 000</h3>
            </li>
          </ul>
        </div>
        
        {/* You will call the AuthShowcase component here (defined in Step 3) */}
        {/* <AuthShowcase /> */} 

      </div>
    </main>
  );
}