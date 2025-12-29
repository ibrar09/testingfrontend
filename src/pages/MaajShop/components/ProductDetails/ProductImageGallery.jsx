// src/pages/MaajShop/components/ProductDetails/ProductImageGallery.jsx
import React, { useState, useEffect } from "react";
import { IoChevronBackOutline, IoChevronForwardOutline, IoStarSharp, IoClose, IoExpandOutline } from "react-icons/io5";
import { BACKEND_URL } from "../../../../api/api";
import { useLanguage } from "../../../../context/LanguageContext";

const ProductImageGallery = ({ images = [], productName = "Product", rating = 4.5, autoSlide = true }) => {
  const { lang } = useLanguage();
  const isArabic = lang === "ar";
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  const normalizedImages =
    Array.isArray(images) && images.length > 0
      ? images.map((img) => {
          if (!img) return "/placeholder.png";
          const url = img.startsWith("http")
            ? img
            : `${BACKEND_URL.replace(/\/$/, "")}/${encodeURI(img.replace(/^\/+/, ""))}`;
          return url;
        })
      : ["/placeholder.png"];

  const currentImage = normalizedImages[currentImageIndex] || "/placeholder.png";

  const goToNext = () => setCurrentImageIndex((prev) => (prev + 1) % normalizedImages.length);
  const goToPrevious = () =>
    setCurrentImageIndex((prev) => (prev - 1 + normalizedImages.length) % normalizedImages.length);

  useEffect(() => {
    if (!autoSlide || normalizedImages.length <= 1 || isLightboxOpen) return;
    const interval = setInterval(goToNext, 5000);
    return () => clearInterval(interval);
  }, [normalizedImages, autoSlide, isLightboxOpen]);

  const handleImageError = (e) => (e.target.src = "/placeholder.png");

  return (
    <div className={`lg:sticky lg:top-24 w-full ${isArabic ? "text-right" : "text-left"}`}>
      
      {/* Top Meta Info */}
      <div className="flex items-center justify-between mb-4 px-1">
        <div className="flex items-center gap-1 bg-amber-50 px-2 py-1 rounded-lg border border-amber-100">
          <IoStarSharp className="w-3.5 h-3.5 text-amber-500" />
          <span className="font-bold text-amber-700 text-xs">{rating || 0}</span>
        </div>
        <span className="text-[11px] font-medium text-gray-400 uppercase tracking-widest">
          {isArabic ? "صور المنتج" : "Product Gallery"}
        </span>
      </div>

      {/* Main Display */}
      <div className="relative aspect-square sm:aspect-[4/5] lg:aspect-square flex items-center justify-center bg-white border border-gray-100 rounded-[2rem] overflow-hidden shadow-sm group">
        <img
          src={currentImage}
          alt={productName || "Product"}
          onClick={() => setIsLightboxOpen(true)}
          className="w-full h-full object-contain p-6 sm:p-12 transition-all duration-700 cursor-zoom-in group-hover:scale-105"
          onError={handleImageError}
        />

        {/* Small Navigation Arrows */}
        {normalizedImages.length > 1 && (
          <div className="absolute inset-x-4 top-1/2 -translate-y-1/2 flex justify-between items-center pointer-events-none">
            <button
              onClick={(e) => { e.stopPropagation(); goToPrevious(); }}
              className={`pointer-events-auto p-2 sm:p-3 rounded-full bg-white/70 backdrop-blur-md text-gray-800 shadow-sm border border-white/50 hover:bg-blue-600 hover:text-white transition-all active:scale-90 ${
                isArabic ? "order-last" : "order-first"
              }`}
            >
              <IoChevronBackOutline className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); goToNext(); }}
              className={`pointer-events-auto p-2 sm:p-3 rounded-full bg-white/70 backdrop-blur-md text-gray-800 shadow-sm border border-white/50 hover:bg-blue-600 hover:text-white transition-all active:scale-90 ${
                isArabic ? "order-first" : "order-last"
              }`}
            >
              <IoChevronForwardOutline className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
          </div>
        )}

        {/* Bottom Progress Dots instead of Numbers */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-1.5 px-3 py-1.5 bg-gray-900/10 backdrop-blur-lg rounded-full">
          {normalizedImages.map((_, i) => (
            <div 
              key={i} 
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === currentImageIndex ? "w-4 bg-blue-600" : "w-1.5 bg-gray-400/50"
              }`} 
            />
          ))}
        </div>
      </div>

      {/* Modern Thumbnails Container */}
      <div className="mt-6 flex items-center gap-3 overflow-x-auto pb-2 no-scrollbar px-1">
        {normalizedImages.map((img, index) => (
          <button
            key={index}
            onClick={() => setCurrentImageIndex(index)}
            className={`relative flex-shrink-0 w-14 h-14 sm:w-18 sm:h-18 rounded-2xl overflow-hidden border-2 transition-all duration-500 ${
              index === currentImageIndex 
                ? "border-blue-600 ring-4 ring-blue-50 shadow-md translate-y-[-4px]" 
                : "border-gray-100 hover:border-gray-300"
            }`}
          >
            <img 
              src={img} 
              alt="thumb" 
              className={`w-full h-full object-cover transition-all duration-500 ${index === currentImageIndex ? 'scale-110' : 'opacity-50 grayscale-[0.5] hover:opacity-100 hover:grayscale-0'}`} 
              onError={handleImageError} 
            />
          </button>
        ))}
      </div>

      {/* Fullscreen Lightbox */}
      {isLightboxOpen && (
        <div
          className="fixed inset-0 bg-white/95 backdrop-blur-xl flex items-center justify-center z-[9999] p-4 animate-in fade-in duration-300"
          onClick={() => setIsLightboxOpen(false)}
        >
          <button
            onClick={() => setIsLightboxOpen(false)}
            className="absolute top-6 right-6 text-gray-900 bg-gray-100 p-3 rounded-full hover:bg-red-50 hover:text-red-600 transition-colors"
          >
            <IoClose size={24} />
          </button>
          
          <img
            src={currentImage}
            alt="Product Zoomed"
            className="max-h-[85vh] max-w-full object-contain rounded-xl animate-in zoom-in-95 duration-500"
            onError={handleImageError}
          />
        </div>
      )}
    </div>
  );
};

export default ProductImageGallery;