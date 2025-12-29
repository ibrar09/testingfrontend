// src/pages/ServicePage/ChildPages/hvac/HVACPricing.jsx
import React from 'react';
import PricingControlPage from '../components/PricingControlPage';
import { hvacPricingData } from './HvacData';
import { useLanguage } from "../../../../context/LanguageContext";

const HvacPricing = () => {
  const { lang } = useLanguage();
  
  // Check if data exists
  if (!hvacPricingData) {
    return (
      <div className="bg-white min-h-screen py-10 flex items-center justify-center">
        <p>Error loading pricing data</p>
      </div>
    );
  }
  
  const data = hvacPricingData[lang];
  
  if (!data) {
    return (
      <div className="bg-white min-h-screen py-10 flex items-center justify-center">
        <p>Loading pricing data for {lang}...</p>
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen py-10">
      <PricingControlPage data={data} />
    </div>
  );
};

export default HvacPricing;