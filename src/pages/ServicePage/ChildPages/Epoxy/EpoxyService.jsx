// EpoxyService.jsx
import React from "react";
import ServiceSolve from "../components/ServiceSolve";
import { epoxyContent, epoxyMedia } from './EpoxyData';
import { useLanguage } from "../../../../context/LanguageContext";

const EpoxyService = () => {
  const { lang } = useLanguage();
  
  const content = epoxyContent?.[lang];
  const media = epoxyMedia?.[lang];

  if (!content || !media) {
    return (
      <main className="bg-white min-h-screen flex flex-col items-center justify-center py-10">
        <p>Loading epoxy service data...</p>
      </main>
    );
  }

  return (
    <main className="bg-white min-h-screen flex flex-col items-center justify-center py-10">
      <ServiceSolve content={content} media={media} />
    </main>
  );
};

export default EpoxyService;