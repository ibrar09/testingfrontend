// src/pages/ServicePage/ChildPages/Carpentry/Carpentry.jsx
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLanguage } from '../../../../context/LanguageContext';
import CarpentryHero from './CarpentryHero';
import CarpentryProjectDuration from './CarpentryProjectDuration';
import CarpentryService from './CarpentryService';
import CarpentryDetails from './CarpentryDetails';
import CarpentryPricing from './CarpentryPricing';
import CarpentryQualityPage from './CarpentryQualityPage';

// Import SEO data
import { carpentrySEODetails } from './carpentryDetailsData';

const Carpentry = () => {
  const { lang } = useLanguage();
  const seoData = carpentrySEODetails[lang];
  const canonicalUrl = `https://ramlimited.com.sa/${lang === "ar" ? "ar" : "en"}/services/carpentry`;

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
        <link rel="alternate" hreflang="ar" href="https://ramlimited.com.sa/ar/services/carpentry" />
        <link rel="alternate" hreflang="en" href="https://ramlimited.com.sa/en/services/carpentry" />
        <link rel="alternate" hreflang="x-default" href="https://ramlimited.com.sa/services/carpentry" />
        
        {/* ✅ Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:title" content={seoData.ogTitle} />
        <meta property="og:description" content={seoData.ogDescription} />
        <meta property="og:image" content={seoData.ogImage} />
        <meta property="og:image:alt" content={lang === "ar" ? "خدمات النجارة" : "Carpentry Services in Saudi Arabia"} />
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
        <meta name="twitter:image:alt" content={lang === "ar" ? "خدمات النجارة السعودية" : "Saudi Arabia Carpentry Services"} />
        
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
        <meta itemProp="serviceType" content="Carpentry Services" />
        
        {/* Area served information */}
        <div itemProp="areaServed" itemScope itemType="https://schema.org/Country">
          <meta itemProp="name" content={lang === "ar" ? "المملكة العربية السعودية" : "Saudi Arabia"} />
        </div>
        
        {/* Pass lang to all child components */}
        <CarpentryHero lang={lang} />
        <CarpentryProjectDuration lang={lang} />
        <CarpentryService lang={lang} />
        <CarpentryDetails lang={lang} />
        <CarpentryPricing lang={lang} />
        <CarpentryQualityPage lang={lang} />
        
        {/* ✅ Hidden semantic content for SEO */}
        <div style={{ display: 'none' }} aria-hidden="true">
          {/* Service areas for search engines */}
          <h3>{lang === "ar" ? "مناطق خدمتنا" : "Our Service Areas"}</h3>
          <ul>
            <li>Carpentry Services in Riyadh</li>
            <li>Custom Furniture in Jeddah</li>
            <li>Cabinet Making in Dammam</li>
            <li>Woodwork Services in Khobar</li>
            <li>Joinery Solutions in Mecca</li>
            <li>Furniture Repair in Medina</li>
          </ul>
          
          {/* Service types */}
          <h3>{lang === "ar" ? "أنواع الخدمات" : "Service Types"}</h3>
          <ul>
            <li>Custom Furniture Making & Design</li>
            <li>Cabinet Installation & Manufacturing</li>
            <li>Decorative Woodwork & Carvings</li>
            <li>Wood Repair & Restoration</li>
            <li>Custom Joinery Solutions</li>
            <li>Furniture Assembly & Installation</li>
            <li>Wooden Partition & Panel Installation</li>
            <li>Commercial & Residential Carpentry</li>
          </ul>
          
          {/* Wood types we work with */}
          <h3>{lang === "ar" ? "أنواع الأخشاب التي نعمل بها" : "Wood Types We Work With"}</h3>
          <ul>
            <li>Teak Wood Carpentry</li>
            <li>Oak Wood Furniture</li>
            <li>Mahogany Woodwork</li>
            <li>Walnut Cabinetry</li>
            <li>Pine Wood Solutions</li>
            <li>MDF & Plywood Works</li>
            <li>Engineered Wood Products</li>
            <li>High-Quality Laminates</li>
          </ul>
          
          {/* Arabic keywords */}
          {lang === "ar" && (
            <>
              <span>خدمات نجارة في الرياض</span>
              <span>أثاث مخصص في جدة</span>
              <span>صناعة خزائن في الدمام</span>
              <span>أعمال خشبية في الخبر</span>
              <li>نجارة خشب الساج</li>
              <li>أثاث خشب البلوط</li>
              <li>خزائن خشب الجوز</li>
              <li>أعمال خشب الصنوبر</li>
              <li>تركيب ألواح MDF</li>
              <li>تنجيد أثاث خشبي</li>
              <li>تركيب أرفف خشبية</li>
              <li>تصميم مطابخ خشبية</li>
            </>
          )}
          
          {/* English keywords */}
          {lang === "en" && (
            <>
              <span>carpentry contractors Saudi Arabia</span>
              <span>custom furniture makers Riyadh</span>
              <span>cabinet installation Jeddah</span>
              <span>woodwork services Dammam</span>
              <li>teak wood carpentry</li>
              <li>oak wood furniture making</li>
              <li>walnut cabinet installation</li>
              <li>pine wood joinery</li>
              <li>MDF panel installation</li>
              <li>wood furniture upholstery</li>
              <li>wooden shelf installation</li>
              <li>wooden kitchen design</li>
            </>
          )}
          
          {/* Certifications and quality mentions */}
          <span>ISO 9001:2015 Certified Carpentry Services</span>
          <span>Municipality Approved Carpenters in Saudi Arabia</span>
          <span>Licensed Carpentry Contractors</span>
          <span>Premium Quality Wood & Materials</span>
          <span>Professional Woodwork Craftsmanship</span>
          
          {/* Project statistics */}
          <span>120+ Carpentry Projects Completed</span>
          <span>95% Client Satisfaction Rate</span>
          <span>15+ Years of Carpentry Experience</span>
          <span>24/7 Emergency Repair Services</span>
          <span>Certified Carpenters Team</span>
          <span>Professional Furniture Making</span>
          
          {/* Pricing information for search engines */}
          <span>Basic Carpentry from SAR 10,000</span>
          <span>Custom Furniture starting at SAR 30,000</span>
          <span>Premium Carpentry Packages from SAR 70,000</span>
          <span>Free Carpentry Consultation Available</span>
          <span>Cabinet Installation Services</span>
          
          {/* Materials and tools we use */}
          <span>Premium Imported Woods</span>
          <span>High-Quality Wood Finishes</span>
          <span>Professional Woodworking Tools</span>
          <span>CNC Wood Cutting Technology</span>
          <span>Wood Polishing & Finishing Systems</span>
          <span>Custom Hardware & Fittings</span>
          
          {/* Contact information */}
          <span>Ram Limited Carpentry Services Contact: +966 11 123 4567</span>
          <span>Email: carpentry@ramlimited.com.sa</span>
          <span>Address: King Fahd Road, Riyadh, Saudi Arabia</span>
          <span>Free Site Measurement & Consultation</span>
        </div>
      </div>
    </>
  );
};

export default Carpentry;