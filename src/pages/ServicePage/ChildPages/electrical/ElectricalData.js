// src/data/services/electrical/electricalDetailsData.js

import electrical1 from '../../../../assets/images/electrical1.webp';
import electrical2 from '../../../../assets/images/electrical2.webp';
import electrical3 from '../../../../assets/images/electrical3.webp';
import ElectricalVideo from '../../../../assets/videos/Electrical-demo-mp4.mp4';

import AccessTimeIcon from '@mui/icons-material/AccessTime';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import MilitaryTechIcon from '@mui/icons-material/MilitaryTech';
import SmartphoneIcon from '@mui/icons-material/Smartphone';

import { Zap, Crown, Shield } from "lucide-react";

// --- HERO SECTION DATA ---
export const electricalHeroData = {
  en: {
    title: "Professional Electrical Services in Saudi Arabia",
    heading: "Safe, Efficient & Reliable Electrical Solutions",
    description: "We provide licensed and certified electrical services for residential, commercial, and industrial projects across Saudi Arabia, ensuring safety, efficiency, and long-term reliability.",
    cards: [
      { heading: "Fast Response", description: "Immediate assistance for electrical emergencies across Riyadh, Jeddah, Dammam, and other regions.", icon: AccessTimeIcon },
      { heading: "Certified Electricians", description: "Licensed professionals ensuring compliance with local and international standards.", icon: AccessTimeIcon },
      { heading: "Safety First", description: "All projects follow strict safety protocols for complete protection and reliability.", icon: AccessTimeIcon },
    ],
    images: [electrical1, electrical2, electrical3],
  },
  ar: {
    title: "خدمات كهربائية احترافية في المملكة العربية السعودية",
    heading: "حلول كهربائية آمنة وفعالة وموثوقة",
    description: "نقدم خدمات كهربائية مرخصة ومعتمدة للمشاريع السكنية والتجارية والصناعية في جميع أنحاء المملكة العربية السعودية، مع ضمان السلامة والكفاءة والموثوقية على المدى الطويل.",
    cards: [
      { heading: "استجابة سريعة", description: "مساعدة فورية لحالات الطوارئ الكهربائية في الرياض وجدة والدمام والمناطق الأخرى.", icon: AccessTimeIcon },
      { heading: "كهربائيون معتمدون", description: "محترفون مرخصون يضمنون الامتثال للمعايير المحلية والدولية.", icon: AccessTimeIcon },
      { heading: "السلامة أولاً", description: "جميع المشاريع تتبع بروتوكولات سلامة صارمة للحماية والموثوقية الكاملة.", icon: AccessTimeIcon },
    ],
    images: [electrical1, electrical2, electrical3],
  }
};

// --- PROJECT DURATION DATA ---
const electricalProjectDurationData = {
  en: {
    cards: [
      { icon: <CalendarMonthIcon />, title: "AVERAGE PROJECT TIME", time: "1–4 WEEKS", color: "text-yellow-600" },
      { icon: <AttachMoneyIcon />, title: "STARTING PRICE", time: "SAR 20,000", color: "text-yellow-600" },
      { icon: <SmartphoneIcon />, title: "SERVICE CATEGORIES", time: "Residential / Commercial / Industrial", color: "text-[rgba(115,115,115,1)]" },
      { icon: <MilitaryTechIcon />, title: "QUALITY STANDARD", time: "ISO 9001:2015 Certified", color: "text-gray-700" },
    ],
    note: "*Pricing and timeline depend on project scope, materials, and specifications.",
  },
  ar: {
    cards: [
      { icon: <CalendarMonthIcon />, title: "متوسط وقت المشروع", time: "1–4 أسابيع", color: "text-yellow-600" },
      { icon: <AttachMoneyIcon />, title: "السعر البدائي", time: "20,000 ريال سعودي", color: "text-yellow-600" },
      { icon: <SmartphoneIcon />, title: "فئات الخدمات", time: "سكني / تجاري / صناعي", color: "text-[rgba(115,115,115,1)]" },
      { icon: <MilitaryTechIcon />, title: "معيار الجودة", time: "معتمد ISO 9001:2015", color: "text-gray-700" },
    ],
    note: "*يعتمد السعر والجدول الزمني على نطاق المشروع والمواد والمواصفات.",
  }
};

export default electricalProjectDurationData;

// --- CONTENT DATA ---
export const electricalContent = {
  en: {
    title: "Complete Electrical Solutions in Saudi Arabia",
    subtitle: "Licensed electricians providing installation, maintenance, and repair services for homes, offices, and commercial buildings.",
    ProcessSteps: [
      { id: 1, title: "Consultation & Planning", description: "We evaluate your electrical needs and design tailored solutions." },
      { id: 2, title: "Installation & Wiring", description: "Professional installation of wiring, panels, lighting, and smart systems." },
      { id: 3, title: "Testing & Quality Assurance", description: "All systems tested for safety, efficiency, and compliance with Saudi regulations." },
    ],
    featureLists: [
      "Certified and licensed electricians",
      "High-quality electrical components",
      "24/7 emergency support and maintenance",
      "Energy-efficient and safe installations",
    ],
    caseStudy: {
      title: "Corporate Office Electrical Upgrade",
      location: "Riyadh, Saudi Arabia",
      summary: "Upgraded electrical infrastructure for a 10-story office building, enhancing efficiency and reliability.",
      link: "#",
    },
  },
  ar: {
    title: "حلول كهربائية كاملة في المملكة العربية السعودية",
    subtitle: "كهربائيون مرخصون يقدمون خدمات التركيب والصيانة والإصلاح للمنازل والمكاتب والمباني التجارية.",
    ProcessSteps: [
      { id: 1, title: "الاستشارة والتخطيط", description: "نقوم بتقييم احتياجاتك الكهربائية وتصميم حلول مخصصة." },
      { id: 2, title: "التركيب والتمديدات", description: "تركيب احترافي للتمديدات واللوحات والإضاءة والأنظمة الذكية." },
      { id: 3, title: "الفحص وضمان الجودة", description: "جميع الأنظمة يتم فحصها للسلامة والكفاءة والامتثال للوائح السعودية." },
    ],
    featureLists: [
      "كهربائيون معتمدون ومرخصون",
      "مكونات كهربائية عالية الجودة",
      "دعم وصيانة طارئة على مدار الساعة",
      "تركيبات موفرة للطاقة وآمنة",
    ],
    caseStudy: {
      title: "ترقية كهرباء مقر شركة",
      location: "الرياض، المملكة العربية السعودية",
      summary: "ترقية البنية التحتية الكهربائية لمبنى مكتبي مكون من 10 طوابق، مما يعزز الكفاءة والموثوقية.",
      link: "#",
    },
  }
};

// --- MEDIA DATA ---
export const electricalMedia = {
  en: {
    videoPlaceHolderUrl: ElectricalVideo,
    videoLabel: "Electrical Project Demo",
    stats: [
      { value: "180+", label: "Projects Completed" },
      { value: "97%", label: "Client Satisfaction" },
      { value: "24/7", label: "Support Available" },
    ],
  },
  ar: {
    videoPlaceHolderUrl: ElectricalVideo,
    videoLabel: "عرض مشروع كهربائي",
    stats: [
      { value: "180+", label: "مشروع مكتمل" },
      { value: "97%", label: "رضا العملاء" },
      { value: "24/7", label: "الدعم متاح" },
    ],
  }
};

// --- DETAILS PAGE DATA ---
export const electricalDetailsData = {
  en: {
    header: {
      title: "Comprehensive Electrical Services in Saudi Arabia",
      subtitle: "End-to-end electrical solutions for homes, offices, and commercial projects, delivered safely and efficiently by certified electricians.",
    },
    scope: {
      title: "Our Electrical Expertise",
      listA: [
        "Electrical wiring and installation for residential and commercial buildings",
        "Circuit breaker panels, upgrades, and maintenance",
        "Lighting system design and installation",
        "Emergency electrical repairs and troubleshooting",
      ],
      listB: [
        "Smart home system integration",
        "Commercial & industrial electrical services",
        "Preventive maintenance checks and energy efficiency consulting",
        "High-quality workmanship and certified installations",
      ],
    },
    footer: {
      title: "Note",
      description: "*Final pricing and project duration may vary depending on project scope, materials, and complexity.",
    },
  },
  ar: {
    header: {
      title: "خدمات كهربائية شاملة في المملكة العربية السعودية",
      subtitle: "حلول كهربائية كاملة للمنازل والمكاتب والمشاريع التجارية، يتم تقديمها بأمان وكفاءة من قبل كهربائيين معتمدين.",
    },
    scope: {
      title: "خبرتنا الكهربائية",
      listA: [
        "تمديدات وتركيبات كهربائية للمباني السكنية والتجارية",
        "لوحات قواطع الدائرة والترقيات والصيانة",
        "تصميم وتركيب أنظمة الإضاءة",
        "إصلاحات كهربائية طارئة واستكشاف الأخطاء وإصلاحها",
      ],
      listB: [
        "تكامل أنظمة المنزل الذكي",
        "خدمات كهربائية تجارية وصناعية",
        "فحوصات صيانة وقائية واستشارات كفاءة الطاقة",
        "إتقان عمل عالي الجودة وتركيبات معتمدة",
      ],
    },
    footer: {
      title: "ملاحظة",
      description: "*قد يختلف السعر النهائي ومدة المشروع اعتمادًا على نطاق المشروع والمواد والتعقيد.",
    },
  }
};

// --- PRICING DATA ---
export const electricalPricingData = {
  en: {
    header: {
      title: "Transparent Electrical Pricing Packages",
      subtitle: "Explore flexible packages designed for residential, commercial, and industrial electrical projects.",
    },
    estimatorData: {
      title: "Quick Electrical Cost Estimator",
      subtitle: "Estimate costs based on project size, complexity, and location in Saudi Arabia.",
      sizeOptions: ["50–100 m²", "101–250 m²", "251–500 m²", "500+ m²"],
      complexityOptions: ["Basic wiring", "Standard installations", "Advanced/custom solutions"],
      locationOptions: ["Riyadh Central", "Jeddah Area", "Dammam Area", "Other Regions"],
      inputDefaults: {
        projectSize: "50–100 m²",
        complexity: "Basic wiring",
        location: "Riyadh Central",
      },
      importantNotes: [
        "All prices are starting estimates based on standard specifications.",
        "Final pricing depends on materials, complexity, and site conditions.",
        "Site inspection is required for accurate quotations.",
        "Payment terms: 30% deposit, progress payments, 10% retention.",
        "Quotes are valid for 30 days from issue date.",
      ],
    },
    packages: [
      {
        packageName: "Starter",
        tagline: "Basic electrical setup",
        price: "SAR 20,000",
        startingFrom: "Starting from",
        features: ["Basic wiring", "Standard fixtures", "Safety compliance", "Project management"],
        idealFor: "Small offices or homes",
        isPopular: false,
        icon: Zap,
      },
      {
        packageName: "Standard",
        tagline: "Full electrical installation",
        price: "SAR 50,000",
        startingFrom: "Starting from",
        features: ["Premium wiring", "Lighting design", "HVAC integration", "12-month warranty"],
        idealFor: "Medium offices or retail spaces",
        isPopular: true,
        icon: Crown,
      },
      {
        packageName: "Premium",
        tagline: "Turnkey electrical solution",
        price: "SAR 100,000",
        startingFrom: "Starting from",
        features: ["Smart systems integration", "Advanced safety features", "Extended warranty", "Priority scheduling"],
        idealFor: "Corporate headquarters, luxury homes",
        isPopular: false,
        icon: Shield,
      },
    ],
  },
  ar: {
    header: {
      title: "باقات تسعير كهربائية شفافة",
      subtitle: "استكشف الباقات المرنة المصممة للمشاريع الكهربائية السكنية والتجارية والصناعية.",
    },
    estimatorData: {
      title: "مقدر تكلفة كهربائية سريع",
      subtitle: "تقدير التكاليف بناءً على حجم المشروع وتعقيده وموقعه في المملكة العربية السعودية.",
      sizeOptions: ["50–100 م²", "101–250 م²", "251–500 م²", "500+ م²"],
      complexityOptions: ["تمديدات أساسية", "تركيبات قياسية", "حلول متقدمة/مخصصة"],
      locationOptions: ["وسط الرياض", "منطقة جدة", "منطقة الدمام", "مناطق أخرى"],
      inputDefaults: {
        projectSize: "50–100 م²",
        complexity: "تمديدات أساسية",
        location: "وسط الرياض",
      },
      importantNotes: [
        "جميع الأسعار هي تقديرات بدائية تعتمد على مواصفات قياسية.",
        "يعتمد السعر النهائي على المواد والتعقيد وظروف الموقع.",
        "يُطلب الفحص في الموقع للحصول على عروض أسعار دقيقة.",
        "شروط الدفع: 30% دفعة مقدمة، دفعات مرحلية، 10% استبقاء.",
        "العروض سارية لمدة 30 يومًا من تاريخ الإصدار.",
      ],
    },
    packages: [
      {
        packageName: "بداية",
        tagline: "إعداد كهربائي أساسي",
        price: "20,000 ريال سعودي",
        startingFrom: "بداية من",
        features: ["تمديدات أساسية", "تركيبات قياسية", "الامتثال للسلامة", "إدارة المشروع"],
        idealFor: "مكاتب صغيرة أو منازل",
        isPopular: false,
        icon: Zap,
      },
      {
        packageName: "قياسي",
        tagline: "تركيب كهربائي كامل",
        price: "50,000 ريال سعودي",
        startingFrom: "بداية من",
        features: ["تمديدات متميزة", "تصميم إضاءة", "تكامل التكييف", "ضمان 12 شهراً"],
        idealFor: "مكاتب متوسطة أو مساحات تجارية",
        isPopular: true,
        icon: Crown,
      },
      {
        packageName: "متميز",
        tagline: "حل كهربائي مفتاح باليد",
        price: "100,000 ريال سعودي",
        startingFrom: "بداية من",
        features: ["تكامل الأنظمة الذكية", "ميزات أمان متقدمة", "ضمان ممتد", "جدولة بأولوية"],
        idealFor: "المقرات الرئيسية للشركات، منازل فاخرة",
        isPopular: false,
        icon: Shield,
      },
    ],
  }
};

// --- QUALITY & TESTIMONIALS ---
export const electricalQualityData = {
  en: {
    header: {
      title: "Trusted Electrical Experts in Saudi Arabia",
      subtitle: "Certified, licensed, and experienced electricians ensuring high-quality service.",
    },
    certifications: [
      { icon: "Award", title: "ISO 9001:2015", subtitle: "Quality Management System" },
      { icon: "Shield", title: "Safety Certified", subtitle: "OSHA & HSE Standards" },
      { icon: "CheckCircle", title: "Licensed Electricians", subtitle: "Municipality Approved in Saudi Arabia" },
    ],
    testimonials: {
      title: "What Our Clients Say",
      reviews: [
        { quote: "The electrical team was fast and professional.", name: "Ahmad Al-Faisal", title: "Project Manager", company: "Riyadh Mall" },
        { quote: "Excellent service quality and safety compliance.", name: "Sara Al-Mutairi", title: "Operations Head", company: "Al-Noor Interiors" },
        { quote: "Reliable and responsive — highly recommended.", name: "Mohammed Al-Qahtani", title: "Facility Supervisor", company: "Elite Residences" },
      ],
    },
    stats: [
      { number: "180+", label: "Projects Completed" },
      { number: "97%", label: "Customer Satisfaction" },
      { number: "10+", label: "Years of Experience" },
      { number: "24/7", label: "Emergency Support" },
    ],
    cta: {
      title: "Need Professional Electrical Services?",
      subtitle: "Contact us today for inspection, installation, and maintenance services across Saudi Arabia.",
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
      title: "خبراء كهرباء موثوقون في المملكة العربية السعودية",
      subtitle: "كهربائيون معتمدون ومرخصون وذوو خبرة يضمنون خدمة عالية الجودة.",
    },
    certifications: [
      { icon: "Award", title: "ISO 9001:2015", subtitle: "نظام إدارة الجودة" },
      { icon: "Shield", title: "معتمد سلامة", subtitle: "معايير OSHA وHSE" },
      { icon: "CheckCircle", title: "كهربائيون مرخصون", subtitle: "معتمد من البلدية في المملكة العربية السعودية" },
    ],
    testimonials: {
      title: "ما يقوله عملاؤنا",
      reviews: [
        { quote: "كان فريق الكهرباء سريعًا واحترافيًا.", name: "أحمد الفيصل", title: "مدير المشروع", company: "رياض مول" },
        { quote: "جودة خدمة ممتازة والامتثال للسلامة.", name: "سارة المطيري", title: "رئيسة العمليات", company: "ديكورات النور" },
        { quote: "موثوق وسريع الاستجابة — موصى به بشدة.", name: "محمد القحطاني", title: "مشرف المرافق", company: "إيليت ريزيدنسز" },
      ],
    },
    stats: [
      { number: "180+", label: "مشروع مكتمل" },
      { number: "97%", label: "رضا العملاء" },
      { number: "10+", label: "سنوات خبرة" },
      { number: "24/7", label: "دعم طارئ" },
    ],
    cta: {
      title: "هل تحتاج إلى خدمات كهربائية احترافية؟",
      subtitle: "اتصل بنا اليوم لخدمات الفحص والتركيب والصيانة في جميع أنحاء المملكة العربية السعودية.",
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
// Add this at the end of your src/data/services/electrical/electricalDetailsData.js file

// --- SEO DATA ---
export const electricalSEODetails = {
  en: {
    // Primary Meta Tags
    metaTitle: "Electrical Services Saudi Arabia | Licensed Electricians Riyadh | Ram Limited Contracting",
    metaDescription: "Professional electrical services in Saudi Arabia. Licensed electricians for residential, commercial & industrial wiring, installation & repair in Riyadh, Jeddah, Dammam. ISO 9001 certified.",
    metaKeywords: "electrical services Saudi Arabia, licensed electricians Riyadh, wiring installation KSA, electrical contractors Jeddah, panel upgrades Dammam, commercial electrical Saudi Arabia",
    
    // OG Tags
    ogTitle: "Professional Electrical Services in Saudi Arabia | Ram Limited",
    ogDescription: "Complete electrical wiring, installation, and repair services by licensed electricians across Saudi Arabia",
    ogImage: "https://ramlimited.com.sa/images/services/electrical-og-image.jpg",
    
    // Twitter
    twitterTitle: "Electrical Services Saudi Arabia | Ram Limited",
    twitterDescription: "Licensed electrical contractors for commercial, residential & industrial projects across Saudi Arabia",
    
    // JSON-LD Structured Data
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Service",
      "serviceType": "Electrical Services",
      "category": "Construction, Electrical",
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
        "name": "Electrical Service Packages",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Electrical Wiring & Installation"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Electrical Panel Upgrades"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Lighting System Installation"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Emergency Electrical Repair"
            }
          }
        ]
      },
      "offers": {
        "@type": "AggregateOffer",
        "lowPrice": "20000",
        "highPrice": "100000",
        "priceCurrency": "SAR",
        "offerCount": "3"
      }
    },
    
    // Breadcrumb
    breadcrumb: "Electrical Services",
    
    // FAQ Schema
    faqs: [
      {
        question: "Are your electricians licensed and certified in Saudi Arabia?",
        answer: "Yes, all our electricians are licensed by the Saudi authorities, certified, and have extensive experience in residential, commercial, and industrial electrical work across Saudi Arabia."
      },
      {
        question: "What electrical services do you provide in Saudi Arabia?",
        answer: "We provide complete electrical services including wiring installation, panel upgrades, lighting systems, emergency repairs, smart home integration, and electrical maintenance throughout Saudi Arabia."
      },
      {
        question: "Do you provide 24/7 emergency electrical services in Saudi Arabia?",
        answer: "Yes, we offer 24/7 emergency electrical repair services across major cities in Saudi Arabia including Riyadh, Jeddah, and Dammam with rapid response times."
      },
      {
        question: "How much does electrical wiring cost in Saudi Arabia?",
        answer: "Electrical wiring costs start from SAR 20,000 for basic installations and can go up to SAR 100,000+ for complete commercial electrical systems, depending on the project size and specifications."
      },
      {
        question: "What areas in Saudi Arabia do you serve?",
        answer: "We serve all major cities in Saudi Arabia including Riyadh, Jeddah, Dammam, Khobar, Mecca, Medina, and surrounding areas with our professional electrical services."
      },
      {
        question: "Do you handle electrical approvals and municipality permits?",
        answer: "Yes, we manage complete electrical approvals including drawings submission, municipality inspections, and obtaining final completion certificates for all our electrical projects in Saudi Arabia."
      },
      {
        question: "What types of electrical systems do you work with?",
        answer: "We work with all electrical systems including residential wiring, commercial distribution panels, industrial electrical systems, lighting controls, smart home automation, and solar electrical integration."
      }
    ]
  },
  ar: {
    // Primary Meta Tags بالعربية
    metaTitle: "خدمات كهربائية السعودية | كهربائيون مرخصون الرياض | رام المحدودة للمقاولات",
    metaDescription: "خدمات كهربائية احترافية في السعودية. كهربائيون مرخصون للتمديدات والتركيبات والإصلاحات السكنية والتجارية والصناعية في الرياض، جدة، الدمام. معتمد ISO 9001.",
    metaKeywords: "خدمات كهربائية السعودية, كهربائيون مرخصون الرياض, تركيب تمديدات المملكة, مقاولو كهرباء جدة, ترقية لوحات الدمام, كهرباء تجارية السعودية",
    
    // OG Tags بالعربية
    ogTitle: "خدمات كهربائية احترافية في السعودية | رام المحدودة",
    ogDescription: "خدمات تمديدات وتركيبات وإصلاحات كهربائية كاملة من قبل كهربائيين مرخصين في جميع أنحاء السعودية",
    ogImage: "https://ramlimited.com.sa/images/services/electrical-og-image-ar.jpg",
    
    // Twitter بالعربية
    twitterTitle: "خدمات كهربائية السعودية | رام المحدودة",
    twitterDescription: "مقاولو كهرباء مرخصون للمشاريع التجارية والسكنية والصناعية في جميع أنحاء السعودية",
    
    // JSON-LD Structured Data بالعربية
    structuredData: {
      "@context": "https://schema.org/ar",
      "@type": "Service",
      "serviceType": "خدمات كهربائية",
      "category": "بناء، كهرباء",
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
        "name": "باقات الخدمات الكهربائية",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "تمديدات وتركيبات كهربائية"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "ترقية لوحات كهربائية"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "تركيب أنظمة إضاءة"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "إصلاحات كهربائية طارئة"
            }
          }
        ]
      },
      "offers": {
        "@type": "AggregateOffer",
        "lowPrice": "20000",
        "highPrice": "100000",
        "priceCurrency": "ريال سعودي",
        "offerCount": "3"
      }
    },
    
    // Breadcrumb بالعربية
    breadcrumb: "خدمات كهربائية",
    
    // FAQ Schema بالعربية
    faqs: [
      {
        question: "هل كهربائيكم مرخصون ومعتمدون في السعودية؟",
        answer: "نعم، جميع كهربائينا مرخصون من الجهات السعودية المختصة، ومعتمدون، ولديهم خبرة واسعة في الأعمال الكهربائية السكنية والتجارية والصناعية في جميع أنحاء السعودية."
      },
      {
        question: "ما هي الخدمات الكهربائية التي تقدمونها في السعودية؟",
        answer: "نقدم خدمات كهربائية كاملة بما في ذلك تركيب التمديدات، ترقية اللوحات الكهربائية، أنظمة الإضاءة، إصلاحات الطوارئ، تكامل المنزل الذكي، وصيانة كهربائية في جميع أنحاء السعودية."
      },
      {
        question: "هل تقدمون خدمات كهربائية طارئة على مدار الساعة في السعودية؟",
        answer: "نعم، نقدم خدمات إصلاح كهربائية طارئة على مدار الساعة في المدن الرئيسية في السعودية بما في ذلك الرياض، جدة، والدمام بأوقات استجابة سريعة."
      },
      {
        question: "كم تبلغ تكلفة التمديدات الكهربائية في السعودية؟",
        answer: "تبدأ تكاليف التمديدات الكهربائية من 20,000 ريال سعودي للتركيبات الأساسية ويمكن أن تصل إلى 100,000+ ريال سعودي لأنظمة كهربائية تجارية كاملة، اعتمادًا على حجم المشروع والمواصفات."
      },
      {
        question: "ما هي المناطق التي تخدمونها في السعودية؟",
        answer: "نخدم جميع المدن الرئيسية في السعودية بما في ذلك الرياض، جدة، الدمام، الخبر، مكة، المدينة، والمناطق المحيطة بخدماتنا الكهربائية الاحترافية."
      },
      {
        question: "هل تتعاملون مع الموافقات الكهربائية وتراخيص البلدية؟",
        answer: "نعم، ندير الموافقات الكهربائية الكاملة بما في ذلك تقديم الرسومات، فحوصات البلدية، والحصول على شهادات الإنجاز النهائية لجميع مشاريعنا الكهربائية في السعودية."
      },
      {
        question: "ما هي أنواع الأنظمة الكهربائية التي تعملون بها؟",
        answer: "نعمل مع جميع الأنظمة الكهربائية بما في ذلك التمديدات السكنية، لوحات التوزيع التجارية، الأنظمة الكهربائية الصناعية، أنظمة التحكم في الإضاءة، أتمتة المنزل الذكي، وتكامل الكهرباء الشمسية."
      }
    ]
  }
};