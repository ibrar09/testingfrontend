// src/pages/ServicePage/ChildPages/Carpentry/CarpentryQualityPage.jsx
import React from 'react';
import QualityAndTestimonials from "../components/QualityAndTestimonials";
import { carpentryQualityData } from './carpentryDetailsData';
import { useLanguage } from "../../../../context/LanguageContext";

const CarpentryQualityPage = () => {
  const { lang } = useLanguage();
  const data = carpentryQualityData[lang];

  return (
    <QualityAndTestimonials data={data} />
  );
};

export default CarpentryQualityPage;