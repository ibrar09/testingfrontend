// src/pages/ServicePage/ChildPages/IT/ITDetails.jsx
import React from "react";
import ServiceDetails from "../components/ServiceDetails";
import { itDetailsData } from './itDetailsData';
import { useLanguage } from "../../../../context/LanguageContext";

const ITDetails = () => {
  const { lang } = useLanguage();
  
  // Check if data exists
  if (!itDetailsData) {
    return (
      <div className="text-center py-10">
        <p>Error loading data</p>
      </div>
    );
  }
  
  const data = itDetailsData[lang];
  
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

export default ITDetails;