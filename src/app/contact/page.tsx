import type { Metadata } from 'next';
import { ContactForm } from './ContactForm'; // Import the client component

// Metadata is safe to export here because this file is a Server Component
export const metadata: Metadata = {
    title: 'Contact Us | Goodwill Games',
    description: 'Get in touch with the Lucas Masterpieces Moripe Goodwill Games team for partnership, sponsorship, or general enquiries.',
};

export default function ContactPage() {
    return (
        <main className="flex flex-col items-center w-full bg-gray-50/0">
            <ContactForm />
        </main>
    );
}