// src/pages/Projects/components/ProjectDetailsDetail.jsx
import React from "react";
import { motion } from "framer-motion";
import { MapPin, Calendar, LayoutGrid, Clock, DollarSign, Star } from "lucide-react";

const iconMap = { MapPin, Calendar, LayoutGrid, Clock, DollarSign, Star };

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1, 
    transition: { staggerChildren: 0.15 } 
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { type: "spring", stiffness: 300 } 
  },
};

// Single Detail Item
const DetailItem = ({ icon: Icon, label, value }) => {
  const displayValue =
    label?.toLowerCase().includes("budget") && value
      ? `SR ${value}`
      : value || "-";

  return (
    <motion.div
      variants={itemVariants}
      whileHover={{ scale: 1.05, y: -5 }}
      className="flex flex-col items-center text-center p-4 sm:p-5 rounded-xl bg-white/50 backdrop-blur-md shadow-lg hover:shadow-2xl cursor-pointer transition-all duration-300"
      aria-label={`${label}: ${displayValue}`}
    >
      {Icon && (
        <div className="p-4 rounded-full bg-gradient-to-tr from-blue-500 to-indigo-600 text-white shadow-lg flex items-center justify-center mb-3 sm:mb-4">
          <Icon className="w-7 h-7 sm:w-8 sm:h-8 md:w-9 md:h-9" />
        </div>
      )}

      <h3 className="text-sm sm:text-base md:text-lg font-semibold text-gray-800 mb-1" itemProp="name">
        {label || "-"}
      </h3>

      <p className="text-xs sm:text-sm md:text-base text-gray-600 break-words" itemProp="description">
        {displayValue}
      </p>
    </motion.div>
  );
};

// Main Details Section
const ProjectDetailsDetail = ({ details }) => {
  if (!Array.isArray(details) || details.length === 0) return null;

  return (
    <section className="py-12 sm:py-16 md:py-20  bg-gray-50 " aria-label="Project Details">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
       <motion.div
  className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 gap-6 sm:gap-8 justify-center justify-items-center lg:ml-10 "
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, amount: 0.2 }}
  variants={containerVariants}
>
  {details.map((item, index) => {
    const IconComponent = iconMap[item.iconName];
    return <DetailItem key={index} icon={IconComponent} label={item.label} value={item.value} />;
  })}
</motion.div>

      </div>
    </section>
  );
};

export default ProjectDetailsDetail;
