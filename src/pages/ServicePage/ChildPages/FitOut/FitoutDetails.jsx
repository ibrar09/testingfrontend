// FitOutDetails.jsx
import React from "react";
import ServiceDetails from "../components/ServiceDetails";
import { fitoutDetailsData } from "./fitoutDetailsData";
import { useLanguage } from "../../../../context/LanguageContext";

const FitoutDetails = () => {
  const { lang } = useLanguage();
  
  // Check if data exists
  if (!fitoutDetailsData) {
    return (
      <div className="text-center py-10">
        <p>Error loading data</p>
      </div>
    );
  }
  
  const data = fitoutDetailsData[lang];
  
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

export default FitoutDetails;