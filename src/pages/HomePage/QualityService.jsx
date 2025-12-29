// src/pages/ServicePage/QualityService.jsx
import React from "react";
import { Helmet } from "react-helmet-async";
import QualityServiceCard from "../../components/Cards/QualityServiceCard";
import { useLanguage } from "../../context/LanguageContext";
import translationsEN from "../../translation/en.json";
import translationsAR from "../../translation/ar.json";

const QualityService = () => {
  const { lang } = useLanguage();
  const isArabic = lang === "ar";
  const translations = isArabic ? translationsAR : translationsEN;

  const pageTitle = isArabic 
    ? "أسعار خدمات الصيانة في السعودية | رام المحدودة" 
    : "Maintenance Service Prices in Saudi Arabia | Ram Limited";
  
  const pageDescription = isArabic
    ? "أسعار شفافة لخدمات الصيانة في السعودية: إصلاحات أساسية، عقود سنوية، حلول مخصصة. خدمة 24/7 في الرياض، جدة، الدمام. ابدأ من 562 ريال."
    : "Transparent maintenance service prices in Saudi Arabia: Basic repairs, annual contracts, custom solutions. 24/7 service in Riyadh, Jeddah, Dammam. Starting from SAR 562.";

  const Plan = [
    {
      title: isArabic ? "إصلاحات أساسية" : "Basic Repairs",
      subtitle: isArabic ? "خدمات صيانة لمرة واحدة" : "One-time maintenance services",
      price: isArabic ? "ابتداءً من 562 ريال" : "Starting at SAR 562",
      features: isArabic
        ? ["إصلاحات كهربائية بسيطة", "تصليحات السباكة", "صيانة أساسية", "خدمة في نفس اليوم"]
        : ["Minor electrical repairs", "Plumbing fixes", "Basic maintenance", "Same-day service"],
      buttonText: isArabic ? "الحصول على عرض" : "Get Quote",
      buttonLink: "/contact",
    },
    {
      title: isArabic ? "عقد سنوي" : "Annual Contract",
      subtitle: isArabic ? "صيانة شاملة سنوية" : "Comprehensive yearly maintenance",
      price: isArabic ? "1,118 ريال / شهر" : "SAR 1,118 / Month",
      features: isArabic
        ? ["تفتيش دوري", "دعم أولوية", "دعم وقائي", "استجابة للطوارئ 24/7"]
        : ["Regular Inspections", "Priority support", "Preventive Support", "24/7 emergency response"],
      buttonText: isArabic ? "ابدأ العقد" : "Start Contract",
      buttonLink: "/contact",
    },
    {
      title: isArabic ? "حلول مخصصة" : "Custom Solutions",
      subtitle: isArabic ? "مصممة وفق احتياجاتك الخاصة" : "Tailored to Your Specific Needs",
      price: isArabic ? "حسب الطلب" : "On Request",
      features: isArabic
        ? ["إدارة المنشآت الكبيرة", "دعم متعدد المواقع", "معدات متخصصة", "فريق مخصص"]
        : ["Large Facility Management", "Multi-Location Support", "Specialized equipment", "Dedicated Team"],
      buttonText: isArabic ? "تواصل معنا" : "Contact Us",
      buttonLink: "/contact",
    },
  ];

  // Calculate total monthly search volume (estimated)
  const searchTerms = isArabic 
    ? ["أسعار صيانة", "عقود صيانة سنوية", "خدمات سباكة", "صيانة كهرباء", "صيانة تكييف"]
    : ["maintenance prices", "annual maintenance contracts", "plumbing services", "electrical maintenance", "AC maintenance"];

  return (
    <>
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        
        {/* Canonical URL */}
        <link rel="canonical" href={typeof window !== 'undefined' ? window.location.origin + "/pricing" : ""} />
        
        {/* Open Graph for pricing page */}
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={typeof window !== 'undefined' ? window.location.origin + "/pricing" : ""} />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDescription} />
        
        {/* Hreflang for language targeting */}
        <link rel="alternate" hrefLang="ar-SA" href={typeof window !== 'undefined' ? window.location.origin + "/pricing?lang=ar" : ""} />
        <link rel="alternate" hrefLang="en-SA" href={typeof window !== 'undefined' ? window.location.origin + "/pricing?lang=en" : ""} />
        
        {/* Language meta */}
        <meta httpEquiv="content-language" content={isArabic ? "ar" : "en"} />
        <meta property="og:locale" content={isArabic ? "ar_SA" : "en_SA"} />
        
        {/* Enhanced Structured Data for Pricing */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "WebPage",
                "name": pageTitle,
                "description": pageDescription,
                "url": typeof window !== 'undefined' ? window.location.origin + "/pricing" : "",
                "primaryImageOfPage": {
                  "@type": "ImageObject",
                  "url": typeof window !== 'undefined' ? `${window.location.origin}/og-pricing.jpg` : "",
                  "width": "1200",
                  "height": "630",
                  "caption": isArabic ? "أسعار خدمات الصيانة في السعودية" : "Maintenance service prices in Saudi Arabia"
                },
                "breadcrumb": {
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
                      "name": isArabic ? "الأسعار" : "Pricing",
                      "item": typeof window !== 'undefined' ? window.location.origin + "/pricing" : ""
                    }
                  ]
                }
              },
              {
                "@type": "Service",
                "serviceType": "Maintenance Services",
                "provider": {
                  "@type": "Organization",
                  "name": "Ram Limited",
                  "legalName": isArabic ? "شركة رام المحدودة" : "Ram Limited Company",
                  "url": typeof window !== 'undefined' ? window.location.origin : "",
                  "logo": typeof window !== 'undefined' ? `${window.location.origin}/logo.png` : "",
                  "foundingDate": "2013",
                  "address": {
                    "@type": "PostalAddress",
                    "addressCountry": "SA",
                    "addressRegion": "Riyadh Province",
                    "addressLocality": "Riyadh"
                  },
                  "contactPoint": {
                    "@type": "ContactPoint",
                    "telephone": "+966-XXXXXXXXXX",
                    "contactType": "customer service",
                    "areaServed": "SA",
                    "availableLanguage": ["Arabic", "English"],
                    "contactOption": "TollFree"
                  }
                },
                "areaServed": {
                  "@type": "GeoShape",
                  "box": "24.5 46.4 25.0 47.0"
                },
                "hasOfferCatalog": {
                  "@type": "OfferCatalog",
                  "name": isArabic ? "باقات خدمات الصيانة" : "Maintenance Service Packages",
                  "description": isArabic 
                    ? "ثلاث باقات مختلفة لخدمات الصيانة في السعودية"
                    : "Three different packages for maintenance services in Saudi Arabia",
                  "numberOfItems": 3,
                  "itemListElement": Plan.map((plan, index) => ({
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": plan.title,
                      "description": plan.subtitle,
                      "serviceOutput": plan.features,
                      "serviceAudience": {
                        "@type": "Audience",
                        "audienceType": plan.title.includes("Basic") ? "Residential" : "Business"
                      }
                    },
                    "priceSpecification": {
                      "@type": "UnitPriceSpecification",
                      "price": plan.title.includes("Basic") ? "562" : (plan.title.includes("Annual") ? "1118" : "0"),
                      "priceCurrency": "SAR",
                      "unitCode": plan.title.includes("Annual") ? "MON" : "HUR",
                      "billingIncrement": plan.title.includes("Annual") ? "1" : "1",
                      "eligibleQuantity": {
                        "@type": "QuantitativeValue",
                        "value": plan.title.includes("Annual") ? "12" : "1"
                      }
                    },
                    "eligibleRegion": {
                      "@type": "Country",
                      "name": "Saudi Arabia"
                    },
                    "availabilityStarts": "2024-01-01",
                    "availabilityEnds": "2025-12-31",
                    "url": typeof window !== 'undefined' ? window.location.origin + plan.buttonLink : ""
                  }))
                },
                "termsOfService": typeof window !== 'undefined' ? window.location.origin + "/terms" : "",
                "serviceOutput": Plan.flatMap(p => p.features),
                "providerMobility": isArabic ? "متنقل" : "Mobile",
                "hoursAvailable": "Mo-Su 00:00-23:59"
              }
            ]
          })}
        </script>
      </Helmet>

      <section
        dir={isArabic ? "rtl" : "ltr"}
        className="w-full py-12 sm:py-16 lg:py-24 bg-white"
        itemScope
        itemType="https://schema.org/Service"
      >
        {/* Schema for WebPage */}
        <div itemScope itemType="https://schema.org/WebPage" className="hidden">
          <meta itemProp="name" content={pageTitle} />
          <meta itemProp="description" content={pageDescription} />
          <meta itemProp="url" content={typeof window !== 'undefined' ? window.location.origin + "/pricing" : ""} />
        </div>

        <header className="w-full max-w-4xl mx-auto flex flex-col gap-4 px-4 text-center">
          <h1 className="font-sans font-bold text-2xl sm:text-3xl lg:text-5xl leading-tight" itemProp="name">
            {isArabic ? "أسعار واضحة" : "Transparent Pricing"}{" "}
            <span className="text-[#023A9A]">
              {isArabic ? "لخدمات الجودة" : "For Quality Service"}
            </span>
          </h1>
          <p className="font-sans text-sm sm:text-base lg:text-lg text-[#737373] leading-relaxed" itemProp="description">
            {isArabic
              ? "نؤمن بالشفافية في التسعير. بالنسبة لمعظم الخدمات، ستجد الأسعار الابتدائية هنا."
              : "We believe in clear, upfront pricing. For most services, you'll find starting prices listed here."}
          </p>
        </header>

        <div className="w-full max-w-7xl mx-auto mt-8 sm:mt-12 px-4">
          {/* GRID: grid-stretch ensures all items in a row have the same height */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch">
            {Plan.map((plan, index) => (
              <div
                key={index}
                className="flex flex-col h-full"
                itemProp="itemListElement"
                itemScope
                itemType="https://schema.org/Offer"
              >
                <meta itemProp="position" content={index + 1} />
                <QualityServiceCard plan={plan} />
              </div>
            ))}
          </div>
        </div>

        {/* Enhanced Hidden SEO Text for Saudi Arabia */}
        <div className="hidden" aria-hidden="true">
          <h2>{isArabic ? "أسعار خدمات الصيانة في المملكة العربية السعودية" : "Maintenance Service Prices in Saudi Arabia"}</h2>
          <p>{isArabic 
            ? "تقدم شركة رام المحدودة أسعاراً شفافة ومنافسة لجميع خدمات الصيانة في المملكة العربية السعودية. تبدأ خدماتنا من 562 ريال سعودي للإصلاحات الأساسية وتشمل إصلاحات كهربائية بسيطة، تصليحات السباكة، صيانة أساسية، وخدمة في نفس اليوم في مدن الرياض، جدة، الدمام."
            : "Ram Limited offers transparent and competitive pricing for all maintenance services in Saudi Arabia. Our services start from SAR 562 for basic repairs and include minor electrical repairs, plumbing fixes, basic maintenance, and same-day service in Riyadh, Jeddah, and Dammam."
          }</p>
          
          <h3>{isArabic ? "عقود الصيانة السنوية (AMC)" : "Annual Maintenance Contracts (AMC)"}</h3>
          <p>{isArabic 
            ? "بالنسبة للعملاء الذين يحتاجون إلى دعم مستمر، نقدم عقود صيانة سنوية تبدأ من 1,118 ريال شهرياً. تشمل العقود السنوية: تفتيش دوري شهري، دعم أولوية، دعم وقائي، واستجابة للطوارئ على مدار الساعة 24/7. تغطي عقودنا جميع مناطق المملكة بما في ذلك الرياض، جدة، الدمام، مكة، المدينة المنورة، والخبر."
            : "For clients needing ongoing support, we offer annual maintenance contracts starting from SAR 1,118 per month. Annual contracts include: monthly regular inspections, priority support, preventive support, and 24/7 emergency response. Our contracts cover all regions of Saudi Arabia including Riyadh, Jeddah, Dammam, Mecca, Medina, and Al Khobar."
          }</p>
          
          <h3>{isArabic ? "حلول مخصصة للمنشآت الكبيرة" : "Custom Solutions for Large Facilities"}</h3>
          <p>{isArabic 
            ? "للمنشآت التجارية الكبيرة، المراكز التجارية، المستشفيات، والمباني الحكومية، نقدم حلولاً مخصصة تشمل: إدارة المنشآت الكبيرة، دعم متعدد المواقع، معدات متخصصة، وفريق مخصص. يتم تسعير هذه الخدمات بناءً على حجم المنشأة واحتياجاتها الخاصة بعد زيارة موقعية وتقييم مفصل."
            : "For large commercial facilities, shopping malls, hospitals, and government buildings, we offer custom solutions including: large facility management, multi-location support, specialized equipment, and dedicated team. These services are priced based on facility size and specific needs after a site visit and detailed assessment."
          }</p>
          
          <h4>{isArabic ? "كيفية طلب الخدمة:" : "How to Request Service:"}</h4>
          <ol>
            <li>{isArabic ? "اختر الباقة المناسبة لك" : "Choose the suitable package for you"}</li>
            <li>{isArabic ? "انقر على زر 'الحصول على عرض'" : "Click on 'Get Quote' button"}</li>
            <li>{isArabic ? "املأ نموذج الطلب" : "Fill out the request form"}</li>
            <li>{isArabic ? "سنقوم بالاتصال بك خلال 2 ساعة عمل" : "We will contact you within 2 business hours"}</li>
            <li>{isArabic ? "نحدد موعد زيارة الموقع" : "We schedule a site visit appointment"}</li>
            <li>{isArabic ? "نقدم لك عرضاً مفصلاً" : "We provide you with a detailed quote"}</li>
          </ol>
          
          <p><strong>{isArabic ? "مزايا التعامل مع رام المحدودة:" : "Advantages of Dealing with Ram Limited:"}</strong></p>
          <ul>
            <li>{isArabic ? "أسعار شفافة بدون رسوم مخفية" : "Transparent pricing with no hidden fees"}</li>
            <li>{isArabic ? "خدمة 24/7 لجميع أنحاء السعودية" : "24/7 service for all of Saudi Arabia"}</li>
            <li>{isArabic ? "فريق معتمد ومدرب" : "Certified and trained team"}</li>
            <li>{isArabic ? "جودة مضمونة وضمان على الخدمة" : "Guaranteed quality and service warranty"}</li>
            <li>{isArabic ? "استجابة سريعة خلال ساعتين" : "Quick response within 2 hours"}</li>
          </ul>
          
          <p>{isArabic 
            ? "للاستفسارات أو للحصول على عرض سعر مخصص، اتصل بنا على: +966-XXXXXXXXXX أو قم بزيارة صفحة الاتصال."
            : "For inquiries or to get a custom quote, contact us at: +966-XXXXXXXXXX or visit the contact page."
          }</p>
        </div>
      </section>
    </>
  );
};

export default QualityService;