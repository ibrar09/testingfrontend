// src/pages/ServicePage/ChildPages/Epoxy/EpoxyQualityPage.jsx
import React from 'react';
import QualityAndTestimonials from "../components/QualityAndTestimonials";
import { epoxyQualityData } from './EpoxyData';
import { useLanguage } from "../../../../context/LanguageContext";

const EpoxyQualityPage = () => {
  const { lang } = useLanguage();
  
  // Check if data exists
  if (!epoxyQualityData) {
    return (
      <div className="text-center py-20">
        <p>Error loading quality data</p>
      </div>
    );
  }
  
  const data = epoxyQualityData[lang];
  
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

export default EpoxyQualityPage;