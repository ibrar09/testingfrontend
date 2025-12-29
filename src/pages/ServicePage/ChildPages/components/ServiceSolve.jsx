// ServiceSolve.jsx
import React, { useState, useRef } from "react";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import TaskAltIcon from "@mui/icons-material/TaskAlt";
import { ArticleOutlined } from "@mui/icons-material";
import { motion } from "framer-motion";
import { useLanguage } from "../../../../context/LanguageContext";

const PRIMARY_BLUE = "#023A9A";

// ✅ Process Step Component with animation
const ProcessStep = ({ number, title, description, lang }) => (
  <motion.div
    className={`flex items-start gap-4 bg-[rgba(245,245,245,0.5)] rounded-xl p-4 w-full ${lang === 'ar' ? 'flex-row-reverse text-right' : ''}`}
    initial={{ opacity: 0, x: lang === 'ar' ? 20 : -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
    dir={lang === 'ar' ? 'rtl' : 'ltr'}
  >
    <div
      className="flex items-center justify-center w-12 h-12 rounded-xl text-white font-bold flex-shrink-0"
      style={{ backgroundColor: PRIMARY_BLUE }}
    >
      {number}
    </div>
    <div className={lang === 'ar' ? 'text-right' : 'text-left'}>
      <h3 className="font-['Helvetica'] font-bold text-[16px] leading-[24px] text-black">
        {title}
      </h3>
      <p className="font-['Helvetica'] text-[14px] leading-[20px] text-gray-500">
        {description}
      </p>
    </div>
  </motion.div>
);

// ✅ Feature List Component with animation
const FeatureList = ({ text, lang }) => (
  <motion.div
    className={`flex items-center gap-3 ${lang === 'ar' ? 'flex-row-reverse text-right' : ''}`}
    initial={{ opacity: 0, x: lang === 'ar' ? 10 : -10 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.4 }}
    dir={lang === 'ar' ? 'rtl' : 'ltr'}
  >
    <TaskAltIcon className="w-[18px] h-[18px] text-[#023A9A] flex-shrink-0" />
    <p className={`font-['Helvetica'] text-[14px] leading-[20px] text-gray-600 ${lang === 'ar' ? 'text-right' : 'text-left'}`}>{text}</p>
  </motion.div>
);

// ✅ Stat Card Component with hover effect
const StatCard = ({ value, label, lang }) => (
  <motion.div
    className={`text-center p-4 bg-white rounded-lg border border-gray-200 flex-1 min-w-[120px] shadow-sm hover:shadow-md transition-shadow ${lang === 'ar' ? 'text-right' : 'text-left'}`}
    whileHover={{ scale: 1.03 }}
    dir={lang === 'ar' ? 'rtl' : 'ltr'}
  >
    <h3 className="text-2xl font-extrabold text-[#023A9A]">{value}</h3>
    <p className="text-sm text-gray-600">{label}</p>
  </motion.div>
);

// ✅ Main ServiceSolve Component
const ServiceSolve = ({ content, media }) => {
  // Hooks MUST be called at the top level, before any conditional returns
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);
  const { lang } = useLanguage();
  
  // Safety checks - must come AFTER hooks
  if (!content || !media) {
    console.error("ServiceSolve: Missing content or media props");
    return (
      <section className="w-full max-w-[1280px] mx-auto px-4 md:px-8 lg:px-12 py-16">
        <div className="text-center">Loading service data...</div>
      </section>
    );
  }

  const { title, subtitle, ProcessSteps = [], featureLists = [], caseStudy } = content;
  const { videoPlaceHolderUrl, videoLabel, stats = [] } = media;

  // Bilingual text
  const bilingualText = {
    en: {
      howWeDeliver: "How We Deliver",
      whatYoullGet: "What You'll Get",
      watchHowWe: "Watch how we transform commercial plumbing systems from concept to completion, ensuring functionality, safety, and professional installation.",
      viewFullCaseStudy: "View full case study →"
    },
    ar: {
      howWeDeliver: "كيف نقدم الخدمة",
      whatYoullGet: "ما الذي ستحصل عليه",
      watchHowWe: "شاهد كيف نحول أنظمة السباكة التجارية من المفهوم إلى الاكتمال، مع ضمان الوظائف والسلامة والتركيب الاحترافي.",
      viewFullCaseStudy: "عرض دراسة الحالة الكاملة ←"
    }
  };

  const text = bilingualText[lang] || bilingualText.en;

  // Handle video play
  const handleVideoPlay = () => {
    if (videoRef.current) {
      setIsPlaying(true);
      videoRef.current.play().catch(e => {
        console.error("Video play failed:", e);
        setIsPlaying(false);
      });
    }
  };

  return (
    <section 
      className={`w-full max-w-[1280px] mx-auto px-4 md:px-8 lg:px-12 py-16 flex flex-col lg:flex-row gap-12 ${lang === 'ar' ? 'text-right' : 'text-left'}`}
      dir={lang === 'ar' ? 'rtl' : 'ltr'}
    >
      {/* LEFT COLUMN */}
      <div className="flex-1 flex flex-col gap-8">
        {/* Title & Subtitle */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h1 className={`text-[32px] md:text-[40px] lg:text-[48px] font-['Helvetica'] font-bold leading-tight text-black ${lang === 'ar' ? 'text-right' : 'text-left'}`}>
            {title}
          </h1>
          <p className={`font-['Helvetica'] text-[16px] md:text-[18px] text-gray-600 leading-[26px] ${lang === 'ar' ? 'text-right' : 'text-left'}`}>
            {subtitle}
          </p>
        </motion.div>

        {/* How We Deliver */}
        <div className="flex flex-col gap-6">
          <h2 className={`font-['Helvetica'] font-bold text-[22px] md:text-[24px] text-black ${lang === 'ar' ? 'text-right' : 'text-left'}`}>
            {text.howWeDeliver}
          </h2>
          <div className="flex flex-col gap-4">
            {ProcessSteps.map((step, index) => (
              <ProcessStep
                key={index}
                number={step.id}
                title={step.title}
                description={step.description}
                lang={lang}
              />
            ))}
          </div>
        </div>

        {/* What You'll Get */}
        <div className="flex flex-col gap-6">
          <h2 className={`font-['Helvetica'] font-bold text-[22px] md:text-[24px] text-black ${lang === 'ar' ? 'text-right' : 'text-left'}`}>
            {text.whatYoullGet}
          </h2>
          <div className="flex flex-col gap-3">
            {featureLists.map((item, index) => (
              <FeatureList key={index} text={item} lang={lang} />
            ))}
          </div>
        </div>
      </div>

      {/* RIGHT COLUMN */}
      <div className="flex-1 flex flex-col gap-8">
        {/* Video Section */}
        <motion.div
          className={`rounded-2xl border border-gray-200 p-6 flex flex-col gap-4 bg-white shadow-sm hover:shadow-lg transition-shadow ${lang === 'ar' ? 'text-right' : 'text-left'}`}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          dir={lang === 'ar' ? 'rtl' : 'ltr'}
        >
          <div className="relative w-full aspect-video rounded-xl overflow-hidden">
            <video
              ref={videoRef}
              src={videoPlaceHolderUrl}
              className="w-full h-full object-contain"
              controls={isPlaying}
            />
            {!isPlaying && videoPlaceHolderUrl && (
              <div
                onClick={handleVideoPlay}
                className="absolute inset-0 flex items-center justify-center cursor-pointer"
              >
                <div className="w-[64px] h-[64px] bg-[rgba(19,146,224,0.9)] rounded-full flex items-center justify-center transition-transform hover:scale-110">
                  <PlayCircleIcon className="w-[30px] h-[30px] text-white" />
                </div>
              </div>
            )}
          </div>

          {/* Video description */}
          <div>
            <p className={`font-['Helvetica'] font-bold text-[16px] leading-[24px] text-black ${lang === 'ar' ? 'text-right' : 'text-left'}`}>
              {videoLabel}
            </p>
            <p className={`font-['Helvetica'] text-[14px] leading-[20px] text-gray-500 ${lang === 'ar' ? 'text-right' : 'text-left'}`}>
              {text.watchHowWe}
            </p>
          </div>
        </motion.div>

        {/* Stats */}
        <div className="flex flex-wrap gap-4 justify-between">
          {stats.map((stat, index) => (
            <StatCard key={index} value={stat.value} label={stat.label} lang={lang} />
          ))}
        </div>

        {/* Case Study */}
        {caseStudy && (
          <motion.div
            className={`p-6 rounded-xl bg-white border border-gray-200 shadow-md hover:shadow-lg transition-shadow ${lang === 'ar' ? 'text-right' : 'text-left'}`}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            dir={lang === 'ar' ? 'rtl' : 'ltr'}
          >
            <div className={`flex items-start gap-4 mb-4 ${lang === 'ar' ? 'flex-row-reverse' : ''}`}>
              <ArticleOutlined className="text-[#023A9A] w-6 h-6 flex-shrink-0" />
              <div className={lang === 'ar' ? 'text-right' : 'text-left'}>
                <h4 className="font-bold text-gray-900">{caseStudy.title}</h4>
                <p className="text-sm text-gray-600">{caseStudy.location}</p>
              </div>
            </div>
            <p className={`text-gray-700 mb-4 ${lang === 'ar' ? 'text-right' : 'text-left'}`}>{caseStudy.summary}</p>
            {caseStudy.link && (
              <a
                href={caseStudy.link}
                className="text-sm font-semibold text-[#023A9A] hover:underline"
              >
                {text.viewFullCaseStudy}
              </a>
            )}
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default ServiceSolve;