// src/pages/ServicePage/ChildPages/Carpentry/CarpentryPricing.jsx
import React from 'react';
import PricingControlPage from '../components/PricingControlPage';
import { carpentryPricingData } from './carpentryDetailsData';
import { useLanguage } from "../../../../context/LanguageContext";

const CarpentryPricing = () => {
  const { lang } = useLanguage();
  const data = carpentryPricingData[lang];

  return (
    <div className="bg-white min-h-screen py-10">
      <PricingControlPage data={data} />
    </div>
  );
};

export default CarpentryPricing;