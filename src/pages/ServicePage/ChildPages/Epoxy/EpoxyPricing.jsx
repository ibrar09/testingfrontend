// src/pages/ServicePage/ChildPages/Epoxy/EpoxyPricing.jsx
import React from 'react';
import PricingControlPage from '../components/PricingControlPage';
import { epoxyPricingData } from './EpoxyData';
import { useLanguage } from "../../../../context/LanguageContext";

const EpoxyPricing = () => {
  const { lang } = useLanguage();
  
  // Check if data exists
  if (!epoxyPricingData) {
    return (
      <div className="bg-white min-h-screen py-10 flex items-center justify-center">
        <p>Error loading pricing data</p>
      </div>
    );
  }
  
  const data = epoxyPricingData[lang];
  
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

export default EpoxyPricing;