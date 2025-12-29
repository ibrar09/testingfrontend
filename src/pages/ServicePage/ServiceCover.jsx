// src/components/ServiceCover.jsx
import React, { useState } from "react";
import { useLanguage } from "../../context/LanguageContext"; // ✅ language hook
import { Helmet } from "react-helmet-async";
import Service from "../../assets/images/pages/servises.webp";
import RequestQuoteForm from "../RequestPage/RequestQuoteForm";

const FloatingParticle = ({ size, left, top }) => (
  <div
    className="absolute rounded-full bg-white/30"
    style={{ width: size, height: size, left, top }}
    aria-hidden="true"
  />
);

const ServiceCover = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { lang } = useLanguage(); // "en" | "ar"

  const content = {
    en: {
      title: "From Concept to Completion",
      description: "Integrated Fit-Out, Infrastructure & Smart Solutions, serving Commercial, Industrial & Residential sectors across Saudi Arabia with quality, safety, and excellence.",
      button: "Get a Quote",
      alt: "Service Background",
      // SEO content
      seoTitle: "Professional Construction Services Saudi Arabia | Ram Limited Contracting",
      seoDescription: "Integrated fit-out, infrastructure, and smart solutions for commercial, industrial & residential sectors in Saudi Arabia. Quality, safety, and excellence guaranteed.",
      keywords: "construction services Saudi Arabia, fit-out services Riyadh, infrastructure solutions KSA, commercial building, industrial construction, residential projects Saudi Arabia",
      ogTitle: "Integrated Construction Solutions in Saudi Arabia | Ram Limited",
      ogDescription: "From concept to completion - Professional construction and fit-out services across Saudi Arabia",
    },
    ar: {
      title: "من الفكرة إلى التنفيذ",
      description: "حلول متكاملة للتجهيزات والبنية التحتية والحلول الذكية، نخدم القطاعات التجارية والصناعية والسكنية في جميع أنحاء المملكة العربية السعودية بجودة وأمان وتميز.",
      button: "احصل على عرض سعر",
      alt: "خلفية الخدمات",
      // SEO content بالعربية
      seoTitle: "خدمات بناء احترافية السعودية | رام المحدودة للمقاولات",
      seoDescription: "حلول متكاملة للتجهيزات والبنية التحتية والحلول الذكية للقطاعات التجارية والصناعية والسكنية في السعودية. جودة وأمان وتميز مضمون.",
      keywords: "خدمات بناء السعودية, خدمات تشطيب الرياض, حلول بنية تحتية المملكة, بناء تجاري, بناء صناعي, مشاريع سكنية السعودية",
      ogTitle: "حلول بناء متكاملة في السعودية | رام المحدودة",
      ogDescription: "من الفكرة إلى التنفيذ - خدمات بناء وتشطيب احترافية في جميع أنحاء السعودية",
    },
  };

  // Canonical URL for this section
  const canonicalUrl = `https://ramlimited.com.sa/${lang === "ar" ? "ar" : "en"}/services/overview`;

  // Generate structured data for this hero section
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": content[lang].title,
    "description": content[lang].description,
    "primaryImageOfPage": {
      "@type": "ImageObject",
      "url": "https://ramlimited.com.sa/images/service-hero-image.jpg",
      "width": "1920",
      "height": "1080"
    },
    "mainEntity": {
      "@type": "Service",
      "name": "Construction Services",
      "serviceType": lang === "ar" ? "خدمات البناء" : "Construction Services",
      "provider": {
        "@type": "Organization",
        "name": lang === "ar" ? "رام المحدودة للمقاولات" : "Ram Limited Contracting",
        "address": {
          "@type": "PostalAddress",
          "addressCountry": "SA",
          "addressRegion": lang === "ar" ? "منطقة الرياض" : "Riyadh Province"
        }
      }
    }
  };

  return (
    <>
      {/* SEO Meta Tags for Hero Section */}
      <Helmet>
        {/* Hero Section Specific SEO */}
        <meta property="og:image" content="https://ramlimited.com.sa/images/service-hero-social.jpg" />
        <meta property="og:image:alt" content={content[lang].alt} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        
        {/* Twitter Card for Hero */}
        <meta name="twitter:image" content="https://ramlimited.com.sa/images/service-hero-twitter.jpg" />
        
        {/* Structured Data for Hero Section */}
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
        
        {/* Additional Action Schema for CTA */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Action",
            "name": content[lang].button,
            "description": "Request a quote for construction services",
            "target": {
              "@type": "EntryPoint",
              "urlTemplate": canonicalUrl,
              "actionPlatform": [
                "http://schema.org/DesktopWebPlatform",
                "http://schema.org/MobileWebPlatform"
              ]
            }
          })}
        </script>
      </Helmet>

      <section
        dir={lang === "ar" ? "rtl" : "ltr"}
        className="relative w-full h-[70vh] sm:h-[80vh] md:h-[90vh] overflow-hidden"
        itemScope
        itemType="https://schema.org/Service"
        role="banner"
        aria-label={lang === "ar" ? "قسم الخدمات الرئيسي" : "Main Services Section"}
      >
        {/* Hidden schema markup */}
        <meta itemProp="name" content={content[lang].title} />
        <meta itemProp="description" content={content[lang].description} />
        <meta itemProp="provider" content="Ram Limited Contracting" />
        <meta itemProp="serviceType" content="Construction Services" />
        
        {/* Area served - Saudi Arabia */}
        <div itemProp="areaServed" itemScope itemType="https://schema.org/Country">
          <meta itemProp="name" content={lang === "ar" ? "المملكة العربية السعودية" : "Saudi Arabia"} />
        </div>

        {/* Background Image with Schema markup */}
        <div itemProp="image" itemScope itemType="https://schema.org/ImageObject">
          <img
            src={Service}
            alt={content[lang].alt}
            className="absolute inset-0 w-full h-full object-cover object-center brightness-90"
            loading="eager"
            width="1920"
            height="1080"
            itemProp="url"
          />
          <meta itemProp="width" content="1920" />
          <meta itemProp="height" content="1080" />
        </div>

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/20 backdrop-blur-sm"></div>

        {/* Floating Particles */}
        <FloatingParticle size={10} left="20%" top="12%" />
        <FloatingParticle size={14} left="72%" top="28%" />
        <FloatingParticle size={8} left="48%" top="55%" />
        <FloatingParticle size={12} left="82%" top="68%" />

        {/* Text Container */}
        <div className="absolute inset-0 flex flex-col items-center md:items-start justify-center px-6 sm:px-10 md:px-20 lg:px-28 pt-32 md:pt-40 gap-6 z-10">
          <div className="max-w-full md:max-w-[900px] flex flex-col gap-6">
            {/* Heading with Schema markup */}
            <h1
              className="
                text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl
                font-extrabold 
                text-center md:text-left
                bg-gradient-to-r from-[#023A9A] via-[#1392E0] to-[#60a5fa]
                text-transparent bg-clip-text
                drop-shadow-lg 
                leading-tight tracking-tight
              "
              itemProp="headline"
            >
              {content[lang].title}
            </h1>

            {/* Paragraph with Schema markup */}
            <p 
              className="text-white/90 text-center md:text-left text-base sm:text-lg md:text-xl leading-relaxed p-4 rounded-lg"
              itemProp="description"
            >
              {content[lang].description}
            </p>

            {/* Button with Schema markup */}
            <div 
              className="mt-4 flex justify-center md:justify-start"
              itemProp="potentialAction"
              itemScope
              itemType="https://schema.org/Action"
            >
              <meta itemProp="name" content={content[lang].button} />
              <button
                onClick={() => setIsModalOpen(true)}
                className="px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-bold text-white shadow-xl hover:scale-105 transition-transform duration-300"
                style={{
                  backgroundImage: "linear-gradient(180deg, #023A9A 0%, #1392E0 100%)",
                  boxShadow: "0 4px 15px rgba(2, 58, 154, 0.5)",
                }}
                aria-label={lang === "ar" ? "طلب عرض سعر للخدمات" : "Request quote for services"}
                role="button"
                itemProp="url"
              >
                {content[lang].button}
              </button>
            </div>
          </div>
        </div>

        {/* Request Quote Modal */}
        {isModalOpen && <RequestQuoteForm onClose={() => setIsModalOpen(false)} />}
        
        {/* Hidden semantic content for SEO */}
        <div style={{ display: 'none' }} aria-hidden="true">
          {/* Service sectors for search engines */}
          <ul>
            <li>Commercial Construction Services Saudi Arabia</li>
            <li>Industrial Fit-Out Solutions Riyadh</li>
            <li>Residential Building Projects KSA</li>
            <li>Infrastructure Development Saudi Arabia</li>
            <li>Smart Building Solutions</li>
          </ul>
          
          {/* Geographic mentions */}
          <span>Construction services in Riyadh</span>
          <span>Building contractors in Saudi Arabia</span>
          <span>Fit-out companies in KSA</span>
          
          {/* Arabic keywords */}
          {lang === "ar" && (
            <>
              <span>خدمات بناء في الرياض</span>
              <span>مقاولون بناء في السعودية</span>
              <span>شركات تشطيب في المملكة</span>
              <li>خدمات بناء تجارية السعودية</li>
              <li>حلول تشطيب صناعية الرياض</li>
              <li>مشاريع سكنية المملكة</li>
            </>
          )}
          
          {/* Quality mentions */}
          <span>ISO Certified Construction Services</span>
          <span>Quality Assured Building Solutions</span>
          <span>Safety First Construction Company</span>
          
          {/* Additional service details */}
          <div itemProp="hasOfferCatalog" itemScope itemType="https://schema.org/OfferCatalog">
            <meta itemProp="name" content="Construction Services" />
            <div itemProp="itemListElement" itemScope itemType="https://schema.org/Offer">
              <meta itemProp="name" content="Integrated Fit-Out" />
            </div>
            <div itemProp="itemListElement" itemScope itemType="https://schema.org/Offer">
              <meta itemProp="name" content="Infrastructure Solutions" />
            </div>
            <div itemProp="itemListElement" itemScope itemType="https://schema.org/Offer">
              <meta itemProp="name" content="Smart Building Solutions" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServiceCover;