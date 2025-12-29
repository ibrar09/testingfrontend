import React, { useState, useEffect } from "react";

const BannerSection = ({ banners = [], ads = [], autoSlideInterval = 5000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (banners.length <= 1) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % banners.length);
    }, autoSlideInterval);
    return () => clearInterval(interval);
  }, [banners.length, autoSlideInterval]);

  const goPrev = () => setCurrentIndex((prev) => (prev - 1 + banners.length) % banners.length);
  const goNext = () => setCurrentIndex((prev) => (prev + 1) % banners.length);

  return (
    <div className="w-full mb-8">
      {/* Carousel */}
      <div className="relative w-full overflow-hidden rounded-lg shadow-lg">
        {banners.map((banner, idx) => (
          <a
            key={idx}
            href={banner.link || "#"}
            className={`absolute inset-0 transition-opacity duration-700 ${
              idx === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          >
            <img
              src={banner.image}
              alt={banner.title || "Banner"}
              className="w-full h-80 sm:h-96 md:h-[500px] lg:h-[600px] object-cover rounded-lg"
            />
            {/* Overlay */}
            {banner.title && (
              <div className="absolute top-1/2 left-10 transform -translate-y-1/2 text-white space-y-3 max-w-lg">
                <h2 className="text-3xl md:text-5xl font-extrabold drop-shadow-lg">
                  {banner.title}
                </h2>
                {banner.subtitle && (
                  <p className="text-lg md:text-2xl drop-shadow-md">{banner.subtitle}</p>
                )}
                {banner.buttonText && (
                  <a
                    href={banner.link || "#"}
                    className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-md mt-2 transition"
                  >
                    {banner.buttonText}
                  </a>
                )}
              </div>
            )}
          </a>
        ))}

        {/* Arrows */}
        {banners.length > 1 && (
          <>
            <button
              onClick={goPrev}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-black bg-opacity-40 text-white p-3 rounded-full hover:bg-opacity-60 transition"
            >
              &#10094;
            </button>
            <button
              onClick={goNext}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-black bg-opacity-40 text-white p-3 rounded-full hover:bg-opacity-60 transition"
            >
              &#10095;
            </button>
          </>
        )}

        {/* Indicators */}
        {banners.length > 1 && (
          <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-2">
            {banners.map((_, idx) => (
              <span
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`w-3 h-3 rounded-full cursor-pointer transition ${
                  idx === currentIndex ? "bg-white" : "bg-gray-400"
                }`}
              ></span>
            ))}
          </div>
        )}
      </div>

      {/* Ads Section */}
      {ads.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-6">
          {ads.map((ad, idx) => (
            <a key={idx} href={ad.link || "#"} className="overflow-hidden rounded-lg shadow-md">
              <img
                src={ad.image}
                alt={`Ad ${idx + 1}`}
                className="w-full h-40 sm:h-48 md:h-56 object-cover transition-transform hover:scale-105"
              />
            </a>
          ))}
        </div>
      )}
    </div>
  );
};

export default BannerSection;
