import React from "react";
import { Helmet } from "react-helmet-async";
import { useLanguage } from "../../context/LanguageContext";
import CheckCircle from "@mui/icons-material/CheckCircle";
import Bolt from "@mui/icons-material/Bolt";
import { motion } from "framer-motion";

// --- Animated Card ---
const StrengthCard = ({ icon: Icon, title, description, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, ease: "easeOut" }}
    className="bg-white p-6 text-center rounded-lg shadow hover:shadow-lg transition w-full max-w-xs flex flex-col"
    itemScope
    itemType="https://schema.org/Service"
  >
    <div className="mx-auto w-16 h-16 flex items-center justify-center bg-primary rounded-full mb-4 flex-shrink-0">
      <Icon sx={{ fontSize: 32, color: "white" }} />
    </div>
    <h3 
      className="text-xl font-semibold mb-2"
      itemProp="name"
    >
      {title}
    </h3>
    <p 
      className="text-gray-600 flex-grow"
      itemProp="description"
    >
      {description}
    </p>
    
    {/* Hidden structured data */}
    <div className="hidden" aria-hidden="true">
      <meta itemProp="serviceType" content={typeof title === 'string' ? title : "Professional Maintenance Service"} />
      <meta itemProp="provider" content="Ram Limited" />
      <meta itemProp="areaServed" content="Saudi Arabia" />
      <meta itemProp="position" content={index + 1} />
    </div>
  </motion.div>
);

const OurStrengthSection = () => {
  const { lang } = useLanguage();
  const isArabic = lang === "ar";

  // Content for English and Arabic
  const content = {
    en: {
      heading: "Our Strength",
      subheading: "Why Ram Limited is trusted by businesses and homeowners across Saudi Arabia.",
      cards: [
        {
          icon: CheckCircle,
          title: "Expert and Qualified Teams",
          description: "Maintenance you can count on with highly trained professionals.",
        },
        {
          icon: Bolt,
          title: (
            <>
              Certified Quality <br /> Credentials
            </>
          ),
          description: "Skilled professionals with years of experience in building maintenance.",
        },
      ],
      seoTitle: "Our Strengths | Ram Limited - Certified Maintenance Services in Saudi Arabia",
      seoDescription: "Ram Limited's strengths: Expert teams, certified quality credentials, 10+ years experience, 500+ projects completed in Saudi Arabia. Trusted maintenance company.",
      keywords: "maintenance company strengths, certified maintenance saudi arabia, expert maintenance teams, qualified technicians riyadh"
    },
    ar: {
      heading: "قوتنا",
      subheading: "لماذا يثق الشركات وأصحاب المنازل في رام المحدودة في جميع أنحاء المملكة العربية السعودية.",
      cards: [
        {
          icon: CheckCircle,
          title: "فرق خبيرة ومؤهلة",
          description: "صيانة يمكنك الاعتماد عليها مع محترفين مدربين تدريباً عالياً.",
        },
        {
          icon: Bolt,
          title: (
            <>
              شهادات جودة <br /> معتمدة
            </>
          ),
          description: "محترفون مهرة لديهم سنوات من الخبرة في صيانة المباني.",
        },
      ],
      seoTitle: "قوتنا | رام المحدودة - خدمات صيانة معتمدة في السعودية",
      seoDescription: "نقاط قوة رام المحدودة: فرق خبيرة، شهادات جودة معتمدة، خبرة 10+ سنوات، 500+ مشروع مكتمل في السعودية. شركة صيانة موثوقة.",
      keywords: "نقاط قوة شركة صيانة, صيانة معتمدة السعودية, فرق صيانة خبيرة, فنيون مؤهلون الرياض"
    },
  };

  const currentContent = content[lang];

  return (
    <>
      {/* SEO Meta Tags */}
      <Helmet>
        <title>{currentContent.seoTitle}</title>
        <meta name="description" content={currentContent.seoDescription} />
        <meta name="keywords" content={currentContent.keywords} />
        
        {/* Structured Data for Strengths/Advantages */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            "name": currentContent.heading,
            "description": currentContent.subheading,
            "itemListOrder": "https://schema.org/ItemListUnordered",
            "numberOfItems": currentContent.cards.length,
            "itemListElement": currentContent.cards.map((card, index) => ({
              "@type": "ListItem",
              "position": index + 1,
              "item": {
                "@type": "Service",
                "name": typeof card.title === 'string' ? card.title : "Certified Quality Credentials",
                "description": card.description,
                "provider": {
                  "@type": "Organization",
                  "name": "Ram Limited",
                  "description": isArabic 
                    ? "شركة صيانة معتمدة في السعودية"
                    : "Certified maintenance company in Saudi Arabia",
                  "address": {
                    "@type": "PostalAddress",
                    "addressCountry": "SA"
                  }
                },
                "serviceType": isArabic ? "خدمات الصيانة" : "Maintenance Services",
                "areaServed": {
                  "@type": "Place",
                  "name": ["Riyadh", "Jeddah", "Dammam", "Mecca", "Medina"]
                }
              }
            }))
          })}
        </script>
      </Helmet>

      <section
        className="max-w-[1440px] mx-auto px-6 py-16 bg-gray-50"
        dir={isArabic ? "rtl" : "ltr"}
        aria-label={currentContent.heading}
        itemScope
        itemType="https://schema.org/ItemList"
      >
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-12"
        >
          <h2 
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900"
            itemProp="name"
          >
            {currentContent.heading}
          </h2>
          <p 
            className="mt-2 text-gray-600 text-base sm:text-lg"
            itemProp="description"
          >
            {currentContent.subheading}
          </p>
        </motion.div>

        {/* Flex Container for Cards */}
        <div 
          className="flex flex-col sm:flex-row justify-center items-center sm:items-stretch gap-6 sm:gap-8 flex-wrap"
          itemProp="itemListElement"
          itemScope
          itemType="https://schema.org/ListItem"
        >
          {currentContent.cards.map((card, index) => (
            <div
              key={index}
              itemProp="itemListElement"
              itemScope
              itemType="https://schema.org/ListItem"
              className="flex"
            >
              <meta itemProp="position" content={index + 1} />
              <StrengthCard
                icon={card.icon}
                title={card.title}
                description={card.description}
                index={index}
              />
            </div>
          ))}
        </div>

        {/* Hidden SEO Content for Search Engines */}
        <div className="hidden" aria-hidden="true">
          <h3>{isArabic ? "نقاط القوة الرئيسية لشركة رام المحدودة:" : "Key Strengths of Ram Limited Company:"}</h3>
          
          <h4>{isArabic ? "1. فرق خبيرة ومؤهلة:" : "1. Expert and Qualified Teams:"}</h4>
          <p>{isArabic 
            ? "تمتلك رام المحدودة فريقاً من أكثر من 50 مهندس وفني معتمدين يتمتعون بخبرة تزيد عن 10 سنوات في جميع مجالات الصيانة. يتلقى فريقنا تدريباً مستمراً على أحدث التقنيات والمعايير الدولية في مجال الصيانة. نحن نؤمن باستثمار الوقت والموارد في تطوير مهارات فريقنا لضمان تقديم خدمة استثنائية لعملائنا في جميع أنحاء المملكة العربية السعودية."
            : "Ram Limited has a team of over 50 certified engineers and technicians with more than 10 years of experience in all maintenance fields. Our team receives continuous training on the latest technologies and international maintenance standards. We believe in investing time and resources in developing our team's skills to ensure exceptional service for our clients throughout Saudi Arabia."
          }</p>
          
          <h4>{isArabic ? "2. شهادات جودة معتمدة:" : "2. Certified Quality Credentials:"}</h4>
          <p>{isArabic 
            ? "نحن حاصلون على شهادات الجودة والاعتمادات المحلية والدولية التي تؤكد التزامنا بأعلى معايير الجودة في خدمات الصيانة. تشمل اعتماداتنا: شهادات السلامة المهنية، شهادات الجودة من الهيئة السعودية للمقاييس والجودة، واعتمادات من كبرى الشركات المصنعة لمعدات الصيانة. هذه الشهادات تضمن لعملائنا أن جميع أعمال الصيانة التي نقوم بها تلتزم بأعلى المعايير الفنية والسلامة."
            : "We hold local and international quality certificates and accreditations that confirm our commitment to the highest standards of quality in maintenance services. Our accreditations include: Professional safety certificates, quality certificates from the Saudi Standards, Metrology and Quality Organization (SASO), and accreditations from major maintenance equipment manufacturers. These certificates assure our clients that all maintenance work we perform adheres to the highest technical and safety standards."
          }</p>
          
          <h4>{isArabic ? "3. خبرة واسعة في السوق السعودي:" : "3. Extensive Experience in Saudi Market:"}</h4>
          <p>{isArabic 
            ? "مع أكثر من 10 سنوات من الخبرة في السوق السعودي، نفهم تماماً الاحتياجات الفريدة للعملاء في المملكة. قمنا بتنفيذ أكثر من 500 مشروع صيانة في جميع أنحاء السعودية، من المنازل السكنية في الرياض إلى المجمعات التجارية الكبيرة في جدة والمنشآت الصناعية في الدمام. هذه الخبرة تمكننا من تقديم حلول صيانة فعالة ومخصصة لكل عميل."
            : "With over 10 years of experience in the Saudi market, we fully understand the unique needs of clients in the Kingdom. We have implemented more than 500 maintenance projects throughout Saudi Arabia, from residential homes in Riyadh to large commercial complexes in Jeddah and industrial facilities in Dammam. This experience enables us to provide effective and customized maintenance solutions for each client."
          }</p>
          
          <h4>{isArabic ? "4. تكنولوجيا ومعدات متطورة:" : "4. Advanced Technology and Equipment:"}</h4>
          <p>{isArabic 
            ? "نستثمر باستمرار في أحدث المعدات والتقنيات لضمان كفاءة وجودة أعمال الصيانة. نمتلك أسطولاً من المركبات المجهزة تجهيزاً كاملاً وأحدث أدوات التشخيص والمعدات المتخصصة لجميع أنواع الصيانة. هذا يمكن فريقنا من إكمال المهام بشكل أسرع وأكثر دقة، مما يقلل من وقت التوقف عن العمل لعملائنا."
            : "We continuously invest in the latest equipment and technologies to ensure the efficiency and quality of maintenance work. We have a fleet of fully equipped vehicles and the latest diagnostic tools and specialized equipment for all types of maintenance. This enables our team to complete tasks faster and more accurately, reducing downtime for our clients."
          }</p>
          
          <h4>{isArabic ? "5. خدمة عملاء استثنائية:" : "5. Exceptional Customer Service:"}</h4>
          <p>{isArabic 
            ? "نؤمن بأن خدمة العملاء المتميزة هي أساس نجاحنا. نقدم استجابة سريعة خلال ساعتين، خدمة 24/7 للطوارئ، ومتابعة بعد الخدمة لضمان رضا العملاء التام. فريق خدمة العملاء لدينا يتحدث العربية والإنجليزية ويمكنه مساعدتك في جميع استفساراتك واحتياجاتك."
            : "We believe that exceptional customer service is the foundation of our success. We provide quick response within 2 hours, 24/7 emergency service, and follow-up after service to ensure complete customer satisfaction. Our customer service team speaks Arabic and English and can assist you with all your inquiries and needs."
          }</p>
          
          <h4>{isArabic ? "6. أسعار شفافة وضمان الجودة:" : "6. Transparent Pricing and Quality Guarantee:"}</h4>
          <p>{isArabic 
            ? "نقدم أسعاراً شفافة بدون رسوم مخفية وضماناً على جميع أعمال الصيانة التي نقوم بها. نحن نؤمن بأن الجودة الحقيقية لا تتعلق فقط بالسعر المنخفض ولكن بالقيمة المقدمة. ضماننا يشمل جميع الأجزاء والعمالة، مما يمنح عملائنا راحة البال والثقة في خدماتنا."
            : "We offer transparent pricing with no hidden fees and a warranty on all maintenance work we perform. We believe that true quality is not just about low price but about the value provided. Our warranty covers all parts and labor, giving our clients peace of mind and confidence in our services."
          }</p>
          
          <p><strong>{isArabic ? "لماذا تختار رام المحدودة؟" : "Why Choose Ram Limited?"}</strong></p>
          <ul>
            <li>{isArabic ? "10+ سنوات خبرة في الصيانة في السعودية" : "10+ years of maintenance experience in Saudi Arabia"}</li>
            <li>{isArabic ? "فريق من 50+ مهندس وفني معتمد" : "Team of 50+ certified engineers and technicians"}</li>
            <li>{isArabic ? "500+ مشروع صيانة مكتمل" : "500+ completed maintenance projects"}</li>
            <li>{isArabic ? "خدمة 24/7 للطوارئ في جميع أنحاء السعودية" : "24/7 emergency service throughout Saudi Arabia"}</li>
            <li>{isArabic ? "شهادات جودة محلية ودولية" : "Local and international quality certificates"}</li>
            <li>{isArabic ? "أسعار شفافة وضمان على الخدمة" : "Transparent pricing and service warranty"}</li>
          </ul>
          
          <p>{isArabic 
            ? "للتعرف أكثر على خدماتنا أو لطلب استشارة مجانية، اتصل بنا على: +966-XXXXXXXXXX أو قم بزيارة صفحة الخدمات على موقعنا الإلكتروني."
            : "To learn more about our services or to request a free consultation, contact us at: +966-XXXXXXXXXX or visit the services page on our website."
          }</p>
        </div>
      </section>
    </>
  );
};

export default OurStrengthSection;