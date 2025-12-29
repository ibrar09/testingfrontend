// src/components/OurService.jsx
import React, { useState } from "react";
import CardService from "./CardService";
import RequestQuoteForm from "../RequestPage/RequestQuoteForm"; // import the modal component
import plumbing from "../../assets/images/Plumbing-unsplash.webp";
import electrical from "../../assets/images/electrical-unsplash.webp";
import Painting from "../../assets/images/painting-unsplash.webp";
import HVAC from "../../assets/images/havc-unsplash.webp";
import Kitchen from "../../assets/images/Kitchen1.webp";
import Epoxy from "../../assets/images/epoxy1.webp";
import CarpentryImg from "../../assets/images/pages/carpenter.webp";
import ITServicesImg from "../../assets/images/pages/it.webp";
import ConstructionImg from "../../assets/images/pages/construction.webp";
import FitoutImg from "../../assets/images/fitout4.webp";

import {
  Plumbing,
  ElectricalServices,
  AcUnit,
  FormatPaint,
  MicrowaveOutlined,
  Engineering,
  Carpenter,
  Security,
  Construction,
  DesignServices,
} from "@mui/icons-material";

import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "../../context/LanguageContext";

const OurService = () => {
  const [showAll, setShowAll] = useState(false);
  const [showQuoteModal, setShowQuoteModal] = useState(false); // ✅ modal state
  const { lang } = useLanguage();

  // BILINGUAL SERVICES DATA
  const services = {
    en: [
      {
        imageSrc: plumbing,
        title: "Plumbing Services",
        description: "Professional plumbing repairs and maintenance for commercial and residential properties.",
        listItems: ["Pipe repairs & installation", "Drainage Solution", "Water System maintenance", "Emergency Plumbing"],
        IconComponent: Plumbing,
        buttonLink: "/services/plumbing",
        altText: "Plumbing Services",
      },
      {
        imageSrc: electrical,
        title: "Electrical Services",
        description: "Expert electrical work including installations, repairs, and safety inspections.",
        listItems: ["Electrical installations", "Panel upgrades", "LED lighting", "Emergency Safety inspections"],
        IconComponent: ElectricalServices,
        buttonLink: "/services/electrical",
        altText: "Electrical Services",
      },
      {
        imageSrc: HVAC,
        title: "HVAC Services",
        description: "Complete heating, ventilation, and air conditioning maintenance and repair.",
        listItems: ["System Installation", "Regular Maintenance", "Energy Efficiency", "24/7 Emergency Service"],
        IconComponent: AcUnit,
        buttonLink: "/services/hvac",
        altText: "HVAC Services",
      },
      {
        imageSrc: Kitchen,
        title: "Kitchen Equipment",
        description: "Kitchen equipment installation, maintenance, and repair services.",
        listItems: ["Refrigeration & Cold Rooms", "Electrical & Mechanical", "Kitchen Equipment Parts", "Exhaust and Hood Cleaning"],
        IconComponent: MicrowaveOutlined,
        buttonLink: "/services/kitchen",
        altText: "Kitchen Equipment Services",
      },
      {
        imageSrc: Epoxy,
        title: "Epoxy Flooring",
        description: "Durable and premium epoxy flooring services.",
        listItems: ["Surface Preparation", "Epoxy Coating Application", "Anti-slip Finishes", "Durable Protective Layer"],
        IconComponent: Engineering,
        buttonLink: "/services/epoxy",
        altText: "Epoxy Flooring Services",
      },
      {
        imageSrc: Painting,
        title: "Painting Services",
        description: "Interior and exterior painting services with premium materials and quality finishing.",
        listItems: ["Interior Painting", "Exterior Painting", "Wall Preparation", "Premium Finishes"],
        IconComponent: FormatPaint,
        buttonLink: "/services/painting",
        altText: "Painting Services",
      },
      {
        imageSrc: CarpentryImg,
        title: "Carpentry Services",
        description: "Custom carpentry solutions and woodwork.",
        listItems: ["Custom Furniture", "Cabinet Making", "Wood Repairs", "Decorative Woodwork"],
        IconComponent: Carpenter,
        buttonLink: "/services/carpentry",
        altText: "Carpentry Services",
      },
      {
        imageSrc: ITServicesImg,
        title: "IT & Security Services",
        description: "Networking, CCTV, smart home systems and complete IT support.",
        listItems: ["CCTV Systems", "Network Setup", "Smart Home Security", "24/7 IT Support"],
        IconComponent: Security,
        buttonLink: "/services/it-services",
        altText: "IT & Security Services",
      },
      {
        imageSrc: ConstructionImg,
        title: "Construction Services",
        description: "Complete construction, renovation and building solutions.",
        listItems: ["Building & Renovation", "Project Management", "Safety & Compliance", "Quality Assurance"],
        IconComponent: Construction,
        buttonLink: "/services/construction",
        altText: "Construction Services",
      },
      {
        imageSrc: FitoutImg,
        title: "Fit-Out Design & Turnkey Solutions",
        description: "Complete interior fit-out, design, and turnkey solutions for offices, retail, restaurants, and residential spaces.",
        listItems: ["Turnkey Interior Execution", "Custom Joinery & Carpentry", "Lighting, Electrical & HVAC Integration", "Premium Finishes & Quality Assurance"],
        IconComponent: DesignServices,
        buttonLink: "/services/fitout",
        altText: "Fit-Out Design & Turnkey Solutions",
      }
    ],
    ar: [
      // Arabic data here (same structure as en)
      // ... (omit for brevity, you can keep your existing ar array)
    ]
  };

  const currentServices = services[lang];

  const initialServices = currentServices.slice(0, 6);
  const remainingServices = currentServices.slice(6);

  const text = {
    en: {
      heading: "Our ",
      highlighted: "Services",
      subtitle: "Providing premium maintenance, construction, MEP, epoxy, electrical and IT solutions across Saudi Arabia.",
      getQuote: "Get a Quote",
      showAll: "All Services",
      showLess: "Show Less"
    },
    ar: {
      heading: "خدمات",
      highlighted: "نـا",
      subtitle: "نقدم حلول صيانة وبناء وأنظمة ميكانيكية وكهربائية وسباكة وإيبوكسي وتكنولوجيا معلومات متميزة في جميع أنحاء المملكة العربية السعودية.",
      getQuote: "احصل على عرض سعر",
      showAll: "جميع الخدمات",
      showLess: "عرض أقل"
    }
  };

  const cardVariant = {
    hidden: { opacity: 0, y: 18 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.2, ease: "easeOut" },
    },
  };

  return (
    <section
      className={`bg-white py-12 sm:py-16 ${lang === 'ar' ? 'text-right' : 'text-left'}`}
      aria-label={lang === 'ar' ? "قسم خدماتنا" : "Our Services Section"}
      dir={lang === 'ar' ? 'rtl' : 'ltr'}
    >
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 flex flex-col gap-10">
        <header className="text-center">
          <h1 className={`font-bold text-3xl md:text-4xl lg:text-[48px] leading-tight tracking-tight ${lang === 'ar' ? 'font-sans-arabic' : ''}`}>
            {text[lang].heading}
            <span className="bg-gradient-to-r from-[#023A9A] to-[#1392E0] bg-clip-text text-transparent">
              {text[lang].highlighted}
            </span>
          </h1>
          <p className={`mt-3 text-lg text-gray-600 max-w-[850px] mx-auto ${lang === 'ar' ? 'font-sans-arabic' : ''}`}>
            {text[lang].subtitle}
          </p>
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
          {initialServices.map((service) => (
            <motion.div
              key={service.title}
              variants={cardVariant}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, boxShadow: "0 12px 25px rgba(0,0,0,0.15)" }}
            >
              <CardService {...service} imageLoading="lazy" lang={lang} />
            </motion.div>
          ))}

          <AnimatePresence>
            {showAll && remainingServices.map((service) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                whileHover={{ scale: 1.05, boxShadow: "0 12px 25px rgba(0,0,0,0.15)" }}
              >
                <CardService {...service} imageLoading="lazy" lang={lang} />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* BUTTONS */}
        <div className="flex flex-col sm:flex-row justify-center gap-6 mt-10">
          {/* Get Quote Modal Button */}
          <motion.button
            whileHover={{ scale: 1.06 }}
            className="w-[180px] py-3 rounded-md bg-gradient-to-r from-[#FF6A00] to-[#FF9A3C] text-white font-bold shadow-md"
            onClick={() => setShowQuoteModal(true)}
          >
            {text[lang].getQuote}
          </motion.button>

          {/* Show More Button */}
          <motion.button
            onClick={() => setShowAll(!showAll)}
            whileHover={{ scale: 1.06 }}
            className="w-[180px] py-3 rounded-md bg-gradient-to-r from-[#023A9A] to-[#1392E0] text-white font-bold shadow-md"
          >
            {showAll ? text[lang].showLess : text[lang].showAll}
          </motion.button>
        </div>

        {/* Render Modal */}
        <AnimatePresence>
          {showQuoteModal && (
            <RequestQuoteForm onClose={() => setShowQuoteModal(false)} />
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default OurService;
