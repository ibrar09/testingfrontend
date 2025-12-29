// src/pages/ServicePage/ChildPages/IT/ITQualityPage.jsx
import React from 'react';
import QualityAndTestimonials from "../components/QualityAndTestimonials";
import { itQualityData } from './itDetailsData';
import { useLanguage } from "../../../../context/LanguageContext";

const ITQualityPage = () => {
  const { lang } = useLanguage();
  
  // Check if data exists
  if (!itQualityData) {
    return (
      <div className="text-center py-20">
        <p>Error loading quality data</p>
      </div>
    );
  }
  
  const data = itQualityData[lang];
  
  if (!data) {
    return (
      <div className="text-center py-20">
        <p>Loading quality data for {lang}...</p>
      </div>
    );
  }

  return (
    <QualityAndTestimonials data={data} />
  );
};

export default ITQualityPage;