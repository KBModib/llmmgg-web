// Example: src/app/about/page.tsx

import type { Metadata } from 'next'; // App Router uses Metadata for titles

export const metadata: Metadata = {
  title: 'Contact Us | Goodwill',
};

export default function AboutPage() {
  // This is a Server Component, so no "use client" needed unless you add interactivity
  return (
    <main className="p-8">
      <h1 className="text-5xl font-bold flex justify-center p-8">Contact</h1>
      <div>
        <form action="https://formspree.io/f/mjkzqveq" method="POST">
            <label>
                First Name:
                <input type="text" name="first-name"/>
            </label>
            <label>
                Last Name:
                <input type="text" name="last-name"/>
            </label>
            <label>
                Email Address:
                <input type="email" name="email"/>
            </label>
            <label>
                Message:
                <textarea name="message"></textarea>
            </label>
            <button type="submit">Submit</button>
        </form>
      </div>
      <div>
        <h1 className='text-5xl font-bold flex justify-center'>Get in <br />touch</h1>
        <p>Have a question, want to partner with us, or looking to get involved? <br />We’d love to hear from you. Reach out to explore sponsorships, partnerships, media enquiries, orgeneral information.</p>
      </div>
      <div>
        <i>facebook</i>
        <i>instagram</i>
      </div>
    </main>
  );
}