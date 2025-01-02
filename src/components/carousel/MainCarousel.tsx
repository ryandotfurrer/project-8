<<<<<<< HEAD
//import React, { useState, useEffect, useCallback } from 'react';
import { useEffect } from 'react';
import { ChevronLeft, ChevronRight, Upload } from 'lucide-react';
import { useCarouselImages } from '../../hooks/useCarouselImages';
import { useAuth } from '../../hooks/useAuth';
import { useCallback } from 'react';
import { useState } from 'react';
=======
import React, { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight, Upload } from 'lucide-react';
import { useCarouselImages } from '../../hooks/useCarouselImages';
import { useAuth } from '../../hooks/useAuth';
>>>>>>> 9d149ec (test)
import CarouselUpload from './CarouselUpload';

export default function MainCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showUpload, setShowUpload] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const { images, loading } = useCarouselImages();
  const { user } = useAuth();

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  }, [images.length]);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  // Auto-scroll effect
  useEffect(() => {
    if (loading || images.length <= 1 || isPaused) return;

    const interval = setInterval(nextSlide, 8000);
    return () => clearInterval(interval);
  }, [loading, images.length, isPaused, nextSlide]);

  if (loading || images.length === 0) return null;

  return (
    <div 
      className="relative group max-w-xl mx-auto"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="aspect-[16/9] overflow-hidden rounded-lg">
        <img
          src={images[currentIndex].url}
          alt="Community highlight"
          className="w-full h-full object-cover"
        />
      </div>

      {images.length > 1 && (
        <>
          <button
            onClick={prevSlide}
            className="absolute left-2 top-1/2 -translate-y-1/2 p-1.5 rounded-full bg-black/50 text-white opacity-0 group-hover:opacity-100 transition-opacity"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 rounded-full bg-black/50 text-white opacity-0 group-hover:opacity-100 transition-opacity"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </>
      )}

      {user && (
        <button
          onClick={() => setShowUpload(true)}
          className="absolute top-2 right-2 p-1.5 rounded-full bg-white shadow-md hover:bg-gray-50"
        >
          <Upload className="w-4 h-4" />
        </button>
      )}

      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex space-x-1.5">
        {images.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`w-1.5 h-1.5 rounded-full transition-colors ${
              idx === currentIndex ? 'bg-white' : 'bg-white/50'
            }`}
          />
        ))}
      </div>

      {showUpload && <CarouselUpload onClose={() => setShowUpload(false)} />}
    </div>
  );
}