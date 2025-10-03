import React, { useState, useEffect } from 'react';

const images = [
  { src: '/assets/images/gallery-1.jpg', alt: 'Campaign event photo 1' },
  { src: '/assets/images/gallery-2.jpg', alt: 'Campaign event photo 2' },
  { src: '/assets/images/gallery-3.jpg', alt: 'Campaign event photo 3' },
  { src: '/assets/images/gallery-4.jpg', alt: 'Campaign event photo 4' },
  { src: '/assets/images/gallery-5.jpg', alt: 'Campaign event photo 5' },
];

const Gallery: React.FC = () => {
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openLightbox = (index: number) => {
    setCurrentImageIndex(index);
    setIsLightboxOpen(true);
  };

  const closeLightbox = () => {
    setIsLightboxOpen(false);
  };

  const showNextImage = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const showPrevImage = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isLightboxOpen) return;

      if (e.key === 'ArrowRight') {
        showNextImage();
      } else if (e.key === 'ArrowLeft') {
        showPrevImage();
      } else if (e.key === 'Escape') {
        closeLightbox();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isLightboxOpen]);


  return (
    <section id="gallery" className="py-20 sm:py-24 bg-campaign-dark">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
          আমাদের পথচলা
        </h2>
        <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-16">
          ক্যাম্পাসের বিভিন্ন মুহূর্ত এবং আপনাদের সাথে কাটানো কিছু স্মৃতি।
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {images.map((image, index) => (
            <div 
              key={index} 
              className="overflow-hidden rounded-lg shadow-lg group cursor-pointer"
              onClick={() => openLightbox(index)}
              onKeyPress={(e) => e.key === 'Enter' && openLightbox(index)}
              role="button"
              tabIndex={0}
              aria-label={`View image ${index + 1}: ${image.alt}`}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover aspect-square transition-transform duration-500 ease-in-out group-hover:scale-110"
              />
            </div>
          ))}
        </div>
      </div>

      {isLightboxOpen && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black bg-opacity-80 backdrop-blur-sm transition-opacity duration-300 animate-fade-in"
          onClick={closeLightbox}
          role="dialog"
          aria-modal="true"
          aria-label="Image gallery"
        >
          <div 
            className="relative max-w-4xl w-full max-h-[90vh] p-4"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={images[currentImageIndex].src}
              alt={images[currentImageIndex].alt}
              className="object-contain w-full h-full max-h-[85vh] rounded-lg shadow-2xl"
            />
            
            <button
              onClick={closeLightbox}
              className="absolute top-0 right-0 m-4 text-white bg-black bg-opacity-50 rounded-full p-2 hover:bg-opacity-75 transition-all"
              aria-label="Close"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            
            <button
              onClick={showPrevImage}
              className="absolute left-0 top-1/2 -translate-y-1/2 m-4 text-white bg-black bg-opacity-50 rounded-full p-2 hover:bg-opacity-75 transition-all"
              aria-label="Previous image"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            <button
              onClick={showNextImage}
              className="absolute right-0 top-1/2 -translate-y-1/2 m-4 text-white bg-black bg-opacity-50 rounded-full p-2 hover:bg-opacity-75 transition-all"
              aria-label="Next image"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;