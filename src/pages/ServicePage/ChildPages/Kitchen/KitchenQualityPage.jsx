// src/pages/ServicePage/ChildPages/Kitchen/KitchenQualityPage.jsx
import React from 'react';
import QualityAndTestimonials from "../components/QualityAndTestimonials";
import { kitchenQualityData } from './KitchenData';
import { useLanguage } from "../../../../context/LanguageContext";

const KitchenQualityPage = () => {
  const { lang } = useLanguage();
  
  // Check if data exists
  if (!kitchenQualityData) {
    return (
      <div className="text-center py-20">
        <p>Error loading quality data</p>
      </div>
    );
  }
  
  const data = kitchenQualityData[lang];
  
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

export default KitchenQualityPage;