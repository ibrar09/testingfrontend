import React from "react";
import ServiceSolve from "../components/ServiceSolve"; 
import { plumbingContent, plumbingMedia } from "./PlumbingData";
import { useLanguage } from "../../../../context/LanguageContext";

const PlumbingService = () => {
  const { lang } = useLanguage();
  const contentData = plumbingContent[lang];
  const mediaData = plumbingMedia[lang];

  return (
    <main className="bg-white min-h-screen flex flex-col items-center justify-center py-10">
      <ServiceSolve content={contentData} media={mediaData} lang={lang} />
    </main>
  );
};

export default PlumbingService;