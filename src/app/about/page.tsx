// Example: src/app/about/page.tsx

import type { Metadata } from 'next'; // App Router uses Metadata for titles

export const metadata: Metadata = {
  title: 'About Us | Goodwill',
};

export default function AboutPage() {
  // This is a Server Component, so no "use client" needed unless you add interactivity
  return (
    <main className="p-8">
      <div>
        <div>
          <h1 className='text-5xl font-bold flex justify-center p-8'>About Us</h1>
          <p>The <b>Lucas Masterpieces Moripe Goodwill Games (LMMGG)</b> is one of South Africa’s longest-running community sporting platforms, a tournament born from the belief that sport has the power to uplift, unite, and inspire.</p>
          <p>For over two decades, the Games have showcased emerging talent, built community pride, and created pathways for young athletes to elevate their careers.</p>
          <p>This year marks our Silver Jubilee, a milestone dedicated to honouring the legacy of Lucas Moripe and the enduring spirit of community sport.</p>
        </div>
        <div>
          <h2 className='text-3xl font-bold flex justify-center p-8'>Mission & Vision</h2>
          <ul>
            <li>
              <h4>Mission</h4>
                <li>To become the biggest community annual tournament in South Africa.</li>
                <li>To become a premier choice for sponsors.</li>
                <li>To expose and elevate young talent locally and nationally.</li>
                <li>To innovate the way community tournaments are hosted.</li>
                <li>To become the official template for how a world-class tournament is run.</li>
            </li>
            <li>
              <h4>Vision</h4>
                <li>Grow the tournament to international standards.</li>
                <li>Become a springboard for athletes in all sporting codes.</li>
                <li>Upgrade hosting methods for efficiency and impact.</li>
                <li>Introduce innovation across operations, technology, and event experience.</li>
                <li>Increase reach, visibility, and brand awareness.</li>
            </li>
          </ul>
        </div>
      </div>
    </main>
  );
}