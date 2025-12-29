// src/data/services/epoxy/EpoxySolutionsData.js

import epoxy1 from '../../../../assets/images/epoxy1.webp';
import epoxy2 from '../../../../assets/images/epoxy2.webp';
import epoxy3 from '../../../../assets/images/epoxy3.webp';
import epoxy from '../../../../assets/videos/Epoxy-demo.mp4';

import AccessTimeIcon from '@mui/icons-material/AccessTime';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import MilitaryTechIcon from '@mui/icons-material/MilitaryTech';
import BuildIcon from '@mui/icons-material/Build';

import { Zap, Shield, Crown } from "lucide-react";

// --- HERO SECTION DATA ---
export const epoxyHeroData = {
  en: {
    title: "Professional Epoxy Flooring in Saudi Arabia",
    heading: "Durable, Stylish & Long-Lasting Epoxy Floor Coatings",
    description: "We provide premium epoxy flooring solutions for residential, commercial, and industrial spaces across Saudi Arabia, including installation, maintenance, and repair.",
    cards: [
      { heading: "Rapid Installation", description: "Efficient epoxy application for all types of floors.", icon: AccessTimeIcon },
      { heading: "Certified Experts", description: "Licensed flooring professionals ensuring high-quality results.", icon: BuildIcon },
      { heading: "Custom Designs", description: "Durable and aesthetic flooring tailored to your project.", icon: MilitaryTechIcon },
    ],
    images: [epoxy1, epoxy2, epoxy3],
  },
  ar: {
    title: "أرضيات إيبوكسي احترافية في المملكة العربية السعودية",
    heading: "طلاءات أرضيات إيبوكسي متينة وأنيقة وطويلة الأمد",
    description: "نقدم حلول أرضيات إيبوكسي متميزة للمساحات السكنية والتجارية والصناعية في جميع أنحاء المملكة العربية السعودية، بما في ذلك التركيب والصيانة والإصلاح.",
    cards: [
      { heading: "تركيب سريع", description: "تطبيق إيبوكسي فعال لجميع أنواع الأرضيات.", icon: AccessTimeIcon },
      { heading: "خبراء معتمدون", description: "محترفو أرضيات مرخصون يضمنون نتائج عالية الجودة.", icon: BuildIcon },
      { heading: "تصاميم مخصصة", description: "أرضيات متينة وجمالية مصممة خصيصًا لمشروعك.", icon: MilitaryTechIcon },
    ],
    images: [epoxy1, epoxy2, epoxy3],
  }
};

// --- PROJECT DURATION DATA ---
const epoxyProjectDurationData = {
  en: {
    cards: [
      { icon: <CalendarMonthIcon />, title: "AVERAGE PROJECT TIME", time: "1–3 WEEKS", color: "text-blue-600" },
      { icon: <AttachMoneyIcon />, title: "STARTING PRICE", time: "SAR 10,000", color: "text-blue-600" },
      { icon: <BuildIcon />, title: "SERVICE CATEGORIES", time: "Residential / Commercial / Industrial", color: "text-[rgba(115,115,115,1)]" },
      { icon: <MilitaryTechIcon />, title: "QUALITY STANDARD", time: "ISO 9001:2015 Certified", color: "text-gray-700" },
    ],
    note: "*Pricing depends on surface area, epoxy type, and project complexity.",
  },
  ar: {
    cards: [
      { icon: <CalendarMonthIcon />, title: "متوسط وقت المشروع", time: "1–3 أسابيع", color: "text-blue-600" },
      { icon: <AttachMoneyIcon />, title: "السعر البدائي", time: "10,000 ريال سعودي", color: "text-blue-600" },
      { icon: <BuildIcon />, title: "فئات الخدمات", time: "سكني / تجاري / صناعي", color: "text-[rgba(115,115,115,1)]" },
      { icon: <MilitaryTechIcon />, title: "معيار الجودة", time: "معتمد ISO 9001:2015", color: "text-gray-700" },
    ],
    note: "*يعتمد السعر على مساحة السطح ونوع الإيبوكسي وتعقيد المشروع.",
  }
};

export default epoxyProjectDurationData;

// --- CONTENT DATA ---
export const epoxyContent = {
  en: {
    title: "Complete Epoxy Flooring Solutions",
    subtitle: "High-quality epoxy floor coatings for homes, offices, and industrial spaces.",
    ProcessSteps: [
      { id: 1, title: "Surface Preparation", description: "Clean, repair, and prime floors for optimal epoxy adhesion." },
      { id: 2, title: "Epoxy Application", description: "Expert application of multiple epoxy layers and finishes." },
      { id: 3, title: "Finishing & Maintenance", description: "Polishing, curing, and guidance for long-lasting floors." },
    ],
    featureLists: [
      "Durable and chemical-resistant epoxy coatings",
      "Custom colors and decorative designs",
      "Industrial-strength flooring for high-traffic areas",
      "Low-maintenance and easy cleaning",
    ],
    caseStudy: {
      title: "Commercial Warehouse Epoxy Flooring Upgrade",
      location: "Riyadh, Saudi Arabia",
      summary: "Installed epoxy flooring in a 2000 m² warehouse, enhancing durability and reducing maintenance costs by 35%.",
      link: "#",
    },
  },
  ar: {
    title: "حلول أرضيات إيبوكسي كاملة",
    subtitle: "طلاءات أرضيات إيبوكسي عالية الجودة للمنازل والمكاتب والمساحات الصناعية.",
    ProcessSteps: [
      { id: 1, title: "تحضير السطح", description: "تنظيف وإصلاح وتحضير الأرضيات لالتصاق إيبوكسي مثالي." },
      { id: 2, title: "تطبيق الإيبوكسي", description: "تطبيق احترافي لطبقات وإنهاءات إيبوكسي متعددة." },
      { id: 3, title: "التشطيب والصيانة", description: "تلميع ومعالجة وإرشادات لأرضيات طويلة الأمد." },
    ],
    featureLists: [
      "طلاءات إيبوكسي متينة ومقاومة للمواد الكيميائية",
      "ألوان مخصصة وتصاميم زخرفية",
      "أرضيات عالية المتانة للمناطق ذات الحركة الكثيفة",
      "صيانة قليلة وتنظيف سهل",
    ],
    caseStudy: {
      title: "ترقية أرضيات إيبوكسي لمستودع تجاري",
      location: "الرياض، المملكة العربية السعودية",
      summary: "تم تركيب أرضيات إيبوكسي في مستودع بمساحة 2000 م²، مما عزز المتانة وقلل تكاليف الصيانة بنسبة 35٪.",
      link: "#",
    },
  }
};

// --- MEDIA DATA ---
export const epoxyMedia = {
  en: {
    videoPlaceHolderUrl: epoxy,
    videoLabel: "Epoxy Flooring Installation Demo",
    stats: [
      { value: "120+", label: "Projects Completed" },
      { value: "99%", label: "Client Satisfaction" },
      { value: "24/7", label: "Support Available" },
    ],
  },
  ar: {
    videoPlaceHolderUrl: epoxy,
    videoLabel: "عرض تركيب أرضيات إيبوكسي",
    stats: [
      { value: "120+", label: "مشروع مكتمل" },
      { value: "99%", label: "رضا العملاء" },
      { value: "24/7", label: "الدعم متاح" },
    ],
  }
};

// --- DETAILS PAGE DATA ---
export const epoxyDetailsData = {
  en: {
    header: {
      title: "Professional Epoxy Flooring Services",
      subtitle: "Durable, safe, and aesthetically pleasing epoxy solutions for residential, commercial, and industrial spaces in Saudi Arabia.",
    },
    scope: {
      title: "Our Epoxy Expertise",
      listA: [
        "Industrial epoxy coatings for factories and warehouses",
        "Decorative resin floors for offices and showrooms",
        "Anti-slip and safety epoxy coatings",
        "Concrete surface preparation and priming",
      ],
      listB: [
        "Maintenance and repair services for all epoxy types",
        "Custom design, color, and finish options",
        "Residential, commercial, and industrial solutions",
        "Preventive care for long-lasting durability",
      ],
    },
    footer: {
      title: "Note",
      description: "*Final pricing may vary based on project scope, epoxy type, and surface area.",
    },
  },
  ar: {
    header: {
      title: "خدمات أرضيات إيبوكسي احترافية",
      subtitle: "حلول إيبوكسي متينة وآمنة وجمالية للمساحات السكنية والتجارية والصناعية في المملكة العربية السعودية.",
    },
    scope: {
      title: "خبرتنا في الإيبوكسي",
      listA: [
        "طلاءات إيبوكسي صناعية للمصانع والمستودعات",
        "أرضيات راتنجية زخرفية للمكاتب والمعارض",
        "طلاءات إيبوكسي مقاومة للانزلاق وملائمة للسلامة",
        "تحضير وتجهيز أسطح الخرسانة",
      ],
      listB: [
        "خدمات الصيانة والإصلاح لجميع أنواع الإيبوكسي",
        "خيارات تصميم ولون وتشطيب مخصصة",
        "حلول سكنية وتجارية وصناعية",
        "رعاية وقائية لمتانة طويلة الأمد",
      ],
    },
    footer: {
      title: "ملاحظة",
      description: "*قد يختلف السعر النهائي اعتمادًا على نطاق المشروع ونوع الإيبوكسي ومساحة السطح.",
    },
  }
};

// --- PRICING DATA ---
export const epoxyPricingData = {
  en: {
    header: {
      title: "Transparent Epoxy Flooring Pricing Packages",
      subtitle: "Flexible pricing for residential, commercial, and industrial epoxy projects.",
    },
    estimatorData: {
      title: "Quick Epoxy Cost Estimator",
      subtitle: "Get an instant estimate for your epoxy flooring project.",
      sizeOptions: ["Small (Up to 50 m²)", "Medium (51–200 m²)", "Large (200+ m²)"],
      complexityOptions: ["Standard Finish", "Decorative Finish", "Industrial Strength"],
      locationOptions: ["Riyadh", "Jeddah", "Dammam", "Other Regions"],
      inputDefaults: {
        projectSize: "Small (Up to 50 m²)",
        complexity: "Standard Finish",
        location: "Riyadh",
      },
      importantNotes: [
        "Prices are starting estimates based on standard specifications.",
        "Site inspection required for accurate quotes.",
        "Maintenance and warranty conditions apply per package.",
        "Quotes valid for 30 days from issue date.",
      ],
    },
    packages: [
      {
        packageName: "Starter",
        tagline: "Basic epoxy coating",
        price: "SAR 10,000",
        startingFrom: "Starting from",
        features: ["Standard epoxy coating", "Basic surface preparation", "Safety compliance"],
        idealFor: "Small residential areas or shops",
        isPopular: false,
        icon: Zap,
      },
      {
        packageName: "Standard",
        tagline: "Full epoxy flooring solution",
        price: "SAR 25,000",
        startingFrom: "Starting from",
        features: ["Industrial-grade epoxy", "Anti-slip finish", "Custom colors", "12-month warranty"],
        idealFor: "Medium commercial spaces",
        isPopular: true,
        icon: Crown,
      },
      {
        packageName: "Premium",
        tagline: "Luxury epoxy flooring",
        price: "SAR 50,000",
        startingFrom: "Starting from",
        features: ["Decorative resin flooring", "High-durability finish", "Priority maintenance plan", "24-month warranty"],
        idealFor: "Industrial and large commercial projects",
        isPopular: false,
        icon: Shield,
      },
    ],
  },
  ar: {
    header: {
      title: "باقات تسعير أرضيات إيبوكسي شفافة",
      subtitle: "تسعير مرن لمشاريع الإيبوكسي السكنية والتجارية والصناعية.",
    },
    estimatorData: {
      title: "مقدر تكلفة إيبوكسي سريع",
      subtitle: "احصل على تقدير فوري لمشروع أرضيات الإيبوكسي الخاص بك.",
      sizeOptions: ["صغير (حتى 50 م²)", "متوسط (51–200 م²)", "كبير (200+ م²)"],
      complexityOptions: ["تشطيب قياسي", "تشطيب زخرفي", "متانة صناعية"],
      locationOptions: ["الرياض", "جدة", "الدمام", "مناطق أخرى"],
      inputDefaults: {
        projectSize: "صغير (حتى 50 م²)",
        complexity: "تشطيب قياسي",
        location: "الرياض",
      },
      importantNotes: [
        "الأسعار هي تقديرات بدائية تعتمد على المواصفات القياسية.",
        "يُطلب الفحص في الموقع للحصول على عروض أسعار دقيقة.",
        "تطبق شروط الصيانة والضمان لكل باقة.",
        "العروض سارية لمدة 30 يومًا من تاريخ الإصدار.",
      ],
    },
    packages: [
      {
        packageName: "بداية",
        tagline: "طلاء إيبوكسي أساسي",
        price: "10,000 ريال سعودي",
        startingFrom: "بداية من",
        features: ["طلاء إيبوكسي قياسي", "تحضير سطح أساسي", "الامتثال للسلامة"],
        idealFor: "مناطق سكنية صغيرة أو محلات",
        isPopular: false,
        icon: Zap,
      },
      {
        packageName: "قياسي",
        tagline: "حل أرضيات إيبوكسي كامل",
        price: "25,000 ريال سعودي",
        startingFrom: "بداية من",
        features: ["إيبوكسي صناعي الدرجة", "تشطيب مقاوم للانزلاق", "ألوان مخصصة", "ضمان 12 شهراً"],
        idealFor: "مساحات تجارية متوسطة",
        isPopular: true,
        icon: Crown,
      },
      {
        packageName: "متميز",
        tagline: "أرضيات إيبوكسي فاخرة",
        price: "50,000 ريال سعودي",
        startingFrom: "بداية من",
        features: ["أرضيات راتنجية زخرفية", "تشطيب عالي المتانة", "خطة صيانة بأولوية", "ضمان 24 شهراً"],
        idealFor: "المشاريع الصناعية والتجارية الكبيرة",
        isPopular: false,
        icon: Shield,
      },
    ],
  }
};

// --- QUALITY & TESTIMONIALS DATA ---
export const epoxyQualityData = {
  en: {
    header: {
      title: "Trusted Epoxy Flooring Experts in Saudi Arabia",
      subtitle: "Certified, licensed, and experienced epoxy technicians ensuring high-quality flooring services.",
    },
    certifications: [
      { icon: "Award", title: "ISO 9001:2015", subtitle: "Quality Management System" },
      { icon: "Shield", title: "Safety Certified", subtitle: "OSHA & HSE Standards" },
      { icon: "CheckCircle", title: "Licensed Flooring Professionals", subtitle: "Certified Epoxy Technicians" },
    ],
    testimonials: {
      title: "What Our Clients Say",
      reviews: [
        { quote: "Our warehouse epoxy floors are durable and easy to maintain.", name: "Ahmed Al-Fahad", title: "Facility Manager", company: "Riyadh Logistics" },
        { quote: "Excellent finish and fast installation!", name: "Sara Al-Harbi", title: "Restaurant Owner", company: "Al-Qassim Cafe" },
        { quote: "Highly recommend their epoxy solutions for industrial projects.", name: "Mohammed Bin Saad", title: "Project Supervisor", company: "Elite Manufacturing" },
      ],
    },
    stats: [
      { number: "120+", label: "Projects Completed" },
      { number: "99%", label: "Customer Satisfaction" },
      { number: "10+", label: "Years of Experience" },
      { number: "24/7", label: "Emergency Support" },
    ],
    cta: {
      title: "Need Expert Epoxy Flooring Installation or Maintenance?",
      subtitle: "Contact our team today for a customized epoxy solution in Saudi Arabia.",
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
      title: "خبراء أرضيات إيبوكسي موثوقون في المملكة العربية السعودية",
      subtitle: "فنيو إيبوكسي معتمدون ومرخصون وذوو خبرة يضمنون خدمات أرضيات عالية الجودة.",
    },
    certifications: [
      { icon: "Award", title: "ISO 9001:2015", subtitle: "نظام إدارة الجودة" },
      { icon: "Shield", title: "معتمد سلامة", subtitle: "معايير OSHA وHSE" },
      { icon: "CheckCircle", title: "محترفو أرضيات مرخصون", subtitle: "فنيو إيبوكسي معتمدون" },
    ],
    testimonials: {
      title: "ما يقوله عملاؤنا",
      reviews: [
        { quote: "أرضيات الإيبوكسي في مستودعنا متينة وسهلة الصيانة.", name: "أحمد الفهد", title: "مدير المرافق", company: "رياض للخدمات اللوجستية" },
        { quote: "تشطيب ممتاز وتركيب سريع!", name: "سارة الحربي", title: "مالكة مطعم", company: "مقهى القصيم" },
        { quote: "أوصي بشدة بحلولهم الإيبوكسية للمشاريع الصناعية.", name: "محمد بن سعد", title: "مشرف المشروع", company: "التصنيع النخبوي" },
      ],
    },
    stats: [
      { number: "120+", label: "مشروع مكتمل" },
      { number: "99%", label: "رضا العملاء" },
      { number: "10+", label: "سنوات خبرة" },
      { number: "24/7", label: "دعم طارئ" },
    ],
    cta: {
      title: "هل تحتاج إلى تركيب أو صيانة أرضيات إيبوكسي احترافية؟",
      subtitle: "اتصل بفريقنا اليوم للحصول على حل إيبوكسي مخصص في المملكة العربية السعودية.",
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