// src/pages/ServicePage/ChildPages/Electrical/ElectricalPricing.jsx
import React from 'react';
import PricingControlPage from '../components/PricingControlPage';
import { electricalPricingData } from '../electrical/ElectricalData';
import { useLanguage } from "../../../../context/LanguageContext";

const ElectricalPricing = () => {
  const { lang } = useLanguage();
  
  // Check if data exists
  if (!electricalPricingData) {
    console.error("electricalPricingData is undefined");
    return <div className="bg-white min-h-screen py-10 flex items-center justify-center">
      <p>Error loading pricing data</p>
    </div>;
  }
  
  const data = electricalPricingData[lang];
  
  if (!data) {
    console.error(`No pricing data found for language: ${lang}`);
    console.log("Available languages:", Object.keys(electricalPricingData));
    return <div className="bg-white min-h-screen py-10 flex items-center justify-center">
      <p>Loading pricing data for {lang}...</p>
    </div>;
  }

  return (
    <div className="bg-white min-h-screen py-10">
      <PricingControlPage data={data} />
    </div>
  );
};

export default ElectricalPricing;