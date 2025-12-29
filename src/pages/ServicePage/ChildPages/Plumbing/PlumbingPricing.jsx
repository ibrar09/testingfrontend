import React from 'react';
import PricingControlPage from '../components/PricingControlPage';
import  plumbingPricingData  from "./PlumbingData";
import { useLanguage } from "../../../../context/LanguageContext";

const PlumbingPricing = () => {
  const { lang } = useLanguage();
  const data = plumbingPricingData[lang];

  return (
    <div className="bg-white min-h-screen py-10">
      <PricingControlPage data={data} lang={lang} />
    </div>
  );
};

export default PlumbingPricing;