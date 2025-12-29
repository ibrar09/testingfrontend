// src/pages/ServicePage/ChildPages/hvac/HVACDetails.jsx
import React from "react";
import ServiceDetails from "../components/ServiceDetails";
import { hvacDetailsData } from "./HvacData";
import { useLanguage } from "../../../../context/LanguageContext";

const HvacDetails = () => {
  const { lang } = useLanguage();
  
  // Check if data exists
  if (!hvacDetailsData) {
    return (
      <div className="text-center py-10">
        <p>Error loading data</p>
      </div>
    );
  }
  
  const data = hvacDetailsData[lang];
  
  if (!data) {
    return (
      <div className="text-center py-10">
        <p>Loading data for {lang}...</p>
      </div>
    );
  }

  return (
    <ServiceDetails
      header={data.header}
      scope={data.scope}
      footer={data.footer}
    />
  );
};

export default HvacDetails;