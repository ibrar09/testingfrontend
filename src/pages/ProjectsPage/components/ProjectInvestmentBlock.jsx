// src/components/ProjectInvestmentBlock.jsx
import React, { useState } from "react";
import { motion } from "framer-motion";
import RequestQuoteForm from "../../RequestPage/RequestQuoteForm";
import { useLanguage } from "../../../context/LanguageContext"; // 🔹 Language context

// ✅ Reusable Checkmark Icon
const CheckIcon = () => (
  <svg
    className="w-5 h-5 text-orange-500 flex-shrink-0"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M5 13l4 4L19 7"
    />
  </svg>
);

// ✅ Feature list item with animation
const FeatureItem = ({ text, delay = 0, isRTL }) => (
  <motion.li
    className={`flex items-start ${isRTL ? "flex-row-reverse space-x-reverse" : "space-x-3"}`}
    initial={{ opacity: 0, x: isRTL ? 20 : -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay }}
  >
    <CheckIcon />
    <span className="text-gray-700 text-base md:text-lg">{text}</span>
  </motion.li>
);

const ProjectInvestmentBlock = ({
  price = "180,000",
  currency = "SAR",
  features,
  ctaText = "Get Detailed Quote",
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { lang } = useLanguage();
  const isRTL = lang === "ar";

  const defaultFeatures = isRTL
    ? [
        "استشارة تصميم شاملة",
        "تركيب احترافي",
        "ضمان الجودة",
        "مواد وتشطيبات مميزة",
        "إدارة المشروع",
        "دعم ما بعد الانتهاء",
      ]
    : [
        "Complete design consultation",
        "Professional installation",
        "Quality assurance",
        "Premium materials & finishes",
        "Project management",
        "Post-completion support",
      ];

  const listFeatures = features || defaultFeatures;

  // Split features into two columns
  const half = Math.ceil(listFeatures.length / 2);
  const col1 = listFeatures.slice(0, half);
  const col2 = listFeatures.slice(half);

  return (
    <section className="py-16 md:py-24 bg-gray-50" dir={isRTL ? "rtl" : "ltr"}>
      <div className="max-w-[896px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Header */}
        <motion.div
          className="space-y-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
            {isRTL ? "استثمار المشروع" : "Project"}{" "}
            <span className="text-orange-500">{isRTL ? "" : "Investment"}</span>
          </h2>
          <p className="text-lg text-gray-600">
            {isRTL
              ? "أسعار شفافة مع شمولية جميع الخدمات"
              : "Transparent pricing with comprehensive service inclusion"}
          </p>
        </motion.div>

        {/* Pricing Card */}
        <motion.div
          className="p-8 sm:p-12 lg:p-16 rounded-xl shadow-lg border border-gray-100 mx-auto transform transition-transform hover:scale-[1.02]"
          style={{
            background:
              "linear-gradient(0deg, #FFFFFF, #FFFFFF), linear-gradient(135deg, rgba(255, 106, 0, 0.05) 0%, rgba(255, 106, 0, 0.1) 100%)",
          }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Price Section */}
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-sm uppercase tracking-widest text-gray-600">
              {isRTL ? "الأسعار تبدأ من" : "Starting from"}
            </p>
            <p className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900">
              {currency} {price}
            </p>
            <p className="text-lg text-gray-600">
              {isRTL
                ? "تسليم المشروع بالكامل مع شمول جميع الخدمات"
                : "Complete project delivery including all services"}
            </p>
          </motion.div>

          {/* Features Grid */}
          <div className="mt-10 flex flex-col md:flex-row justify-center md:space-x-12 gap-8">
            <ul className="space-y-4 text-left w-full md:w-1/2">
              {col1.map((feature, index) => (
                <FeatureItem key={`col1-${index}`} text={feature} delay={index * 0.1} isRTL={isRTL} />
              ))}
            </ul>
            <ul className="space-y-4 text-left w-full md:w-1/2">
              {col2.map((feature, index) => (
                <FeatureItem
                  key={`col2-${index}`}
                  text={feature}
                  delay={index * 0.1 + 0.2}
                  isRTL={isRTL}
                />
              ))}
            </ul>
          </div>

          {/* CTA Button */}
          <motion.div
            className="mt-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <button
              onClick={() => setIsModalOpen(true)}
              type="button"
              className="bg-orange-500 text-white font-semibold text-md px-10 py-3 rounded-lg shadow-md hover:bg-orange-600 transform hover:scale-[1.03] transition-all duration-300"
            >
              {isRTL ? "احصل على عرض تفصيلي" : ctaText}
            </button>
          </motion.div>
        </motion.div>
      </div>

      {/* Request Quote Modal */}
      {isModalOpen && <RequestQuoteForm onClose={() => setIsModalOpen(false)} />}
    </section>
  );
};

export default ProjectInvestmentBlock;
