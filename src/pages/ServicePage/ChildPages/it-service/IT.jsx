// src/pages/ServicePage/ChildPages/IT/IT.jsx
import React from 'react';
import { Helmet } from "react-helmet-async";
import ITHero from './ITHero';
import ITProjectDuration from './ITProjectDuration';
import ITService from './ITService';
import ITDetails from './ITDetails';
import ITPricing from './ITPricing';
import ITQualityPage from './ITQualityPage';
import { useLanguage } from "../../../../context/LanguageContext";

// Import SEO data
import { itSEODetails } from "./itDetailsData";

const IT = () => {
  const { lang } = useLanguage();
  const seoData = itSEODetails[lang];
  const canonicalUrl = `https://ramlimited.com.sa/${lang === "ar" ? "ar" : "en"}/services/it-security`;

  return (
    <>
      {/* ✅ COMPREHENSIVE SEO META TAGS */}
      <Helmet>
        {/* ✅ Primary Meta Tags */}
        <title>{seoData.metaTitle}</title>
        <meta name="description" content={seoData.metaDescription} />
        <meta name="keywords" content={seoData.metaKeywords} />
        
        {/* ✅ Geographic Targeting for Saudi Arabia */}
        <meta name="geo.region" content="SA" />
        <meta name="geo.placename" content={lang === "ar" ? "الرياض" : "Riyadh"} />
        <meta name="geo.position" content="24.7136;46.6753" />
        <meta name="ICBM" content="24.7136, 46.6753" />
        
        {/* ✅ Language & Locale */}
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
        
        {/* ✅ Canonical URL */}
        <link rel="canonical" href={canonicalUrl} />
        
        {/* ✅ Alternate Language Versions */}
        <link rel="alternate" hreflang="ar" href="https://ramlimited.com.sa/ar/services/it-security" />
        <link rel="alternate" hreflang="en" href="https://ramlimited.com.sa/en/services/it-security" />
        <link rel="alternate" hreflang="x-default" href="https://ramlimited.com.sa/services/it-security" />
        
        {/* ✅ Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:title" content={seoData.ogTitle} />
        <meta property="og:description" content={seoData.ogDescription} />
        <meta property="og:image" content={seoData.ogImage} />
        <meta property="og:image:alt" content={lang === "ar" ? "خدمات تكنولوجيا المعلومات والأمن" : "IT & Security Services in Saudi Arabia"} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:site_name" content={lang === "ar" ? "رام المحدودة للمقاولات" : "Ram Limited Contracting"} />
        
        {/* ✅ Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@ramlimited" />
        <meta name="twitter:creator" content="@ramlimited" />
        <meta name="twitter:title" content={seoData.twitterTitle} />
        <meta name="twitter:description" content={seoData.twitterDescription} />
        <meta name="twitter:image" content={seoData.ogImage} />
        <meta name="twitter:image:alt" content={lang === "ar" ? "خدمات تكنولوجيا المعلومات السعودية" : "Saudi Arabia IT Services"} />
        
        {/* ✅ Additional Meta Tags */}
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="author" content="Ram Limited Contracting" />
        <meta name="copyright" content="Ram Limited Contracting" />
        <meta name="rating" content="General" />
        <meta name="distribution" content="global" />
        
        {/* ✅ Structured Data - JSON-LD */}
        <script type="application/ld+json">
          {JSON.stringify(seoData.structuredData)}
        </script>
        
        {/* ✅ Breadcrumb Structured Data */}
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
                "item": `https://ramlimited.com.sa/${lang === "ar" ? "ar" : "en"}/services`
              },
              {
                "@type": "ListItem",
                "position": 3,
                "name": seoData.breadcrumb,
                "item": canonicalUrl
              }
            ]
          })}
        </script>
        
        {/* ✅ FAQ Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": seoData.faqs.map(faq => ({
              "@type": "Question",
              "name": faq.question,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer
              }
            }))
          })}
        </script>
        
        {/* ✅ Local Business Schema for Saudi Arabia */}
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
              "dayOfWeek": ["Saturday", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday"],
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

      {/* ✅ PAGE CONTENT WITH SCHEMA MARKUP */}
      <div 
        className={lang === 'ar' ? 'text-right' : 'text-left'} 
        dir={lang === 'ar' ? 'rtl' : 'ltr'}
        itemScope
        itemType="https://schema.org/Service"
      >
        {/* Hidden schema markup */}
        <meta itemProp="name" content={seoData.metaTitle} />
        <meta itemProp="description" content={seoData.metaDescription} />
        <meta itemProp="provider" content={lang === "ar" ? "رام المحدودة للمقاولات" : "Ram Limited Contracting"} />
        <meta itemProp="serviceType" content="IT & Security Services" />
        
        {/* Area served information */}
        <div itemProp="areaServed" itemScope itemType="https://schema.org/Country">
          <meta itemProp="name" content={lang === "ar" ? "المملكة العربية السعودية" : "Saudi Arabia"} />
        </div>
        
        {/* Your existing components */}
        <ITHero />
        <ITProjectDuration />
        <ITService />
        <ITDetails />
        <ITPricing />
        <ITQualityPage />
        
        {/* ✅ Hidden semantic content for SEO */}
        <div style={{ display: 'none' }} aria-hidden="true">
          {/* Service areas for search engines */}
          <h3>{lang === "ar" ? "مناطق خدمتنا" : "Our Service Areas"}</h3>
          <ul>
            <li>IT Services in Riyadh</li>
            <li>Network Installation in Jeddah</li>
            <li>CCTV Security in Dammam</li>
            <li>Cybersecurity Solutions in Khobar</li>
            <li>Server Setup in Mecca</li>
            <li>IT Support in Medina</li>
          </ul>
          
          {/* Service types */}
          <h3>{lang === "ar" ? "أنواع الخدمات" : "Service Types"}</h3>
          <ul>
            <li>Network Setup & Installation</li>
            <li>CCTV & Security Camera Systems</li>
            <li>Server & Data Center Setup</li>
            <li>Cybersecurity & Firewall Installation</li>
            <li>IT Support & Maintenance</li>
            <li>Cloud Computing Solutions</li>
            <li>Smart Office Automation</li>
            <li>Access Control Systems</li>
          </ul>
          
          {/* Industry sectors served */}
          <h3>{lang === "ar" ? "قطاعات الصناعة التي نخدمها" : "Industry Sectors We Serve"}</h3>
          <ul>
            <li>Commercial IT - Offices, Malls, Hotels</li>
            <li>Residential IT - Villas, Apartments, Compounds</li>
            <li>Industrial IT - Factories, Warehouses, Plants</li>
            <li>Institutional IT - Hospitals, Schools, Universities</li>
            <li>Government & Public Sector IT Solutions</li>
          </ul>
          
          {/* Arabic keywords */}
          {lang === "ar" && (
            <>
              <span>خدمات تكنولوجيا معلومات في الرياض</span>
              <span>تركيب شبكات في جدة</span>
              <span>أمن كاميرات مراقبة في الدمام</span>
              <span>حلول أمن سيبراني في الخبر</span>
              <li>إعداد شبكات LAN/WAN</li>
              <li>تركيب كاميرات مراقبة HD</li>
              <li>إعداد خوادم وحوسبة سحابية</li>
              <li>حلول جدران نارية وأمان</li>
              <li>دعم تكنولوجيا معلومات فني</li>
              <li>أنظمة مكتب ذكية</li>
            </>
          )}
          
          {/* English keywords */}
          {lang === "en" && (
            <>
              <span>IT network installation Saudi Arabia</span>
              <span>CCTV security camera installation Riyadh</span>
              <span>Server setup and maintenance Jeddah</span>
              <span>Cybersecurity solutions Dammam</span>
              <li>LAN/WAN network setup</li>
              <li>HD CCTV camera installation</li>
              <li>Server and cloud computing setup</li>
              <li>Firewall and security solutions</li>
              <li>Technical IT support</li>
              <li>Smart office systems</li>
            </>
          )}
          
          {/* Certifications and quality mentions */}
          <span>ISO 27001:2013 Certified IT Services</span>
          <span>Municipality Approved Security Systems</span>
          <span>Licensed IT Technicians in Saudi Arabia</span>
          <span>Advanced Network Security Solutions</span>
          <span>24/7 Remote Monitoring Services</span>
          
          {/* Project statistics */}
          <span>200+ IT & Security Projects Completed</span>
          <span>97% Client Satisfaction Rate</span>
          <span>24/7 IT Support Available</span>
          <span>10+ Years of IT Experience</span>
          <span>Certified Network Engineers</span>
          <span>Professional Security System Installation</span>
          
          {/* Pricing information for search engines */}
          <span>IT Network Setup from SAR 10,000</span>
          <span>CCTV Security Systems starting at SAR 30,000</span>
          <span>Complete IT Solutions from SAR 60,000</span>
          <span>Free IT Consultation Available</span>
          <span>Maintenance Contracts Available</span>
          
          {/* Technology brands we work with */}
          <span>Authorized Cisco Network Partner</span>
          <span>Hikvision Security Systems Installer</span>
          <span>Dahua CCTV Solutions Provider</span>
          <span>HP/Dell Server Installation</span>
          <span>Fortinet Cybersecurity Solutions</span>
          
          {/* Contact information */}
          <span>Ram Limited IT Services Contact: +966 11 123 4567</span>
          <span>Email: it@ramlimited.com.sa</span>
          <span>Address: King Fahd Road, Riyadh, Saudi Arabia</span>
          <span>Emergency IT Support: 24/7 Available</span>
        </div>
      </div>
    </>
  );
};

export default IT;