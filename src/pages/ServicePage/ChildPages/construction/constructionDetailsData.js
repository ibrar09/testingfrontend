// src/data/services/construction/constructionDetailsData.js

import construction1 from '../../../../assets/images/Construction1.webp';
import construction2 from '../../../../assets/images/Construction4.webp';
import construction3 from '../../../../assets/images/Construction3.webp';
import construction from '../../../../assets/videos/Construction-demo.mp4';

import AccessTimeIcon from '@mui/icons-material/AccessTime';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import MilitaryTechIcon from '@mui/icons-material/MilitaryTech';
import EngineeringIcon from '@mui/icons-material/Engineering';

import { Hammer, Shield, Building } from "lucide-react";

// --- HERO SECTION DATA ---
export const constructionHeroData = {
  en: {
    title: "Construction Services",
    heading: "Professional Construction, Renovation & Project Management",
    description:
      "We provide end-to-end construction solutions across Saudi Arabia — from planning and design to execution and maintenance.",
    cards: [
      { heading: "Timely Delivery", description: "Projects completed on schedule and within budget", icon: AccessTimeIcon },
      { heading: "Certified Experts", description: "Experienced engineers and project managers", icon: EngineeringIcon },
      { heading: "High Quality Standards", description: "Compliance with ISO, OSHA, and local regulations", icon: MilitaryTechIcon },
    ],
    images: [construction1, construction2, construction3],
  },
  ar: {
    title: "خدمات البناء",
    heading: "بناء وتجديد وإدارة مشاريع احترافية",
    description:
      "نقدم حلول بناء شاملة في جميع أنحاء المملكة العربية السعودية — من التخطيط والتصميم إلى التنفيذ والصيانة.",
    cards: [
      { heading: "تسليم في الوقت المحدد", description: "مشاريع مكتملة حسب الجدول الزمني وفي حدود الميزانية", icon: AccessTimeIcon },
      { heading: "خبراء معتمدون", description: "مهندسين ومديري مشاريع ذوي خبرة", icon: EngineeringIcon },
      { heading: "معايير جودة عالية", description: "الامتثال لمعايير ISO وOSHA واللوائح المحلية", icon: MilitaryTechIcon },
    ],
    images: [construction1, construction2, construction3],
  }
};

// --- PROJECT DURATION DATA ---
const constructionProjectDurationData = {
  en: {
    cards: [
      { icon: <CalendarMonthIcon />, title: "AVG PROJECT TIME", time: "3–12 MONTHS", color: "text-blue-600" },
      { icon: <AttachMoneyIcon />, title: "STARTING FROM", time: "SAR 200,000", color: "text-blue-600" },
      { icon: <Building />, title: "SERVICE CATEGORIES", time: "RESIDENTIAL / COMMERCIAL / INDUSTRIAL", color: "text-[rgba(115,115,115,1)]" },
      { icon: <Shield />, title: "QUALITY STANDARD", time: "ISO 9001:2015", color: "text-gray-700" },
    ],
    note: "*Cost and duration vary based on project type, location, and scale.",
  },
  ar: {
    cards: [
      { icon: <CalendarMonthIcon />, title: "متوسط وقت المشروع", time: "3–12 شهراً", color: "text-blue-600" },
      { icon: <AttachMoneyIcon />, title: "بداية من", time: "200,000 ريال سعودي", color: "text-blue-600" },
      { icon: <Building />, title: "فئات الخدمات", time: "سكني / تجاري / صناعي", color: "text-[rgba(115,115,115,1)]" },
      { icon: <Shield />, title: "معيار الجودة", time: "ISO 9001:2015", color: "text-gray-700" },
    ],
    note: "*تختلف التكلفة والمدة حسب نوع المشروع والموقع والنطاق.",
  }
};

export default constructionProjectDurationData;

// --- CONTENT DATA ---
export const constructionContent = {
  en: {
    title: "Comprehensive Construction Solutions",
    subtitle:
      "From conceptualization to completion, we deliver professional construction services ensuring safety, quality, and efficiency.",
    ProcessSteps: [
      { id: 1, title: "Planning & Design", description: "Architectural and structural design tailored to your needs." },
      { id: 2, title: "Execution", description: "On-site construction and management of all project phases." },
      { id: 3, title: "Maintenance & Support", description: "Post-construction inspections, repairs, and preventive maintenance." },
    ],
    featureLists: [
      "Certified construction engineers",
      "Customized project solutions",
      "Safety and compliance adherence",
      "24/7 client support",
    ],
    caseStudy: {
      title: "Commercial Complex Renovation",
      location: "Riyadh, Saudi Arabia",
      summary:
        "Renovated a commercial complex, optimizing workflow, safety, and aesthetics while reducing costs by 15%.",
      link: "#",
    },
  },
  ar: {
    title: "حلول بناء شاملة",
    subtitle:
      "من التصور إلى الاكتمال، نقدم خدمات بناء احترافية تضمن السلامة والجودة والكفاءة.",
    ProcessSteps: [
      { id: 1, title: "التخطيط والتصميم", description: "تصميم معماري وهيكلي مصمم خصيصاً لاحتياجاتك." },
      { id: 2, title: "التنفيذ", description: "بناء في الموقع وإدارة جميع مراحل المشروع." },
      { id: 3, title: "الصيانة والدعم", description: "فحوصات ما بعد البناء والإصلاحات والصيانة الوقائية." },
    ],
    featureLists: [
      "مهندسي بناء معتمدين",
      "حلول مشاريع مخصصة",
      "الالتزام بالسلامة والامتثال",
      "دعم عملاء على مدار الساعة",
    ],
    caseStudy: {
      title: "تجديد مجمع تجاري",
      location: "الرياض، المملكة العربية السعودية",
      summary:
        "تم تجديد مجمع تجاري، تحسين سير العمل والسلامة والجماليات مع تقليل التكاليف بنسبة 15٪.",
      link: "#",
    },
  }
};

// --- MEDIA DATA ---
export const constructionMedia = {
  en: {
    videoPlaceHolderUrl: construction,
    videoLabel: "Construction Project Showcase",
    stats: [
      { value: "120+", label: "Projects Completed" },
      { value: "95%", label: "Client Satisfaction" },
      { value: "10+", label: "Years Experience" },
    ],
  },
  ar: {
    videoPlaceHolderUrl: construction,
    videoLabel: "عرض مشاريع البناء",
    stats: [
      { value: "120+", label: "مشروع مكتمل" },
      { value: "95%", label: "رضا العملاء" },
      { value: "10+", label: "سنوات خبرة" },
    ],
  }
};

// --- DETAILS PAGE DATA ---
export const constructionDetailsData = {
  en: {
    header: {
      title: "Complete Construction Services",
      subtitle:
        "Providing residential, commercial, and industrial construction solutions with excellence and reliability.",
    },
    scope: {
      title: "Our Expertise Covers",
      listA: [
        "Residential building construction",
        "Commercial complexes",
        "Industrial facilities",
        "Interior and exterior renovations",
      ],
      listB: [
        "Project management & planning",
        "Safety & regulatory compliance",
        "Quality assurance and supervision",
        "Sustainable and eco-friendly building practices",
      ],
    },
    footer: {
      title: "Note",
      description: "*Project cost and duration depend on complexity, design, and location.",
    },
  },
  ar: {
    header: {
      title: "خدمات بناء كاملة",
      subtitle:
        "تقديم حلول بناء سكنية وتجارية وصناعية بتميز وموثوقية.",
    },
    scope: {
      title: "تشمل خبرتنا",
      listA: [
        "بناء مباني سكنية",
        "مجمعات تجارية",
        "منشآت صناعية",
        "تجديدات داخلية وخارجية",
      ],
      listB: [
        "إدارة المشروع والتخطيط",
        "السلامة والامتثال التنظيمي",
        "ضمان الجودة والإشراف",
        "ممارسات بناء مستدامة وصديقة للبيئة",
      ],
    },
    footer: {
      title: "ملاحظة",
      description: "*تعتمد تكلفة المشروع ومدة التنفيذ على التعقيد والتصميم والموقع.",
    },
  }
};

// --- PRICING DATA ---
export const constructionPricingData = {
  en: {
    header: {
      title: "Transparent Construction Pricing",
      subtitle:
        "Explore our flexible construction packages — tailored for small, medium, and large projects.",
    },
    estimatorData: {
      title: "Quick Construction Cost Estimator",
      subtitle: "Estimate project costs based on size, complexity, and type.",
      sizeOptions: ["Small (Up to 500 m²)", "Medium (501–2000 m²)", "Large (2000+ m²)"],
      complexityOptions: ["Basic", "Standard", "Premium"],
      locationOptions: ["Riyadh", "Jeddah", "Dammam", "Other"],
      inputDefaults: {
        projectSize: "Small (Up to 500 m²)",
        complexity: "Standard",
        location: "Riyadh",
      },
      importantNotes: [
        "Estimates based on standard building materials.",
        "Site inspection required for precise quotes.",
        "Maintenance and warranty services available.",
        "All quotes valid for 30 days.",
      ],
    },
    packages: [
      {
        packageName: "Basic",
        tagline: "Essential construction services",
        price: "SAR 200,000",
        startingFrom: "Starting from",
        features: ["Site preparation", "Basic structure build", "Standard safety measures"],
        idealFor: "Small residential or office buildings",
        isPopular: false,
        icon: Hammer,
      },
      {
        packageName: "Standard",
        tagline: "Full construction package",
        price: "SAR 500,000",
        startingFrom: "Starting from",
        features: [
          "Full building construction",
          "Advanced project management",
          "Quality inspections",
          "12-month service warranty",
        ],
        idealFor: "Medium commercial or residential projects",
        isPopular: true,
        icon: Building,
      },
      {
        packageName: "Premium",
        tagline: "Luxury construction solution",
        price: "SAR 1,000,000",
        startingFrom: "Starting from",
        features: [
          "Custom architectural design",
          "Premium materials",
          "Priority project execution",
          "Extended 24-month warranty",
        ],
        idealFor: "Large-scale commercial & industrial projects",
        isPopular: false,
        icon: Shield,
      },
    ],
  },
  ar: {
    header: {
      title: "تسعير بناء شفاف",
      subtitle:
        "استكشف باقات البناء المرنة لدينا — مصممة خصيصاً للمشاريع الصغيرة والمتوسطة والكبيرة.",
    },
    estimatorData: {
      title: "مقدر تكلفة البناء السريع",
      subtitle: "تقدير تكلفة المشروع بناءً على الحجم والتعقيد والنوع.",
      sizeOptions: ["صغير (حتى 500 م²)", "متوسط (501–2000 م²)", "كبير (2000+ م²)"],
      complexityOptions: ["أساسي", "قياسي", "متميز"],
      locationOptions: ["الرياض", "جدة", "الدمام", "أخرى"],
      inputDefaults: {
        projectSize: "صغير (حتى 500 م²)",
        complexity: "قياسي",
        location: "الرياض",
      },
      importantNotes: [
        "التقديرات تعتمد على مواد البناء القياسية.",
        "يتطلب الفحص في الموقع للحصول على عروض أسعار دقيقة.",
        "خدمات الصيانة والضمان متاحة.",
        "جميع العروض سارية لمدة 30 يومًا.",
      ],
    },
    packages: [
      {
        packageName: "أساسي",
        tagline: "خدمات بناء أساسية",
        price: "200,000 ريال سعودي",
        startingFrom: "بداية من",
        features: ["تحضير الموقع", "بناء هيكل أساسي", "تدابير سلامة قياسية"],
        idealFor: "مباني سكنية أو مكتبية صغيرة",
        isPopular: false,
        icon: Hammer,
      },
      {
        packageName: "قياسي",
        tagline: "باقة بناء كاملة",
        price: "500,000 ريال سعودي",
        startingFrom: "بداية من",
        features: [
          "بناء كامل للمبني",
          "إدارة مشروع متقدمة",
          "فحوصات الجودة",
          "ضمان خدمة 12 شهراً",
        ],
        idealFor: "مشاريع تجارية أو سكنية متوسطة",
        isPopular: true,
        icon: Building,
      },
      {
        packageName: "متميز",
        tagline: "حل بناء فاخر",
        price: "1,000,000 ريال سعودي",
        startingFrom: "بداية من",
        features: [
          "تصميم معماري مخصص",
          "مواد متميزة",
          "تنفيذ مشروع بأولوية",
          "ضمان ممتد 24 شهراً",
        ],
        idealFor: "مشاريع تجارية وصناعية واسعة النطاق",
        isPopular: false,
        icon: Shield,
      },
    ],
  }
};

// --- QUALITY & TESTIMONIALS DATA ---
export const constructionQualityData = {
  en: {
    header: {
      title: "Trusted Construction Experts",
      subtitle: "Delivering high-quality, safe, and reliable construction services across Saudi Arabia.",
    },
    certifications: [
      { icon: "Award", title: "ISO 9001:2015", subtitle: "Quality Management System" },
      { icon: "Shield", title: "Safety Certified", subtitle: "OSHA & Local Standards" },
      { icon: "CheckCircle", title: "Authorized Contractor", subtitle: "Top International Suppliers" },
    ],
    testimonials: {
      title: "What Our Clients Say",
      reviews: [
        { quote: "Professional and timely construction services for our commercial building.", name: "Abdullah Al-Fahad", title: "CEO", company: "Fahad Enterprises" },
        { quote: "Reliable team with excellent project management skills.", name: "Fatimah Al-Saud", title: "Project Manager", company: "Riyadh Development Co." },
        { quote: "High-quality work and compliance with all safety standards.", name: "Khalid Bin Ahmed", title: "Owner", company: "Green Build Co." },
      ],
    },
    stats: [
      { number: "120+", label: "Projects Completed" },
      { number: "95%", label: "Client Satisfaction" },
      { number: "10+", label: "Years Experience" },
      { number: "24/7", label: "Support Availability" },
    ],
    cta: {
      title: "Need Expert Construction Services?",
      subtitle: "Contact our specialists today for a tailored construction solution.",
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
      title: "خبراء بناء موثوقون",
      subtitle: "تقديم خدمات بناء عالية الجودة وآمنة وموثوقة في جميع أنحاء المملكة العربية السعودية.",
    },
    certifications: [
      { icon: "Award", title: "ISO 9001:2015", subtitle: "نظام إدارة الجودة" },
      { icon: "Shield", title: "معتمد سلامة", subtitle: "OSHA والمعايير المحلية" },
      { icon: "CheckCircle", title: "مقاول معتمد", subtitle: "أفضل الموردين الدوليين" },
    ],
    testimonials: {
      title: "ما يقوله عملاؤنا",
      reviews: [
        { quote: "خدمات بناء احترافية وفي الوقت المحدد لمبنانا التجاري.", name: "عبدالله الفهد", title: "الرئيس التنفيذي", company: "مؤسسات الفهد" },
        { quote: "فريق موثوق بمهارات ممتازة في إدارة المشاريع.", name: "فاطمة السعود", title: "مديرة مشروع", company: "شركة تطوير الرياض" },
        { quote: "عمل عالي الجودة والامتثال لجميع معايير السلامة.", name: "خالد بن أحمد", title: "المالك", company: "شركة البناء الأخضر" },
      ],
    },
    stats: [
      { number: "120+", label: "مشروع مكتمل" },
      { number: "95%", label: "رضا العملاء" },
      { number: "10+", label: "سنوات خبرة" },
      { number: "24/7", label: "توفر الدعم" },
    ],
    cta: {
      title: "هل تحتاج إلى خدمات بناء احترافية؟",
      subtitle: "اتصل بخبرائنا اليوم للحصول على حل بناء مخصص.",
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

// Add this at the end of your src/data/services/construction/constructionDetailsData.js file

// --- SEO DATA ---
export const constructionSEODetails = {
  en: {
    // Primary Meta Tags
    metaTitle: "Construction Services Saudi Arabia | Building Contractors Riyadh | Ram Limited",
    metaDescription: "Professional construction services in Saudi Arabia. Residential, commercial & industrial building contractors in Riyadh, Jeddah, Dammam. ISO 9001 certified construction company.",
    metaKeywords: "construction services Saudi Arabia, building contractors Riyadh, commercial construction KSA, residential building Jeddah, industrial construction Dammam, construction company Saudi Arabia",
    
    // OG Tags
    ogTitle: "Professional Construction Services in Saudi Arabia | Ram Limited",
    ogDescription: "Complete construction and building solutions for residential, commercial, and industrial projects across Saudi Arabia",
    ogImage: "https://ramlimited.com.sa/images/services/construction-og-image.jpg",
    
    // Twitter
    twitterTitle: "Construction Services Saudi Arabia | Ram Limited",
    twitterDescription: "Professional building contractors for commercial, residential & industrial construction projects across Saudi Arabia",
    
    // JSON-LD Structured Data
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Service",
      "serviceType": "Construction Services",
      "category": "Construction, Building",
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
        "name": "Construction Service Packages",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Residential Construction"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Commercial Building Construction"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Industrial Construction"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Construction Project Management"
            }
          }
        ]
      },
      "offers": {
        "@type": "AggregateOffer",
        "lowPrice": "200000",
        "highPrice": "1000000",
        "priceCurrency": "SAR",
        "offerCount": "3"
      }
    },
    
    // Breadcrumb
    breadcrumb: "Construction Services",
    
    // FAQ Schema
    faqs: [
      {
        question: "What types of construction projects do you handle in Saudi Arabia?",
        answer: "We handle all types of construction projects including residential buildings, commercial complexes, industrial facilities, office buildings, retail spaces, and renovations across Saudi Arabia."
      },
      {
        question: "Are you licensed for construction work in Saudi Arabia?",
        answer: "Yes, we are fully licensed and certified construction contractors in Saudi Arabia with ISO 9001:2015 certification and municipality approvals for all types of construction projects."
      },
      {
        question: "What areas in Saudi Arabia do you provide construction services?",
        answer: "We provide construction services throughout Saudi Arabia including Riyadh, Jeddah, Dammam, Khobar, Mecca, Medina, and all major cities with experienced construction teams and project managers."
      },
      {
        question: "How long does a typical construction project take in Saudi Arabia?",
        answer: "Construction project timelines vary from 3-12 months depending on the project size and complexity. Small residential projects may take 3-6 months, while large commercial projects may take 9-12 months or more."
      },
      {
        question: "What is the cost of building construction in Saudi Arabia?",
        answer: "Construction costs start from SAR 200,000 for basic structures and can go up to SAR 1,000,000+ for premium commercial buildings, depending on size, materials, and specifications."
      },
      {
        question: "Do you provide complete turnkey construction solutions?",
        answer: "Yes, we provide complete turnkey construction solutions from planning and design to construction and handover, including all necessary permits, approvals, and quality checks."
      },
      {
        question: "What safety standards do you follow in construction projects?",
        answer: "We follow strict safety standards including OSHA regulations, Saudi Arabian construction safety guidelines, and implement comprehensive safety protocols on all our construction sites."
      },
      {
        question: "Do you provide post-construction maintenance services?",
        answer: "Yes, we provide comprehensive post-construction maintenance services including structural inspections, repairs, and preventive maintenance plans for all our construction projects."
      }
    ]
  },
  ar: {
    // Primary Meta Tags بالعربية
    metaTitle: "خدمات بناء السعودية | مقاولو بناء الرياض | رام المحدودة",
    metaDescription: "خدمات بناء احترافية في السعودية. مقاولو بناء سكني وتجاري وصناعي في الرياض، جدة، الدمام. شركة بناء معتمدة ISO 9001.",
    metaKeywords: "خدمات بناء السعودية, مقاولو بناء الرياض, بناء تجاري المملكة, بناء سكني جدة, بناء صناعي الدمام, شركة بناء السعودية",
    
    // OG Tags بالعربية
    ogTitle: "خدمات بناء احترافية في السعودية | رام المحدودة",
    ogDescription: "حلول بناء وإنشاءات كاملة للمشاريع السكنية والتجارية والصناعية في جميع أنحاء السعودية",
    ogImage: "https://ramlimited.com.sa/images/services/construction-og-image-ar.jpg",
    
    // Twitter بالعربية
    twitterTitle: "خدمات بناء السعودية | رام المحدودة",
    twitterDescription: "مقاولو بناء محترفون للمشاريع الإنشائية التجارية والسكنية والصناعية في جميع أنحاء السعودية",
    
    // JSON-LD Structured Data بالعربية
    structuredData: {
      "@context": "https://schema.org/ar",
      "@type": "Service",
      "serviceType": "خدمات البناء",
      "category": "بناء، إنشاءات",
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
        "name": "باقات خدمات البناء",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "بناء سكني"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "بناء مباني تجارية"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "بناء صناعي"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "إدارة مشاريع بناء"
            }
          }
        ]
      },
      "offers": {
        "@type": "AggregateOffer",
        "lowPrice": "200000",
        "highPrice": "1000000",
        "priceCurrency": "ريال سعودي",
        "offerCount": "3"
      }
    },
    
    // Breadcrumb بالعربية
    breadcrumb: "خدمات البناء",
    
    // FAQ Schema بالعربية
    faqs: [
      {
        question: "ما هي أنواع مشاريع البناء التي تتعاملون معها في السعودية؟",
        answer: "نتعامل مع جميع أنواع مشاريع البناء بما في ذلك المباني السكنية، المجمعات التجارية، المنشآت الصناعية، مباني المكاتب، المساحات التجارية، والتجديدات في جميع أنحاء السعودية."
      },
      {
        question: "هل أنتم مرخصون لأعمال البناء في السعودية؟",
        answer: "نعم، نحن مقاولو بناء مرخصون ومعتمدون بالكامل في السعودية بشهادة ISO 9001:2015 وموافقات بلدية لجميع أنواع مشاريع البناء."
      },
      {
        question: "ما هي المناطق التي تقدمون فيها خدمات البناء في السعودية؟",
        answer: "نقدم خدمات البناء في جميع أنحاء السعودية بما في ذلك الرياض، جدة، الدمام، الخبر، مكة، المدينة، وجميع المدن الرئيسية مع فرق بناء ومديري مشاريع ذوي خبرة."
      },
      {
        question: "كم تستغرق مشاريع البناء عادة في السعودية؟",
        answer: "تتراوح الجداول الزمنية لمشاريع البناء من 3-12 شهرًا اعتمادًا على حجم المشروع وتعقيده. قد تستغرق المشاريع السكنية الصغيرة 3-6 أشهر، بينما قد تستغرق المشاريع التجارية الكبيرة 9-12 شهرًا أو أكثر."
      },
      {
        question: "ما هي تكلفة بناء الإنشاءات في السعودية؟",
        answer: "تبدأ تكاليف البناء من 200,000 ريال سعودي للهياكل الأساسية ويمكن أن تصل إلى 1,000,000+ ريال سعودي للمباني التجارية المتميزة، اعتمادًا على الحجم والمواد والمواصفات."
      },
      {
        question: "هل تقدمون حلول بناء مفتاح باليد كاملة؟",
        answer: "نعم، نقدم حلول بناء مفتاح باليد كاملة من التخطيط والتصميم إلى البناء والتسليم، بما في ذلك جميع التصاريح والموافقات والفحوصات اللازمة."
      },
      {
        question: "ما هي معايير السلامة التي تتبعونها في مشاريع البناء؟",
        answer: "نتبع معايير سلامة صارمة بما في ذلك لوائح OSHA، إرشادات سلامة البناء السعودية، وننفذ بروتوكولات سلامة شاملة في جميع مواقع البناء الخاصة بنا."
      },
      {
        question: "هل تقدمون خدمات صيانة ما بعد البناء؟",
        answer: "نعم، نقدم خدمات صيانة شاملة لما بعد البناء بما في ذلك الفحوصات الهيكلية والإصلاحات وخطط الصيانة الوقائية لجميع مشاريع البناء الخاصة بنا."
      }
    ]
  }
};