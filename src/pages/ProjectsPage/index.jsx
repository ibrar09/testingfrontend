import React from "react";
import HeroSection from "./components/HeroSection";
import WhyChooseRamLimited from "./components/WhyChoseMaaj"; // Rename the file later if needed
import ReadyToStart from "./components/ReadyToStart";
import ProjectsPage from "./components/ProjectsPage";
import { Helmet } from "react-helmet-async";
import { useLanguage } from "../../context/LanguageContext";

const Index = () => {
  const { lang } = useLanguage();
  const isArabic = lang === "ar";

  // Enhanced SEO content
  const seoContent = {
    en: {
      title: "Ram Limited - Premium Maintenance Projects & Services in Saudi Arabia",
      description: "Ram Limited delivers professional maintenance services in Saudi Arabia: AC, electrical, plumbing, painting projects. 10+ years experience, 500+ completed projects, certified team.",
      keywords: "maintenance projects saudi arabia, building maintenance riyadh, ac maintenance company, electrical projects jeddah, plumbing services dammam",
      schema: {
        name: "Ram Limited Maintenance Projects Portfolio",
        description: "Portfolio of maintenance projects completed by Ram Limited in Saudi Arabia"
      }
    },
    ar: {
      title: "رام المحدودة - مشاريع وخدمات صيانة متميزة في السعودية",
      description: "رام المحدودة تقدم خدمات صيانة احترافية في السعودية: مشاريع تكييف، كهرباء، سباكة، دهان. خبرة 10+ سنوات، 500+ مشروع مكتمل، فريق معتمد.",
      keywords: "مشاريع صيانة السعودية, صيانة مباني الرياض, شركة تكييف, مشاريع كهرباء جدة, خدمات سباكة الدمام",
      schema: {
        name: "محفظة مشاريع صيانة رام المحدودة",
        description: "محفظة مشاريع الصيانة التي أتمتها رام المحدودة في السعودية"
      }
    },
  };

  const currentContent = seoContent[lang];

  return (
    <div dir={isArabic ? "rtl" : "ltr"} itemScope itemType="https://schema.org/WebPage">
      {/* Enhanced SEO Meta */}
      <Helmet>
        <title>{currentContent.title}</title>
        <meta name="description" content={currentContent.description} />
        <meta name="keywords" content={currentContent.keywords} />
        
        {/* Canonical URL */}
        <link rel="canonical" href={typeof window !== 'undefined' ? window.location.origin + "/projects" : ""} />
        
        {/* Open Graph */}
        <meta property="og:title" content={currentContent.title} />
        <meta property="og:description" content={currentContent.description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={typeof window !== 'undefined' ? window.location.origin + "/projects" : ""} />
        <meta property="og:image" content={typeof window !== 'undefined' ? `${window.location.origin}/og-projects.jpg` : ""} />
        <meta property="og:image:alt" content={isArabic ? "مشاريع صيانة رام المحدودة" : "Ram Limited Maintenance Projects"} />
        <meta property="og:locale" content={isArabic ? "ar_SA" : "en_SA"} />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={currentContent.title} />
        <meta name="twitter:description" content={currentContent.description} />
        
        {/* Hreflang */}
        <link rel="alternate" hrefLang="ar-SA" href={typeof window !== 'undefined' ? window.location.origin + "/projects?lang=ar" : ""} />
        <link rel="alternate" hrefLang="en-SA" href={typeof window !== 'undefined' ? window.location.origin + "/projects?lang=en" : ""} />
        
        {/* Structured Data for Projects Portfolio */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "WebPage",
                "name": currentContent.schema.name,
                "description": currentContent.schema.description,
                "url": typeof window !== 'undefined' ? window.location.origin + "/projects" : "",
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
                },
                "primaryImageOfPage": {
                  "@type": "ImageObject",
                  "url": typeof window !== 'undefined' ? `${window.location.origin}/og-projects.jpg` : "",
                  "width": "1200",
                  "height": "630",
                  "caption": currentContent.title
                },
                "about": {
                  "@type": "Organization",
                  "name": "Ram Limited",
                  "description": isArabic 
                    ? "شركة صيانة متخصصة في المشاريع الكبيرة والصغيرة في السعودية"
                    : "Maintenance company specializing in large and small projects in Saudi Arabia"
                }
              },
              {
                "@type": "Organization",
                "name": "Ram Limited",
                "legalName": isArabic ? "شركة رام المحدودة" : "Ram Limited Company",
                "description": isArabic 
                  ? "شركة صيانة متخصصة في تنفيذ المشاريع في المملكة العربية السعودية"
                  : "Maintenance company specialized in project execution in Saudi Arabia",
                "url": typeof window !== 'undefined' ? window.location.origin : "",
                "logo": typeof window !== 'undefined' ? `${window.location.origin}/logo.png` : "",
                "foundingDate": "2013",
                "numberOfEmployees": {
                  "@type": "QuantitativeValue",
                  "value": "67",
                  "unitText": isArabic ? "أعضاء الفريق" : "Team Members"
                },
                "knowsAbout": [
                  isArabic ? "مشاريع صيانة المباني" : "Building Maintenance Projects",
                  isArabic ? "مشاريع التكييف والتبريد" : "AC and Cooling Projects",
                  isArabic ? "المشاريع الكهربائية" : "Electrical Projects",
                  isArabic ? "مشاريع السباكة" : "Plumbing Projects",
                  isArabic ? "مشاريع الدهان والطلاء" : "Painting and Coating Projects",
                  isArabic ? "إدارة مشاريع الصيانة" : "Maintenance Project Management"
                ],
                "award": [
                  isArabic ? "أسرع تنفيذ مشروع بوريريز 2024" : "Burerizz Fastest Fit Out 2024",
                  isArabic ? "أفضل خدمة نصف مليون 2024" : "Half Million Best Service 2024",
                  isArabic ? "دعم ذهب مول سوليتير 2025" : "Solitaire Mall Gold Support 2025"
                ],
                "aggregateRating": {
                  "@type": "AggregateRating",
                  "ratingValue": "4.8",
                  "ratingCount": "2700",
                  "bestRating": "5",
                  "worstRating": "1"
                },
                "makesOffer": {
                  "@type": "AggregateOffer",
                  "offerCount": "227563",
                  "priceCurrency": "SAR",
                  "availability": "https://schema.org/InStock"
                },
                "areaServed": {
                  "@type": "GeoShape",
                  "box": "24.5 46.4 25.0 47.0"
                }
              },
              {
                "@type": "ItemList",
                "name": isArabic ? "أنواع المشاريع المنفذة" : "Types of Projects Executed",
                "description": isArabic 
                  ? "أنواع مختلفة من مشاريع الصيانة التي نفذتها رام المحدودة"
                  : "Different types of maintenance projects executed by Ram Limited",
                "numberOfItems": 8,
                "itemListElement": [
                  {
                    "@type": "ListItem",
                    "position": 1,
                    "item": {
                      "@type": "Service",
                      "name": isArabic ? "مشاريع صيانة المنازل" : "Home Maintenance Projects",
                      "description": isArabic 
                        ? "صيانة وتجديد المنازل والشقق السكنية"
                        : "Maintenance and renovation of homes and residential apartments"
                    }
                  },
                  {
                    "@type": "ListItem",
                    "position": 2,
                    "item": {
                      "@type": "Service",
                      "name": isArabic ? "مشاريع صيانة المكاتب" : "Office Maintenance Projects",
                      "description": isArabic 
                        ? "صيانة المباني الإدارية والمكاتب"
                        : "Maintenance of administrative buildings and offices"
                    }
                  },
                  {
                    "@type": "ListItem",
                    "position": 3,
                    "item": {
                      "@type": "Service",
                      "name": isArabic ? "مشاريع المراكز التجارية" : "Commercial Center Projects",
                      "description": isArabic 
                        ? "صيانة المولات والمراكز التجارية"
                        : "Maintenance of malls and commercial centers"
                    }
                  },
                  {
                    "@type": "ListItem",
                    "position": 4,
                    "item": {
                      "@type": "Service",
                      "name": isArabic ? "مشاريع المستشفيات" : "Hospital Projects",
                      "description": isArabic 
                        ? "صيانة المستشفيات والمراكز الصحية"
                        : "Maintenance of hospitals and health centers"
                    }
                  },
                  {
                    "@type": "ListItem",
                    "position": 5,
                    "item": {
                      "@type": "Service",
                      "name": isArabic ? "مشاريع المصانع" : "Factory Projects",
                      "description": isArabic 
                        ? "صيانة المصانع والمنشآت الصناعية"
                        : "Maintenance of factories and industrial facilities"
                    }
                  },
                  {
                    "@type": "ListItem",
                    "position": 6,
                    "item": {
                      "@type": "Service",
                      "name": isArabic ? "مشاريع الفنادق" : "Hotel Projects",
                      "description": isArabic 
                        ? "صيانة الفنادق والمنتجعات"
                        : "Maintenance of hotels and resorts"
                    }
                  },
                  {
                    "@type": "ListItem",
                    "position": 7,
                    "item": {
                      "@type": "Service",
                      "name": isArabic ? "مشاريع المؤسسات التعليمية" : "Educational Institution Projects",
                      "description": isArabic 
                        ? "صيانة المدارس والجامعات"
                        : "Maintenance of schools and universities"
                    }
                  },
                  {
                    "@type": "ListItem",
                    "position": 8,
                    "item": {
                      "@type": "Service",
                      "name": isArabic ? "مشاريع المباني الدينية" : "Religious Building Projects",
                      "description": isArabic 
                        ? "صيانة المساجد والمباني الدينية"
                        : "Maintenance of mosques and religious buildings"
                    }
                  }
                ]
              }
            ]
          })}
        </script>
      </Helmet>

      {/* Page Sections */}
      <HeroSection />
      <ProjectsPage />
      <WhyChooseRamLimited />
      <ReadyToStart />

      {/* Hidden SEO Content for Search Engines */}
      <div className="hidden" aria-hidden="true">
        <h1>{currentContent.title}</h1>
        
        <h2>{isArabic ? "مقدمة عن مشاريع رام المحدودة" : "Introduction to Ram Limited Projects"}</h2>
        <p>{isArabic 
          ? "رام المحدودة هي شركة سعودية رائدة في مجال خدمات الصيانة وتنفيذ المشاريع في المملكة العربية السعودية. منذ تأسيسها في عام 2013، قمنا بتنفيذ أكثر من 500 مشروع صيانة في جميع أنحاء المملكة، مما يجعلنا واحدة من أكثر شركات الصيانة خبرة وثقة في السوق السعودي."
          : "Ram Limited is a leading Saudi company in maintenance services and project execution in Saudi Arabia. Since our establishment in 2013, we have executed over 500 maintenance projects throughout the Kingdom, making us one of the most experienced and trusted maintenance companies in the Saudi market."
        }</p>
        
        <h2>{isArabic ? "إحصائيات مشاريعنا:" : "Our Project Statistics:"}</h2>
        <ul>
          <li>{isArabic ? "500+ مشروع صيانة مكتمل" : "500+ completed maintenance projects"}</li>
          <li>{isArabic ? "227,563+ متر مربع من المساحة المنفذة" : "227,563+ square meters of executed area"}</li>
          <li>{isArabic ? "2,700+ تقييم إيجابي من العملاء" : "2,700+ positive customer reviews"}</li>
          <li>{isArabic ? "67 عضو فريق معتمد" : "67 certified team members"}</li>
          <li>{isArabic ? "7 شهادات جودة معتمدة" : "7 certified quality qualifications"}</li>
          <li>{isArabic ? "10+ سنوات خبرة في السوق السعودي" : "10+ years experience in Saudi market"}</li>
        </ul>
        
        <h2>{isArabic ? "مجالات تخصص مشاريعنا:" : "Our Project Specialization Areas:"}</h2>
        <p>{isArabic 
          ? "نحن متخصصون في تنفيذ جميع أنواع مشاريع الصيانة بما في ذلك:"
          : "We specialize in executing all types of maintenance projects including:"
        }</p>
        
        <h3>{isArabic ? "1. مشاريع صيانة وتركيب أنظمة التكييف:" : "1. AC System Maintenance and Installation Projects:"}</h3>
        <p>{isArabic 
          ? "نقوم بتنفيذ مشاريع صيانة وتركيب أنظمة التكييف المركزية، السبليت، والنوافذ لجميع أنواع المباني في الرياض، جدة، الدمام، وغيرها من المدن السعودية."
          : "We execute maintenance and installation projects for central AC systems, split units, and window units for all types of buildings in Riyadh, Jeddah, Dammam, and other Saudi cities."
        }</p>
        
        <h3>{isArabic ? "2. مشاريع الصيانة الكهربائية:" : "2. Electrical Maintenance Projects:"}</h3>
        <p>{isArabic 
          ? "تشمل مشاريعنا الكهربائية: تركيب الأنظمة الكهربائية الجديدة، ترقية اللوحات الكهربائية، تركيب الإضاءة LED، وإصلاح الأعطال الكهربائية للمباني السكنية والتجارية."
          : "Our electrical projects include: installation of new electrical systems, upgrading electrical panels, LED lighting installation, and repair of electrical faults for residential and commercial buildings."
        }</p>
        
        <h3>{isArabic ? "3. مشاريع خدمات السباكة:" : "3. Plumbing Services Projects:"}</h3>
        <p>{isArabic 
          ? "ننفذ مشاريع سباكة شاملة تشمل: إصلاح تسربات المياه، تركيب أنظمة السباكة الجديدة، صيانة أنظمة الصرف الصحي، وخدمات السباكة الطارئة للمنازل والمباني التجارية."
          : "We execute comprehensive plumbing projects including: water leak repairs, installation of new plumbing systems, maintenance of sewage systems, and emergency plumbing services for homes and commercial buildings."
        }</p>
        
        <h3>{isArabic ? "4. مشاريع الدهان والطلاء:" : "4. Painting and Coating Projects:"}</h3>
        <p>{isArabic 
          ? "تشمل مشاريع الدهان: الدهان الداخلي للمنازل والمكاتب، الدهان الخارجي للمباني، تحضير الأسطح، واستخدام أنواع الطلاء عالية الجودة المقاومة للعوامل الجوية في المناخ السعودي."
          : "Our painting projects include: interior painting of homes and offices, exterior painting of buildings, surface preparation, and use of high-quality weather-resistant paint types suitable for the Saudi climate."
        }</p>
        
        <h3>{isArabic ? "5. مشاريع الصيانة الشاملة للمباني:" : "5. Comprehensive Building Maintenance Projects:"}</h3>
        <p>{isArabic 
          ? "نقدم عقود صيانة سنوية (AMC) تشمل جميع خدمات الصيانة للمباني الكبيرة مثل المراكز التجارية، المستشفيات، المصانع، والمجمعات السكنية في جميع أنحاء السعودية."
          : "We offer annual maintenance contracts (AMC) covering all maintenance services for large buildings such as shopping centers, hospitals, factories, and residential complexes throughout Saudi Arabia."
        }</p>
        
        <h2>{isArabic ? "مناطق تنفيذ المشاريع:" : "Project Execution Areas:"}</h2>
        <p>{isArabic 
          ? "نحن ننفذ مشاريعنا في جميع مدن ومناطق المملكة العربية السعودية بما في ذلك: الرياض (العاصمة ومقرنا الرئيسي)، جدة (عروس البحر الأحمر)، الدمام (المنطقة الشرقية)، الخبر، الظهران، مكة المكرمة، المدينة المنورة، الطائف، أبها، نجران، جازان، حائل، تبوك، بريدة، والقصيم."
          : "We execute our projects in all cities and regions of Saudi Arabia including: Riyadh (capital and our headquarters), Jeddah (Bride of the Red Sea), Dammam (Eastern Province), Al Khobar, Dhahran, Mecca, Medina, Taif, Abha, Najran, Jazan, Hail, Tabuk, Buraidah, and Al Qassim."
        }</p>
        
        <h2>{isArabic ? "عملية تنفيذ المشروع:" : "Project Execution Process:"}</h2>
        <ol>
          <li>{isArabic ? "التقييم الأولي ودراسة الجدوى" : "Initial assessment and feasibility study"}</li>
          <li>{isArabic ? "التخطيط التفصيلي وتصميم الحلول" : "Detailed planning and solution design"}</li>
          <li>{isArabic ? "تقديم عرض السعر والجدول الزمني" : "Price quote and timeline presentation"}</li>
          <li>{isArabic ? "توقيع العقد والبدء في التنفيذ" : "Contract signing and execution start"}</li>
          <li>{isArabic ? "التنفيذ مع مراقبة الجودة المستمرة" : "Execution with continuous quality monitoring"}</li>
          <li>{isArabic ? "التسليم النهائي والتدريب إذا لزم الأمر" : "Final delivery and training if needed"}</li>
          <li>{isArabic ? "المتابعة والدعم بعد الانتهاء" : "Follow-up and support after completion"}</li>
        </ol>
        
        <h2>{isArabic ? "لماذا تختار رام المحدودة لمشاريعك؟" : "Why Choose Ram Limited for Your Projects?"}</h2>
        <ul>
          <li>{isArabic ? "خبرة 10+ سنوات في السوق السعودي" : "10+ years experience in Saudi market"}</li>
          <li>{isArabic ? "فريق معتمد من 67+ مهندس وفني" : "Certified team of 67+ engineers and technicians"}</li>
          <li>{isArabic ? "أكثر من 500 مشروع مكتمل بنجاح" : "Over 500 successfully completed projects"}</li>
          <li>{isArabic ? "أسعار شفافة وتنافسية" : "Transparent and competitive pricing"}</li>
          <li>{isArabic ? "التزام بالمواعيد والجداول الزمنية" : "Commitment to deadlines and timelines"}</li>
          <li>{isArabic ? "استخدام مواد ومعدات عالية الجودة" : "Use of high-quality materials and equipment"}</li>
          <li>{isArabic ? "ضمان على جميع الأعمال المنفذة" : "Warranty on all completed work"}</li>
          <li>{isArabic ? "خدمة دعم فني 24/7" : "24/7 technical support service"}</li>
        </ul>
        
        <h2>{isArabic ? "الجوائز والتقديرات:" : "Awards and Recognitions:"}</h2>
        <p>{isArabic 
          ? "حصلت رام المحدودة على العديد من الجوائز والتقديرات على مدار السنوات الماضية، بما في ذلك جائزة أسرع تنفيذ مشروع بوريريز 2024، جائزة أفضل خدمة نصف مليون 2024، وجائزة دعم ذهب مول سوليتير 2025. هذه الجوائز تعكس التزامنا بالتميز والجودة في جميع مشاريعنا."
          : "Ram Limited has received numerous awards and recognitions over the past years, including the Burerizz Fastest Fit Out Award 2024, Half Million Best Service Award 2024, and Solitaire Mall Gold Support Award 2025. These awards reflect our commitment to excellence and quality in all our projects."
        }</p>
        
        <h2>{isArabic ? "كيفية بدء مشروعك معنا:" : "How to Start Your Project With Us:"}</h2>
        <p>{isArabic 
          ? "لبدء مشروعك مع رام المحدودة، يمكنك الاتصال بنا على +966-XXXXXXXXXX أو ملء نموذج طلب عرض السعر على موقعنا. سنقوم بالرد عليك خلال ساعتين عمل لتحديد موعد زيارة موقعك وتقديم عرض مفصل لمشروعك."
          : "To start your project with Ram Limited, you can contact us at +966-XXXXXXXXXX or fill out the quote request form on our website. We will respond to you within 2 business hours to schedule a site visit and provide a detailed quote for your project."
        }</p>
        
        <p><strong>{isArabic ? "رؤيتنا للمستقبل:" : "Our Vision for the Future:"}</strong></p>
        <p>{isArabic 
          ? "نسعى لتنفيذ 1000+ مشروع صيانة في جميع أنحاء المملكة العربية السعودية بحلول عام 2030، وتوسيع خدماتنا لتشمل المزيد من المدن والمناطق، والاستمرار في تقديم خدمات صيانة استثنائية تجعل رام المحدودة الخيار الأول للمشاريع في السعودية."
          : "We aim to execute 1000+ maintenance projects throughout Saudi Arabia by 2030, expand our services to include more cities and regions, and continue to provide exceptional maintenance services that make Ram Limited the first choice for projects in Saudi Arabia."
        }</p>
      </div>
    </div>
  );
};

export default Index;