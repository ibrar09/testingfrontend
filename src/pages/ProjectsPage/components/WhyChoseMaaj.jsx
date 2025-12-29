import React from "react";
import { CheckCircle, Trophy, Users, Clock } from "lucide-react";
import { useLanguage } from "../../../context/LanguageContext"; // adjust path
import { Helmet } from "react-helmet-async";

const WhyChooseRamLimited = () => {
  const { lang } = useLanguage();

  // --- Step Data with Bilingual Support ---
  const steps = [
    {
      icon: CheckCircle,
      title: lang === "ar" ? "معتمد ISO 9001:2015" : "ISO 9001:2015 Certified",
      subtitle:
        lang === "ar" ? "معايير الجودة الدولية" : "International quality standards",
    },
    {
      icon: Trophy,
      title: lang === "ar" ? "مشاريع حائزة على جوائز" : "Award-Winning Projects",
      subtitle: lang === "ar" ? "الاعتراف بالتميز" : "Recognition for excellence",
    },
    {
      icon: Users,
      title: lang === "ar" ? "فرق خبراء" : "Expert Teams",
      subtitle:
        lang === "ar" ? "أكثر من 80 متخصص مهني" : "80+ skilled professionals",
    },
    {
      icon: Clock,
      title: lang === "ar" ? "التسليم في الوقت المحدد" : "On-Time Delivery",
      subtitle: lang === "ar" ? "إكمال المشاريع بانتظام" : "Consistent project completion",
    },
  ];

  // --- Single Column Item ---
  const ColumnItem = ({ icon: Icon, title, subtitle }) => (
    <div className="flex flex-col items-center text-center px-3 sm:px-6 lg:px-8 max-w-xs">
      <div className="p-4 sm:p-5 rounded-full bg-[#1392E0] text-white shadow-lg flex items-center justify-center mb-4 sm:mb-6 transition-transform duration-300 hover:scale-110">
        <Icon className="w-8 h-8 sm:w-10 sm:h-10" />
      </div>
      <h3 className="text-base sm:text-lg md:text-xl font-semibold text-gray-800 mb-1">
        {title}
      </h3>
      <p className="text-sm sm:text-base text-gray-600 leading-snug">{subtitle}</p>
    </div>
  );

  // --- Heading Text ---
  const headingText =
    lang === "ar"
      ? "لماذا تختار رام المحدودة لمشروعك التالي؟"
      : "Why Choose Ram Limited for Your Next Project?";

  // --- SEO Content ---
  const seoContent = {
    en: {
      title: "Why Choose Ram Limited Contracting | Top Construction Company in Saudi Arabia",
      description: "Choose Ram Limited for ISO 9001 certified construction, award-winning projects, expert teams, and on-time delivery in Saudi Arabia.",
      keywords: "construction company Saudi Arabia, ISO certified contractors, award-winning construction, expert construction teams, on-time project delivery Riyadh",
      ogTitle: "Why Choose Ram Limited - Premier Construction Services in KSA",
      ogDescription: "ISO certified, award-winning construction company in Saudi Arabia with expert teams and guaranteed on-time delivery",
      jsonLd: {
        "@context": "https://schema.org",
        "@type": "Service",
        "serviceType": "Construction Services",
        "provider": {
          "@type": "Organization",
          "name": "Ram Limited Contracting",
          "description": "Premier construction and contracting company in Saudi Arabia",
          "address": {
            "@type": "PostalAddress",
            "addressCountry": "SA",
            "addressRegion": "Riyadh Province"
          },
          "award": "Award-Winning Projects",
          "employee": {
            "@type": "Person",
            "name": "Professional Construction Team",
            "description": "80+ skilled construction professionals"
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
                "name": "ISO 9001:2015 Certified Construction"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Award-Winning Project Management"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Expert Construction Teams"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Guaranteed On-Time Delivery"
              }
            }
          ]
        }
      }
    },
    ar: {
      title: "لماذا تختار رام المحدودة للمقاولات | أفضل شركة بناء في السعودية",
      description: "اختر رام المحدودة للبناء المعتمد بـ ISO 9001، المشاريع الحائزة على جوائز، فرق الخبراء، والتسليم في الوقت المحدد في السعودية.",
      keywords: "شركة بناء السعودية, مقاولون معتمدون ISO, بناء حائز على جوائز, فرق بناء خبراء, تسليم المشاريع في الوقت المحدد الرياض",
      ogTitle: "لماذا تختار رام المحدودة - خدمات البناء الرائدة في المملكة",
      ogDescription: "شركة بناء معتمدة ISO وحائزة على جوائز في السعودية مع فرق خبراء وضمان التسليم في الوقت المحدد",
      jsonLd: {
        "@context": "https://schema.org/ar",
        "@type": "Service",
        "serviceType": "خدمات البناء",
        "provider": {
          "@type": "Organization",
          "name": "رام المحدودة للمقاولات",
          "description": "شركة البناء والمقاولات الرائدة في السعودية",
          "address": {
            "@type": "PostalAddress",
            "addressCountry": "SA",
            "addressRegion": "منطقة الرياض"
          },
          "award": "مشاريع حائزة على جوائز",
          "employee": {
            "@type": "Person",
            "name": "فريق البناء المحترف",
            "description": "أكثر من 80 متخصص بناء محترف"
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
                "name": "بناء معتمد ISO 9001:2015"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "إدارة مشاريع حائزة على جوائز"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "فرق بناء خبراء"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "ضمان التسليم في الوقت المحدد"
              }
            }
          ]
        }
      }
    }
  };

  // Canonical URL for this section
  const canonicalUrl = `https://ramlimited.com.sa/${lang === "ar" ? "ar" : "en"}/why-choose-us`;

  return (
    <>
      {/* --- COMPREHENSIVE SEO META TAGS --- */}
      <Helmet>
        {/* Primary Meta Tags */}
        <title>{seoContent[lang].title}</title>
        <meta name="description" content={seoContent[lang].description} />
        <meta name="keywords" content={seoContent[lang].keywords} />
        
        {/* Geographic Targeting */}
        <meta name="geo.region" content="SA" />
        <meta name="geo.placename" content={lang === "ar" ? "الرياض" : "Riyadh"} />
        
        {/* Language & Locale */}
        {lang === "ar" ? (
          <>
            <meta name="language" content="Arabic" />
            <meta httpEquiv="content-language" content="ar-SA" />
            <meta property="og:locale" content="ar_SA" />
          </>
        ) : (
          <>
            <meta name="language" content="English" />
            <meta httpEquiv="content-language" content="en-SA" />
            <meta property="og:locale" content="en_SA" />
          </>
        )}
        
        {/* Canonical URL */}
        <link rel="canonical" href={canonicalUrl} />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:title" content={seoContent[lang].ogTitle} />
        <meta property="og:description" content={seoContent[lang].ogDescription} />
        <meta property="og:image" content="https://ramlimited.com.sa/images/why-choose-us-og.jpg" />
        <meta property="og:image:alt" content={lang === "ar" ? "مزايا رام المحدودة" : "Ram Limited Advantages"} />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={seoContent[lang].ogTitle} />
        <meta name="twitter:description" content={seoContent[lang].ogDescription} />
        
        {/* Structured Data - JSON-LD */}
        <script type="application/ld+json">
          {JSON.stringify(seoContent[lang].jsonLd)}
        </script>
        
        {/* Additional Service Schema for each advantage */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            "itemListElement": steps.map((step, index) => ({
              "@type": "ListItem",
              "position": index + 1,
              "item": {
                "@type": "Service",
                "name": step.title,
                "description": step.subtitle,
                "provider": {
                  "@type": "Organization",
                  "name": "Ram Limited Contracting",
                  "address": {
                    "@type": "PostalAddress",
                    "addressCountry": "SA"
                  }
                }
              }
            }))
          })}
        </script>
      </Helmet>

      <section
        className="bg-white py-12 sm:py-16 md:py-20 lg:py-24"
        dir={lang === "ar" ? "rtl" : "ltr"}
        itemScope
        itemType="https://schema.org/Service"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Top decorative line */}
          <div className="border-t-4 border-[#1392E0] w-16 sm:w-20 lg:w-24 mx-auto mb-10 sm:mb-12"></div>

          {/* Heading with Schema markup */}
          <h1 
            className="w-full font-sans font-bold text-center text-gray-900 mb-10 sm:mb-16 leading-tight text-2xl sm:text-3xl md:text-4xl lg:text-[48px] lg:leading-[48px]"
            itemProp="name"
          >
            {headingText}
          </h1>

          {/* Steps Grid with Schema markup */}
          <div 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-10 sm:gap-y-12 gap-x-6 justify-items-center"
            itemScope
            itemProp="hasOfferCatalog"
            itemType="https://schema.org/OfferCatalog"
          >
            {steps.map((step, index) => (
              <div 
                key={index} 
                itemScope
                itemProp="itemListElement"
                itemType="https://schema.org/Offer"
                className="w-full"
              >
                <meta itemProp="position" content={index + 1} />
                <ColumnItem {...step} />
              </div>
            ))}
          </div>

          {/* Bottom decorative line */}
          <div className="border-b-4 border-[#1392E0] w-16 sm:w-20 lg:w-24 mx-auto mt-12 sm:mt-16"></div>
        </div>
        
        {/* Hidden structured content for SEO */}
        <div style={{ display: 'none' }} aria-hidden="true">
          <meta itemProp="serviceType" content="Construction Services" />
          <meta itemProp="provider" content="Ram Limited Contracting" />
          <div itemProp="areaServed" itemScope itemType="https://schema.org/Country">
            <meta itemProp="name" content="Saudi Arabia" />
          </div>
          <meta itemProp="description" content={seoContent[lang].description} />
          
          {/* List advantages for search engines */}
          <ul>
            {steps.map((step, index) => (
              <li key={index}>
                <strong>{step.title}</strong>: {step.subtitle}
              </li>
            ))}
          </ul>
          
          {/* Geographic mentions */}
          <span>Construction services in Saudi Arabia</span>
          <span>Contracting company in Riyadh</span>
          <span>Building contractors in KSA</span>
          {lang === "ar" && (
            <>
              <span>شركة بناء في السعودية</span>
              <span>مقاولون في الرياض</span>
              <span>خدمات البناء في المملكة</span>
            </>
          )}
        </div>
      </section>
    </>
  );
};

export default WhyChooseRamLimited;