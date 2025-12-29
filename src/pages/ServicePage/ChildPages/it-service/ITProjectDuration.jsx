// src/pages/ServicePage/ChildPages/IT/ITProjectDuration.jsx
import React from 'react';
import ProjectDurationCard from '../components/ProjectDurationCard';
import itProjectDurationData from './itDetailsData';
import { useLanguage } from "../../../../context/LanguageContext";

const ITProjectDuration = () => {
  const { lang } = useLanguage();
  
  console.log("ITProjectDuration - Language:", lang);
  console.log("ITProjectDuration - Imported data:", itProjectDurationData);
  console.log("ITProjectDuration - Data for language:", itProjectDurationData?.[lang]);
  
  // Check if data exists
  if (!itProjectDurationData) {
    console.error("ITProjectDuration: itProjectDurationData is undefined");
    return (
      <div className="px-4 sm:px-6 lg:px-8 py-8 text-center">
        <p>Error: Data not loaded</p>
      </div>
    );
  }
  
  const data = itProjectDurationData[lang];
  
  if (!data) {
    console.error(`ITProjectDuration: No data found for language: ${lang}`);
    console.log("Available languages:", Object.keys(itProjectDurationData));
    return (
      <div className="px-4 sm:px-6 lg:px-8 py-8 text-center">
        <p>Loading data for {lang}...</p>
        <p>Available: {Object.keys(itProjectDurationData).join(', ')}</p>
      </div>
    );
  }
  
  if (!data.cards || !Array.isArray(data.cards)) {
    console.error("ITProjectDuration: Cards data is invalid:", data.cards);
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

export default ITProjectDuration;