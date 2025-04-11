import React, { useState, useEffect } from 'react';
import './Gallery.css';
import slide1 from '../assets/slide1.png';
import slide2 from '../assets/slide2.png';
import slide3 from '../assets/slide3.png';
import slide4 from '../assets/slide4.png';
import slide5 from '../assets/slide5.png';


const Gallery = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    { id: 1, src: slide1, alt: 'Slide 1' },
    { id: 2, src: slide2, alt: 'Slide 2' },
    { id: 3, src: slide3, alt: 'Slide 3' },
    { id: 4, src: slide4, alt: 'Slide 4' },
    { id: 5, src: slide5, alt: 'Slide 5' },

  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 3000);
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <section className="gallery-section">
      <div className="slideshow-container">
        <div 
          className="slideshow-wrapper"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {slides.map((slide) => (
            <div key={slide.id} className="slide">
              <img src={slide.src} alt={slide.alt} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;