// src/pages/ServicePage/ChildPages/Painting/PaintingService.jsx
import React from "react";
import ServiceSolve from "../components/ServiceSolve";
import { paintingContent, paintingMedia } from "./paintingDetailsData";
import { useLanguage } from "../../../../context/LanguageContext";

const PaintingService = () => {
  const { lang } = useLanguage();
  
  const contentData = paintingContent[lang];
  const mediaData = paintingMedia[lang];

  return (
    <main className="bg-white min-h-screen flex flex-col items-center justify-center py-10">
      <ServiceSolve content={contentData} media={mediaData} lang={lang} />
    </main>
  );
};

export default PaintingService;