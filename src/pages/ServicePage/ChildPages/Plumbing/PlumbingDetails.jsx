// PlumbingDetails.jsx
import React from "react";
import ServiceDetails from "../components/ServiceDetails";
import { plumbingDetailsData } from "./PlumbingData";
import { useLanguage } from "../../../../context/LanguageContext";

const PlumbingDetails = () => {
  const { lang } = useLanguage();
  const data = plumbingDetailsData[lang];

  return (
    <ServiceDetails
      header={data.header}
      scope={data.scope}
      footer={data.footer}
      lang={lang}
    />
  );
};

export default PlumbingDetails;