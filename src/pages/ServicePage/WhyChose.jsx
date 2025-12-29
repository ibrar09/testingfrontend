import {
  AccessTimeOutlined,
  BusinessCenterOutlined,
  GroupOutlined,
  VerifiedUser,
} from "@mui/icons-material";
import React from "react";
import { motion } from "framer-motion";
import { useLanguage } from "../../context/LanguageContext";
import { Helmet } from "react-helmet-async";

// Card Component with Schema markup
const ChoseCard = ({ icon, title, description, index, lang }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.05, boxShadow: "0 10px 25px rgba(0,0,0,0.15)" }}
      transition={{ duration: 0.3 }}
      className="w-full max-w-[320px] bg-white border border-[#E3E3E3] rounded-2xl shadow-sm flex flex-col items-center p-8 mx-auto"
      aria-label={title}
      role="article"
      itemScope
      itemType="https://schema.org/Service"
      itemProp="itemListElement"
    >
      <meta itemProp="position" content={index + 1} />
      
      {/* Icon */}
      <div 
        className="w-[70px] h-[70px] flex items-center justify-center rounded-full bg-[rgba(19,146,224,0.1)] mb-4 text-primary text-4xl"
        aria-hidden="true"
        itemProp="image"
      >
        {icon}
      </div>

      {/* Title */}
      <h3 
        className="text-[20px] font-semibold text-center text-gray-900 leading-snug"
        itemProp="name"
      >
        {title}
      </h3>

      {/* Description */}
      <p 
        className="mt-3 text-[15px] text-center text-gray-600 leading-relaxed"
        itemProp="description"
      >
        {description}
      </p>
      
      {/* Hidden structured content */}
      <div style={{ display: 'none' }} aria-hidden="true">
        <meta itemProp="provider" content={lang === "ar" ? "رام المحدودة للمقاولات" : "Ram Limited Contracting"} />
        <meta itemProp="serviceType" content="Construction Services" />
        <meta itemProp="areaServed" content={lang === "ar" ? "المملكة العربية السعودية" : "Saudi Arabia"} />
        <link itemProp="url" href="https://ramlimited.com.sa/services" />
      </div>
    </motion.div>
  );
};

// Main Component
const WhyChose = () => {
  const { lang } = useLanguage();

  const CardDetails = [
    {
      icon: <BusinessCenterOutlined fontSize="inherit" />,
      title: {
        en: "Cross-sector Experience",
        ar: "خبرة متعددة القطاعات",
      },
      description: {
        en: "Over 80+ projects completed across Commercial, Residential, and Industrial sectors.",
        ar: "تنفيذ أكثر من 80 مشروعًا في القطاعات التجارية والسكنية والصناعية.",
      },
      keywords: {
        en: "construction experience Saudi Arabia, commercial projects Riyadh, residential building KSA",
        ar: "خبرة بناء السعودية, مشاريع تجارية الرياض, بناء سكني المملكة"
      }
    },
    {
      icon: <VerifiedUser fontSize="inherit" />,
      title: {
        en: "Quality & Safety Certified",
        ar: "جودة وسلامة معتمدة",
      },
      description: {
        en: "ISO-certified teams following strict Saudi standards delivering top quality.",
        ar: "فرق معتمدة وفق أعلى معايير الجودة والسلامة في المملكة العربية السعودية.",
      },
      keywords: {
        en: "ISO certified construction Saudi Arabia, quality standards Riyadh, safety certified contractors",
        ar: "بناء معتمد ISO السعودية, معايير جودة الرياض, مقاولون معتمدون سلامة"
      }
    },
    {
      icon: <GroupOutlined fontSize="inherit" />,
      title: {
        en: "Expert Teams",
        ar: "فرق عمل متخصصة",
      },
      description: {
        en: "Skilled professionals with strong project management for on-time delivery.",
        ar: "محترفون ذوو خبرة مع إدارة مشاريع قوية لضمان التسليم في الوقت المحدد.",
      },
      keywords: {
        en: "expert construction teams Saudi Arabia, professional contractors Riyadh, project management KSA",
        ar: "فرق بناء خبراء السعودية, مقاولون محترفون الرياض, إدارة مشاريع المملكة"
      }
    },
    {
      icon: <AccessTimeOutlined fontSize="inherit" />,
      title: {
        en: "Speed & Reliability",
        ar: "السرعة والموثوقية",
      },
      description: {
        en: "Fast execution with minimal downtime and maximum efficiency.",
        ar: "تنفيذ سريع مع تقليل التوقف وتحقيق أعلى كفاءة تشغيلية.",
      },
      keywords: {
        en: "fast construction Saudi Arabia, reliable contractors Riyadh, efficient building KSA",
        ar: "بناء سريع السعودية, مقاولون موثوقون الرياض, بناء كفء المملكة"
      }
    },
  ];

  // SEO content
  const seoContent = {
    en: {
      title: "Why Choose Ram Limited - Construction Company Advantages in Saudi Arabia",
      description: "Discover why clients choose Ram Limited: 80+ projects experience, ISO certified quality, expert teams, and reliable fast construction in Saudi Arabia.",
      keywords: "construction company advantages Saudi Arabia, why choose Ram Limited, building contractor benefits Riyadh",
      jsonLd: {
        "@context": "https://schema.org",
        "@type": "ItemList",
        "name": "Why Choose Ram Limited - Construction Advantages",
        "description": "Key advantages of choosing Ram Limited Contracting for construction projects in Saudi Arabia",
        "numberOfItems": CardDetails.length,
        "itemListElement": CardDetails.map((card, index) => ({
          "@type": "ListItem",
          "position": index + 1,
          "item": {
            "@type": "Service",
            "name": card.title.en,
            "description": card.description.en,
            "provider": {
              "@type": "Organization",
              "name": "Ram Limited Contracting",
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "SA",
                "addressRegion": "Riyadh Province"
              }
            }
          }
        }))
      }
    },
    ar: {
      title: "لماذا تختار رام المحدودة - مزايا شركة البناء في السعودية",
      description: "اكتشف لماذا يختار العملاء رام المحدودة: خبرة أكثر من 80 مشروع، جودة معتمدة ISO، فرق خبراء، وبناء سريع وموثوق في السعودية.",
      keywords: "مزايا شركة بناء السعودية, لماذا تختار رام المحدودة, فوائد مقاول بناء الرياض",
      jsonLd: {
        "@context": "https://schema.org/ar",
        "@type": "ItemList",
        "name": "لماذا تختار رام المحدودة - مزايا البناء",
        "description": "المزايا الرئيسية لاختيار رام المحدودة للمقاولات لمشاريع البناء في السعودية",
        "numberOfItems": CardDetails.length,
        "itemListElement": CardDetails.map((card, index) => ({
          "@type": "ListItem",
          "position": index + 1,
          "item": {
            "@type": "Service",
            "name": card.title.ar,
            "description": card.description.ar,
            "provider": {
              "@type": "Organization",
              "name": "رام المحدودة للمقاولات",
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "SA",
                "addressRegion": "منطقة الرياض"
              }
            }
          }
        }))
      }
    }
  };

  return (
    <>
      {/* SEO Meta Tags for Why Choose Section */}
      <Helmet>
        {/* Structured Data for Advantages */}
        <script type="application/ld+json">
          {JSON.stringify(seoContent[lang].jsonLd)}
        </script>
        
        {/* FAQ Schema for this section */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [{
              "@type": "Question",
              "name": lang === "ar" ? "ما الذي يميز رام المحدودة عن غيرها؟" : "What makes Ram Limited different?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": lang === "ar" 
                  ? "تتميز رام المحدودة بخبرة أكثر من 80 مشروع، معايير جودة معتمدة ISO، فرق عمل متخصصة، وتنفيذ سريع وموثوق في جميع أنحاء السعودية."
                  : "Ram Limited stands out with 80+ projects experience, ISO certified quality standards, expert teams, and fast reliable execution across Saudi Arabia."
              }
            }]
          })}
        </script>
      </Helmet>

      <section
        dir={lang === "ar" ? "rtl" : "ltr"}
        className="w-full bg-[#F7F9FB] py-16 lg:py-24 px-5"
        aria-labelledby="why-choose-heading"
        itemScope
        itemType="https://schema.org/ItemList"
        role="region"
      >
        {/* Hidden schema markup */}
        <meta itemProp="name" content={seoContent[lang].title} />
        <meta itemProp="description" content={seoContent[lang].description} />
        <meta itemProp="numberOfItems" content={CardDetails.length} />

        {/* Heading */}
        <header className="text-center mb-12 max-w-2xl mx-auto">
          <motion.h2
            id="why-choose-heading"
            className="text-3xl sm:text-4xl lg:text-[48px] font-bold leading-tight"
            initial={{ opacity: 0, y: -25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            itemProp="headline"
          >
            {lang === "ar" ? "لماذا تختارنا" : "Why Choose Us"}
          </motion.h2>

          <motion.p
            className="mt-4 text-[16px] sm:text-[19px] text-gray-600 leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            itemProp="description"
          >
            {lang === "ar"
              ? "ما الذي يميزنا في قطاع الإنشاءات والصيانة داخل المملكة العربية السعودية."
              : "What makes us different in the Saudi construction & maintenance industry."}
          </motion.p>
        </header>

        {/* Cards with Schema markup */}
        <div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10 max-w-6xl mx-auto"
          itemProp="itemListElement"
          itemScope
          itemType="https://schema.org/ItemList"
        >
          {CardDetails.map((card, index) => (
            <ChoseCard
              key={index}
              icon={card.icon}
              title={card.title[lang]}
              description={card.description[lang]}
              index={index}
              lang={lang}
            />
          ))}
        </div>
        
        {/* Hidden structured content for SEO */}
        <div style={{ display: 'none' }} aria-hidden="true">
          {/* Advantages list for search engines */}
          <h3>{lang === "ar" ? "مزايا رام المحدودة" : "Ram Limited Advantages"}</h3>
          <ul>
            {CardDetails.map((card, index) => (
              <li key={index}>
                <strong>{card.title[lang]}</strong>: {card.description[lang]}
              </li>
            ))}
          </ul>
          
          {/* Project statistics */}
          <span>80+ construction projects completed</span>
          <span>ISO 9001:2015 certified company</span>
          <span>Expert construction teams in Saudi Arabia</span>
          <span>Fast project delivery in Riyadh and across KSA</span>
          
          {/* Geographic mentions */}
          <span>Construction company in Saudi Arabia</span>
          <span>Building contractors in Riyadh</span>
          <span>Quality construction services KSA</span>
          
          {/* Arabic keywords */}
          {lang === "ar" && (
            <>
              <span>أكثر من 80 مشروع بناء مكتمل</span>
              <span>شركة معتمدة ISO 9001:2015</span>
              <span>فرق بناء خبراء في السعودية</span>
              <span>تسليم مشاريع سريع في الرياض وعبر المملكة</span>
              <span>شركة بناء في السعودية</span>
              <span>مقاولون بناء في الرياض</span>
              <span>خدمات بناء عالية الجودة المملكة</span>
            </>
          )}
          
          {/* Service quality mentions */}
          <span>Quality assured construction services</span>
          <span>Safety first approach in all projects</span>
          <span>Professional project management</span>
          <span>Timely delivery guarantee</span>
          
          {/* Industry recognition */}
          <span>Award-winning construction methodology</span>
          <span>Client satisfaction focused</span>
          <span>Innovative construction solutions</span>
          <span>Sustainable building practices</span>
          
          {/* Key benefits for clients */}
          <h4>{lang === "ar" ? "فوائد للعملاء" : "Client Benefits"}</h4>
          <ul>
            <li>Reduced project timelines</li>
            <li>Cost-effective solutions</li>
            <li>Quality craftsmanship</li>
            <li>Professional team management</li>
            <li>Compliance with Saudi regulations</li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default WhyChose;