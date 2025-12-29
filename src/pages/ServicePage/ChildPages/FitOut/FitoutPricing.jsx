import React from 'react';
import PricingControlPage from '../components/PricingControlPage';
import { fitoutPricingData } from "./fitoutDetailsData";
import { useLanguage } from "../../../../context/LanguageContext";

const FitoutPricing = () => {
  const { lang } = useLanguage();
  
  // Check if data exists
  if (!fitoutPricingData) {
    return (
      <div className="bg-white min-h-screen py-10 flex items-center justify-center">
        <p>Error loading pricing data</p>
      </div>
    );
  }
  
  const data = fitoutPricingData[lang];
  
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

export default FitoutPricing;