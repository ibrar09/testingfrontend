import React from "react";
import { motion } from "framer-motion";
import { useLanguage } from "../../../context/LanguageContext";

const AboutWorkingWithUs = () => {
  const { lang } = useLanguage();

  const data = {
    en: {
      title: "Why Work With Us?",
      subtitle: "We believe in empowering our team, encouraging creativity, and building careers that make an impact.",
      perks: [
        {
          icon: "🚀",
          title: "Growth Focused",
          description: "Upskill and grow continuously with mentorship and learning opportunities.",
        },
        {
          icon: "🤝",
          title: "Collaborative Culture",
          description: "Work with a supportive, diverse team across multiple locations.",
        },
        {
          icon: "💡",
          title: "Innovation",
          description: "Work on cutting-edge technologies with real impact on projects.",
        },
        {
          icon: "🌍",
          title: "Global Exposure",
          description: "Get opportunities to work on international and cross-functional projects.",
        },
      ],
    },
    ar: {
      title: "لماذا العمل معنا؟",
      subtitle: "نؤمن بتمكين فريقنا، وتشجيع الإبداع، وبناء مهن تحدث تأثيرًا.",
      perks: [
        {
          icon: "🚀",
          title: "مركز على النمو",
          description: "تطوير المهارات والنمو باستمرار مع فرص التوجيه والتعلم.",
        },
        {
          icon: "🤝",
          title: "ثقافة تعاونية",
          description: "العمل مع فريق داعم ومتنوع في مواقع متعددة.",
        },
        {
          icon: "💡",
          title: "الابتكار",
          description: "العمل على تقنيات متطورة ذات تأثير حقيقي على المشاريع.",
        },
        {
          icon: "🌍",
          title: "تعرض عالمي",
          description: "احصل على فرص للعمل في مشاريع دولية ومتعددة الوظائف.",
        },
      ],
    },
  };

  const currentData = data[lang];
  const perks = currentData.perks;

  return (
    <section 
      className="py-24 px-6 bg-gray-50 relative overflow-hidden"
      dir={lang === 'ar' ? 'rtl' : 'ltr'}
    >
      {/* Decorative floating shapes */}
      <div className="absolute top-0 left-0 w-32 h-32 bg-indigo-100/20 rounded-full blur-3xl animate-float-slow"></div>
      <div className="absolute bottom-10 right-10 w-48 h-48 bg-blue-100/10 rounded-full blur-3xl animate-float"></div>

      <div className="relative z-10 max-w-6xl mx-auto text-center">
        {/* Section Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className={`text-4xl sm:text-5xl font-bold mb-6 ${lang === 'ar' ? 'font-arabic' : ''}`}
        >
          {currentData.title}
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className={`max-w-3xl mx-auto text-gray-600 mb-12 text-lg sm:text-xl ${lang === 'ar' ? 'font-arabic' : ''}`}
        >
          {currentData.subtitle}
        </motion.p>

        {/* Perks Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {perks.map((perk, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center hover:scale-105 transition-transform cursor-default"
            >
              <div className="text-4xl mb-4">{perk.icon}</div>
              <h3 className={`text-xl font-semibold mb-2 ${lang === 'ar' ? 'font-arabic' : ''}`}>
                {perk.title}
              </h3>
              <p className={`text-gray-500 text-center text-sm sm:text-base ${lang === 'ar' ? 'font-arabic text-right' : 'text-left'}`}>
                {perk.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutWorkingWithUs;