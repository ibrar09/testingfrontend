import React from 'react'
import QualityAndTestimonials from "../components/QualityAndTestimonials";
import { plumbingQualityData } from "./PlumbingData";
import { useLanguage } from "../../../../context/LanguageContext";

const PlumbingQualityPage = () => {
  const { lang } = useLanguage(); // Gets current language (en/ar)
  const data = plumbingQualityData[lang]; // Selects data based on language

  return (
    <>
      {/* Other sections like Hero, Duration, Pricing */}
      <QualityAndTestimonials data={data} lang={lang} />
    </>
  )
}

export default PlumbingQualityPage