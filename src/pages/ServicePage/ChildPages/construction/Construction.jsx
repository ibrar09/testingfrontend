// src/pages/ServicePage/ChildPages/Construction/Construction.jsx
import React from 'react'
import { Helmet } from "react-helmet-async"
import ConstructionHero from './ConstructionHero.jsx'
import ConstructionDuration from './ConstructionProjectDuration'
import ConstructionServices from './ConstructionService'
import ConstructionDetails from './ConstructionDetails'
import ConstructionPricing from './ConstructionPricing'
import ConstructionQuality from './ConstructionQualityPage'
import { useLanguage } from "../../../../context/LanguageContext"

// Import SEO data
import { constructionSEODetails } from "./constructionDetailsData"

const Construction = () => {
  const { lang } = useLanguage()
  const seoData = constructionSEODetails[lang]
  const canonicalUrl = `https://ramlimited.com.sa/${lang === "ar" ? "ar" : "en"}/services/construction`

  return (
    <>
      <Helmet>
        {/* Primary Meta Tags */}
        <title>{seoData.metaTitle}</title>
        <meta name="description" content={seoData.metaDescription} />
        <meta name="keywords" content={seoData.metaKeywords} />
        
        {/* Geographic Targeting */}
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
        
        {/* Alternate Language Versions */}
        <link rel="alternate" hreflang="ar" href="https://ramlimited.com.sa/ar/services/construction" />
        <link rel="alternate" hreflang="en" href="https://ramlimited.com.sa/en/services/construction" />
        <link rel="alternate" hreflang="x-default" href="https://ramlimited.com.sa/services/construction" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:title" content={seoData.ogTitle} />
        <meta property="og:description" content={seoData.ogDescription} />
        <meta property="og:image" content={seoData.ogImage} />
        <meta property="og:image:alt" content={lang === "ar" ? "خدمات البناء" : "Construction Services"} />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@ramlimited" />
        <meta name="twitter:title" content={seoData.twitterTitle} />
        <meta name="twitter:description" content={seoData.twitterDescription} />
        <meta name="twitter:image" content={seoData.ogImage} />
        
        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify(seoData.structuredData)}
        </script>
        
        {/* FAQ Structured Data */}
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
      </Helmet>

      <div 
        className={`w-full overflow-hidden ${lang === 'ar' ? 'text-right' : 'text-left'}`} 
        dir={lang === 'ar' ? 'rtl' : 'ltr'}
        itemScope
        itemType="https://schema.org/Service"
      >
        <meta itemProp="name" content={seoData.metaTitle} />
        <meta itemProp="description" content={seoData.metaDescription} />
        
        <ConstructionHero />
        <ConstructionDuration />
        <ConstructionServices />
        <ConstructionDetails />
        <ConstructionPricing />
        <ConstructionQuality />
      </div>
    </>
  )
}

export default Construction