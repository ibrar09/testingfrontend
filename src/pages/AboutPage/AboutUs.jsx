import React from "react";
import { useLanguage } from "../../context/LanguageContext"; // adjust path
import AboutSection from "./AboutSection";
import teamImage from "../../assets/images/team-unsplash.webp";
import ceoImage from "../../assets/images/CEO.webp";

import AboutUsCover from "./AboutUsCover";
import OurStrengthSection from "./OurStranghtSection";
import ExcellenceSection from "./ExcellenceSection";
import ImpactSection from "./ImpactSection";
import WorkWithUs from "./WorkWithUs";

export default function AboutPage() {
  const { lang } = useLanguage();

  // Text content for English and Arabic
  const content = {
    en: {
      section1: {
        title: "Who",
        highlight: "We Are",
        description:
          "At Ram limited, we deliver efficient, reliable, and high-quality building maintenance services. Our experienced team ensures minimal downtime and exceptional results.",
        badge: { value: "10+", label: "Years Experience" },
      },
      section2: {
        title: "Meet Our",
        highlight: "Leader",
        description:
          "Our CEO has over 15 years of expertise in infrastructure and building maintenance. Under his guidance, Ram Limited continues to grow, ensuring innovation and client satisfaction.",
        badge: { value: "1", label: "Visionary CEO" },
      },
    },
    ar: {
      section1: {
        title: "من نحن",
        highlight: "نحن",
        description:
          "في شركة رام المحدودة، نقدم خدمات صيانة المباني بكفاءة وموثوقية وجودة عالية. يضمن فريقنا ذو الخبرة الحد الأدنى من التوقف وتحقيق نتائج استثنائية.",
        badge: { value: "10+", label: "سنوات الخبرة" },
      },
      section2: {
        title: "تعرف على",
        highlight: "قائدنا",
        description:
          "يمتلك الرئيس التنفيذي لدينا أكثر من 15 عامًا من الخبرة في البنية التحتية وصيانة المباني. تحت قيادته، تواصل رام المحدودة النمو، مع ضمان الابتكار ورضا العملاء.",
        badge: { value: "1", label: "الرئيس التنفيذي البصير" },
      },
    },
  };

  return (
    <div dir={lang === "ar" ? "rtl" : "ltr"}> {/* RTL for Arabic */}
      <AboutUsCover />

      {/* First Section */}
      <AboutSection
        image={teamImage}
        title={content[lang].section1.title}
        highlight={content[lang].section1.highlight}
        description={content[lang].section1.description}
        badge={content[lang].section1.badge}
      />

      {/* Second Section - Reversed */}
      <AboutSection
        reverse
        image={ceoImage}
        title={content[lang].section2.title}
        highlight={content[lang].section2.highlight}
        description={content[lang].section2.description}
        badge={content[lang].section2.badge}
      />

      <OurStrengthSection lang={lang} />
      <ExcellenceSection lang={lang} />
      <ImpactSection lang={lang} />
      <WorkWithUs lang={lang} />
    </div>
  );
}
