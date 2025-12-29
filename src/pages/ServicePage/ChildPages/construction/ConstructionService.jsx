// src/pages/ServicePage/ChildPages/Construction/ConstructionService.jsx
import React from "react";
import ServiceSolve from "../components/ServiceSolve";
import { constructionContent, constructionMedia } from './constructionDetailsData';
import { useLanguage } from "../../../../context/LanguageContext";

const ConstructionService = () => {
  const { lang } = useLanguage();
  
  const content = constructionContent[lang];
  const media = constructionMedia[lang];

  return (
    <main className="bg-white min-h-screen flex flex-col items-center justify-center py-10">
      <ServiceSolve content={content} media={media} />
    </main>
  );
};

export default ConstructionService;