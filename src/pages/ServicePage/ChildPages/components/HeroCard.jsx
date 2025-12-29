// src/pages/ServicePage/ChildPages/components/HeroCard.jsx
import React from "react";
import { motion } from "framer-motion";

const HeroCard = ({ heading, description, icon }) => {
  return (
    <motion.article
      className="w-full max-w-[616px] md:h-auto rounded-[12px] bg-white/80 border border-[#E6E6E6]/50 backdrop-blur-sm p-4 flex items-center gap-4 shadow-sm"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.03, boxShadow: "0px 8px 20px rgba(0,0,0,0.12)" }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      {/* Icon on the left */}
      <div className="w-10 h-10 rounded-[8px] bg-blue-200/20 flex items-center justify-center flex-shrink-0">
        <span aria-hidden="true">{icon}</span>
      </div>

      {/* Text on the right */}
      <div className="flex flex-col">
        <h3 className="text-black font-bold text-[16px] md:text-[18px] leading-6" itemProp="headline">
          {heading}
        </h3>
        <p className="text-gray-500 text-[14px] md:text-[16px] leading-5" itemProp="description">
          {description}
        </p>
      </div>
    </motion.article>
  );
};

export default HeroCard;
