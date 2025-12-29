// src/pages/Services/Services.jsx
import React from "react";
import { Helmet } from "react-helmet-async";
import { useLanguage } from "../../context/LanguageContext";

import ServiceCover from "./ServiceCover";
import MainService from "./MainService";
import WhyChose from "./WhyChose";
import Spotlight from "./Spotlight";
import DeliveredService from "./DeliverdService";
import FaqSection from "./FaqSection";
import Transform from "./Transform";

const Services = () => {
  const { lang } = useLanguage();
  const isRTL = lang === "ar";

  // 🔹 COMPREHENSIVE SEO CONTENT FOR SAUDI ARABIA
  const seo = {
    en: {
      title: "Construction Services in Saudi Arabia | Ram Limited Contracting | Riyadh",
      description: "Professional construction, fit-out, and contracting services in Saudi Arabia. Commercial, residential, industrial projects in Riyadh and across KSA. ISO certified quality.",
      keywords: "construction services Saudi Arabia, building contractors Riyadh, fit-out services KSA, commercial construction, residential projects, industrial contracting, interior design, project management, construction company Saudi Arabia",
      ogTitle: "Ram Limited Construction Services - Professional Contracting in Saudi Arabia",
      ogDescription: "ISO certified construction and fit-out services in Riyadh and across Saudi Arabia. Commercial, residential, and industrial projects delivered with excellence.",
      twitterTitle: "Construction Services in Saudi Arabia | Ram Limited",
      twitterDescription: "Professional contracting and fit-out services across the Kingdom of Saudi Arabia",
      jsonLd: {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Construction Services",
        "description": "Professional construction, fit-out, and contracting services in Saudi Arabia",
        "provider": {
          "@type": "Organization",
          "name": "Ram Limited Contracting",
          "url": "https://ramlimited.com.sa",
          "logo": "https://ramlimited.com.sa/images/logo.jpg",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "King Fahd Road",
            "addressLocality": "Riyadh",
            "addressRegion": "Riyadh Province",
            "postalCode": "12345",
            "addressCountry": "SA"
          },
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+966-11-123-4567",
            "contactType": "customer service",
            "availableLanguage": ["English", "Arabic"]
          }
        },
        "areaServed": {
          "@type": "Country",
          "name": "Saudi Arabia"
        },
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Construction Services",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Commercial Construction"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Residential Projects"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Fit-Out Services"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Industrial Contracting"
              }
            }
          ]
        },
        "serviceType": "Construction Services"
      }
    },
    ar: {
      title: "خدمات البناء في السعودية | رام المحدودة للمقاولات | الرياض",
      description: "خدمات بناء وتشطيب ومقاولات احترافية في السعودية. مشاريع تجارية وسكنية وصناعية في الرياض وعبر المملكة. جودة معتمدة ISO.",
      keywords: "خدمات بناء السعودية, مقاولون بناء الرياض, خدمات تشطيب المملكة, بناء تجاري, مشاريع سكنية, مقاولات صناعية, تصميم داخلي, إدارة مشاريع, شركة بناء السعودية",
      ogTitle: "خدمات بناء رام المحدودة - مقاولات احترافية في السعودية",
      ogDescription: "خدمات بناء وتشطيب معتمدة ISO في الرياض وعبر السعودية. مشاريع تجارية وسكنية وصناعية تنفذ بإتقان.",
      twitterTitle: "خدمات البناء في السعودية | رام المحدودة",
      twitterDescription: "خدمات مقاولات وتشطيب احترافية في جميع أنحاء المملكة العربية السعودية",
      jsonLd: {
        "@context": "https://schema.org/ar",
        "@type": "Service",
        "name": "خدمات البناء",
        "description": "خدمات بناء وتشطيب ومقاولات احترافية في السعودية",
        "provider": {
          "@type": "Organization",
          "name": "رام المحدودة للمقاولات",
          "url": "https://ramlimited.com.sa",
          "logo": "https://ramlimited.com.sa/images/logo.jpg",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "شارع الملك فهد",
            "addressLocality": "الرياض",
            "addressRegion": "منطقة الرياض",
            "postalCode": "12345",
            "addressCountry": "SA"
          },
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+966-11-123-4567",
            "contactType": "customer service",
            "availableLanguage": ["العربية", "الإنجليزية"]
          }
        },
        "areaServed": {
          "@type": "Country",
          "name": "المملكة العربية السعودية"
        },
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "خدمات البناء",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "بناء تجاري"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "مشاريع سكنية"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "خدمات تشطيب"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "مقاولات صناعية"
              }
            }
          ]
        },
        "serviceType": "خدمات البناء"
      }
    }
  };

  // Canonical URLs
  const canonicalUrl = `https://ramlimited.com.sa/${lang === "ar" ? "ar" : "en"}/services`;

  return (
    <>
      {/* ✅ COMPREHENSIVE SEO OPTIMIZATION */}
      <Helmet>
        {/* Primary HTML attributes */}
        <html lang={lang} dir={isRTL ? "rtl" : "ltr"} />
        
        {/* Primary Meta Tags */}
        <title>{seo[lang].title}</title>
        <meta name="description" content={seo[lang].description} />
        <meta name="keywords" content={seo[lang].keywords} />
        
        {/* Geographic Targeting for Saudi Arabia */}
        <meta name="geo.region" content="SA" />
        <meta name="geo.placename" content={lang === "ar" ? "الرياض" : "Riyadh"} />
        <meta name="geo.position" content="24.7136;46.6753" />
        <meta name="ICBM" content="24.7136, 46.6753" />
        
        {/* Language & Locale */}
        {lang === "ar" ? (
          <>
            <meta name="language" content="Arabic" />
            <meta httpEquiv="content-language" content="ar-SA" />
            <meta property="og:locale" content="ar_SA" />
            <meta property="og:locale:alternate" content="en_SA" />
          </>
        ) : (
          <>
            <meta name="language" content="English" />
            <meta httpEquiv="content-language" content="en-SA" />
            <meta property="og:locale" content="en_SA" />
            <meta property="og:locale:alternate" content="ar_SA" />
          </>
        )}
        
        {/* Canonical URL */}
        <link rel="canonical" href={canonicalUrl} />
        
        {/* Alternate Language Versions */}
        <link rel="alternate" hreflang="ar" href="https://ramlimited.com.sa/ar/services" />
        <link rel="alternate" hreflang="en" href="https://ramlimited.com.sa/en/services" />
        <link rel="alternate" hreflang="x-default" href="https://ramlimited.com.sa/services" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:title" content={seo[lang].ogTitle} />
        <meta property="og:description" content={seo[lang].ogDescription} />
        <meta property="og:image" content="https://ramlimited.com.sa/images/services-og-image.jpg" />
        <meta property="og:image:alt" content={lang === "ar" ? "خدمات رام المحدودة للبناء" : "Ram Limited Construction Services"} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:site_name" content={lang === "ar" ? "رام المحدودة للمقاولات" : "Ram Limited Contracting"} />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@ramlimited" />
        <meta name="twitter:creator" content="@ramlimited" />
        <meta name="twitter:title" content={seo[lang].twitterTitle} />
        <meta name="twitter:description" content={seo[lang].twitterDescription} />
        <meta name="twitter:image" content="https://ramlimited.com.sa/images/services-twitter-card.jpg" />
        <meta name="twitter:image:alt" content={lang === "ar" ? "خدمات البناء السعودية" : "Saudi Arabia Construction Services"} />
        
        {/* Additional Meta Tags */}
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="author" content="Ram Limited Contracting" />
        <meta name="copyright" content="Ram Limited Contracting" />
        <meta name="rating" content="General" />
        <meta name="distribution" content="global" />
        
        {/* Structured Data - JSON-LD */}
        <script type="application/ld+json">
          {JSON.stringify(seo[lang].jsonLd)}
        </script>
        
        {/* Breadcrumb Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": lang === "ar" ? "الرئيسية" : "Home",
                "item": `https://ramlimited.com.sa/${lang === "ar" ? "ar" : "en"}`
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": lang === "ar" ? "خدماتنا" : "Our Services",
                "item": canonicalUrl
              }
            ]
          })}
        </script>
        
        {/* FAQ Structured Data (for FAQ section) */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": lang === "ar" ? "ما هي خدمات البناء التي تقدمها رام المحدودة؟" : "What construction services does Ram Limited offer?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": lang === "ar" 
                    ? "نقدم خدمات بناء تجارية وسكنية وصناعية، خدمات تشطيب داخلي، إدارة مشاريع، وتصميم داخلي في جميع أنحاء السعودية."
                    : "We offer commercial, residential, and industrial construction services, interior fit-out, project management, and interior design across Saudi Arabia."
                }
              },
              {
                "@type": "Question",
                "name": lang === "ar" ? "هل تعملون في جميع أنحاء السعودية؟" : "Do you work throughout Saudi Arabia?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": lang === "ar" 
                    ? "نعم، نقدم خدماتنا في الرياض وجدة والدمام وجميع أنحاء المملكة العربية السعودية."
                    : "Yes, we provide our services in Riyadh, Jeddah, Dammam, and throughout Saudi Arabia."
                }
              }
            ]
          })}
        </script>
        
        {/* Local Business Schema for Saudi Arabia */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": lang === "ar" ? "رام المحدودة للمقاولات" : "Ram Limited Contracting",
            "image": "https://ramlimited.com.sa/images/logo.jpg",
            "@id": "https://ramlimited.com.sa",
            "url": "https://ramlimited.com.sa",
            "telephone": "+966-11-123-4567",
            "priceRange": "$$$",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": lang === "ar" ? "شارع الملك فهد" : "King Fahd Road",
              "addressLocality": lang === "ar" ? "الرياض" : "Riyadh",
              "addressRegion": lang === "ar" ? "منطقة الرياض" : "Riyadh Province",
              "postalCode": "12345",
              "addressCountry": "SA"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": 24.7136,
              "longitude": 46.6753
            },
            "openingHoursSpecification": {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": [
                "Saturday",
                "Sunday",
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday"
              ],
              "opens": "08:00",
              "closes": "18:00"
            },
            "sameAs": [
              "https://www.facebook.com/ramlimited",
              "https://www.linkedin.com/company/ramlimited",
              "https://twitter.com/ramlimited",
              "https://www.instagram.com/ramlimited"
            ]
          })}
        </script>
      </Helmet>

      {/* ✅ Page Wrapper with Schema markup */}
      <main
        dir={isRTL ? "rtl" : "ltr"}
        className="w-full overflow-x-hidden bg-white"
        itemScope
        itemType="https://schema.org/Service"
        role="main"
      >
        {/* Hidden schema markup */}
        <meta itemProp="name" content={seo[lang].title} />
        <meta itemProp="description" content={seo[lang].description} />
        <meta itemProp="provider" content="Ram Limited Contracting" />
        <meta itemProp="serviceType" content="Construction Services" />
        
        {/* Area served information */}
        <div itemProp="areaServed" itemScope itemType="https://schema.org/Country">
          <meta itemProp="name" content={lang === "ar" ? "المملكة العربية السعودية" : "Saudi Arabia"} />
        </div>
        
        {/* Each section already handles its own layout */}
        <ServiceCover />
        <MainService />
        <WhyChose />
        <Spotlight />
        <DeliveredService />
        <FaqSection />
        <Transform />
        
        {/* Hidden semantic content for SEO */}
        <div style={{ display: 'none' }} aria-hidden="true">
          {/* Service list for search engines */}
          <ul>
            <li>Commercial Construction Services Saudi Arabia</li>
            <li>Residential Building Projects Riyadh</li>
            <li>Interior Fit-Out Services KSA</li>
            <li>Industrial Contracting Saudi Arabia</li>
            <li>Project Management Services</li>
            <li>Design and Build Solutions</li>
          </ul>
          
          {/* Geographic mentions */}
          <span>Construction company in Riyadh</span>
          <span>Building contractors in Saudi Arabia</span>
          <span>Fit-out services in KSA</span>
          
          {/* Arabic keywords */}
          {lang === "ar" && (
            <>
              <span>شركة بناء في الرياض</span>
              <span>مقاولون بناء في السعودية</span>
              <span>خدمات تشطيب في المملكة</span>
              <li>خدمات بناء تجارية السعودية</li>
              <li>مشاريع سكنية الرياض</li>
              <li>خدمات تشطيب داخلي المملكة</li>
            </>
          )}
          
          {/* ISO Certification mention */}
          <span>ISO 9001:2015 Certified Construction Services</span>
          <span>Quality assured building contractors</span>
        </div>
      </main>
    </>
  );
};

export default Services;