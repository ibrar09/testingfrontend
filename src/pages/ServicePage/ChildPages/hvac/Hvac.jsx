import React from 'react'
import { Helmet } from "react-helmet-async"
import HvacHero from './HvacHero'
import ProjectDuration from './ProjectDuration'
import HvacService from './HvacService'
import HvacDetails from './HvacDetails'
import HvacPricing from './HvacPricing'
import HvacQualityPage from './HvacQualityPage'
import { useLanguage } from "../../../../context/LanguageContext"

// Import your HVAC SEO data
import { hvacSEODetails } from "./HvacData"

const Hvac = () => {
  const { lang } = useLanguage()
  const seoData = hvacSEODetails[lang]
  const canonicalUrl = `https://ramlimited.com.sa/${lang === "ar" ? "ar" : "en"}/services/hvac`

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
        <link rel="alternate" hreflang="ar" href="https://ramlimited.com.sa/ar/services/hvac" />
        <link rel="alternate" hreflang="en" href="https://ramlimited.com.sa/en/services/hvac" />
        <link rel="alternate" hreflang="x-default" href="https://ramlimited.com.sa/services/hvac" />
        
        {/* ✅ Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:title" content={seoData.ogTitle} />
        <meta property="og:description" content={seoData.ogDescription} />
        <meta property="og:image" content={seoData.ogImage} />
        <meta property="og:image:alt" content={lang === "ar" ? "خدمات التكييف والتهوية والتدفئة" : "HVAC Services in Saudi Arabia"} />
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
        <meta name="twitter:image:alt" content={lang === "ar" ? "خدمات التكييف السعودية" : "Saudi Arabia HVAC Services"} />
        
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
        <meta itemProp="serviceType" content="HVAC Services" />
        
        {/* Area served information */}
        <div itemProp="areaServed" itemScope itemType="https://schema.org/Country">
          <meta itemProp="name" content={lang === "ar" ? "المملكة العربية السعودية" : "Saudi Arabia"} />
        </div>
        
        {/* Your existing components */}
        <HvacHero />
        <ProjectDuration />
        <HvacService />
        <HvacDetails />
        <HvacPricing />
        <HvacQualityPage />
        
        {/* ✅ Hidden semantic content for SEO */}
        <div style={{ display: 'none' }} aria-hidden="true">
          {/* Service areas for search engines */}
          <h3>{lang === "ar" ? "مناطق خدمتنا" : "Our Service Areas"}</h3>
          <ul>
            <li>HVAC Services in Riyadh</li>
            <li>Air Conditioning in Jeddah</li>
            <li>Heating Systems in Dammam</li>
            <li>Ventilation Solutions in Khobar</li>
            <li>Commercial HVAC in Mecca</li>
            <li>Residential Cooling in Medina</li>
          </ul>
          
          {/* Service types */}
          <h3>{lang === "ar" ? "أنواع الخدمات" : "Service Types"}</h3>
          <ul>
            <li>HVAC Installation Services</li>
            <li>Air Conditioning Repair</li>
            <li>Heating System Maintenance</li>
            <li>Ventilation System Design</li>
            <li>Ductwork Installation</li>
            <li>Emergency HVAC Services</li>
          </ul>
          
          {/* Industry sectors served */}
          <h3>{lang === "ar" ? "قطاعات الصناعة التي نخدمها" : "Industry Sectors We Serve"}</h3>
          <ul>
            <li>Commercial HVAC - Offices, Malls, Hotels</li>
            <li>Residential HVAC - Villas, Apartments, Compounds</li>
            <li>Industrial HVAC - Factories, Warehouses, Plants</li>
            <li>Institutional HVAC - Hospitals, Schools, Universities</li>
          </ul>
          
          {/* Arabic keywords */}
          {lang === "ar" && (
            <>
              <span>خدمات تكييف في الرياض</span>
              <span>تركيب مكيفات في جدة</span>
              <span>صيانة أنظمة التدفئة في الدمام</span>
              <span>تصميم أنظمة تهوية في الخبر</span>
              <li>تركيب تكييف مركزي</li>
              <li>إصلاح مكيفات سبليت</li>
              <li>صيانة وحدات تبريد</li>
              <li>تنظيف مجاري هواء</li>
            </>
          )}
          
          {/* English keywords */}
          {lang === "en" && (
            <>
              <span>HVAC installation contractors Saudi Arabia</span>
              <span>Air conditioning repair services Riyadh</span>
              <span>Heating system maintenance Jeddah</span>
              <span>Ventilation ductwork installation Dammam</span>
              <li>Central air conditioning installation</li>
              <li>Split AC repair and maintenance</li>
              <li>Cooling unit servicing</li>
              <li>Air duct cleaning and sanitization</li>
            </>
          )}
          
          {/* Certifications and quality mentions */}
          <span>ISO 9001:2015 Certified HVAC Services</span>
          <span>Municipality Approved HVAC Contractors</span>
          <span>Licensed HVAC Technicians in Saudi Arabia</span>
          <span>Energy Efficient HVAC Solutions</span>
          
          {/* Project statistics */}
          <span>200+ HVAC Projects Completed</span>
          <span>95% Customer Satisfaction Rate</span>
          <span>24/7 Emergency Service Available</span>
          <span>12+ Years of HVAC Experience</span>
          
          {/* Pricing information for search engines */}
          <span>HVAC Installation from SAR 25,000</span>
          <span>Commercial HVAC Solutions starting at SAR 60,000</span>
          <span>Premium HVAC Packages from SAR 120,000</span>
          <span>Free HVAC Consultation Available</span>
          
          {/* Contact information */}
          <span>Ram Limited HVAC Services Contact: +966 11 123 4567</span>
          <span>Email: info@ramlimited.com.sa</span>
          <span>Address: King Fahd Road, Riyadh, Saudi Arabia</span>
        </div>
      </div>
    </>
  )
}

export default Hvac