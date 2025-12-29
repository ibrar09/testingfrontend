import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import { CheckCircle } from "@mui/icons-material";
import RequestQuoteForm from "../RequestPage/RequestQuoteForm";
import { useLanguage } from "../../context/LanguageContext";

import Fitout from "../../assets/images/Fitout.webp";
import MEP from "../../assets/images/Mep.webp";
import Construction from "../../assets/images/pages/construction.webp";
import Retail from "../../assets/images/Residential.webp";

/* ---------------- CARD ---------------- */
const Card = ({
  imgsrc,
  title,
  features = [],
  timeline,
  startingPrice,
  text,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="w-full rounded-xl bg-white border border-[#E3E3E3] shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col transform hover:-translate-y-1">
      {/* Image */}
      <div className="relative w-full h-64 sm:h-72 lg:h-80 overflow-hidden">
        <img
          src={imgsrc}
          loading="lazy"
          alt={title}
          className="w-full h-full object-cover transition-all duration-700 hover:scale-110"
        />
        <div className="absolute inset-0 bg-black/40"></div>
        <h2 className="absolute bottom-4 left-4 font-bold text-white text-xl sm:text-2xl">
          {title}
        </h2>
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-grow">
        <p className="font-bold text-black mb-4 text-lg">
          What’s Included
        </p>

        <ul className="space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start gap-2">
              <CheckCircle className="text-[#023A9A] w-5 h-5" />
              <span className="text-[#575757] text-[15px]">{feature}</span>
            </li>
          ))}
        </ul>

        <div className="mt-4 text-black">
          <h3 className="font-bold">Timeline:</h3>
          <p>{timeline}</p>
        </div>

        <div className="mt-3 text-black">
          <h3 className="font-bold">Starting Price:</h3>
          <p>{startingPrice}</p>
        </div>

        <button
          onClick={() => setIsModalOpen(true)}
          className="mt-5 w-full h-11 rounded-md bg-[#023A9A] text-white font-bold hover:bg-[#012c77] transition"
        >
          {text}
        </button>
      </div>

      {isModalOpen && <RequestQuoteForm onClose={() => setIsModalOpen(false)} />}
    </div>
  );
};

/* ---------------- MAIN SECTION ---------------- */
const Spotlight = () => {
  const { lang } = useLanguage();
  const [showAll, setShowAll] = useState(false);

  const services = [
    {
      imgsrc: Fitout,
      title: { en: "Interior Fit-Out Solutions", ar: "حلول التشطيبات الداخلية" },
      features: {
        en: [
          "Space Planning & Design",
          "Material Selection",
          "Custom Joinery",
          "Full Project Management",
        ],
        ar: [
          "تخطيط وتصميم المساحات",
          "اختيار المواد",
          "أعمال النجارة حسب الطلب",
          "إدارة المشروع بالكامل",
        ],
      },
      timeline: { en: "2–16 weeks", ar: "من 2 إلى 16 أسبوعًا" },
      startingPrice: { en: "From SAR 150/sqm", ar: "ابتداءً من 150 ريال/م²" },
    },
    {
      imgsrc: MEP,
      title: { en: "MEP Services", ar: "خدمات الأعمال الكهروميكانيكية" },
      features: {
        en: [
          "HVAC System Setup",
          "Electrical Wiring",
          "Plumbing Systems",
          "Testing & Maintenance",
        ],
        ar: [
          "أنظمة التكييف",
          "التمديدات الكهربائية",
          "أنظمة السباكة",
          "الاختبار والصيانة",
        ],
      },
      timeline: { en: "4–12 weeks", ar: "من 4 إلى 12 أسبوعًا" },
      startingPrice: { en: "From SAR 200/sqm", ar: "ابتداءً من 200 ريال/م²" },
    },
    {
      imgsrc: Retail,
      title: { en: "Retail Store Fit-Out", ar: "تشطيبات المتاجر" },
      features: {
        en: [
          "Custom Shelving",
          "Lighting Solutions",
          "Branding & Signage",
          "Turnkey Execution",
        ],
        ar: [
          "أرفف مخصصة",
          "حلول الإضاءة",
          "الهوية والعلامات التجارية",
          "تنفيذ متكامل",
        ],
      },
      timeline: { en: "4 months", ar: "4 أشهر" },
      startingPrice: { en: "SAR 350,000", ar: "350,000 ريال" },
    },
    {
      imgsrc: Construction,
      title: { en: "Construction Services", ar: "خدمات البناء" },
      features: {
        en: [
          "Foundation & Structure Works",
          "Concrete & Block Works",
          "Finishing & Tiling",
          "Full Site Execution",
        ],
        ar: [
          "أعمال الأساسات والهيكل",
          "الخرسانة والبناء",
          "التشطيبات والبلاط",
          "تنفيذ كامل للموقع",
        ],
      },
      timeline: { en: "6–24 weeks", ar: "من 6 إلى 24 أسبوعًا" },
      startingPrice: { en: "From SAR 300/sqm", ar: "ابتداءً من 300 ريال/م²" },
    },
  ];

  const visibleServices = showAll ? services : services.slice(0, 3);

  return (
    <section
      dir={lang === "ar" ? "rtl" : "ltr"}
      className="w-full py-16 px-6 md:px-10 lg:px-20 bg-gradient-to-b from-[#F8FAFF] to-white"
    >
      {/* SEO */}
      <Helmet>
        <title>
          {lang === "ar"
            ? "خدمات البناء والتشطيبات في السعودية"
            : "Construction, Fit-Out & MEP Services in Saudi Arabia"}
        </title>
        <meta
          name="description"
          content={
            lang === "ar"
              ? "خدمات احترافية في البناء، التشطيبات، الأعمال الكهروميكانيكية والتجديد داخل المملكة العربية السعودية."
              : "Professional construction, fit-out, MEP and renovation services across Saudi Arabia."
          }
        />
      </Helmet>

      {/* Heading */}
      <div className="text-center max-w-2xl mx-auto mb-12">
        <h1 className="text-4xl font-bold text-black">
          {lang === "ar" ? "خدماتنا" : "Our"}{" "}
          <span className="text-primary">
            {lang === "ar" ? "المميزة" : "Services"}
          </span>
        </h1>
        <p className="text-[#555] mt-3 text-lg">
          {lang === "ar"
            ? "اكتشف حلولنا الاحترافية في البناء والتشطيبات والهندسة."
            : "Explore our professional construction, fit-out, and engineering solutions."}
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {visibleServices.map((s, i) => (
          <Card
            key={i}
            imgsrc={s.imgsrc}
            title={s.title[lang]}
            features={s.features[lang]}
            timeline={s.timeline[lang]}
            startingPrice={s.startingPrice[lang]}
            text={lang === "ar" ? "طلب عرض سعر" : "Request Quotation"}
          />
        ))}
      </div>

      {/* Buttons */}
      <div className="flex justify-center gap-4 mt-10">
        <button
          onClick={() => setShowAll(!showAll)}
          className="px-6 py-3 rounded-lg bg-primary text-white font-bold"
        >
          {showAll
            ? lang === "ar"
              ? "إخفاء الخدمات"
              : "Hide Services"
            : lang === "ar"
            ? "عرض جميع الخدمات"
            : "View All Services"}
        </button>
      </div>
    </section>
  );
};

export default Spotlight;
