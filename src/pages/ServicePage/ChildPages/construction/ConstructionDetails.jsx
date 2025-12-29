// src/pages/ServicePage/ChildPages/Construction/ConstructionDetails.jsx
import React from "react";
import ServiceDetails from "../components/ServiceDetails";
import { constructionDetailsData } from './constructionDetailsData';
import { useLanguage } from "../../../../context/LanguageContext";

const ConstructionDetails = () => {
  const { lang } = useLanguage();
  const data = constructionDetailsData[lang];

  return (
    <ServiceDetails
      header={data.header}
      scope={data.scope}
      footer={data.footer}
    />
  );
};

export default ConstructionDetails;