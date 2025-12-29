// src/pages/ServicePage/ChildPages/Kitchen/KitchenService.jsx
import React from "react";
import ServiceSolve from "../components/ServiceSolve";
import { kitchenContent, kitchenMedia } from "./KitchenData";
import { useLanguage } from "../../../../context/LanguageContext";

const KitchenService = () => {
  const { lang } = useLanguage();
  
  const content = kitchenContent[lang];
  const media = kitchenMedia[lang];

  if (!content || !media) {
    return (
      <main className="bg-white min-h-screen flex flex-col items-center justify-center py-10">
        <p>Loading kitchen service data...</p>
      </main>
    );
  }

  return (
    <main className="bg-white min-h-screen flex flex-col items-center justify-center py-10">
      <ServiceSolve content={content} media={media} />
    </main>
  );
};

export default KitchenService;