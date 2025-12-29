import React from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { useLanguage } from "../../../context/LanguageContext";
import ProjectHero from "../../../assets/images/ProjectHero.webp";

const HeroSection = () => {
  const { lang } = useLanguage();
  const isArabic = lang === "ar";

  // Enhanced SEO content
  const content = {
    en: {
      heading: "Our Projects",
      description: "Explore the diverse range of successful projects delivered by Ram Limited — showcasing our commitment to quality, innovation, and exceptional craftsmanship.",
      button: "View All Projects",
      seoTitle: "Our Maintenance Projects | Ram Limited - Completed Projects Portfolio Saudi Arabia",
      seoDescription: "Explore successful maintenance projects by Ram Limited in Saudi Arabia: AC, electrical, plumbing, painting projects. Quality, innovation, exceptional craftsmanship.",
      keywords: "maintenance projects saudi arabia, completed projects portfolio, ac maintenance projects, electrical projects riyadh, plumbing projects jeddah, painting projects dammam",
      schema: {
        name: "Ram Limited Projects Portfolio",
        description: "Portfolio of completed maintenance projects by Ram Limited in Saudi Arabia"
      }
    },
    ar: {
      heading: "مشاريعنا",
      description: "استكشف مجموعة متنوعة من المشاريع الناجحة التي نفذتها رام المحدودة — مظهرة التزامنا بالجودة والابتكار والحرفية الاستثنائية.",
      button: "عرض جميع المشاريع",
      seoTitle: "مشاريع الصيانة الخاصة بنا | رام المحدودة - محفظة المشاريع المكتملة السعودية",
      seoDescription: "استكشف مشاريع الصيانة الناجحة لرام المحدودة في السعودية: مشاريع تكييف، كهرباء، سباكة، دهان. الجودة، الابتكار، حرفية استثنائية.",
      keywords: "مشاريع صيانة السعودية, محفظة المشاريع المكتملة, مشاريع تكييف, مشاريع كهرباء الرياض, مشاريع سباكة جدة, مشاريع دهان الدمام",
      schema: {
        name: "محفظة مشاريع رام المحدودة",
        description: "محفظة مشاريع الصيانة المكتملة لرام المحدودة في السعودية"
      }
    },
  };

  const currentContent = content[lang];

  return (
    <>
      {/* Enhanced SEO Head Tags */}
      <Helmet>
        <title>{currentContent.seoTitle}</title>
        <meta name="description" content={currentContent.seoDescription} />
        <meta name="keywords" content={currentContent.keywords} />
        
        {/* Canonical URL */}
        <link rel="canonical" href={typeof window !== 'undefined' ? window.location.origin + "/projects" : ""} />
        
        {/* Open Graph */}
        <meta property="og:title" content={currentContent.seoTitle} />
        <meta property="og:description" content={currentContent.seoDescription} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={typeof window !== 'undefined' ? window.location.origin + "/projects" : ""} />
        <meta property="og:image" content={typeof window !== 'undefined' ? `${window.location.origin}${ProjectHero}` : ""} />
        <meta property="og:image:alt" content={currentContent.heading} />
        <meta property="og:image:width" content="1920" />
        <meta property="og:image:height" content="1080" />
        <meta property="og:locale" content={isArabic ? "ar_SA" : "en_SA"} />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={currentContent.seoTitle} />
        <meta name="twitter:description" content={currentContent.seoDescription} />
        <meta name="twitter:image" content={typeof window !== 'undefined' ? `${window.location.origin}${ProjectHero}` : ""} />
        
        {/* Hreflang */}
        <link rel="alternate" hrefLang="ar-SA" href={typeof window !== 'undefined' ? window.location.origin + "/projects?lang=ar" : ""} />
        <link rel="alternate" hrefLang="en-SA" href={typeof window !== 'undefined' ? window.location.origin + "/projects?lang=en" : ""} />
        
        {/* Structured Data for Projects Hero */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "WebPage",
                "name": currentContent.schema.name,
                "description": currentContent.schema.description,
                "url": typeof window !== 'undefined' ? window.location.origin + "/projects" : "",
                "primaryImageOfPage": {
                  "@type": "ImageObject",
                  "url": typeof window !== 'undefined' ? `${window.location.origin}${ProjectHero}` : "",
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
                      "name": isArabic ? "المشاريع" : "Projects",
                      "item": typeof window !== 'undefined' ? window.location.origin + "/projects" : ""
                    }
                  ]
                }
              },
              {
                "@type": "ImageObject",
                "contentUrl": typeof window !== 'undefined' ? `${window.location.origin}${ProjectHero}` : "",
                "name": currentContent.heading,
                "description": currentContent.description,
                "thumbnail": {
                  "@type": "ImageObject",
                  "contentUrl": typeof window !== 'undefined' ? `${window.location.origin}${ProjectHero}` : "",
                  "width": "400",
                  "height": "300"
                },
                "associatedArticle": {
                  "@type": "Article",
                  "headline": currentContent.heading,
                  "description": currentContent.description,
                  "publisher": {
                    "@type": "Organization",
                    "name": "Ram Limited",
                    "logo": {
                      "@type": "ImageObject",
                      "url": typeof window !== 'undefined' ? `${window.location.origin}/logo.png` : ""
                    }
                  }
                }
              }
            ]
          })}
        </script>
      </Helmet>

      <div
        className="relative w-full h-[55vh] sm:h-[65vh] md:h-[75vh] lg:h-[85vh] overflow-hidden"
        dir={isArabic ? "rtl" : "ltr"}
        itemScope
        itemType="https://schema.org/WebPage"
      >
        {/* Background Image with SEO attributes */}
        <motion.img
          src={ProjectHero}
          alt={currentContent.heading + (isArabic ? " - صورة رئيسية" : " - Hero Image")}
          initial={{ scale: 1.2, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.4, ease: "easeOut" }}
          className="w-full h-full object-cover"
          loading="eager"
          itemProp="primaryImageOfPage"
        />

        {/* Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70"></div>

        {/* Text Content */}
        <div className="absolute inset-0 flex flex-col justify-center items-start px-4 sm:px-6 md:px-16 lg:px-32 space-y-4">
          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="font-sans font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white leading-tight"
            itemProp="headline"
          >
            {isArabic ? (
              <>
                {currentContent.heading}
                <span className="text-primary drop-shadow-lg">{isArabic ? "" : " Projects"}</span>
              </>
            ) : (
              <>
                Our <span className="text-primary drop-shadow-lg">{currentContent.heading}</span>
              </>
            )}
          </motion.h1>

          {/* Paragraph */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2, ease: "easeOut" }}
            className="font-sans font-medium text-sm sm:text-base md:text-lg lg:text-xl text-white/85 max-w-lg md:max-w-xl leading-relaxed"
            itemProp="description"
          >
            {currentContent.description}
          </motion.p>

          {/* Optional CTA Button */}
          <motion.button
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.35 }}
            className="mt-4 px-6 py-3 bg-primary text-white font-semibold rounded-lg shadow-lg hover:bg-primary/90 hover:shadow-xl transition-all duration-300"
            aria-label={currentContent.button}
            itemProp="significantLink"
          >
            {currentContent.button}
          </motion.button>
        </div>

        {/* Hidden SEO Content for Search Engines */}
        <div className="hidden" aria-hidden="true">
          <h2>{isArabic ? "مقدمة عن محفظة مشاريع رام المحدودة" : "Introduction to Ram Limited Projects Portfolio"}</h2>
          <p>{isArabic 
            ? "تفتخر رام المحدودة بمحفظة مشاريع غنية ومتنوعة تشمل أكثر من 500 مشروع صيانة مكتمل في جميع أنحاء المملكة العربية السعودية. منذ تأسيسنا في عام 2013، قمنا بتنفيذ مشاريع في مختلف القطاعات والمدن، مما يجعلنا شركة الصيانة المفضلة للعديد من العملاء في القطاعين العام والخاص."
            : "Ram Limited is proud of a rich and diverse project portfolio that includes over 500 completed maintenance projects throughout Saudi Arabia. Since our establishment in 2013, we have executed projects in various sectors and cities, making us the preferred maintenance company for many clients in both public and private sectors."
          }</p>
          
          <h3>{isArabic ? "أرقام وإحصائيات محفظة المشاريع:" : "Project Portfolio Numbers and Statistics:"}</h3>
          <ul>
            <li>{isArabic ? "500+ مشروع صيانة مكتمل" : "500+ completed maintenance projects"}</li>
            <li>{isArabic ? "227,563+ متر مربع من المساحة المنفذة" : "227,563+ square meters of executed area"}</li>
            <li>{isArabic ? "2,700+ تقييم إيجابي من العملاء" : "2,700+ positive customer reviews"}</li>
            <li>{isArabic ? "67 عضو فريق معتمد" : "67 certified team members"}</li>
            <li>{isArabic ? "7 شهادات جودة معتمدة" : "7 certified quality qualifications"}</li>
            <li>{isArabic ? "10+ سنوات خبرة في السوق السعودي" : "10+ years experience in Saudi market"}</li>
            <li>{isArabic ? "5+ قطاعات مختلفة من المشاريع" : "5+ different project sectors"}</li>
            <li>{isArabic ? "15+ مدينة سعودية تم تنفيذ مشاريع فيها" : "15+ Saudi cities where projects have been executed"}</li>
          </ul>
          
          <h3>{isArabic ? "قطاعات المشاريع التي نغطيها:" : "Project Sectors We Cover:"}</h3>
          <ul>
            <li><strong>{isArabic ? "المشاريع السكنية:" : "Residential Projects:"}</strong> {isArabic 
              ? "صيانة وتجديد المنازل، الشقق، الفلل، والمجمعات السكنية في الرياض، جدة، الدمام، ومكة، والمدينة المنورة."
              : "Maintenance and renovation of homes, apartments, villas, and residential compounds in Riyadh, Jeddah, Dammam, Mecca, and Medina."}</li>
            <li><strong>{isArabic ? "المشاريع التجارية:" : "Commercial Projects:"}</strong> {isArabic 
              ? "صيانة المكاتب، المباني الإدارية، المراكز التجارية، والمولات في جميع أنحاء المملكة."
              : "Maintenance of offices, administrative buildings, commercial centers, and malls throughout the Kingdom."}</li>
            <li><strong>{isArabic ? "المشاريع الصناعية:" : "Industrial Projects:"}</strong> {isArabic 
              ? "صيانة المصانع، المستودعات، المنشآت الصناعية، ومحطات التوليد في المناطق الصناعية السعودية."
              : "Maintenance of factories, warehouses, industrial facilities, and generation stations in Saudi industrial areas."}</li>
            <li><strong>{isArabic ? "المشاريع الصحية:" : "Healthcare Projects:"}</strong> {isArabic 
              ? "صيانة المستشفيات، العيادات، المراكز الصحية، والمختبرات الطبية مع الالتزام بأعلى معايير النظافة والتعقيم."
              : "Maintenance of hospitals, clinics, health centers, and medical laboratories with commitment to highest cleanliness and sterilization standards."}</li>
            <li><strong>{isArabic ? "المشاريع التعليمية:" : "Educational Projects:"}</strong> {isArabic 
              ? "صيانة المدارس، الجامعات، المعاهد، والمباني التعليمية الحكومية والخاصة."
              : "Maintenance of schools, universities, institutes, and government and private educational buildings."}</li>
            <li><strong>{isArabic ? "المشاريع الدينية:" : "Religious Projects:"}</strong> {isArabic 
              ? "صيانة المساجد، الجوامع، والمباني الدينية مع مراعاة الحساسية الدينية والروحانية."
              : "Maintenance of mosques, grand mosques, and religious buildings with consideration of religious sensitivity and spirituality."}</li>
            <li><strong>{isArabic ? "المشاريع الحكومية:" : "Government Projects:"}</strong> {isArabic 
              ? "صيانة المباني الحكومية، الدوائر الرسمية، والمؤسسات الحكومية في جميع أنحاء المملكة."
              : "Maintenance of government buildings, official departments, and government institutions throughout the Kingdom."}</li>
          </ul>
          
          <h3>{isArabic ? "أنواع خدمات الصيانة في مشاريعنا:" : "Types of Maintenance Services in Our Projects:"}</h3>
          <ul>
            <li>{isArabic ? "صيانة وتركيب أنظمة التكييف والتبريد" : "AC and cooling system maintenance and installation"}</li>
            <li>{isArabic ? "الصيانة الكهربائية وتركيب الأنظمة الكهربائية" : "Electrical maintenance and electrical system installation"}</li>
            <li>{isArabic ? "خدمات السباكة وإصلاح الأنظمة الصحية" : "Plumbing services and sanitary system repairs"}</li>
            <li>{isArabic ? "خدمات الدهان والطلاء الداخلي والخارجي" : "Interior and exterior painting and coating services"}</li>
            <li>{isArabic ? "الصيانة الوقائية والدورية للمباني" : "Preventive and periodic building maintenance"}</li>
            <li>{isArabic ? "إدارة المرافق والصيانة الشاملة" : "Facility management and comprehensive maintenance"}</li>
            <li>{isArabic ? "خدمات الطوارئ والصيانة السريعة" : "Emergency services and rapid maintenance"}</li>
            <li>{isArabic ? "عقود الصيانة السنوية (AMC)" : "Annual Maintenance Contracts (AMC)"}</li>
          </ul>
          
          <h3>{isArabic ? "مدن المملكة التي نفذنا فيها مشاريع:" : "Kingdom Cities Where We Have Executed Projects:"}</h3>
          <p>{isArabic 
            ? "نحن نفخر بتنفيذ مشاريع في جميع أنحاء المملكة العربية السعودية، بما في ذلك: الرياض (العاصمة)، جدة (عروس البحر الأحمر)، الدمام (المنطقة الشرقية)، الخبر، الظهران، مكة المكرمة، المدينة المنورة، الطائف، أبها، نجران، جازان، حائل، تبوك، بريدة، والقصيم. بالإضافة إلى العديد من المدن والمناطق الأخرى في المملكة."
            : "We pride ourselves on executing projects throughout Saudi Arabia, including: Riyadh (capital), Jeddah (Bride of the Red Sea), Dammam (Eastern Province), Al Khobar, Dhahran, Mecca, Medina, Taif, Abha, Najran, Jazan, Hail, Tabuk, Buraidah, and Al Qassim. In addition to many other cities and regions in the Kingdom."
          }</p>
          
          <h3>{isArabic ? "لماذا تختار محفظة مشاريع رام المحدودة؟" : "Why Choose Ram Limited Projects Portfolio?"}</h3>
          <ul>
            <li>{isArabic ? "تنوع المشاريع عبر جميع القطاعات" : "Project diversity across all sectors"}</li>
            <li>{isArabic ? "خبرة 10+ سنوات في السوق السعودي" : "10+ years experience in Saudi market"}</li>
            <li>{isArabic ? "فريق معتمد من 67+ مهندس وفني" : "Certified team of 67+ engineers and technicians"}</li>
            <li>{isArabic ? "أكثر من 500 مشروع مكتمل بنجاح" : "Over 500 successfully completed projects"}</li>
            <li>{isArabic ? "أسعار شفافة وتنافسية" : "Transparent and competitive pricing"}</li>
            <li>{isArabic ? "التزام بالمواعيد والجداول الزمنية" : "Commitment to deadlines and timelines"}</li>
            <li>{isArabic ? "استخدام مواد ومعدات عالية الجودة" : "Use of high-quality materials and equipment"}</li>
            <li>{isArabic ? "ضمان على جميع الأعمال المنفذة" : "Warranty on all completed work"}</li>
            <li>{isArabic ? "خدمة دعم فني 24/7" : "24/7 technical support service"}</li>
          </ul>
          
          <h3>{isArabic ? "كيفية استعراض مشاريعنا:" : "How to Browse Our Projects:"}</h3>
          <p>{isArabic 
            ? "يمكنك استعراض محفظة مشاريعنا من خلال التصنيفات التالية: حسب القطاع (سكني، تجاري، صناعي، صحي، تعليمي)، حسب المدينة (الرياض، جدة، الدمام، وغيرها)، حسب نوع الخدمة (تكييف، كهرباء، سباكة، دهان)، أو حسب السنة (2024، 2023، 2022، وما قبل). انقر على زر 'عرض جميع المشاريع' لرؤية الكل."
            : "You can browse our project portfolio through the following categories: by sector (residential, commercial, industrial, healthcare, educational), by city (Riyadh, Jeddah, Dammam, etc.), by service type (AC, electrical, plumbing, painting), or by year (2024, 2023, 2022, and before). Click the 'View All Projects' button to see everything."
          }</p>
          
          <p><strong>{isArabic ? "كيفية بدء مشروعك معنا:" : "How to Start Your Project With Us:"}</strong></p>
          <p>{isArabic 
            ? "لبدء مشروعك مع رام المحدودة، يمكنك الاتصال بنا على +966-XXXXXXXXXX أو ملء نموذج طلب عرض السعر على موقعنا. سنقوم بالرد عليك خلال ساعتين عمل لتحديد موعد زيارة موقعك وتقديم عرض مفصل لمشروعك."
            : "To start your project with Ram Limited, you can contact us at +966-XXXXXXXXXX or fill out the quote request form on our website. We will respond to you within 2 business hours to schedule a site visit and provide a detailed quote for your project."
          }</p>
        </div>
      </div>
    </>
  );
};

export default HeroSection;