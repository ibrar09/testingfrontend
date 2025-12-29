// src/pages/Career/CVForm.jsx
import React, { useState } from "react";
import api from "../../../api/api"; // centralized axios instance
import { useLanguage } from "../../../context/LanguageContext";

const CVForm = () => {
  const { lang } = useLanguage();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    experience: "",
    position: "",
    message: "",
    resume: null,
  });

  const [loading, setLoading] = useState(false);
  const [successMsg, setSuccessMsg] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (files) {
      setFormData({ ...formData, [name]: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccessMsg("");
    setErrorMsg("");

    try {
      const data = new FormData();
      Object.keys(formData).forEach((key) => {
        data.append(key, formData[key]);
      });

      await api.post("/cv", data, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      setSuccessMsg(lang === 'ar' ? "✅ شكرًا لك! تم تقديم سيرتك الذاتية بنجاح." : "✅ Thank you! Your CV has been submitted.");
      setFormData({
        name: "",
        email: "",
        phone: "",
        experience: "",
        position: "",
        message: "",
        resume: null,
      });
    } catch (error) {
      console.error("[CVForm] Submission error:", error.response?.data || error.message);
      setErrorMsg(error.response?.data?.error || (lang === 'ar' ? "❌ حدث خطأ ما." : "❌ Something went wrong."));
    } finally {
      setLoading(false);
    }
  };

  // Bilingual labels
  const labels = {
    en: {
      title: "Join Our Talent Pool",
      subtitle: "Share your resume with us. We will contact you when a matching opportunity comes.",
      fullName: "Full Name",
      email: "Email",
      phone: "Phone Number",
      experience: "Years of Experience",
      position: "Position Applying For",
      message: "Additional Message / Cover Letter",
      submit: "Submit CV",
      submitting: "Submitting...",
      success: "✅ Thank you! Your CV has been submitted.",
      error: "❌ Something went wrong."
    },
    ar: {
      title: "انضم إلى مجموعة المواهب لدينا",
      subtitle: "شارك سيرتك الذاتية معنا. سنتصل بك عندما تتاح فرصة مناسبة.",
      fullName: "الاسم الكامل",
      email: "البريد الإلكتروني",
      phone: "رقم الهاتف",
      experience: "سنوات الخبرة",
      position: "الوظيفة المتقدم لها",
      message: "رسالة إضافية / خطاب تغطية",
      submit: "تقديم السيرة الذاتية",
      submitting: "جاري التقديم...",
      success: "✅ شكرًا لك! تم تقديم سيرتك الذاتية بنجاح.",
      error: "❌ حدث خطأ ما."
    }
  };

  const currentLabels = labels[lang];

  return (
    <section 
      className="py-20 px-6 bg-gradient-to-r from-indigo-600 to-purple-600 text-white"
      dir={lang === 'ar' ? 'rtl' : 'ltr'}
    >
      <h2 className={`text-4xl font-bold mb-4 text-center ${lang === 'ar' ? 'font-arabic' : ''}`}>
        {currentLabels.title}
      </h2>
      <p className={`max-w-xl mx-auto mb-10 text-center opacity-90 ${lang === 'ar' ? 'font-arabic' : ''}`}>
        {currentLabels.subtitle}
      </p>

      <form
        onSubmit={handleSubmit}
        className="max-w-3xl mx-auto bg-white rounded-2xl p-8 shadow-lg text-gray-800"
        dir={lang === 'ar' ? 'rtl' : 'ltr'}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <input
            type="text"
            name="name"
            placeholder={currentLabels.fullName}
            required
            className="p-3 border rounded-xl w-full"
            onChange={handleChange}
            value={formData.name}
            dir={lang === 'ar' ? 'rtl' : 'ltr'}
          />
          <input
            type="email"
            name="email"
            placeholder={currentLabels.email}
            required
            className="p-3 border rounded-xl w-full"
            onChange={handleChange}
            value={formData.email}
            dir={lang === 'ar' ? 'rtl' : 'ltr'}
          />
          <input
            type="text"
            name="phone"
            placeholder={currentLabels.phone}
            required
            className="p-3 border rounded-xl w-full"
            onChange={handleChange}
            value={formData.phone}
            dir={lang === 'ar' ? 'rtl' : 'ltr'}
          />
          <input
            type="text"
            name="experience"
            placeholder={currentLabels.experience}
            required
            className="p-3 border rounded-xl w-full"
            onChange={handleChange}
            value={formData.experience}
            dir={lang === 'ar' ? 'rtl' : 'ltr'}
          />
          <input
            type="text"
            name="position"
            placeholder={currentLabels.position}
            required
            className="p-3 border rounded-xl w-full"
            onChange={handleChange}
            value={formData.position}
            dir={lang === 'ar' ? 'rtl' : 'ltr'}
          />
        </div>

        <textarea
          name="message"
          placeholder={currentLabels.message}
          className="mt-6 p-3 border rounded-xl w-full"
          rows={4}
          onChange={handleChange}
          value={formData.message}
          dir={lang === 'ar' ? 'rtl' : 'ltr'}
        />

        <input
          type="file"
          name="resume"
          accept=".pdf,.doc,.docx"
          required
          className="mt-6 w-full"
          onChange={handleChange}
          dir={lang === 'ar' ? 'rtl' : 'ltr'}
        />

        <button
          type="submit"
          disabled={loading}
          className={`mt-6 w-full py-3 bg-indigo-600 text-white font-semibold rounded-xl shadow-lg hover:bg-indigo-700 transition ${lang === 'ar' ? 'font-arabic' : ''}`}
        >
          {loading ? currentLabels.submitting : currentLabels.submit}
        </button>

        {successMsg && (
          <p className={`mt-4 text-green-600 ${lang === 'ar' ? 'font-arabic text-right' : 'text-left'}`}>
            {successMsg}
          </p>
        )}
        {errorMsg && (
          <p className={`mt-4 text-red-600 ${lang === 'ar' ? 'font-arabic text-right' : 'text-left'}`}>
            {errorMsg}
          </p>
        )}
      </form>
    </section>
  );
};

export default CVForm;