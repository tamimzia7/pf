import React, { useEffect, useRef, useState } from 'react';

interface CaseStudyGalleryProps {
  images: string[];
  title: string;
}

const AUTO_ADVANCE_MS = 4500;

export const CaseStudyGallery: React.FC<CaseStudyGalleryProps> = ({ images, title }) => {
  const [index, setIndex] = useState(0);
  const [reducedMotion, setReducedMotion] = useState(false);
  const timerRef = useRef<number | null>(null);

  useEffect(() => {
    setIndex(0);
  }, [images]);

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReducedMotion(mq.matches);
    const onChange = (event: MediaQueryListEvent) => setReducedMotion(event.matches);
    mq.addEventListener('change', onChange);
    return () => mq.removeEventListener('change', onChange);
  }, []);

  const stopAutoAdvance = () => {
    if (timerRef.current !== null) {
      window.clearInterval(timerRef.current);
      timerRef.current = null;
    }
  };

  const startAutoAdvance = () => {
    stopAutoAdvance();
    if (reducedMotion || images.length < 2) return;
    timerRef.current = window.setInterval(() => {
      setIndex((current) => (current + 1) % images.length);
    }, AUTO_ADVANCE_MS);
  };

  useEffect(() => {
    startAutoAdvance();
    return stopAutoAdvance;
  }, [reducedMotion, images.length]);

  // Reduced motion — render the original static grid, no auto-advance
  if (reducedMotion) {
    return (
      <div className="grid gap-3 sm:gap-4 grid-cols-1 sm:grid-cols-2">
        {images.map((src, i) => (
          <img
            key={`${i}-${src}`}
            src={src}
            alt={`${title} screenshot ${i + 1}`}
            loading="lazy"
            className="w-full h-48 sm:h-56 lg:h-64 object-cover rounded-lg"
          />
        ))}
      </div>
    );
  }

  return (
    <div role="region" aria-label={`${title} screenshots gallery`}>
      <div
        className="relative h-48 sm:h-56 lg:h-64 overflow-hidden rounded-lg bg-soft-background"
        onMouseEnter={stopAutoAdvance}
        onMouseLeave={startAutoAdvance}
      >
        {images.map((src, i) => (
          <img
            key={`${i}-${src}`}
            src={src}
            alt={`${title} screenshot ${i + 1}`}
            loading={i === 0 ? 'eager' : 'lazy'}
            aria-hidden={i !== index}
            className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ease-out ${
              i === index ? 'opacity-100' : 'opacity-0'
            }`}
          />
        ))}
      </div>
      {images.length > 1 && (
        <div className="mt-3 flex items-center justify-center gap-2">
          {images.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setIndex(i)}
              aria-label={`Show ${title} screenshot ${i + 1}`}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === index
                  ? 'w-5 bg-primary'
                  : 'w-2 bg-secondary-text/30 hover:bg-primary/50'
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
};