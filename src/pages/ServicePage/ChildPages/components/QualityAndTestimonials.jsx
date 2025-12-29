// src/pages/ServicePage/ChildPages/Plumbing/components/QualityAndTestimonials.jsx
import React, { useState } from "react";
import { Award, Shield, CheckCircle, Star, Phone, Mail, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import RequestQuoteForm from "../../../RequestPage/RequestQuoteForm";
import { useLanguage } from "../../../../context/LanguageContext";

const ICONS = { Award, Shield, CheckCircle };
const PRIMARY_COLOR = "#023A9A";

/* ---------- Helper Components ---------- */
const CertificationCard = ({ icon, title, subtitle, lang }) => {
  const Icon = ICONS[icon] || Award;
  return (
    <motion.div
      className="flex flex-col items-center p-4 sm:p-6 bg-white rounded-xl shadow-sm border border-gray-100 transition-shadow duration-300 hover:shadow-md h-full"
      whileHover={{ scale: 1.05 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      aria-label={`${title} certification card`}
      dir={lang === 'ar' ? 'rtl' : 'ltr'}
    >
      <div className="w-16 h-16 flex items-center justify-center rounded-lg bg-[#1392E01A] mb-3">
        <Icon size={26} color={PRIMARY_COLOR} />
      </div>
      <h4 className={`text-sm sm:text-base md:text-lg font-bold text-gray-900 text-center ${lang === 'ar' ? 'text-right' : 'text-left'}`}>
        {title}
      </h4>
      <p className={`text-xs sm:text-sm text-gray-600 text-center ${lang === 'ar' ? 'text-right' : 'text-left'}`}>
        {subtitle}
      </p>
    </motion.div>
  );
};

const TestimonialCard = ({ quote, name, title, company, lang }) => (
  <motion.div
    className="bg-white border border-gray-200 shadow-sm rounded-lg p-4 sm:p-6 flex flex-col h-full"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
    dir={lang === 'ar' ? 'rtl' : 'ltr'}
  >
    <div className={`flex gap-1 mb-2 ${lang === 'ar' ? 'flex-row-reverse' : ''}`}>
      {[...Array(5)].map((_, i) => (
        <Star key={i} size={16} className="text-primary fill-primary" />
      ))}
    </div>
    <p className={`text-sm sm:text-base italic text-gray-700 mb-3 flex-grow ${lang === 'ar' ? 'text-right' : 'text-left'}`}>
      "{quote}"
    </p>
    <div className="border-t border-gray-200 pt-3">
      <p className={`font-semibold text-gray-900 text-sm sm:text-base ${lang === 'ar' ? 'text-right' : 'text-left'}`}>
        {name}
      </p>
      <p className={`text-xs sm:text-sm text-gray-600 ${lang === 'ar' ? 'text-right' : 'text-left'}`}>
        {title}
      </p>
      {company && (
        <span className={`text-xs sm:text-sm font-medium text-[#023A9A] ${lang === 'ar' ? 'text-right' : 'text-left'}`}>
          {company}
        </span>
      )}
    </div>
  </motion.div>
);

const StatBox = ({ number, label, lang }) => (
  <motion.div
    className="text-center p-4 sm:p-6 rounded-lg bg-[#1392E00D] border border-[#1392E033]"
    initial={{ opacity: 0, scale: 0.9 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
    dir={lang === 'ar' ? 'rtl' : 'ltr'}
  >
    <p className="text-xl sm:text-3xl md:text-4xl font-bold text-[#023A9A]">{number}</p>
    <p className={`text-sm sm:text-base text-gray-700 font-medium ${lang === 'ar' ? 'text-right' : 'text-left'}`}>
      {label}
    </p>
  </motion.div>
);

const CallToActionFooter = ({ title, subtitle, buttonText, secondaryLinkText, lang }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const servicesLink = lang === 'ar' ? '/ar/services' : '/services';
  
  return (
    <div className={`text-center mt-10 sm:mt-20 pt-6 sm:pt-10 border-t border-gray-200 ${lang === 'ar' ? 'text-right' : 'text-left'}`}
         dir={lang === 'ar' ? 'rtl' : 'ltr'}>
      <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">{title}</h3>
      <p className="text-sm sm:text-base md:text-lg text-gray-600 mt-2 mb-6 sm:mb-8">{subtitle}</p>
      <div className="flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-6">
        <button
          onClick={() => setIsModalOpen(true)}
          className="py-2 sm:py-3 px-6 sm:px-8 rounded-lg font-semibold transition-colors bg-[#023A9A] hover:bg-[#002f78] text-white shadow-lg"
        >
          {buttonText}
        </button>
        <a
          href={servicesLink}
          className="text-xs sm:text-sm md:text-base font-semibold text-[#023A9A] hover:text-[#002f78] transition-colors"
        >
          {secondaryLinkText}
        </a>
      </div>
      {isModalOpen && <RequestQuoteForm onClose={() => setIsModalOpen(false)} />}
    </div>
  );
};

const ContactInfoBar = ({ contact, lang }) => {
  const contactItems = [
    { 
      icon: Phone, 
      label: lang === 'ar' ? "هاتف" : "Phone", 
      value: contact.phone, 
      link: `tel:${contact.phone}` 
    },
    { 
      icon: Mail, 
      label: lang === 'ar' ? "بريد إلكتروني" : "Email", 
      value: contact.email, 
      link: `mailto:${contact.email}` 
    },
    { 
      icon: MapPin, 
      label: lang === 'ar' ? "عنوان" : "Address", 
      value: contact.address, 
      link: null 
    },
  ];

  return (
    <div className="bg-white py-6 sm:py-8 border-t border-b border-gray-100 shadow-sm mt-10"
         dir={lang === 'ar' ? 'rtl' : 'ltr'}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-4 divide-y sm:divide-y-0 sm:divide-x divide-gray-200">
          {contactItems.map((item, idx) => (
            <div key={idx} className={`flex flex-col items-center pt-4 sm:pt-0 ${lang === 'ar' ? 'text-right' : 'text-left'}`}>
              <p className="text-base font-medium text-gray-500 mb-1">{item.label}</p>
              {item.link ? (
                <a
                  href={item.link}
                  className="text-lg font-semibold text-[#023A9A] hover:text-[#002f78] transition-colors"
                >
                  {item.value}
                </a>
              ) : (
                <p className="text-lg font-semibold text-gray-700">{item.value}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

/* ---------- Main Section ---------- */
export default function QualityAndTestimonials({ data }) {
  const { lang } = useLanguage();
  
  // Safety checks
  if (!data) {
    console.error("QualityAndTestimonials: No data provided");
    return (
      <section className="py-10 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <p>Loading quality data...</p>
        </div>
      </section>
    );
  }

  if (!data.header || !data.header.title) {
    console.error("QualityAndTestimonials: Invalid data structure", data);
    return (
      <section className="py-10 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <p>Error loading content</p>
        </div>
      </section>
    );
  }

  const titleParts = data.header.title.includes("&") 
    ? data.header.title.split("&") 
    : [data.header.title, ""];

  const [titlePart1, titlePart2] = titleParts;

  return (
    <section 
      className={`py-10 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-white ${lang === 'ar' ? 'text-right' : 'text-left'}`}
      dir={lang === 'ar' ? 'rtl' : 'ltr'}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-2">
            {titlePart1} {titlePart2 && <span className="text-[#023A9A]">& {titlePart2}</span>}
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
            {data.header.subtitle}
          </p>
        </div>

        {/* Certifications */}
        <motion.div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 mb-10 sm:mb-16">
          {data.certifications?.map((cert, idx) => (
            <CertificationCard key={idx} {...cert} lang={lang} />
          ))}
        </motion.div>

        {/* Testimonials */}
        <div className="mb-10 sm:mb-16">
          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-4 text-center">
            {data.testimonials?.title}
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
            {data.testimonials?.reviews?.map((review, idx) => (
              <TestimonialCard key={idx} {...review} lang={lang} />
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 mb-10 sm:mb-16">
          {data.stats?.map((stat, idx) => (
            <StatBox key={idx} {...stat} lang={lang} />
          ))}
        </div>

        {/* Call To Action */}
        {data.cta && <CallToActionFooter {...data.cta} lang={lang} />}

        {/* Contact Bar */}
        {data.contact && <ContactInfoBar contact={data.contact} lang={lang} />}
      </div>
    </section>
  );
}