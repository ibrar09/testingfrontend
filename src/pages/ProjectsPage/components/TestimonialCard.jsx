// src/pages/Projects/components/TestimonialCard.jsx
import React from "react";
import api from "../../../api/api"; // centralized API instance
import { useLanguage } from "../../../context/LanguageContext"; // 🔹 Language context

// ⭐ Get backend URL from Axios instance
import { BACKEND_URL } from "../../../api/config";

// ⭐ Normalize Image Path
const normalizeImage = (img) => {
  if (!img) return null;

  const raw = typeof img === "string" ? img : img.image_url;

  if (!raw) return null;

  if (raw.startsWith("/uploads/testimonials")) return `${BACKEND_URL}${raw}`;
  if (raw.startsWith("uploads")) return `${BACKEND_URL}/${raw}`;

  return `${BACKEND_URL}/uploads/testimonials/${raw}`;
};

// ⭐ Star Icon
const StarIcon = ({ className = "" }) => (
  <svg
    className={`w-5 h-5 sm:w-6 sm:h-6 fill-current text-yellow-500 ${className}`}
    viewBox="0 0 24 24"
  >
    <path d="M12 .587l3.668 7.568 8.332 1.209-6.001 5.867 1.42 8.303L12 18.257l-7.42 3.518 1.42-8.303-6.001-5.867 8.332-1.209L12 .587z" />
  </svg>
);

// ⭐ Single Testimonial Card
const TestimonialCard = ({ quote, name, title, company, rating = 5, avatar, isRTL }) => {
  const stars = Array(rating).fill(0).map((_, i) => <StarIcon key={i} />);

  return (
    <section className="py-16 md:py-24 bg-gray-50" dir={isRTL ? "rtl" : "ltr"}>
      <div className="max-w-[1437px] mx-auto px-6 sm:px-12 md:px-20 lg:px-24 xl:px-28 flex flex-col items-center gap-10">
        <div
          className="w-full max-w-[1024px] bg-gradient-to-br from-white to-[#fff] rounded-xl md:rounded-2xl shadow-[0_1px_2px_rgba(0,0,0,0.05)] border border-gray-100 p-8 sm:p-12 flex flex-col items-center text-center transition-transform duration-300 hover:scale-[1.01]"
          style={{
            backgroundImage:
              "linear-gradient(0deg, #FFFFFF, #FFFFFF), linear-gradient(135deg, rgba(255, 106, 0, 0.05) 0%, rgba(255, 106, 0, 0.1) 100%)",
          }}
        >
          <div className="flex justify-center mb-6 space-x-1">{stars}</div>
          <blockquote className="text-lg sm:text-xl md:text-2xl italic font-medium text-gray-800 leading-relaxed max-w-3xl">
            {isRTL ? `“${quote || "لا يوجد تعليق"}”` : `“${quote}”`}
          </blockquote>

          <div className="mt-10 pt-6 border-t border-gray-200 flex flex-col items-center">
            <div className="w-16 h-16 sm:w-[64px] sm:h-[64px] bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mb-4 shadow-inner overflow-hidden">
              {avatar ? (
                <img
                  src={avatar}
                  alt={name}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src =
                      "https://placehold.co/100/100/DEE2E6/6C757D?text=Avatar";
                  }}
                />
              ) : (
                <svg
                  className="w-8 h-8"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                </svg>
              )}
            </div>
            <p className="text-lg sm:text-xl font-semibold text-gray-900">{name}</p>
            <p className="text-md text-blue-600 font-medium mt-1">{title}</p>
            <p className="text-sm text-gray-500">{company}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

// ✅ Testimonial Section
const TestimonialSection = ({ testimonials = [] }) => {
  const { lang } = useLanguage();
  const isRTL = lang === "ar";

  if (!testimonials || testimonials.length === 0)
    return (
      <p className="text-center py-10 text-gray-500">
        {isRTL ? "لا توجد تقييمات متاحة." : "No testimonials available."}
      </p>
    );

  return (
    <>
      {testimonials.map((t, idx) => (
        <TestimonialCard
          key={idx}
          quote={t.quote}
          name={t.name}
          title={t.title}
          company={t.company || ""}
          rating={t.rating || 5}
          avatar={t.image ? normalizeImage(t.image) : null}
          isRTL={isRTL}
        />
      ))}
    </>
  );
};

export default TestimonialSection;
