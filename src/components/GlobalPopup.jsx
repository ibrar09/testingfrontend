import React, { useEffect, useState } from "react";

const GlobalPopup = () => {
  const popups = [
    {
      id: 1,
      title: "🔥 Big Sale in the Store!",
      message: "Get up to 40% OFF on new arrivals!",
      link: "/store",
      image: "/images/sale-banner.jpg",
    },
    {
      id: 2,
      title: "🚀 New Projects Launched",
      message: "Check out our latest professional work.",
      link: "/projects",
      image: "/images/projects-banner.jpg",
    },
    {
      id: 3,
      title: "💼 Premium Services",
      message: "Explore high-quality services built for your success.",
      link: "/services",
      image: "/images/services-banner.jpg",
    },
  ];

  const [visible, setVisible] = useState(false);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 1200);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!visible) return;

    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % popups.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [visible]);

  if (!visible) return null;

  const item = popups[current];

  return (
    <div className="
      fixed 
      top-1/3 
      right-0 
      z-[9999] 
      animate-slideLeft
    ">
      <div className="
        w-80 
        bg-white 
        shadow-2xl 
        rounded-l-2xl 
        border 
        overflow-hidden
        flex
      ">
        
        {/* Image */}
        <img 
          src={item.image}
          alt="popup"
          className="w-28 h-full object-cover"
        />

        {/* Content */}
        <div className="p-4 relative flex-1">
          {/* Close Button */}
          <button
            onClick={() => setVisible(false)}
            className="absolute top-1 right-2 text-gray-600 hover:text-black"
          >
            ✕
          </button>

          <h3 className="text-md font-bold text-primary">{item.title}</h3>
          <p className="text-sm text-gray-700 mt-1">{item.message}</p>

          <a
            href={item.link}
            className="
              inline-block 
              mt-3 
              bg-primary 
              text-white 
              px-3 
              py-2 
              rounded-xl 
              text-xs
              font-medium
              hover:opacity-90
              transition
            "
          >
            View Details
          </a>
        </div>
      </div>
    </div>
  );
};

export default GlobalPopup;
