// src/pages/ServicePage/ChildPages/Kitchen/KitchenPricing.jsx
import React from 'react';
import PricingControlPage from '../components/PricingControlPage';
import { kitchenPricingData } from './KitchenData';
import { useLanguage } from "../../../../context/LanguageContext";

const KitchenPricing = () => {
  const { lang } = useLanguage();
  
  // Check if data exists
  if (!kitchenPricingData) {
    return (
      <div className="bg-white min-h-screen py-10 flex items-center justify-center">
        <p>Error loading pricing data</p>
      </div>
    );
  }
  
  const data = kitchenPricingData[lang];
  
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

export default KitchenPricing;