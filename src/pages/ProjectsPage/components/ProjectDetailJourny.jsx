// src/pages/Projects/components/ProjectDetailJourney.jsx
import React from 'react';
import { IoChatbubble, IoLayersOutline, IoFlashOutline, IoCheckmarkCircleOutline, IoHeartOutline } from 'react-icons/io5';
import { motion } from 'framer-motion';
import { useLanguage } from '../../../context/LanguageContext'; // Language context

// Motion Variants
const cardVariants = {
  offscreen: { y: 50, opacity: 0, rotate: -2 },
  onscreen: { y: 0, opacity: 1, rotate: 0, transition: { type: 'spring', bounce: 0.4, duration: 0.8 } },
};

const badgeVariants = {
  hidden: { scale: 0 },
  visible: { scale: 1, transition: { type: 'spring', stiffness: 260, damping: 20 } },
};

// Single Step Card
const JourneyStepCard = ({ icon: Icon, duration, title, description, color }) => (
  <motion.div
    className="flex flex-col items-center p-6 text-center bg-white rounded-lg shadow-md cursor-pointer"
    whileHover={{ scale: 1.06, rotate: 1, boxShadow: '0 20px 30px rgba(0,0,0,0.15)' }}
    initial="offscreen"
    whileInView="onscreen"
    viewport={{ once: true, amount: 0.3 }}
    variants={cardVariants}
  >
    {/* Icon */}
    <div className={`flex items-center justify-center ${color} text-white text-2xl w-16 h-16 rounded-full mb-4`}>
      <Icon className="w-8 h-8" />
    </div>

    {/* Duration Badge */}
    <motion.div
      className="bg-gray-100 text-gray-700 font-semibold text-xs px-3 py-1 rounded-full border border-gray-300 mb-4"
      initial="hidden"
      animate="visible"
      variants={badgeVariants}
    >
      {duration}
    </motion.div>

    {/* Title */}
    <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">{title}</h3>

    {/* Description */}
    <p className="text-gray-600 text-sm sm:text-base">{description}</p>
  </motion.div>
);

const ProjectDetailJourney = () => {
  const { lang } = useLanguage();
  const isRTL = lang === 'ar';

  // Journey Steps Data (English + Arabic)
  const journeySteps = isRTL
    ? [
        { icon: IoChatbubble, duration: 'أسبوع 1', title: 'الاستشارة الأولية', description: 'فهم احتياجات العميل وتقييم الرؤية', color: 'bg-blue-500' },
        { icon: IoLayersOutline, duration: 'أسبوعان', title: 'التصميم والموافقة', description: 'إنشاء المساحة المثالية مع التخطيط التفصيلي', color: 'bg-blue-500' },
        { icon: IoFlashOutline, duration: '4 أسابيع', title: 'التنفيذ', description: 'عمل عالي الجودة مع الحد الأدنى من التعطيل', color: 'bg-blue-500' },
        { icon: IoCheckmarkCircleOutline, duration: 'أسبوع 1', title: 'الفحص النهائي', description: 'فحص الجودة وجولة العميل', color: 'bg-blue-500' },
        { icon: IoHeartOutline, duration: 'مستمر', title: 'الدعم بعد الإنجاز', description: 'ضمان جودة طويلة الأمد والصيانة', color: 'bg-blue-500' },
      ]
    : [
        { icon: IoChatbubble, duration: '1 week', title: 'Initial Consultation', description: 'Understanding client needs and vision assessment', color: 'bg-blue-500' },
        { icon: IoLayersOutline, duration: '2 weeks', title: 'Design & Approval', description: 'Creating the perfect space with detailed planning', color: 'bg-blue-500' },
        { icon: IoFlashOutline, duration: '4 weeks', title: 'Execution', description: 'High-quality work with minimal disruption to operations', color: 'bg-blue-500' },
        { icon: IoCheckmarkCircleOutline, duration: '1 week', title: 'Final Inspection', description: 'Quality checks and client walkthrough', color: 'bg-blue-500' },
        { icon: IoHeartOutline, duration: 'Ongoing', title: 'Post-Completion Support', description: 'Long-term quality assurance and maintenance', color: 'bg-blue-500' },
      ];

  return (
    <section className="py-12 bg-white font-sans" aria-label="Project Journey">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" dir={isRTL ? 'rtl' : 'ltr'}>
        {/* Header */}
        <div className={`text-center mb-12 ${isRTL ? 'text-right' : 'text-left'}`}>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900">
            {isRTL ? 'رحلتنا: كيف قمنا بالتنفيذ' : 'Our Journey: How We Delivered'}
          </h1>
          <p className="mt-3 text-base sm:text-lg text-gray-500 max-w-3xl mx-auto">
            {isRTL
              ? 'تابع نهجنا المنظم الذي يضمن نجاح المشروع من الاستشارة الأولية إلى الدعم طويل الأمد'
              : 'Follow our structured approach that ensures project success from initial consultation to long-term support'}
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 sm:gap-8 lg:gap-10">
          {journeySteps.map((step, index) => (
            <JourneyStepCard
              key={index}
              icon={step.icon}
              duration={step.duration}
              title={step.title}
              description={step.description}
              color={step.color}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectDetailJourney;
