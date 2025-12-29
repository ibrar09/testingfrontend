// src/data/services/painting/paintingDetailsData.js

import painting1 from '../../../../assets/images/Painting1.webp';
import painting2 from '../../../../assets/images/Painting2.webp';
import painting3 from '../../../../assets/images/Painting3.webp';
import paintingVideo from '../../../../assets/videos/Paint-demo-mp4.mp4';

import AccessTimeIcon from '@mui/icons-material/AccessTime';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import MilitaryTechIcon from '@mui/icons-material/MilitaryTech';
import FormatPaintIcon from '@mui/icons-material/FormatPaint';

import { Brush, Palette, CheckCircle } from 'lucide-react';

// --- HERO SECTION DATA ---
export const paintingHeroData = {
  en: {
    title: "Professional Painting Services Saudi Arabia | Interior & Exterior Painting Solutions",
    heading: "Premium Interior & Exterior Painting Solutions in Saudi Arabia",
    description: "Expert residential, commercial & industrial painting services in Saudi Arabia. Professional painters using premium paints for walls, ceilings, facades & decorative finishes. Free quotes & 5-year warranty on workmanship.",
    cards: [
      { 
        heading: "Premium Quality Paints", 
        description: "Dulux, Jotun, Sikkens, and Berger premium paints for superior durability and finish", 
        icon: FormatPaintIcon 
      },
      { 
        heading: "Certified Painting Team", 
        description: "Saudi Arabia licensed professional painters with 10+ years experience in residential and commercial painting", 
        icon: Brush 
      },
      { 
        heading: "Guaranteed Completion Time", 
        description: "Timely project completion with minimal disruption to your home or business operations", 
        icon: Palette 
      },
    ],
    images: [painting1, painting2, painting3],
  },
  ar: {
    title: "خدمات الدهان الاحترافية السعودية | حلول الدهان الداخلية والخارجية",
    heading: "حلول دهان داخلية وخارجية متميزة في المملكة العربية السعودية",
    description: "خدمات دهان سكنية وتجارية وصناعية متخصصة في المملكة العربية السعودية. فنيو دهان محترفون يستخدمون دهانات دولكس، وجوتن، وسيكينز، وبرجر الممتازة للجدران والأسقف والواجهات والتشطيبات الديكورية. عروض أسعار مجانية وضمان 5 سنوات على جودة العمل.",
    cards: [
      { 
        heading: "دهانات عالية الجودة", 
        description: "دهانات دولكس، جوتن، سيكينز، وبرجر الممتازة لمتانة وإنهاء فائق", 
        icon: FormatPaintIcon 
      },
      { 
        heading: "فريق دهان معتمد", 
        icon: Brush,
        description: "فنيو دهان محترفون مرخصون في السعودية بخبرة 10+ سنوات في الدهان السكني والتجاري"
      },
      { 
        heading: "ضمان وقت الإنجاز", 
        description: "إنجاز المشروع في الوقت المحدد مع أقل قدر من التعطيل لمنزلك أو عملك", 
        icon: Palette 
      },
    ],
    images: [painting1, painting2, painting3],
  }
};

// --- PROJECT DURATION DATA ---
export const paintingProjectDurationData = {
  en: {
    cards: [
      { 
        icon: <CalendarMonthIcon />, 
        title: "AVERAGE PROJECT DURATION", 
        time: "1–3 WEEKS", 
        color: "text-blue-600",
        description: "Residential and commercial painting project timeline"
      },
      { 
        icon: <AttachMoneyIcon />, 
        title: "STARTING PRICE", 
        time: "SAR 5,000", 
        color: "text-blue-600",
        description: "Professional painting services starting cost in Saudi Arabia"
      },
      { 
        icon: <FormatPaintIcon />, 
        title: "SERVICE CATEGORIES", 
        time: "RESIDENTIAL / COMMERCIAL / INDUSTRIAL", 
        color: "text-[rgba(115,115,115,1)]",
        description: "Types of painting projects we specialize in"
      },
      { 
        icon: <MilitaryTechIcon />, 
        title: "QUALITY CERTIFICATION", 
        time: "ISO 9001:2015 CERTIFIED", 
        color: "text-gray-700",
        description: "International quality management system certification"
      },
    ],
    note: "*Final pricing depends on surface area, number of coats, paint type (water-based, oil-based, epoxy), and surface complexity. Contact for detailed painting service quotation.",
  },
  ar: {
    cards: [
      { 
        icon: <CalendarMonthIcon />, 
        title: "متوسط مدة المشروع", 
        time: "1–3 أسابيع", 
        color: "text-blue-600",
        description: "الجدول الزمني لمشاريع الدهان السكنية والتجارية"
      },
      { 
        icon: <AttachMoneyIcon />, 
        title: "السعر البدائي", 
        time: "5,000 ريال سعودي", 
        color: "text-blue-600",
        description: "تكلفة بداية خدمات الدهان الاحترافية في المملكة العربية السعودية"
      },
      { 
        icon: <FormatPaintIcon />, 
        title: "فئات الخدمة", 
        time: "سكني / تجاري / صناعي", 
        color: "text-[rgba(115,115,115,1)]",
        description: "أنواع مشاريع الدهان التي نتخصص فيها"
      },
      { 
        icon: <MilitaryTechIcon />, 
        title: "شهادة الجودة", 
        time: "ISO 9001:2015 معتمد", 
        color: "text-gray-700",
        description: "شهادة نظام إدارة الجودة الدولي"
      },
    ],
    note: "*يعتمد السعر النهائي على مساحة السطح وعدد الطبقات ونوع الدهان (قائم على الماء، زيتي، إيبوكسي) وتعقيد السطح. اتصل للحصول على عرض أسعار مفصل لخدمات الدهان.",
  }
};

// --- CONTENT DATA ---
export const paintingContent = {
  en: {
    title: "Comprehensive Professional Painting Services in Saudi Arabia",
    subtitle: "Complete painting solutions from surface preparation to final finishing touch-ups for residential homes, commercial buildings, and industrial facilities across Riyadh, Jeddah, Dammam, and all Saudi Arabia.",
    ProcessSteps: [
      { 
        id: 1, 
        title: "Professional Surface Preparation", 
        description: "Expert cleaning, sanding, crack filling, and priming of walls, ceilings, and surfaces to ensure perfect paint adhesion and smooth finish."
      },
      { 
        id: 2, 
        title: "Advanced Painting Application", 
        description: "Professional interior and exterior painting using advanced techniques including spray painting, roller application, and brushwork for precise coverage."
      },
      { 
        id: 3, 
        title: "Quality Inspection & Final Touches", 
        description: "Thorough quality control inspection, touch-up work, and protective coating application to ensure lasting durability and aesthetic perfection."
      },
    ],
    featureLists: [
      "Eco-friendly, low VOC premium paints from Dulux, Jotun, Sikkens",
      "Professional color matching and custom color palette consultation",
      "Complete interior and exterior painting services",
      "Specialized decorative finishes, textures, and wall effects",
      "Protective anti-mold and waterproof coatings available",
    ],
    caseStudy: {
      title: "Luxury Villa Exterior Painting Project Case Study",
      location: "Riyadh, Saudi Arabia - Diplomatic Quarter",
      summary: "Complete exterior transformation of a luxury villa using weather-resistant Jotun paints, including surface preparation, crack repair, and protective coating application with 5-year durability guarantee.",
      link: "#",
    },
  },
  ar: {
    title: "خدمات دهان احترافية شاملة في المملكة العربية السعودية",
    subtitle: "حلول دهان كاملة من تحضير السطح إلى اللمسات النهائية للمنازل السكنية والمباني التجارية والمنشآت الصناعية في الرياض وجدة والدمام وجميع أنحاء السعودية.",
    ProcessSteps: [
      { 
        id: 1, 
        title: "تحضير احترافي للسطح", 
        description: "تنظيف وصقل وملء الشقوق وتحضير احترافي للجدران والأسقف والأسطح لضمان التصاق مثالي للدهان وإنهاء سلس."
      },
      { 
        id: 2, 
        title: "تطبيق دهان متقدم", 
        description: "دهان داخلي وخارجي احترافي باستخدام تقنيات متقدمة تشمل الدهان بالرش والتطبيق بالرولر والفرشاة لتغطية دقيقة."
      },
      { 
        id: 3, 
        title: "فحص الجودة واللمسات النهائية", 
        description: "فحص مراقبة جودة شامل، أعمال اللمسات النهائية، وتطبيق الطلاءات الواقية لضمان متانة دائمة وكمال جمالي."
      },
    ],
    featureLists: [
      "دهانات ممتازة صديقة للبيئة ومنخفضة المركبات العضوية المتطايرة من دولكس وجوتن وسيكينز",
      "مطابقة ألوان احترافية واستشارات لوحة ألوان مخصصة",
      "خدمات دهان داخلية وخارجية كاملة",
      "تشطيبات ديكورية متخصصة، تأثيرات نسيجية، وتأثيرات جدارية",
      "طلاءات واقية مضادة للعفن ومقاومة للماء متاحة",
    ],
    caseStudy: {
      title: "دراسة حالة مشروع دهان خارجي لفيلا فاخرة",
      location: "الرياض، المملكة العربية السعودية - الحي الدبلوماسي",
      summary: "تحويل كامل للخارج لفيلا فاخرة باستخدام دهانات جوتن المقاومة للعوامل الجوية، بما في ذلك تحضير السطح وإصلاح الشقوق وتطبيق الطلاءات الواقية مع ضمان متانة 5 سنوات.",
      link: "#",
    },
  }
};

// --- MEDIA DATA ---
export const paintingMedia = {
  en: {
    videoPlaceHolderUrl: paintingVideo,
    videoLabel: "Professional Painting Process Demo in Saudi Arabia",
    stats: [
      { value: "200+", label: "Painting Projects Successfully Completed" },
      { value: "99%", label: "Client Satisfaction Rate" },
      { value: "24/7", label: "Emergency Touch-up Service" },
      { value: "15+", label: "Years Painting Experience in Saudi Arabia" },
    ],
  },
  ar: {
    videoPlaceHolderUrl: paintingVideo,
    videoLabel: "عرض توضيحي لعملية الدهان الاحترافية في السعودية",
    stats: [
      { value: "٢٠٠+", label: "مشروع دهان مكتمل بنجاح" },
      { value: "٩٩٪", label: "معدل رضا العملاء" },
      { value: "٢٤/٧", label: "خدمة لمسات طارئة" },
      { value: "١٥+", label: "سنوات خبرة في الدهان في السعودية" },
    ],
  }
};

// --- DETAILS PAGE DATA ---
export const paintingDetailsData = {
  en: {
    header: {
      title: "Professional Painting Services Detailed Scope in Saudi Arabia",
      subtitle: "Tailored interior and exterior painting solutions for residential homes, commercial offices, retail spaces, and industrial facilities with focus on quality, durability, and aesthetic appeal.",
    },
    scope: {
      title: "Professional Painting Services Include",
      listA: [
        "Complete interior wall and ceiling painting services",
        "Exterior facade and building painting solutions",
        "Professional surface preparation and priming services",
        "Custom color selection and paint matching consultation",
      ],
      listB: [
        "Protective coatings (anti-mold, waterproof, fire-resistant)",
        "Emergency touch-up and repair painting services",
        "Eco-friendly, low VOC premium paint materials",
        "5-year durability guarantee on all painting work",
      ],
    },
    footer: {
      title: "Professional Painting Service Information",
      description: "*Final pricing and project timeline depend on total surface area, paint type selection (water-based, oil-based, epoxy), number of coats required, and surface preparation complexity. Free on-site inspection available for accurate quotation.",
    },
  },
  ar: {
    header: {
      title: "نطاق خدمات الدهان الاحترافية التفصيلي في المملكة العربية السعودية",
      subtitle: "حلول دهان داخلية وخارجية مخصصة للمنازل السكنية والمكاتب التجارية ومساحات التجزئة والمنشآت الصناعية مع التركيز على الجودة والمتانة والجاذبية الجمالية.",
    },
    scope: {
      title: "تشمل خدمات الدهان الاحترافية",
      listA: [
        "خدمات دهان جدران وأسقف داخلية كاملة",
        "حلول دهان واجهات ومباني خارجية",
        "خدمات تحضير أسطح وتجهيز احترافية",
        "استشارات اختيار ألوان مخصصة ومطابقة دهان",
      ],
      listB: [
        "طلاءات واقية (مضادة للعفن، مقاومة للماء، مقاومة للحريق)",
        "خدمات دهان لمسات طارئة وإصلاح",
        "مواد دهان ممتازة صديقة للبيئة ومنخفضة المركبات العضوية المتطايرة",
        "ضمان متانة 5 سنوات على جميع أعمال الدهان",
      ],
    },
    footer: {
      title: "معلومات خدمة الدهان الاحترافية",
      description: "*يعتمد السعر النهائي والجدول الزمني للمشروع على إجمالي مساحة السطح واختيار نوع الدهان (قائم على الماء، زيتي، إيبوكسي) وعدد الطبقات المطلوبة وتعقيد تحضير السطح. فحص موقعي مجاني متاح للحصول على عرض أسعار دقيق.",
    },
  }
};

// --- PRICING DATA ---
export const paintingPricingData = {
  en: {
    header: {
      title: "Transparent Painting Service Pricing in Saudi Arabia",
      subtitle: "Flexible painting service packages designed for residential apartments, villas, commercial offices, retail stores, and industrial facilities with clear pricing and comprehensive service inclusions.",
    },
    estimatorData: {
      title: "Professional Painting Cost Estimator",
      subtitle: "Get instant estimated painting costs for your residential or commercial project based on area, paint type, and location in Saudi Arabia.",
      sizeOptions: [
        "Small Residential Apartment (up to 100 m²)", 
        "Medium Villa/Office (101–300 m²)", 
        "Large Commercial/Industrial (300+ m²)"
      ],
      complexityOptions: ["Basic Wall Painting", "Standard Interior Painting", "Premium Complete Painting"],
      locationOptions: ["Riyadh - Central Region", "Jeddah - Western Region", "Dammam - Eastern Region", "Other Saudi Arabia Cities"],
      inputDefaults: {
        projectSize: "Small Residential Apartment (up to 100 m²)",
        complexity: "Standard Interior Painting",
        location: "Riyadh - Central Region",
      },
      importantNotes: [
        "Estimates based on standard professional-grade paint materials in Saudi Arabia",
        "On-site inspection recommended for accurate residential and commercial painting quotations",
        "Maintenance and touch-up contracts available for corporate clients",
        "Premium paint brands include Dulux, Jotun, Sikkens, and Berger products",
        "All painting service quotes valid for 30 days from issuance date",
      ],
    },
    packages: [
      {
        packageName: "Residential Starter Package",
        tagline: "Basic interior painting for apartments and small homes",
        price: "SAR 5,000",
        startingFrom: "Starting from",
        features: [
          "Single coat interior wall painting",
          "Basic surface preparation and cleaning",
          "Standard quality paint application",
          "3-month touch-up service warranty",
          "Includes 2-3 days project completion",
        ],
        idealFor: "Small apartments, studios, or bedroom repainting",
        isPopular: false,
        icon: Brush,
      },
      {
        packageName: "Professional Standard Package",
        tagline: "Complete interior and exterior painting solution",
        price: "SAR 15,000",
        startingFrom: "Starting from",
        features: [
          "Two coats of premium quality paint (Dulux/Jotun)",
          "Complete surface preparation, priming, and repair",
          "Professional finish with attention to detail",
          "12-month comprehensive service warranty",
          "Includes protective coating where required",
          "5-7 days average project completion time",
        ],
        idealFor: "Villas, offices, retail spaces, and commercial buildings",
        isPopular: true,
        icon: Palette,
      },
      {
        packageName: "Premium Luxury Package",
        tagline: "Complete luxury painting solution with custom finishes",
        price: "SAR 30,000",
        startingFrom: "Starting from",
        features: [
          "Multiple coats of luxury paint (Sikkens premium range)",
          "Custom decorative finishes and wall textures",
          "Complete protective coating system application",
          "24-month comprehensive warranty coverage",
          "Priority scheduling and project management",
          "Includes custom color consultation service",
          "10-14 days average project completion time",
        ],
        idealFor: "Luxury villas, premium offices, hotels, and high-end commercial spaces",
        isPopular: false,
        icon: CheckCircle,
      },
    ],
  },
  ar: {
    header: {
      title: "أسعار خدمات الدهان الشفافة في المملكة العربية السعودية",
      subtitle: "باقات خدمات دهان مرنة مصممة للشقق السكنية، الفيلات، المكاتب التجارية، المتاجر، والمنشآت الصناعية مع أسعار واضحة واشتمالات خدمية شاملة.",
    },
    estimatorData: {
      title: "مقدر تكلفة الدهان الاحترافي",
      subtitle: "احصل على تقدير فوري لتكاليف الدهان لمشروعك السكني أو التجاري بناءً على المساحة ونوع الدهان والموقع في السعودية.",
      sizeOptions: [
        "شقة سكنية صغيرة (حتى ١٠٠ م²)", 
        "فيلا/مكتب متوسط (١٠١–٣٠٠ م²)", 
        "تجاري/صناعي كبير (٣٠٠+ م²)"
      ],
      complexityOptions: ["دهان جدران أساسي", "دهان داخلي قياسي", "دهان كامل ممتاز"],
      locationOptions: ["الرياض - المنطقة الوسطى", "جدة - المنطقة الغربية", "الدمام - المنطقة الشرقية", "مدن سعودية أخرى"],
      inputDefaults: {
        projectSize: "شقة سكنية صغيرة (حتى ١٠٠ م²)",
        complexity: "دهان داخلي قياسي",
        location: "الرياض - المنطقة الوسطى",
      },
      importantNotes: [
        "التقديرات تعتمد على مواد دهان احترافية قياسية في المملكة العربية السعودية",
        "يُوصى بفحص موقعي للحصول على عروض أسعار دقيقة للدهان السكني والتجاري",
        "عقود صيانة ولمسات متاحة للعملاء المؤسسيين",
        "تشمل علامات الدهان الممتازة منتجات دولكس، جوتن، سيكينز، وبرجر",
        "جميع عروض أسعار خدمات الدهان سارية لمدة ٣٠ يوماً من تاريخ الإصدار",
      ],
    },
    packages: [
      {
        packageName: "باقة البدء السكنية",
        tagline: "دهان داخلي أساسي للشقق والمنازل الصغيرة",
        price: "٥,٠٠٠ ريال سعودي",
        startingFrom: "تبدأ من",
        features: [
          "دهان جدران داخلية بطبقة واحدة",
          "تحضير سطح وتنظيف أساسي",
          "تطبيق دهان بجودة قياسية",
          "ضمان خدمة لمسات ٣ أشهر",
          "يشمل إنجاز المشروع في ٢-٣ أيام",
        ],
        idealFor: "شقق صغيرة، استوديوهات، أو إعادة دهان غرف نوم",
        isPopular: false,
        icon: Brush,
      },
      {
        packageName: "باقة احترافية قياسية",
        tagline: "حل دهان داخلي وخارجي كامل",
        price: "١٥,٠٠٠ ريال سعودي",
        startingFrom: "تبدأ من",
        features: [
          "طبقتان من دهان عالي الجودة (دولكس/جوتن)",
          "تحضير سطح كامل، تجهيز، وإصلاح",
          "إنهاء احترافي مع الاهتمام بالتفاصيل",
          "ضمان خدمة شامل ١٢ شهراً",
          "يشمل طلاءات واقية حيثما يلزم",
          "متوسط وقت إنجاز المشروع ٥-٧ أيام",
        ],
        idealFor: "فيلات، مكاتب، مساحات تجارية، ومباني تجارية",
        isPopular: true,
        icon: Palette,
      },
      {
        packageName: "باقة فاخرة مميزة",
        tagline: "حل دهان فاخر كامل مع تشطيبات مخصصة",
        price: "٣٠,٠٠٠ ريال سعودي",
        startingFrom: "تبدأ من",
        features: [
          "طبقات متعددة من دهان فاخر (سيكينز ممتاز)",
          "تشطيبات ديكورية مخصصة وتأثيرات جدارية",
          "تطبيق نظام طلاءات واقية كامل",
          "تغطية ضمان شاملة ٢٤ شهراً",
          "جدولة بأولوية وإدارة مشاريع",
          "يشمل خدمة استشارات ألوان مخصصة",
          "متوسط وقت إنجاز المشروع ١٠-١٤ يوماً",
        ],
        idealFor: "فيلات فاخرة، مكاتب مميزة، فنادق، ومساحات تجارية فاخرة",
        isPopular: false,
        icon: CheckCircle,
      },
    ],
  }
};

// --- QUALITY & TESTIMONIALS DATA ---
export const paintingQualityData = {
  en: {
    header: {
      title: "Certified Professional Painting Experts in Saudi Arabia",
      subtitle: "ISO-certified, experienced, and reliable painting services for residential, commercial, and industrial projects across Saudi Arabia with 99% client satisfaction rate.",
    },
    certifications: [
      { 
        icon: "Award", 
        title: "ISO 9001:2015 Certified", 
        subtitle: "Quality Management System for Professional Painting Services"
      },
      { 
        icon: "Shield", 
        title: "Safety Compliance Certified", 
        subtitle: "Saudi Arabia Safety Standards & Environmental Compliance"
      },
      { 
        icon: "CheckCircle", 
        title: "Authorized Paint Applicator", 
        subtitle: "Certified Applicator for Dulux, Jotun, Sikkens, Berger Premium Brands"
      },
      { 
        icon: "Users", 
        title: "Saudi Arabia Licensed", 
        subtitle: "Fully Licensed Painting Contractors in Saudi Arabia"
      },
    ],
    testimonials: {
      title: "Professional Painting Client Success Stories",
      reviews: [
        { 
          quote: "Exceptional painting service for our Riyadh villa. The Jotun paint finish is flawless and has lasted perfectly through Saudi weather conditions.", 
          name: "Ahmed Al-Faisal", 
          title: "Villa Owner", 
          company: "Diplomatic Quarter, Riyadh"
        },
        { 
          quote: "Professional office painting completed on schedule with minimal business disruption. Their team was efficient and clean throughout the project.", 
          name: "Sara Al-Harbi", 
          title: "Office Manager", 
          company: "Commercial Office Complex - Jeddah"
        },
        { 
          quote: "Premium painting service for our luxury apartments. The custom color matching and attention to detail exceeded our expectations.", 
          name: "Fahad Al-Qahtani", 
          title: "Property Development Director", 
          company: "Luxury Apartments Project - Dammam"
        },
      ],
    },
    stats: [
      { number: "200+", label: "Professional Painting Projects Successfully Completed" },
      { number: "99%", label: "Client Satisfaction Rate Across Saudi Arabia" },
      { number: "15+", label: "Years of Professional Painting Experience" },
      { number: "24/7", label: "Emergency Touch-up Service Availability" },
      { number: "5 Years", label: "Workmanship Durability Guarantee" },
    ],
    cta: {
      title: "Need Professional Painting Services in Saudi Arabia?",
      subtitle: "Contact our certified painting specialists today for a customized painting solution with free consultation and detailed quotation.",
      buttonText: "Get Free Painting Quote",
      secondaryLinkText: "View Painting Project Portfolio",
    },
    contact: {
      phone: "+966 50 987 6543",
      email: "painting@ramlimited.sa",
      address: "Riyadh, Saudi Arabia - Serving All KSA Regions",
      serviceAreas: "Professional Painting Services Available in Riyadh, Jeddah, Dammam, and Across Saudi Arabia",
    },
  },
  ar: {
    header: {
      title: "خبراء دهان احترافيين معتمدين في المملكة العربية السعودية",
      subtitle: "خدمات دهان معتمدة ISO وذات خبرة وموثوقة للمشاريع السكنية والتجارية والصناعية في جميع أنحاء المملكة العربية السعودية مع معدل رضا عملاء 99٪.",
    },
    certifications: [
      { 
        icon: "Award", 
        title: "معتمد ISO 9001:2015", 
        subtitle: "نظام إدارة الجودة لخدمات الدهان الاحترافية"
      },
      { 
        icon: "Shield", 
        title: "معتمد الامتثال للسلامة", 
        subtitle: "معايير السلامة السعودية والامتثال البيئي"
      },
      { 
        icon: "CheckCircle", 
        title: "معالج دهان معتمد", 
        subtitle: "معالج معتمد لعلامات دولكس، جوتن، سيكينز، برجر الممتازة"
      },
      { 
        icon: "Users", 
        title: "مرخص في المملكة العربية السعودية", 
        subtitle: "مقاولو دهان مرخصون بالكامل في السعودية"
      },
    ],
    testimonials: {
      title: "قصص نجاح عملاء الدهان الاحترافية",
      reviews: [
        { 
          quote: "خدمة دهان استثنائية لفيلتنا في الرياض. إنهاء دهان جوتن لا تشوبه شائبة وصمد بشكل مثالي في ظروف الطقس السعودية.", 
          name: "أحمد الفيصل", 
          title: "مالك فيلا", 
          company: "الحي الدبلوماسي، الرياض"
        },
        { 
          quote: "اكتمل دهان المكتب الاحترافي حسب الجدول الزمني مع أقل تعطيل للأعمال. كان فريقهم فعالاً ونظيفاً طوال المشروع.", 
          name: "سارة الحربي", 
          title: "مديرة مكتب", 
          company: "مجمع مكاتب تجارية - جدة"
        },
        { 
          quote: "خدمة دهان ممتازة لشققنا الفاخرة. تجاوزت مطابقة الألوان المخصصة والاهتمام بالتفاصيل توقعاتنا.", 
          name: "فهد القحطاني", 
          title: "مدير تطوير عقاري", 
          company: "مشروع شقق فاخرة - الدمام"
        },
      ],
    },
    stats: [
      { number: "٢٠٠+", label: "مشروع دهان احترافي مكتمل بنجاح" },
      { number: "٩٩٪", label: "معدل رضا العملاء في جميع أنحاء السعودية" },
      { number: "١٥+", label: "سنوات خبرة في الدهان الاحترافي" },
      { number: "٢٤/٧", label: "توفر خدمة لمسات طارئة" },
      { number: "٥ سنوات", label: "ضمان متانة جودة العمل" },
    ],
    cta: {
      title: "هل تحتاج إلى خدمات دهان احترافية في المملكة العربية السعودية؟",
      subtitle: "اتصل بخبراء الدهان المعتمدين لدينا اليوم للحصول على حل دهان مخصص مع استشارة مجانية وعرض أسعار مفصل.",
      buttonText: "احصل على عرض أسعار مجاني للدهان",
      secondaryLinkText: "عرض محفظة مشاريع الدهان",
    },
    contact: {
      phone: "+٩٦٦ ٥٠ ٩٨٧ ٦٥٤٣",
      email: "painting@ramlimited.sa",
      address: "الرياض، المملكة العربية السعودية - نخدم جميع مناطق المملكة",
      serviceAreas: "خدمات دهان احترافية متاحة في الرياض وجدة والدمام وعبر المملكة العربية السعودية",
    },
  }
};

// For backward compatibility (single language exports)
export const paintingHeroDataEn = paintingHeroData.en;
export const paintingProjectDurationDataEn = paintingProjectDurationData.en;
export const paintingContentEn = paintingContent.en;
export const paintingMediaEn = paintingMedia.en;
export const paintingDetailsDataEn = paintingDetailsData.en;
export const paintingPricingDataEn = paintingPricingData.en;
export const paintingQualityDataEn = paintingQualityData.en;