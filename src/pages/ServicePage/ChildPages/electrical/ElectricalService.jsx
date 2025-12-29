// src/pages/ServicePage/ChildPages/Electrical/ElectricalService.jsx
import React from "react";
import ServiceSolve from "../components/ServiceSolve";
import { electricalContent, electricalMedia } from './ElectricalData';
import { useLanguage } from "../../../../context/LanguageContext";

const ElectricalService = () => {
  const { lang } = useLanguage();
  
  console.log("Current language:", lang); // Debug log
  console.log("electricalContent:", electricalContent); // Debug log
  console.log("electricalMedia:", electricalMedia); // Debug log
  
  const content = electricalContent?.[lang];
  const media = electricalMedia?.[lang];

  console.log("Content data:", content); // Debug log
  console.log("Media data:", media); // Debug log

  if (!content || !media) {
    console.error("Data is undefined for language:", lang);
    return <div>Loading...</div>;
  }

  return (
    <main className="bg-white min-h-screen flex flex-col items-center justify-center py-10">
      <ServiceSolve content={content} media={media} />
    </main>
  );
};

export default ElectricalService;