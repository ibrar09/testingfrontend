// src/components/Contact/AnimatedContactForm.jsx
import React, { useState } from "react";
import { IoChatbubblesOutline, IoCallOutline, IoChevronDown } from "react-icons/io5";
import { motion } from "framer-motion";
import { useLanguage } from "../../context/LanguageContext";
import toast from "react-hot-toast";
import api from "../../api/api"; // centralized axios instance

// Floating label input component
const AnimatedInput = ({ label, type = "text", id, value, onChange }) => (
  <div className="relative flex-1 min-w-[280px] group">
    <input
      type={type}
      id={id}
      placeholder=" "
      value={value}
      onChange={onChange}
      className="w-full p-4 border border-gray-300 rounded-lg bg-transparent focus:border-blue-500 focus:ring-2 focus:ring-blue-300 outline-none transition-all duration-300 peer"
      required
    />
    <label
      htmlFor={id}
      className="absolute left-4 top-4 text-gray-400 text-sm transition-all duration-300 
                 peer-placeholder-shown:top-4 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-sm 
                 peer-focus:top-[-10px] peer-focus:text-blue-500 peer-focus:text-xs bg-white px-1"
    >
      {label}
    </label>
  </div>
);

// Animated select component
const AnimatedSelect = ({ label, id, options, value, onChange }) => (
  <div className="relative flex-1 min-w-[280px]">
    <select
      id={id}
      value={value}
      onChange={onChange}
      className="w-full p-4 border border-gray-300 rounded-lg appearance-none bg-transparent focus:border-blue-500 focus:ring-2 focus:ring-blue-300 transition-all duration-300"
      required
    >
      <option value="" disabled>
        {`Select ${label}`}
      </option>
      {options.map((opt, i) => (
        <option key={i} value={opt.value}>
          {opt.label}
        </option>
      ))}
    </select>
    <IoChevronDown className="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
    <label className="absolute -top-3 left-4 bg-white px-1 text-gray-400 text-xs">{label}</label>
  </div>
);

const AnimatedContactForm = () => {
  const { lang } = useLanguage();
  const isArabic = lang === "ar";

  // ----------------- Form State -----------------
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    projectType: "",
    location: "",
    budget: "",
    projectDetails: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  // ----------------- Form Submission -----------------
  // handleSubmit inside AnimatedContactForm
const handleSubmit = async (e) => {
  e.preventDefault();
  setLoading(true);

  try {
    // Send form data to backend
    await api.post("/contacts", {
      name: formData.fullName,
      email: formData.email,
      phone: formData.phone,
      serviceneeded: formData.projectType,
      message: `Location/City: ${formData.location}\nBudget: ${formData.budget}\nDetails: ${formData.projectDetails}`,
    });

    toast.success(isArabic ? "تم إرسال رسالتك بنجاح!" : "Your message was sent successfully!");

    // Reset form
    setFormData({
      fullName: "",
      email: "",
      phone: "",
      projectType: "",
      location: "",
      budget: "",
      projectDetails: "",
    });
  } catch (err) {
    console.error("[Contact Form Error]", err.response?.data || err.message);
    toast.error(isArabic ? "حدث خطأ أثناء إرسال الرسالة!" : "Error sending your message!");
  } finally {
    setLoading(false);
  }
};


  // ----------------- Options -----------------
  const projectTypeOptions = [
    { value: "commercial", label: isArabic ? "تصميم تجاري" : "Commercial Fit-Out" },
    { value: "residential", label: isArabic ? "إعادة تشكيل سكنية" : "Residential Remodel" },
    { value: "new_build", label: isArabic ? "بناء جديد" : "New Construction" },
    { value: "interior", label: isArabic ? "تصميم داخلي" : "Interior Design" },
    { value: "landscape", label: isArabic ? "تصميم المناظر الطبيعية" : "Landscape Design" },
    { value: "retail", label: isArabic ? "تصميم متجر" : "Retail Space Design" },
  ];

  const budgetOptions = [
    { value: "50k", label: "10,000 SAR - 50,000 SAR" },
    { value: "100k", label: "50,000 SAR - 100,000 SAR" },
    { value: "250k", label: "100,000 SAR - 250,000 SAR" },
    { value: "500k", label: "250,000 SAR - 500,000 SAR" },
    { value: "500k+", label: "500,000+ SAR" },
  ];

  // ----------------- JSX -----------------
  return (
    <section
      dir={isArabic ? "rtl" : "ltr"}
      className="relative py-20 px-4 min-h-screen bg-gradient-to-b from-[#023A9A] to-[#1392E0] overflow-hidden"
    >
      <div className="relative max-w-4xl mx-auto z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-10 text-white"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-3">
            {isArabic ? "هل أنت جاهز لبدء مشروعك؟" : "Ready to Start Your Project?"}
          </h1>
          <p className="text-lg sm:text-xl opacity-90 max-w-xl mx-auto">
            {isArabic
              ? "تواصل معنا لتحقيق مشروع أحلامك. نقدم حلولًا مخصصة مع شفافية كاملة."
              : "Reach out and let's make your dream project a reality. We provide tailored solutions with complete transparency."}
          </p>
        </motion.div>

        {/* Form */}
        <motion.div
          className="bg-white p-6 sm:p-12 rounded-2xl shadow-2xl relative overflow-hidden"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <form className="space-y-6" onSubmit={handleSubmit}>
            <motion.div className="flex flex-wrap gap-6">
              <AnimatedInput label={isArabic ? "الاسم الكامل *" : "Full Name *"} id="fullName" value={formData.fullName} onChange={handleChange} />
              <AnimatedInput label={isArabic ? "البريد الإلكتروني *" : "Email Address *"} id="email" type="email" value={formData.email} onChange={handleChange} />
            </motion.div>

            <motion.div className="flex flex-wrap gap-6">
              <AnimatedInput label={isArabic ? "رقم الهاتف *" : "Phone Number *"} id="phone" type="tel" value={formData.phone} onChange={handleChange} />
              <AnimatedSelect label={isArabic ? "نوع المشروع *" : "Project Type *"} id="projectType" options={projectTypeOptions} value={formData.projectType} onChange={handleChange} />
            </motion.div>

            <motion.div className="flex flex-wrap gap-6">
              <AnimatedInput label={isArabic ? "الموقع / المدينة" : "Location / City"} id="location" value={formData.location} onChange={handleChange} />
              <AnimatedSelect label={isArabic ? "الميزانية التقديرية" : "Estimated Budget"} id="budget" options={budgetOptions} value={formData.budget} onChange={handleChange} />
            </motion.div>

            <motion.div>
              <label htmlFor="projectDetails" className="block text-gray-800 text-sm mb-1">
                {isArabic ? "تفاصيل ومتطلبات المشروع" : "Project Details & Requirements"}
              </label>
              <textarea
                id="projectDetails"
                rows="5"
                value={formData.projectDetails}
                onChange={handleChange}
                placeholder={isArabic ? "صف مشروعك ورؤيتك والمتطلبات الخاصة..." : "Describe your project, vision, and special requirements..."}
                className="w-full p-4 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 transition-all duration-300"
              />
            </motion.div>

            <motion.div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button
                type="submit"
                disabled={loading}
                className={`flex-1 flex items-center justify-center py-3 px-6 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 hover:scale-105 transform transition-all duration-300 ${loading ? "opacity-50 cursor-not-allowed" : ""}`}
              >
                <IoChatbubblesOutline className="w-5 h-5 mr-2 animate-bounce" />
                {isArabic ? "احصل على استشارة مجانية" : "Get Free Consultation"}
              </button>
              <button
                type="button"
                className="flex-1 flex items-center justify-center py-3 px-6 border border-blue-600 text-blue-600 font-semibold rounded-lg shadow-md hover:bg-blue-50 hover:scale-105 transform transition-all duration-300"
              >
                <IoCallOutline className="w-5 h-5 mr-2 animate-pulse" />
                {isArabic ? "اتصل الآن" : "Call Now"}
              </button>
            </motion.div>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default AnimatedContactForm;
