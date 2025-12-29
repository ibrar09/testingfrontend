'use client';

import React from "react";
import { useLanguage } from "../../context/LanguageContext"; // ✅ import language context
import SaleBannerSlider from "./banners/SaleBannerSlider";
import ProductGrid from "./components/ProductGrid";
import { Helmet } from "react-helmet-async";

const StoreHome = () => {
  const { lang } = useLanguage(); // ✅ get current language
  const isArabic = lang === "ar";

  // Saudi-specific content based on language
  const pageTitle = isArabic 
    ? "متجر رام المحدودة | أجهزة تكييف وخدمات صيانة في السعودية" 
    : "Ram Limited Store | AC Units & Maintenance Services in Saudi Arabia";
  
  const pageDescription = isArabic
    ? "اشتري أفضل أجهزة التكييف مع خدمة التركيب والصيانة في الرياض، جدة، الدمام. منتجات أصلية بضمان وخدمة ما بعد البيع."
    : "Buy premium AC units with professional installation & maintenance services in Riyadh, Jeddah, Dammam. Original products with warranty & after-sales service.";
  
  const keywords = isArabic
    ? "تكييف, مكيفات, صيانة تكييف, شركة تكييف السعودية, تكييف مركزي, سبليت, شارب, ال جي, كاريير, سامسونج"
    : "AC, air conditioner, maintenance, Saudi Arabia, Riyadh, Jeddah, Dammam, split AC, central AC, installation, repair, Sharp, LG, Carrier, Samsung";

  return (
    <>
      <Helmet>
        {/* Primary Arabic Title for Saudi market */}
        <title lang="ar">{pageTitle}</title>
        
        {/* English alternative title */}
        <title lang="en">{pageTitle}</title>
        
        {/* Meta Description */}
        <meta name="description" content={pageDescription} />
        
        {/* Keywords for older browsers */}
        <meta name="keywords" content={keywords} />
        
        {/* Canonical URL */}
        <link rel="canonical" href={typeof window !== 'undefined' ? window.location.origin + "/store" : ""} />
        
        {/* Hreflang for multilingual targeting */}
        <link rel="alternate" hrefLang="ar-SA" href={typeof window !== 'undefined' ? window.location.origin + "/store?lang=ar" : ""} />
        <link rel="alternate" hrefLang="en-SA" href={typeof window !== 'undefined' ? window.location.origin + "/store?lang=en" : ""} />
        <link rel="alternate" hrefLang="x-default" href={typeof window !== 'undefined' ? window.location.origin + "/store" : ""} />
        
        {/* Language and Locale */}
        <meta httpEquiv="content-language" content={isArabic ? "ar" : "en"} />
        <meta property="og:locale" content={isArabic ? "ar_SA" : "en_SA"} />
        
        {/* Open Graph Tags for Social Sharing */}
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={typeof window !== 'undefined' ? window.location.origin + "/store" : ""} />
        <meta property="og:site_name" content="Ram Limited Store" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDescription} />
        
        {/* Saudi Local Business Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "WebSite",
                "name": "Ram Limited Store",
                "url": typeof window !== 'undefined' ? window.location.origin : "",
                "potentialAction": {
                  "@type": "SearchAction",
                  "target": {
                    "@type": "EntryPoint",
                    "urlTemplate": typeof window !== 'undefined' ? window.location.origin + "/store/search?q={search_term_string}" : ""
                  },
                  "query-input": "required name=search_term_string"
                },
                "inLanguage": ["ar-SA", "en-SA"]
              },
              {
                "@type": "LocalBusiness",
                "name": "Ram Limited",
                "description": isArabic 
                  ? "متجر رام المحدودة - بيع وتركيب وصيانة أجهزة التكييف في السعودية"
                  : "Ram Limited - AC units sales, installation and maintenance services in Saudi Arabia",
                "url": typeof window !== 'undefined' ? window.location.origin : "",
                "telephone": "+966-XXXXXXXXXX",
                "address": {
                  "@type": "PostalAddress",
                  "addressCountry": "SA",
                  "addressRegion": "Riyadh Province",
                  "addressLocality": "Riyadh",
                  "streetAddress": isArabic ? "شارع الملك فهد، الرياض" : "King Fahd Road, Riyadh"
                },
                "geo": {
                  "@type": "GeoCoordinates",
                  "latitude": "24.7136",
                  "longitude": "46.6753"
                },
                "openingHours": [
                  "Su-Th 08:00-22:00",
                  "Fr 16:00-22:00", 
                  "Sa 10:00-22:00"
                ],
                "priceRange": "$$",
                "currenciesAccepted": "SAR",
                "paymentAccepted": "Cash, Credit Card, Mada",
                "areaServed": [
                  {
                    "@type": "City",
                    "name": "Riyadh"
                  },
                  {
                    "@type": "City",
                    "name": "Jeddah"
                  },
                  {
                    "@type": "City",
                    "name": "Dammam"
                  }
                ],
                "knowsLanguage": ["ar", "en"]
              },
              {
                "@type": "BreadcrumbList",
                "itemListElement": [
                  {
                    "@type": "ListItem",
                    "position": 1,
                    "name": isArabic ? "الرئيسية" : "Home",
                    "item": typeof window !== 'undefined' ? window.location.origin : ""
                  },
                  {
                    "@type": "ListItem",
                    "position": 2,
                    "name": isArabic ? "المتجر" : "Store",
                    "item": typeof window !== 'undefined' ? window.location.origin + "/store" : ""
                  }
                ]
              }
            ]
          })}
        </script>
      </Helmet>

      <div className="relative min-h-screen w-full overflow-x-hidden" dir={isArabic ? "rtl" : "ltr"}>
        {/* ✅ Pass language to the banner so it can translate texts */}
        <SaleBannerSlider lang={lang} /> 

        <main id="products" className="relative z-10" role="main">
          {/* ✅ Pass language to ProductGrid so products display name/description in selected language */}
          <ProductGrid lang={lang} /> 
        </main>
      </div>
    </>
  );
};

export default StoreHome;