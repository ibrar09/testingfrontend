// src/pages/ServicePage/ChildPages/Construction/ConstructionQualityPage.jsx
import React from 'react';
import QualityAndTestimonials from "../components/QualityAndTestimonials";
import { constructionQualityData } from './constructionDetailsData';
import { useLanguage } from "../../../../context/LanguageContext";

const ConstructionQualityPage = () => {
  const { lang } = useLanguage();
  const data = constructionQualityData[lang];

  return (
    <QualityAndTestimonials data={data} />
  );
};

export default ConstructionQualityPage;