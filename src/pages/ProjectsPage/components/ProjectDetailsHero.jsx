  import React from "react";
  import { motion } from "framer-motion";

  const ProjectDetailsHero = ({ hero }) => {
    if (!hero) return null;

    const { image, category, title, subtitle } = hero;

    const textVariants = {
      hidden: { opacity: 0, y: 30 },
      visible: { opacity: 1, y: 0 },
    };

    const badgeVariants = {
      hidden: { opacity: 0, x: -20 },
      visible: { opacity: 1, x: 0 },
    };

    return (
  <section className="relative w-full h-[400px] sm:h-[500px] md:h-[550px] lg:h-[655px]">
    {image ? (
      <img
  src={image}
  alt={title || "Project Hero"}
  className="w-full h-full object-cover"
  onError={(e) => {
    if (!e.target.dataset.fallback) {
      e.target.dataset.fallback = "true";
      e.target.src = "/fallback-hero.jpg";
    }
  }}
/>

    ) : (
      <div className="w-full h-full bg-gradient-to-r from-gray-300 to-gray-100" />
    )}

    <div className="absolute inset-0 bg-black/20 sm:bg-black/25 md:bg-black/30 lg:bg-black/40"></div>

    {category && (
      <motion.div
        className="absolute top-4 left-4 py-1 px-3 sm:py-2 sm:px-4 rounded-full bg-[#1392E0]"
        variants={{ hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0 } }}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.6 }}
      >
        <span className="font-bold text-white text-xs sm:text-sm md:text-base">{category}</span>
      </motion.div>
    )}

    <motion.div
      className="absolute bottom-8 sm:bottom-12 md:bottom-16 left-4 sm:left-6 md:left-8 text-white max-w-[90%] sm:max-w-[80%] md:max-w-[60%] z-10"
      variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}
      initial="hidden"
      animate="visible"
      transition={{ duration: 0.8, delay: 0.2 }}
    >
      {title && (
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-snug mb-2" itemProp="headline">
          {title}
        </h1>
      )}
      {subtitle && (
        <h2 className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-200 leading-relaxed" itemProp="description">
          {subtitle}
        </h2>
      )}
    </motion.div>
  </section>

    );
  };

  export default ProjectDetailsHero;
