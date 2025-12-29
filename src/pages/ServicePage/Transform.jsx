// src/Components/Transform.jsx
import React, { useState } from 'react';
import RequestQuoteForm from '../RequestPage/RequestQuoteForm';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { useLanguage } from '../../context/LanguageContext';

const Transform = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { lang } = useLanguage();

  // Translations for English and Arabic
  const translations = {
    en: {
      pageTitle: "Transform Your Space | Maaj Maintenance",
      metaDescription:
        "Get a free consultation and estimate from Maaj Maintenance. Transform your space with our expert services in HVAC, electrical, plumbing, and more.",
      metaKeywords:
        "Maaj Maintenance, Transform Space, Request Quote, HVAC, Plumbing, Electrical Services, Free Consultation, Saudi Arabia",
      heading: "Ready to Transform Your Space?",
      subHeading:
        "Reach out today for a free consultation and estimate. Let's discuss how we can bring your vision to life.",
      requestButton: "Request a Quote",
      callButton: "Call Us: +966 593534881",
      contactInfo: "Email: ramlimited.sa@gmail.com | Available 24/7 for emergencies",
    },
    ar: {
      pageTitle: "حوّل مساحتك | شركة Maaj للصيانة",
      metaDescription:
        "احصل على استشارة مجانية وتقدير من شركة Maaj للصيانة. حوّل مساحتك مع خدماتنا المتخصصة في التكييف، والكهرباء، والسباكة، والمزيد.",
      metaKeywords:
        "شركة Maaj للصيانة، تحويل المساحة، طلب عرض سعر، التكييف، السباكة، الخدمات الكهربائية، استشارة مجانية، السعودية",
      heading: "هل أنت مستعد لتحويل مساحتك؟",
      subHeading:
        "تواصل معنا اليوم للحصول على استشارة مجانية وتقدير. دعنا نناقش كيف يمكننا تحقيق رؤيتك.",
      requestButton: "طلب عرض سعر",
      callButton: "اتصل بنا: +966 593534881",
      contactInfo: "البريد الإلكتروني: ramlimited.sa@gmail.com | متاح على مدار الساعة للطوارئ",
    },
  };

  const t = translations[lang];

  return (
    <>
      <Helmet>
        <title>{t.pageTitle}</title>
        <meta name="description" content={t.metaDescription} />
        <meta name="keywords" content={t.metaKeywords} />
        <meta name="robots" content="index,follow" />
        <html lang={lang} dir={lang === "ar" ? "rtl" : "ltr"} />
      </Helmet>

      <section
        className={`w-full bg-gradient-to-b from-[#023A9A] to-[#1392E0] py-16 px-4 sm:px-6 lg:px-20 flex flex-col items-center text-center ${
          lang === 'ar' ? 'text-right' : 'text-left'
        }`}
      >
        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-[48px] font-sans font-normal text-white mb-4 max-w-[90%] sm:max-w-[708px] leading-tight"
        >
          {t.heading}
        </motion.h1>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-base sm:text-lg md:text-[20px] leading-7 sm:leading-8 text-white opacity-90 mb-6 max-w-[90%] sm:max-w-[751px]"
        >
          {t.subHeading}
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 sm:gap-6 mb-6"
        >
          <button
            onClick={() => setIsModalOpen(true)}
            className="px-6 py-3 sm:px-8 sm:py-3 bg-white rounded-md shadow-md hover:shadow-lg transition flex justify-center items-center"
            aria-label={t.requestButton}
          >
            <span className="text-[#023A9A] font-sans font-bold text-[16px] sm:text-[16px] leading-5">
              {t.requestButton}
            </span>
          </button>

          <a
            href="tel:+966501234567"
            className="px-6 py-3 sm:px-8 sm:py-3 bg-white rounded-md border border-white hover:bg-gray-100 transition flex justify-center items-center"
            aria-label={t.callButton}
          >
            <span className="text-[#575757] font-sans font-bold text-[16px] sm:text-[16px] leading-5">
              {t.callButton}
            </span>
          </a>
        </motion.div>

        {/* Contact Info */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="text-white text-opacity-80 text-base sm:text-[18px] leading-7 sm:leading-7 max-w-[90%] sm:max-w-[545px]"
        >
          {t.contactInfo}
        </motion.p>

        {/* Modal Form */}
        {isModalOpen && <RequestQuoteForm onClose={() => setIsModalOpen(false)} />}
      </section>
    </>
  );
};

export default Transform;
