// src/pages/ServicePage/ChildPages/components/HeroSection.jsx
import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import HeroCard from "./HeroCard";
import RequestQuoteForm from "../../../RequestPage/RequestQuoteForm";

const HeroSection = ({ title, heading, description, cards = [], images = [] }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const sliderRef = useRef(null);
  const intervalRef = useRef(null);

  // --- Auto Scroll Function ---
  const startAutoScroll = () => {
    const slider = sliderRef.current;
    if (!slider) return;

    clearInterval(intervalRef.current);

    intervalRef.current = setInterval(() => {
      const firstCard = slider.children[0];
      if (!firstCard) return;

      const cardWidth = firstCard.offsetWidth + 16; // include gap
      if (slider.scrollLeft + slider.offsetWidth >= slider.scrollWidth - 5) {
        slider.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        slider.scrollBy({ left: cardWidth, behavior: "smooth" });
      }
    }, 3000); // scroll every 3 seconds
  };

  useEffect(() => {
    startAutoScroll();
    return () => clearInterval(intervalRef.current);
  }, []);

  return (
    <section className="w-full bg-gradient-to-b from-white to-gray-100 py-12 px-6 md:px-12 lg:px-20" aria-label="Hero Section">
      <div className="max-w-[1280px] mx-auto flex flex-col md:flex-row gap-12 items-center md:items-start">

        {/* ---------- Left Section ---------- */}
        <div className="flex-1 flex flex-col gap-6 text-center md:text-left">
          <h1 className="font-bold text-3xl sm:text-4xl md:text-5xl leading-tight text-black" itemProp="headline">
            {title}
          </h1>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-normal leading-snug text-gray-700" itemProp="headline">
            {heading}
          </h2>
          <p className="text-base sm:text-lg leading-7 text-gray-600" itemProp="description">
            {description}
          </p>

          {/* Cards with animation */}
          <div className="flex flex-col gap-4 mt-4">
            {cards.map((card, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.2, duration: 0.5 }}
              >
                <HeroCard
                  heading={card.heading}
                  description={card.description}
                  icon={card.icon}
                />
              </motion.div>
            ))}
          </div>

          <button
            onClick={() => setIsModalOpen(true)}
            className="w-[176px] h-[44px] mt-6 flex items-center justify-center gap-[10px] rounded-[6px] border-[1.6px] border-transparent bg-[#023A9A] text-white text-[16px] leading-[20px] font-bold font-['Helvetica'] hover:bg-blue-800 transition-colors"
            aria-label="Request a Quote"
          >
            Request a Quote
          </button>
        </div>

        {/* ---------- Right Section: Auto-Scrolling Image Slider ---------- */}
        <div
          ref={sliderRef}
          className="flex-1 flex gap-4 overflow-x-scroll snap-x snap-mandatory scroll-smooth scrollbar-hide mt-10"
          onMouseEnter={() => clearInterval(intervalRef.current)}
          onMouseLeave={startAutoScroll}
          onTouchStart={() => clearInterval(intervalRef.current)}
          onTouchEnd={startAutoScroll}
          aria-label="Hero Image Slider"
        >
          {images.map((imgSrc, index) => (
            <motion.div
              key={index}
              className="flex-shrink-0 snap-center rounded-[16px] overflow-hidden 
                         shadow-[0_2px_4px_-1px_rgba(0,0,0,0.06),_0_4px_6px_-1px_rgba(0,0,0,0.1)]
                         w-full sm:w-auto md:w-[500px] lg:w-[616px]
                         h-[240px] sm:h-[320px] md:h-[420px] lg:h-[462px] bg-transparent"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.3, duration: 0.6, ease: "easeOut" }}
            >
              <img
                src={imgSrc}
                alt={`Hero image ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </motion.div>
          ))}
        </div>

      </div>

      {/* Modal Form */}
      {isModalOpen && <RequestQuoteForm onClose={() => setIsModalOpen(false)} />}
    </section>
  );
};

export default HeroSection;
