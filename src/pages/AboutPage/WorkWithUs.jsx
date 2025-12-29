import React, { useState } from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { useLanguage } from "../../context/LanguageContext";
import RequestQuoteForm from "../RequestPage/RequestQuoteForm";

const WorkWithUs = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { lang } = useLanguage();
  const isArabic = lang === "ar";

  // Enhanced SEO content
  const content = {
    en: {
      heading: "Work With Us",
      description: "Reach out today for a free consultation and estimate. Let's discuss how we can bring your vision to life.",
      button: "Request A Quote",
      seoTitle: "Work With Us | Ram Limited - Free Maintenance Consultation Saudi Arabia",
      seoDescription: "Work with Ram Limited for professional maintenance services in Saudi Arabia. Free consultation and quote for AC, electrical, plumbing, painting maintenance. Contact us today!",
      keywords: "maintenance consultation saudi arabia, request quote maintenance, work with maintenance company, professional maintenance services, free maintenance estimate",
      schema: {
        name: "Work With Us - Request Maintenance Quote",
        description: "Contact Ram Limited for professional maintenance services consultation and quote in Saudi Arabia"
      }
    },
    ar: {
      heading: "تعاون معنا",
      description: "تواصل معنا اليوم للحصول على استشارة مجانية وتقدير للمشروع. دعنا نناقش كيف يمكننا تحقيق رؤيتك.",
      button: "اطلب عرض سعر",
      seoTitle: "تعاون معنا | رام المحدودة - استشارة صيانة مجانية السعودية",
      seoDescription: "تعاون مع رام المحدودة لخدمات صيانة احترافية في السعودية. استشارة مجانية وعرض سعر لصيانة التكييف، الكهرباء، السباكة، الدهان. اتصل بنا اليوم!",
      keywords: "استشارة صيانة السعودية, طلب عرض سعر صيانة, العمل مع شركة صيانة, خدمات صيانة احترافية, تقدير صيانة مجاني",
      schema: {
        name: "تعاون معنا - طلب عرض سعر الصيانة",
        description: "اتصل برام المحدودة لاستشارة خدمات الصيانة الاحترافية وعرض السعر في السعودية"
      }
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
        <link rel="canonical" href={typeof window !== 'undefined' ? window.location.origin + "/contact" : ""} />
        
        {/* Open Graph */}
        <meta property="og:title" content={currentContent.seoTitle} />
        <meta property="og:description" content={currentContent.seoDescription} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={typeof window !== 'undefined' ? window.location.origin + "/contact" : ""} />
        <meta property="og:image" content={typeof window !== 'undefined' ? `${window.location.origin}/og-contact.jpg` : ""} />
        <meta property="og:image:alt" content={currentContent.heading} />
        <meta property="og:locale" content={isArabic ? "ar_SA" : "en_SA"} />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content={currentContent.seoTitle} />
        <meta name="twitter:description" content={currentContent.seoDescription} />
        
        {/* Hreflang */}
        <link rel="alternate" hrefLang="ar-SA" href={typeof window !== 'undefined' ? window.location.origin + "/contact?lang=ar" : ""} />
        <link rel="alternate" hrefLang="en-SA" href={typeof window !== 'undefined' ? window.location.origin + "/contact?lang=en" : ""} />
        
        {/* Structured Data for Contact/Quote Request */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "WebPage",
                "name": currentContent.schema.name,
                "description": currentContent.schema.description,
                "url": typeof window !== 'undefined' ? window.location.origin + "/contact" : "",
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
                      "name": isArabic ? "اتصل بنا" : "Contact",
                      "item": typeof window !== 'undefined' ? window.location.origin + "/contact" : ""
                    }
                  ]
                },
                "potentialAction": {
                  "@type": "ContactPage",
                  "name": "Request Quote",
                  "description": "Request a maintenance service quote",
                  "actionPlatform": [
                    "http://schema.org/DesktopWebPlatform",
                    "http://schema.org/MobileWebPlatform"
                  ]
                }
              },
              {
                "@type": "ContactPage",
                "name": currentContent.heading,
                "description": currentContent.description,
                "url": typeof window !== 'undefined' ? window.location.origin + "/contact" : "",
                "contactPoint": {
                  "@type": "ContactPoint",
                  "contactType": "customer service",
                  "telephone": "+966-XXXXXXXXXX",
                  "email": "info@ramlimited.com",
                  "contactOption": "TollFree",
                  "areaServed": "SA",
                  "availableLanguage": ["Arabic", "English"],
                  "hoursAvailable": {
                    "@type": "OpeningHoursSpecification",
                    "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
                    "opens": "08:00",
                    "closes": "22:00"
                  }
                },
                "mainEntityOfPage": {
                  "@type": "WebPage",
                  "@id": typeof window !== 'undefined' ? window.location.origin + "/contact" : ""
                },
                "primaryImageOfPage": {
                  "@type": "ImageObject",
                  "url": typeof window !== 'undefined' ? `${window.location.origin}/og-contact.jpg` : "",
                  "width": "1200",
                  "height": "630",
                  "caption": currentContent.heading
                }
              },
              {
                "@type": "Service",
                "serviceType": "Maintenance Consultation",
                "provider": {
                  "@type": "Organization",
                  "name": "Ram Limited",
                  "url": typeof window !== 'undefined' ? window.location.origin : "",
                  "address": {
                    "@type": "PostalAddress",
                    "addressCountry": "SA",
                    "addressRegion": "Riyadh Province",
                    "addressLocality": "Riyadh"
                  }
                },
                "areaServed": {
                  "@type": "Place",
                  "name": ["Riyadh", "Jeddah", "Dammam", "Mecca", "Medina", "Al Khobar"]
                },
                "hasOfferCatalog": {
                  "@type": "OfferCatalog",
                  "name": isArabic ? "خدمات الصيانة" : "Maintenance Services",
                  "itemListElement": [
                    {
                      "@type": "Offer",
                      "itemOffered": {
                        "@type": "Service",
                        "name": isArabic ? "استشارة مجانية" : "Free Consultation"
                      },
                      "price": "0",
                      "priceCurrency": "SAR",
                      "availability": "https://schema.org/InStock"
                    }
                  ]
                }
              }
            ]
          })}
        </script>
      </Helmet>

      <section
        className="w-full min-h-[295px] bg-gradient-to-r from-[#1392E0] to-[#023A9A] flex flex-col items-center justify-center px-4 py-12 text-center"
        dir={isArabic ? "rtl" : "ltr"}
        itemScope
        itemType="https://schema.org/ContactPage"
      >
        {/* Heading Animation */}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-white font-sans font-bold text-3xl sm:text-4xl md:text-5xl leading-tight"
          itemProp="name"
        >
          {currentContent.heading}
        </motion.h1>

        {/* Paragraph Animation */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-white font-sans font-normal text-base sm:text-lg md:text-xl leading-relaxed mt-4 max-w-2xl"
          itemProp="description"
        >
          {currentContent.description}
        </motion.p>

        {/* Button Animation */}
        <motion.button
          initial={{ opacity: 0, scale: 0.85 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          onClick={() => setIsModalOpen(true)}
          className="mt-8 w-[176px] h-[44px] rounded-[6px] 
            bg-white text-[#023A9A] font-sans font-bold text-[16px] leading-[20px] 
            text-center shadow-md hover:shadow-xl hover:scale-[1.05] 
            transition duration-300"
          aria-label={currentContent.button}
          itemProp="potentialAction"
        >
          {currentContent.button}
        </motion.button>

        {/* Hidden Contact Information for SEO */}
        <div className="hidden" aria-hidden="true">
          <div itemProp="contactPoint" itemScope itemType="https://schema.org/ContactPoint">
            <meta itemProp="contactType" content="customer service" />
            <meta itemProp="telephone" content="+966-XXXXXXXXXX" />
            <meta itemProp="email" content="info@ramlimited.com" />
            <meta itemProp="areaServed" content="SA" />
            <meta itemProp="availableLanguage" content="Arabic,English" />
            <meta itemProp="contactOption" content="TollFree" />
          </div>
          
          <div itemProp="provider" itemScope itemType="https://schema.org/Organization">
            <meta itemProp="name" content="Ram Limited" />
            <meta itemProp="url" content={typeof window !== 'undefined' ? window.location.origin : ""} />
            <div itemProp="address" itemScope itemType="https://schema.org/PostalAddress">
              <meta itemProp="addressCountry" content="SA" />
              <meta itemProp="addressRegion" content="Riyadh Province" />
              <meta itemProp="addressLocality" content="Riyadh" />
            </div>
          </div>
        </div>

        {/* Hidden SEO Content for Search Engines */}
        <div className="hidden" aria-hidden="true">
          <h2>{isArabic ? "كيفية العمل مع رام المحدودة" : "How to Work With Ram Limited"}</h2>
          <p>{isArabic 
            ? "عملية العمل مع رام المحدودة بسيطة ومباشرة. سواء كنت بحاجة إلى خدمات صيانة لمنزلك، مكتبك، منشأتك التجارية، أو مشروعك الصناعي، نحن هنا لمساعدتك في كل خطوة."
            : "The process of working with Ram Limited is simple and straightforward. Whether you need maintenance services for your home, office, commercial facility, or industrial project, we are here to help you every step of the way."
          }</p>
          
          <h3>{isArabic ? "خطوات العمل معنا:" : "Steps to Work With Us:"}</h3>
          <ol>
            <li><strong>{isArabic ? "طلب استشارة مجانية:" : "Request Free Consultation:"}</strong> {isArabic 
              ? "انقر على زر 'اطلب عرض سعر' أو اتصل بنا مباشرة على +966-XXXXXXXXXX للحصول على استشارة أولية مجانية."
              : "Click on the 'Request A Quote' button or call us directly at +966-XXXXXXXXXX for an initial free consultation."}</li>
            <li><strong>{isArabic ? "تقييم الموقع:" : "Site Assessment:"}</strong> {isArabic 
              ? "نحدد موعداً لزيارة موقعك (في الرياض، جدة، الدمام، أو أي مدينة أخرى في السعودية) لتقييم احتياجات الصيانة."
              : "We schedule an appointment to visit your site (in Riyadh, Jeddah, Dammam, or any other city in Saudi Arabia) to assess maintenance needs."}</li>
            <li><strong>{isArabic ? "تقديم عرض مفصل:" : "Provide Detailed Quote:"}</strong> {isArabic 
              ? "نقدم لك عرض سعر مفصل وشامل يوضح جميع التكاليف، المدة الزمنية، ونطاق العمل بدون أي رسوم مخفية."
              : "We provide you with a detailed and comprehensive quote showing all costs, timeline, and scope of work with no hidden fees."}</li>
            <li><strong>{isArabic ? "توقيع العقد والبدء:" : "Sign Contract and Start:"}</strong> {isArabic 
              ? "بعد موافقتك على العرض، نوقع العقد وتبدأ أعمال الصيانة في الوقت المتفق عليه."
              : "After your approval of the quote, we sign the contract and maintenance work begins at the agreed time."}</li>
            <li><strong>{isArabic ? "التنفيذ والجودة:" : "Execution and Quality:"}</strong> {isArabic 
              ? "فريقنا المعتمد يقوم بتنفيذ العمل مع الالتزام بأعلى معايير الجودة والسلامة."
              : "Our certified team executes the work while adhering to the highest quality and safety standards."}</li>
            <li><strong>{isArabic ? "المتابعة والضمان:" : "Follow-up and Warranty:"}</strong> {isArabic 
              ? "نقوم بمتابعة العمل بعد الانتهاء ونقدم ضماناً على جميع الأعمال المنفذة."
              : "We follow up after completion and provide a warranty on all completed work."}</li>
          </ol>
          
          <h3>{isArabic ? "أنواع المشاريع التي نتعامل معها:" : "Types of Projects We Handle:"}</h3>
          <ul>
            <li>{isArabic ? "صيانة المنازل والشقق السكنية" : "Maintenance of homes and residential apartments"}</li>
            <li>{isArabic ? "صيانة المكاتب والمباني الإدارية" : "Maintenance of offices and administrative buildings"}</li>
            <li>{isArabic ? "صيانة المراكز التجارية والمولات" : "Maintenance of shopping centers and malls"}</li>
            <li>{isArabic ? "صيانة المستشفيات والمراكز الصحية" : "Maintenance of hospitals and health centers"}</li>
            <li>{isArabic ? "صيانة المصانع والمنشآت الصناعية" : "Maintenance of factories and industrial facilities"}</li>
            <li>{isArabic ? "صيانة الفنادق والمنتجعات" : "Maintenance of hotels and resorts"}</li>
            <li>{isArabic ? "صيانة المدارس والجامعات" : "Maintenance of schools and universities"}</li>
            <li>{isArabic ? "صيانة المساجد والمباني الدينية" : "Maintenance of mosques and religious buildings"}</li>
          </ul>
          
          <h3>{isArabic ? "خدمات الصيانة التي نقدمها:" : "Maintenance Services We Provide:"}</h3>
          <ul>
            <li>{isArabic ? "صيانة وتركيب أنظمة التكييف والتبريد" : "AC and cooling system maintenance and installation"}</li>
            <li>{isArabic ? "الصيانة الكهربائية والإنارة" : "Electrical maintenance and lighting"}</li>
            <li>{isArabic ? "خدمات السباكة وإصلاح التسريبات" : "Plumbing services and leak repairs"}</li>
            <li>{isArabic ? "خدمات الدهان والطلاء الداخلي والخارجي" : "Interior and exterior painting services"}</li>
            <li>{isArabic ? "الصيانة الوقائية والدورية" : "Preventive and periodic maintenance"}</li>
            <li>{isArabic ? "إدارة المرافق والصيانة الشاملة" : "Facility management and comprehensive maintenance"}</li>
            <li>{isArabic ? "خدمات الطوارئ 24/7" : "24/7 emergency services"}</li>
            <li>{isArabic ? "عقود الصيانة السنوية (AMC)" : "Annual Maintenance Contracts (AMC)"}</li>
          </ul>
          
          <h3>{isArabic ? "مزايا العمل مع رام المحدودة:" : "Advantages of Working With Ram Limited:"}</h3>
          <ul>
            <li>{isArabic ? "10+ سنوات خبرة في سوق الصيانة السعودي" : "10+ years experience in the Saudi maintenance market"}</li>
            <li>{isArabic ? "فريق معتمد من 67+ مهندس وفني" : "Certified team of 67+ engineers and technicians"}</li>
            <li>{isArabic ? "أسعار شفافة بدون رسوم مخفية" : "Transparent pricing with no hidden fees"}</li>
            <li>{isArabic ? "خدمة 24/7 للطوارئ في جميع أنحاء السعودية" : "24/7 emergency service throughout Saudi Arabia"}</li>
            <li>{isArabic ? "ضمان على جميع الأعمال المنفذة" : "Warranty on all completed work"}</li>
            <li>{isArabic ? "استجابة سريعة خلال ساعتين" : "Quick response within 2 hours"}</li>
            <li>{isArabic ? "7 شهادات جودة معتمدة" : "7 certified quality qualifications"}</li>
            <li>{isArabic ? "أكثر من 227,563 متر مربع من المشاريع المكتملة" : "Over 227,563 square meters of completed projects"}</li>
          </ul>
          
          <p><strong>{isArabic ? "كيفية التواصل معنا:" : "How to Contact Us:"}</strong></p>
          <p>{isArabic 
            ? "هاتف: +966-XXXXXXXXXX | بريد إلكتروني: info@ramlimited.com | ساعات العمل: الأحد - الخميس 8 صباحاً - 10 مساءً، الجمعة والسبت 4 مساءً - 10 مساءً"
            : "Phone: +966-XXXXXXXXXX | Email: info@ramlimited.com | Working Hours: Sunday - Thursday 8 AM - 10 PM, Friday & Saturday 4 PM - 10 PM"
          }</p>
          
          <p>{isArabic 
            ? "نحن نخدم جميع مدن المملكة العربية السعودية بما في ذلك الرياض، جدة، الدمام، الخبر، الظهران، مكة المكرمة، المدينة المنورة، الطائف، أبها، نجران، جازان، حائل، تبوك، بريدة، والقصيم."
            : "We serve all cities of Saudi Arabia including Riyadh, Jeddah, Dammam, Al Khobar, Dhahran, Mecca, Medina, Taif, Abha, Najran, Jazan, Hail, Tabuk, Buraidah, and Al Qassim."
          }</p>
        </div>

        {/* Modal */}
        {isModalOpen && (
          <RequestQuoteForm onClose={() => setIsModalOpen(false)} />
        )}
      </section>
    </>
  );
};

export default WorkWithUs;