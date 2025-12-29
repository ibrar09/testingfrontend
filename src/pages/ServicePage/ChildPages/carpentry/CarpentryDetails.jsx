// src/pages/ServicePage/ChildPages/Carpentry/CarpentryDetails.jsx
import React from "react";
import ServiceDetails from "../components/ServiceDetails";
import { carpentryDetailsData } from './carpentryDetailsData';
import { useLanguage } from "../../../../context/LanguageContext";

const CarpentryDetails = () => {
  const { lang } = useLanguage();
  const data = carpentryDetailsData[lang];

  return (
    <ServiceDetails
      header={data.header}
      scope={data.scope}
      footer={data.footer}
    />
  );
};

export default CarpentryDetails;