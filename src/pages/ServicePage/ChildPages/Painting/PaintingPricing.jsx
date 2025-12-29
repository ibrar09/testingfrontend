// src/pages/ServicePage/ChildPages/Painting/PaintingPricing.jsx
import React from 'react';
import PricingControlPage from '../components/PricingControlPage';
import { paintingPricingData } from './paintingDetailsData';
import { useLanguage } from "../../../../context/LanguageContext";

const PaintingPricing = () => {
  const { lang } = useLanguage();
  const data = paintingPricingData[lang];

  return (
    <div className="bg-white min-h-screen py-10">
      <PricingControlPage data={data} lang={lang} />
    </div>
  );
};

export default PaintingPricing;