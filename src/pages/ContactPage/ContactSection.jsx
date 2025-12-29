// src/pages/ContactPage/ContactSection.jsx
import React, { useState } from 'react';
import { PhoneCall, Mail, MapPin } from 'lucide-react';
import Followup from '../../assets/images/Contact-unsplash.webp';
import { Helmet } from 'react-helmet-async';
import { useLanguage } from '../../context/LanguageContext';
import api from '../../api/api';
import toast from 'react-hot-toast';

// --- Company Address ---
const COMPANY_ADDRESS = {
  en: {
    name: "Rukn Al-Mukhatat Co.",
    street: "Salman Al-Farsi",
    city: "Riyadh",
    postalCode: "13222",
    country: "Saudi Arabia",
    googleMapLink: "https://maps.app.goo.gl/WS91sshQ7P6p6j6JA"
  },
  ar: {
    name: "شركة ركن المخطط المحدودة",
    street: "سلمان الفارسي",
    city: "الرياض",
    postalCode: "13222",
    country: "المملكة العربية السعودية",
    googleMapLink: "https://maps.app.goo.gl/WS91sshQ7P6p6j6JA"
  }
};

// --- Button Component ---
const BlueButton = ({ children, onClick = () => {}, type = "button", disabled = false }) => (
  <button
    type={type}
    onClick={onClick}
    disabled={disabled}
    className={`w-full sm:w-auto h-[44px] rounded-md bg-[#023A9A] text-white font-medium py-2 px-6 transition hover:opacity-90 ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
  >
    {children}
  </button>
);

// --- Contact Card ---
const ContactCard = ({ icon: Icon, title, subtitle, content, buttonLabel, link }) => (
  <div className="w-full max-w-[552px] p-6 rounded-lg bg-white shadow-lg flex flex-col gap-4">
    <div className="flex items-start gap-4">
      <div className="p-3 bg-blue-100 rounded-full text-[#023A9A] flex-shrink-0">
        <Icon size={20} />
      </div>
      <div>
        <h4 className="text-lg font-semibold text-gray-900">{title}</h4>
        <p className="text-sm text-gray-500">{subtitle}</p>
      </div>
    </div>

    <div className="ml-10 mt-1">
      {link ? (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-lg font-bold text-[#023A9A] hover:underline block break-words"
        >
          {content}
        </a>
      ) : (
        <div className="text-gray-700 space-y-1">{content}</div>
      )}
    </div>

    {buttonLabel && (
      <div className="mt-auto pt-2">
        <BlueButton onClick={() => link && window.open(link, "_blank")}>{buttonLabel}</BlueButton>
      </div>
    )}
  </div>
);

// --- Contact Form ---
const ContactForm = ({ language }) => {
  const isArabic = language === 'ar';
  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', service: '', message: ''
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await api.post("/contacts", {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        serviceneeded: formData.service,
        message: formData.message,
      });

      toast.success(isArabic ? "تم إرسال رسالتك بنجاح!" : "Your message was sent successfully!");

      // Reset form
      setFormData({ name: '', email: '', phone: '', service: '', message: '' });
    } catch (err) {
      console.error("[Contact Form Error]", err.response?.data || err.message);
      toast.error(isArabic ? "حدث خطأ أثناء إرسال الرسالة!" : "Error sending your message!");
    } finally {
      setLoading(false);
    }
  };

  const labels = {
    en: {
      header: "Send us a Message",
      name: "Name",
      email: "Email",
      phone: "Phone",
      service: "Service Needed",
      message: "Message",
      placeholder: {
        name: "Your Name",
        email: "example@email.com",
        phone: "(555) 555-5555",
        message: "Describe your maintenance needs..."
      },
      services: [
        "Select a service",
        "HVAC Maintenance",
        "Electrical Upgrade",
        "Plumbing Repair",
        "General Handyman"
      ],
      submit: "Send Message"
    },
    ar: {
      header: "أرسل لنا رسالة",
      name: "الاسم",
      email: "البريد الإلكتروني",
      phone: "رقم الهاتف",
      service: "الخدمة المطلوبة",
      message: "رسالتك",
      placeholder: {
        name: "اسمك الكامل",
        email: "example@email.com",
        phone: "(555) 555-5555",
        message: "صف احتياجاتك للصيانة هنا..."
      },
      services: [
        "اختر الخدمة",
        "صيانة HVAC",
        "ترقية كهربائية",
        "إصلاح السباكة",
        "خدمات صيانة عامة"
      ],
      submit: "إرسال الرسالة"
    }
  };

  const l = labels[language];

  return (
    <div className="w-full max-w-[552px] bg-white p-6 rounded-lg shadow-lg flex flex-col justify-between">
      <h3 className="text-xl font-bold text-gray-900 mb-5">{l.header}</h3>

      <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-3">
        <div className="flex flex-col">
          <label htmlFor="name" className="text-sm font-medium text-gray-700 mb-1">{l.name}</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#023A9A] focus:border-transparent transition"
            placeholder={l.placeholder.name}
            required
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="email" className="text-sm font-medium text-gray-700 mb-1">{l.email}</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#023A9A] focus:border-transparent transition"
            placeholder={l.placeholder.email}
            required
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="phone" className="text-sm font-medium text-gray-700 mb-1">{l.phone}</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#023A9A] focus:border-transparent transition"
            placeholder={l.placeholder.phone}
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="service" className="text-sm font-medium text-gray-700 mb-1">{l.service}</label>
          <select
            id="service"
            name="service"
            value={formData.service}
            onChange={handleChange}
            className="p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#023A9A] focus:border-transparent transition appearance-none"
            required
          >
            {l.services.map((option, index) => (
              <option
                key={index}
                value={index === 0 ? "" : option}
                disabled={index === 0}
              >
                {option}
              </option>
            ))}
          </select>
        </div>

        <div className="sm:col-span-2 flex flex-col">
          <label htmlFor="message" className="text-sm font-medium text-gray-700 mb-1">{l.message}</label>
          <textarea
            id="message"
            name="message"
            rows="6"
            value={formData.message}
            onChange={handleChange}
            className="p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#023A9A] focus:border-transparent transition"
            placeholder={l.placeholder.message}
            required
          ></textarea>
        </div>

        <div className="sm:col-span-2 mt-4">
          <BlueButton type="submit" disabled={loading}>
            {loading ? (isArabic ? "جارٍ الإرسال..." : "Sending...") : l.submit}
          </BlueButton>
        </div>
      </form>
    </div>
  );
};

// --- Main Contact Section ---
const ContactSection = () => {
  const { lang } = useLanguage(); // use language from context
  const language = lang; // 'en' or 'ar'

  const seo = {
    en: {
      title: "Contact Rukn Al-Mukhatat Co. | Maintenance Services Riyadh",
      description: "Get in touch with Rukn Al-Mukhatat Co. for HVAC, Electrical, Plumbing, and General Maintenance services in Riyadh, Saudi Arabia.",
      keywords: "Maintenance, HVAC, Electrical, Plumbing, Riyadh, Rukn Al-Mukhatat Co."
    },
    ar: {
      title: "اتصل بشركة ركن المخطط المحدودة | خدمات الصيانة في الرياض",
      description: "تواصل مع شركة ركن المخطط المحدودة للحصول على خدمات صيانة HVAC، كهرباء، سباكة، وصيانة عامة في الرياض، المملكة العربية السعودية.",
      keywords: "صيانة، HVAC، كهرباء، سباكة، الرياض، شركة ركن المخطط المحدودة"
    }
  };

  return (
    <>
      <Helmet>
        <title>{seo[language].title}</title>
        <meta name="description" content={seo[language].description} />
        <meta name="keywords" content={seo[language].keywords} />
      </Helmet>

      <section
        className="relative w-full min-h-screen py-16 px-4 sm:px-6 lg:px-8"
        style={{
          backgroundImage: `url(${Followup})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          direction: language === 'ar' ? 'rtl' : 'ltr'
        }}
      >
        <div className="absolute inset-0 bg-black/70"></div>

        <div className="relative max-w-7xl mx-auto z-10">
          <div className="text-center mb-12">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-4">
              {language === 'en' ? 'Get in' : 'تواصل'} <span className="text-[#023A9A]">{language === 'en' ? 'Touch' : 'معنا'}</span>
            </h1>
            <p className="text-base sm:text-lg text-gray-300">
              {language === 'en'
                ? "Have a question or need a service? Our team is here to assist you."
                : "هل لديك سؤال أو تحتاج إلى خدمة؟ فريقنا هنا لمساعدتك."
              }
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <ContactForm language={language} />

            <div className="flex flex-col gap-6 w-full">
              <ContactCard
                icon={PhoneCall}
                title={language === 'en' ? "Call Us Now" : "اتصل بنا"}
                subtitle={language === 'en' ? "Available 24/7 for emergencies" : "متوفرون 24/7 للطوارئ"}
                content="(555) 123-4567"
                buttonLabel={language === 'en' ? "Call Now" : "اتصل الآن"}
                link="tel:+15551234567"
              />
              <ContactCard
                icon={Mail}
                title={language === 'en' ? "Email Us" : "راسلنا عبر البريد"}
                subtitle={language === 'en' ? "We'll respond within 4 hours" : "سوف نرد خلال 4 ساعات"}
                content="ramlimited.sa@gmail.com"
                buttonLabel={language === 'en' ? "Send Email" : "أرسل بريد"}
                link="mailto:ramlimited.sa@gmail.com"
              />
              <ContactCard
                icon={MapPin}
                title={language === 'en' ? "Our Location" : "موقعنا"}
                subtitle={language === 'en' ? "Serving the greater Riyadh area" : "خدمة منطقة الرياض الكبرى"}
                content={
                  <>
                    <p>{COMPANY_ADDRESS[language].name}</p>
                    <p>{COMPANY_ADDRESS[language].street}, {COMPANY_ADDRESS[language].city}, {COMPANY_ADDRESS[language].postalCode}</p>
                    <p>{COMPANY_ADDRESS[language].country}</p>
                  </>
                }
                link={COMPANY_ADDRESS[language].googleMapLink}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactSection;
