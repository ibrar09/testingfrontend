// src/pages/ServicePage/ChildPages/Carpentry/CarpentryService.jsx
import React from "react";
import ServiceSolve from "../components/ServiceSolve";
import { carpentryContent, carpentryMedia } from './carpentryDetailsData';
import { useLanguage } from "../../../../context/LanguageContext";

const CarpentryService = () => {
  const { lang } = useLanguage();
  
  const content = carpentryContent[lang];
  const media = carpentryMedia[lang];

  return (
    <main className="bg-white min-h-screen flex flex-col items-center justify-center py-10">
      <ServiceSolve content={content} media={media} />
    </main>
  );
};

export default CarpentryService;