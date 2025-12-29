// src/data/services/kitchen/kitchenEquipmentDetailsData.js

import kitchen1 from '../../../../assets/images/Kitchen1.webp';
import kitchen2 from '../../../../assets/images/Kitchen2.webp';
import kitchen3 from '../../../../assets/images/Kitchen3.webp';
import kitchen from '../../../../assets/videos/Kitchen-demo.mp4';

import AccessTimeIcon from '@mui/icons-material/AccessTime';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import MilitaryTechIcon from '@mui/icons-material/MilitaryTech';
import RestaurantIcon from '@mui/icons-material/Restaurant';

import { Utensils, Shield, Wrench } from "lucide-react";
import { Kitchen } from '@mui/icons-material';

// --- HERO SECTION DATA ---
export const kitchenHeroData = {
  en: {
    title: "Commercial Kitchen Equipment Services | Professional Installation & Maintenance",
    heading: "Professional Commercial & Industrial Kitchen Equipment Installation & Maintenance",
    description: "Expert commercial kitchen equipment installation, maintenance & repair services in Saudi Arabia. Certified technicians for restaurants, hotels, and industrial kitchens. ISO 22000 certified. Fast setup & 24/7 emergency support.",
    cards: [
      { heading: "Fast Installation", description: "Quick, efficient setup for all major brands including Rational, Alto-Shaam, and Electrolux", icon: AccessTimeIcon },
      { heading: "Certified Technicians", description: "Saudi Arabia licensed experts for professional kitchen equipment installation and maintenance", icon: RestaurantIcon },
      { heading: "Reliable Support", description: "24/7 emergency kitchen equipment repair service across Riyadh, Jeddah, and Dammam", icon: MilitaryTechIcon },
    ],
    images: [kitchen1, kitchen2, kitchen3],
  },
  ar: {
    title: "خدمات معدات المطابخ التجارية | تركيب وصيانة احترافية",
    heading: "تركيب وصيانة معدات المطابخ التجارية والصناعية الاحترافية",
    description: "خدمات تركيب وصيانة وإصلاح معدات المطابخ التجارية في المملكة العربية السعودية. فنيون معتمدون للمطاعم والفنادق والمطابخ الصناعية. معتمد ISO 22000. إعداد سريع ودعم طوارئ 24/7.",
    cards: [
      { heading: "تركيب سريع", description: "إعداد سريع وفعال لجميع العلامات التجارية الرئيسية بما في ذلك راشونال وألتو-شام وإلكترولوكس", icon: AccessTimeIcon },
      { heading: "فنيون معتمدون", description: "خبراء مرخصون في المملكة العربية السعودية لتركيب وصيانة معدات المطابخ الاحترافية", icon: RestaurantIcon },
      { heading: "دعم موثوق", description: "خدمة إصلاح معدات مطابخ طارئة على مدار الساعة في الرياض وجدة والدمام", icon: MilitaryTechIcon },
    ],
    images: [kitchen1, kitchen2, kitchen3],
  }
};

// --- PROJECT DURATION DATA ---
const kitchenProjectDurationData = {
  en: {
    cards: [
      { 
        icon: <CalendarMonthIcon />, 
        title: "AVERAGE PROJECT DURATION", 
        time: "1–4 WEEKS", 
        color: "text-blue-600",
        description: "Commercial kitchen equipment installation timeline"
      },
      { 
        icon: <AttachMoneyIcon />, 
        title: "STARTING PRICE", 
        time: "SAR 15,000", 
        color: "text-blue-600",
        description: "Kitchen equipment service cost in Saudi Arabia"
      },
      { 
        icon: <RestaurantIcon />, 
        title: "SERVICE CATEGORIES", 
        time: "COMMERCIAL / INDUSTRIAL / HOTEL", 
        color: "text-[rgba(115,115,115,1)]",
        description: "Kitchen types we serve"
      },
      { 
        icon: <MilitaryTechIcon />, 
        title: "QUALITY STANDARD", 
        time: "ISO 22000:2018", 
        color: "text-gray-700",
        description: "Food safety management certification"
      },
    ],
    note: "*Pricing depends on equipment brand, kitchen system type, and kitchen size. Contact for exact commercial kitchen equipment installation quote.",
  },
  ar: {
    cards: [
      { 
        icon: <CalendarMonthIcon />, 
        title: "متوسط مدة المشروع", 
        time: "1–4 أسابيع", 
        color: "text-blue-600",
        description: "الجدول الزمني لتركيب معدات المطبخ التجارية"
      },
      { 
        icon: <AttachMoneyIcon />, 
        title: "السعر البدائي", 
        time: "15,000 ريال سعودي", 
        color: "text-blue-600",
        description: "تكلفة خدمة معدات المطبخ في المملكة العربية السعودية"
      },
      { 
        icon: <RestaurantIcon />, 
        title: "فئات الخدمات", 
        time: "تجاري / صناعي / فندقي", 
        color: "text-[rgba(115,115,115,1)]",
        description: "أنواع المطابخ التي نخدمها"
      },
      { 
        icon: <MilitaryTechIcon />, 
        title: "معيار الجودة", 
        time: "ISO 22000:2018", 
        color: "text-gray-700",
        description: "شهادة نظام إدارة سلامة الغذاء"
      },
    ],
    note: "*يعتمد السعر على علامة المعدات التجارية ونوع نظام المطبخ وحجم المطبخ. اتصل للحصول على عرض سعر دقيق لتركيب معدات المطبخ التجارية.",
  }
};

export default kitchenProjectDurationData;

// --- CONTENT DATA ---
export const kitchenContent = {
  en: {
    title: "End-to-End Commercial Kitchen Equipment Solutions in Saudi Arabia",
    subtitle: "Professional kitchen equipment installation, preventive maintenance, and repair services for seamless culinary operations in restaurants, hotels, and industrial kitchens.",
    ProcessSteps: [
      { 
        id: 1, 
        title: "Kitchen Site Evaluation & Planning", 
        description: "Comprehensive assessment of commercial kitchen layout, utilities, and ventilation requirements before equipment setup."
      },
      { 
        id: 2, 
        title: "Professional Kitchen Equipment Installation", 
        description: "Expert installation of commercial ovens, industrial chillers, exhaust hood systems, and kitchen ventilation equipment."
      },
      { 
        id: 3, 
        title: "Kitchen Equipment Maintenance & Repair", 
        description: "Scheduled preventive maintenance, equipment calibration, and 24/7 emergency repair services for commercial kitchens."
      },
    ],
    featureLists: [
      "Saudi Arabia certified kitchen installation team",
      "Expert support for all international commercial kitchen equipment brands",
      "24/7 emergency kitchen equipment repair services in Riyadh, Jeddah, Dammam",
      "Customized preventive maintenance schedules for commercial kitchens",
      "Kitchen workflow optimization and energy efficiency consulting",
    ],
    caseStudy: {
      title: "5-Star Hotel Kitchen Equipment Upgrade Case Study",
      location: "Jeddah, Saudi Arabia - Luxury Hospitality Sector",
      summary: "Complete installation and upgrade of commercial kitchen systems for a 5-star hotel, resulting in 40% improvement in energy efficiency and kitchen workflow speed with ISO 22000 compliance.",
      link: "#",
    },
  },
  ar: {
    title: "حلول معدات مطابخ تجارية متكاملة في المملكة العربية السعودية",
    subtitle: "خدمات تركيب وصيانة وقائية وإصلاح معدات مطابخ احترافية لعمليات طهي سلسة في المطاعم والفنادق والمطابخ الصناعية.",
    ProcessSteps: [
      { 
        id: 1, 
        title: "تقييم موقع المطبخ التجاري والتخطيط", 
        description: "تقييم شامل لتخطيط المطبخ التجاري والمرافق ومتطلبات التهوية قبل تركيب المعدات."
      },
      { 
        id: 2, 
        title: "تركيب معدات مطبخ تجارية احترافية", 
        description: "تركيب احترافي للأفران التجارية والمبردات الصناعية وأنظمة هوود العادم ومعدات تهوية المطابخ."
      },
      { 
        id: 3, 
        title: "صيانة وإصلاح معدات المطبخ", 
        description: "صيانة وقائية مجدولة ومعايرة المعدات وخدمات إصلاح طارئة على مدار الساعة للمطابخ التجارية."
      },
    ],
    featureLists: [
      "فريق تركيب مطابخ معتمد في المملكة العربية السعودية",
      "دعم احترافي لجميع العلامات التجارية الدولية لمعدات المطابخ التجارية",
      "خدمات إصلاح معدات مطابخ طارئة على مدار الساعة في الرياض وجدة والدمام",
      "جداول صيانة وقائية مخصصة للمطابخ التجارية",
      "تحسين سير عمل المطبخ واستشارات كفاءة الطاقة",
    ],
    caseStudy: {
      title: "دراسة حالة ترقية معدات مطبخ فندق 5 نجوم",
      location: "جدة، المملكة العربية السعودية - قطاع الضيافة الفاخرة",
      summary: "تركيب وترقية كاملة لأنظمة المطبخ التجارية لفندق 5 نجوم، مما أدى إلى تحسين كفاءة الطاقة وسرعة سير عمل المطبخ بنسبة 40٪ مع الامتثال لمعايير ISO 22000.",
      link: "#",
    },
  }
};

// --- MEDIA DATA ---
export const kitchenMedia = {
  en: {
    videoPlaceHolderUrl: Kitchen,
    videoLabel: "Commercial Kitchen Equipment Installation Process in Saudi Arabia",
    stats: [
      { value: "150+", label: "Commercial Kitchen Projects Completed" },
      { value: "98%", label: "Client Satisfaction Rate" },
      { value: "24/7", label: "Kitchen Equipment Emergency Support" },
      { value: "50+", label: "International Kitchen Brands Supported" },
    ],
  },
  ar: {
    videoPlaceHolderUrl: Kitchen,
    videoLabel: "عملية تركيب معدات مطبخ تجارية في المملكة العربية السعودية",
    stats: [
      { value: "150+", label: "مشروع مطبخ تجاري مكتمل" },
      { value: "98%", label: "معدل رضا العملاء" },
      { value: "24/7", label: "دعم طوارئ معدات المطبخ" },
      { value: "50+", label: "علامة تجارية دولية للمطابخ مدعومة" },
    ],
  }
};

// --- DETAILS PAGE DATA ---
export const kitchenDetailsData = {
  en: {
    header: {
      title: "Comprehensive Commercial Kitchen Equipment Services in Saudi Arabia",
      subtitle: "End-to-end commercial and industrial kitchen equipment solutions designed for maximum efficiency, food safety compliance, and operational performance across Saudi Arabia.",
    },
    scope: {
      title: "Commercial Kitchen Equipment Expertise Includes",
      listA: [
        "Commercial cooking range and oven installation",
        "Industrial exhaust hood and ventilation system setup",
        "Commercial refrigeration and chilling system maintenance",
        "Industrial dishwasher and commercial steam oven services",
      ],
      listB: [
        "Custom preventive maintenance plans for commercial kitchens",
        "24/7 emergency kitchen equipment breakdown repairs",
        "Commercial kitchen layout optimization and workflow design",
        "Energy-efficient commercial kitchen equipment consulting",
      ],
    },
    footer: {
      title: "Professional Kitchen Service Note",
      description: "*Final pricing and project duration vary depending on equipment brand, commercial kitchen layout complexity, and specific equipment types. Contact for detailed commercial kitchen equipment quotation.",
    },
  },
  ar: {
    header: {
      title: "خدمات معدات مطابخ تجارية شاملة في المملكة العربية السعودية",
      subtitle: "حلول معدات مطابخ تجارية وصناعية متكاملة مصممة لأقصى كفاءة وامتثال لسلامة الغذاء وأداء تشغيلي في جميع أنحاء المملكة العربية السعودية.",
    },
    scope: {
      title: "تشمل خبرة معدات المطابخ التجارية",
      listA: [
        "تركيب أفران وأفران طهي تجارية",
        "إعداد أنظمة هوود عادم صناعية وتهوية",
        "صيانة أنظمة التبريد والتجميد التجارية",
        "خدمات غسالات الصحون الصناعية والأفران البخارية التجارية",
      ],
      listB: [
        "خطط صيانة وقائية مخصصة للمطابخ التجارية",
        "إصلاحات أعطال معدات مطابخ طارئة على مدار الساعة",
        "تحسين تخطيط المطابخ التجارية وتصميم سير العمل",
        "استشارات معدات مطابخ تجارية موفرة للطاقة",
      ],
    },
    footer: {
      title: "ملاحظة خدمة مطبخ احترافية",
      description: "*يختلف السعر النهائي ومدة المشروع حسب علامة المعدات التجارية وتعقيد تخطيط المطبخ التجاري وأنواع المعدات المحددة. اتصل للحصول على عرض أسعار مفصل لمعدات المطبخ التجارية.",
    },
  }
};

// --- PRICING DATA ---
export const kitchenPricingData = {
  en: {
    header: {
      title: "Transparent Commercial Kitchen Equipment Pricing in Saudi Arabia",
      subtitle: "Explore our flexible commercial kitchen service packages designed specifically for restaurants, hotels, cafes, and industrial kitchens with clear pricing and service inclusions.",
    },
    estimatorData: {
      title: "Commercial Kitchen Setup Cost Estimator",
      subtitle: "Get instant estimated installation costs for your commercial kitchen based on size, equipment type, and location in Saudi Arabia.",
      sizeOptions: ["Small Commercial Kitchen (Up to 100 m²)", "Medium Restaurant Kitchen (101–300 m²)", "Large Industrial Kitchen (300+ m²)"],
      complexityOptions: ["Basic Cafe/Bakery Setup", "Standard Restaurant Kitchen", "Premium Hotel Kitchen System"],
      locationOptions: ["Riyadh - Central Region", "Jeddah - Western Region", "Dammam - Eastern Region", "Other Saudi Arabia Cities"],
      inputDefaults: {
        projectSize: "Small Commercial Kitchen (Up to 100 m²)",
        complexity: "Standard Restaurant Kitchen",
        location: "Riyadh - Central Region",
      },
      importantNotes: [
        "Estimates based on standard commercial-grade kitchen equipment pricing in Saudi Arabia",
        "Professional site inspection required for accurate commercial kitchen quotations",
        "Custom maintenance contracts available for hotels and restaurant chains",
        "Equipment warranty terms vary by international kitchen brand specifications",
        "All commercial kitchen quotes valid for 30 days from issuance date",
      ],
    },
    packages: [
      {
        packageName: "Commercial Starter Package",
        tagline: "Basic commercial kitchen setup for small food businesses",
        price: "SAR 15,000",
        startingFrom: "Starting from",
        features: [
          "Commercial cooking range & ventilation installation",
          "Standard electrical wiring and safety compliance",
          "Basic equipment setup and testing",
          "3-month service warranty coverage",
        ],
        idealFor: "Small cafes, bakeries, or startup restaurants",
        isPopular: false,
        icon: Utensils,
      },
      {
        packageName: "Professional Restaurant Package",
        tagline: "Complete commercial kitchen installation solution",
        price: "SAR 45,000",
        startingFrom: "Starting from",
        features: [
          "Professional-grade commercial kitchen equipment installation",
          "Custom exhaust & ventilation system design and setup",
          "Energy-efficient kitchen layout optimization",
          "12-month comprehensive service warranty",
          "2 preventive maintenance visits included",
        ],
        idealFor: "Restaurants, hotels, and catering businesses",
        isPopular: true,
        icon: Wrench,
      },
      {
        packageName: "Premium Industrial Package",
        tagline: "Full luxury commercial kitchen solution with smart features",
        price: "SAR 90,000",
        startingFrom: "Starting from",
        features: [
          "Smart kitchen monitoring and management system",
          "Custom fabrication and professional installation",
          "Priority 24/7 maintenance and support plan",
          "Extended 24-month comprehensive warranty",
          "Quarterly preventive maintenance schedule",
          "Energy efficiency optimization consulting",
        ],
        idealFor: "Luxury hotels, resorts, and large industrial kitchens",
        isPopular: false,
        icon: Shield,
      },
    ],
  },
  ar: {
    header: {
      title: "تسعير معدات مطابخ تجارية شفاف في المملكة العربية السعودية",
      subtitle: "استكشف باقات خدمة المطابخ التجارية المرنة المصممة خصيصًا للمطاعم والفنادق والمقاهي والمطابخ الصناعية مع أسعار واضحة واشتمالات الخدمة.",
    },
    estimatorData: {
      title: "مقدر تكلفة إعداد مطابخ تجارية",
      subtitle: "احصل على تقدير فوري لتكاليف التركيب لمطبخك التجاري بناءً على الحجم ونوع المعدات والموقع في المملكة العربية السعودية.",
      sizeOptions: ["مطبخ تجاري صغير (حتى 100 م²)", "مطبخ مطعم متوسط (101–300 م²)", "مطبخ صناعي كبير (300+ م²)"],
      complexityOptions: ["إعداد مقهى/مخبز أساسي", "مطبخ مطعم قياسي", "نظام مطبخ فندق متميز"],
      locationOptions: ["الرياض - المنطقة الوسطى", "جدة - المنطقة الغربية", "الدمام - المنطقة الشرقية", "مدن سعودية أخرى"],
      inputDefaults: {
        projectSize: "مطبخ تجاري صغير (حتى 100 م²)",
        complexity: "مطبخ مطعم قياسي",
        location: "الرياض - المنطقة الوسطى",
      },
      importantNotes: [
        "التقديرات تعتمد على تسعير معدات المطابخ التجارية القياسية في المملكة العربية السعودية",
        "يُطلب فحص موقع احترافي للحصول على عروض أسعار دقيقة للمطابخ التجارية",
        "عقود صيانة مخصصة متاحة للفنادق وسلاسل المطاعم",
        "تختلف شروط ضمان المعدات حسب مواصفات العلامات التجارية الدولية للمطابخ",
        "جميع عروض أسعار المطابخ التجارية سارية لمدة 30 يومًا من تاريخ الإصدار",
      ],
    },
    packages: [
      {
        packageName: "باقة البدء التجارية",
        tagline: "إعداد مطبخ تجاري أساسي للمشاريع الغذائية الصغيرة",
        price: "15,000 ريال سعودي",
        startingFrom: "بداية من",
        features: [
          "تركيب فرن طهي تجاري وأنظمة تهوية",
          "تمديدات كهربائية قياسية وامتثال للسلامة",
          "إعداد واختبار المعدات الأساسية",
          "تغطية ضمان خدمة 3 أشهر",
        ],
        idealFor: "مقاهي صغيرة أو مخابز أو مطاعم ناشئة",
        isPopular: false,
        icon: Utensils,
      },
      {
        packageName: "باقة مطعم احترافية",
        tagline: "حل تركيب مطبخ تجاري كامل",
        price: "45,000 ريال سعودي",
        startingFrom: "بداية من",
        features: [
          "تركيب معدات مطابخ تجارية بدرجة احترافية",
          "تصميم وإعداد نظام عادم وتهوية مخصص",
          "تحسين تخطيط المطبخ لتحقيق كفاءة الطاقة",
          "ضمان خدمة شامل لمدة 12 شهراً",
          "زيارتي صيانة وقائية مشمولتان",
        ],
        idealFor: "المطاعم والفنادق وأعمال التموين",
        isPopular: true,
        icon: Wrench,
      },
      {
        packageName: "باقة صناعية متميزة",
        tagline: "حل مطبخ تجاري فاخر كامل مع ميزات ذكية",
        price: "90,000 ريال سعودي",
        startingFrom: "بداية من",
        features: [
          "نظام مراقبة وإدارة مطبخ ذكي",
          "تصنيع وتركيب احترافي مخصص",
          "خطة صيانة ودعم بأولوية على مدار الساعة",
          "ضمان شامل ممتد 24 شهراً",
          "جدول صيانة وقائية ربع سنوي",
          "استشارات تحسين كفاءة الطاقة",
        ],
        idealFor: "الفنادق الفاخرة والمنتجعات والمطابخ الصناعية الكبيرة",
        isPopular: false,
        icon: Shield,
      },
    ],
  }
};

// --- QUALITY & TESTIMONIALS DATA ---
export const kitchenQualityData = {
  en: {
    header: {
      title: "Certified Commercial Kitchen Equipment Experts in Saudi Arabia",
      subtitle: "ISO-certified, reliable, and efficient commercial kitchen solutions serving restaurants, hotels, and industrial facilities across Saudi Arabia with 98% client satisfaction.",
    },
    certifications: [
      { 
        icon: "Award", 
        title: "ISO 22000:2018 Certified", 
        subtitle: "Food Safety Management System for Commercial Kitchens"
      },
      { 
        icon: "Shield", 
        title: "Safety Compliance Certified", 
        subtitle: "HACCP & Saudi Arabia Fire Safety Standards Compliance"
      },
      { 
        icon: "CheckCircle", 
        title: "Authorized Service Provider", 
        subtitle: "Official Partner for Top International Commercial Kitchen Brands"
      },
      { 
        icon: "Users", 
        title: "Saudi Arabia Licensed", 
        subtitle: "Fully Licensed Kitchen Equipment Services in KSA"
      },
    ],
    testimonials: {
      title: "Commercial Kitchen Client Success Stories",
      reviews: [
        { 
          quote: "Professional kitchen equipment installation that transformed our restaurant operations. Their team exceeded our expectations with the Rational combi oven setup.", 
          name: "Ali Al-Harbi", 
          title: "Restaurant Owner", 
          company: "Al Harbi Grill - Riyadh"
        },
        { 
          quote: "Exceptional commercial kitchen service for our 5-star hotel. The Electrolux equipment installation was flawless and their 24/7 support is invaluable.", 
          name: "Mona Al-Qahtani", 
          title: "Hotel Operations Manager", 
          company: "Riyadh Palace Hotel"
        },
        { 
          quote: "Reliable kitchen equipment maintenance partner for our industrial facility. Their preventive maintenance program saved us significant downtime costs.", 
          name: "Hassan Bin Omar", 
          title: "Operations Director", 
          company: "Taste Factory Industrial Kitchen - Jeddah"
        },
      ],
    },
    stats: [
      { number: "150+", label: "Commercial Kitchen Projects Successfully Completed" },
      { number: "98%", label: "Client Satisfaction Rate Across Saudi Arabia" },
      { number: "10+", label: "Years of Commercial Kitchen Equipment Experience" },
      { number: "24/7", label: "Emergency Kitchen Equipment Support Availability" },
      { number: "50+", label: "International Kitchen Equipment Brands Supported" },
    ],
    cta: {
      title: "Need Professional Commercial Kitchen Setup or Maintenance in Saudi Arabia?",
      subtitle: "Contact our certified kitchen equipment specialists today for a customized commercial kitchen solution tailored to your business needs.",
      buttonText: "Get Free Kitchen Equipment Quote",
      secondaryLinkText: "View Commercial Kitchen Project Portfolio",
    },
    contact: {
      phone: "+966 593534881",
      email: "ramlimited.sa@gmail.com",
      address: "Riyadh, Saudi Arabia - Serving All KSA Regions",
      serviceAreas: "Commercial Kitchen Services Available in Riyadh, Jeddah, Dammam, and Across Saudi Arabia",
    },
  },
  ar: {
    header: {
      title: "خبراء معدات مطابخ تجارية معتمدون في المملكة العربية السعودية",
      subtitle: "حلول مطابخ تجارية معتمدة ISO وموثوقة وفعالة تخدم المطاعم والفنادق والمرافق الصناعية في جميع أنحاء المملكة العربية السعودية مع 98٪ رضا العملاء.",
    },
    certifications: [
      { 
        icon: "Award", 
        title: "معتمد ISO 22000:2018", 
        subtitle: "نظام إدارة سلامة الغذاء للمطابخ التجارية"
      },
      { 
        icon: "Shield", 
        title: "معتمد الامتثال للسلامة", 
        subtitle: "امتثال معايير HACCP ومعايير السلامة من الحرائق السعودية"
      },
      { 
        icon: "CheckCircle", 
        title: "مزود خدمة معتمد", 
        subtitle: "شريك رسمي لأفضل العلامات التجارية الدولية للمطابخ التجارية"
      },
      { 
        icon: "Users", 
        title: "مرخص في المملكة العربية السعودية", 
        subtitle: "خدمات معدات مطابخ مرخصة بالكامل في المملكة"
      },
    ],
    testimonials: {
      title: "قصص نجاح عملاء المطابخ التجارية",
      reviews: [
        { 
          quote: "تركيب معدات مطبخ احترافي حول عمليات مطعمنا بالكامل. فاق فريقهم توقعاتنا بإعداد فرن كومبي راشونال.", 
          name: "علي الحربي", 
          title: "مالك مطعم", 
          company: "شواء الحربي - الرياض"
        },
        { 
          quote: "خدمة مطابخ تجارية استثنائية لفندقنا 5 نجوم. كان تركيب معدات إلكترولوكس لا تشوبه شائبة ودعمهم على مدار الساعة لا يقدر بثمن.", 
          name: "منى القحطاني", 
          title: "مديرة عمليات فندق", 
          company: "فندق قصر الرياض"
        },
        { 
          quote: "شريك صيانة معدات مطابخ موثوق لمنشأتنا الصناعية. وفر لنا برنامج الصيانة الوقائية الخاص بهم تكاليف توقف كبيرة.", 
          name: "حسن بن عمر", 
          title: "مدير العمليات", 
          company: "مطبخ مصنع الذوق الصناعي - جدة"
        },
      ],
    },
    stats: [
      { number: "150+", label: "مشروع مطبخ تجاري مكتمل بنجاح" },
      { number: "98%", label: "معدل رضا العملاء في جميع أنحاء المملكة العربية السعودية" },
      { number: "10+", label: "سنوات خبرة في معدات المطابخ التجارية" },
      { number: "24/7", label: "توفر دعم طوارئ معدات المطبخ" },
      { number: "50+", label: "علامة تجارية دولية لمعدات المطابخ مدعومة" },
    ],
    cta: {
      title: "هل تحتاج إلى إعداد أو صيانة مطبخ تجاري احترافية في المملكة العربية السعودية؟",
      subtitle: "اتصل بخبراء معدات المطابخ المعتمدين لدينا اليوم للحصول على حل مطبخ تجاري مخصص مصمم خصيصًا لاحتياجات عملك.",
      buttonText: "احصل على عرض أسعار مجاني لمعدات المطبخ",
      secondaryLinkText: "عرض محفظة مشاريع المطابخ التجارية",
    },
    contact: {
      phone: "+966 593534881",
      email: "ramlimited.sa@gmail.com",
      address: "الرياض، المملكة العربية السعودية - نخدم جميع مناطق المملكة",
      serviceAreas: "خدمات المطابخ التجارية متاحة في الرياض وجدة والدمام وعبر المملكة العربية السعودية",
    },
  }
};