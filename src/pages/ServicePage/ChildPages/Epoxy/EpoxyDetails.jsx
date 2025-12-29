// src/pages/ServicePage/ChildPages/Epoxy/EpoxyDetails.jsx
import React from "react";
import ServiceDetails from "../components/ServiceDetails";
import { epoxyDetailsData } from "./EpoxyData";
import { useLanguage } from "../../../../context/LanguageContext";

const EpoxyDetails = () => {
  const { lang } = useLanguage();
  
  // Check if data exists
  if (!epoxyDetailsData) {
    return (
      <div className="text-center py-10">
        <p>Error loading data</p>
      </div>
    );
  }
  
  const data = epoxyDetailsData[lang];
  
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

export default EpoxyDetails;