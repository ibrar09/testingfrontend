import React, { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import About from "../../assets/images/pages/AboutUs.webp";
import AOS from "aos";
import "aos/dist/aos.css";
import { useLanguage } from "../../context/LanguageContext";

const AboutUsCover = () => {
  const { lang } = useLanguage();
  const isArabic = lang === "ar";

  useEffect(() => {
    AOS.init({ duration: 1200, once: true });
  }, []);

  // Enhanced SEO content
  const content = {
    en: {
      heading: "About Us",
      description: "Building Reliable Infrastructure for the Future in Saudi Arabia. We provide professional, efficient, and high-quality maintenance solutions for businesses and homeowners.",
      seoTitle: "About Us | Ram Limited - Building Reliable Infrastructure in Saudi Arabia",
      seoDescription: "Ram Limited provides professional building maintenance solutions in Saudi Arabia: AC, electrical, plumbing, painting services. 10+ years experience, 500+ projects, certified team, 24/7 service.",
      keywords: "about ram limited, maintenance company saudi arabia, building maintenance riyadh, ac maintenance company, plumbing services jeddah"
    },
    ar: {
      heading: "من نحن",
      description: "بناء بنية تحتية موثوقة للمستقبل في المملكة العربية السعودية. نحن نقدم خدمات صيانة احترافية وفعالة وعالية الجودة للشركات وأصحاب المنازل.",
      seoTitle: "من نحن | رام المحدودة - بناء بنية تحتية موثوقة في السعودية",
      seoDescription: "رام المحدودة تقدم حلول صيانة المباني في السعودية: تكييف، كهرباء، سباكة، دهان. خبرة 10+ سنوات، 500+ مشروع، فريق معتمد، خدمة 24/7.",
      keywords: "عن رام المحدودة, شركة صيانة السعودية, صيانة مباني الرياض, شركة تكييف, خدمات سباكة جدة"
    },
  };

  const currentContent = content[lang];

  return (
    <>
      {/* Enhanced SEO Meta */}
      <Helmet>
        <title>{currentContent.seoTitle}</title>
        <meta name="description" content={currentContent.seoDescription} />
        <meta name="keywords" content={currentContent.keywords} />
        
        {/* Canonical URL */}
        <link rel="canonical" href={typeof window !== 'undefined' ? window.location.origin + "/about" : ""} />
        
        {/* Open Graph */}
        <meta property="og:title" content={currentContent.seoTitle} />
        <meta property="og:description" content={currentContent.seoDescription} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={typeof window !== 'undefined' ? window.location.origin + "/about" : ""} />
        <meta property="og:image" content={typeof window !== 'undefined' ? `${window.location.origin}${About}` : ""} />
        <meta property="og:image:alt" content={currentContent.heading} />
        <meta property="og:image:width" content="1920" />
        <meta property="og:image:height" content="1080" />
        <meta property="og:locale" content={isArabic ? "ar_SA" : "en_SA"} />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={currentContent.seoTitle} />
        <meta name="twitter:description" content={currentContent.seoDescription} />
        <meta name="twitter:image" content={typeof window !== 'undefined' ? `${window.location.origin}${About}` : ""} />
        
        {/* Hreflang */}
        <link rel="alternate" hrefLang="ar-SA" href={typeof window !== 'undefined' ? window.location.origin + "/about?lang=ar" : ""} />
        <link rel="alternate" hrefLang="en-SA" href={typeof window !== 'undefined' ? window.location.origin + "/about?lang=en" : ""} />
        <link rel="alternate" hrefLang="x-default" href={typeof window !== 'undefined' ? window.location.origin + "/about" : ""} />
        
        {/* Structured Data for About Page */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "WebPage",
                "name": currentContent.seoTitle,
                "description": currentContent.seoDescription,
                "url": typeof window !== 'undefined' ? window.location.origin + "/about" : "",
                "primaryImageOfPage": {
                  "@type": "ImageObject",
                  "url": typeof window !== 'undefined' ? `${window.location.origin}${About}` : "",
                  "width": "1920",
                  "height": "1080",
                  "caption": currentContent.heading
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
                      "name": isArabic ? "من نحن" : "About Us",
                      "item": typeof window !== 'undefined' ? window.location.origin + "/about" : ""
                    }
                  ]
                }
              },
              {
                "@type": "AboutPage",
                "about": {
                  "@type": "Organization",
                  "name": "Ram Limited",
                  "legalName": isArabic ? "شركة رام المحدودة" : "Ram Limited Company",
                  "description": isArabic 
                    ? "شركة سعودية متخصصة في خدمات الصيانة الشاملة منذ عام 2013"
                    : "Saudi company specialized in comprehensive maintenance services since 2013",
                  "url": typeof window !== 'undefined' ? window.location.origin : "",
                  "logo": typeof window !== 'undefined' ? `${window.location.origin}/logo.png` : "",
                  "foundingDate": "2013",
                  "foundingLocation": {
                    "@type": "Place",
                    "name": "Riyadh, Saudi Arabia"
                  },
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
                    "availableLanguage": ["Arabic", "English"]
                  },
                  "numberOfEmployees": {
                    "@type": "QuantitativeValue",
                    "value": "50+"
                  },
                  "knowsAbout": [
                    isArabic ? "صيانة المباني" : "Building Maintenance",
                    isArabic ? "أنظمة التكييف والتبريد" : "AC and Cooling Systems",
                    isArabic ? "الصيانة الكهربائية" : "Electrical Maintenance",
                    isArabic ? "خدمات السباكة" : "Plumbing Services",
                    isArabic ? "خدمات الدهان والطلاء" : "Painting and Coating Services",
                    isArabic ? "إدارة المرافق" : "Facility Management",
                    isArabic ? "عقود الصيانة السنوية" : "Annual Maintenance Contracts"
                  ],
                  "areaServed": {
                    "@type": "GeoShape",
                    "box": "24.5 46.4 25.0 47.0"
                  }
                }
              }
            ]
          })}
        </script>
      </Helmet>

      <section
        className="relative w-full h-[50vh] sm:h-[60vh] md:h-[600px] lg:h-[650px] overflow-hidden"
        dir={isArabic ? "rtl" : "ltr"}
        itemScope
        itemType="https://schema.org/AboutPage"
      >
        {/* Hidden structured data */}
        <div itemScope itemType="https://schema.org/Organization" className="hidden">
          <meta itemProp="name" content="Ram Limited" />
          <meta itemProp="description" content={currentContent.seoDescription} />
          <meta itemProp="foundingDate" content="2013" />
          <meta itemProp="numberOfEmployees" content="50+" />
          <meta itemProp="areaServed" content="Saudi Arabia" />
        </div>

        {/* Background Image with SEO attributes */}
        <img
          src={About}
          alt={currentContent.heading}
          className="absolute inset-0 w-full h-full object-cover brightness-75"
          loading="eager"
          itemProp="image"
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/30"></div>

        {/* Text Overlay */}
        <div className="relative z-10 flex flex-col justify-center h-full px-4 sm:px-6 md:px-12 lg:px-24 text-center md:text-left">
          {/* Animated Gradient Heading */}
          <h1
            data-aos="fade-up"
            className="
              text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl
              font-extrabold
              mb-6 sm:mb-8 md:mb-10
              max-w-3xl
              leading-snug md:leading-snug lg:leading-tight
              text-center md:text-left
              bg-gradient-to-r from-[#023A9A] via-[#1392E0] to-[#60a5fa]
              text-transparent bg-clip-text
              drop-shadow-lg
              tracking-tight
              mx-auto md:mx-0
            "
            itemProp="headline"
          >
            {currentContent.heading}
          </h1>

          {/* Animated Soft-Bold Paragraph */}
          <p
            data-aos="fade-up"
            data-aos-delay="200"
            className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-gray-100 max-w-full md:max-w-2xl lg:max-w-3xl leading-relaxed md:leading-relaxed lg:leading-loose text-center md:text-left mx-auto md:mx-0 drop-shadow-md"
            itemProp="description"
          >
            {currentContent.description}
          </p>

          {/* Hidden SEO Content for Search Engines */}
          <div className="hidden" aria-hidden="true">
            <h2>{isArabic ? "معلومات عن شركة رام المحدودة" : "Information About Ram Limited Company"}</h2>
            <p>{isArabic 
              ? "تأسست شركة رام المحدودة في عام 2013 في الرياض، المملكة العربية السعودية. نحن شركة سعودية متخصصة في تقديم جميع خدمات الصيانة الشاملة للمباني والمنشآت. على مدار أكثر من 10 سنوات، قمنا بتنفيذ أكثر من 500 مشروع صيانة في جميع أنحاء المملكة."
              : "Ram Limited Company was established in 2013 in Riyadh, Saudi Arabia. We are a Saudi company specialized in providing comprehensive building and facility maintenance services. Over more than 10 years, we have completed over 500 maintenance projects throughout the Kingdom."
            }</p>
            
            <h3>{isArabic ? "مجالات تخصصنا:" : "Our Specializations:"}</h3>
            <ul>
              <li>{isArabic ? "صيانة وتركيب أنظمة التكييف والتبريد (المركزية والسبليت)" : "Maintenance and installation of AC and cooling systems (central and split)"}</li>
              <li>{isArabic ? "الصيانة الكهربائية للمباني السكنية والتجارية" : "Electrical maintenance for residential and commercial buildings"}</li>
              <li>{isArabic ? "خدمات السباكة وإصلاح تسربات المياه" : "Plumbing services and water leak repairs"}</li>
              <li>{isArabic ? "خدمات الدهان والطلاء الداخلي والخارجي" : "Interior and exterior painting and coating services"}</li>
              <li>{isArabic ? "إدارة المرافق والصيانة الوقائية" : "Facility management and preventive maintenance"}</li>
              <li>{isArabic ? "عقود الصيانة السنوية (AMC) للشركات والمؤسسات" : "Annual Maintenance Contracts (AMC) for companies and institutions"}</li>
            </ul>
            
            <h3>{isArabic ? "مناطق خدمتنا في السعودية:" : "Our Service Areas in Saudi Arabia:"}</h3>
            <p>{isArabic 
              ? "نحن نقدم خدماتنا في جميع مدن ومناطق المملكة العربية السعودية بما في ذلك: الرياض (مقرنا الرئيسي)، جدة، الدمام، الخبر، الظهران، مكة المكرمة، المدينة المنورة، الطائف، أبها، نجران، جازان، حائل، تبوك، بريدة، والقصيم."
              : "We provide our services in all cities and regions of Saudi Arabia including: Riyadh (our headquarters), Jeddah, Dammam, Al Khobar, Dhahran, Mecca, Medina, Taif, Abha, Najran, Jazan, Hail, Tabuk, Buraidah, and Al Qassim."
            }</p>
            
            <h3>{isArabic ? "قيمنا الأساسية:" : "Our Core Values:"}</h3>
            <ul>
              <li>{isArabic ? "الجودة في كل ما نقوم به" : "Quality in everything we do"}</li>
              <li>{isArabic ? "الموثوقية والالتزام بالمواعيد" : "Reliability and commitment to deadlines"}</li>
              <li>{isArabic ? "الشفافية في التسعير والخدمة" : "Transparency in pricing and service"}</li>
              <li>{isArabic ? "الابتكار في حلول الصيانة" : "Innovation in maintenance solutions"}</li>
              <li>{isArabic ? "رضا العملاء كأولوية قصوى" : "Customer satisfaction as top priority"}</li>
            </ul>
            
            <p>{isArabic 
              ? "فريقنا يتكون من أكثر من 50 مهندس وفني معتمدين يتمتعون بخبرة واسعة في جميع مجالات الصيانة. نحن نستخدم أحدث المعدات والتقنيات لضمان تقديم خدمة عالية الجودة لعملائنا."
              : "Our team consists of over 50 certified engineers and technicians with extensive experience in all maintenance fields. We use the latest equipment and technologies to ensure high-quality service for our clients."
            }</p>
            
            <p><strong>{isArabic ? "لماذا تختار رام المحدودة؟" : "Why Choose Ram Limited?"}</strong></p>
            <ul>
              <li>{isArabic ? "10+ سنوات خبرة في سوق الصيانة السعودي" : "10+ years experience in the Saudi maintenance market"}</li>
              <li>{isArabic ? "فريق معتمد ومدرب على أعلى المعايير" : "Certified team trained to highest standards"}</li>
              <li>{isArabic ? "خدمة 24/7 للطوارئ في جميع أنحاء السعودية" : "24/7 emergency service throughout Saudi Arabia"}</li>
              <li>{isArabic ? "أسعار تنافسية وشفافة" : "Competitive and transparent pricing"}</li>
              <li>{isArabic ? "ضمان على جميع خدماتنا" : "Warranty on all our services"}</li>
              <li>{isArabic ? "استجابة سريعة خلال ساعتين" : "Quick response within 2 hours"}</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUsCover;