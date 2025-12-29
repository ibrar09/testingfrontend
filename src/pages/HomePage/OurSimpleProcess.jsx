// src/components/HomePage/OurSimpleProcess.jsx
import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import OurSimpleCard from "../../components/Cards/OurSimpleCard";
import RequestQuoteForm from "../RequestPage/RequestQuoteForm";
import Contact from "../../assets/images/Contact-unsplash.webp";
import assessment from "../../assets/images/assesment-unsplash.webp";
import execution from "../../assets/images/Execution-unsplash.webp";
import Followup from "../../assets/images/Followup-unsplash.webp";
import PhoneIcon from "@mui/icons-material/Phone";
import InsertChartOutlinedIcon from "@mui/icons-material/InsertChartOutlined";
import SettingsIcon from "@mui/icons-material/Settings";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import { useLanguage } from "../../context/LanguageContext";
import translationsEN from "../../translation/en.json";
import translationsAR from "../../translation/ar.json";

const OurSimpleProcess = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { lang } = useLanguage();
  const isArabic = lang === "ar";
  const translations = isArabic ? translationsAR : translationsEN;

  // SEO optimized content (INVISIBLE)
  const pageTitle = isArabic 
    ? "عملية الصيانة البسيطة - رام المحدودة السعودية" 
    : "Simple Maintenance Process - Ram Limited Saudi Arabia";
  
  const pageDescription = isArabic
    ? "4 خطوات بسيطة لخدمات الصيانة في السعودية: طلب الخدمة، التقييم، التنفيذ، المتابعة. ضمان الجودة والسرعة في الرياض، جدة، الدمام."
    : "4 simple steps for maintenance services in Saudi Arabia: Service Request, Assessment, Execution, Follow-up. Quality guarantee and speed in Riyadh, Jeddah, Dammam.";

  const processStepsData = [
    {
      imageSrc: Contact,
      altText: isArabic ? "طلب الخدمة" : "Request Service Image",
      icon: <PhoneIcon fontSize="small" />,
      cardTitle: translations.requestService || "Request Service",
      cardDescription: isArabic
        ? "املأ نموذج الطلب البسيط أو اتصل بنا مباشرة. سنرد خلال ساعتين خلال ساعات العمل."
        : "Fill out our simple request form or call us directly. We'll respond within 2 hours during business hours.",
    },
    {
      imageSrc: assessment,
      altText: isArabic ? "التقييم والعرض" : "Assessment and Quote Image",
      icon: <InsertChartOutlinedIcon fontSize="small" />,
      cardTitle: translations.assessmentQuote || "Assessment & Quote",
      cardDescription: isArabic
        ? "نقدم عرضًا مفصلًا وشفافًا خلال 24 ساعة لتعرف ما يمكنك توقعه بالضبط."
        : "We provide a detailed, transparent quote within 24 hours so you know exactly what to expect.",
    },
    {
      imageSrc: execution,
      altText: isArabic ? "التنفيذ" : "Execution Image",
      icon: <SettingsIcon fontSize="small" />,
      cardTitle: translations.execution || "Execution",
      cardDescription: isArabic
        ? "يقوم فريقنا بتنفيذ الخطة بكفاءة، مع الحد الأدنى من التعطيل وضمان الجودة."
        : "Our team executes the plan efficiently, minimizing disruption and ensuring quality.",
    },
    {
      imageSrc: Followup,
      altText: isArabic ? "المتابعة والمراجعة" : "Follow-up and Review Image",
      icon: <CheckBoxIcon fontSize="small" />,
      cardTitle: translations.followUp || "Follow-up & Review",
      cardDescription: isArabic
        ? "نجري الفحص النهائي ونتابع لضمان رضاك التام."
        : "We perform a final check and follow up to ensure your complete satisfaction.",
    },
  ];

  return (
    <>
      {/* INVISIBLE SEO ONLY - No design changes */}
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        
        {/* Structured Data for Process/HowTo */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "HowTo",
            "name": isArabic ? "عملية الصيانة البسيطة في السعودية" : "Simple Maintenance Process in Saudi Arabia",
            "description": isArabic 
              ? "4 خطوات بسيطة للحصول على خدمات الصيانة من شركة رام المحدودة في السعودية"
              : "4 simple steps to get maintenance services from Ram Limited in Saudi Arabia",
            "totalTime": "P2D",
            "estimatedCost": {
              "@type": "MonetaryAmount",
              "currency": "SAR",
              "value": "Varies based on service"
            },
            "supply": [
              {
                "@type": "HowToSupply",
                "name": isArabic ? "معلومات الاتصال" : "Contact Information"
              },
              {
                "@type": "HowToSupply", 
                "name": isArabic ? "تفاصيل المشكلة" : "Problem Details"
              }
            ],
            "tool": [
              {
                "@type": "HowToTool",
                "name": isArabic ? "طلب خدمة عبر الإنترنت" : "Online Service Request"
              },
              {
                "@type": "HowToTool",
                "name": isArabic ? "هاتف للاتصال" : "Phone for Contact"
              }
            ],
            "step": [
              {
                "@type": "HowToStep",
                "name": isArabic ? "طلب الخدمة" : "Request Service",
                "text": isArabic 
                  ? "املأ نموذج الطلب البسيط أو اتصل بنا مباشرة. سنرد خلال ساعتين خلال ساعات العمل."
                  : "Fill out our simple request form or call us directly. We'll respond within 2 hours during business hours.",
                "url": typeof window !== 'undefined' ? window.location.origin + "/request-quote" : "",
                "image": {
                  "@type": "ImageObject",
                  "url": typeof window !== 'undefined' ? `${window.location.origin}${Contact}` : "",
                  "height": "400",
                  "width": "600"
                }
              },
              {
                "@type": "HowToStep",
                "name": isArabic ? "التقييم والعرض" : "Assessment & Quote",
                "text": isArabic 
                  ? "نقدم عرضًا مفصلًا وشفافًا خلال 24 ساعة لتعرف ما يمكنك توقعه بالضبط."
                  : "We provide a detailed, transparent quote within 24 hours so you know exactly what to expect.",
                "image": {
                  "@type": "ImageObject",
                  "url": typeof window !== 'undefined' ? `${window.location.origin}${assessment}` : "",
                  "height": "400",
                  "width": "600"
                }
              },
              {
                "@type": "HowToStep",
                "name": isArabic ? "التنفيذ" : "Execution",
                "text": isArabic 
                  ? "يقوم فريقنا بتنفيذ الخطة بكفاءة، مع الحد الأدنى من التعطيل وضمان الجودة."
                  : "Our team executes the plan efficiently, minimizing disruption and ensuring quality.",
                "image": {
                  "@type": "ImageObject",
                  "url": typeof window !== 'undefined' ? `${window.location.origin}${execution}` : "",
                  "height": "400",
                  "width": "600"
                }
              },
              {
                "@type": "HowToStep",
                "name": isArabic ? "المتابعة والمراجعة" : "Follow-up & Review",
                "text": isArabic 
                  ? "نجري الفحص النهائي ونتابع لضمان رضاك التام."
                  : "We perform a final check and follow up to ensure your complete satisfaction.",
                "image": {
                  "@type": "ImageObject",
                  "url": typeof window !== 'undefined' ? `${window.location.origin}${Followup}` : "",
                  "height": "400",
                  "width": "600"
                }
              }
            ],
            "countryOfOrigin": {
              "@type": "Country",
              "name": "Saudi Arabia"
            }
          })}
        </script>
      </Helmet>

      {/* ORIGINAL DESIGN - NO VISIBLE CHANGES */}
      <section
        dir={isArabic ? "rtl" : "ltr"}
        aria-labelledby="our-process-title"
        className="w-full max-w-[1400px] mx-auto py-16 sm:py-24 bg-[#FAFAFA]"
        // INVISIBLE SEO attributes
        itemScope
        itemType="https://schema.org/HowTo"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-12 sm:gap-16">

          {/* Title & Description */}
          <header className="text-center mx-auto flex flex-col items-center">
            <h2
              id="our-process-title"
              className="font-sans font-bold text-3xl sm:text-4xl lg:text-[48px] leading-tight lg:leading-[48px] text-gray-900 animate-fadeUp"
              itemProp="name"
            >
              {isArabic ? "خطوتنا البسيطة" : "Our Simple"}{" "}
              <span className="text-[#023A9A]">
                {isArabic ? "العملية" : "Process"}
              </span>
            </h2>
            <p 
              className="mt-4 max-w-full sm:max-w-[768px] font-normal text-base sm:text-lg lg:text-[20px] leading-relaxed lg:leading-[28px] text-[#737373] animate-fadeUp"
              itemProp="description"
            >
              {isArabic
                ? "تضمن عمليتنا المبسطة ذات الأربع خطوات نتائج عالية الجودة في كل مرة، مع الحد الأدنى من التأثير على أعمالك."
                : "Our straightforward, four-step process ensures quality results every time, with minimal disruption to your business."}
            </p>
          </header>

          {/* Cards Grid */}
          <div 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center"
            itemScope
            itemProp="step"
            itemType="https://schema.org/HowToStep"
          >
            {processStepsData.map((card, index) => (
              <div
                key={index}
                itemProp="step"
                itemScope
                itemType="https://schema.org/HowToStep"
              >
                {/* INVISIBLE meta for structured data */}
                <meta itemProp="position" content={index + 1} />
                <meta itemProp="name" content={card.cardTitle} />
                <meta itemProp="text" content={card.cardDescription} />
                <OurSimpleCard card={card} index={index} />
              </div>
            ))}
          </div>

          {/* Call to Action Button */}
          <div className="mt-8 w-full flex justify-center">
            <button
              aria-label={isArabic ? "اطلب الخدمة اليوم" : "Request a Service today"}
              className="w-auto px-6 py-3 h-[44px] bg-[#023A9A] text-white rounded-md border-[1.6px] border-[#023A9A] 
                         flex items-center justify-center 
                         font-sans font-bold text-base leading-5 
                         transition-colors duration-300 hover:bg-white hover:text-[#023A9A] focus:ring focus:ring-primary/50"
              onClick={() => setIsModalOpen(true)}
              itemProp="potentialAction"
            >
              {isArabic ? "اطلب الخدمة اليوم" : "Request a Service today"}
            </button>
          </div>

          {/* INVISIBLE SEO text for search engines */}
          <div className="hidden" aria-hidden="true">
            <h3>{isArabic ? "عملية الصيانة في السعودية" : "Maintenance Process in Saudi Arabia"}</h3>
            <p>{isArabic 
              ? "شركة رام المحدودة تتبع عملية مبسطة مكونة من 4 خطوات لجميع خدمات الصيانة في المملكة العربية السعودية. سواء كنت بحاجة إلى خدمات سباكة، كهرباء، تكييف، أو دهان في الرياض، جدة، الدمام أو أي مدينة أخرى، فإن عملية العمل لدينا تضمن جودة الخدمة والسرعة."
              : "Ram Limited follows a simple 4-step process for all maintenance services in Saudi Arabia. Whether you need plumbing, electrical, HVAC, or painting services in Riyadh, Jeddah, Dammam or any other city, our work process ensures service quality and speed."
            }</p>
            
            <h4>{isArabic ? "مزايا عملية العمل لدينا:" : "Advantages of Our Process:"}</h4>
            <ul>
              <li>{isArabic ? "استجابة سريعة خلال ساعتين" : "Quick response within 2 hours"}</li>
              <li>{isArabic ? "عروض أسعار شفافة خلال 24 ساعة" : "Transparent quotes within 24 hours"}</li>
              <li>{isArabic ? "تنفيذ بكفاءة مع أقل تعطيل" : "Efficient execution with minimal disruption"}</li>
              <li>{isArabic ? "متابعة لضمان الرضا التام" : "Follow-up to ensure complete satisfaction"}</li>
            </ul>
            
            <p>{isArabic 
              ? "نقدم خدمات صيانة الطوارئ على مدار الساعة في جميع أنحاء السعودية. فريقنا المدرب والمعتمد جاهز لخدمتك في الرياض، جدة، الدمام، مكة، المدينة المنورة، والخبر."
              : "We provide 24/7 emergency maintenance services throughout Saudi Arabia. Our trained and certified team is ready to serve you in Riyadh, Jeddah, Dammam, Mecca, Medina, and Al Khobar."
            }</p>
          </div>
        </div>

        {/* Request Quote Modal */}
        {isModalOpen && <RequestQuoteForm onClose={() => setIsModalOpen(false)} />}
      </section>
    </>
  );
};

export default OurSimpleProcess;