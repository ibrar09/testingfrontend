import React, { useEffect, useState, useRef, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import BannerImage from "./BannerImage";
import api from "../../../api/api";

const SaleBannerSlider = () => {
  const [banners, setBanners] = useState([]);
  const [current, setCurrent] = useState(0);
  const isHovering = useRef(false);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);
  const sliderRef = useRef(null);

  const SLIDE_DURATION = 5000;

  // Generate structured data for banners
  const generateStructuredData = () => {
    if (!banners.length) return null;
    
    const currentUrl = typeof window !== 'undefined' ? window.location.origin : '';
    
    return {
      "@context": "https://schema.org",
      "@type": "ItemList",
      "name": "Featured Promotional Banners",
      "description": "Latest sales and promotional offers",
      "numberOfItems": banners.length,
      "itemListElement": banners.map((banner, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "item": {
          "@type": "Promotion",
          "name": `Banner ${index + 1}`,
          "description": "Promotional offer",
          "image": banner.image_url || "",
          "url": `${currentUrl}${banner.link || "/"}`,
          "availabilityStarts": new Date().toISOString(),
          "availabilityEnds": new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString()
        }
      }))
    };
  };

  // Add SEO metadata to head
  useEffect(() => {
    if (!banners.length) return;

    // Add structured data script
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(generateStructuredData());
    document.head.appendChild(script);

    // Preload banner images for better performance
    banners.forEach((banner, i) => {
      if (i < 2) { // Preload only first 2 for performance
        const link = document.createElement('link');
        link.rel = 'preload';
        link.as = 'image';
        link.href = banner.image_url;
        document.head.appendChild(link);
      }
    });

    return () => {
      document.head.removeChild(script);
      // Note: We don't remove preload links as they're beneficial
    };
  }, [banners]);

  useEffect(() => {
    const fetchBanners = async () => {
      try {
        const res = await api.get("/banners");
        const data = res.data?.data || res.data || [];
        setBanners(Array.isArray(data) ? data : []);
      } catch (err) {
        console.error("Fetch error:", err);
      }
    };
    fetchBanners();
  }, []);

  const total = banners.length;
  const goNext = useCallback(() => setCurrent((p) => (p + 1) % total), [total]);
  const goPrev = useCallback(() => setCurrent((p) => (p - 1 + total) % total), [total]);

  useEffect(() => {
    if (total <= 1) return;
    const interval = setInterval(() => { if (!isHovering.current) goNext(); }, SLIDE_DURATION);
    return () => clearInterval(interval);
  }, [goNext, total]);

  // Add keyboard navigation for accessibility
  const handleKeyDown = useCallback((e) => {
    if (e.key === 'ArrowLeft') goPrev();
    if (e.key === 'ArrowRight') goNext();
    if (e.key >= '1' && e.key <= '9') {
      const index = parseInt(e.key) - 1;
      if (index < total) setCurrent(index);
    }
  }, [goPrev, goNext, total]);

  if (!total) return null;

  return (
    <div 
      ref={sliderRef}
      className="w-full relative overflow-hidden bg-white"
      role="region"
      aria-label="Promotional banners"
      aria-roledescription="carousel"
      aria-live="polite"
      onKeyDown={handleKeyDown}
      tabIndex={0}
    >
      <div 
        className="flex flex-nowrap transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${current * 100}%)` }}
        onTouchStart={(e) => (touchStartX.current = e.touches[0].clientX)}
        onTouchMove={(e) => (touchEndX.current = e.touches[0].clientX)}
        onTouchEnd={() => {
          const diff = touchStartX.current - touchEndX.current;
          if (diff > 50) goNext();
          if (diff < -50) goPrev();
        }}
        onMouseEnter={() => (isHovering.current = true)}
        onMouseLeave={() => (isHovering.current = false)}
        role="list"
        aria-label="Banner slides"
      >
        {banners.map((banner, i) => (
          <div 
            key={i} 
            className="min-w-full w-full flex-shrink-0"
            role="listitem"
            aria-label={`Slide ${i + 1} of ${total}`}
            aria-hidden={current !== i}
          >
            <BannerImage banner={banner} />
          </div>
        ))}
      </div>

      {/* Current slide indicator for screen readers */}
      <div className="sr-only" aria-live="polite" aria-atomic="true">
        Slide {current + 1} of {total}
      </div>

      {/* Navigation Arrows - Only show if more than 1 banner */}
      {total > 1 && (
        <>
          <button 
            onClick={goPrev} 
            className="absolute left-2 top-1/2 -translate-y-1/2 p-2 bg-black/10 hover:bg-black/30 text-white rounded-full transition-colors"
            aria-label="Previous slide"
            aria-controls="banner-carousel"
          >
            <ChevronLeft size={20} aria-hidden="true" />
          </button>
          <button 
            onClick={goNext} 
            className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-black/10 hover:bg-black/30 text-white rounded-full transition-colors"
            aria-label="Next slide"
            aria-controls="banner-carousel"
          >
            <ChevronRight size={20} aria-hidden="true" />
          </button>

          {/* Indicators */}
          <div 
            className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5"
            role="tablist"
            aria-label="Slide navigation"
          >
            {banners.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`h-1 rounded-full transition-all ${
                  current === i ? "w-6 bg-black/60" : "w-2 bg-black/20"
                }`}
                role="tab"
                aria-label={`Go to slide ${i + 1}`}
                aria-selected={current === i}
                aria-controls={`slide-${i}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default SaleBannerSlider;