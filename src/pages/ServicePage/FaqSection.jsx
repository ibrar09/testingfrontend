// src/Components/FaqSection.jsx
import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { useLanguage } from "../../context/LanguageContext";

const PRIMARY_BLUE = "#023A9A";

// FAQ Data with translations
const faqData = {
  en: [
    {
      question: "What services are included in your fit-out solutions?",
      answer:
        "Our fit-out solutions are comprehensive, covering HVAC installation, full electrical wiring and power distribution, plumbing systems, and general structural maintenance to prepare a space for immediate use.",
    },
    {
      question: "How long does a typical project take?",
      answer:
        "The duration of a project varies significantly based on complexity and scope. Small repairs often take a few hours, while full-service annual contracts involve continuous planned maintenance throughout the year. We provide a detailed timeline after the initial site assessment.",
    },
    {
      question: "Do you offer emergency repair services?",
      answer:
        "Yes, we offer 24/7 emergency response services for all our contract clients, covering urgent electrical, plumbing, and HVAC failures. For non-contract clients, we assess emergency availability on a case-by-case basis.",
    },
    {
      question: "What safety standards do you follow?",
      answer:
        "We adhere strictly to all national and local safety regulations and codes (e.g., OSHA, NEC). Our technicians are certified, and we maintain rigorous site safety protocols on every job to ensure the safety of our team and our clients.",
    },
    {
      question: "Do you provide maintenance contracts?",
      answer:
        "Absolutely. We offer tailored annual maintenance contracts for businesses and large homeowners that include regular preventive inspections, priority scheduling, and discounted repair rates.",
    },
    {
      question: "How do you ensure project quality?",
      answer:
        "Quality is ensured through certified technicians, the use of high-grade materials, and a multi-stage inspection process led by a dedicated project manager. We also provide a satisfaction guarantee on all completed work.",
    },
  ],
  ar: [
    {
      question: "ما هي الخدمات المشمولة في حلول التجهيز؟",
      answer:
        "تشمل حلول التجهيز لدينا كل شيء، بما في ذلك تركيب التكييف والتهوية، والأسلاك الكهربائية وتوزيع الطاقة، وأنظمة السباكة، والصيانة الهيكلية العامة لإعداد المساحة للاستخدام الفوري.",
    },
    {
      question: "كم تستغرق مدة المشروع النموذجي؟",
      answer:
        "تختلف مدة المشروع بشكل كبير حسب التعقيد والنطاق. غالبًا ما تستغرق الإصلاحات الصغيرة بضع ساعات، بينما تشمل العقود السنوية الكاملة صيانة مخططة مستمرة طوال العام. نحن نقدم جدولًا زمنيًا مفصلًا بعد تقييم الموقع الأولي.",
    },
    {
      question: "هل تقدمون خدمات إصلاح الطوارئ؟",
      answer:
        "نعم، نقدم خدمات استجابة للطوارئ على مدار الساعة لجميع عملائنا المتعاقدين، تغطي الأعطال الكهربائية والسباكة والتكييف العاجلة. بالنسبة للعملاء غير المتعاقدين، نقيم توفر الطوارئ حسب الحالة.",
    },
    {
      question: "ما هي معايير السلامة التي تتبعونها؟",
      answer:
        "نلتزم بدقة بجميع اللوائح الوطنية والمحلية للسلامة والقوانين (مثل OSHA و NEC). فنيونا معتمدون، ونحافظ على بروتوكولات صارمة للسلامة في الموقع لضمان سلامة فريقنا وعملائنا.",
    },
    {
      question: "هل تقدمون عقود صيانة؟",
      answer:
        "بالتأكيد. نقدم عقود صيانة سنوية مخصصة للشركات وأصحاب المنازل الكبار، وتشمل فحوصات وقائية منتظمة، وأولوية في الجدولة، وأسعار إصلاح مخفضة.",
    },
    {
      question: "كيف تضمنون جودة المشروع؟",
      answer:
        "يتم ضمان الجودة من خلال الفنيين المعتمدين، واستخدام المواد عالية الجودة، وعملية تفتيش متعددة المراحل بقيادة مدير مشروع مخصص. كما نقدم ضمان رضا على جميع الأعمال المكتملة.",
    },
  ],
};

// Accordion Item Component
const AccordionItem = ({ question, answer, isOpen, onClick, index }) => {
  const Icon = isOpen ? ChevronUp : ChevronDown;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="w-full max-w-4xl mx-auto rounded-xl bg-white border border-gray-200 overflow-hidden shadow-sm transition-all duration-300 hover:shadow-md"
    >
      {/* Header */}
      <button
        onClick={onClick}
        aria-expanded={isOpen}
        className={`flex justify-between items-center w-full p-4 sm:p-5 font-semibold cursor-pointer text-base transition-colors duration-300
        ${isOpen ? `text-primary border-b border-gray-200` : "text-gray-800"}`}
      >
        {question}
        <Icon size={20} className="flex-shrink-0 transition-transform duration-300" />
      </button>

      {/* Body */}
      <div
        className={`overflow-hidden transition-all duration-500 ease-in-out ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="p-4 sm:p-5 text-gray-600 leading-relaxed">{answer}</div>
      </div>
    </motion.div>
  );
};

// Main FAQ Section
const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const { lang } = useLanguage();
  const data = faqData[lang];

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // Translations for page title and description
  const translations = {
    en: {
      pageTitle: "FAQ | RAM Company Services",
      metaDescription:
        "Frequently asked questions about RAM Company services, fit-out solutions, maintenance, emergency repairs, and project quality assurance.",
      metaKeywords:
        "FAQ, RAM Company, Construction Services, Fit-out Solutions, Maintenance Contracts, Emergency Services, Quality Assurance",
      heading: "Frequently Asked Questions",
      subHeading:
        "Common questions about our services, maintenance, and project processes",
    },
    ar: {
      pageTitle: "الأسئلة الشائعة | خدمات شركة RAM",
      metaDescription:
        "الأسئلة المتكررة حول خدمات شركة RAM، وحلول التجهيز، والصيانة، وخدمات الطوارئ، وضمان جودة المشاريع.",
      metaKeywords:
        "الأسئلة الشائعة، شركة RAM، خدمات البناء، حلول التجهيز، عقود الصيانة، خدمات الطوارئ، ضمان الجودة",
      heading: "الأسئلة الشائعة",
      subHeading: "الأسئلة الشائعة حول خدماتنا، والصيانة، وعمليات المشاريع",
    },
  };

  return (
    <>
      <Helmet>
        <title>{translations[lang].pageTitle}</title>
        <meta name="description" content={translations[lang].metaDescription} />
        <meta name="keywords" content={translations[lang].metaKeywords} />
        <meta name="robots" content="index,follow" />
        <html lang={lang} dir={lang === "ar" ? "rtl" : "ltr"} />
      </Helmet>

      <section className={`py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 ${lang === "ar" ? "text-right" : "text-left"}`}>
        <div className="max-w-7xl mx-auto text-center">
          {/* Header */}
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-3"
          >
            {translations[lang].heading}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-lg sm:text-xl text-gray-600 mb-12"
          >
            {translations[lang].subHeading}
          </motion.p>

          {/* Accordion */}
          <div className="flex flex-col space-y-4 items-center">
            {data.map((item, index) => (
              <AccordionItem
                key={index}
                question={item.question}
                answer={item.answer}
                isOpen={openIndex === index}
                onClick={() => toggleAccordion(index)}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default FaqSection;
