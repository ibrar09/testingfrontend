// ProjectDurationCard.jsx
import React from "react";
import { motion } from "framer-motion";

// Single card component
const ProjectDurationCard = ({ icon, title, time, color = "text-gray-700" }) => {
  return (
    <motion.article
      className="w-full max-w-[302px] flex flex-col sm:flex-row items-center sm:items-start gap-2 sm:gap-[12px] p-3 sm:p-2 rounded-md bg-[rgba(245,245,245,0.3)] border border-[rgba(230,230,230,0.5)] mx-auto shadow-sm hover:shadow-lg transition-shadow duration-300"
      whileHover={{ scale: 1.05 }}
      aria-label={`${title} duration card`}
    >
      {/* Left Icon */}
      <div
        className="w-8 h-8 rounded-lg text-primary bg-[rgba(19,146,224,0.1)] flex items-center justify-center flex-shrink-0 mb-2 sm:mb-0"
        aria-hidden="true"
      >
        {icon}
      </div>

      {/* Right Text */}
      <div className="flex flex-col justify-center w-full text-center sm:text-left">
        <h3 className="font-['Helvetica'] font-bold text-[12px] sm:text-[12px] leading-[16px] tracking-[0.3px] uppercase text-gray-800">
          {title}
        </h3>
        <p className={`font-['Helvetica'] text-[16px] sm:text-[16px] leading-[20px] ${color}`}>
          {time}
        </p>
      </div>
    </motion.article>
  );
};

export default ProjectDurationCard;
