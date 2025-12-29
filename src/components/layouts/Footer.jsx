// src/components/Footer/Footer.jsx
import React from "react";
import { Twitter, Linkedin, Mail, PhoneCall } from "lucide-react";
import LogoImg from "../../assets/images/002.png";
import { Helmet } from "react-helmet-async";
import { useLanguage } from "../../context/LanguageContext"; // <-- use context

// --- Social Icon Component ---
const SocialIcon = ({ icon: Icon, href, label }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={label}
    className="w-10 h-10 rounded-lg flex items-center justify-center bg-primary hover:bg-white/20 transition"
  >
    <Icon className="text-white w-5 h-5" />
  </a>
);

const Footer = () => {
  const { lang } = useLanguage(); // <-- get current language from context
  const isArabic = lang === "ar";

  // --- Labels for EN & AR ---
  const labels = {
    en: {
      description: "Professional building maintenance solution delivering reliable, efficient, and high-quality services for businesses and homeowners.",
      quickLinks: "Quick Links",
      services: "Our Services",
      links: [
        { label: "Home", href: "/" },
        { label: "About Us", href: "/aboutus" },
        { label: "Services", href: "/services" },
        { label: "Projects", href: "/projects" },
        { label: "Contact", href: "/contact" },
      ],
      serviceLinks: [
        { label: "Annual Maintenance Contracts", href: "/services" },
        { label: "One-Time Services", href: "/services" },
        { label: "Emergency Repairs", href: "/services" },
        { label: "Custom Solutions", href: "/services" },
        { label: "24/7 Support", href: "/contact" },
      ],
      copyright: "© 2025 MAAJ Maintenance. All rights reserved.",
      privacy: "Privacy Policy",
      terms: "Terms of Service",
      seo: {
        title: "MAAJ Maintenance | Professional Building Maintenance Solutions",
        description: "Reliable, efficient, and high-quality building maintenance services for businesses and homeowners.",
        keywords: "Maintenance, HVAC, Electrical, Plumbing, Building Services, MAAJ Maintenance"
      }
    },
    ar: {
      description: "حلول صيانة المباني الاحترافية تقدم خدمات موثوقة وفعالة وعالية الجودة للشركات والمنازل.",
      quickLinks: "روابط سريعة",
      services: "خدماتنا",
      links: [
        { label: "الرئيسية", href: "/" },
        { label: "من نحن", href: "/aboutus" },
        { label: "الخدمات", href: "/services" },
        { label: "المشاريع", href: "/projects" },
        { label: "اتصل بنا", href: "/contact" },
      ],
      serviceLinks: [
        { label: "عقود الصيانة السنوية", href: "/services" },
        { label: "خدمات لمرة واحدة", href: "/services" },
        { label: "الإصلاحات الطارئة", href: "/services" },
        { label: "حلول مخصصة", href: "/services" },
        { label: "دعم 24/7", href: "/contact" },
      ],
      copyright: "© 2025 شركة ماج للصيانة. جميع الحقوق محفوظة.",
      privacy: "سياسة الخصوصية",
      terms: "شروط الخدمة",
      seo: {
        title: "ماج للصيانة | حلول صيانة المباني الاحترافية",
        description: "خدمات صيانة المباني موثوقة وفعالة وعالية الجودة للشركات والمنازل.",
        keywords: "صيانة، HVAC، كهرباء، سباكة، خدمات المباني، ماج للصيانة"
      }
    }
  };

  const l = labels[lang];

  return (
    <>
      <Helmet>
        <title>{l.seo.title}</title>
        <meta name="description" content={l.seo.description} />
        <meta name="keywords" content={l.seo.keywords} />
      </Helmet>

      <footer className={`w-full bg-gradient-to-b from-[#023A9A] to-[#1392E0] pt-24 pb-10 ${isArabic ? 'rtl' : 'ltr'}`}>
        {/* Container */}
        <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row gap-12 px-6 relative">
          
          {/* Logo */}
          <div className="absolute -top-12 left-4 sm:left-6 md:left-0">
            <div className="w-16 h-16 sm:w-20 sm:h-20 bg-white rounded-lg shadow-lg flex items-center justify-center">
              <img src={LogoImg} alt="MAAJ Maintenance Logo" className="w-14 h-14 sm:w-16 sm:h-16 object-contain" />
            </div>
          </div>

          {/* Left Section */}
          <div className="w-full md:w-1/2 flex flex-col items-start pt-10 sm:pt-14 md:pt-16">
            <p className="text-white text-sm sm:text-base md:text-lg leading-6 md:leading-7">{l.description}</p>

            {/* Social Icons */}
            <div className="flex gap-3 mt-6">
              <SocialIcon icon={Twitter} href="https://twitter.com/maaj" label="Twitter" />
              <SocialIcon icon={Linkedin} href="https://www.linkedin.com/company/ram-limited/" label="LinkedIn" />
              <SocialIcon icon={Mail} href="mailto:ramlimited.sa@gmail.com" label="Email" />
              <SocialIcon icon={PhoneCall} href="tel:+15551234567" label="Phone" />
            </div>
          </div>

          {/* Right Section */}
          <div className="w-full md:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-8">
            {/* Quick Links */}
            <div>
              <h3 className="text-white font-semibold mb-3 text-base sm:text-lg">{l.quickLinks}</h3>
              <ul className="space-y-2 text-white text-sm sm:text-base">
                {l.links.map((link, idx) => (
                  <li key={idx}><a href={link.href} className="hover:underline">{link.label}</a></li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-white font-semibold mb-3 text-base sm:text-lg">{l.services}</h3>
              <ul className="space-y-2 text-white text-sm sm:text-base">
                {l.serviceLinks.map((link, idx) => (
                  <li key={idx}><a href={link.href} className="hover:underline">{link.label}</a></li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="max-w-[1400px] w-full mx-auto flex flex-col md:flex-row items-center justify-between px-6 mt-12 gap-4 text-center md:text-left">
          <p className="text-white text-xs sm:text-sm md:text-base">{l.copyright}</p>
          <div className="flex flex-wrap justify-center md:justify-end space-x-4">
            <a href="/privacy" className="text-white text-xs sm:text-sm md:text-base hover:underline">{l.privacy}</a>
            <a href="/terms" className="text-white text-xs sm:text-sm md:text-base hover:underline">{l.terms}</a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
