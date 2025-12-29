// src/pages/ServicePage/ChildPages/Kitchen/ProjectDuration.jsx
import React from "react";
import ProjectDurationCard from "../components/ProjectDurationCard";
import kitchenProjectDurationData from "./KitchenData";
import { useLanguage } from "../../../../context/LanguageContext";

const KitchenProjectDuration = () => {
  const { lang } = useLanguage();
  
  // Check if data exists
  if (!kitchenProjectDurationData) {
    console.error("KitchenProjectDuration: kitchenProjectDurationData is undefined");
    return (
      <div className="px-4 sm:px-6 lg:px-8 py-8 text-center">
        <p>Error: Data not loaded</p>
      </div>
    );
  }
  
  const data = kitchenProjectDurationData[lang];
  
  if (!data) {
    console.error(`KitchenProjectDuration: No data found for language: ${lang}`);
    console.log("Available languages:", Object.keys(kitchenProjectDurationData));
    return (
      <div className="px-4 sm:px-6 lg:px-8 py-8 text-center">
        <p>Loading data for {lang}...</p>
        <p>Available: {Object.keys(kitchenProjectDurationData).join(', ')}</p>
      </div>
    );
  }
  
  if (!data.cards || !Array.isArray(data.cards)) {
    console.error("KitchenProjectDuration: Cards data is invalid:", data.cards);
    return (
      <div className="px-4 sm:px-6 lg:px-8 py-8 text-center">
        <p>Error: Invalid cards data</p>
      </div>
    );
  }

  return (
    <div className="px-4 sm:px-6 lg:px-8 py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 justify-center">
        {data.cards.map((card, idx) => (
          <ProjectDurationCard key={idx} {...card} />
        ))}
      </div>
      <p className="mt-6 w-full max-w-[1200px] text-[12px] leading-[16px] font-['Helvetica'] font-normal text-center text-[rgba(115,115,115,1)] mx-auto">
        {data.note || ""}
      </p>
    </div>
  );
};

export default KitchenProjectDuration;