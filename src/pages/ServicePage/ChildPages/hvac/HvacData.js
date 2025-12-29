// src/data/services/hvac/hvacDetailsData.js

import hvac1 from '../../../../assets/images/hvac1.webp';
import hvac2 from '../../../../assets/images/hvac2.webp';
import hvac3 from '../../../../assets/images/hvac3.webp';
import hvacVideo from '../../../../assets/videos/hvac-demo.mp4';

import AccessTimeIcon from '@mui/icons-material/AccessTime';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import MilitaryTechIcon from '@mui/icons-material/MilitaryTech';
import SmartphoneIcon from '@mui/icons-material/Smartphone';

import { Zap, Crown, Shield } from "lucide-react";

// --- HERO SECTION DATA ---
export const hvacHeroData = {
  en: {
    title: "Professional HVAC Services in Saudi Arabia",
    heading: "Efficient Heating, Cooling & Ventilation Solutions",
    description: "Expert HVAC services for residential, commercial, and industrial projects across Saudi Arabia — installation, repair, and preventive maintenance for energy-efficient systems.",
    cards: [
      { heading: "Rapid Response", description: "Fast HVAC service to minimize downtime", icon: AccessTimeIcon },
      { heading: "Certified Technicians", description: "Licensed HVAC experts with years of experience", icon: AccessTimeIcon },
      { heading: "Energy Efficiency", description: "Optimized HVAC systems for lower energy bills", icon: AccessTimeIcon },
    ],
    images: [hvac1, hvac2, hvac3],
  },
  ar: {
    title: "خدمات التكييف والتهوية والتدفئة الاحترافية في المملكة العربية السعودية",
    heading: "حلول تدفئة وتبريد وتهوية فعالة",
    description: "خدمات تكييف وتهوية وتدفئة احترافية للمشاريع السكنية والتجارية والصناعية في جميع أنحاء المملكة العربية السعودية — تركيب وإصلاح وصيانة وقائية لأنظمة موفرة للطاقة.",
    cards: [
      { heading: "استجابة سريعة", description: "خدمة تكييف سريعة لتقليل وقت التوقف", icon: AccessTimeIcon },
      { heading: "فنيون معتمدون", description: "خبراء تكييف مرخصون ذوو سنوات من الخبرة", icon: AccessTimeIcon },
      { heading: "كفاءة الطاقة", description: "أنظمة تكييف محسنة لفواتير طاقة أقل", icon: AccessTimeIcon },
    ],
    images: [hvac1, hvac2, hvac3],
  }
};

// --- PROJECT DURATION DATA ---
const hvacProjectDurationData = {
  en: {
    cards: [
      { icon: <CalendarMonthIcon />, title: "AVERAGE PROJECT TIME", time: "1–5 WEEKS", color: "text-blue-600" },
      { icon: <AttachMoneyIcon />, title: "STARTING PRICE", time: "SAR 25,000", color: "text-blue-600" },
      { icon: <SmartphoneIcon />, title: "SERVICE CATEGORIES", time: "Residential / Commercial / Industrial", color: "text-[rgba(115,115,115,1)]" },
      { icon: <MilitaryTechIcon />, title: "QUALITY STANDARD", time: "ISO 9001:2015 Certified", color: "text-gray-700" },
    ],
    note: "*Final pricing depends on project scope, system type, and materials used.",
  },
  ar: {
    cards: [
      { icon: <CalendarMonthIcon />, title: "متوسط وقت المشروع", time: "1–5 أسابيع", color: "text-blue-600" },
      { icon: <AttachMoneyIcon />, title: "السعر البدائي", time: "25,000 ريال سعودي", color: "text-blue-600" },
      { icon: <SmartphoneIcon />, title: "فئات الخدمات", time: "سكني / تجاري / صناعي", color: "text-[rgba(115,115,115,1)]" },
      { icon: <MilitaryTechIcon />, title: "معيار الجودة", time: "معتمد ISO 9001:2015", color: "text-gray-700" },
    ],
    note: "*يعتمد السعر النهائي على نطاق المشروع ونوع النظام والمواد المستخدمة.",
  }
};

export default hvacProjectDurationData;

// --- CONTENT DATA ---
export const hvacContent = {
  en: {
    title: "Complete HVAC Solutions in Saudi Arabia",
    subtitle: "Professional heating, ventilation, and air conditioning services to ensure comfortable, safe, and energy-efficient indoor environments.",
    ProcessSteps: [
      { id: 1, title: "Assessment & Planning", description: "Evaluate HVAC requirements and design energy-efficient systems tailored to your space." },
      { id: 2, title: "Installation & Commissioning", description: "Certified installation of HVAC units, ductwork, and control systems." },
      { id: 3, title: "Maintenance & Optimization", description: "Scheduled maintenance and performance optimization for long-term efficiency." },
    ],
    featureLists: [
      "Licensed HVAC technicians",
      "Energy-efficient system design",
      "24/7 emergency repair services",
      "Preventive maintenance and inspections",
    ],
    caseStudy: {
      title: "Luxury Hotel HVAC Upgrade",
      location: "Riyadh, Saudi Arabia",
      summary: "Upgraded the HVAC system of a 5-star hotel, improving air quality and reducing energy consumption by 30%.",
      link: "#",
    },
  },
  ar: {
    title: "حلول تكييف وتهوية وتدفئة كاملة في المملكة العربية السعودية",
    subtitle: "خدمات تدفئة وتهوية وتكييف احترافية لضمان بيئات داخلية مريحة وآمنة وموفرة للطاقة.",
    ProcessSteps: [
      { id: 1, title: "التقييم والتخطيط", description: "تقييم متطلبات التكييف وتصميم أنظمة موفرة للطاقة مصممة خصيصًا لمساحتك." },
      { id: 2, title: "التركيب والتشغيل", description: "تركيب معتمد لوحدات التكييف وقنوات التهوية وأنظمة التحكم." },
      { id: 3, title: "الصيانة والتحسين", description: "صيانة مجدولة وتحسين الأداء لكفاءة طويلة الأمد." },
    ],
    featureLists: [
      "فنيو تكييف مرخصون",
      "تصميم نظام موفر للطاقة",
      "خدمات إصلاح طارئة على مدار الساعة",
      "صيانة وقائية وفحوصات",
    ],
    caseStudy: {
      title: "ترقية تكييف فندق فاخر",
      location: "الرياض، المملكة العربية السعودية",
      summary: "ترقية نظام التكييف في فندق 5 نجوم، وتحسين جودة الهواء وتقليل استهلاك الطاقة بنسبة 30٪.",
      link: "#",
    },
  }
};

// --- MEDIA DATA ---
export const hvacMedia = {
  en: {
    videoPlaceHolderUrl: hvacVideo,
    videoLabel: "HVAC Installation & Maintenance Demo",
    stats: [
      { value: "200+", label: "Projects Completed" },
      { value: "95%", label: "Customer Satisfaction" },
      { value: "24/7", label: "Support Available" },
    ],
  },
  ar: {
    videoPlaceHolderUrl: hvacVideo,
    videoLabel: "عرض تركيب وصيانة التكييف",
    stats: [
      { value: "200+", label: "مشروع مكتمل" },
      { value: "95%", label: "رضا العملاء" },
      { value: "24/7", label: "الدعم متاح" },
    ],
  }
};

// --- DETAILS PAGE DATA ---
export const hvacDetailsData = {
  en: {
    header: {
      title: "Comprehensive HVAC Services",
      subtitle: "End-to-end heating, ventilation, and air conditioning solutions for residential, commercial, and industrial projects in Saudi Arabia.",
    },
    scope: {
      title: "Our HVAC Expertise",
      listA: [
        "Air conditioning installation, repair, and replacement",
        "Heating system setup and preventive maintenance",
        "Ventilation design and ductwork solutions",
        "Emergency HVAC repair services",
      ],
      listB: [
        "Smart HVAC integration and automation",
        "Energy efficiency consulting",
        "Commercial HVAC maintenance contracts",
        "Preventive maintenance plans for long-term performance",
      ],
    },
    footer: {
      title: "Note",
      description: "*Pricing depends on system type, materials, and project complexity.",
    },
  },
  ar: {
    header: {
      title: "خدمات تكييف وتهوية وتدفئة شاملة",
      subtitle: "حلول تدفئة وتهوية وتكييف كاملة للمشاريع السكنية والتجارية والصناعية في المملكة العربية السعودية.",
    },
    scope: {
      title: "خبرتنا في التكييف",
      listA: [
        "تركيب وإصلاح واستبدال مكيفات الهواء",
        "إعداد نظام التدفئة والصيانة الوقائية",
        "تصميم التهوية وحلول قنوات التهوية",
        "خدمات إصلاح تكييف طارئة",
      ],
      listB: [
        "تكامل وأتمتة أنظمة التكييف الذكية",
        "استشارات كفاءة الطاقة",
        "عقود صيانة تكييف تجارية",
        "خطط صيانة وقائية لأداء طويل الأمد",
      ],
    },
    footer: {
      title: "ملاحظة",
      description: "*يعتمد السعر على نوع النظام والمواد وتعقيد المشروع.",
    },
  }
};

// --- PRICING DATA ---
export const hvacPricingData = {
  en: {
    header: {
      title: "Transparent HVAC Pricing Packages",
      subtitle: "Choose a package based on your project requirements. All prices are starting estimates and can be customized.",
    },
    estimatorData: {
      title: "Quick HVAC Cost Estimator",
      subtitle: "Instantly estimate your HVAC project cost based on system size, type, and location.",
      sizeOptions: ["50–100 m²", "101–250 m²", "251–500 m²", "500+ m²"],
      complexityOptions: ["Basic – Standard installation", "Medium – Customized setup", "Advanced – Smart system integration"],
      locationOptions: ["Riyadh Central", "Jeddah Area", "Dammam Area", "Other Regions"],
      inputDefaults: {
        projectSize: "50–100 m²",
        complexity: "Basic – Standard installation",
        location: "Riyadh Central",
      },
      importantNotes: [
        "All prices are starting estimates based on standard specifications.",
        "Final pricing depends on system complexity and materials.",
        "Site assessment required for accurate quotation.",
        "Payment terms: 30% deposit, 60% during installation, 10% on completion.",
        "Quotes valid for 30 days.",
      ],
    },
    packages: [
      {
        packageName: "Starter",
        tagline: "Basic HVAC installation",
        price: "SAR 25,000",
        startingFrom: "Starting from",
        features: ["Standard AC and heating units", "Basic ventilation", "Safety compliance", "Project supervision"],
        idealFor: "Small homes or offices",
        isPopular: false,
        icon: Zap,
      },
      {
        packageName: "Standard",
        tagline: "Complete HVAC setup",
        price: "SAR 60,000",
        startingFrom: "Starting from",
        features: ["Premium AC and heating units", "Customized ductwork", "Smart thermostat integration", "12-month warranty"],
        idealFor: "Medium offices, shops, or apartments",
        isPopular: true,
        icon: Crown,
      },
      {
        packageName: "Premium",
        tagline: "Luxury HVAC solution",
        price: "SAR 120,000",
        startingFrom: "Starting from",
        features: ["Smart HVAC integration", "Energy-efficient systems", "Extended warranty", "Priority maintenance plan"],
        idealFor: "Hotels, corporate HQs, or luxury residences",
        isPopular: false,
        icon: Shield,
      },
    ],
  },
  ar: {
    header: {
      title: "باقات تسعير تكييف شفافة",
      subtitle: "اختر باقة بناءً على متطلبات مشروعك. جميع الأسعار هي تقديرات بدائية ويمكن تخصيصها.",
    },
    estimatorData: {
      title: "مقدر تكلفة تكييف سريع",
      subtitle: "قدّر تكلفة مشروع التكييف الخاص بك على الفور بناءً على حجم النظام ونوعه وموقعه.",
      sizeOptions: ["50–100 م²", "101–250 م²", "251–500 م²", "500+ م²"],
      complexityOptions: ["أساسي – تركيب قياسي", "متوسط – إعداد مخصص", "متقدم – تكامل نظام ذكي"],
      locationOptions: ["وسط الرياض", "منطقة جدة", "منطقة الدمام", "مناطق أخرى"],
      inputDefaults: {
        projectSize: "50–100 م²",
        complexity: "أساسي – تركيب قياسي",
        location: "وسط الرياض",
      },
      importantNotes: [
        "جميع الأسعار هي تقديرات بدائية تعتمد على مواصفات قياسية.",
        "يعتمد السعر النهائي على تعقيد النظام والمواد.",
        "يُطلب تقييم الموقع للحصول على عرض أسعار دقيق.",
        "شروط الدفع: 30% دفعة مقدمة، 60% أثناء التركيب، 10% عند الانتهاء.",
        "العروض سارية لمدة 30 يومًا.",
      ],
    },
    packages: [
      {
        packageName: "بداية",
        tagline: "تركيب تكييف أساسي",
        price: "25,000 ريال سعودي",
        startingFrom: "بداية من",
        features: ["وحدات تكييف وتدفئة قياسية", "تهوية أساسية", "الامتثال للسلامة", "إشراف المشروع"],
        idealFor: "منازل أو مكاتب صغيرة",
        isPopular: false,
        icon: Zap,
      },
      {
        packageName: "قياسي",
        tagline: "إعداد تكييف كامل",
        price: "60,000 ريال سعودي",
        startingFrom: "بداية من",
        features: ["وحدات تكييف وتدفئة متميزة", "قنوات تهوية مخصصة", "تكامل منظم حرارة ذكي", "ضمان 12 شهراً"],
        idealFor: "مكاتب أو محلات أو شقق متوسطة",
        isPopular: true,
        icon: Crown,
      },
      {
        packageName: "متميز",
        tagline: "حل تكييف فاخر",
        price: "120,000 ريال سعودي",
        startingFrom: "بداية من",
        features: ["تكامل تكييف ذكي", "أنظمة موفرة للطاقة", "ضمان ممتد", "خطة صيانة بأولوية"],
        idealFor: "الفنادق، المقرات الرئيسية للشركات، أو مساكن فاخرة",
        isPopular: false,
        icon: Shield,
      },
    ],
  }
};

// --- QUALITY & TESTIMONIALS ---
export const hvacQualityData = {
  en: {
    header: {
      title: "Trusted HVAC Quality & Certified Services",
      subtitle: "Professional HVAC solutions adhering to international safety and performance standards.",
    },
    certifications: [
      { icon: "Award", title: "ISO 9001:2015", subtitle: "Quality Management System" },
      { icon: "Shield", title: "Safety Certified", subtitle: "OSHA & HSE Standards" },
      { icon: "CheckCircle", title: "Licensed HVAC Professionals", subtitle: "Municipality Approved in Saudi Arabia" },
    ],
    testimonials: {
      title: "What Our Clients Say",
      reviews: [
        { quote: "Professional team, completed installation on schedule.", name: "Ahmad Al-Faisal", title: "Project Manager", company: "Riyadh Mall" },
        { quote: "Energy-efficient and reliable HVAC solutions.", name: "Sara Al-Mutairi", title: "Operations Head", company: "Al-Noor Interiors" },
        { quote: "Highly recommend for commercial HVAC projects.", name: "Mohammed Al-Qahtani", title: "Facility Supervisor", company: "Elite Residences" },
      ],
    },
    stats: [
      { number: "200+", label: "Projects Completed" },
      { number: "95%", label: "Customer Satisfaction" },
      { number: "12+", label: "Years of Experience" },
      { number: "24/7", label: "Emergency Support" },
    ],
    cta: {
      title: "Need Expert HVAC Services?",
      subtitle: "Contact our certified HVAC team for installation, maintenance, or repair today.",
      buttonText: "Request Consultation",
      secondaryLinkText: "Explore Other Services",
    },
    contact: {
      phone: "+966 593534881",
      email: "ramlimited.sa@gmail.com",
      address: "Riyadh, Saudi Arabia",
    },
  },
  ar: {
    header: {
      title: "جودة تكييف موثوقة وخدمات معتمدة",
      subtitle: "حلول تكييف احترافية تلتزم بمعايير السلامة والأداء الدولية.",
    },
    certifications: [
      { icon: "Award", title: "ISO 9001:2015", subtitle: "نظام إدارة الجودة" },
      { icon: "Shield", title: "معتمد سلامة", subtitle: "معايير OSHA وHSE" },
      { icon: "CheckCircle", title: "محترفو تكييف مرخصون", subtitle: "معتمد من البلدية في المملكة العربية السعودية" },
    ],
    testimonials: {
      title: "ما يقوله عملاؤنا",
      reviews: [
        { quote: "فريق محترف، أكمل التركيب حسب الجدول الزمني.", name: "أحمد الفيصل", title: "مدير المشروع", company: "رياض مول" },
        { quote: "حلول تكييف موفرة للطاقة وموثوقة.", name: "سارة المطيري", title: "رئيسة العمليات", company: "ديكورات النور" },
        { quote: "موصى به بشدة لمشاريع التكييف التجارية.", name: "محمد القحطاني", title: "مشرف المرافق", company: "إيليت ريزيدنسز" },
      ],
    },
    stats: [
      { number: "200+", label: "مشروع مكتمل" },
      { number: "95%", label: "رضا العملاء" },
      { number: "12+", label: "سنوات خبرة" },
      { number: "24/7", label: "دعم طارئ" },
    ],
    cta: {
      title: "هل تحتاج إلى خدمات تكييف احترافية؟",
      subtitle: "اتصل بفريق التكييف المعتمد لدينا للتركيب أو الصيانة أو الإصلاح اليوم.",
      buttonText: "طلب استشارة",
      secondaryLinkText: "استكشف خدمات أخرى",
    },
    contact: {
      phone: "+966 593534881",
      email: "ramlimited.sa@gmail.com",
      address: "الرياض، المملكة العربية السعودية",
    },
  }
};
// Add at the end of your existing hvacDetailsData.js file

// --- SEO DATA ---
export const hvacSEODetails = {
  en: {
    // Primary Meta Tags
    metaTitle: "Professional HVAC Services Saudi Arabia | Ram Limited Contracting Riyadh",
    metaDescription: "Expert HVAC installation, repair & maintenance in Saudi Arabia. Commercial, residential & industrial heating, cooling & ventilation services in Riyadh, Jeddah, Dammam. ISO certified.",
    metaKeywords: "HVAC services Saudi Arabia, air conditioning installation Riyadh, heating repair KSA, ventilation systems Jeddah, commercial HVAC Dammam, residential cooling Saudi",
    
    // OG Tags
    ogTitle: "HVAC Services in Saudi Arabia | Ram Limited Contracting",
    ogDescription: "Professional heating, ventilation and air conditioning services across Saudi Arabia",
    ogImage: "https://ramlimited.com.sa/images/services/hvac-og-image.jpg",
    
    // Twitter
    twitterTitle: "HVAC Services Saudi Arabia | Ram Limited",
    twitterDescription: "Expert HVAC solutions for commercial, residential & industrial projects",
    
    // JSON-LD Structured Data
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Service",
      "serviceType": "HVAC Services",
      "category": "Home Improvement, Construction",
      "provider": {
        "@type": "Organization",
        "name": "Ram Limited Contracting",
        "url": "https://ramlimited.com.sa",
        "logo": "https://ramlimited.com.sa/logo.png",
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
        "name": "HVAC Service Packages",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "HVAC Installation"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "HVAC Repair"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "HVAC Maintenance"
            }
          }
        ]
      },
      "offers": {
        "@type": "AggregateOffer",
        "lowPrice": "25000",
        "highPrice": "120000",
        "priceCurrency": "SAR",
        "offerCount": "3"
      }
    },
    
    // Breadcrumb
    breadcrumb: "HVAC Services",
    
    // FAQ Schema
    faqs: [
      {
        question: "What areas in Saudi Arabia do you serve for HVAC services?",
        answer: "We provide HVAC services across Saudi Arabia including Riyadh, Jeddah, Dammam, Khobar, Mecca, Medina, and all major cities."
      },
      {
        question: "Are your HVAC technicians certified?",
        answer: "Yes, all our HVAC technicians are licensed, certified, and have extensive experience in commercial, residential, and industrial HVAC systems."
      },
      {
        question: "Do you offer emergency HVAC repair services?",
        answer: "Yes, we provide 24/7 emergency HVAC repair services across Saudi Arabia with rapid response times."
      },
      {
        question: "What types of HVAC systems do you work with?",
        answer: "We work with all types including split AC units, central air conditioning, VRV/VRF systems, chillers, and commercial HVAC systems."
      },
      {
        question: "How much does HVAC installation cost in Saudi Arabia?",
        answer: "HVAC installation costs start from SAR 25,000 depending on system type, size, and project requirements."
      }
    ]
  },
  ar: {
    metaTitle: "خدمات التكييف والتهوية والتدفئة السعودية | رام المحدودة للمقاولات الرياض",
    metaDescription: "خدمات تركيب وإصلاح وصيانة تكييف احترافية في السعودية. خدمات تدفئة وتبريد وتهوية تجارية وسكنية وصناعية في الرياض، جدة، الدمام. معتمد ISO.",
    metaKeywords: "خدمات تكييف السعودية, تركيب مكيفات الرياض, إصلاح تدفئة المملكة, أنظمة تهوية جدة, تكييف تجاري الدمام, تبريد سكني السعودية",
    
    ogTitle: "خدمات التكييف في السعودية | رام المحدودة للمقاولات",
    ogDescription: "خدمات تدفئة وتهوية وتكييف احترافية في جميع أنحاء السعودية",
    ogImage: "https://ramlimited.com.sa/images/services/hvac-og-image-ar.jpg",
    
    twitterTitle: "خدمات التكييف السعودية | رام المحدودة",
    twitterDescription: "حلول تكييف احترافية للمشاريع التجارية والسكنية والصناعية",
    
    structuredData: {
      "@context": "https://schema.org/ar",
      "@type": "Service",
      "serviceType": "خدمات التكييف",
      "category": "تحسين المنزل، البناء",
      "provider": {
        "@type": "Organization",
        "name": "رام المحدودة للمقاولات",
        "url": "https://ramlimited.com.sa",
        "logo": "https://ramlimited.com.sa/logo.png",
        "address": {
          "@type": "PostalAddress",
          "addressCountry": "SA",
          "addressRegion": "منطقة الرياض"
        }
      },
      "areaServed": {
        "@type": "Country",
        "name": "المملكة العربية السعودية"
      }
    },
    
    breadcrumb: "خدمات التكييف",
    
    faqs: [
      {
        question: "ما هي المناطق التي تخدمونها في السعودية لخدمات التكييف؟",
        answer: "نقدم خدمات تكييف في جميع أنحاء السعودية بما في ذلك الرياض، جدة، الدمام، الخبر، مكة، المدينة، وجميع المدن الرئيسية."
      },
      {
        question: "هل فنيو التكييف معتمدون؟",
        answer: "نعم، جميع فنيي التكييف لدينا مرخصون ومعتمدون ولديهم خبرة واسعة في أنظمة التكييف التجارية والسكنية والصناعية."
      },
      {
        question: "هل تقدمون خدمات إصلاح تكييف طارئة؟",
        answer: "نعم، نقدم خدمات إصلاح تكييف طارئة على مدار الساعة في جميع أنحاء السعودية بأوقات استجابة سريعة."
      },
      {
        question: "ما هي أنواع أنظمة التكييف التي تعملون بها؟",
        answer: "نعمل مع جميع الأنواع بما في ذلك وحدات المكيفات المنفصلة، تكييف مركزي، أنظمة VRV/VRF، المبردات، وأنظمة التكييف التجارية."
      },
      {
        question: "كم تبلغ تكلفة تركيب التكييف في السعودية؟",
        answer: "تبدأ تكاليف تركيب التكييف من 25,000 ريال سعودي اعتمادًا على نوع النظام والحجم ومتطلبات المشروع."
      }
    ]
  }
};