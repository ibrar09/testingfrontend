// src/data/services/plumbing/plumbingDetailsData.js
// Plumbing Hero Section data
import plumbing1 from '../../../../assets/images/plumbing1.webp';
import plumbing2 from '../../../../assets/images/plumbing2.webp';
import plumbing3 from '../../../../assets/images/plumbing3.webp';
import plumbingVideo from '../../../../assets/videos/Plumbing-demo-mp4.mp4';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
// Project Duration data icons
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import MilitaryTechIcon from '@mui/icons-material/MilitaryTech';
import SmartphoneIcon from '@mui/icons-material/Smartphone';
import { Zap, Crown, Shield } from "lucide-react";
import { Plumbing } from '@mui/icons-material';

// Plumbing Hero Section data
export const plumbingHeroData = {
  en: {
    title: "Plumbing Services in Saudi Arabia",
    heading: "Reliable & Efficient Plumbing Solutions",
    description: "Professional plumbing services for homes, offices, and commercial buildings across Riyadh, Jeddah, and Dammam.",
    cards: [
      { heading: "Fast Service", description: "Quick resolution of all plumbing issues with minimal disruption", icon: AccessTimeIcon },
      { heading: "Expert Team", description: "Certified plumbers with years of experience handling residential and commercial projects", icon: AccessTimeIcon },
      { heading: "Customer Satisfaction", description: "Prioritizing your needs and ensuring lasting plumbing solutions", icon: AccessTimeIcon },
    ],
    images: [plumbing1, plumbing2, plumbing3],
  },
  ar: {
    title: "خدمات السباكة في المملكة العربية السعودية",
    heading: "حلول سباكة موثوقة وفعالة",
    description: "خدمات سباكة احترافية للمنازل والمكاتب والمباني التجارية في الرياض وجدة والدمام.",
    cards: [
      { heading: "خدمة سريعة", description: "حل سريع لجميع مشاكل السباكة بأقل قدر من التعطيل", icon: AccessTimeIcon },
      { heading: "فريق خبراء", description: "سباكون معتمدون بخبرة سنوات في التعامل مع المشاريع السكنية والتجارية", icon: AccessTimeIcon },
      { heading: "رضا العملاء", description: "نولي احتياجاتك الأولوية وضمن حلول سباكة دائمة", icon: AccessTimeIcon },
    ],
    images: [plumbing1, plumbing2, plumbing3],
  }
};

// Project Duration data
export const plumbingProjectDurationData = {
  en: {
    cards: [
      {
        icon: <CalendarMonthIcon />,
        title: "AVERAGE PROJECT TIME",
        time: "2-6 WEEKS",
        color: "text-blue-600",
      },
      {
        icon: <AttachMoneyIcon />,
        title: "STARTING PRICE",
        time: "SAR 25,000",
        color: "text-blue-600",
      },
      {
        icon: <SmartphoneIcon />,
        title: "SERVICE CATEGORIES",
        time: "Residential / Commercial / Office Plumbing",
        color: "text-[rgba(115,115,115,1)]",
      },
      {
        icon: <MilitaryTechIcon />,
        title: "QUALITY STANDARD",
        time: "ISO 9001:2015 Certified",
        color: "text-gray-700",
      },
    ],
    note: "*Pricing may vary depending on project scope, materials, and specifications",
  },
  ar: {
    cards: [
      {
        icon: <CalendarMonthIcon />,
        title: "متوسط وقت المشروع",
        time: "٢-٦ أسابيع",
        color: "text-blue-600",
      },
      {
        icon: <AttachMoneyIcon />,
        title: "السعر البدائي",
        time: "٢٥,٠٠٠ ريال سعودي",
        color: "text-blue-600",
      },
      {
        icon: <SmartphoneIcon />,
        title: "فئات الخدمات",
        time: "سباكة سكنية / تجارية / مكاتب",
        color: "text-[rgba(115,115,115,1)]",
      },
      {
        icon: <MilitaryTechIcon />,
        title: "معيار الجودة",
        time: "معتمد ISO 9001:2015",
        color: "text-gray-700",
      },
    ],
    note: "*قد يختلف السعر حسب نطاق المشروع والمواد والمواصفات",
  }
};

// For backward compatibility
export default plumbingProjectDurationData.en;

// Plumbing Service Content
export const plumbingContent = {
  en: {
    title: "Expert Plumbing Solutions in Saudi Arabia",
    subtitle: "Complete plumbing services for residential and commercial projects, delivering safety, efficiency, and durability at every stage.",
    ProcessSteps: [
      {
        id: 1,
        title: "Consultation & Planning",
        description: "We analyze your requirements and create a detailed plan that ensures efficient plumbing installation and maintenance.",
      },
      {
        id: 2,
        title: "Installation & Setup",
        description: "Our certified technicians use modern tools to install high-quality piping, fixtures, and plumbing systems.",
      },
      {
        id: 3,
        title: "Testing & Quality Assurance",
        description: "All systems are rigorously tested to guarantee leak-free performance, optimal flow, and long-term reliability.",
      },
    ],
    featureLists: [
      "Certified and experienced plumbing professionals",
      "Durable and high-quality materials",
      "24/7 emergency support available",
      "Guaranteed leak-free systems",
    ],
    caseStudy: {
      title: "Corporate Office Plumbing Upgrade",
      location: "Riyadh, Saudi Arabia",
      summary: "Upgraded plumbing for a 10-story office complex, improving water efficiency by 35% and ensuring sustainable operations.",
      link: "#",
    },
  },
  ar: {
    title: "حلول سباكة متخصصة في المملكة العربية السعودية",
    subtitle: "خدمات سباكة كاملة للمشاريع السكنية والتجارية، تقدم السلامة والكفاءة والمتانة في كل مرحلة.",
    ProcessSteps: [
      {
        id: 1,
        title: "استشارة وتخطيط",
        description: "نحلل متطلباتك وننشئ خطة مفصلة تضمن تركيب وصيانة سباكة فعالة.",
      },
      {
        id: 2,
        title: "التركيب والإعداد",
        description: "يستخدم فنيونا المعتمدون أدوات حديثة لتركيب أنابيب وتركيبات وأنظمة سباكة عالية الجودة.",
      },
      {
        id: 3,
        title: "الاختبار وضمان الجودة",
        description: "يتم اختبار جميع الأنظمة بدقة لضمان أداء خالٍ من التسرب وتدفق مثالي وموثوقية طويلة الأمد.",
      },
    ],
    featureLists: [
      "محترفو سباكة معتمدون وذوو خبرة",
      "مواد متينة وعالية الجودة",
      "دعم طوارئ متاح على مدار الساعة",
      "أنظمة مضمونة خالية من التسرب",
    ],
    caseStudy: {
      title: "ترقية سباكة مكتب شركة",
      location: "الرياض، المملكة العربية السعودية",
      summary: "ترقية نظام السباكة لمجمع مكاتب مكون من 10 طوابق، مما أدى إلى تحسين كفاءة المياه بنسبة 35٪ وضمان عمليات مستدامة.",
      link: "#",
    },
  }
};

export const plumbingMedia = {
  en: {
    videoPlaceHolderUrl: plumbingVideo,
    videoLabel: "Plumbing Project Demo",
    stats: [
      { value: "250+", label: "Projects Completed" },
      { value: "98%", label: "Client Satisfaction" },
      { value: "24/7", label: "Support Available" },
    ],
  },
  ar: {
    videoPlaceHolderUrl: plumbingVideo,
    videoLabel: "عرض توضيحي لمشروع سباكة",
    stats: [
      { value: "٢٥٠+", label: "مشروع مكتمل" },
      { value: "٩٨٪", label: "رضا العملاء" },
      { value: "٢٤/٧", label: "الدعم متاح" },
    ],
  }
};

// Plumbing Detail Page
export const plumbingDetailsData = {
  en: {
    header: {
      title: "Comprehensive Plumbing Services",
      subtitle: "Providing complete plumbing solutions for homes and businesses with focus on efficiency, safety, and long-term performance.",
    },
    scope: {
      title: "Our Plumbing Expertise",
      listA: [
        "Pipe installation, repair, and replacement",
        "Leak detection and rapid repair",
        "Drain cleaning and unclogging",
        "Water heater and boiler installation & maintenance",
      ],
      listB: [
        "Bathroom and kitchen plumbing",
        "Emergency plumbing services",
        "Fixture installation: taps, showers, sinks",
        "Preventive maintenance checks for long-term reliability",
      ],
    },
    footer: {
      title: "Note",
      description: "*Final pricing may vary depending on project scope, materials, and location.",
    },
  },
  ar: {
    header: {
      title: "خدمات سباكة شاملة",
      subtitle: "تقديم حلول سباكة كاملة للمنازل والشركات مع التركيز على الكفاءة والسلامة والأداء طويل الأمد.",
    },
    scope: {
      title: "خبرتنا في السباكة",
      listA: [
        "تركيب وإصلاح واستبدال الأنابيب",
        "كشف التسريعات والإصلاح السريع",
        "تنظيف المصارف وإزالة الانسدادات",
        "تركيب وصيانة سخانات المياه والمراجل",
      ],
      listB: [
        "سباكة الحمامات والمطابخ",
        "خدمات سباكة الطوارئ",
        "تركيب التركيبات: صنابير، دشات، أحواض",
        "فحوصات الصيانة الوقائية لموثوقية طويلة الأمد",
      ],
    },
    footer: {
      title: "ملاحظة",
      description: "*قد يختلف السعر النهائي حسب نطاق المشروع والموال والموقع.",
    },
  }
};

// Pricing Cards - CHANGED FROM pricingData TO plumbingPricingData
export const plumbingPricingData = {
  en: {
    header: {
      title: "Transparent Plumbing Pricing Packages",
      subtitle: "Choose a package that fits your needs and budget. Prices are estimates and can be customized for your project.",
    },
    estimatorData: {
      title: "Quick Plumbing Cost Estimator",
      subtitle: "Get an instant estimate for your project based on size, complexity, and location.",
      sizeOptions: ["50–100 m²", "101–250 m²", "251–500 m²", "500+ m²"],
      complexityOptions: ["Low – Basic finishes", "Medium – Standard fit-out", "High – Custom build"],
      locationOptions: ["Riyadh Central", "Jeddah Area", "Dammam Area", "Other"],
      inputDefaults: {
        projectSize: "50–100 m²",
        complexity: "Low – Basic finishes",
        location: "Riyadh Central",
      },
      importantNotes: [
        "Prices are starting estimates based on standard specifications.",
        "Final pricing depends on materials, project complexity, and site conditions.",
        "All packages include project management and quality assurance.",
        "Site visit may be required for accurate pricing.",
        "Payment terms: 30% deposit, progress payments, 10% retention.",
        "Quotes are valid for 30 days from issuance.",
      ],
    },
    packages: [
      {
        packageName: "Starter",
        tagline: "Essential commercial plumbing solution",
        price: "SAR 35,000",
        startingFrom: "Starting from",
        features: [
          "Basic piping and fixture installation",
          "Standard electrical and lighting setup",
          "Essential HVAC integration",
          "Standard wall finishes and fixtures",
          "6-month workmanship warranty",
          "Basic project management",
          "Estimated timeline: 4–6 weeks",
        ],
        idealFor: "Small offices, retail spaces, or startup shops.",
        isPopular: false,
        icon: Zap,
      },
      {
        packageName: "Standard",
        tagline: "Complete plumbing setup",
        price: "SAR 75,000",
        startingFrom: "Starting from",
        features: [
          "Premium piping and fixtures",
          "Enhanced lighting and water efficiency",
          "Custom wall finishes and millwork",
          "12-month warranty on workmanship",
          "Dedicated project manager",
          "Expedited timeline: 3–4 weeks",
          "Post-completion quality inspection",
        ],
        idealFor: "Restaurants, professional offices, or medium commercial spaces.",
        isPopular: true,
        icon: Crown,
      },
      {
        packageName: "Premium",
        tagline: "Luxury turnkey plumbing solution",
        price: "SAR 150,000",
        startingFrom: "Starting from",
        features: [
          "High-end materials and custom finishes",
          "Tailored design and millwork solutions",
          "Advanced building systems and automation",
          "Brand compliance consultation",
          "Premium fixtures and equipment",
          "24-month extended warranty",
          "Senior project director supervision",
          "Priority scheduling: 2–3 weeks",
          "Ongoing maintenance package",
          "Full quality assurance program",
        ],
        idealFor: "Flagship stores, luxury restaurants, or corporate headquarters.",
        isPopular: false,
        icon: Shield,
      },
    ],
  },
  ar: {
    header: {
      title: "باقات أسعار سباكة شفافة",
      subtitle: "اختر الباقة التي تناسب احتياجاتك وميزانيتك. الأسعار تقديرية ويمكن تخصيصها لمشروعك.",
    },
    estimatorData: {
      title: "مقدر تكلفة سباكة سريع",
      subtitle: "احصل على تقدير فوري لمشروعك بناءً على الحجم والتعقيد والموقع.",
      sizeOptions: ["٥٠–١٠٠ م²", "١٠١–٢٥٠ م²", "٢٥١–٥٠٠ م²", "٥٠٠+ م²"],
      complexityOptions: ["منخفض – تشطيبات أساسية", "متوسط – تشطيب قياسي", "مرتفع – بناء مخصص"],
      locationOptions: ["وسط الرياض", "منطقة جدة", "منطقة الدمام", "أخرى"],
      inputDefaults: {
        projectSize: "٥٠–١٠٠ م²",
        complexity: "منخفض – تشطيبات أساسية",
        location: "وسط الرياض",
      },
      importantNotes: [
        "الأسعار هي تقديرات أولية تعتمد على المواصفات القياسية.",
        "يعتمد السعر النهائي على المواد وتعقيد المشروع وظروف الموقع.",
        "تشمل جميع الباقات إدارة المشروع وضمان الجودة.",
        "قد تكون زيارة الموقع مطلوبة للحصول على تسعير دقيق.",
        "شروط الدفع: دفعة أولى 30٪، مدفوعات مرحلية، استبقاء 10٪.",
        "العروض سارية لمدة 30 يومًا من تاريخ الإصدار.",
      ],
    },
    packages: [
      {
        packageName: "بداية",
        tagline: "حل سباكة تجاري أساسي",
        price: "٣٥,٠٠٠ ريال سعودي",
        startingFrom: "بداية من",
        features: [
          "تركيب أنابيب وتركيبات أساسية",
          "إعداد كهرباء وإنارة قياسي",
          "تكييف وتكامل أساسي",
          "تشطيبات وجدران وتركيبات قياسية",
          "ضمان عمل لمدة 6 أشهر",
          "إدارة مشروع أساسية",
          "الجدول الزمني المقدر: ٤–٦ أسابيع",
        ],
        idealFor: "مكاتب صغيرة، مساحات تجارية، أو محلات ناشئة.",
        isPopular: false,
        icon: Zap,
      },
      {
        packageName: "قياسي",
        tagline: "إعداد سباكة كامل",
        price: "٧٥,٠٠٠ ريال سعودي",
        startingFrom: "بداية من",
        features: [
          "أنابيب وتركيبات ممتازة",
          "إنارة محسنة وكفاءة مياه",
          "تشطيبات جدران وأعمال خشبية مخصصة",
          "ضمان عمل لمدة 12 شهرًا",
          "مدير مشروع مخصص",
          "جدول زمني معجل: ٣–٤ أسابيع",
          "فحص جودة بعد الانتهاء",
        ],
        idealFor: "مطاعم، مكاتب مهنية، أو مساحات تجارية متوسطة.",
        isPopular: true,
        icon: Crown,
      },
      {
        packageName: "مميز",
        tagline: "حل سباكة فاخر مفتاح باليد",
        price: "١٥٠,٠٠٠ ريال سعودي",
        startingFrom: "بداية من",
        features: [
          "مواد عالية الجودة وتشطيبات مخصصة",
          "تصميم وأعمال خشبية مصممة خصيصًا",
          "أنظمة بناء متقدمة وأتمتة",
          "استشارة امتثال للعلامة التجارية",
          "تركيبات ومعدات ممتازة",
          "ضمان ممتد لمدة 24 شهرًا",
          "إشراف مدير مشروع كبير",
          "جدولة أولوية: ٢–٣ أسابيع",
          "باقة صيانة مستمرة",
          "برنامج ضمان جودة كامل",
        ],
        idealFor: "متاجر رئيسية، مطاعم فاخرة، أو مقرات الشركات.",
        isPopular: false,
        icon: Shield,
      },
    ],
  }
};

// Quality & Testimonials
export const plumbingQualityData = {
  en: {
    header: {
      title: "Trusted Plumbing Experts",
      subtitle: "Certified, reliable, and professional plumbing services for residential and commercial projects across Saudi Arabia.",
    },
    certifications: [
      { icon: "Award", title: "ISO 9001:2015", subtitle: "Quality Management System" },
      { icon: "Shield", title: "Safety Certified", subtitle: "OSHA & HSE Standards" },
      { icon: "CheckCircle", title: "Licensed Contractor", subtitle: "Municipality Approved in Saudi Arabia" },
    ],
    testimonials: {
      title: "Client Testimonials",
      reviews: [
        {
          quote: "Fast, professional, and clean plumbing service. Highly recommend!",
          name: "Ahmad Al-Faisal",
          title: "Project Manager",
          company: "Riyadh Mall",
        },
        {
          quote: "Excellent workmanship and timely completion. Great team!",
          name: "Sara Al-Mutairi",
          title: "Operations Head",
          company: "Al-Noor Interiors",
        },
        {
          quote: "Reliable and responsive plumbing services — solved our issues quickly.",
          name: "Mohammed Al-Qahtani",
          title: "Facility Supervisor",
          company: "Elite Residences",
        },
      ],
    },
    stats: [
      { number: "250+", label: "Projects Completed" },
      { number: "98%", label: "Customer Satisfaction" },
      { number: "15+", label: "Years of Experience" },
      { number: "24/7", label: "Emergency Support" },
    ],
    cta: {
      title: "Need Expert Plumbing Support?",
      subtitle: "Contact our certified team today for a detailed inspection and tailored quote.",
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
      title: "خبراء سباكة موثوقون",
      subtitle: "خدمات سباكة معتمدة وموثوقة واحترافية للمشاريع السكنية والتجارية في جميع أنحاء المملكة العربية السعودية.",
    },
    certifications: [
      { icon: "Award", title: "ISO 9001:2015", subtitle: "نظام إدارة الجودة" },
      { icon: "Shield", title: "معتمد للسلامة", subtitle: "معايير OSHA و HSE" },
      { icon: "CheckCircle", title: "مقاول مرخص", subtitle: "معتمد من البلدية في المملكة العربية السعودية" },
    ],
    testimonials: {
      title: "شهادات العملاء",
      reviews: [
        {
          quote: "خدمة سباكة سريعة واحترافية ونظيفة. أوصي بشدة!",
          name: "أحمد الفيصل",
          title: "مدير المشروع",
          company: "رياض مول",
        },
        {
          quote: "إتقان عمل ممتاز وإنجاز في الوقت المحدد. فريق رائع!",
          name: "سارة المطيري",
          title: "رئيسة العمليات",
          company: "النور للديكورات",
        },
        {
          quote: "خدمات سباكة موثوقة وسريعة الاستجابة - حلت مشاكلنا بسرعة.",
          name: "محمد القحطاني",
          title: "مشرف المرافق",
          company: "إيليت ريزيدنسز",
        },
      ],
    },
    stats: [
      { number: "٢٥٠+", label: "مشروع مكتمل" },
      { number: "٩٨٪", label: "رضا العملاء" },
      { number: "١٥+", label: "سنوات خبرة" },
      { number: "٢٤/٧", label: "دعم الطوارئ" },
    ],
    cta: {
      title: "هل تحتاج إلى دعم سباكة متخصص؟",
      subtitle: "اتصل بفريقنا المعتمد اليوم للحصول على فحص مفصل وعرض مخصص.",
      buttonText: "طلب استشارة",
      secondaryLinkText: "استكشاف خدمات أخرى",
    },
    contact: {
      phone: "+٩٦٦ ٥٩٣٥٣٤٨٨١",
      email: "ramlimited.sa@gmail.com",
      address: "الرياض، المملكة العربية السعودية",
    },
  }
};

// For backward compatibility (single language exports)
export const plumbingHeroDataEn = plumbingHeroData.en;
export const plumbingProjectDurationDataEn = plumbingProjectDurationData.en;
export const plumbingContentEn = plumbingContent.en;
export const plumbingMediaEn = plumbingMedia.en;
export const plumbingDetailsDataEn = plumbingDetailsData.en;
export const plumbingPricingDataEn = plumbingPricingData.en;
export const plumbingQualityDataEn = plumbingQualityData.en;

// IMPORTANT: Also export the old pricingData for backward compatibility
export const pricingData = plumbingPricingData;