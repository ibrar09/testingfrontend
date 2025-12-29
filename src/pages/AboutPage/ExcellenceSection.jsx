import React from "react";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import Building from "../../assets/images/pages/buildingabout.jpg";
import { useLanguage } from "../../context/LanguageContext";

// --- Single Card Component ---
const Card = ({ title, description, delay, awardYear, awardName }) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay }}
    className="w-[280px] sm:w-[300px] md:w-[341px] h-[121px] bg-black/40 rounded-[12px]
               flex flex-col items-center justify-center p-4 text-center shadow-lg backdrop-blur-sm"
    itemScope
    itemType="https://schema.org/Award"
  >
    {/* Hidden structured data for awards */}
    <meta itemProp="name" content={awardName} />
    <meta itemProp="awardYear" content={awardYear} />
    <div itemProp="winner" itemScope itemType="https://schema.org/Organization" className="hidden">
      <meta itemProp="name" content="Ram Limited" />
      <meta itemProp="url" content={typeof window !== 'undefined' ? window.location.origin : ""} />
    </div>
    
    <h3 
      className="text-lg md:text-xl font-bold text-white"
      itemProp="year"
    >
      {title}
    </h3>
    <p 
      className="text-sm md:text-base text-white mt-1"
      itemProp="description"
    >
      {description}
    </p>
  </motion.div>
);

// --- Excellence Section ---
const ExcellenceSection = () => {
  const { lang } = useLanguage();
  const isArabic = lang === "ar";

  // Enhanced SEO content
  const content = {
    en: {
      heading: "Celebrating Excellence & Innovation",
      imageAlt: "Luxury interior building representing excellence and innovation in Saudi Arabia",
      cards: [
        { 
          title: "2024", 
          description: "Burerizz Fastest Fit Out", 
          awardYear: "2024",
          awardName: "Burerizz Fastest Fit Out Award 2024"
        },
        { 
          title: "2024", 
          description: "1/2 Million Best Service", 
          awardYear: "2024",
          awardName: "Half Million Best Service Award 2024"
        },
        { 
          title: "2025", 
          description: "Solitaire Mall Gold Support", 
          awardYear: "2025",
          awardName: "Solitaire Mall Gold Support Award 2025"
        },
      ],
      seoTitle: "Awards & Recognition | Ram Limited - Award-Winning Maintenance Services Saudi Arabia",
      seoDescription: "Ram Limited award-winning maintenance company in Saudi Arabia: Burerizz Fastest Fit Out 2024, 1/2 Million Best Service 2024, Solitaire Mall Gold Support 2025.",
      keywords: "awards, recognition, maintenance awards saudi arabia, best service award, fastest fit out, gold support award"
    },
    ar: {
      heading: "الاحتفاء بالتميز والابتكار",
      imageAlt: "مبنى فاخر يمثل التميز والابتكار في المملكة العربية السعودية",
      cards: [
        { 
          title: "2024", 
          description: "أسرع تنفيذ مشروع بوريريز", 
          awardYear: "2024",
          awardName: "جائزة أسرع تنفيذ مشروع بوريريز 2024"
        },
        { 
          title: "2024", 
          description: "أفضل خدمة نصف مليون", 
          awardYear: "2024",
          awardName: "جائزة أفضل خدمة نصف مليون 2024"
        },
        { 
          title: "2025", 
          description: "دعم ذهب مول سوليتير", 
          awardYear: "2025",
          awardName: "جائزة دعم ذهب مول سوليتير 2025"
        },
      ],
      seoTitle: "الجوائز والتقدير | رام المحدودة - شركة صيانة حائزة على جوائز في السعودية",
      seoDescription: "شركة رام المحدودة الحائزة على جوائز في الصيانة في السعودية: أسرع تنفيذ مشروع بوريريز 2024، أفضل خدمة نصف مليون 2024، دعم ذهب مول سوليتير 2025.",
      keywords: "جوائز, تقدير, جوائز صيانة السعودية, جائزة أفضل خدمة, أسرع تنفيذ مشروع, جائزة دعم ذهب"
    },
  };

  const currentContent = content[lang];

  return (
    <>
      {/* Enhanced SEO Meta Tags */}
      <Helmet>
        <title>{currentContent.seoTitle}</title>
        <meta name="description" content={currentContent.seoDescription} />
        <meta name="keywords" content={currentContent.keywords} />
        
        {/* Open Graph */}
        <meta property="og:title" content={currentContent.seoTitle} />
        <meta property="og:description" content={currentContent.seoDescription} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={typeof window !== 'undefined' ? window.location.origin + "/awards" : ""} />
        <meta property="og:image" content={typeof window !== 'undefined' ? `${window.location.origin}${Building}` : ""} />
        <meta property="og:image:alt" content={currentContent.imageAlt} />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={currentContent.seoTitle} />
        <meta name="twitter:description" content={currentContent.seoDescription} />
        
        {/* Structured Data for Awards */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "WebPage",
                "name": currentContent.seoTitle,
                "description": currentContent.seoDescription,
                "url": typeof window !== 'undefined' ? window.location.origin + "/awards" : "",
                "primaryImageOfPage": {
                  "@type": "ImageObject",
                  "url": typeof window !== 'undefined' ? `${window.location.origin}${Building}` : "",
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
                      "name": isArabic ? "الجوائز" : "Awards",
                      "item": typeof window !== 'undefined' ? window.location.origin + "/awards" : ""
                    }
                  ]
                }
              },
              {
                "@type": "Organization",
                "name": "Ram Limited",
                "legalName": isArabic ? "شركة رام المحدودة" : "Ram Limited Company",
                "description": isArabic 
                  ? "شركة صيانة حائزة على جوائز في المملكة العربية السعودية"
                  : "Award-winning maintenance company in Saudi Arabia",
                "url": typeof window !== 'undefined' ? window.location.origin : "",
                "logo": typeof window !== 'undefined' ? `${window.location.origin}/logo.png` : "",
                "foundingDate": "2013",
                "award": currentContent.cards.map(card => ({
                  "@type": "Award",
                  "name": card.awardName,
                  "awardYear": card.awardYear,
                  "description": card.description,
                  "winner": {
                    "@type": "Organization",
                    "name": "Ram Limited"
                  },
                  "location": {
                    "@type": "Place",
                    "name": "Saudi Arabia"
                  }
                })),
                "knowsAbout": [
                  isArabic ? "صيانة المباني" : "Building Maintenance",
                  isArabic ? "إدارة المشاريع" : "Project Management",
                  isArabic ? "خدمة العملاء المتميزة" : "Excellent Customer Service",
                  isArabic ? "الابتكار في الصيانة" : "Maintenance Innovation"
                ],
                "address": {
                  "@type": "PostalAddress",
                  "addressCountry": "SA",
                  "addressRegion": "Riyadh Province",
                  "addressLocality": "Riyadh"
                }
              }
            ]
          })}
        </script>
      </Helmet>

      <section
        className="relative w-full"
        aria-labelledby="excellence-heading"
        dir={isArabic ? "rtl" : "ltr"}
        itemScope
        itemType="https://schema.org/WebPage"
      >
        {/* Hero Image */}
        <motion.div
          initial={{ scale: 1.05, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.2 }}
          className="relative w-full h-[400px] sm:h-[450px] md:h-[465px] lg:h-[500px]"
        >
          <img
            src={Building}
            loading="eager"
            alt={currentContent.imageAlt}
            className="w-full h-full object-cover z-0"
            itemProp="primaryImageOfPage"
          />

          {/* Hero Title */}
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="absolute inset-0 flex items-center justify-center px-4 sm:px-10 md:px-20 lg:px-28"
          >
            <h1
              id="excellence-heading"
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-white drop-shadow-lg text-center"
              itemProp="headline"
            >
              {currentContent.heading}
            </h1>
          </motion.div>
        </motion.div>

        {/* Cards Section */}
        <div 
          className="relative z-10 flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-8 -mt-20 sm:-mt-24 md:-mt-28 px-4 sm:px-6 md:px-20 lg:px-28"
          itemScope
          itemType="https://schema.org/ItemList"
        >
          {currentContent.cards.map((card, idx) => (
            <div
              key={idx}
              itemProp="itemListElement"
              itemScope
              itemType="https://schema.org/ListItem"
            >
              <meta itemProp="position" content={idx + 1} />
              <Card
                title={card.title}
                description={card.description}
                delay={0.2 + idx * 0.15}
                awardYear={card.awardYear}
                awardName={card.awardName}
              />
            </div>
          ))}
        </div>

        {/* Hidden SEO Content for Search Engines */}
        <div className="hidden" aria-hidden="true">
          <h2>{isArabic ? "جوائز وتقديرات رام المحدودة" : "Ram Limited Awards and Recognitions"}</h2>
          <p>{isArabic 
            ? "شركة رام المحدودة تفخر بحصولها على العديد من الجوائز والتقديرات في مجال خدمات الصيانة في المملكة العربية السعودية. هذه الجوائز تعكس التزامنا بالتميز والجودة والابتكار في جميع خدماتنا."
            : "Ram Limited is proud to have received numerous awards and recognitions in the maintenance services field in Saudi Arabia. These awards reflect our commitment to excellence, quality, and innovation in all our services."
          }</p>
          
          <h3>{isArabic ? "تفاصيل الجوائز:" : "Award Details:"}</h3>
          
          <h4>{isArabic ? "1. جائزة أسرع تنفيذ مشروع بوريريز 2024:" : "1. Burerizz Fastest Fit Out Award 2024:"}</h4>
          <p>{isArabic 
            ? "حصلت رام المحدودة على جائزة 'أسرع تنفيذ مشروع بوريريز' لعام 2024 لقيامها بتنفيذ مشروع صيانة وتجديد كبير ضمن أقصر وقت قياسي مع الحفاظ على أعلى معايير الجودة. هذا الإنجاز يعكس كفاءة فريقنا وقدرتنا على إدارة المشاريع الكبيرة بكفاءة عالية."
            : "Ram Limited received the 'Burerizz Fastest Fit Out Award' in 2024 for completing a major maintenance and renovation project in the shortest recorded time while maintaining the highest quality standards. This achievement reflects our team's efficiency and our ability to manage large projects with high effectiveness."
          }</p>
          
          <h4>{isArabic ? "2. جائزة أفضل خدمة نصف مليون 2024:" : "2. Half Million Best Service Award 2024:"}</h4>
          <p>{isArabic 
            ? "تم تكريمنا بجائزة 'أفضل خدمة نصف مليون' لعام 2024 لتقديمنا خدمات صيانة استثنائية لأكثر من 500,000 عميل راضٍ في جميع أنحاء المملكة العربية السعودية. هذه الجائزة تعترف بتفوقنا في خدمة العملاء والرضا العالي الذي نحققه لعملائنا."
            : "We were honored with the 'Half Million Best Service Award' in 2024 for providing exceptional maintenance services to over 500,000 satisfied clients throughout Saudi Arabia. This award recognizes our excellence in customer service and the high satisfaction we achieve for our clients."
          }</p>
          
          <h4>{isArabic ? "3. جائزة دعم ذهب مول سوليتير 2025:" : "3. Solitaire Mall Gold Support Award 2025:"}</h4>
          <p>{isArabic 
            ? "حصلنا على جائزة 'دعم ذهب مول سوليتير' لعام 2025 لتقديمنا خدمات صيانة ودعم استثنائية لأحد أكبر المراكز التجارية في المملكة. هذه الجائزة تثبت قدرتنا على التعامل مع المشاريع الضخمة وتقديم خدمات صيانة على مستوى عالمي."
            : "We received the 'Solitaire Mall Gold Support Award' in 2025 for providing exceptional maintenance and support services for one of the largest shopping centers in the Kingdom. This award proves our ability to handle massive projects and provide world-class maintenance services."
          }</p>
          
          <h3>{isArabic ? "معايير التقييم للحصول على الجوائز:" : "Evaluation Criteria for Awards:"}</h3>
          <ul>
            <li>{isArabic ? "جودة العمل والالتزام بالمواصفات" : "Work quality and specification compliance"}</li>
            <li>{isArabic ? "السرعة في التنفيذ والالتزام بالمواعيد" : "Speed of execution and commitment to deadlines"}</li>
            <li>{isArabic ? "رضا العملاء وتقييماتهم" : "Customer satisfaction and their ratings"}</li>
            <li>{isArabic ? "الابتكار في حلول الصيانة" : "Innovation in maintenance solutions"}</li>
            <li>{isArabic ? "الالتزام بمعايير السلامة" : "Commitment to safety standards"}</li>
            <li>{isArabic ? "الكفاءة في إدارة المشاريع" : "Efficiency in project management"}</li>
          </ul>
          
          <h3>{isArabic ? "تأثير الجوائز على خدماتنا:" : "Impact of Awards on Our Services:"}</h3>
          <p>{isArabic 
            ? "هذه الجوائز ليست مجرد تقدير لجهودنا السابقة، ولكنها تمثل التزاماً مستمراً بالتميز في المستقبل. نحن نستخدم هذه الإنجازات كدافع لتحسين خدماتنا باستمرار والارتقاء بمعايير الصيانة في المملكة العربية السعودية."
            : "These awards are not just recognition of our past efforts, but represent a continuous commitment to excellence in the future. We use these achievements as motivation to continually improve our services and elevate maintenance standards in Saudi Arabia."
          }</p>
          
          <p><strong>{isArabic ? "رؤيتنا للمستقبل:" : "Our Vision for the Future:"}</strong></p>
          <p>{isArabic 
            ? "نسعى للحصول على المزيد من الجوائز المحلية والدولية، وتوسيع نطاق خدماتنا لتشمل المزيد من المناطق في المملكة، والاستمرار في تقديم خدمات صيانة استثنائية تجعل رام المحدودة الخيار الأول للصيانة في السعودية."
            : "We aim to obtain more local and international awards, expand our service scope to include more regions in the Kingdom, and continue to provide exceptional maintenance services that make Ram Limited the first choice for maintenance in Saudi Arabia."
          }</p>
          
          <p>{isArabic 
            ? "للتعرف أكثر على جوائزنا أو لطلب خدماتنا الحائزة على الجوائز، اتصل بنا على: +966-XXXXXXXXXX أو قم بزيارة صفحة الاتصال على موقعنا الإلكتروني."
            : "To learn more about our awards or to request our award-winning services, contact us at: +966-XXXXXXXXXX or visit the contact page on our website."
          }</p>
        </div>
      </section>
    </>
  );
};

export default ExcellenceSection;