// src/pages/ServicePage/ChildPages/Painting/PaintingQualityPage.jsx
import React from 'react';
import QualityAndTestimonials from "../components/QualityAndTestimonials";
import { paintingQualityData } from './paintingDetailsData';
import { useLanguage } from "../../../../context/LanguageContext";

const PaintingQualityPage = () => {
  const { lang } = useLanguage();
  const data = paintingQualityData[lang];

  return (
    <QualityAndTestimonials data={data} lang={lang} />
  );
};

export default PaintingQualityPage;