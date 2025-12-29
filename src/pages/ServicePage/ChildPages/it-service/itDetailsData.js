// src/data/services/it/itDetailsData.js

import it1 from '../../../../assets/images/It1.webp';
import it2 from '../../../../assets/images/It2.webp';
import it3 from '../../../../assets/images/It3.webp';
import itvideo from '../../../../assets/videos/IT-demo.mp4';


import { Network, Shield, Cpu, Server } from "lucide-react";
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import MilitaryTechIcon from '@mui/icons-material/MilitaryTech';

// --- HERO SECTION DATA ---
export const itHeroData = {
  en: {
    title: "Professional IT & Security Services",
    heading: "Comprehensive IT & Security Solutions",
    description:
      "Advanced IT, network, and security services for commercial and residential projects across Saudi Arabia.",
    cards: [
      { heading: "Rapid Deployment", description: "Fast setup of networks, servers, and security systems", icon: AccessTimeIcon },
      { heading: "Certified Experts", description: "Professional technicians with IT & security certifications", icon: Shield },
      { heading: "24/7 Support", description: "Continuous monitoring, maintenance, and troubleshooting", icon: MilitaryTechIcon },
    ],
    images: [it1, it2, it3],
  },
  ar: {
    title: "خدمات تكنولوجيا المعلومات والأمن الاحترافية",
    heading: "حلول تكنولوجيا معلومات وأمن شاملة",
    description:
      "خدمات تكنولوجيا معلومات وشبكات وأمن متقدمة للمشاريع التجارية والسكنية في جميع أنحاء المملكة العربية السعودية.",
    cards: [
      { heading: "نشر سريع", description: "إعداد سريع للشبكات والخوادم وأنظمة الأمن", icon: AccessTimeIcon },
      { heading: "خبراء معتمدون", description: "فنيون محترفون بشهادات تكنولوجيا معلومات وأمن", icon: Shield },
      { heading: "دعم 24/7", description: "مراقبة مستمرة وصيانة واستكشاف أخطاء وإصلاحها", icon: MilitaryTechIcon },
    ],
    images: [it1, it2, it3],
  }
};

// --- PROJECT DURATION DATA ---
const itProjectDurationData = {
  en: {
    cards: [
      { icon: <CalendarMonthIcon />, title: "AVERAGE PROJECT TIME", time: "2–6 WEEKS", color: "text-blue-600" },
      { icon: <AttachMoneyIcon />, title: "STARTING PRICE", time: "SAR 10,000", color: "text-blue-600" },
      { icon: <Network />, title: "SERVICE CATEGORIES", time: "Networking / CCTV / IT Support", color: "text-[rgba(115,115,115,1)]" },
      { icon: <MilitaryTechIcon />, title: "QUALITY STANDARD", time: "ISO 27001:2013", color: "text-gray-700" },
    ],
    note: "*Pricing depends on scale and type of network/security solution.",
  },
  ar: {
    cards: [
      { icon: <CalendarMonthIcon />, title: "متوسط وقت المشروع", time: "2–6 أسابيع", color: "text-blue-600" },
      { icon: <AttachMoneyIcon />, title: "السعر البدائي", time: "10,000 ريال سعودي", color: "text-blue-600" },
      { icon: <Network />, title: "فئات الخدمات", time: "شبكات / كاميرات مراقبة / دعم تكنولوجيا معلومات", color: "text-[rgba(115,115,115,1)]" },
      { icon: <MilitaryTechIcon />, title: "معيار الجودة", time: "ISO 27001:2013", color: "text-gray-700" },
    ],
    note: "*يعتمد السعر على حجم ونوع حل الشبكات/الأمن.",
  }
};

export default itProjectDurationData;

// --- CONTENT DATA ---
export const itContent = {
  en: {
    title: "End-to-End IT & Security Solutions",
    subtitle: "From networking setup to cybersecurity, we ensure smooth and secure IT operations for your business or home.",
    ProcessSteps: [
      { id: 1, title: "Assessment", description: "Analyze your existing IT infrastructure and requirements." },
      { id: 2, title: "Implementation", description: "Deploy servers, networks, and security systems professionally." },
      { id: 3, title: "Support & Maintenance", description: "Continuous monitoring and troubleshooting for uninterrupted operations." },
    ],
    featureLists: [
      "Certified technicians",
      "24/7 monitoring and support",
      "Custom IT & security solutions",
      "Preventive maintenance and emergency response",
    ],
    caseStudy: {
      title: "Corporate Office IT Overhaul",
      location: "Riyadh, Saudi Arabia",
      summary: "Implemented complete networking, server setup, and CCTV security for a corporate office, increasing efficiency and security by 50%.",
      link: "#",
    },
  },
  ar: {
    title: "حلول تكنولوجيا معلومات وأمن من البداية إلى النهاية",
    subtitle: "من إعداد الشبكات إلى الأمن السيبراني، نضمن عمليات تكنولوجيا معلومات سلسة وآمنة لعملك أو منزلك.",
    ProcessSteps: [
      { id: 1, title: "التقييم", description: "تحليل البنية التحتية الحالية لتكنولوجيا المعلومات والمتطلبات الخاصة بك." },
      { id: 2, title: "التنفيذ", description: "نشر الخوادم والشبكات وأنظمة الأمن بشكل احترافي." },
      { id: 3, title: "الدعم والصيانة", description: "مراقبة مستمرة واستكشاف الأخطاء وإصلاحها لعمليات دون انقطاع." },
    ],
    featureLists: [
      "فنيون معتمدون",
      "مراقبة ودعم على مدار الساعة",
      "حلول تكنولوجيا معلومات وأمن مخصصة",
      "صيانة وقائية واستجابة طارئة",
    ],
    caseStudy: {
      title: "إصلاح شامل لتكنولوجيا المعلومات في مكتب شركة",
      location: "الرياض، المملكة العربية السعودية",
      summary: "تنفيذ شبكات كاملة وإعداد خوادم وأمن كاميرات مراقبة لمكتب شركة، مما زاد الكفاءة والأمان بنسبة 50٪.",
      link: "#",
    },
  }
};

// --- MEDIA DATA ---
export const itMedia = {
  en: {
    videoPlaceHolderUrl: itvideo,
    videoLabel: "IT & Security Systems Demo",
    stats: [
      { value: "200+", label: "Projects Completed" },
      { value: "97%", label: "Client Satisfaction" },
      { value: "24/7", label: "Service Support" },
    ],
  },
  ar: {
    videoPlaceHolderUrl: itvideo,
    videoLabel: "عرض أنظمة تكنولوجيا المعلومات والأمن",
    stats: [
      { value: "200+", label: "مشروع مكتمل" },
      { value: "97%", label: "رضا العملاء" },
      { value: "24/7", label: "دعم الخدمة" },
    ],
  }
};

// --- DETAILS PAGE DATA ---
export const itDetailsData = {
  en: {
    header: {
      title: "Comprehensive IT & Security Services",
      subtitle: "End-to-end solutions for IT infrastructure, networking, CCTV, and cybersecurity.",
    },
    scope: {
      title: "Our Expertise Covers",
      listA: [
        "Network setup & optimization",
        "CCTV and smart security systems",
        "Server & cloud deployment",
        "Cybersecurity solutions",
      ],
      listB: [
        "24/7 IT monitoring",
        "Emergency troubleshooting",
        "Backup & disaster recovery",
        "Custom IT consulting",
      ],
    },
    footer: {
      title: "Note",
      description: "*Pricing and project duration vary depending on system complexity and location.",
    },
  },
  ar: {
    header: {
      title: "خدمات تكنولوجيا معلومات وأمن شاملة",
      subtitle: "حلول كاملة للبنية التحتية لتكنولوجيا المعلومات والشبكات وكاميرات المراقبة والأمن السيبراني.",
    },
    scope: {
      title: "تشمل خبرتنا",
      listA: [
        "إعداد وتحسين الشبكات",
        "أنظمة كاميرات مراقبة وأمن ذكية",
        "نشر الخوادم والحوسبة السحابية",
        "حلول الأمن السيبراني",
      ],
      listB: [
        "مراقبة تكنولوجيا معلومات على مدار الساعة",
        "استكشاف الأخطاء وإصلاحها الطارئة",
        "النسخ الاحتياطي واستعادة الكوارث",
        "استشارات تكنولوجيا معلومات مخصصة",
      ],
    },
    footer: {
      title: "ملاحظة",
      description: "*يختلف السعر ومدة المشروع حسب تعقيد النظام والموقع.",
    },
  }
};

// --- PRICING DATA ---
export const itPricingData = {
  en: {
    header: {
      title: "Transparent IT & Security Pricing",
      subtitle: "Flexible service packages for offices, retail, and residential setups.",
    },
    estimatorData: {
      title: "Quick IT Service Estimator",
      subtitle: "Estimate setup costs based on office size, number of devices, and system complexity.",
      sizeOptions: ["Small (Up to 50 devices)", "Medium (51–150 devices)", "Large (150+ devices)"],
      complexityOptions: ["Basic", "Advanced", "Premium"],
      locationOptions: ["Riyadh", "Jeddah", "Dammam", "Other"],
      inputDefaults: {
        projectSize: "Small (Up to 50 devices)",
        complexity: "Advanced",
        location: "Riyadh",
      },
      importantNotes: [
        "Estimates based on standard IT & security systems.",
        "On-site inspection may be required.",
        "Maintenance contracts available.",
        "Warranty terms depend on equipment type.",
        "All quotes valid for 30 days.",
      ],
    },
    packages: [
      {
        packageName: "Starter",
        tagline: "Basic IT setup",
        price: "SAR 10,000",
        startingFrom: "Starting from",
        features: ["Network setup", "Basic CCTV installation", "IT consultation"],
        idealFor: "Small offices or shops",
        isPopular: false,
        icon: Network,
      },
      {
        packageName: "Standard",
        tagline: "Full IT & Security setup",
        price: "SAR 30,000",
        startingFrom: "Starting from",
        features: [
          "Networking & server setup",
          "Advanced CCTV security",
          "24/7 monitoring",
          "6-month support",
        ],
        idealFor: "Medium offices & commercial properties",
        isPopular: true,
        icon: Server,
      },
      {
        packageName: "Premium",
        tagline: "Enterprise IT & Security",
        price: "SAR 60,000",
        startingFrom: "Starting from",
        features: [
          "Custom IT infrastructure",
          "Cybersecurity & cloud backup",
          "Smart security & CCTV",
          "Priority maintenance",
        ],
        idealFor: "Large enterprises & industrial setups",
        isPopular: false,
        icon: Cpu,
      },
    ],
  },
  ar: {
    header: {
      title: "تسعير تكنولوجيا معلومات وأمن شفاف",
      subtitle: "باقات خدمة مرنة للمكاتب والتجارة والإعدادات السكنية.",
    },
    estimatorData: {
      title: "مقدر خدمة تكنولوجيا معلومات سريع",
      subtitle: "تقدير تكاليف الإعداد بناءً على حجم المكتب وعدد الأجهزة وتعقيد النظام.",
      sizeOptions: ["صغير (حتى 50 جهازًا)", "متوسط (51–150 جهازًا)", "كبير (150+ جهازًا)"],
      complexityOptions: ["أساسي", "متقدم", "متميز"],
      locationOptions: ["الرياض", "جدة", "الدمام", "أخرى"],
      inputDefaults: {
        projectSize: "صغير (حتى 50 جهازًا)",
        complexity: "متقدم",
        location: "الرياض",
      },
      importantNotes: [
        "التقديرات تعتمد على أنظمة تكنولوجيا معلومات وأمن قياسية.",
        "قد تكون هناك حاجة لفحص في الموقع.",
        "عقود الصيانة متاحة.",
        "تختلف شروط الضمان حسب نوع المعدات.",
        "جميع العروض سارية لمدة 30 يومًا.",
      ],
    },
    packages: [
      {
        packageName: "بداية",
        tagline: "إعداد تكنولوجيا معلومات أساسي",
        price: "10,000 ريال سعودي",
        startingFrom: "بداية من",
        features: ["إعداد الشبكات", "تركيب كاميرات مراقبة أساسية", "استشارة تكنولوجيا معلومات"],
        idealFor: "مكاتب أو محلات صغيرة",
        isPopular: false,
        icon: Network,
      },
      {
        packageName: "قياسي",
        tagline: "إعداد تكنولوجيا معلومات وأمن كامل",
        price: "30,000 ريال سعودي",
        startingFrom: "بداية من",
        features: [
          "إعداد الشبكات والخوادم",
          "أمن كاميرات مراقبة متقدم",
          "مراقبة على مدار الساعة",
          "دعم 6 أشهر",
        ],
        idealFor: "مكاتب وممتلكات تجارية متوسطة",
        isPopular: true,
        icon: Server,
      },
      {
        packageName: "متميز",
        tagline: "تكنولوجيا معلومات وأمن للمؤسسات",
        price: "60,000 ريال سعودي",
        startingFrom: "بداية من",
        features: [
          "بنية تحتية لتكنولوجيا معلومات مخصصة",
          "أمن سيبراني ونسخ احتياطي سحابي",
          "أمن ذكي وكاميرات مراقبة",
          "صيانة بأولوية",
        ],
        idealFor: "المؤسسات الكبيرة والإعدادات الصناعية",
        isPopular: false,
        icon: Cpu,
      },
    ],
  }
};

// --- QUALITY & TESTIMONIALS DATA ---
export const itQualityData = {
  en: {
    header: {
      title: "Trusted IT & Security Experts",
      subtitle: "Reliable, certified, and professional IT solutions across Saudi Arabia.",
    },
    certifications: [
      { icon: "Award", title: "ISO 27001:2013", subtitle: "Information Security Management" },
      { icon: "Shield", title: "Security Certified", subtitle: "Cybersecurity Standards" },
      { icon: "CheckCircle", title: "Authorized Service", subtitle: "Top IT & Security Vendors" },
    ],
    testimonials: {
      title: "What Our Clients Say",
      reviews: [
        { quote: "The IT team revamped our entire office network seamlessly.", name: "Fahad Al-Saud", title: "IT Manager", company: "SaudiTech" },
        { quote: "Professional and reliable security system installation.", name: "Sara Al-Qahtani", title: "Operations Head", company: "Green Mall" },
        { quote: "24/7 support is excellent and responsive.", name: "Omar Bin Ali", title: "Director", company: "Al Riyadh Corp" },
      ],
    },
    stats: [
      { number: "200+", label: "Projects Completed" },
      { number: "97%", label: "Client Satisfaction" },
      { number: "10+", label: "Years of Experience" },
      { number: "24/7", label: "Support Availability" },
    ],
    cta: {
      title: "Need IT & Security Services?",
      subtitle: "Contact our specialists for a tailored solution today.",
      buttonText: "Get a Quote",
      secondaryLinkText: "View Our Projects",
    },
    contact: {
      phone: "+966 593534881",
      email: "ramlimited.sa@gmail.com",
      address: "Riyadh, Saudi Arabia",
    },
  },
  ar: {
    header: {
      title: "خبراء تكنولوجيا معلومات وأمن موثوقون",
      subtitle: "حلول تكنولوجيا معلومات موثوقة ومعتمدة واحترافية في جميع أنحاء المملكة العربية السعودية.",
    },
    certifications: [
      { icon: "Award", title: "ISO 27001:2013", subtitle: "إدارة أمن المعلومات" },
      { icon: "Shield", title: "معتمد أمنيًا", subtitle: "معايير الأمن السيبراني" },
      { icon: "CheckCircle", title: "خدمة معتمدة", subtitle: "أفضل موردي تكنولوجيا المعلومات والأمن" },
    ],
    testimonials: {
      title: "ما يقوله عملاؤنا",
      reviews: [
        { quote: "قام فريق تكنولوجيا المعلومات بتجديد شبكة مكتبنا بالكامل بسلاسة.", name: "فهد السعود", title: "مدير تكنولوجيا المعلومات", company: "سعودي تك" },
        { quote: "تركيب نظام أمني احترافي وموثوق.", name: "سارة القحطاني", title: "رئيسة العمليات", company: "جرين مول" },
        { quote: "الدعم على مدار الساعة ممتاز وسريع الاستجابة.", name: "عمر بن علي", title: "مدير", company: "شركة الرياض" },
      ],
    },
    stats: [
      { number: "200+", label: "مشروع مكتمل" },
      { number: "97%", label: "رضا العملاء" },
      { number: "10+", label: "سنوات خبرة" },
      { number: "24/7", label: "توفر الدعم" },
    ],
    cta: {
      title: "هل تحتاج إلى خدمات تكنولوجيا معلومات وأمن؟",
      subtitle: "اتصل بخبرائنا للحصول على حل مخصص اليوم.",
      buttonText: "احصل على عرض سعر",
      secondaryLinkText: "عرض مشاريعنا",
    },
    contact: {
      phone: "+966 593534881",
      email: "ramlimited.sa@gmail.com",
      address: "الرياض، المملكة العربية السعودية",
    },
  }
};

// Add this at the end of your src/data/services/it/itDetailsData.js file

// --- SEO DATA ---
export const itSEODetails = {
  en: {
    // Primary Meta Tags
    metaTitle: "IT & Security Services Saudi Arabia | Network & CCTV Installation Riyadh | Ram Limited",
    metaDescription: "Professional IT services, network setup, CCTV security, and cybersecurity solutions in Saudi Arabia. Certified IT experts in Riyadh, Jeddah, Dammam. ISO 27001 certified.",
    metaKeywords: "IT services Saudi Arabia, network installation Riyadh, CCTV security KSA, cybersecurity solutions Jeddah, IT support Dammam, server setup Saudi Arabia",
    
    // OG Tags
    ogTitle: "Professional IT & Security Services in Saudi Arabia | Ram Limited",
    ogDescription: "Complete IT infrastructure, networking, CCTV security, and cybersecurity solutions across Saudi Arabia",
    ogImage: "https://ramlimited.com.sa/images/services/it-security-og-image.jpg",
    
    // Twitter
    twitterTitle: "IT & Security Services Saudi Arabia | Ram Limited",
    twitterDescription: "Expert IT solutions for businesses and residential projects across Saudi Arabia",
    
    // JSON-LD Structured Data
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Service",
      "serviceType": "IT Services, Security Systems",
      "category": "Information Technology, Security",
      "provider": {
        "@type": "Organization",
        "name": "Ram Limited Contracting",
        "url": "https://ramlimited.com.sa",
        "logo": "https://ramlimited.com.sa/images/logo.jpg",
        "address": {
          "@type": "PostalAddress",
          "addressCountry": "SA",
          "addressRegion": "Riyadh Province"
        }
      },
      "areaServed": {
        "@type": "Country",
        "name": "Saudi Arabia"
      },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "IT & Security Service Packages",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Network Setup & Installation"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "CCTV & Security Systems"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Cybersecurity Solutions"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "IT Support & Maintenance"
            }
          }
        ]
      },
      "offers": {
        "@type": "AggregateOffer",
        "lowPrice": "10000",
        "highPrice": "60000",
        "priceCurrency": "SAR",
        "offerCount": "3"
      }
    },
    
    // Breadcrumb
    breadcrumb: "IT & Security Services",
    
    // FAQ Schema
    faqs: [
      {
        question: "What IT services do you provide in Saudi Arabia?",
        answer: "We provide complete IT services including network installation, CCTV security systems, server setup, cybersecurity solutions, IT support, and maintenance across Saudi Arabia."
      },
      {
        question: "Are you certified for IT and security services?",
        answer: "Yes, we are ISO 27001:2013 certified for information security management and our technicians hold certifications from leading IT and security vendors."
      },
      {
        question: "Do you offer 24/7 IT support in Saudi Arabia?",
        answer: "Yes, we provide 24/7 IT support, monitoring, and emergency troubleshooting services throughout Saudi Arabia including Riyadh, Jeddah, and Dammam."
      },
      {
        question: "How much does IT network installation cost in Saudi Arabia?",
        answer: "IT network installation starts from SAR 10,000 depending on the size of your office, number of devices, and required security features."
      },
      {
        question: "What areas in Saudi Arabia do you serve?",
        answer: "We serve all major cities in Saudi Arabia including Riyadh, Jeddah, Dammam, Khobar, Mecca, Medina, and surrounding areas."
      },
      {
        question: "Do you provide smart security and CCTV solutions?",
        answer: "Yes, we provide complete smart security solutions including CCTV installation, access control systems, alarm systems, and integration with IT networks."
      }
    ]
  },
  ar: {
    // Primary Meta Tags بالعربية
    metaTitle: "خدمات تكنولوجيا المعلومات والأمن السعودية | تركيب شبكات وكاميرات مراقبة الرياض | رام المحدودة",
    metaDescription: "خدمات تكنولوجيا معلومات احترافية، إعداد شبكات، أمن كاميرات مراقبة، وحلول أمن سيبراني في السعودية. خبراء تكنولوجيا معلومات معتمدون في الرياض، جدة، الدمام. معتمد ISO 27001.",
    metaKeywords: "خدمات تكنولوجيا معلومات السعودية, تركيب شبكات الرياض, أمن كاميرات مراقبة المملكة, حلول أمن سيبراني جدة, دعم تكنولوجيا معلومات الدمام, إعداد خوادم السعودية",
    
    // OG Tags بالعربية
    ogTitle: "خدمات تكنولوجيا معلومات وأمن احترافية في السعودية | رام المحدودة",
    ogDescription: "بنية تحتية كاملة لتكنولوجيا المعلومات، شبكات، أمن كاميرات مراقبة، وحلول أمن سيبراني في جميع أنحاء السعودية",
    ogImage: "https://ramlimited.com.sa/images/services/it-security-og-image-ar.jpg",
    
    // Twitter بالعربية
    twitterTitle: "خدمات تكنولوجيا معلومات وأمن السعودية | رام المحدودة",
    twitterDescription: "حلول تكنولوجيا معلومات احترافية للشركات والمشاريع السكنية في جميع أنحاء السعودية",
    
    // JSON-LD Structured Data بالعربية
    structuredData: {
      "@context": "https://schema.org/ar",
      "@type": "Service",
      "serviceType": "خدمات تكنولوجيا المعلومات، أنظمة الأمن",
      "category": "تكنولوجيا المعلومات، الأمن",
      "provider": {
        "@type": "Organization",
        "name": "رام المحدودة للمقاولات",
        "url": "https://ramlimited.com.sa",
        "logo": "https://ramlimited.com.sa/images/logo.jpg",
        "address": {
          "@type": "PostalAddress",
          "addressCountry": "SA",
          "addressRegion": "منطقة الرياض"
        }
      },
      "areaServed": {
        "@type": "Country",
        "name": "المملكة العربية السعودية"
      },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "باقات خدمات تكنولوجيا المعلومات والأمن",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "إعداد وتركيب الشبكات"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "أنظمة كاميرات مراقبة وأمن"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "حلول الأمن السيبراني"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "دعم وصيانة تكنولوجيا المعلومات"
            }
          }
        ]
      },
      "offers": {
        "@type": "AggregateOffer",
        "lowPrice": "10000",
        "highPrice": "60000",
        "priceCurrency": "ريال سعودي",
        "offerCount": "3"
      }
    },
    
    // Breadcrumb بالعربية
    breadcrumb: "خدمات تكنولوجيا المعلومات والأمن",
    
    // FAQ Schema بالعربية
    faqs: [
      {
        question: "ما هي خدمات تكنولوجيا المعلومات التي تقدمونها في السعودية؟",
        answer: "نقدم خدمات تكنولوجيا معلومات كاملة بما في ذلك تركيب الشبكات، أنظمة أمن كاميرات المراقبة، إعداد الخوادم، حلول الأمن السيبراني، دعم تكنولوجيا المعلومات، والصيانة في جميع أنحاء السعودية."
      },
      {
        question: "هل أنتم معتمدون لخدمات تكنولوجيا المعلومات والأمن؟",
        answer: "نعم، نحن معتمدون ISO 27001:2013 لإدارة أمن المعلومات ويحمل فنيونا شهادات من أفضل موردي تكنولوجيا المعلومات والأمن."
      },
      {
        question: "هل تقدمون دعم تكنولوجيا معلومات على مدار الساعة في السعودية؟",
        answer: "نعم، نقدم دعم تكنولوجيا معلومات، مراقبة، وخدمات استكشاف أخطاء طارئة على مدار الساعة في جميع أنحاء السعودية بما في ذلك الرياض، جدة، والدمام."
      },
      {
        question: "كم تبلغ تكلفة تركيب شبكات تكنولوجيا المعلومات في السعودية؟",
        answer: "تبدأ تكاليف تركيب شبكات تكنولوجيا المعلومات من 10,000 ريال سعودي اعتمادًا على حجم مكتبك، عدد الأجهزة، وميزات الأمن المطلوبة."
      },
      {
        question: "ما هي المناطق التي تخدمونها في السعودية؟",
        answer: "نخدم جميع المدن الرئيسية في السعودية بما في ذلك الرياض، جدة، الدمام، الخبر، مكة، المدينة، والمناطق المحيطة."
      },
      {
        question: "هل تقدمون حلول أمن ذكية وكاميرات مراقبة؟",
        answer: "نعم، نقدم حلول أمن ذكية كاملة بما في ذلك تركيب كاميرات المراقبة، أنظمة التحكم في الوصول، أنظمة إنذار، والتكامل مع شبكات تكنولوجيا المعلومات."
      }
    ]
  }
};