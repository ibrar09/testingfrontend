// src/components/HomePage/Cover.jsx
import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import landing from "../../assets/images/pages/HomeCover.jpg";
import RequestQuoteForm from "../RequestPage/RequestQuoteForm";
import { useLanguage } from "../../context/LanguageContext";
import translationsEN from "../../translation/en.json";
import translationsAR from "../../translation/ar.json";

const Cover = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showBanner, setShowBanner] = useState(true);

  const { lang } = useLanguage();
  const isArabic = lang === "ar";
  const translations = lang === "ar" ? translationsAR : translationsEN;

  // Static banner data
  const banner = {
    title: translations.bannerTitle,
    link: "/store",
    external: false,
  };

  // Saudi-specific SEO content for hero section
  const heroTitle = isArabic
    ? "رام المحدودة | خدمات الصيانة الشاملة في السعودية"
    : "Ram Limited | Comprehensive Maintenance Services in Saudi Arabia";
  
  const heroDescription = isArabic
    ? "شركة متخصصة في جميع خدمات الصيانة: تكييف، دهان، كهرباء، سباكة، وصيانة عامة. خدمة 24/7 في الرياض، جدة، الدمام."
    : "Specialized in all maintenance services: AC, painting, electrical, plumbing & general maintenance. 24/7 service in Riyadh, Jeddah, Dammam.";

  const renderBannerLink = () => {
    const baseClasses =
      "bg-white text-[#023A9A] font-bold px-3 py-1.5 rounded text-xs sm:text-sm shadow hover:bg-gray-100 transition whitespace-nowrap";

    if (banner.external) {
      return (
        <a
          href={banner.link}
          target="_blank"
          rel="noopener noreferrer"
          className={baseClasses}
        >
          {translations.visitStore}
        </a>
      );
    }

    return (
      <Link to={banner.link} className={baseClasses}>
        {translations.visitStore}
      </Link>
    );
  };

  return (
    <>
      {/* Structured Data for Hero Section */}
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": heroTitle,
            "description": heroDescription,
            "primaryImageOfPage": {
              "@type": "ImageObject",
              "url": typeof window !== 'undefined' ? `${window.location.origin}${landing}` : "",
              "width": "1920",
              "height": "750",
              "caption": isArabic ? "خدمات الصيانة الشاملة في السعودية" : "Comprehensive maintenance services in Saudi Arabia"
            },
            "breadcrumb": {
              "@type": "BreadcrumbList",
              "itemListElement": [{
                "@type": "ListItem",
                "position": 1,
                "name": isArabic ? "الرئيسية" : "Home",
                "item": typeof window !== 'undefined' ? window.location.origin : ""
              }]
            }
          })}
        </script>
        
        {/* Meta tags for hero section */}
        <meta property="og:image" content={typeof window !== 'undefined' ? `${window.location.origin}${landing}` : ""} />
        <meta property="og:image:alt" content={translations.coverImageAlt} />
        <meta property="og:image:width" content="1920" />
        <meta property="og:image:height" content="750" />
        <meta property="og:image:type" content="image/jpeg" />
      </Helmet>

      <section
        dir={isArabic ? "rtl" : "ltr"}
        className="relative w-full min-h-[600px] lg:min-h-[750px] overflow-hidden"
        aria-label={translations.coverAriaLabel}
        itemScope
        itemType="https://schema.org/WPHeader"
      >
        {/* Banner */}
        {banner && showBanner && (
          <div className="absolute top-0 left-0 w-full z-[9999] bg-gradient-to-r from-[#023A9A] via-[#1392E0] to-[#60a5fa] shadow-lg animate-slideDown">
            <div className="max-w-7xl mx-auto relative flex flex-col items-center justify-center py-3 px-4 sm:px-6 gap-2 sm:gap-4 text-center">
              
              {/* Close Button */}
              <button
                onClick={() => setShowBanner(false)}
                className="absolute top-2 right-2 text-white/90 hover:text-white transition p-1"
                aria-label={translations.closeBanner}
              >
                ✖
              </button>

              {/* Banner Content */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 flex-wrap">
                {/* New Label */}
                <span className="relative inline-flex items-center justify-center px-3 py-1 sm:px-4 sm:py-1.5 bg-white text-[#023A9A] font-bold text-xs sm:text-sm rounded-full shadow-lg animate-pulse overflow-hidden">
                  <span className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-yellow-300 via-red-400 to-pink-500 opacity-30 animate-animateShine rounded-full"></span>
                  🔥 {translations.newLabel}
                </span>

                {/* Banner Title */}
                <span className="font-semibold text-xs sm:text-sm md:text-base lg:text-lg text-white drop-shadow-md whitespace-nowrap">
                  {banner.title}
                </span>

                {/* Banner Button */}
                {renderBannerLink()}
              </div>
            </div>
          </div>
        )}

        {/* Background Image */}
        <img
          src={landing}
          alt={translations.coverImageAlt}
          className="absolute inset-0 w-full h-full object-cover"
          loading="eager" // Changed to eager for hero image (SEO best practice)
          decoding="async"
          itemProp="image"
        />

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />

        {/* Main content */}
        <div
          className={`relative z-10 w-full h-full min-h-[600px] lg:min-h-[750px] flex flex-col justify-center px-4 sm:px-8 lg:px-16 transition-all duration-300 ${
            showBanner ? "pt-12" : "pt-0"
          }`}
          itemScope
          itemType="https://schema.org/WebPageElement"
        >
          <div className="max-w-3xl flex flex-col gap-4 sm:gap-6 items-center sm:items-start text-center sm:text-left mx-auto sm:mx-0">
            <h1 
              className="font-bold text-white leading-tight animate-slideInUp"
              itemProp="headline"
            >
              <span className="block text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-2">
                {translations.mainHeadingLine1}
              </span>
              <span className="block bg-gradient-to-r from-[#1392E0] to-[#60a5fa] bg-clip-text text-transparent text-2xl sm:text-3xl md:text-4xl lg:text-5xl animate-fadeIn">
                {translations.mainHeadingLine2}
              </span>
            </h1>

            <p 
              className="w-full sm:max-w-xl text-gray-200 text-sm sm:text-base md:text-lg lg:text-xl font-light leading-relaxed animate-fadeIn delay-100"
              itemProp="description"
            >
              {translations.coverDescription}
            </p>

            <div className="mt-4 sm:mt-6 animate-bounceIn w-full sm:w-auto">
              <button
                onClick={() => setIsModalOpen(true)}
                className="w-full sm:w-auto bg-[#023A9A] hover:bg-[#002a7a] border border-[#023A9A] text-white font-bold text-sm sm:text-base md:text-lg px-8 py-3 rounded-lg shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 transform active:scale-95"
                aria-label={translations.requestQuote}
                itemProp="significantLink"
              >
                {translations.requestQuote}
              </button>
            </div>

            {/* Saudi Service Areas - SEO Enhancement */}
            <div className="mt-6 flex flex-wrap gap-3 justify-center sm:justify-start">
              <span className="text-xs sm:text-sm text-gray-300 font-medium px-3 py-1.5 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
                🇸🇦 {isArabic ? "الرياض" : "Riyadh"}
              </span>
              <span className="text-xs sm:text-sm text-gray-300 font-medium px-3 py-1.5 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
                🇸🇦 {isArabic ? "جدة" : "Jeddah"}
              </span>
              <span className="text-xs sm:text-sm text-gray-300 font-medium px-3 py-1.5 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
                🇸🇦 {isArabic ? "الدمام" : "Dammam"}
              </span>
              <span className="text-xs sm:text-sm text-gray-300 font-medium px-3 py-1.5 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
                {isArabic ? "خدمة 24/7" : "24/7 Service"}
              </span>
            </div>

            {/* SEO Text for Search Engines (hidden visually) */}
            <div className="sr-only" aria-hidden="true">
              <h2>{isArabic ? "خدمات الصيانة في السعودية" : "Maintenance Services in Saudi Arabia"}</h2>
              <p>{isArabic 
                ? "شركة رام المحدودة تقدم خدمات الصيانة الشاملة في المملكة العربية السعودية تشمل صيانة التكييف والتبريد، خدمات الدهان والطلاء، الصيانة الكهربائية، السباكة، والصيانة العامة للمباني. نحن نخدم مدن الرياض، جدة، الدمام، مكة، والمدينة المنورة. فريق معتمد وخدمة طوارئ على مدار الساعة."
                : "Ram Limited provides comprehensive maintenance services in Saudi Arabia including AC and cooling maintenance, painting services, electrical maintenance, plumbing, and general building maintenance. We serve Riyadh, Jeddah, Dammam, Mecca, and Medina. Certified team and 24/7 emergency service."
              }</p>
              <ul>
                <li>{isArabic ? "صيانة تكييف مركزي وسبليت" : "Central and split AC maintenance"}</li>
                <li>{isArabic ? "دهان داخلي وخارجي" : "Interior and exterior painting"}</li>
                <li>{isArabic ? "إصلاح الأعطال الكهربائية" : "Electrical fault repairs"}</li>
                <li>{isArabic ? "خدمات السباكة المنزلية" : "Residential plumbing services"}</li>
                <li>{isArabic ? "صيانة المباني والمنشآت" : "Building and facility maintenance"}</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Modal */}
        {isModalOpen && (
          <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
            <div className="w-full max-w-lg">
              <RequestQuoteForm onClose={() => setIsModalOpen(false)} />
            </div>
          </div>
        )}

        <style>
          {`
          @keyframes animateShine {
            0% { transform: translateX(-100%) }
            50% { transform: translateX(100%) }
            100% { transform: translateX(100%) }
          }
          .animate-animateShine {
            animation: animateShine 2.5s linear infinite;
          }
          `}
        </style>
      </section>
    </>
  );
};

export default Cover;