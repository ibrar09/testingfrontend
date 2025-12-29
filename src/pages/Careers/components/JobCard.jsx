import React, { useState } from "react";
import CVForm from "./CVForm";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "../../../context/LanguageContext";

const JobCard = ({ job }) => {
  const { lang } = useLanguage();
  const [showForm, setShowForm] = useState(false);

  const handleApplyClick = () => {
    setShowForm(true);
  };

  const handleCloseForm = () => {
    setShowForm(false);
  };

  // Bilingual labels
  const labels = {
    en: {
      applyNow: "Apply Now",
      applyFor: "Apply for",
      location: "📍",
      type: "⏳",
      close: "×"
    },
    ar: {
      applyNow: "قدم الآن",
      applyFor: "التقدم لـ",
      location: "📍",
      type: "⏳",
      close: "×"
    }
  };

  const currentLabels = labels[lang];

  // Get job data based on language
  const jobData = {
    title: job.title?.[lang] || job.title,
    description: job.description?.[lang] || job.description,
    location: job.location?.[lang] || job.location,
    type: job.type?.[lang] || job.type
  };

  return (
    <>
      <div 
        className="bg-white border shadow-md rounded-xl p-6 hover:shadow-xl transition-transform transform hover:scale-105 cursor-pointer"
        dir={lang === 'ar' ? 'rtl' : 'ltr'}
      >
        <h3 className={`text-2xl font-semibold ${lang === 'ar' ? 'font-arabic' : ''}`}>
          {jobData.title}
        </h3>
        <p className={`text-gray-600 mt-2 ${lang === 'ar' ? 'font-arabic text-right' : 'text-left'}`}>
          {jobData.description}
        </p>
        <div className={`flex ${lang === 'ar' ? 'flex-row-reverse' : ''} justify-between mt-4 text-sm text-gray-500`}>
          <span className={lang === 'ar' ? 'font-arabic' : ''}>
            {currentLabels.location} {jobData.location}
          </span>
          <span className={lang === 'ar' ? 'font-arabic' : ''}>
            {currentLabels.type} {jobData.type}
          </span>
        </div>
        <button
          onClick={handleApplyClick}
          className={`mt-6 w-full py-3 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 transition ${lang === 'ar' ? 'font-arabic' : ''}`}
        >
          {currentLabels.applyNow}
        </button>
      </div>

      {/* Modal for CV Form */}
      <AnimatePresence>
        {showForm && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="bg-white rounded-2xl p-6 w-full max-w-xl relative shadow-2xl overflow-auto max-h-[90vh]"
              dir={lang === 'ar' ? 'rtl' : 'ltr'}
            >
              {/* Cancel Button */}
              <button
                onClick={handleCloseForm}
                className={`absolute top-4 ${lang === 'ar' ? 'left-4' : 'right-4'} text-gray-500 hover:text-gray-700 font-bold text-2xl md:text-3xl`}
              >
                {currentLabels.close}
              </button>

              {/* Form Header */}
              <h2 className={`text-3xl font-bold mb-6 text-center ${lang === 'ar' ? 'font-arabic' : ''}`}>
                {`${currentLabels.applyFor} ${jobData.title}`}
              </h2>

              {/* CV Form */}
              <CVForm jobTitle={jobData.title} />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default JobCard;