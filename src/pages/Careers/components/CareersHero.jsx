import React from "react";
import { motion } from "framer-motion";
import { useLanguage } from "../../../context/LanguageContext";

const CareersHero = () => {
  const { lang } = useLanguage();

  const data = {
    en: {
      title: "Your Career Starts Here",
      subtitle: "Join a team where creativity, growth, and innovation come together. Explore open positions or share your CV — your next opportunity awaits!",
      companyHighlights: [
        { icon: "🚀", text: "Innovation & Growth" },
        { icon: "🤝", text: "Collaborative Culture" },
        { icon: "🌍", text: "Global Opportunities" },
        { icon: "💡", text: "Cutting-Edge Technology" },
      ],
    },
    ar: {
      title: "مهنتك تبدأ هنا",
      subtitle: "انضم إلى فريق يجتمع فيه الإبداع والنمو والابتكار معًا. استكشف الوظائف الشاغرة أو شارك سيرتك الذاتية — فرصتك التالية تنتظرك!",
      companyHighlights: [
        { icon: "🚀", text: "الابتكار والنمو" },
        { icon: "🤝", text: "ثقافة تعاونية" },
        { icon: "🌍", text: "فرص عالمية" },
        { icon: "💡", text: "تكنولوجيا متطورة" },
      ],
    },
  };

  const currentData = data[lang];
  const companyHighlights = currentData.companyHighlights;

  return (
    <section 
      className="relative w-full py-24 bg-gradient-to-r from-indigo-700 to-blue-600 text-white overflow-hidden"
      dir={lang === 'ar' ? 'rtl' : 'ltr'}
    >
      {/* Background floating shapes */}
      <div className="absolute top-10 left-5 w-24 h-24 rounded-full bg-white/10 blur-2xl animate-float"></div>
      <div className="absolute top-1/3 right-10 w-32 h-32 rounded-full bg-white/5 blur-3xl animate-float-slow"></div>
      <div className="absolute bottom-10 left-10 w-20 h-20 rounded-full bg-white/10 blur-xl animate-float"></div>

      {/* Main content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        {/* Hero Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className={`text-4xl sm:text-5xl font-bold mb-6 leading-tight ${lang === 'ar' ? 'font-arabic' : ''}`}
        >
          {currentData.title}
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className={`text-lg sm:text-xl text-gray-200 max-w-3xl mx-auto mb-12 ${lang === 'ar' ? 'font-arabic' : ''}`}
        >
          {currentData.subtitle}
        </motion.p>

        {/* Animated Highlight Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {companyHighlights.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + idx * 0.2, type: "spring", stiffness: 120 }}
              className="bg-white/10 hover:bg-white/20 rounded-2xl p-6 flex flex-col items-center justify-center transition transform hover:scale-105 cursor-default shadow-lg"
            >
              <span className="text-4xl mb-2">{item.icon}</span>
              <span className={`text-sm sm:text-base font-medium ${lang === 'ar' ? 'font-arabic' : ''}`}>
                {item.text}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CareersHero;