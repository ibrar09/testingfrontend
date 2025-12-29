import React from 'react';
import QualityAndTestimonials from "../components/QualityAndTestimonials";
import { fitoutQualityData } from "./fitoutDetailsData";
import { useLanguage } from "../../../../context/LanguageContext";

const FitOutQualityPage = () => {
  const { lang } = useLanguage();
  
  // Check if data exists
  if (!fitoutQualityData) {
    return (
      <div className="text-center py-20">
        <p>Error loading quality data</p>
      </div>
    );
  }
  
  const data = fitoutQualityData[lang];
  
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

export default FitOutQualityPage;