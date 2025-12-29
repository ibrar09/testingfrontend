import React, { useState } from "react";
import RequestQuoteForm from "../../RequestPage/RequestQuoteForm";
import { useLanguage } from "../../../context/LanguageContext"; // adjust path
import { Helmet } from "react-helmet-async";

const ReadyToStart = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { lang } = useLanguage();

  // --- Text content based on language ---
  const headingText =
    lang === "ar" ? "هل أنت جاهز لبدء مشروعك؟" : "Ready To Start Your Project";
  const paragraphText =
    lang === "ar"
      ? "انضم إلى عملائنا الراضين واختبر فرق رام المحدودة. اتصل بنا اليوم للحصول على استشارة مجانية وتقدير للمشروع."
      : "Join our satisfied clients and experience the Ram Limited difference. Contact us today for a free consultation and project estimate.";
  const buttonText = lang === "ar" ? "اطلب عرض سعر" : "Request A Quote";

  // --- SEO Content ---
  const seoContent = {
    en: {
      title: "Start Your Construction Project | Free Consultation | Ram Limited Saudi Arabia",
      description: "Ready to start your construction project in Saudi Arabia? Get a free consultation and project estimate from Ram Limited Contracting. Join our satisfied clients today.",
      keywords: "start construction project Saudi Arabia, free construction consultation Riyadh, project estimate KSA, building contractors consultation, construction quote Saudi Arabia",
      ogTitle: "Start Your Project Today - Ram Limited Construction Saudi Arabia",
      ogDescription: "Free consultation and project estimate for construction projects in Saudi Arabia. Join our satisfied clients and experience excellence.",
      jsonLd: {
        "@context": "https://schema.org",
        "@type": "ContactPage",
        "name": "Request a Quote",
        "description": "Contact Ram Limited Contracting for construction project consultations and estimates in Saudi Arabia",
        "mainEntity": {
          "@type": "Offer",
          "name": "Free Construction Consultation",
          "description": "Free project consultation and estimate for construction projects in Saudi Arabia",
          "businessFunction": "Construction Consultation",
          "areaServed": {
            "@type": "Country",
            "name": "Saudi Arabia"
          },
          "eligibleRegion": {
            "@type": "Country",
            "name": "Saudi Arabia"
          },
          "price": "0",
          "priceCurrency": "SAR",
          "availableAtOrFrom": {
            "@type": "Organization",
            "name": "Ram Limited Contracting",
            "address": {
              "@type": "PostalAddress",
              "addressCountry": "SA",
              "addressRegion": "Riyadh Province"
            }
          }
        }
      }
    },
    ar: {
      title: "ابدأ مشروع البناء الخاص بك | استشارة مجانية | رام المحدودة السعودية",
      description: "جاهز لبدء مشروع البناء الخاص بك في السعودية؟ احصل على استشارة مجانية وتقدير للمشروع من رام المحدودة للمقاولات. انضم إلى عملائنا الراضين اليوم.",
      keywords: "بدء مشروع بناء السعودية, استشارة بناء مجانية الرياض, تقدير مشروع المملكة, مقاولون بناء استشارة, عرض سعر بناء السعودية",
      ogTitle: "ابدأ مشروعك اليوم - رام المحدودة للبناء السعودية",
      ogDescription: "استشارة مجانية وتقدير للمشروع لمشاريع البناء في السعودية. انضم إلى عملائنا الراضين واختبر التميز.",
      jsonLd: {
        "@context": "https://schema.org/ar",
        "@type": "ContactPage",
        "name": "طلب عرض سعر",
        "description": "اتصل برام المحدودة للمقاولات لاستشارات مشاريع البناء وتقديرات في السعودية",
        "mainEntity": {
          "@type": "Offer",
          "name": "استشارة بناء مجانية",
          "description": "استشارة مجانية للمشروع وتقدير لمشاريع البناء في السعودية",
          "businessFunction": "استشارات البناء",
          "areaServed": {
            "@type": "Country",
            "name": "المملكة العربية السعودية"
          },
          "eligibleRegion": {
            "@type": "Country",
            "name": "المملكة العربية السعودية"
          },
          "price": "0",
          "priceCurrency": "ريال سعودي",
          "availableAtOrFrom": {
            "@type": "Organization",
            "name": "رام المحدودة للمقاولات",
            "address": {
              "@type": "PostalAddress",
              "addressCountry": "SA",
              "addressRegion": "منطقة الرياض"
            }
          }
        }
      }
    }
  };

  // Canonical URL for this CTA section
  const canonicalUrl = `https://ramlimited.com.sa/${lang === "ar" ? "ar" : "en"}/request-quote`;

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
        <meta name="geo.position" content="24.7136;46.6753" />
        
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
        <meta property="og:image" content="https://ramlimited.com.sa/images/free-consultation-og.jpg" />
        <meta property="og:image:alt" content={lang === "ar" ? "استشارة بناء مجانية" : "Free Construction Consultation"} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={seoContent[lang].ogTitle} />
        <meta name="twitter:description" content={seoContent[lang].ogDescription} />
        <meta name="twitter:image" content="https://ramlimited.com.sa/images/free-consultation-twitter.jpg" />
        
        {/* Structured Data - JSON-LD */}
        <script type="application/ld+json">
          {JSON.stringify(seoContent[lang].jsonLd)}
        </script>
        
        {/* Additional Call To Action Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPageElement",
            "isAccessibleForFree": true,
            "cssSelector": ".cta-section",
            "name": headingText,
            "description": paragraphText,
            "mainEntity": {
              "@type": "Action",
              "name": buttonText,
              "description": "Request a free construction consultation",
              "target": {
                "@type": "EntryPoint",
                "urlTemplate": canonicalUrl,
                "actionPlatform": [
                  "http://schema.org/DesktopWebPlatform",
                  "http://schema.org/MobileWebPlatform"
                ]
              }
            }
          })}
        </script>
      </Helmet>

      <section
        className="w-full min-h-[295px] bg-gradient-to-r from-[#1392E0] to-[#023A9A] flex flex-col items-center justify-center px-4 py-12 text-center cta-section"
        dir={lang === "ar" ? "rtl" : "ltr"}
        itemScope
        itemType="https://schema.org/ContactPage"
        role="region"
        aria-label={lang === "ar" ? "استدعاء للعمل" : "Call to Action"}
      >
        {/* Hidden schema markup */}
        <meta itemProp="name" content={headingText} />
        <meta itemProp="description" content={paragraphText} />
        
        {/* Heading with Schema markup */}
        <h2 
          className="text-white font-sans font-bold text-3xl sm:text-4xl md:text-5xl leading-tight"
          itemProp="headline"
        >
          {headingText}
        </h2>

        {/* Paragraph with Schema markup */}
        <p 
          className="text-white font-sans font-normal text-base sm:text-lg md:text-xl leading-relaxed mt-4 max-w-2xl"
          itemProp="description"
        >
          {paragraphText}
        </p>

        {/* Button with Schema markup */}
        <div itemProp="mainEntity" itemScope itemType="https://schema.org/Offer">
          <meta itemProp="name" content={lang === "ar" ? "استشارة بناء مجانية" : "Free Construction Consultation"} />
          <meta itemProp="description" content={lang === "ar" ? "استشارة وتقدير مجاني للمشروع" : "Free project consultation and estimate"} />
          <meta itemProp="price" content="0" />
          <meta itemProp="priceCurrency" content={lang === "ar" ? "ريال سعودي" : "SAR"} />
          
          <button
            onClick={() => setIsModalOpen(true)}
            className="mt-8 w-[176px] h-[44px] rounded-[6px] 
            bg-white text-[#023A9A] font-sans font-bold text-[16px] leading-[20px] 
            text-center shadow-md hover:shadow-xl hover:scale-[1.05] transition duration-300"
            aria-label={lang === "ar" ? "اطلب عرض سعر مجاني" : "Request Free Quote"}
            role="button"
            itemProp="url"
          >
            {buttonText}
          </button>
        </div>

        {/* Modal */}
        {isModalOpen && <RequestQuoteForm onClose={() => setIsModalOpen(false)} />}
        
        {/* Hidden structured content for SEO */}
        <div style={{ display: 'none' }} aria-hidden="true">
          <meta itemProp="contactType" content="customer service" />
          <div itemProp="areaServed" itemScope itemType="https://schema.org/Country">
            <meta itemProp="name" content={lang === "ar" ? "المملكة العربية السعودية" : "Saudi Arabia"} />
          </div>
          <meta itemProp="serviceArea" content="Saudi Arabia" />
          <meta itemProp="availableLanguage" content={lang === "ar" ? "Arabic,English" : "English,Arabic"} />
          
          {/* Additional keywords for search engines */}
          <span>Construction consultation Saudi Arabia</span>
          <span>Free project estimate Riyadh</span>
          <span>Building contractors KSA</span>
          <span>Start construction project today</span>
          {lang === "ar" && (
            <>
              <span>استشارة بناء السعودية</span>
              <span>تقدير مشروع مجاني الرياض</span>
              <span>مقاولون بناء المملكة</span>
              <span>ابدأ مشروع البناء اليوم</span>
            </>
          )}
          
          {/* Service details */}
          <ul>
            <li>Free construction consultation</li>
            <li>Detailed project estimate</li>
            <li>Professional team assessment</li>
            <li>Timeline planning</li>
            <li>Budget analysis</li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default ReadyToStart;