// src/pages/ServicePage/ChildPages/Plumbing/PricingControlPage.jsx

import React, { useState, useEffect } from "react";
import { Check, Calculator, CheckCircle, Zap, Crown, Shield } from "lucide-react";
import { pricingData } from "../Plumbing/PlumbingData";
import RequestQuoteForm from "../../../RequestPage/RequestQuoteForm";
import { motion } from "framer-motion";
import { useLanguage } from "../../../../context/LanguageContext";

/* ------------------ Checklist Item ------------------ */
const ChecklistItem = ({ text, lang }) => (
  <div className={`flex items-start gap-3 py-1 ${lang === 'ar' ? 'flex-row-reverse' : ''}`}>
    <Check size={18} className="text-[#023A9A] flex-shrink-0 mt-0.5" />
    <p className={`text-gray-700 text-sm sm:text-base ${lang === 'ar' ? 'text-right' : 'text-left'}`}>{text}</p>
  </div>
);

/* ------------------ Pricing Card ------------------ */
const PricingCard = ({
  packageName,
  tagline,
  price,
  startingFrom,
  features,
  idealFor,
  isPopular,
  icon,
  lang,
}) => {
  const Icon =
    icon === "Zap" ? Zap : icon === "Crown" ? Crown : icon === "Shield" ? Shield : Zap;

  const cardClasses = isPopular
    ? "border-2 border-[#023A9A] shadow-xl bg-white scale-[1.02]"
    : "border border-gray-200 bg-white";

  const buttonClasses = isPopular
    ? "bg-[#023A9A] hover:bg-[#002f78] text-white"
    : "bg-white border border-[#023A9A] text-[#023A9A] hover:bg-gray-50";

  const popularText = lang === 'ar' ? 'الأكثر شعبية' : 'Most Popular';
  const idealForLabel = lang === 'ar' ? 'مثالي لـ:' : 'Ideal for:';
  const choosePackageText = lang === 'ar' ? 'اختر الباقة' : 'Choose Package';

  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      transition={{ duration: 0.3 }}
      className={`relative flex flex-col p-4 sm:p-6 md:p-8 rounded-2xl transition-all duration-300 ${cardClasses}`}
      aria-label={`${packageName} package card`}
      dir={lang === 'ar' ? 'rtl' : 'ltr'}
    >
      {isPopular && (
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#023A9A] text-white text-xs sm:text-sm font-semibold px-3 sm:px-4 py-1.5 rounded-full shadow-lg whitespace-nowrap"
        >
          {popularText}
        </motion.div>
      )}

      {/* Header */}
      <div className="flex flex-col items-center text-center pb-4 sm:pb-6 border-b border-gray-100">
        <div className="w-10 h-10 sm:w-12 sm:h-12 mb-2 sm:mb-3 rounded-full flex items-center justify-center border-2 border-gray-300 text-[#023A9A]">
          <Icon size={24} />
        </div>
        <h3 className="text-lg sm:text-xl font-bold text-gray-900">{packageName}</h3>
        <p className="text-xs sm:text-sm text-gray-500 mb-2 sm:mb-3">{tagline}</p>
        <p
          className={`text-2xl sm:text-3xl md:text-4xl font-extrabold ${
            isPopular ? "text-[#023A9A]" : "text-gray-900"
          }`}
        >
          {price}
        </p>
        <p className="text-xs sm:text-sm text-gray-500 mt-1">{startingFrom}</p>
      </div>

      {/* Features */}
      <div className="py-4 sm:py-6 flex-grow">
        {features.map((feature, index) => (
          <ChecklistItem key={index} text={feature} lang={lang} />
        ))}
      </div>

      {/* Ideal For */}
      <div className="pt-3 sm:pt-4 border-t border-gray-100">
        <h4 className={`font-semibold text-xs sm:text-sm text-gray-900 mb-1 ${lang === 'ar' ? 'text-right' : 'text-left'}`}>
          {idealForLabel}
        </h4>
        <p className={`text-xs sm:text-sm text-gray-600 ${lang === 'ar' ? 'text-right' : 'text-left'}`}>{idealFor}</p>
      </div>

      {/* Button */}
      <button
        className={`w-full py-2 sm:py-3 mt-4 sm:mt-6 rounded-lg font-semibold transition-colors ${buttonClasses}`}
        aria-label={`${lang === 'ar' ? 'اختر باقة' : 'Choose'} ${packageName} ${lang === 'ar' ? '' : 'Package'}`}
      >
        {choosePackageText}
      </button>
    </motion.div>
  );
};

/* ------------------ Quick Estimator ------------------ */
const QuickEstimator = ({ data, lang }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [projectSize, setProjectSize] = useState(data.inputDefaults.projectSize);
  const [complexity, setComplexity] = useState(data.inputDefaults.complexity);
  const [location, setLocation] = useState(data.inputDefaults.location);
  const [estimatedPrice, setEstimatedPrice] = useState(
    lang === 'ar' ? "45,000 - 85,000 ريال سعودي" : "SAR 45,000 - 85,000"
  );

  useEffect(() => {
    setEstimatedPrice(
      lang === 'ar' ? "45,000 - 85,000 ريال سعودي" : "SAR 45,000 - 85,000"
    );
  }, [projectSize, complexity, location, lang]);

  const projectSizeLabel = lang === 'ar' ? 'حجم المشروع (م²)' : 'Project Size (m²)';
  const complexityLabel = lang === 'ar' ? 'مستوى التعقيد' : 'Complexity Level';
  const locationLabel = lang === 'ar' ? 'الموقع' : 'Location';
  const estimateLabel = lang === 'ar' ? 'نطاق المشروع المقدر بناءً على اختياراتك' : 'Estimated project range based on your selections';
  const getQuoteText = lang === 'ar' ? 'احصل على عرض مفصل' : 'Get Detailed Quote';
  const importantInfo = lang === 'ar' ? 'معلومات تسعير مهمة' : 'Important Pricing Information';

  return (
    <div className="max-w-5xl mx-auto mt-12 sm:mt-16 px-2 sm:px-4" dir={lang === 'ar' ? 'rtl' : 'ltr'}>
      <div className="bg-white p-4 sm:p-6 md:p-10 rounded-2xl shadow-lg border border-gray-200">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-6 sm:mb-10">
          <div className="w-10 h-10 sm:w-12 sm:h-12 mb-2 sm:mb-3 rounded-full flex items-center justify-center bg-gray-100 border border-gray-300 text-[#023A9A]">
            <Calculator size={24} />
          </div>
          <h3 className="text-xl sm:text-2xl font-bold text-gray-900">{data.title}</h3>
          <p className="text-xs sm:text-sm text-gray-600 mt-1">{data.subtitle}</p>
        </div>

        {/* Inputs */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 mb-6 sm:mb-8">
          <div className="flex flex-col">
            <label className={`text-xs sm:text-sm font-semibold text-gray-700 mb-1 ${lang === 'ar' ? 'text-right' : 'text-left'}`}>
              {projectSizeLabel}
            </label>
            <select
              value={projectSize}
              onChange={(e) => setProjectSize(e.target.value)}
              className={`p-2 sm:p-3 border border-gray-300 rounded-lg bg-white text-gray-800 focus:ring-1 focus:ring-[#023A9A] ${lang === 'ar' ? 'text-right' : 'text-left'}`}
            >
              {data.sizeOptions.map((opt) => (
                <option key={opt}>{opt}</option>
              ))}
            </select>
          </div>
          <div className="flex flex-col">
            <label className={`text-xs sm:text-sm font-semibold text-gray-700 mb-1 ${lang === 'ar' ? 'text-right' : 'text-left'}`}>
              {complexityLabel}
            </label>
            <select
              value={complexity}
              onChange={(e) => setComplexity(e.target.value)}
              className={`p-2 sm:p-3 border border-gray-300 rounded-lg bg-white text-gray-800 focus:ring-1 focus:ring-[#023A9A] ${lang === 'ar' ? 'text-right' : 'text-left'}`}
            >
              {data.complexityOptions.map((opt) => (
                <option key={opt}>{opt}</option>
              ))}
            </select>
          </div>
          <div className="flex flex-col">
            <label className={`text-xs sm:text-sm font-semibold text-gray-700 mb-1 ${lang === 'ar' ? 'text-right' : 'text-left'}`}>
              {locationLabel}
            </label>
            <select
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className={`p-2 sm:p-3 border border-gray-300 rounded-lg bg-white text-gray-800 focus:ring-1 focus:ring-[#023A9A] ${lang === 'ar' ? 'text-right' : 'text-left'}`}
            >
              {data.locationOptions.map((opt) => (
                <option key={opt}>{opt}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Estimate */}
        <div className="bg-gray-50 p-4 sm:p-6 rounded-xl text-center mb-6 sm:mb-8">
          <p className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900 mb-1">{estimatedPrice}</p>
          <p className="text-xs sm:text-sm text-gray-600">{estimateLabel}</p>
        </div>

        {/* Button */}
        <div className="flex justify-center">
          <button
            onClick={() => setIsModalOpen(true)}
            className="py-2 sm:py-3 px-6 sm:px-8 rounded-lg font-semibold bg-[#023A9A] hover:bg-[#002f78] text-white transition-colors"
          >
            {getQuoteText}
          </button>
        </div>
      </div>

      {/* Notes */}
      <div className="mt-8 sm:mt-10 px-1 sm:px-2">
        <h4 className="text-lg sm:text-xl font-bold text-gray-900 mb-4 text-center">
          {importantInfo}
        </h4>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3">
          {data.importantNotes.map((note, i) => (
            <div key={i} className={`flex items-start gap-2 sm:gap-3 ${lang === 'ar' ? 'flex-row-reverse' : ''}`}>
              <CheckCircle size={18} className="text-[#023A9A] flex-shrink-0 mt-1" />
              <p className={`text-xs sm:text-sm text-gray-600 ${lang === 'ar' ? 'text-right' : 'text-left'}`}>{note}</p>
            </div>
          ))}
        </div>
      </div>
      {isModalOpen && <RequestQuoteForm onClose={() => setIsModalOpen(false)} />}
    </div>
  );
};

/* ------------------ Full Page ------------------ */
const PricingControlPage = ({ data: propData }) => {
  const { lang } = useLanguage();
  
  // Use propData if provided, otherwise use imported pricingData
  const data = propData || pricingData?.[lang];
  
  if (!data) {
    return (
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto text-center">
          <p>Loading pricing data...</p>
        </div>
      </section>
    );
  }

  const packageOptionsText = lang === 'ar' ? 'خيارات الباقات الكاملة' : 'Our Full Package Options';

  return (
    <section
      className={`py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 ${lang === 'ar' ? 'text-right' : 'text-left'}`}
      aria-label={lang === 'ar' ? "قسم التسعير" : "Pricing Section"}
      dir={lang === 'ar' ? 'rtl' : 'ltr'}
    >
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-2xl sm:text-3xl md:text-5xl font-extrabold text-gray-900 mb-2">
          {data.header?.title}
        </h2>
        <p className="text-xs sm:text-sm md:text-base text-gray-600 mb-10 sm:mb-14 max-w-3xl mx-auto">
          {data.header?.subtitle}
        </p>

        {/* Packages */}
        <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-6 sm:mb-8">
          {packageOptionsText}
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {data.packages?.map((pkg, i) => (
            <PricingCard key={i} {...pkg} lang={lang} />
          ))}
        </div>

        {/* Quick Estimator
        {data.estimatorData && (
          // <QuickEstimator data={data.estimatorData} lang={lang} />
        )} */}
      </div>
    </section>
  );
};

export default PricingControlPage;