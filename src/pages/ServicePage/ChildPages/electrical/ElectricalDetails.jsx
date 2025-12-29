// src/pages/ServicePage/ChildPages/Electrical/ElectricalDetails.jsx
import React from "react";
import ServiceDetails from "../components/ServiceDetails";
import { electricalDetailsData } from "../electrical/ElectricalData";
import { useLanguage } from "../../../../context/LanguageContext";

const ElectricalDetails = () => {
  const { lang } = useLanguage();
  
  // Check if data exists and has the language property
  if (!electricalDetailsData) {
    console.error("electricalDetailsData is undefined");
    return <div>Error loading data</div>;
  }
  
  const data = electricalDetailsData[lang];
  
  if (!data) {
    console.error(`No data found for language: ${lang}`);
    console.log("Available languages:", Object.keys(electricalDetailsData));
    return <div>Loading data for {lang}...</div>;
  }

  return (
    <ServiceDetails
      header={data.header}
      scope={data.scope}
      footer={data.footer}
    />
  );
};

export default ElectricalDetails;