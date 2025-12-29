// src/pages/ServicePage/ChildPages/Electrical/ElectricalQualityPage.jsx
import React from 'react';
import QualityAndTestimonials from "../components/QualityAndTestimonials";
import { electricalQualityData } from './ElectricalData';
import { useLanguage } from "../../../../context/LanguageContext";

const ElectricalQualityPage = () => {
  const { lang } = useLanguage();
  const data = electricalQualityData?.[lang];

  if (!data) {
    console.error("Quality data not found for language:", lang);
    return <div>Loading quality data...</div>;
  }

  return (
    <QualityAndTestimonials data={data} />
  );
};

export default ElectricalQualityPage;