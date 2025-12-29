import React from 'react'
import { Helmet } from 'react-helmet-async'
import KitchenHero from './KitchenHero'
import KitchenProjectDuration from './KitchenProjectDuration'
import KitchenService from './KitchenService'
import KitchenDetails from './KitchenDetails'
import KitchenPricing from './kitchenPricing'
import KitchenQualityPage from './KitchenQualityPage'
import { useLanguage } from "../../../../context/LanguageContext"
import { kitchenHeroData, kitchenQualityData } from './KitchenData'

const Kitchen = () => {
  const { lang } = useLanguage()
  
  // Get SEO data based on language
  const seoData = lang === 'ar' ? {
    title: kitchenHeroData.ar.title,
    description: kitchenHeroData.ar.description,
    canonical: "/services/kitchen-equipment",
    keywords: "معدات مطابخ تجارية, تركيب معدات مطابخ, صيانة مطابخ, معدات مطابخ السعودية, مطابخ فندقية, معدات مطابخ صناعية",
    ogTitle: kitchenHeroData.ar.title,
    ogDescription: kitchenHeroData.ar.description,
    contactPhone: kitchenQualityData.ar.contact.phone,
    contactEmail: kitchenQualityData.ar.contact.email,
    serviceAreas: "الرياض, جدة, الدمام, جميع مدن السعودية"
  } : {
    title: kitchenHeroData.en.title,
    description: kitchenHeroData.en.description,
    canonical: "/services/kitchen-equipment",
    keywords: "commercial kitchen equipment, kitchen installation Saudi Arabia, kitchen maintenance, restaurant kitchen setup, hotel kitchen equipment, industrial kitchen services",
    ogTitle: kitchenHeroData.en.title,
    ogDescription: kitchenHeroData.en.description,
    contactPhone: kitchenQualityData.en.contact.phone,
    contactEmail: kitchenQualityData.en.contact.email,
    serviceAreas: "Riyadh, Jeddah, Dammam, all Saudi Arabia cities"
  }

  // JSON-LD Schema for Local Business
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": lang === 'ar' ? "خدمات معدات المطابخ التجارية" : "Commercial Kitchen Equipment Services",
    "description": seoData.description,
    "url": "https://ramlimited.com/services/kitchen-equipment",
    "telephone": seoData.contactPhone,
    "email": seoData.contactEmail,
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "SA",
      "addressRegion": lang === 'ar' ? "جميع مناطق السعودية" : "All Saudi Arabia Regions"
    },
    "areaServed": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": 24.7136,
        "longitude": 46.6753
      },
      "geoRadius": "500000"
    },
    "servesCuisine": lang === 'ar' ? "جميع أنواع المطابخ التجارية" : "All commercial kitchen types",
    "priceRange": "SAR 15,000 - 90,000",
    "openingHours": "24/7",
    "currenciesAccepted": "SAR",
    "paymentAccepted": "Cash, Credit Card, Bank Transfer",
    "sameAs": [
      "https://linkedin.com/company/ramlimited",
      "https://twitter.com/ramlimited"
    ]
  }

  // JSON-LD Schema for Service
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": lang === 'ar' ? "تركيب وصيانة معدات المطابخ التجارية" : "Commercial Kitchen Equipment Installation & Maintenance",
    "provider": {
      "@type": "Organization",
      "name": "RAM Limited",
      "url": "https://ramlimited.com"
    },
    "description": seoData.description,
    "areaServed": seoData.serviceAreas,
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": lang === 'ar' ? "باقات خدمات المطابخ" : "Kitchen Service Packages",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": lang === 'ar' ? "تركيب معدات مطابخ تجارية" : "Commercial Kitchen Equipment Installation"
          },
          "priceSpecification": {
            "@type": "UnitPriceSpecification",
            "priceCurrency": "SAR",
            "price": "15000",
            "eligibleQuantity": {
              "@type": "QuantitativeValue",
              "value": "1"
            }
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": lang === 'ar' ? "صيانة معدات مطابخ" : "Kitchen Equipment Maintenance"
          }
        }
      ]
    }
  }

  return (
    <>
      {/* SEO Meta Tags */}
      <Helmet>
        <title>{seoData.title}</title>
        <meta name="description" content={seoData.description} />
        <meta name="keywords" content={seoData.keywords} />
        <link rel="canonical" href={`https://ramlimited.com${seoData.canonical}`} />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`https://ramlimited.com${seoData.canonical}`} />
        <meta property="og:title" content={seoData.ogTitle} />
        <meta property="og:description" content={seoData.ogDescription} />
        <meta property="og:image" content="https://ramlimited.com/og-kitchen-equipment.jpg" />
        <meta property="og:locale" content={lang === 'ar' ? "ar_SA" : "en_US"} />
        <meta property="og:site_name" content="RAM Limited" />
        
        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={`https://ramlimited.com${seoData.canonical}`} />
        <meta property="twitter:title" content={seoData.ogTitle} />
        <meta property="twitter:description" content={seoData.ogDescription} />
        <meta property="twitter:image" content="https://ramlimited.com/twitter-kitchen-equipment.jpg" />
        
        {/* Additional SEO Tags */}
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <meta name="author" content="RAM Limited" />
        <meta name="copyright" content="RAM Limited" />
        <meta name="language" content={lang === 'ar' ? "Arabic" : "English"} />
        <meta name="geo.region" content="SA" />
        <meta name="geo.placename" content="Riyadh" />
        <meta name="geo.position" content="24.7136;46.6753" />
        <meta name="ICBM" content="24.7136, 46.6753" />
        
        {/* Structured Data / JSON-LD */}
        <script type="application/ld+json">
          {JSON.stringify(localBusinessSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(serviceSchema)}
        </script>
        
        {/* Additional Schema for FAQ */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": lang === 'ar' ? "ما هي تكلفة تركيب معدات مطبخ تجاري؟" : "What is the cost of commercial kitchen equipment installation?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": lang === 'ar' ? "تبدأ تكلفة تركيب معدات المطابخ التجارية من 15,000 ريال سعودي وتختلف حسب حجم المطبخ ونوع المعدات والعلامة التجارية." : "Commercial kitchen equipment installation starts from SAR 15,000 and varies based on kitchen size, equipment type, and brand selection."
                }
              },
              {
                "@type": "Question",
                "name": lang === 'ar' ? "هل تقدمون خدمة صيانة دورية؟" : "Do you offer regular maintenance services?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": lang === 'ar' ? "نعم، نقدم خطط صيانة وقائية شهرية وربع سنوية مع تقارير مفصلة عن حالة المعدات." : "Yes, we offer monthly and quarterly preventive maintenance plans with detailed equipment condition reports."
                }
              },
              {
                "@type": "Question",
                "name": lang === 'ar' ? "ما هي مناطق الخدمة؟" : "What are your service areas?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": lang === 'ar' ? "نخدم جميع مدن المملكة العربية السعودية مع تركيز على الرياض وجدة والدمام." : "We serve all cities in Saudi Arabia with focus on Riyadh, Jeddah, and Dammam regions."
                }
              }
            ]
          })}
        </script>
        
        {/* Breadcrumb Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": lang === 'ar' ? "الرئيسية" : "Home",
                "item": "https://ramlimited.com"
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": lang === 'ar' ? "الخدمات" : "Services",
                "item": "https://ramlimited.com/services"
              },
              {
                "@type": "ListItem",
                "position": 3,
                "name": lang === 'ar' ? "معدات المطابخ" : "Kitchen Equipment",
                "item": `https://ramlimited.com${seoData.canonical}`
              }
            ]
          })}
        </script>
      </Helmet>

      {/* Hidden SEO Text for Search Engines */}
      <div className="sr-only" aria-hidden="true">
        <h1>{lang === 'ar' ? "خدمات معدات المطابخ التجارية في السعودية" : "Commercial Kitchen Equipment Services in Saudi Arabia"}</h1>
        <p>
          {lang === 'ar' 
            ? "شركة RAM المحددة رائدة في تقديم خدمات تركيب وصيانة معدات المطابخ التجارية والصناعية والفندقية في المملكة العربية السعودية. نحن نقدم حلولاً متكاملة تشمل تركيب أفران الطهي التجارية، أنظمة التهوية الصناعية، معدات التبريد التجارية، وصيانة جميع أنواع معدات المطابخ مع ضمان الجودة والسلامة وفق معايير ISO 22000:2018."
            : "RAM Limited is a leading provider of commercial, industrial, and hotel kitchen equipment installation and maintenance services in Saudi Arabia. We offer comprehensive solutions including commercial cooking range installation, industrial ventilation systems, commercial refrigeration equipment, and maintenance of all kitchen equipment types with quality assurance and safety compliance according to ISO 22000:2018 standards."
          }
        </p>
        <p>
          {lang === 'ar'
            ? "خدماتنا تغطي الرياض وجدة والدمام وجميع مناطق المملكة. نعمل مع أفضل العلامات التجارية العالمية ونقدم دعم فني على مدار الساعة طوال أيام الأسبوع. خبرتنا تشمل مطابخ المطاعم، الفنادق، المستشفيات، والمطابخ الصناعية."
            : "Our services cover Riyadh, Jeddah, Dammam and all regions of Saudi Arabia. We work with top international brands and provide 24/7 technical support. Our expertise includes restaurant kitchens, hotel kitchens, hospital kitchens, and industrial kitchen facilities."
          }
        </p>
      </div>

      {/* Main Content */}
      <div className={lang === 'ar' ? 'text-right' : 'text-left'} dir={lang === 'ar' ? 'rtl' : 'ltr'}>
        <KitchenHero/>
        <KitchenProjectDuration/>
        <KitchenService/>
        <KitchenDetails/>
        <KitchenPricing/>
        <KitchenQualityPage/>
      </div>

      {/* Additional SEO Content (Visible to users but styled to be subtle) */}
      <div className="container mx-auto px-4 py-8 mt-12 border-t border-gray-200">
        <div className="max-w-4xl mx-auto">
          <div className={`${lang === 'ar' ? 'text-right' : 'text-left'}`}>
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">
              {lang === 'ar' ? "خدمات معدات المطابخ في السعودية" : "Kitchen Equipment Services in Saudi Arabia"}
            </h2>
            <div className="prose prose-lg max-w-none text-gray-600">
              <p className="mb-4">
                {lang === 'ar'
                  ? "تقدم شركة RAM المحددة حلولاً شاملة لجميع احتياجات معدات المطابخ التجارية في المملكة العربية السعودية. مع أكثر من 10 سنوات من الخبرة في قطاع معدات المطابخ، نضمن لأعمالك أفضل الحلول التقنية والخدمات الاحترافية. فريقنا المعتمد من أفضل الفنيين المدربين على أحدث تقنيات معدات المطابخ العالمية."
                  : "RAM Limited offers comprehensive solutions for all commercial kitchen equipment needs in Saudi Arabia. With over 10 years of experience in the kitchen equipment sector, we ensure your business gets the best technical solutions and professional services. Our certified team consists of the best technicians trained in the latest global kitchen equipment technologies."
                }
              </p>
              <p className="mb-4">
                {lang === 'ar'
                  ? "نحن نعمل مع العلامات التجارية الرائدة مثل راشونال (Rational)، ألتو-شام (Alto-Shaam)، إلكترولوكس (Electrolux)، فوستر (Foster)، وعدة علامات تجارية عالمية أخرى. خدماتنا تشمل تصميم المطابخ التجارية، توريد المعدات، التركيب الاحترافي، الصيانة الدورية، والإصلاحات الطارئة."
                  : "We work with leading brands such as Rational, Alto-Shaam, Electrolux, Foster, and several other global brands. Our services include commercial kitchen design, equipment supply, professional installation, periodic maintenance, and emergency repairs."
                }
              </p>
              <p>
                {lang === 'ar'
                  ? "جميع خدماتنا تتم وفق أعلى معايير الجودة والسلامة المطلوبة في قطاع الأغذية والمشروبات في السعودية. نحن نلتزم بمعايير ISO 22000:2018 لسلامة الغذاء ونقدم ضمانات شاملة على جميع أعمالنا."
                  : "All our services comply with the highest quality and safety standards required in the food and beverage sector in Saudi Arabia. We adhere to ISO 22000:2018 food safety standards and provide comprehensive warranties on all our work."
                }
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Kitchen