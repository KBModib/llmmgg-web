// Example: src/app/about/page.tsx
import type { Metadata } from 'next'; // App Router uses Metadata for titles
import { ImageGallery } from '~/app/components/ImageGallery'

export const metadata: Metadata = {
  title: 'Gallery | Goodwill',
};

export default function GalleryPage() {
  // This is a Server Component, so no "use client" needed unless you add interactivity
  return (
    <main className="p-8">
      <h1 className="text-5xl font-bold flex justify-center p-8">Gallery</h1>      
      <ImageGallery />
    </main>
  );
}