// src/data/services/carpentry/carpentryDetailsData.js

import carpentry1 from '../../../../assets/images/Carpentry1.jpg';
import carpentry2 from '../../../../assets/images/Carpentry2.jpg';
import carpentry3 from '../../../../assets/images/Carpentry3.jpg';
import carpentryVideo from '../../../../assets/videos/Carpenter-demo-mp4.mp4';

import AccessTimeIcon from '@mui/icons-material/AccessTime';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import MilitaryTechIcon from '@mui/icons-material/MilitaryTech';
import CarpenterIcon from '@mui/icons-material/Carpenter';

import { Hammer, Shield, Wrench } from "lucide-react";

// --- HERO SECTION DATA ---
export const carpentryHeroData = {
  en: {
    title: "Premium Carpentry Services in Saudi Arabia",
    heading: "Expert Carpentry Solutions: Custom Furniture, Cabinetry & Woodwork",
    description: "Professional carpentry services for homes, offices, and commercial spaces across Saudi Arabia. Custom furniture, cabinetry, decorative woodwork, and maintenance by certified carpenters.",
    cards: [
      { heading: "Expert Craftsmanship", description: "High-quality woodworking for homes, offices, and commercial projects", icon: AccessTimeIcon },
      { heading: "Custom Designs", description: "Tailored furniture and cabinetry to match your style and space", icon: CarpenterIcon },
      { heading: "Reliable Service", description: "Timely delivery, installation, and 24/7 support across Saudi Arabia", icon: MilitaryTechIcon },
    ],
    images: [carpentry1, carpentry2, carpentry3],
  },
  ar: {
    title: "خدمات النجارة المتميزة في المملكة العربية السعودية",
    heading: "حلول النجارة الاحترافية: أثاث مخصص، خزائن وأعمال خشبية",
    description: "خدمات نجارة احترافية للمنازل والمكاتب والمساحات التجارية في جميع أنحاء المملكة العربية السعودية. أثاث مخصص، خزائن، أعمال خشبية زخرفية، وصيانة بواسطة نجارين معتمدين.",
    cards: [
      { heading: "إتقان حرفي", description: "أعمال خشبية عالية الجودة للمنازل والمكاتب والمشاريع التجارية", icon: AccessTimeIcon },
      { heading: "تصاميم مخصصة", description: "أثاث وخزائن مصممة خصيصاً لتتناسب مع ذوقك ومساحتك", icon: CarpenterIcon },
      { heading: "خدمة موثوقة", description: "تسليم في الوقت المحدد، تركيب، ودعم على مدار الساعة في جميع أنحاء المملكة", icon: MilitaryTechIcon },
    ],
    images: [carpentry1, carpentry2, carpentry3],
  }
};

// --- PROJECT DURATION DATA ---
const carpentryProjectDurationData = {
  en: {
    cards: [
      { icon: <CalendarMonthIcon />, title: "AVERAGE PROJECT TIME", time: "1–6 WEEKS", color: "text-blue-600" },
      { icon: <AttachMoneyIcon />, title: "STARTING PRICE", time: "SAR 10,000", color: "text-blue-600" },
      { icon: <Hammer />, title: "SERVICE CATEGORIES", time: "Furniture / Cabinetry / Decorative Woodwork", color: "text-[rgba(115,115,115,1)]" },
      { icon: <MilitaryTechIcon />, title: "QUALITY STANDARD", time: "ISO 9001:2015 Certified", color: "text-gray-700" },
    ],
    note: "*Pricing varies depending on materials, design complexity, and project size.",
  },
  ar: {
    cards: [
      { icon: <CalendarMonthIcon />, title: "متوسط وقت المشروع", time: "1–6 أسابيع", color: "text-blue-600" },
      { icon: <AttachMoneyIcon />, title: "السعر البدائي", time: "10,000 ريال سعودي", color: "text-blue-600" },
      { icon: <Hammer />, title: "فئات الخدمات", time: "أثاث / خزائن / أعمال خشبية زخرفية", color: "text-[rgba(115,115,115,1)]" },
      { icon: <MilitaryTechIcon />, title: "معيار الجودة", time: "معتمد ISO 9001:2015", color: "text-gray-700" },
    ],
    note: "*يختلف السعر حسب المواد وتعقيد التصميم وحجم المشروع.",
  }
};

export default carpentryProjectDurationData;

// --- CONTENT DATA ---
export const carpentryContent = {
  en: {
    title: "Complete Carpentry Solutions in Saudi Arabia",
    subtitle: "From custom furniture to decorative woodwork, we provide professional carpentry services for homes, offices, and commercial spaces.",
    ProcessSteps: [
      { id: 1, title: "Design Consultation", description: "We analyze your needs and create a custom carpentry design plan." },
      { id: 2, title: "Material Selection", description: "Select high-quality wood, finishes, and hardware for durability and aesthetics." },
      { id: 3, title: "Construction & Installation", description: "Certified carpenters execute your project on time with precise craftsmanship." },
    ],
    featureLists: [
      "Custom furniture and cabinetry solutions",
      "Premium wood selection and finishes",
      "24/7 customer support",
      "Maintenance & repair services for all carpentry projects",
    ],
    caseStudy: {
      title: "Luxury Home Cabinetry & Furniture",
      location: "Riyadh, Saudi Arabia",
      summary: "Designed and installed custom cabinetry and furniture for a luxury villa, optimizing space and interior aesthetics.",
      link: "#",
    },
  },
  ar: {
    title: "حلول النجارة الشاملة في المملكة العربية السعودية",
    subtitle: "من الأثاث المخصص إلى الأعمال الخشبية الزخرفية، نقدم خدمات نجارة احترافية للمنازل والمكاتب والمساحات التجارية.",
    ProcessSteps: [
      { id: 1, title: "استشارة التصميم", description: "نحلل احتياجاتك ونضع خطة تصميم نجارة مخصصة." },
      { id: 2, title: "اختيار المواد", description: "اختيار خشب عالي الجودة، تشطيبات، وأدوات للتحمل والجمالية." },
      { id: 3, title: "البناء والتركيب", description: "يقوم النجارون المعتمدون بتنفيذ مشروعك في الوقت المحدد بإتقان دقيق." },
    ],
    featureLists: [
      "حلول أثاث وخزائن مخصصة",
      "اختيار خشب وتشطيبات متميزة",
      "دعم عملاء على مدار الساعة",
      "خدمات صيانة وإصلاح لجميع مشاريع النجارة",
    ],
    caseStudy: {
      title: "خزائن وأثاث فيلا فاخرة",
      location: "الرياض، المملكة العربية السعودية",
      summary: "تصميم وتركيب خزائن وأثاث مخصصة لفيلا فاخرة، تحسين المساحة والجماليات الداخلية.",
      link: "#",
    },
  }
};

// --- MEDIA DATA ---
export const carpentryMedia = {
  en: {
    videoPlaceHolderUrl: carpentryVideo,
    videoLabel: "Professional Carpentry Projects Demo",
    stats: [
      { value: "120+", label: "Projects Completed" },
      { value: "95%", label: "Client Satisfaction" },
      { value: "24/7", label: "Support Availability" },
    ],
  },
  ar: {
    videoPlaceHolderUrl: carpentryVideo,
    videoLabel: "عرض مشاريع النجارة الاحترافية",
    stats: [
      { value: "120+", label: "مشروع مكتمل" },
      { value: "95%", label: "رضا العملاء" },
      { value: "24/7", label: "توفر الدعم" },
    ],
  }
};

// --- DETAILS PAGE DATA ---
export const carpentryDetailsData = {
  en: {
    header: {
      title: "Comprehensive Carpentry Services in Saudi Arabia",
      subtitle: "Custom solutions for residential, commercial, and office carpentry projects.",
    },
    scope: {
      title: "Our Expertise Covers",
      listA: [
        "Custom furniture design & construction",
        "Cabinetry & storage solutions",
        "Decorative woodwork & finishing",
        "Wood repair and restoration",
      ],
      listB: [
        "Project planning & consultation",
        "Emergency maintenance & repair",
        "Material selection & recommendation",
        "High-quality craftsmanship by certified carpenters",
      ],
    },
    footer: {
      title: "Note",
      description: "*Project duration and pricing vary based on materials, design, and scale of work.",
    },
  },
  ar: {
    header: {
      title: "خدمات النجارة الشاملة في المملكة العربية السعودية",
      subtitle: "حلول مخصصة لمشاريع النجارة السكنية والتجارية والمكتبية.",
    },
    scope: {
      title: "تشمل خبرتنا",
      listA: [
        "تصميم وبناء أثاث مخصص",
        "حلول خزائن وتخزين",
        "أعمال خشبية زخرفية وتشطيبات",
        "إصلاح وترميم الأخشاب",
      ],
      listB: [
        "تخطيط المشروع والاستشارة",
        "الصيانة والإصلاح الطارئ",
        "اختيار المواد والتوصية بها",
        "إتقان حرفي عالي الجودة بواسطة نجارين معتمدين",
      ],
    },
    footer: {
      title: "ملاحظة",
      description: "*يختلف وقت المشروع والسعر حسب المواد والتصميم ونطاق العمل.",
    },
  }
};

// --- PRICING DATA ---
export const carpentryPricingData = {
  en: {
    header: {
      title: "Transparent Carpentry Pricing in Saudi Arabia",
      subtitle: "Explore our flexible packages for furniture, cabinetry, and decorative woodwork.",
    },
    estimatorData: {
      title: "Quick Carpentry Cost Estimator",
      subtitle: "Estimate project costs based on size, complexity, and location.",
      sizeOptions: ["Small", "Medium", "Large"],
      complexityOptions: ["Basic", "Standard", "Premium"],
      locationOptions: ["Riyadh", "Jeddah", "Dammam", "Other"],
      inputDefaults: {
        projectSize: "Small",
        complexity: "Standard",
        location: "Riyadh",
      },
      importantNotes: [
        "Estimates based on standard materials and typical project sizes.",
        "On-site inspection may be required for precise quotations.",
        "Warranty terms vary depending on materials and project scope.",
        "All quotes are valid for 30 days.",
      ],
    },
    packages: [
      {
        packageName: "Starter",
        tagline: "Basic carpentry setup",
        price: "SAR 10,000",
        startingFrom: "Starting from",
        features: ["Small furniture & cabinet work", "Basic finishing and installation"],
        idealFor: "Small homes or offices",
        isPopular: false,
        icon: Hammer,
      },
      {
        packageName: "Standard",
        tagline: "Complete carpentry solution",
        price: "SAR 30,000",
        startingFrom: "Starting from",
        features: ["Custom furniture", "Cabinetry & storage", "Medium complexity projects"],
        idealFor: "Medium homes & offices",
        isPopular: true,
        icon: Wrench,
      },
      {
        packageName: "Premium",
        tagline: "Luxury carpentry",
        price: "SAR 70,000",
        startingFrom: "Starting from",
        features: ["High-end custom furniture", "Full project management", "Luxury finishes"],
        idealFor: "Luxury homes & businesses",
        isPopular: false,
        icon: Shield,
      },
    ],
  },
  ar: {
    header: {
      title: "تسعير النجارة الشفاف في المملكة العربية السعودية",
      subtitle: "استكشف باقاتنا المرنة للأثاث والخزائن والأعمال الخشبية الزخرفية.",
    },
    estimatorData: {
      title: "مقدر تكلفة النجارة السريع",
      subtitle: "تقدير تكلفة المشروع بناءً على الحجم والتعقيد والموقع.",
      sizeOptions: ["صغير", "متوسط", "كبير"],
      complexityOptions: ["أساسي", "قياسي", "متميز"],
      locationOptions: ["الرياض", "جدة", "الدمام", "أخرى"],
      inputDefaults: {
        projectSize: "صغير",
        complexity: "قياسي",
        location: "الرياض",
      },
      importantNotes: [
        "التقديرات تعتمد على المواد القياسية وأحجام المشاريع النموذجية.",
        "قد تكون هناك حاجة لفحص في الموقع للحصول على عروض أسعار دقيقة.",
        "تختلف شروط الضمان حسب المواد ونطاق المشروع.",
        "جميع العروض سارية لمدة 30 يومًا.",
      ],
    },
    packages: [
      {
        packageName: "بداية",
        tagline: "إعداد نجارة أساسي",
        price: "10,000 ريال سعودي",
        startingFrom: "بداية من",
        features: ["أعمال أثاث وخزائن صغيرة", "تشطيبات وتركيب أساسي"],
        idealFor: "منازل أو مكاتب صغيرة",
        isPopular: false,
        icon: Hammer,
      },
      {
        packageName: "قياسي",
        tagline: "حل نجارة متكامل",
        price: "30,000 ريال سعودي",
        startingFrom: "بداية من",
        features: ["أثاث مخصص", "خزائن وتخزين", "مشاريع متوسطة التعقيد"],
        idealFor: "منازل ومكاتب متوسطة",
        isPopular: true,
        icon: Wrench,
      },
      {
        packageName: "متميز",
        tagline: "نجارة فاخرة",
        price: "70,000 ريال سعودي",
        startingFrom: "بداية من",
        features: ["أثاث مخصص فاخر", "إدارة مشروع كاملة", "تشطيبات فاخرة"],
        idealFor: "منازل وأعمال فاخرة",
        isPopular: false,
        icon: Shield,
      },
    ],
  }
};

// --- QUALITY & TESTIMONIALS DATA ---
export const carpentryQualityData = {
  en: {
    header: {
      title: "Trusted Carpentry Experts in Saudi Arabia",
      subtitle: "Certified, reliable, and premium woodworking solutions.",
    },
    certifications: [
      { icon: "Award", title: "ISO 9001:2015", subtitle: "Quality Management System" },
      { icon: "Shield", title: "Safety Certified", subtitle: "Fire & Material Safety Standards" },
      { icon: "CheckCircle", title: "Authorized Contractor", subtitle: "Top International Wood Brands" },
    ],
    testimonials: {
      title: "Client Reviews",
      reviews: [
        { quote: "Exceptional craftsmanship for our home office furniture.", name: "Sara Al-Mutairi", title: "Homeowner", company: "Al-Mutairi Homes" },
        { quote: "Custom cabinetry delivered on time and with precision.", name: "Faisal Al-Harbi", title: "Manager", company: "Harbi Interiors" },
        { quote: "Professional, reliable, and premium quality work.", name: "Nada Al-Qahtani", title: "Designer", company: "Elegant Spaces" },
      ],
    },
    stats: [
      { number: "120+", label: "Projects Completed" },
      { number: "95%", label: "Client Satisfaction" },
      { number: "15+", label: "Years of Experience" },
      { number: "24/7", label: "Support Availability" },
    ],
    cta: {
      title: "Need Expert Carpentry Services?",
      subtitle: "Contact us for custom furniture, cabinetry, and full carpentry solutions in Saudi Arabia.",
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
      title: "خبراء النجارة الموثوقون في المملكة العربية السعودية",
      subtitle: "حلول نجارة معتمدة وموثوقة ومتميزة.",
    },
    certifications: [
      { icon: "Award", title: "ISO 9001:2015", subtitle: "نظام إدارة الجودة" },
      { icon: "Shield", title: "معتمد سلامة", subtitle: "معايير السلامة من الحرائق والمواد" },
      { icon: "CheckCircle", title: "مقاول معتمد", subtitle: "أفضل العلامات التجارية العالمية للأخشاب" },
    ],
    testimonials: {
      title: "تقيمات العملاء",
      reviews: [
        { quote: "إتقان استثنائي لأثاث مكتبنا المنزلي.", name: "سارة المطيري", title: "مالكة منزل", company: "منازل المطيري" },
        { quote: "خزائن مخصصة تم تسليمها في الوقت المحدد وبدقة.", name: "فيصل الحربي", title: "مدير", company: "ديكورات الحربي" },
        { quote: "عمل احترافي وموثوق وعالي الجودة.", name: "ندى القحطاني", title: "مصممة", company: "مساحات أنيقة" },
      ],
    },
    stats: [
      { number: "120+", label: "مشروع مكتمل" },
      { number: "95%", label: "رضا العملاء" },
      { number: "15+", label: "سنوات خبرة" },
      { number: "24/7", label: "توفر الدعم" },
    ],
    cta: {
      title: "هل تحتاج إلى خدمات نجارة احترافية؟",
      subtitle: "اتصل بنا للحصول على أثاث مخصص وخزائن وحلول نجارة شاملة في المملكة العربية السعودية.",
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



// Add this at the end of your src/data/services/carpentry/carpentryDetailsData.js file

// --- SEO DATA ---
export const carpentrySEODetails = {
  en: {
    // Primary Meta Tags
    metaTitle: "Carpentry Services Saudi Arabia | Professional Carpenters Riyadh | Ram Limited",
    metaDescription: "Professional carpentry services in Saudi Arabia. Custom furniture, cabinetry, woodwork, and carpentry solutions in Riyadh, Jeddah, Dammam. ISO 9001 certified carpenters.",
    metaKeywords: "carpentry services Saudi Arabia, professional carpenters Riyadh, custom furniture KSA, cabinetry installation Jeddah, woodwork Dammam, carpentry contractors Saudi Arabia",
    
    // OG Tags
    ogTitle: "Professional Carpentry Services in Saudi Arabia | Ram Limited",
    ogDescription: "Complete carpentry solutions including custom furniture, cabinetry, and woodwork services across Saudi Arabia",
    ogImage: "https://ramlimited.com.sa/images/services/carpentry-og-image.jpg",
    
    // Twitter
    twitterTitle: "Carpentry Services Saudi Arabia | Ram Limited",
    twitterDescription: "Professional carpentry solutions for custom furniture, cabinetry, and woodwork projects across Saudi Arabia",
    
    // JSON-LD Structured Data
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Service",
      "serviceType": "Carpentry Services",
      "category": "Construction, Carpentry",
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
        "name": "Carpentry Service Packages",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Custom Furniture Making"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Cabinetry Installation"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Decorative Woodwork"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Wood Repair & Restoration"
            }
          }
        ]
      },
      "offers": {
        "@type": "AggregateOffer",
        "lowPrice": "10000",
        "highPrice": "70000",
        "priceCurrency": "SAR",
        "offerCount": "3"
      }
    },
    
    // Breadcrumb
    breadcrumb: "Carpentry Services",
    
    // FAQ Schema
    faqs: [
      {
        question: "What carpentry services do you provide in Saudi Arabia?",
        answer: "We provide complete carpentry services including custom furniture making, cabinetry installation, decorative woodwork, wood repair, restoration, and carpentry maintenance across Saudi Arabia."
      },
      {
        question: "Are your carpenters certified and experienced?",
        answer: "Yes, all our carpenters are certified, licensed, and have extensive experience in residential, commercial, and industrial carpentry work throughout Saudi Arabia."
      },
      {
        question: "What types of wood and materials do you work with?",
        answer: "We work with various premium woods including teak, oak, mahogany, walnut, pine, MDF, plywood, and high-quality laminates from trusted international suppliers."
      },
      {
        question: "How much does custom furniture cost in Saudi Arabia?",
        answer: "Custom furniture costs start from SAR 10,000 for basic pieces and can go up to SAR 70,000+ for premium luxury furniture, depending on materials, design complexity, and size."
      },
      {
        question: "Do you provide cabinet installation services?",
        answer: "Yes, we provide complete cabinet installation services including kitchen cabinets, wardrobe cabinets, office storage solutions, and custom cabinetry design and installation."
      },
      {
        question: "What areas in Saudi Arabia do you serve?",
        answer: "We serve all major cities in Saudi Arabia including Riyadh, Jeddah, Dammam, Khobar, Mecca, Medina, and surrounding areas with our professional carpentry services."
      },
      {
        question: "Can you repair existing furniture and woodwork?",
        answer: "Yes, we provide comprehensive furniture repair, wood restoration, and maintenance services for existing furniture and woodwork in homes and commercial spaces."
      },
      {
        question: "How long does a carpentry project typically take?",
        answer: "Carpentry projects typically take 1-6 weeks depending on the complexity and scale. Small projects may take 1-2 weeks, while large custom furniture projects may take 4-6 weeks."
      }
    ]
  },
  ar: {
    // Primary Meta Tags بالعربية
    metaTitle: "خدمات النجارة السعودية | نجارون محترفون الرياض | رام المحدودة",
    metaDescription: "خدمات نجارة احترافية في السعودية. أثاث مخصص، خزائن، أعمال خشبية، وحلول نجارة في الرياض، جدة، الدمام. نجارون معتمدون ISO 9001.",
    metaKeywords: "خدمات نجارة السعودية, نجارون محترفون الرياض, أثاث مخصص المملكة, تركيب خزائن جدة, أعمال خشبية الدمام, مقاولو نجارة السعودية",
    
    // OG Tags بالعربية
    ogTitle: "خدمات النجارة الاحترافية في السعودية | رام المحدودة",
    ogDescription: "حلول نجارة كاملة تشمل أثاث مخصص وخزائن وخدمات أعمال خشبية في جميع أنحاء السعودية",
    ogImage: "https://ramlimited.com.sa/images/services/carpentry-og-image-ar.jpg",
    
    // Twitter بالعربية
    twitterTitle: "خدمات النجارة السعودية | رام المحدودة",
    twitterDescription: "حلول نجارة احترافية لمشاريع أثاث مخصص وخزائن وأعمال خشبية في جميع أنحاء السعودية",
    
    // JSON-LD Structured Data بالعربية
    structuredData :{
      "@context": "https://schema.org/ar",
      "@type": "Service",
      "serviceType": "خدمات النجارة",
      "category": "بناء، نجارة",
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
        "name": "باقات خدمات النجارة",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "صناعة أثاث مخصص"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "تركيب خزائن"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "أعمال خشبية زخرفية"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "إصلاح وترميم الأخشاب"
            }
          }
        ]
      },
      "offers": {
        "@type": "AggregateOffer",
        "lowPrice": "10000",
        "highPrice": "70000",
        "priceCurrency": "ريال سعودي",
        "offerCount": "3"
      }
    },
    
    // Breadcrumb بالعربية
    breadcrumb: "خدمات النجارة",
    
    // FAQ Schema بالعربية
    faqs: [
      {
        question: "ما هي خدمات النجارة التي تقدمونها في السعودية؟",
        answer: "نقدم خدمات نجارة كاملة بما في ذلك صناعة أثاث مخصص، تركيب خزائن، أعمال خشبية زخرفية، إصلاح أخشاب، ترميم، وصيانة نجارة في جميع أنحاء السعودية."
      },
      {
        question: "هل نجاروكم معتمدون وذوو خبرة؟",
        answer: "نعم، جميع نجارينا معتمدون ومرخصون ولديهم خبرة واسعة في أعمال النجارة السكنية والتجارية والصناعية في جميع أنحاء السعودية."
      },
      {
        question: "ما هي أنواع الخشب والمواد التي تعملون بها؟",
        answer: "نعمل مع أنواع مختلفة من الأخشاب المتميزة بما في ذلك الساج، البلوط، الماهوجني، الجوز، الصنوبر، ألواح MDF، الخشب الرقائقي، والرقائق عالية الجودة من موردين دوليين موثوقين."
      },
      {
        question: "كم تبلغ تكلفة الأثاث المخصص في السعودية؟",
        answer: "تبدأ تكاليف الأثاث المخصص من 10,000 ريال سعودي للقطع الأساسية ويمكن أن تصل إلى 70,000+ ريال سعودي للأثاث الفاخر المتميز، اعتمادًا على المواد وتعقيد التصميم والحجم."
      },
      {
        question: "هل تقدمون خدمات تركيب خزائن؟",
        answer: "نعم، نقدم خدمات تركيب خزائن كاملة بما في ذلك خزائن المطبخ، خزائن الملابس، حلول تخزين مكتبية، وتصميم وتركيب خزائن مخصصة."
      },
      {
        question: "ما هي المناطق التي تخدمونها في السعودية؟",
        answer: "نخدم جميع المدن الرئيسية في السعودية بما في ذلك الرياض، جدة، الدمام، الخبر، مكة، المدينة، والمناطق المحيطة بخدمات النجارة الاحترافية لدينا."
      },
      {
        question: "هل يمكنكم إصلاح الأثاث والأعمال الخشبية الحالية؟",
        answer: "نعم، نقدم خدمات إصلاح أثاث شاملة، ترميم أخشاب، وخدمات صيانة للأثاث والأعمال الخشبية الحالية في المنازل والمساحات التجارية."
      },
      {
        question: "كم يستغرق مشروع النجارة عادة؟",
        answer: "تستغرق مشاريع النجارة عادة 1-6 أسابيع اعتمادًا على التعقيد والنطاق. قد تستغرق المشاريع الصغيرة 1-2 أسبوع، بينما قد تستغرق مشاريع الأثاث المخصصة الكبيرة 4-6 أسابيع."
      }
    ]
  }
};