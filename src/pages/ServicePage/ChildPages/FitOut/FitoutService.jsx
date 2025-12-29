import React from "react";
import ServiceSolve from "../components/ServiceSolve";
import { fitoutContent, fitoutMedia } from "./fitoutDetailsData";
import { useLanguage } from "../../../../context/LanguageContext";

const FitoutService = () => {
  const { lang } = useLanguage();
  
  const content = fitoutContent[lang];
  const media = fitoutMedia[lang];

  if (!content || !media) {
    return (
      <main className="bg-white min-h-screen flex flex-col items-center justify-center py-10">
        <p>Loading fitout service data...</p>
      </main>
    );
  }

  return (
    <main className="bg-white min-h-screen flex flex-col items-center justify-center py-10">
      <ServiceSolve content={content} media={media} />
    </main>
  );
};

export default FitoutService;