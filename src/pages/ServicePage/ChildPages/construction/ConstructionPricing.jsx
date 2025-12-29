// src/pages/ServicePage/ChildPages/Construction/ConstructionPricing.jsx
import React from 'react';
import PricingControlPage from '../components/PricingControlPage';
import { constructionPricingData } from './constructionDetailsData';
import { useLanguage } from "../../../../context/LanguageContext";

const ConstructionPricing = () => {
  const { lang } = useLanguage();
  const data = constructionPricingData[lang];

  return (
    <div className="bg-white min-h-screen py-10">
      <PricingControlPage data={data} />
    </div>
  );
};

export default ConstructionPricing;