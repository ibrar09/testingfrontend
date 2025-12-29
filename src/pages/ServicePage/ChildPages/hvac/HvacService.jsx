// src/pages/ServicePage/ChildPages/HVAC/HvacService.jsx
import React from "react";
import ServiceSolve from "../components/ServiceSolve";
import { hvacContent, hvacMedia } from "./HvacData";
import { useLanguage } from "../../../../context/LanguageContext";

const HvacService = () => {
  const { lang } = useLanguage();
  
  const content = hvacContent[lang];
  const media = hvacMedia[lang];

  if (!content || !media) {
    return (
      <main className="bg-white min-h-screen flex flex-col items-center justify-center py-10">
        <p>Loading HVAC service data...</p>
      </main>
    );
  }

  return (
    <main className="bg-white min-h-screen flex flex-col items-center justify-center py-10">
      <ServiceSolve content={content} media={media} />
    </main>
  );
};

export default HvacService;