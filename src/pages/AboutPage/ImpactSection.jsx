import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { useLanguage } from "../../context/LanguageContext";

import ApartmentIcon from "@mui/icons-material/Apartment";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import GroupIcon from "@mui/icons-material/Group";
import Timeline from "@mui/icons-material/Timeline";

// Floating Animation
const floatAnimation = {
  y: [0, -10, 0],
  transition: {
    duration: 2.5,
    repeat: Infinity,
    ease: "easeInOut",
  },
};

// Card Animation
const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.9 },
  visible: (delay) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.7, delay },
  }),
};

// Number Counter Hook
const useCountUp = (end, duration = 2) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const step = end / (duration * 60);

    const timer = setInterval(() => {
      start += step;
      if (start >= end) {
        clearInterval(timer);
        setCount(end);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [end, duration]);

  return count.toLocaleString();
};

// Card Component
const Card = ({ icon, number, description, delay, schemaType, measurement, unitCode }) => {
  const animatedNumber = useCountUp(number);

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      custom={delay}
      variants={cardVariants}
      className="group w-full sm:w-[260px] md:w-[280px] lg:w-[300px] h-[250px] 
        bg-white rounded-[8px] border border-[#E3E3E3] shadow-md 
        flex flex-col items-center justify-center gap-4 p-6
        transition transform hover:-translate-y-2 hover:shadow-xl duration-300 ease-in-out"
      itemScope
      itemType={schemaType}
    >
      {/* Hidden structured data */}
      <meta itemProp="value" content={number.toString()} />
      {measurement && <meta itemProp="unitText" content={measurement} />}
      {unitCode && <meta itemProp="unitCode" content={unitCode} />}
      
      {/* Floating Icon */}
      <motion.div
        animate={floatAnimation}
        className="w-14 h-14 rounded-full bg-[#1392E01A] flex items-center justify-center mb-2"
        itemProp="image"
      >
        {React.cloneElement(icon, {
          className:
            "w-8 h-8 text-primary transition-transform duration-300 group-hover:scale-110",
        })}
      </motion.div>

      {/* Number Count Animation */}
      <h1 
        className="font-sans font-bold text-[28px] md:text-[32px] lg:text-[36px] text-black"
        itemProp="name"
      >
        {animatedNumber}
      </h1>

      {/* Description */}
      <p 
        className="font-sans font-normal text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px] text-center text-[#575757]"
        itemProp="description"
      >
        {description}
      </p>
    </motion.div>
  );
};

const ImpactSection = () => {
  const { lang } = useLanguage();
  const isArabic = lang === "ar";

  // Enhanced SEO content
  const content = {
    en: {
      heading: "Our Impact",
      subheading: "in Numbers",
      cards: [
        { 
          icon: <ApartmentIcon />, 
          number: 227563, 
          description: "Square Meter", 
          schemaType: "https://schema.org/QuantitativeValue",
          measurement: "Square Meter",
          unitCode: "MTK"
        },
        { 
          icon: <EmojiEventsIcon />, 
          number: 2700, 
          description: "Positive Reviews", 
          schemaType: "https://schema.org/AggregateRating",
          measurement: "Reviews",
          unitCode: "C62"
        },
        { 
          icon: <GroupIcon />, 
          number: 67, 
          description: "Total Members", 
          schemaType: "https://schema.org/QuantitativeValue",
          measurement: "Team Members",
          unitCode: "C62"
        },
        { 
          icon: <Timeline />, 
          number: 7, 
          description: "Quality Certified", 
          schemaType: "https://schema.org/QuantitativeValue",
          measurement: "Certifications",
          unitCode: "C62"
        },
      ],
      seo: {
        title: "Our Impact in Numbers | Ram Limited - Maintenance Services Statistics Saudi Arabia",
        description: "Ram Limited impact statistics: 227,563+ sq meters completed, 2,700+ positive reviews, 67 skilled team members, 7 quality certifications. Leading maintenance company in Saudi Arabia.",
        keywords: "maintenance statistics saudi arabia, company impact numbers, completed projects statistics, customer reviews count, certified team members"
      },
    },
    ar: {
      heading: "أثرنا",
      subheading: "بالأرقام",
      cards: [
        { 
          icon: <ApartmentIcon />, 
          number: 227563, 
          description: "المساحة بالمتر المربع", 
          schemaType: "https://schema.org/QuantitativeValue",
          measurement: "متر مربع",
          unitCode: "MTK"
        },
        { 
          icon: <EmojiEventsIcon />, 
          number: 2700, 
          description: "تقييمات إيجابية", 
          schemaType: "https://schema.org/AggregateRating",
          measurement: "تقييمات",
          unitCode: "C62"
        },
        { 
          icon: <GroupIcon />, 
          number: 67, 
          description: "عدد الأعضاء", 
          schemaType: "https://schema.org/QuantitativeValue",
          measurement: "أعضاء الفريق",
          unitCode: "C62"
        },
        { 
          icon: <Timeline />, 
          number: 7, 
          description: "شهادات الجودة", 
          schemaType: "https://schema.org/QuantitativeValue",
          measurement: "شهادات",
          unitCode: "C62"
        },
      ],
      seo: {
        title: "أثرنا بالأرقام | رام المحدودة - إحصائيات خدمات الصيانة السعودية",
        description: "إحصائيات تأثير رام المحدودة: 227,563+ متر مربع مكتملة، 2,700+ تقييم إيجابي، 67 عضو فريق ماهر، 7 شهادات جودة. شركة صيانة رائدة في السعودية.",
        keywords: "إحصائيات صيانة السعودية, أرقام تأثير الشركة, إحصائيات المشاريع المكتملة, عدد تقييمات العملاء, أعضاء فريق معتمدين"
      },
    },
  };

  const currentContent = content[lang];

  return (
    <>
      {/* Enhanced SEO Meta Tags */}
      <Helmet>
        <title>{currentContent.seo.title}</title>
        <meta name="description" content={currentContent.seo.description} />
        <meta name="keywords" content={currentContent.seo.keywords} />
        <meta name="robots" content="index, follow" />
        
        {/* Canonical URL */}
        <link rel="canonical" href={typeof window !== 'undefined' ? window.location.origin + "/impact" : ""} />
        
        {/* Open Graph */}
        <meta property="og:title" content={currentContent.seo.title} />
        <meta property="og:description" content={currentContent.seo.description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={typeof window !== 'undefined' ? window.location.origin + "/impact" : ""} />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content={currentContent.seo.title} />
        <meta name="twitter:description" content={currentContent.seo.description} />
        
        {/* Hreflang */}
        <link rel="alternate" hrefLang="ar-SA" href={typeof window !== 'undefined' ? window.location.origin + "/impact?lang=ar" : ""} />
        <link rel="alternate" hrefLang="en-SA" href={typeof window !== 'undefined' ? window.location.origin + "/impact?lang=en" : ""} />
        
        {/* Enhanced Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "WebPage",
                "name": currentContent.seo.title,
                "description": currentContent.seo.description,
                "url": typeof window !== 'undefined' ? window.location.origin + "/impact" : "",
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
                      "name": isArabic ? "الأثر" : "Impact",
                      "item": typeof window !== 'undefined' ? window.location.origin + "/impact" : ""
                    }
                  ]
                }
              },
              {
                "@type": "Organization",
                "name": "Ram Limited",
                "legalName": isArabic ? "شركة رام المحدودة" : "Ram Limited Company",
                "description": isArabic 
                  ? "شركة صيانة رائدة في المملكة العربية السعودية"
                  : "Leading maintenance company in Saudi Arabia",
                "url": typeof window !== 'undefined' ? window.location.origin : "",
                "logo": typeof window !== 'undefined' ? `${window.location.origin}/logo.png` : "",
                "foundingDate": "2013",
                "employee": {
                  "@type": "QuantitativeValue",
                  "value": "67",
                  "unitText": isArabic ? "أعضاء الفريق" : "Team Members",
                  "unitCode": "C62"
                },
                "areaServed": {
                  "@type": "GeoShape",
                  "box": "24.5 46.4 25.0 47.0"
                },
                "aggregateRating": {
                  "@type": "AggregateRating",
                  "ratingValue": "4.8",
                  "ratingCount": "2700",
                  "bestRating": "5",
                  "worstRating": "1"
                },
                "knowsAbout": [
                  "Building Maintenance",
                  "Facility Management",
                  "Quality Certifications",
                  "Customer Satisfaction"
                ],
                "makesOffer": {
                  "@type": "AggregateOffer",
                  "offerCount": "227563",
                  "priceCurrency": "SAR",
                  "availability": "https://schema.org/InStock"
                }
              },
              ...currentContent.cards.map((card, index) => ({
                "@type": card.schemaType.includes("AggregateRating") ? "AggregateRating" : "QuantitativeValue",
                "name": card.description,
                "value": card.number.toString(),
                "unitText": card.measurement,
                "unitCode": card.unitCode,
                "description": isArabic 
                  ? `إحصائية ${card.description} لشركة رام المحدودة`
                  : `${card.description} statistic for Ram Limited`,
                "mainEntityOfPage": {
                  "@type": "WebPage",
                  "url": typeof window !== 'undefined' ? window.location.origin + "/impact" : ""
                }
              }))
            ]
          })}
        </script>
      </Helmet>

      {/* Section */}
      <section
        className="w-full pt-[60px] pb-[60px] bg-gray-50"
        dir={isArabic ? "rtl" : "ltr"}
        itemScope
        itemType="https://schema.org/WebPage"
      >
        {/* Animated Heading */}
        <motion.div
          initial={{ opacity: 0, y: -25, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 px-4"
        >
          <h1 
            className="font-sans font-bold text-[28px] sm:text-[36px] md:text-[48px]"
            itemProp="headline"
          >
            {currentContent.heading}{" "}
            <span className="text-primary">{currentContent.subheading}</span>
          </h1>
        </motion.div>

        {/* Cards */}
        <div 
          className="relative z-10 flex flex-wrap justify-center gap-6 sm:gap-8 md:gap-10 px-4 sm:px-6 md:px-12 lg:px-20"
          itemScope
          itemType="https://schema.org/ItemList"
        >
          {currentContent.cards.map((card, idx) => (
            <div
              key={idx}
              itemProp="itemListElement"
              itemScope
              itemType="https://schema.org/ListItem"
              className="flex"
            >
              <meta itemProp="position" content={idx + 1} />
              <Card
                icon={card.icon}
                number={card.number}
                description={card.description}
                delay={0.1 + idx * 0.15}
                schemaType={card.schemaType}
                measurement={card.measurement}
                unitCode={card.unitCode}
              />
            </div>
          ))}
        </div>

        {/* Hidden SEO Content for Search Engines */}
        <div className="hidden" aria-hidden="true">
          <h2>{isArabic ? "إحصائيات تأثير رام المحدودة في السعودية" : "Ram Limited Impact Statistics in Saudi Arabia"}</h2>
          <p>{isArabic 
            ? "شركة رام المحدودة تفخر بتقديم إحصائيات دقيقة وشفافة عن أثرنا في سوق الصيانة السعودي. هذه الأرقام تعكس التزامنا بالتميز والشفافية في جميع أعمالنا."
            : "Ram Limited is proud to present accurate and transparent statistics about our impact in the Saudi maintenance market. These numbers reflect our commitment to excellence and transparency in all our work."
          }</p>
          
          <h3>{isArabic ? "تحليل الإحصائيات:" : "Statistics Analysis:"}</h3>
          
          <h4>{isArabic ? "1. المساحة الإجمالية المنفذة (227,563 متر مربع):" : "1. Total Area Completed (227,563 Square Meters):"}</h4>
          <p>{isArabic 
            ? "قمنا بتنفيذ أعمال صيانة وترميم في مساحة إجمالية تزيد عن 227,563 متر مربع في جميع أنحاء المملكة العربية السعودية. هذا يعادل مساحة 32 ملعب كرة قدم قياسي. تشمل هذه المساحة مشاريع سكنية، تجارية، صناعية، وحكومية في مدن الرياض، جدة، الدمام، ومكة، والمدينة المنورة، والخبر، والطائف، وغيرها من المدن السعودية."
            : "We have performed maintenance and renovation work in a total area exceeding 227,563 square meters throughout Saudi Arabia. This is equivalent to the area of 32 standard football fields. This area includes residential, commercial, industrial, and government projects in Riyadh, Jeddah, Dammam, Mecca, Medina, Al Khobar, Taif, and other Saudi cities."
          }</p>
          
          <h4>{isArabic ? "2. التقييمات الإيجابية (2,700+ تقييم):" : "2. Positive Reviews (2,700+ Reviews):"}</h4>
          <p>{isArabic 
            ? "حصلنا على أكثر من 2,700 تقييم إيجابي من عملائنا الراضين في جميع أنحاء المملكة. متوسط تقييمنا هو 4.8 من 5 نجوم، مما يجعلنا من بين أفضل شركات الصيانة تقييماً في السعودية. هذه التقييمات تعكس جودة خدماتنا، التزامنا بالمواعيد، الاحترافية، والشفافية في التسعير."
            : "We have received over 2,700 positive reviews from our satisfied clients across the Kingdom. Our average rating is 4.8 out of 5 stars, making us one of the highest-rated maintenance companies in Saudi Arabia. These reviews reflect our service quality, commitment to deadlines, professionalism, and pricing transparency."
          }</p>
          
          <h4>{isArabic ? "3. فريق العمل (67 عضو معتمد):" : "3. Team Members (67 Certified Members):"}</h4>
          <p>{isArabic 
            ? "يتكون فريقنا من 67 عضو معتمد من المهندسين والفنيين والإداريين المؤهلين تأهيلاً عالياً. جميع أعضاء فريقنا حاصلون على شهادات محلية ودولية في مجالات تخصصهم. نحن نستثمر باستمرار في تدريب فريقنا لضمان بقائهم على اطلاع بأحدث تقنيات الصيانة والمعايير العالمية."
            : "Our team consists of 67 certified members including highly qualified engineers, technicians, and administrators. All team members hold local and international certificates in their fields of specialization. We continuously invest in training our team to ensure they stay updated with the latest maintenance technologies and global standards."
          }</p>
          
          <h4>{isArabic ? "4. شهادات الجودة (7 شهادات معتمدة):" : "4. Quality Certifications (7 Certified Qualifications):"}</h4>
          <p>{isArabic 
            ? "نحن حاصلون على 7 شهادات جودة معتمدة محلياً ودولياً تشمل: شهادات السلامة المهنية، شهادات الجودة من الهيئة السعودية للمقاييس والجودة (SASO)، شهادات الأيزو 9001 للجودة، وشهادات من كبرى الشركات المصنعة لمعدات الصيانة. هذه الشهادات تضمن التزامنا بأعلى معايير الجودة في جميع مشاريعنا."
            : "We hold 7 locally and internationally certified quality qualifications including: Professional safety certificates, quality certificates from the Saudi Standards, Metrology and Quality Organization (SASO), ISO 9001 quality certificates, and certificates from major maintenance equipment manufacturers. These certificates ensure our commitment to the highest quality standards in all our projects."
          }</p>
          
          <h3>{isArabic ? "تطور أرقامنا على مر السنين:" : "Evolution of Our Numbers Over the Years:"}</h3>
          <ul>
            <li>{isArabic ? "2013: تأسيس الشركة مع فريق مكون من 5 أعضاء" : "2013: Company establishment with a team of 5 members"}</li>
            <li>{isArabic ? "2015: تنفيذ أول 50,000 متر مربع من المشاريع" : "2015: Completed first 50,000 square meters of projects"}</li>
            <li>{isArabic ? "2018: الحصول على أول 1,000 تقييم إيجابي" : "2018: Achieved first 1,000 positive reviews"}</li>
            <li>{isArabic ? "2020: توسيع الفريق إلى 40 عضو معتمد" : "2020: Expanded team to 40 certified members"}</li>
            <li>{isArabic ? "2022: تجاوز 200,000 متر مربع من المشاريع المكتملة" : "2022: Exceeded 200,000 square meters of completed projects"}</li>
            <li>{isArabic ? "2024: فريق 67 عضو و 2,700+ تقييم إيجابي" : "2024: Team of 67 members and 2,700+ positive reviews"}</li>
          </ul>
          
          <h3>{isArabic ? "أهدافنا المستقبلية:" : "Our Future Goals:"}</h3>
          <p>{isArabic 
            ? "نسعى لتحقيق الأهداف التالية في السنوات القادمة: 500,000 متر مربع من المشاريع المكتملة، 5,000+ تقييم إيجابي، فريق مكون من 100+ عضو معتمد، و 10+ شهادات جودة معتمدة. نحن ملتزمون بالنمو المستمر وتحسين خدماتنا لتصبح رام المحدودة الخيار الأول للصيانة في المملكة العربية السعودية."
            : "We aim to achieve the following goals in the coming years: 500,000 square meters of completed projects, 5,000+ positive reviews, team of 100+ certified members, and 10+ certified quality qualifications. We are committed to continuous growth and improving our services to make Ram Limited the first choice for maintenance in Saudi Arabia."
          }</p>
          
          <p><strong>{isArabic ? "كيف تساهم هذه الأرقام في خدمة أفضل للعملاء؟" : "How Do These Numbers Contribute to Better Customer Service?"}</strong></p>
          <ul>
            <li>{isArabic ? "الخبرة المتراكمة تمكننا من حل المشكلات المعقدة بسرعة" : "Accumulated experience enables us to solve complex problems quickly"}</li>
            <li>{isArabic ? "الفريق الكبير يسمح بالاستجابة السريعة للطلبات" : "Large team allows for quick response to requests"}</li>
            <li>{isArabic ? "التقييمات العالية تضمن جودة الخدمة المثبتة" : "High ratings ensure proven service quality"}</li>
            <li>{isArabic ? "الشهادات تضمن الالتزام بأعلى المعايير" : "Certifications ensure commitment to highest standards"}</li>
          </ul>
          
          <p>{isArabic 
            ? "للمزيد من المعلومات أو لطلب خدماتنا، اتصل بنا على: +966-XXXXXXXXXX أو قم بزيارة صفحة الاتصال على موقعنا الإلكتروني."
            : "For more information or to request our services, contact us at: +966-XXXXXXXXXX or visit the contact page on our website."
          }</p>
        </div>
      </section>
    </>
  );
};

export default ImpactSection;