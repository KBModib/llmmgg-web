import React from 'react';

interface ImageItem {
  src: string;
  alt: string;
  id: number; // Added an ID for a proper React key
}

const images: ImageItem[] = [
    { id: 1, src: '/assets/images/1.jpeg', alt: 'Image 1' },
    { id: 2, src: '/assets/images/2.jpeg', alt: 'Image 2' },
    { id: 3, src: '/assets/images/3.jpeg', alt: 'Image 3' },
    { id: 4, src: '/assets/images/4.jpeg', alt: 'Image 4' },
    { id: 5, src: '/assets/images/5.jpeg', alt: 'Image 5' },
    { id: 6, src: '/assets/images/6.jpeg', alt: 'Image 6' },
    { id: 7, src: '/assets/images/7.jpeg', alt: 'Image 7' },
    { id: 8, src: '/assets/images/8.jpeg', alt: 'Image 8' },
    { id: 9, src: '/assets/images/9.jpeg', alt: 'Image 9' },
    { id: 10, src: '/assets/images/10.jpeg', alt: 'Image 10' },
    { id: 11, src: '/assets/images/11.jpeg', alt: 'Image 11' },
    { id: 12, src: '/assets/images/12.jpeg', alt: 'Image 12' },
    { id: 13, src: '/assets/images/13.jpeg', alt: 'Image 13' },
    { id: 14, src: '/assets/images/14.jpeg', alt: 'Image 14' },
    { id: 15, src: '/assets/images/15.jpeg', alt: 'Image 15' },
    { id: 16, src: '/assets/images/16.jpeg', alt: 'Image 16' },
    { id: 17, src: '/assets/images/17.jpeg', alt: 'Image 17' },
    { id: 18, src: '/assets/images/18.jpeg', alt: 'Image 18' },
    { id: 19, src: '/assets/images/19.jpeg', alt: 'Image 19' },
    { id: 20, src: '/assets/images/20.jpeg', alt: 'Image 20' },
    { id: 21, src: '/assets/images/21.jpeg', alt: 'Image 21' },
    { id: 22, src: '/assets/images/22.jpeg', alt: 'Image 22' },
    { id: 23, src: '/assets/images/23.jpeg', alt: 'Image 23' },
    { id: 24, src: '/assets/images/24.jpeg', alt: 'Image 24' },
];

export const ImageGallery: React.FC = () => {
  return (
    <div className="container mx-auto p-8">
      
      {/* Main Grid Container: 
        - grid-cols-1: 1 column (default/small)
        - md:grid-cols-2: 2 columns (medium)
        - lg:grid-cols-4: 4 columns (large) 
      */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        
        {images.map((image) => (
          <div 
            key={image.id} // Important for React list performance
            className="overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition duration-300 transform hover:scale-[1.02] bg-white"
          >
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-full object-cover aspect-square"
            />
          </div>
        ))}

      </div>
    </div>
  );
};