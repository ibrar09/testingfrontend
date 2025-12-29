// src/pages/ServicePage/ChildPages/Painting/Painting.jsx
import React from 'react';
import { Helmet } from 'react-helmet-async';
import PaintingHero from './PaintingHero';
import PaintingProjectDuration from './PaintingProjectDuration';
import PaintingService from './PaintingService';
import PaintingDetails from './PaintingDetails';
import PaintingPricing from './PaintingPricing';
import PaintingQualityPage from './PaintingQualityPage';
import { useLanguage } from "../../../../context/LanguageContext";
import { paintingHeroData, paintingQualityData } from './paintingDetailsData';

const Painting = () => {
  const { lang } = useLanguage();
  
  // Get SEO data based on language
  const seoData = lang === 'ar' ? {
    title: paintingHeroData.ar.title,
    description: paintingHeroData.ar.description,
    canonical: "/services/painting",
    keywords: "خدمات دهان, دهان داخلي, دهان خارجي, دهان سكني, دهان تجاري, دهان صناعي, السعودية, الرياض, جدة, الدمام",
    ogTitle: paintingHeroData.ar.title,
    ogDescription: paintingHeroData.ar.description,
    contactPhone: paintingQualityData.ar.contact.phone,
    contactEmail: paintingQualityData.ar.contact.email,
    serviceAreas: "الرياض, جدة, الدمام, جميع مدن السعودية"
  } : {
    title: paintingHeroData.en.title,
    description: paintingHeroData.en.description,
    canonical: "/services/painting",
    keywords: "painting services, interior painting, exterior painting, residential painting, commercial painting, industrial painting, Saudi Arabia, Riyadh, Jeddah, Dammam",
    ogTitle: paintingHeroData.en.title,
    ogDescription: paintingHeroData.en.description,
    contactPhone: paintingQualityData.en.contact.phone,
    contactEmail: paintingQualityData.en.contact.email,
    serviceAreas: "Riyadh, Jeddah, Dammam, all Saudi Arabia cities"
  }

  // JSON-LD Schema for Painting Service Business
  const paintingBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": lang === 'ar' ? "خدمات الدهان الاحترافية" : "Professional Painting Services",
    "description": seoData.description,
    "url": "https://ramlimited.com/services/painting",
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
    "knowsAbout": lang === 'ar' ? "دهان داخلي وخارجي، دهان سكني وتجاري، دهانات عالية الجودة" : "Interior and exterior painting, residential and commercial painting, premium quality paints",
    "priceRange": "SAR 5,000 - 30,000",
    "openingHours": "24/7",
    "currenciesAccepted": "SAR",
    "paymentAccepted": "Cash, Credit Card, Bank Transfer",
    "sameAs": [
      "https://linkedin.com/company/ramlimited",
      "https://twitter.com/ramlimited"
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": lang === 'ar' ? "باقات خدمات الدهان" : "Painting Service Packages",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": lang === 'ar' ? "دهان داخلي سكني" : "Residential Interior Painting"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": lang === 'ar' ? "دهان خارجي تجاري" : "Commercial Exterior Painting"
          }
        }
      ]
    }
  }

  // JSON-LD Schema for Painting Service
  const paintingServiceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": lang === 'ar' ? "خدمات الدهان الداخلية والخارجية" : "Interior and Exterior Painting Services",
    "provider": {
      "@type": "Organization",
      "name": "RAM Limited",
      "url": "https://ramlimited.com"
    },
    "description": seoData.description,
    "areaServed": seoData.serviceAreas,
    "offers": {
      "@type": "Offer",
      "priceSpecification": {
        "@type": "UnitPriceSpecification",
        "priceCurrency": "SAR",
        "price": "5000",
        "eligibleQuantity": {
          "@type": "QuantitativeValue",
          "value": "1"
        }
      }
    }
  }

  // JSON-LD for FAQ
  const paintingFAQSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": lang === 'ar' ? "ما هي مدة مشروع الدهان العادي؟" : "How long does a typical painting project take?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": lang === 'ar' ? "تستغرق مشاريع الدهان العادية من 1 إلى 3 أسابيع حسب حجم المشروع وتعقيد العمل." : "Typical painting projects take 1-3 weeks depending on project size and complexity."
        }
      },
      {
        "@type": "Question",
        "name": lang === 'ar' ? "هل تستخدمون دهانات صديقة للبيئة؟" : "Do you use eco-friendly paints?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": lang === 'ar' ? "نعم، نستخدم دهانات منخفضة المركبات العضوية المتطايرة من علامات تجارية مثل دولكس وجوتن." : "Yes, we use low-VOC paints from brands like Dulux and Jotun."
        }
      },
      {
        "@type": "Question",
        "name": lang === 'ar' ? "هل تقدمون ضمان على العمل؟" : "Do you offer warranty on your work?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": lang === 'ar' ? "نعم، نقدم ضمان حتى 5 سنوات على جودة العمل في بعض الباقات الممتازة." : "Yes, we offer up to 5-year warranty on workmanship for premium packages."
        }
      }
    ]
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
        <meta property="og:image" content="https://ramlimited.com/og-painting-services.jpg" />
        <meta property="og:locale" content={lang === 'ar' ? "ar_SA" : "en_US"} />
        <meta property="og:site_name" content="RAM Limited" />
        
        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={`https://ramlimited.com${seoData.canonical}`} />
        <meta property="twitter:title" content={seoData.ogTitle} />
        <meta property="twitter:description" content={seoData.ogDescription} />
        <meta property="twitter:image" content="https://ramlimited.com/twitter-painting-services.jpg" />
        
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
          {JSON.stringify(paintingBusinessSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(paintingServiceSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(paintingFAQSchema)}
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
                "name": lang === 'ar' ? "خدمات الدهان" : "Painting Services",
                "item": `https://ramlimited.com${seoData.canonical}`
              }
            ]
          })}
        </script>

        {/* Video Schema for Painting Demo */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "VideoObject",
            "name": lang === 'ar' ? "عرض توضيحي لخدمات الدهان" : "Painting Services Demo Video",
            "description": lang === 'ar' ? "فيديو تعريفي لخدمات الدهان الداخلية والخارجية في السعودية" : "Introductory video for interior and exterior painting services in Saudi Arabia",
            "thumbnailUrl": "https://ramlimited.com/video-thumbnails/painting-demo.jpg",
            "uploadDate": "2024-01-15T08:00:00+08:00",
            "duration": "PT2M30S",
            "contentUrl": "https://ramlimited.com/videos/painting-demo.mp4",
            "embedUrl": "https://ramlimited.com/embed/painting-demo",
            "interactionCount": "1500"
          })}
        </script>
      </Helmet>

      {/* Hidden SEO Text for Search Engines */}
      <div className="sr-only" aria-hidden="true">
        <h1>{lang === 'ar' ? "خدمات الدهان الاحترافية في السعودية" : "Professional Painting Services in Saudi Arabia"}</h1>
        <p>
          {lang === 'ar' 
            ? "شركة RAM المحددة تقدم خدمات دهان احترافية شاملة في المملكة العربية السعودية. نحن متخصصون في الدهان الداخلي والخارجي للمنازل السكنية، المكاتب التجارية، المحلات التجارية، والمصانع الصناعية. نستخدم دهانات عالية الجودة من علامات تجارية عالمية مثل دولكس، جوتن، سيكينز، وبرجر."
            : "RAM Limited provides comprehensive professional painting services in Saudi Arabia. We specialize in interior and exterior painting for residential homes, commercial offices, retail stores, and industrial facilities. We use high-quality paints from global brands such as Dulux, Jotun, Sikkens, and Berger."
          }
        </p>
        <p>
          {lang === 'ar'
            ? "خدماتنا تغطي جميع مناطق المملكة العربية السعودية بما في ذلك الرياض وجدة والدمام. نحن نقدم ضمان على جودة العمل وتستخدم فرقنا المدربة أحدث التقنيات في الدهان والتحضير السطحي. نحن نلتزم بمعايير الجودة العالمية ISO 9001:2015."
            : "Our services cover all regions of Saudi Arabia including Riyadh, Jeddah, and Dammam. We offer workmanship warranty and our trained teams use the latest techniques in painting and surface preparation. We adhere to ISO 9001:2015 international quality standards."
          }
        </p>
        <h2>{lang === 'ar' ? "أنواع خدمات الدهان التي نقدمها:" : "Types of painting services we offer:"}</h2>
        <ul>
          <li>{lang === 'ar' ? "دهان داخلي سكني للمنازل والشقق" : "Residential interior painting for homes and apartments"}</li>
          <li>{lang === 'ar' ? "دهان خارجي للمباني والواجهات" : "Exterior painting for buildings and facades"}</li>
          <li>{lang === 'ar' ? "دهان تجاري للمكاتب والمتاجر" : "Commercial painting for offices and stores"}</li>
          <li>{lang === 'ar' ? "دهان صناعي للمصانع والمستودعات" : "Industrial painting for factories and warehouses"}</li>
          <li>{lang === 'ar' ? "دهانات ديكورية وتشطيبات خاصة" : "Decorative painting and special finishes"}</li>
          <li>{lang === 'ar' ? "طلاءات واقية مضادة للماء والعفن" : "Protective waterproof and anti-mold coatings"}</li>
        </ul>
      </div>

      {/* Main Content */}
      <div className={lang === 'ar' ? 'text-right' : 'text-left'} dir={lang === 'ar' ? 'rtl' : 'ltr'}>
        <PaintingHero />
        <PaintingProjectDuration />
        <PaintingService />
        <PaintingDetails />
        <PaintingPricing />
        <PaintingQualityPage />
      </div>

      {/* Additional SEO Content (Visible but subtle) */}
      <div className="container mx-auto px-4 py-8 mt-12 border-t border-gray-200">
        <div className="max-w-4xl mx-auto">
          <div className={`${lang === 'ar' ? 'text-right' : 'text-left'}`}>
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">
              {lang === 'ar' ? "خدمات الدهان في المملكة العربية السعودية" : "Painting Services in Saudi Arabia"}
            </h2>
            <div className="prose prose-lg max-w-none text-gray-600">
              <p className="mb-4">
                {lang === 'ar'
                  ? "تعد خدمات الدهان الاحترافية من RAM المحددة الخيار الأمثل لأصحاب المنازل والشركات في المملكة العربية السعودية. مع فريق من الفنيين المدربين ودهانات عالية الجودة، نضمن نتائج تدوم طويلاً وتضفي جمالاً على مساحتك. خبرتنا تمتد لأكثر من 15 عاماً في قطاع الدهان والدهانات في السعودية."
                  : "RAM Limited's professional painting services are the ideal choice for homeowners and businesses in Saudi Arabia. With a team of trained technicians and high-quality paints, we ensure long-lasting results that beautify your space. Our experience spans over 15 years in the painting and coatings sector in Saudi Arabia."
                }
              </p>
              <p className="mb-4">
                {lang === 'ar'
                  ? "نحن نستخدم فقط دهانات عالية الجودة من العلامات التجارية الرائدة مثل دولكس وجوتن وسيكينز، والتي تتميز بمقاومتها للعوامل الجوية القاسية في المملكة العربية السعودية. خدماتنا تشمل تحضير السطح المحترف، تطبيق الدهان بالتقنيات الحديثة، والتفتيش النهائي لضمان الجودة."
                  : "We use only high-quality paints from leading brands like Dulux, Jotun, and Sikkens, known for their resistance to harsh weather conditions in Saudi Arabia. Our services include professional surface preparation, modern painting application techniques, and final quality inspection."
                }
              </p>
              <p>
                {lang === 'ar'
                  ? "نعمل في جميع أنحاء المملكة العربية السعودية بما في ذلك الرياض وجدة والدمام والمنطقة الشرقية والغربية. نحن نقدم أسعاراً تنافسية وضماناً على جودة العمل. اتصل بنا اليوم للحصول على استشارة مجانية وتقدير سعر لمشروع الدهان الخاص بك."
                  : "We operate throughout Saudi Arabia including Riyadh, Jeddah, Dammam, Eastern Province, and Western Province. We offer competitive pricing and workmanship warranty. Contact us today for a free consultation and price estimate for your painting project."
                }
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Painting;