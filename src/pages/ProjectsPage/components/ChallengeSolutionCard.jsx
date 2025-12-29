// src/pages/Projects/components/ChallengeSolutionCard.jsx
import React from "react";
import { FaBullseye, FaLightbulb } from "react-icons/fa";
import { useLanguage } from "../../../context/LanguageContext"; // 🔹 Language context

const IconMap = { FaBullseye, FaLightbulb };

const ColumnCard = ({ title, description, iconName, iconColor, iconBg, isRTL }) => {
  const IconComponent = IconMap[iconName] || FaLightbulb;
  return (
    <div className="flex-1 bg-white p-10 rounded-xl shadow-lg border border-gray-100">
      <div className={`flex items-center mb-6 ${isRTL ? "flex-row-reverse" : ""}`}>
        <div className={`w-12 h-12 ${iconBg} p-2 rounded-full flex items-center justify-center ${isRTL ? "ml-4" : "mr-4"}`}>
          <IconComponent className={`${iconColor} text-xl`} />
        </div>
        <h3 className="text-2xl font-bold text-gray-800">{title}</h3>
      </div>
      <p className="text-lg text-gray-600 leading-relaxed">{description}</p>
    </div>
  );
};

const ChallengesSolutionCard = ({ challenges = [], solutions = [] }) => {
  const { lang } = useLanguage();
  const isRTL = lang === "ar";

  const items = [
    ...challenges.map((c) => ({
      title: c.title || (isRTL ? "التحدي" : "The Challenge"),
      description: c.content || "",
      iconName: "FaBullseye",
      iconColor: "text-red-500",
      iconBg: "bg-red-50",
    })),
    ...solutions.map((s) => ({
      title: s.title || (isRTL ? "حلنا" : "Our Solution"),
      description: s.content || "",
      iconName: "FaLightbulb",
      iconColor: "text-blue-500",
      iconBg: "bg-blue-50",
    })),
  ];

  if (!items.length)
    return (
      <p className="text-center py-20 text-gray-400">
        {isRTL ? "لا توجد تحديات أو حلول." : "No challenges or solutions."}
      </p>
    );

  return (
    <div className="py-20 bg-white font-sans" dir={isRTL ? "rtl" : "ltr"}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className={`text-center mb-16 ${isRTL ? "text-right" : "text-left"}`}>
          <h2 className="text-4xl font-extrabold text-gray-900">
            {isRTL ? "التحديات و الحلول" : "Challenges & "} 
            <span className="text-blue-700">{isRTL ? "" : "Solutions"}</span>
          </h2>
          <p className="mt-3 text-lg text-gray-500">
            {isRTL
              ? "كيف تغلبنا على العقبات لتقديم نتائج استثنائية"
              : "How we overcame obstacles to deliver exceptional results"}
          </p>
        </div>

        {/* Cards */}
        <div className={`flex flex-col lg:flex-row gap-8 ${isRTL ? "lg:flex-row-reverse" : ""}`}>
          {items.map((item, idx) => (
            <ColumnCard key={idx} {...item} isRTL={isRTL} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ChallengesSolutionCard;
