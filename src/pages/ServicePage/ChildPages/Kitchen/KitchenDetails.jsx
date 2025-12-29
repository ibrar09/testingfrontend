// src/pages/ServicePage/ChildPages/Kitchen/KitchenDetails.jsx
import React from "react";
import ServiceDetails from "../components/ServiceDetails";
import { kitchenDetailsData } from "./KitchenData";
import { useLanguage } from "../../../../context/LanguageContext";

const KitchenDetails = () => {
  const { lang } = useLanguage();
  
  // Check if data exists
  if (!kitchenDetailsData) {
    return (
      <div className="text-center py-10">
        <p>Error loading data</p>
      </div>
    );
  }
  
  const data = kitchenDetailsData[lang];
  
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

export default KitchenDetails;