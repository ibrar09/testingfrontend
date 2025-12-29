// src/data/services/fitout/fitoutDetailsData.js

// Import images
import fit1 from "../../../../assets/images/fitout1.webp";
import fit2 from "../../../../assets/images/fitout2.webp";
import fit3 from "../../../../assets/images/fitout3.webp";
import fitVideo from "../../../../assets/videos/Designing-demo-mp4.mp4";

// Icons
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import MilitaryTechIcon from "@mui/icons-material/MilitaryTech";
import SmartphoneIcon from "@mui/icons-material/Smartphone";

import { Zap, Crown, Shield } from "lucide-react";

// ⭐ HERO SECTION DATA — SEO Optimized
export const fitoutHeroData = {
  en: {
    title: "Fit-Out Design & Turnkey Solutions in Saudi Arabia",
    heading: "Premium Interior Fit-Out Services for Commercial & Residential Spaces",
    description:
      "We deliver top-tier fit-out design, execution, and turnkey interior solutions across Riyadh, Jeddah, and Dammam. From concept to completion, our team ensures quality, safety, and world-class craftsmanship.",
    cards: [
      {
        heading: "Turnkey Execution",
        description: "Complete end-to-end fit-out solutions for offices, retail, restaurants and villas.",
        icon: AccessTimeIcon,
      },
      {
        heading: "Certified Team",
        description: "Experienced engineers, architects and project managers delivering excellence.",
        icon: AccessTimeIcon,
      },
      {
        heading: "On-Time Delivery",
        description: "Guaranteed timelines with quality assurance and safety compliance.",
        icon: AccessTimeIcon,
      },
    ],
    images: [fit1, fit2, fit3],
  },
  ar: {
    title: "تصميم وتنفيذ التجهيزات الداخلية والحلول المفتاح باليد في المملكة العربية السعودية",
    heading: "خدمات تجهيزات داخلية متميزة للمساحات التجارية والسكنية",
    description:
      "نقدم حلول تصميم وتنفيذ تجهيزات داخلية من الطراز الأول وحلول داخلية مفتاح باليد في الرياض وجدة والدمام. من المفهوم إلى الاكتمال، يضمن فريقنا الجودة والسلامة والإتقان العالمي.",
    cards: [
      {
        heading: "تنفيذ مفتاح باليد",
        description: "حلول تجهيزات داخلية كاملة من البداية إلى النهاية للمكاتب والتجارة والمطاعم والفيلات.",
        icon: AccessTimeIcon,
      },
      {
        heading: "فريق معتمد",
        description: "مهندسين ومهندسين معماريين ومديري مشاريع ذوي خبرة يقدمون التميز.",
        icon: AccessTimeIcon,
      },
      {
        heading: "تسليم في الوقت المحدد",
        description: "جداول زمنية مضمونة مع ضمان الجودة والامتثال للسلامة.",
        icon: AccessTimeIcon,
      },
    ],
    images: [fit1, fit2, fit3],
  }
};

// ⭐ PROJECT DURATION
export const fitoutProjectDurationData = {
  en: {
    cards: [
      {
        icon: <CalendarMonthIcon />,
        title: "AVERAGE PROJECT DURATION",
        time: "3–10 WEEKS",
        color: "text-blue-600",
      },
      {
        icon: <AttachMoneyIcon />,
        title: "STARTING PRICE",
        time: "SAR 50,000",
        color: "text-blue-600",
      },
      {
        icon: <SmartphoneIcon />,
        title: "SERVICE CATEGORIES",
        time: "Office / Retail / Restaurant / Residential",
        color: "text-gray-700",
      },
      {
        icon: <MilitaryTechIcon />,
        title: "QUALITY STANDARD",
        time: "ISO 9001:2015 & Municipality Approved",
        color: "text-gray-700",
      },
    ],
    note: "*Pricing and timelines may vary depending on project size, finishes, and design complexity.",
  },
  ar: {
    cards: [
      {
        icon: <CalendarMonthIcon />,
        title: "متوسط مدة المشروع",
        time: "3–10 أسابيع",
        color: "text-blue-600",
      },
      {
        icon: <AttachMoneyIcon />,
        title: "السعر البدائي",
        time: "50,000 ريال سعودي",
        color: "text-blue-600",
      },
      {
        icon: <SmartphoneIcon />,
        title: "فئات الخدمات",
        time: "مكتب / تجارة / مطعم / سكني",
        color: "text-gray-700",
      },
      {
        icon: <MilitaryTechIcon />,
        title: "معيار الجودة",
        time: "معتمد ISO 9001:2015 ومعتمد من البلدية",
        color: "text-gray-700",
      },
    ],
    note: "*قد يختلف التسعير والجداول الزمنية اعتمادًا على حجم المشروع والتشطيبات وتعقيد التصميم.",
  }
};

// ⭐ CONTENT SECTION
export const fitoutContent = {
  en: {
    title: "Complete Fit-Out Design & Execution Services in Saudi Arabia",
    subtitle:
      "We transform raw spaces into fully functional, beautifully designed environments using modern engineering, premium materials, and a focus on durability and aesthetics.",
    ProcessSteps: [
      {
        id: 1,
        title: "Consultation & Concept Design",
        description:
          "Our designers assess your requirements and prepare conceptual layouts, mood boards, and space planning.",
      },
      {
        id: 2,
        title: "Technical Drawings & Material Selection",
        description:
          "Includes detailed drawings, MEP integration, and premium material selection based on your budget and theme.",
      },
      {
        id: 3,
        title: "Fit-Out Execution & Quality Control",
        description:
          "Civil, flooring, carpentry, electrical, HVAC, and finishing works are executed with strict supervision.",
      },
    ],
    featureLists: [
      "Custom joinery & carpentry",
      "Premium wall & ceiling finishes",
      "Glass partitions & aluminum fabrication",
      "Full MEP design & installation",
      "Restaurant, office & retail specialty fit-outs",
      "Dedicated project management",
      "Safety compliance & municipality approvals",
    ],
    caseStudy: {
      title: "Retail Store Turnkey Fit-Out",
      location: "Riyadh, Saudi Arabia",
      summary:
        "Complete design and execution of a luxury retail shop, including joinery, lighting design, flooring, and customized displays — delivered 2 weeks ahead of deadline.",
      link: "#",
    },
  },
  ar: {
    title: "خدمات تصميم وتنفيذ التجهيزات الداخلية الكاملة في المملكة العربية السعودية",
    subtitle:
      "نحول المساحات الخام إلى بيئات تعمل بكامل طاقتها ومصممة بشكل جميل باستخدام الهندسة الحديثة والمواد المتميزة والتركيز على المتانة والجماليات.",
    ProcessSteps: [
      {
        id: 1,
        title: "الاستشارة وتصميم المفهوم",
        description:
          "يقوم مصممونا بتقييم متطلباتك وإعداد مخططات مفاهيمية ولوحات مزاجية وتخطيط للمساحة.",
      },
      {
        id: 2,
        title: "الرسومات الفنية واختيار المواد",
        description:
          "يشمل الرسومات التفصيلية وتكامل الأنظمة الميكانيكية والكهربائية والسباكة واختيار مواد متميزة بناءً على ميزانيتك وموضوعك.",
      },
      {
        id: 3,
        title: "تنفيذ التجهيزات ومراقبة الجودة",
        description:
          "يتم تنفيذ أعمال البناء والأرضيات والنجارة والكهرباء والتكييف والتشطيبات تحت إشراف صارم.",
      },
    ],
    featureLists: [
      "نجارة وأعمال خشبية مخصصة",
      "تشطيبات جدران وأسقف متميزة",
      "فواصل زجاجية وتصنيع ألمنيوم",
      "تصميم وتركيب كامل للأنظمة الميكانيكية والكهربائية والسباكة",
      "تجهيزات متخصصة للمطاعم والمكاتب والتجارة",
      "إدارة مشروع مخصصة",
      "الامتثال للسلامة وموافقات البلدية",
    ],
    caseStudy: {
      title: "تجهيز محل تجاري مفتاح باليد",
      location: "الرياض، المملكة العربية السعودية",
      summary:
        "تصميم وتنفيذ كامل لمتجر تجاري فاخر، بما في ذلك النجارة وتصميم الإضاءة والأرضيات وعروض مخصصة — تم التسليم قبل الموعد النهائي بأسبوعين.",
      link: "#",
    },
  }
};

// ⭐ MEDIA / STATS
export const fitoutMedia = {
  en: {
    videoPlaceHolderUrl: fitVideo,
    videoLabel: "Fit-Out Execution Timelapse",
    stats: [
      { value: "180+", label: "Fit-Out Projects Delivered" },
      { value: "96%", label: "Client Satisfaction" },
      { value: "15+", label: "Industries Covered" },
    ],
  },
  ar: {
    videoPlaceHolderUrl: fitVideo,
    videoLabel: "فيديو تسريعي لتنفيذ التجهيزات",
    stats: [
      { value: "180+", label: "مشروع تجهيزات مكتمل" },
      { value: "96%", label: "رضا العملاء" },
      { value: "15+", label: "صناعات مغطاة" },
    ],
  }
};

// ⭐ FIT-OUT DETAILS PAGE
export const fitoutDetailsData = {
  en: {
    header: {
      title: "Interior Fit-Out Design & Build Services",
      subtitle:
        "We deliver stunning interiors with precision engineering, creative design, and exceptional craftsmanship.",
    },
    scope: {
      title: "Our Fit-Out Expertise",
      listA: [
        "Complete turnkey office fit-outs",
        "Retail & showroom interior execution",
        "Restaurant & café thematic fit-outs",
        "Custom joinery, partitions & carpentry",
      ],
      listB: [
        "False ceiling & gypsum work",
        "Lighting design & electrical upgrades",
        "HVAC installation and optimization",
        "Full MEP integration & approvals",
      ],
    },
    footer: {
      title: "Note",
      description:
        "*Final pricing depends on materials, customization level, and built-up area.",
    },
  },
  ar: {
    header: {
      title: "خدمات تصميم وبناء التجهيزات الداخلية",
      subtitle:
        "نقدم ديكورات داخلية مذهلة بهندسة دقيقة وتصميم إبداعي وإتقان استثنائي.",
    },
    scope: {
      title: "خبرتنا في التجهيزات",
      listA: [
        "تجهيزات مكاتب مفتاح باليد كاملة",
        "تنفيذ ديكورات محلات تجارية ومعارض",
        "تجهيزات مطاعم ومقاهي موضوعية",
        "نجارة وفواصل وأعمال خشبية مخصصة",
      ],
      listB: [
        "أسقف مستعارة وأعمال جبس",
        "تصميم إضاءة وترقيات كهربائية",
        "تركيب وتحسين أنظمة التكييف",
        "تكامل كامل للأنظمة الميكانيكية والكهربائية والسباكة والموافقات",
      ],
    },
    footer: {
      title: "ملاحظة",
      description:
        "*يعتمد السعر النهائي على المواد ومستوى التخصيص والمساحة المبنية.",
    },
  }
};

// ⭐ PRICING PACKAGES
export const fitoutPricingData = {
  en: {
    header: {
      title: "Fit-Out Pricing Packages",
      subtitle:
        "Choose a package based on your project size, finishes, and complexity. All packages are fully customizable.",
    },
    estimatorData: {
      title: "Fit-Out Cost Estimator",
      subtitle: "Estimate your project instantly based on area, materials, and complexity.",
      sizeOptions: ["50–150 m²", "150–300 m²", "300–600 m²", "600+ m²"],
      complexityOptions: ["Standard", "Premium", "Luxury Custom"],
      locationOptions: ["Riyadh", "Jeddah", "Dammam", "Other"],
      inputDefaults: {
        projectSize: "50–150 m²",
        complexity: "Standard",
        location: "Riyadh",
      },
      importantNotes: [
        "Prices are estimated and vary by scope.",
        "Material costs may affect the total price.",
        "Approvals and municipality fees are not included.",
        "Includes project management and quality checks.",
        "50% advance payment required.",
        "Estimates valid for 30 days.",
      ],
    },
    packages: [
      {
        packageName: "Starter",
        tagline: "Standard fit-out with essential finishes",
        price: "SAR 50,000",
        startingFrom: "Starting from",
        features: [
          "Basic flooring & partition work",
          "Standard electrical & lighting",
          "Basic ceiling & wall finishes",
          "6-month workmanship warranty",
          "Standard project supervision",
          "Timeline: 4–6 weeks",
        ],
        idealFor: "Small offices, clinics, or budget retail shops.",
        isPopular: false,
        icon: Zap,
      },
      {
        packageName: "Standard",
        tagline: "Professional-grade fit-out for modern spaces",
        price: "SAR 120,000",
        startingFrom: "Starting from",
        features: [
          "Premium flooring & wall finishes",
          "False ceiling with LED lighting design",
          "Custom carpentry & joinery",
          "12-month warranty",
          "Dedicated project manager",
          "Timeline: 3–5 weeks",
        ],
        idealFor: "Restaurants, offices, branded retail outlets.",
        isPopular: true,
        icon: Crown,
      },
      {
        packageName: "Premium",
        tagline: "Luxury fit-out with custom fabrication",
        price: "SAR 250,000",
        startingFrom: "Starting from",
        features: [
          "High-end materials & custom finishes",
          "Architectural lighting & designer fixtures",
          "Smart systems integration",
          "Premium carpentry & display fabrication",
          "24-month warranty",
          "Senior project director supervision",
          "Priority execution timeline",
        ],
        idealFor: "Corporate HQ, luxury retailers, boutique restaurants.",
        isPopular: false,
        icon: Shield,
      },
    ],
  },
  ar: {
    header: {
      title: "باقات تسعير التجهيزات الداخلية",
      subtitle:
        "اختر باقة بناءً على حجم مشروعك وتشطيباته وتعقيده. جميع الباقات قابلة للتخصيص بالكامل.",
    },
    estimatorData: {
      title: "مقدر تكلفة التجهيزات",
      subtitle: "قدّر مشروعك على الفور بناءً على المساحة والمواد والتعقيد.",
      sizeOptions: ["50–150 م²", "150–300 م²", "300–600 م²", "600+ م²"],
      complexityOptions: ["قياسي", "متميز", "تخصيص فاخر"],
      locationOptions: ["الرياض", "جدة", "الدمام", "أخرى"],
      inputDefaults: {
        projectSize: "50–150 م²",
        complexity: "قياسي",
        location: "الرياض",
      },
      importantNotes: [
        "الأسعار مقدرة وتختلف حسب النطاق.",
        "قد تؤثر تكاليف المواد على السعر الإجمالي.",
        "الموافقات ورسوم البلدية غير مشمولة.",
        "يشمل إدارة المشروع وفحوصات الجودة.",
        "مطلوب دفعة مقدمة 50٪.",
        "التقديرات سارية لمدة 30 يومًا.",
      ],
    },
    packages: [
      {
        packageName: "بداية",
        tagline: "تجهيزات قياسية بتشطيبات أساسية",
        price: "50,000 ريال سعودي",
        startingFrom: "بداية من",
        features: [
          "أعمال أرضيات وفواصل أساسية",
          "كهرباء وإضاءة قياسية",
          "تشطيبات أسقف وجدران أساسية",
          "ضمان إتقان عمل 6 أشهر",
          "إشراف مشروع قياسي",
          "الجدول الزمني: 4–6 أسابيع",
        ],
        idealFor: "مكاتب صغيرة، عيادات، أو محلات تجارية بميزانية محدودة.",
        isPopular: false,
        icon: Zap,
      },
      {
        packageName: "قياسي",
        tagline: "تجهيزات بدرجة احترافية للمساحات الحديثة",
        price: "120,000 ريال سعودي",
        startingFrom: "بداية من",
        features: [
          "تشطيبات أرضيات وجدران متميزة",
          "سقف مستعار بتصميم إضاءة LED",
          "نجارة وأعمال خشبية مخصصة",
          "ضمان 12 شهراً",
          "مدير مشروع مخصص",
          "الجدول الزمني: 3–5 أسابيع",
        ],
        idealFor: "مطاعم، مكاتب، منافذ تجارية ذات علامة تجارية.",
        isPopular: true,
        icon: Crown,
      },
      {
        packageName: "متميز",
        tagline: "تجهيزات فاخرة بتصنيع مخصص",
        price: "250,000 ريال سعودي",
        startingFrom: "بداية من",
        features: [
          "مواد عالية الجودة وتشطيبات مخصصة",
          "إضاءة معمارية وتركيبات مصممة",
          "تكامل الأنظمة الذكية",
          "نجارة متميزة وتصنيع عروض",
          "ضمان 24 شهراً",
          "إشراف مدير مشروع أول",
          "جدول زمني تنفيذي بأولوية",
        ],
        idealFor: "المقرات الرئيسية للشركات، تجار التجزئة الفاخرين، مطاعم البوتيك.",
        isPopular: false,
        icon: Shield,
      },
    ],
  }
};

// ⭐ QUALITY + TESTIMONIALS
export const fitoutQualityData = {
  en: {
    header: {
      title: "Why Choose Us for Fit-Out Solutions?",
      subtitle:
        "We combine design excellence, engineering expertise, and top-quality materials to deliver long-lasting, elegant interiors.",
    },
    certifications: [
      { icon: "Award", title: "ISO 9001:2015", subtitle: "Quality Management System" },
      { icon: "Shield", title: "Safety Compliant", subtitle: "OSHA Standards" },
      { icon: "CheckCircle", title: "Municipality Approved", subtitle: "Saudi Arabia Permit" },
    ],
    testimonials: {
      title: "What Our Clients Say",
      reviews: [
        {
          quote:
            "Highly professional team. Delivered our office fit-out on time with exceptional quality.",
          name: "Omar Al-Harbi",
          title: "CEO",
          company: "FutureTech Riyadh",
        },
        {
          quote:
            "Their attention to detail in our retail shop was outstanding. Strongly recommended!",
          name: "Fatimah Al-Saad",
          title: "Brand Manager",
          company: "Elegance Boutique",
        },
        {
          quote:
            "Premium finishes and great project management — our restaurant looks stunning.",
          name: "Abdulrahman Al-Shaikh",
          title: "Owner",
          company: "Al-Shaikh Restaurants Group",
        },
      ],
    },
    stats: [
      { number: "180+", label: "Fit-Out Projects Delivered" },
      { number: "96%", label: "Customer Satisfaction" },
      { number: "12+", label: "Years of Experience" },
      { number: "3", label: "Major Cities Covered" },
    ],
    cta: {
      title: "Need Fit-Out Design & Execution?",
      subtitle:
        "Contact our experts today for a free consultation and detailed quotation.",
      buttonText: "Request Consultation",
      secondaryLinkText: "View All Services",
    },
    contact: {
      phone: "+966 593534881",
      email: "ramlimited.sa@gmail.com",
      address: "Riyadh, Saudi Arabia",
    },
  },
  ar: {
    header: {
      title: "لماذا تختارنا لحلول التجهيزات؟",
      subtitle:
        "نجمع بين التميز في التصميم والخبرة الهندسية والمواد عالية الجودة لتقديم ديكورات داخلية أنيقة وطويلة الأمد.",
    },
    certifications: [
      { icon: "Award", title: "ISO 9001:2015", subtitle: "نظام إدارة الجودة" },
      { icon: "Shield", title: "مطابق للسلامة", subtitle: "معايير OSHA" },
      { icon: "CheckCircle", title: "معتمد من البلدية", subtitle: "ترخيص المملكة العربية السعودية" },
    ],
    testimonials: {
      title: "ما يقوله عملاؤنا",
      reviews: [
        {
          quote:
            "فريق محترف للغاية. قام بتسليم تجهيزات مكتبنا في الوقت المحدد بجودة استثنائية.",
          name: "عمر الحربي",
          title: "الرئيس التنفيذي",
          company: "فيتشرتيك الرياض",
        },
        {
          quote:
            "كان اهتمامهم بالتفاصيل في متجرنا التجاري متميزًا. موصى به بشدة!",
          name: "فاطمة السعد",
          title: "مديرة العلامة التجارية",
          company: "بوتيك أنيق",
        },
        {
          quote:
            "تشطيبات متميزة وإدارة مشروع رائعة — مطعمنا يبدو مذهلاً.",
          name: "عبدالرحمن الشيخ",
          title: "المالك",
          company: "مجموعة مطاعم الشيخ",
        },
      ],
    },
    stats: [
      { number: "180+", label: "مشروع تجهيزات مكتمل" },
      { number: "96%", label: "رضا العملاء" },
      { number: "12+", label: "سنوات خبرة" },
      { number: "3", label: "مدن رئيسية مغطاة" },
    ],
    cta: {
      title: "هل تحتاج إلى تصميم وتنفيذ تجهيزات؟",
      subtitle:
        "اتصل بخبرائنا اليوم للحصول على استشارة مجانية وعرض مفصل.",
      buttonText: "طلب استشارة",
      secondaryLinkText: "عرض جميع الخدمات",
    },
    contact: {
      phone: "+966 593534881",
      email: "ramlimited.sa@gmail.com",
      address: "الرياض، المملكة العربية السعودية",
    },
  }
};
// Add this at the end of your src/data/services/fitout/fitoutDetailsData.js file

// --- SEO DATA ---
export const fitoutSEODetails = {
  en: {
    // Primary Meta Tags
    metaTitle: "Interior Fit-Out Services Saudi Arabia | Office & Retail Fit-Out Riyadh | Ram Limited",
    metaDescription: "Professional interior fit-out services in Saudi Arabia. Complete office, retail, restaurant, and residential fit-out solutions in Riyadh, Jeddah, Dammam. ISO 9001 certified.",
    metaKeywords: "fit-out services Saudi Arabia, interior fit-out Riyadh, office fit-out KSA, retail fit-out Jeddah, restaurant interior Dammam, turnkey fit-out Saudi Arabia, interior design contractors",
    
    // OG Tags
    ogTitle: "Professional Interior Fit-Out Services in Saudi Arabia | Ram Limited",
    ogDescription: "Complete turnkey fit-out solutions for offices, retail, restaurants, and residential spaces across Saudi Arabia",
    ogImage: "https://ramlimited.com.sa/images/services/fitout-og-image.jpg",
    
    // Twitter
    twitterTitle: "Interior Fit-Out Services Saudi Arabia | Ram Limited",
    twitterDescription: "Expert fit-out solutions for commercial and residential projects across Saudi Arabia",
    
    // JSON-LD Structured Data
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Service",
      "serviceType": "Interior Fit-Out Services",
      "category": "Construction, Interior Design",
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
        "name": "Interior Fit-Out Service Packages",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Office Fit-Out Services"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Retail & Showroom Fit-Out"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Restaurant & Café Fit-Out"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Residential Fit-Out & Renovation"
            }
          }
        ]
      },
      "offers": {
        "@type": "AggregateOffer",
        "lowPrice": "50000",
        "highPrice": "250000",
        "priceCurrency": "SAR",
        "offerCount": "3"
      }
    },
    
    // Breadcrumb
    breadcrumb: "Fit-Out Services",
    
    // FAQ Schema
    faqs: [
      {
        question: "What is included in your fit-out services in Saudi Arabia?",
        answer: "Our fit-out services include complete turnkey solutions: space planning, design, material selection, carpentry, electrical, HVAC, finishing works, and municipality approvals across Saudi Arabia."
      },
      {
        question: "What types of spaces do you fit-out in Saudi Arabia?",
        answer: "We fit-out offices, retail stores, restaurants, cafés, showrooms, clinics, residential villas, apartments, and commercial spaces throughout Saudi Arabia including Riyadh, Jeddah, and Dammam."
      },
      {
        question: "Are you certified for fit-out work in Saudi Arabia?",
        answer: "Yes, we are ISO 9001:2015 certified and have municipality approval for interior fit-out work. Our team includes certified engineers, architects, and project managers."
      },
      {
        question: "How long does a typical fit-out project take in Saudi Arabia?",
        answer: "Fit-out projects typically take 3-10 weeks depending on size and complexity. Small offices may take 3-4 weeks, while large retail spaces may take 8-10 weeks."
      },
      {
        question: "What is the cost of office fit-out in Saudi Arabia?",
        answer: "Office fit-out costs start from SAR 50,000 for basic fit-out and can go up to SAR 250,000+ for premium custom fit-out, depending on size and specifications."
      },
      {
        question: "Do you handle municipality approvals for fit-out projects?",
        answer: "Yes, we manage complete municipality approval process including drawings submission, inspections, and obtaining final completion certificates for all our fit-out projects in Saudi Arabia."
      },
      {
        question: "What materials do you use for fit-out work?",
        answer: "We use premium quality materials including imported woods, laminates, gypsum boards, false ceiling materials, flooring (tiles, marble, wood), and high-quality fixtures from trusted suppliers."
      }
    ]
  },
  ar: {
    // Primary Meta Tags بالعربية
    metaTitle: "خدمات التجهيزات الداخلية السعودية | تجهيزات مكاتب وتجارة الرياض | رام المحدودة",
    metaDescription: "خدمات تجهيزات داخلية احترافية في السعودية. حلول تجهيزات مكاتب وتجارة ومطاعم وسكنية كاملة في الرياض، جدة، الدمام. معتمد ISO 9001.",
    metaKeywords: "خدمات تجهيزات داخلية السعودية, تجهيزات داخلية الرياض, تجهيزات مكاتب المملكة, تجهيزات تجارية جدة, ديكور مطاعم الدمام, تجهيزات مفتاح باليد السعودية, مقاولو ديكور داخلي",
    
    // OG Tags بالعربية
    ogTitle: "خدمات تجهيزات داخلية احترافية في السعودية | رام المحدودة",
    ogDescription: "حلول تجهيزات داخلية مفتاح باليد كاملة للمكاتب والتجارة والمطاعم والمساحات السكنية في جميع أنحاء السعودية",
    ogImage: "https://ramlimited.com.sa/images/services/fitout-og-image-ar.jpg",
    
    // Twitter بالعربية
    twitterTitle: "خدمات التجهيزات الداخلية السعودية | رام المحدودة",
    twitterDescription: "حلول تجهيزات داخلية احترافية للمشاريع التجارية والسكنية في جميع أنحاء السعودية",
    
    // JSON-LD Structured Data بالعربية
    structuredData: {
      "@context": "https://schema.org/ar",
      "@type": "Service",
      "serviceType": "خدمات التجهيزات الداخلية",
      "category": "بناء، تصميم داخلي",
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
        "name": "باقات خدمات التجهيزات الداخلية",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "خدمات تجهيزات المكاتب"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "تجهيزات المحلات التجارية والمعارض"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "تجهيزات المطاعم والمقاهي"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "تجهيزات وتجديد المساكن"
            }
          }
        ]
      },
      "offers": {
        "@type": "AggregateOffer",
        "lowPrice": "50000",
        "highPrice": "250000",
        "priceCurrency": "ريال سعودي",
        "offerCount": "3"
      }
    },
    
    // Breadcrumb بالعربية
    breadcrumb: "خدمات التجهيزات الداخلية",
    
    // FAQ Schema بالعربية
    faqs: [
      {
        question: "ما الذي تشمله خدمات التجهيزات الداخلية الخاصة بكم في السعودية؟",
        answer: "تشمل خدمات التجهيزات الداخلية الخاصة بنا حلول مفتاح باليد كاملة: تخطيط المساحة، التصميم، اختيار المواد، النجارة، الكهرباء، التكييف، أعمال التشطيب، وموافقات البلدية في جميع أنحاء السعودية."
      },
      {
        question: "ما هي أنواع المساحات التي تقومون بتجهيزها في السعودية؟",
        answer: "نقوم بتجهيز المكاتب، المحلات التجارية، المطاعم، المقاهي، المعارض، العيادات، الفلل السكنية، الشقق، والمساحات التجارية في جميع أنحاء السعودية بما في ذلك الرياض، جدة، والدمام."
      },
      {
        question: "هل أنتم معتمدون لأعمال التجهيزات الداخلية في السعودية؟",
        answer: "نعم، نحن معتمدون ISO 9001:2015 ولدينا موافقة بلدية لأعمال التجهيزات الداخلية. فريقنا يشمل مهندسين ومهندسين معماريين ومديري مشاريع معتمدين."
      },
      {
        question: "كم تستغرق مشاريع التجهيزات الداخلية عادة في السعودية؟",
        answer: "تستغرق مشاريع التجهيزات الداخلية عادة 3-10 أسابيع اعتمادًا على الحجم والتعقيد. قد تستغرق المكاتب الصغيرة 3-4 أسابيع، بينما قد تستغرق المساحات التجارية الكبيرة 8-10 أسابيع."
      },
      {
        question: "ما هي تكلفة تجهيزات المكاتب في السعودية؟",
        answer: "تبدأ تكاليف تجهيزات المكاتب من 50,000 ريال سعودي للتجهيزات الأساسية ويمكن أن تصل إلى 250,000+ ريال سعودي للتجهيزات المتميزة المخصصة، اعتمادًا على الحجم والمواصفات."
      },
      {
        question: "هل تتعاملون مع موافقات البلدية لمشاريع التجهيزات؟",
        answer: "نعم، ندير عملية موافقة البلدية الكاملة بما في ذلك تقديم الرسومات، الفحوصات، والحصول على شهادات الإنجاز النهائية لجميع مشاريع التجهيزات الخاصة بنا في السعودية."
      },
      {
        question: "ما هي المواد التي تستخدمونها لأعمال التجهيزات؟",
        answer: "نستخدم مواد عالية الجودة بما في ذلك الأخشاب المستوردة، القشرة، ألواح الجبس، مواد الأسقف المستعارة، الأرضيات (البلاط، الرخام، الخشب)، وتركيبات عالية الجودة من موردين موثوقين."
      }
    ]
  }
};