import React from "react";
import { useLanguage } from "../../../context/LanguageContext";

const NoJobsMessage = () => {
  const { lang } = useLanguage();

  // Bilingual content
  const content = {
    en: {
      title: "No Openings Right Now",
      message: "We're not hiring at the moment, but we would still love to hear from you. Send us your CV and we'll get in touch when a suitable role is available.",
      altText: "No jobs"
    },
    ar: {
      title: "لا توجد فرص عمل متاحة حالياً",
      message: "نحن لا نوظف في الوقت الحالي، لكننا ما زلنا نرغب في التواصل معك. أرسل لنا سيرتك الذاتية وسنتواصل معك عندما تتاح وظيفة مناسبة.",
      altText: "لا توجد وظائف"
    }
  };

  const currentContent = content[lang];

  return (
    <section 
      className="py-24 px-6 text-center bg-white"
      dir={lang === 'ar' ? 'rtl' : 'ltr'}
    >
      <img
        src="https://cdni.iconscout.com/illustration/premium/thumb/no-data-found-illustration-6330954-5273781.png"
        className="w-72 mx-auto mb-6"
        alt={currentContent.altText}
      />

      <h2 className={`text-3xl font-bold mb-2 ${lang === 'ar' ? 'font-arabic' : ''}`}>
        {currentContent.title}
      </h2>

      <p className={`text-gray-600 max-w-xl mx-auto ${lang === 'ar' ? 'font-arabic' : ''}`}>
        {currentContent.message}
      </p>
    </section>
  );
};

export default NoJobsMessage;