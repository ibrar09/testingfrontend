// src/pages/ContactPage/Contact.jsx
import React from "react";
import ContactSection from "./ContactSection";
import { useLanguage } from "../../context/LanguageContext";

const Contact = () => {
  const { lang } = useLanguage();
  const isArabic = lang === "ar";

  // Bilingual content
  const content = {
    en: {
      title: "Contact Us",
      description: "We're here to help. Fill out the form below or reach out to us directly."
    },
    ar: {
      title: "تواصل معنا",
      description: "نحن هنا لمساعدتك. املأ النموذج أدناه أو اتصل بنا مباشرة."
    }
  };

  const currentContent = content[lang];

  return (
    <main
      dir={isArabic ? "rtl" : "ltr"}
      className="w-full min-h-screen bg-[#FAFAFA] font-sans"
    >
      {/* Page Header */}
      <header className="w-full py-12 sm:py-16 bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className={`text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 ${isArabic ? 'font-arabic' : ''}`}>
            {currentContent.title}
          </h1>
          <p className={`mt-4 text-sm sm:text-base lg:text-lg text-gray-600 ${isArabic ? 'font-arabic' : ''}`}>
            {currentContent.description}
          </p>
        </div>
      </header>

      {/* Contact Form Section */}
      <section className="w-full py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ContactSection />
        </div>
      </section>
    </main>
  );
};

export default Contact;