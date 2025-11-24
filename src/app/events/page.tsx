// Example: src/app/about/page.tsx

import type { Metadata } from 'next'; // App Router uses Metadata for titles

export const metadata: Metadata = {
  title: 'Events | Goodwill',
};

export default function EventsPage() {
  // This is a Server Component, so no "use client" needed unless you add interactivity
  return (
    <main className="p-8">
      <div>
        <h1 className="text-5xl font-bold flex justify-center p-8">Tournaments & Events</h1>
        <h4 className="mt-4">Upcoming</h4>
        <div>
            <img src="" alt="logo" />
            <div>
                <h6>Leswika Lucas Masterpieces Moripe Goodwill Games</h6>
                <p>18 December 2025 – 2 January 2026 <br />Mbolekwa Sports Complex · Lucas Moripe Stadium</p>
                <p>The flagship event of the year and the official Silver Jubilee edition. Teams from across South Africa are invited to compete in this prestigious national tournament.</p>
                <p>Affiliation Fee: R5 000 <br />Prizes:</p>
                <ul>
                    <li>1st Prize: R150 000</li>
                    <li>2nd Prize: R30 000</li>
                    <li>3rd Prize: R5 000</li>
                </ul>
            </div>
            <div className='bg-[#3e7c13]'>
                <h4>Other Events</h4>
                <img src="" alt="easter super cup" />
                <img src="" alt="mini games" />
                <img src="" alt="ko" />
                <img src="" alt="top 16" />
                <img src="" alt="ms lmmgg" />
                <img src="" alt="25 juniors" />
            </div>
            <div>
                <h4>In the Pipeline</h4>
                <div>
                    <img src="" alt="spinning" />
                    <div>
                        <h6>Ke Spinning</h6>
                        <p>A bold and innovative addition currently in development. “Ke Spinning” introduces a modern cultural and entertainment element to the Games, bringing high-energy spinning performances and car culture into the LMMGG experience.</p>
                    </div>
                </div>
                <div>
                    <img src="" alt="spinning" />
                    <div>
                        <h6>Coolerbox Chillas</h6>
                        <p>A crowd-favourite lifestyle and music event on the LMMGG calendar. This annual celebration features top DJs and, this year, plans to host an international performer, blending sport, culture, and entertainment.</p>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </main>
  );
}