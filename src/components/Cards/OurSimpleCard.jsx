import React from "react";

const OurSimpleCard = ({ card, index }) => {
  return (
    // Card Container Layout: Fluid width with a max limit, allowing it to shrink on small screens.
    <div
      className="w-full max-w-[274px] h-auto rounded-xl bg-white shadow-lg flex flex-col mx-auto"
    >
      {/* 1. Image Area (274x171) */}
      {/* Uses w-full to fill max-w-[274px] and h-[171px] to fix height */}
      <div className="overflow-hidden rounded-t-xl relative w-full h-[171px]">
        <img
          className="w-full h-full object-cover"
          src={card.imageSrc || "https://via.placeholder.com/274x171"}
          alt={card.cardTitle || "Card Image"}
        />

        {/* ICON CONTAINER 1: Icon (BOTTOM-LEFT, Fixed 54x54) */}
        <div className="absolute bottom-4 left-4 w-[54px] h-[54px] text-white rounded-full bg-[#FFFFFF1A] flex items-center justify-center">
          {card.phoneIcon || "📞"} 
        </div>

        {/* ICON CONTAINER 2: Step Number (Top-Right, Fixed 54x54) */}
        <div className="absolute top-4 right-4 w-[54px] h-[54px] rounded-full bg-[#023A9A] flex items-center justify-center text-white font-bold text-xl">
          {index + 1}
        </div>
      </div>

      {/* 2. Content Area (Below Image) */}
      {/* Uses w-full to fill container width, removed fixed widths from inner text elements */}
      <div className="w-full h-auto flex flex-col text-center p-3 gap-7 flex-grow items-center justify-between">
        
        <div className="flex flex-col items-center gap-2">
          
          {/* Card Title: Fluid width, text styles remain fixed as per design */}
          <h3 className="w-full font-sans font-bold text-[22px] leading-[28px] tracking-tighter text-center text-black px-2">
            {card.cardTitle || "Card Title"}
          </h3>

          {/* Description: Fluid width (w-full or max-w-xs) to prevent overflow */}
          <p className="w-full px-2 max-w-xs font-sans font-normal text-base leading-6 text-center text-[#737373]">
            {card.cardDescription ||
              "Fill out our simple service request form or call us directly. We'll respond within 2 hours during business hours."}
          </p>
        </div>
      </div>
    </div>
  );
};

export default OurSimpleCard;