// src/pages/ServicePage/ChildPages/IT/ITService.jsx
import React from "react";
import ServiceSolve from "../components/ServiceSolve";
import { itContent, itMedia } from './itDetailsData';
import { useLanguage } from "../../../../context/LanguageContext";

const ITService = () => {
  const { lang } = useLanguage();
  
  const content = itContent[lang];
  const media = itMedia[lang];

  if (!content || !media) {
    return (
      <main className="bg-white min-h-screen flex flex-col items-center justify-center py-10">
        <p>Loading IT service data...</p>
      </main>
    );
  }

  return (
    <main className="bg-white min-h-screen flex flex-col items-center justify-center py-10">
      <ServiceSolve content={content} media={media} />
    </main>
  );
};

export default ITService;