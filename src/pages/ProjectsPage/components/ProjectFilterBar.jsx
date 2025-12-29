import React, { useState, memo } from "react";
import { ChevronDown } from "lucide-react";
import { motion } from "framer-motion";

const PRIMARY_BLUE = "#023A9A";

// --- Custom Select Component ---
const CustomSelect = memo(({ label, value, options, onChange }) => {
  return (
    <div className="relative flex items-center gap-2 w-full sm:w-auto">
      <label 
        className="text-gray-700 text-base font-medium hidden sm:block"
        htmlFor={`select-${label.toLowerCase()}`}
      >
        {label}:
      </label>
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="relative w-full sm:w-auto"
      >
        <select
          id={`select-${label.toLowerCase()}`}
          value={value}
          onChange={onChange}
          className="appearance-none block w-full sm:w-48 bg-white border border-gray-300 rounded-lg py-3 pl-4 pr-10 text-gray-900 cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary transition-shadow shadow-sm"
          style={{ outlineColor: PRIMARY_BLUE }}
          aria-label={label}
        >
          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
        <ChevronDown size={18} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none" />
      </motion.div>
    </div>
  );
});

// --- Project Filter Bar Component ---
const ProjectFilterBar = ({ categories, years, projectCount, onFilterChange }) => {
  const [selectedCategory, setSelectedCategory] = useState(categories?.[0] ?? "All Categories");
  const [selectedYear, setSelectedYear] = useState(years?.[0] ?? "All Years");

  const handleCategoryChange = (e) => {
    const newCategory = e.target.value;
    setSelectedCategory(newCategory);
    onFilterChange({ category: newCategory, year: selectedYear });
  };

  const handleYearChange = (e) => {
    const newYear = e.target.value;
    setSelectedYear(newYear);
    onFilterChange({ category: selectedCategory, year: newYear });
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full bg-white pt-10 pb-12 px-4 sm:px-6 lg:px-8 border-b border-gray-200"
      aria-label="Project Filter Bar"
    >
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-6">
        <CustomSelect
          label="Category"
          value={selectedCategory}
          options={categories}
          onChange={handleCategoryChange}
        />
        <CustomSelect
          label="Year"
          value={selectedYear}
          options={years}
          onChange={handleYearChange}
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="sm:ml-8 py-2 px-5 bg-gray-50 rounded-full border border-gray-200 shadow-sm text-gray-700 font-semibold text-sm text-center"
        >
          {projectCount} Projects Found
        </motion.div>
      </div>
    </motion.section>
  );
};

export default ProjectFilterBar;
