import React from "react";

const AboutSection = ({ reverse = false, image, title, highlight, description, badge, lang = "en" }) => {
  const isArabic = lang === "ar";
  
  // Determine schema type based on content
  const getSchemaType = () => {
    if (title?.toLowerCase().includes("mission") || title?.toLowerCase().includes("مهمة")) {
      return "https://schema.org/Mission";
    } else if (title?.toLowerCase().includes("vision") || title?.toLowerCase().includes("رؤية")) {
      return "https://schema.org/Thing"; // Vision doesn't have specific schema
    } else if (title?.toLowerCase().includes("values") || title?.toLowerCase().includes("قيم")) {
      return "https://schema.org/Thing"; // Values doesn't have specific schema
    } else {
      return "https://schema.org/AboutPage";
    }
  };

  return (
    <section 
      className="w-full bg-gray-50"
      itemScope
      itemType={getSchemaType()}
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Flex container */}
        <div
          className={`flex flex-col lg:flex-row items-center gap-8 lg:gap-12 ${
            reverse ? "lg:flex-row-reverse" : ""
          }`}
        >
          {/* Image Side */}
          <div className="relative w-full lg:w-1/2">
            <img
              src={image}
              alt={title}
              className="w-full h-auto rounded-2xl shadow-lg object-cover"
              loading="lazy"
              itemProp="image"
            />

            {/* Floating Badge */}
            {badge && (
              <div 
                className="absolute lg:-bottom-8 lg:left-8 bottom-4 left-4 bg-primary text-white rounded-xl px-4 py-3 shadow-xl text-center"
                itemScope
                itemType="https://schema.org/QuantitativeValue"
              >
                <h2 className="text-xl sm:text-2xl font-bold" itemProp="value">{badge.value}</h2>
                <p className="text-xs sm:text-sm" itemProp="unitText">{badge.label}</p>
                <meta itemProp="value" content={badge.value} />
              </div>
            )}
          </div>

          {/* Text Side */}
          <div className="w-full lg:w-1/2">
            <h1 
              className="text-3xl sm:text-4xl md:text-5xl font-bold leading-snug"
              itemProp="name"
            >
              {title} <span className="text-primary" itemProp="alternateName">{highlight}</span>
            </h1>
            <p 
              className="mt-4 sm:mt-6 text-gray-600 text-base sm:text-lg md:text-xl leading-relaxed"
              itemProp="description"
            >
              {description}
            </p>
            
            {/* Hidden structured data for search engines */}
            <div className="hidden" aria-hidden="true">
              <meta itemProp="inLanguage" content={isArabic ? "ar" : "en"} />
              <meta itemProp="locationCreated" content="Saudi Arabia" />
              
              {/* Add more context based on content type */}
              {title?.toLowerCase().includes("mission") || title?.toLowerCase().includes("مهمة") ? (
                <div itemProp="mainEntity" itemScope itemType="https://schema.org/Organization">
                  <meta itemProp="name" content="Ram Limited" />
                  <meta itemProp="description" content={description} />
                  <meta itemProp="areaServed" content="Saudi Arabia" />
                </div>
              ) : null}
              
              {/* Add keywords based on content */}
              {title && description && (
                <meta itemProp="keywords" content={`${title} ${highlight} ${description.substring(0, 50)}`} />
              )}
            </div>
          </div>
        </div>
        
        {/* Hidden SEO text for search engines - adds context without affecting design */}
        <div className="hidden" aria-hidden="true">
          <h2>{isArabic ? "معلومات إضافية عن رام المحدودة" : "Additional Information About Ram Limited"}</h2>
          <p>{isArabic 
            ? "شركة رام المحدودة هي شركة سعودية رائدة في مجال خدمات الصيانة الشاملة. تأسست في عام 2013 في الرياض، المملكة العربية السعودية، وقدمت خدماتها لأكثر من 500 عميل في جميع أنحاء المملكة."
            : "Ram Limited is a leading Saudi company in comprehensive maintenance services. Established in 2013 in Riyadh, Saudi Arabia, it has served over 500 clients across the Kingdom."
          }</p>
          
          <h3>{isArabic ? "خدماتنا الرئيسية:" : "Our Main Services:"}</h3>
          <ul>
            <li>{isArabic ? "صيانة وتركيب أنظمة التكييف والتبريد" : "AC and cooling system maintenance and installation"}</li>
            <li>{isArabic ? "الصيانة الكهربائية والإنارة" : "Electrical maintenance and lighting"}</li>
            <li>{isArabic ? "خدمات السباكة وإصلاح التسريبات" : "Plumbing services and leak repairs"}</li>
            <li>{isArabic ? "خدمات الدهان والطلاء" : "Painting and coating services"}</li>
            <li>{isArabic ? "إدارة المرافق والصيانة الوقائية" : "Facility management and preventive maintenance"}</li>
            <li>{isArabic ? "عقود الصيانة السنوية (AMC)" : "Annual Maintenance Contracts (AMC)"}</li>
          </ul>
          
          <h3>{isArabic ? "مناطق خدمتنا في السعودية:" : "Our Service Areas in Saudi Arabia:"}</h3>
          <p>{isArabic 
            ? "نحن نقدم خدماتنا في جميع مدن المملكة العربية السعودية بما في ذلك الرياض (المقر الرئيسي)، جدة، الدمام، الخبر، الظهران، مكة المكرمة، المدينة المنورة، الطائف، أبها، نجران، جازان، حائل، تبوك، بريدة، والقصيم."
            : "We provide services in all cities of Saudi Arabia including Riyadh (headquarters), Jeddah, Dammam, Al Khobar, Dhahran, Mecca, Medina, Taif, Abha, Najran, Jazan, Hail, Tabuk, Buraidah, and Al Qassim."
          }</p>
          
          <h3>{isArabic ? "مزايا التعامل معنا:" : "Advantages of Working With Us:"}</h3>
          <ul>
            <li>{isArabic ? "10+ سنوات خبرة في السوق السعودي" : "10+ years experience in the Saudi market"}</li>
            <li>{isArabic ? "فريق معتمد ومدرب على أعلى المعايير" : "Certified team trained to highest standards"}</li>
            <li>{isArabic ? "خدمة طوارئ 24/7 على مدار السنة" : "24/7 emergency service year-round"}</li>
            <li>{isArabic ? "أسعار شفافة ومنافسة" : "Transparent and competitive pricing"}</li>
            <li>{isArabic ? "ضمان على جميع الأعمال المنفذة" : "Warranty on all completed work"}</li>
            <li>{isArabic ? "استجابة سريعة خلال ساعتين" : "Quick response within 2 hours"}</li>
          </ul>
          
          <p><strong>{isArabic ? "كيفية التواصل معنا:" : "How to Contact Us:"}</strong></p>
          <p>{isArabic 
            ? "للاستفسارات أو لطلب خدمة، يمكنك الاتصال بنا على: +966-XXXXXXXXXX أو زيارة صفحة الاتصال على موقعنا الإلكتروني. نحن نتطلع إلى خدمتك في جميع أنحاء المملكة العربية السعودية."
            : "For inquiries or to request service, you can contact us at: +966-XXXXXXXXXX or visit the contact page on our website. We look forward to serving you throughout Saudi Arabia."
          }</p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;