// src/pages/ServicePage/ChildPages/hvac/HVACQualityPage.jsx
import React from "react";
import QualityAndTestimonials from "../components/QualityAndTestimonials";
import { hvacQualityData } from "./HvacData";
import { useLanguage } from "../../../../context/LanguageContext";

const HvacQualityPage = () => {
  const { lang } = useLanguage();
  
  // Check if data exists
  if (!hvacQualityData) {
    return (
      <div className="text-center py-20">
        <p>Error loading quality data</p>
      </div>
    );
  }
  
  const data = hvacQualityData[lang];
  
  if (!data) {
    return (
      <div className="text-center py-20">
        <p>Loading quality data for {lang}...</p>
      </div>
    );
  }

  return (
    <>
      <QualityAndTestimonials data={data} />
    </>
  );
};

export default HvacQualityPage;