// src/pages/Projects/components/ProjectGallery.jsx
import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "../../../context/LanguageContext"; // 🔹 Language context

const ProjectGallery = ({
  images = [],
  projectTitle = "Project",
  title = "Project Highlights",
  subtitle = "Explore the visual journey of this project from conception to completion",
}) => {
  const { lang } = useLanguage();
  const isRTL = lang === "ar";

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  // --- Keyboard navigation ---
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isLightboxOpen) return;
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
      if (e.key === "Escape") setIsLightboxOpen(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isLightboxOpen]);

  if (!images || images.length === 0) {
    return (
      <div className="text-center py-10 text-gray-500 text-sm sm:text-base">
        {isRTL ? "لا توجد معالم بارزة للمشروع." : "No project highlights available."}
      </div>
    );
  }

  const currentImage = images[currentIndex];

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <section
      className="py-14 bg-gray-50"
      aria-labelledby="project-gallery-title"
      dir={isRTL ? "rtl" : "ltr"}
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* --- Header --- */}
        <div className={`text-center mb-10 ${isRTL ? "text-right" : "text-left"}`}>
          <h2
            id="project-gallery-title"
            className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3"
          >
            {isRTL ? "معالم المشروع" : title}
          </h2>
          <p className="text-gray-600 text-sm sm:text-base lg:text-lg max-w-2xl mx-auto">
            {isRTL
              ? "استكشف الرحلة البصرية لهذا المشروع من البداية إلى الإنجاز"
              : subtitle}
          </p>
        </div>

        {/* --- Main Image Section --- */}
        <div className="relative flex justify-center">
          <div className="w-full max-w-[1280px] h-[500px] bg-white border border-[#E3E3E3] rounded-lg overflow-hidden shadow-md">
            <AnimatePresence mode="wait">
              <motion.img
                key={currentImage}
                src={currentImage}
                alt={
                  isRTL
                    ? `${projectTitle} الصورة ${currentIndex + 1}`
                    : `${projectTitle} Image ${currentIndex + 1}`
                }
                className="w-full h-full object-cover cursor-pointer"
                onClick={() => setIsLightboxOpen(true)}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5 }}
              />
            </AnimatePresence>
          </div>

          {/* Navigation Arrows */}
          {images.length > 1 && (
            <>
              <button
                onClick={handlePrev}
                className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 bg-white p-2 sm:p-3 rounded-full shadow hover:bg-gray-100 transition"
                aria-label={isRTL ? "الصورة السابقة" : "Previous image"}
              >
                <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 text-gray-700" />
              </button>

              <button
                onClick={handleNext}
                className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 bg-white p-2 sm:p-3 rounded-full shadow hover:bg-gray-100 transition"
                aria-label={isRTL ? "الصورة التالية" : "Next image"}
              >
                <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-gray-700" />
              </button>
            </>
          )}
        </div>

        {/* --- Thumbnails --- */}
        {images.length > 1 && (
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mt-6">
            {images.map((img, index) => (
              <motion.div
                key={index}
                className={`w-[182px] h-[82px] sm:w-[160px] sm:h-[75px] md:w-[182px] md:h-[82px] 
                  rounded-lg border border-[#E3E3E3] overflow-hidden bg-white 
                  cursor-pointer relative`}
                onClick={() => setCurrentIndex(index)}
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <img
                  src={img}
                  alt={
                    isRTL
                      ? `${projectTitle} الصورة المصغرة ${index + 1}`
                      : `${projectTitle} Thumbnail ${index + 1}`
                  }
                  className="w-full h-full object-cover"
                />
                {currentIndex === index && (
                  <div className="absolute inset-0 ring-2 ring-blue-600 rounded-lg pointer-events-none"></div>
                )}
              </motion.div>
            ))}
          </div>
        )}
      </div>

      {/* --- Lightbox Modal --- */}
      <AnimatePresence>
        {isLightboxOpen && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <button
              className="absolute top-6 right-6 bg-white p-2 sm:p-3 rounded-full shadow"
              onClick={() => setIsLightboxOpen(false)}
              aria-label={isRTL ? "إغلاق المعاينة" : "Close lightbox"}
            >
              <X className="w-5 h-5 sm:w-6 sm:h-6 text-gray-800" />
            </button>

            <motion.img
              src={currentImage}
              alt={
                isRTL
                  ? `${projectTitle} صورة المعاينة ${currentIndex + 1}`
                  : `${projectTitle} Lightbox Image ${currentIndex + 1}`
              }
              className="rounded-lg max-h-[85vh] w-auto object-contain shadow-lg"
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
              transition={{ duration: 0.5 }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default ProjectGallery;
