import React from 'react';
import { Helmet } from 'react-helmet-async';
import Cover from './Cover';
import OurSimpleProcess from './OurSimpleProcess';
import QualityService from './QualityService';
import OurWork from './OurWork';
import Testimonials from './Testimonials';
import ContactSection from '../ContactPage/ContactSection';
import About from '../AboutPage/About';
import OurService from '../ServicePage/OurService';
import { useLanguage } from '../../context/LanguageContext';

const Home = () => {
  const { lang } = useLanguage();
  const isArabic = lang === 'ar';

  // UPDATED: Comprehensive maintenance services SEO
  const pageTitle = isArabic 
    ? "رام المحدودة | خدمات الصيانة الشاملة في السعودية - تكييف، دهان، صيانة عامة" 
    : "Ram Limited | Comprehensive Maintenance Services in Saudi Arabia - AC, Painting, General Maintenance";
  
  const pageDescription = isArabic
    ? "شركة متكاملة لجميع خدمات الصيانة في السعودية: صيانة تكييف، خدمات دهان، صيانة كهربائية، سباكة، وصيانة عامة. فريق معتمد وخدمة 24/7 في الرياض وجدة والدمام."
    : "Complete maintenance services company in Saudi Arabia: AC maintenance, painting services, electrical, plumbing & general maintenance. Certified team & 24/7 service in Riyadh, Jeddah, Dammam.";
  
  const keywords = isArabic
    ? "شركة صيانة, خدمات صيانة, صيانة منازل, صيانة تكييف, خدمات دهان, صيانة كهربائية, سباكة, صيانة مباني, شركة صيانة الرياض, شركة صيانة جدة"
    : "maintenance company, maintenance services, home maintenance, AC maintenance, painting services, electrical maintenance, plumbing, building maintenance, Riyadh maintenance company, Jeddah maintenance";

  return (
    <>
      <Helmet>
        {/* Primary Arabic Title for Saudi market - MAINTENANCE FOCUS */}
        <title lang="ar">{pageTitle}</title>
        
        {/* English alternative title */}
        <title lang="en">{pageTitle}</title>
        
        {/* Meta Description */}
        <meta name="description" content={pageDescription} />
        
        {/* Keywords - BROAD MAINTENANCE */}
        <meta name="keywords" content={keywords} />
        
        {/* Canonical URL */}
        <link rel="canonical" href={typeof window !== 'undefined' ? window.location.origin : ""} />
        
        {/* Hreflang for multilingual targeting - Saudi Arabia focus */}
        <link rel="alternate" hrefLang="ar-SA" href={typeof window !== 'undefined' ? window.location.origin + "?lang=ar" : ""} />
        <link rel="alternate" hrefLang="en-SA" href={typeof window !== 'undefined' ? window.location.origin + "?lang=en" : ""} />
        <link rel="alternate" hrefLang="x-default" href={typeof window !== 'undefined' ? window.location.origin : ""} />
        
        {/* Language and Locale */}
        <meta httpEquiv="content-language" content={isArabic ? "ar" : "en"} />
        <meta property="og:locale" content={isArabic ? "ar_SA" : "en_SA"} />
        
        {/* Open Graph Tags for Social Sharing */}
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={typeof window !== 'undefined' ? window.location.origin : ""} />
        <meta property="og:site_name" content="Ram Limited" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDescription} />
        
        {/* UPDATED: Saudi Maintenance Company Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "HomeAndConstructionBusiness",
                "name": "Ram Limited",
                "legalName": isArabic ? "شركة رام المحدودة للمقاولات والصيانة" : "Ram Limited Contracting & Maintenance Company",
                "description": isArabic 
                  ? "شركة متخصصة في جميع خدمات الصيانة والمقاولات في المملكة العربية السعودية"
                  : "Specialized company in all maintenance and contracting services in Saudi Arabia",
                "url": typeof window !== 'undefined' ? window.location.origin : "",
                "telephone": "+966-XXXXXXXXXX",
                "address": {
                  "@type": "PostalAddress",
                  "addressCountry": "SA",
                  "addressRegion": "Riyadh Province",
                  "addressLocality": "Riyadh",
                  "streetAddress": isArabic ? "الرياض، المملكة العربية السعودية" : "Riyadh, Saudi Arabia"
                },
                "geo": {
                  "@type": "GeoCoordinates",
                  "latitude": "24.7136",
                  "longitude": "46.6753"
                },
                "openingHours": [
                  "Mo-Su 00:00-23:59" // 24/7 emergency maintenance service
                ],
                "serviceArea": {
                  "@type": "GeoCircle",
                  "geoMidpoint": {
                    "@type": "GeoCoordinates",
                    "latitude": "24.7136",
                    "longitude": "46.6753"
                  },
                  "geoRadius": "200000" // 200km radius service area
                },
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
                  },
                  {
                    "@type": "City", 
                    "name": "Mecca"
                  },
                  {
                    "@type": "City",
                    "name": "Medina"
                  }
                ],
                "knowsLanguage": ["ar", "en"],
                "services": [
                  {
                    "@type": "Service",
                    "name": isArabic ? "صيانة التكييف والتبريد" : "AC & Cooling Maintenance",
                    "description": isArabic ? "صيانة وإصلاح جميع أنواع أجهزة التكييف" : "Maintenance and repair of all types of AC units"
                  },
                  {
                    "@type": "Service", 
                    "name": isArabic ? "خدمات الدهان والطلاء" : "Painting Services",
                    "description": isArabic ? "دهان داخلي وخارجي بجودة عالية" : "Interior and exterior painting with high quality"
                  },
                  {
                    "@type": "Service",
                    "name": isArabic ? "الصيانة الكهربائية" : "Electrical Maintenance",
                    "description": isArabic ? "إصلاح وتركيب الأنظمة الكهربائية" : "Repair and installation of electrical systems"
                  },
                  {
                    "@type": "Service",
                    "name": isArabic ? "خدمات السباكة" : "Plumbing Services",
                    "description": isArabic ? "إصلاح تسربات المياه وتركيب السباكة" : "Water leak repairs and plumbing installation"
                  },
                  {
                    "@type": "Service",
                    "name": isArabic ? "الصيانة العامة للمباني" : "General Building Maintenance",
                    "description": isArabic ? "صيانة شاملة للمباني والمنشآت" : "Comprehensive maintenance for buildings and facilities"
                  }
                ],
                "makesOffer": [
                  {
                    "@type": "Offer",
                    "name": isArabic ? "خدمة الطوارئ 24/7" : "24/7 Emergency Service",
                    "description": isArabic ? "خدمة صيانة طارئة على مدار الساعة" : "Emergency maintenance service 24/7"
                  },
                  {
                    "@type": "Offer",
                    "name": isArabic ? "خطة الصيانة السنوية" : "Annual Maintenance Plan",
                    "description": isArabic ? "خطط صيانة وقائية سنوية" : "Annual preventive maintenance plans"
                  }
                ]
              },
              {
                "@type": "BreadcrumbList",
                "itemListElement": [
                  {
                    "@type": "ListItem",
                    "position": 1,
                    "name": isArabic ? "الرئيسية" : "Home",
                    "item": typeof window !== 'undefined' ? window.location.origin : ""
                  }
                ]
              }
            ]
          })}
        </script>
      </Helmet>

      <div dir={isArabic ? 'rtl' : 'ltr'} className="overflow-x-hidden">
        {/* Each component should internally use translations */}
        <Cover />
        <About />
        <OurService />
        <OurSimpleProcess />
        <QualityService />
        <OurWork />
        <Testimonials />
        <ContactSection />
      </div>
    </>
  );
};

export default Home;