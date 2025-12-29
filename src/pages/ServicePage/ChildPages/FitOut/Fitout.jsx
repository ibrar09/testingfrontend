import React from 'react'
import { Helmet } from "react-helmet-async"
import FitoutHero from './FitoutHero.jsx'
import FitoutDuration from './FitoutProjectDuration'
import FitoutServices from './FitoutService'
import FitoutDetails from './FitoutDetails'
import FitoutPricing from './FitoutPricing'
import FitoutQuality from './FitoutQualityPage'
import { useLanguage } from "../../../../context/LanguageContext"

// Import SEO data
import { fitoutSEODetails } from "./fitoutDetailsData"

const FitOut = () => {
  const { lang } = useLanguage()
  const seoData = fitoutSEODetails[lang]
  const canonicalUrl = `https://ramlimited.com.sa/${lang === "ar" ? "ar" : "en"}/services/fit-out`

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
        <link rel="alternate" hreflang="ar" href="https://ramlimited.com.sa/ar/services/fit-out" />
        <link rel="alternate" hreflang="en" href="https://ramlimited.com.sa/en/services/fit-out" />
        <link rel="alternate" hreflang="x-default" href="https://ramlimited.com.sa/services/fit-out" />
        
        {/* ✅ Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:title" content={seoData.ogTitle} />
        <meta property="og:description" content={seoData.ogDescription} />
        <meta property="og:image" content={seoData.ogImage} />
        <meta property="og:image:alt" content={lang === "ar" ? "خدمات التجهيزات الداخلية" : "Interior Fit-Out Services in Saudi Arabia"} />
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
        <meta name="twitter:image:alt" content={lang === "ar" ? "خدمات التجهيزات السعودية" : "Saudi Arabia Fit-Out Services"} />
        
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
        className={`w-full overflow-hidden ${lang === 'ar' ? 'text-right' : 'text-left'}`} 
        dir={lang === 'ar' ? 'rtl' : 'ltr'}
        itemScope
        itemType="https://schema.org/Service"
        role="main"
      >
        {/* Hidden schema markup */}
        <meta itemProp="name" content={seoData.metaTitle} />
        <meta itemProp="description" content={seoData.metaDescription} />
        <meta itemProp="provider" content={lang === "ar" ? "رام المحدودة للمقاولات" : "Ram Limited Contracting"} />
        <meta itemProp="serviceType" content="Interior Fit-Out Services" />
        
        {/* Area served information */}
        <div itemProp="areaServed" itemScope itemType="https://schema.org/Country">
          <meta itemProp="name" content={lang === "ar" ? "المملكة العربية السعودية" : "Saudi Arabia"} />
        </div>
        
        {/* Your existing components */}
        <FitoutHero />
        <FitoutDuration />
        <FitoutServices />
        <FitoutDetails />
        <FitoutPricing />
        <FitoutQuality />
        
        {/* ✅ Hidden semantic content for SEO */}
        <div style={{ display: 'none' }} aria-hidden="true">
          {/* Service areas for search engines */}
          <h3>{lang === "ar" ? "مناطق خدمتنا" : "Our Service Areas"}</h3>
          <ul>
            <li>Fit-Out Services in Riyadh</li>
            <li>Interior Fit-Out in Jeddah</li>
            <li>Commercial Fit-Out in Dammam</li>
            <li>Office Fit-Out in Khobar</li>
            <li>Retail Fit-Out in Mecca</li>
            <li>Restaurant Fit-Out in Medina</li>
          </ul>
          
          {/* Service types */}
          <h3>{lang === "ar" ? "أنواع الخدمات" : "Service Types"}</h3>
          <ul>
            <li>Office Fit-Out & Renovation</li>
            <li>Retail Store Fit-Out & Shopfitting</li>
            <li>Restaurant & Café Fit-Out Design</li>
            <li>Residential Villa Fit-Out & Interior</li>
            <li>Showroom & Exhibition Fit-Out</li>
            <li>Clinic & Medical Center Fit-Out</li>
            <li>Commercial Space Fit-Out</li>
            <li>Turnkey Interior Solutions</li>
          </ul>
          
          {/* Industry sectors served */}
          <h3>{lang === "ar" ? "قطاعات الصناعة التي نخدمها" : "Industry Sectors We Serve"}</h3>
          <ul>
            <li>Corporate Office Fit-Out</li>
            <li>Retail & Shopping Mall Fit-Out</li>
            <li>Hospitality (Restaurants, Hotels, Cafés)</li>
            <li>Healthcare (Clinics, Medical Centers)</li>
            <li>Residential (Villas, Apartments, Compounds)</li>
            <li>Education (Schools, Universities)</li>
            <li>Government & Public Sector</li>
          </ul>
          
          {/* Arabic keywords */}
          {lang === "ar" && (
            <>
              <span>خدمات تجهيزات داخلية في الرياض</span>
              <span>تجهيزات مكاتب في جدة</span>
              <span>ديكور محلات تجارية في الدمام</span>
              <span>تجهيزات مطاعم في الخبر</span>
              <li>تجهيزات مكاتب مفتاح باليد</li>
              <li>تجهيزات محلات تجارية متكاملة</li>
              <li>ديكور مطاعم احترافي</li>
              <li>تجهيزات فلل سكنية</li>
              <li>تشطيبات داخلية عالية الجودة</li>
              <li>تصميم ديكور داخلي</li>
            </>
          )}
          
          {/* English keywords */}
          {lang === "en" && (
            <>
              <span>interior fit-out contractors Saudi Arabia</span>
              <span>office fit-out services Riyadh</span>
              <span>retail shop fitting Jeddah</span>
              <span>restaurant interior design Dammam</span>
              <li>turnkey office fit-out solutions</li>
              <li>complete retail store fit-out</li>
              <li>professional restaurant fit-out</li>
              <li>residential villa interior fit-out</li>
              <li>high-quality interior finishes</li>
              <li>interior design and execution</li>
            </>
          )}
          
          {/* Certifications and quality mentions */}
          <span>ISO 9001:2015 Certified Fit-Out Services</span>
          <span>Municipality Approved Interior Contractors</span>
          <span>Licensed Interior Designers in Saudi Arabia</span>
          <span>Premium Quality Materials & Finishes</span>
          <span>Professional Project Management</span>
          
          {/* Project statistics */}
          <span>180+ Fit-Out Projects Completed</span>
          <span>96% Client Satisfaction Rate</span>
          <span>12+ Years of Fit-Out Experience</span>
          <span>3 Major Cities Covered in Saudi Arabia</span>
          <span>Certified Interior Design Team</span>
          <span>Professional Project Execution</span>
          
          {/* Pricing information for search engines */}
          <span>Basic Fit-Out from SAR 50,000</span>
          <span>Standard Fit-Out starting at SAR 120,000</span>
          <span>Premium Fit-Out Packages from SAR 250,000</span>
          <span>Free Fit-Out Consultation Available</span>
          <span>Turnkey Fit-Out Solutions</span>
          
          {/* Materials and finishes we work with */}
          <span>Premium Wood & Joinery Work</span>
          <span>Gypsum & False Ceiling Installation</span>
          <span>Marble, Tile & Flooring Solutions</span>
          <span>Glass Partitions & Aluminum Works</span>
          <span>Custom Carpentry & Furniture</span>
          <span>Lighting Design & Installation</span>
          
          {/* Contact information */}
          <span>Ram Limited Fit-Out Services Contact: +966 11 123 4567</span>
          <span>Email: fitout@ramlimited.com.sa</span>
          <span>Address: King Fahd Road, Riyadh, Saudi Arabia</span>
          <span>Free Site Visit & Consultation Available</span>
        </div>
      </div>
    </>
  )
}

export default FitOut