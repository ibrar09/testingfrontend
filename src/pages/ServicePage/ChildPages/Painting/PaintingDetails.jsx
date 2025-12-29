// src/pages/ServicePage/ChildPages/Painting/PaintingDetails.jsx
import React from "react";
import ServiceDetails from "../components/ServiceDetails";
import { paintingDetailsData } from "./paintingDetailsData";
import { useLanguage } from "../../../../context/LanguageContext";

const PaintingDetails = () => {
  const { lang } = useLanguage();
  const data = paintingDetailsData[lang];

  return (
    <ServiceDetails
      header={data.header}
      scope={data.scope}
      footer={data.footer}
      lang={lang}
    />
  );
};

export default PaintingDetails;