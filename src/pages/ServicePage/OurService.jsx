import React from 'react';
import { Helmet } from 'react-helmet-async';
import CardService from './CardService';
import plumbing from '../../assets/images/Plumbing-unsplash.webp';
import electrical from '../../assets/images/electrical-unsplash.webp';
import Painting from '../../assets/images/painting-unsplash.webp';
import HVAC from '../../assets/images/havc-unsplash.webp';
import { Plumbing, ElectricalServices, AcUnit, FormatPaint } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';

const OurService = () => {
  const { lang } = useLanguage();
  const isArabic = lang === 'ar';

  // Bilingual services data
  const servicesData = {
    en: [
      {
        imageSrc: plumbing,
        title: 'Plumbing Services',
        description: 'Professional plumbing repairs and maintenance for commercial and residential properties.',
        listItems: ['Pipe repairs & installation', 'Drainage Solution', 'Water System maintenance', 'Emergency Plumbing'],
        IconComponent: Plumbing,
        buttonLink: '/services/plumbing',
        altText: 'Plumbing service tools and team',
      },
      {
        imageSrc: electrical,
        title: 'Electrical Services',
        description: 'Expert electrical work including installations, repairs, and safety inspections.',
        listItems: ['Electrical installations', 'Panel upgrades', 'LED lighting', 'Emergency Safety inspections'],
        IconComponent: ElectricalServices,
        buttonLink: '/services/electrical',
        altText: 'Electrician working on wiring',
      },
      {
        imageSrc: HVAC,
        title: 'HVAC Services',
        description: 'Complete heating, ventilation, and air conditioning maintenance and repair.',
        listItems: ['System Installation', 'Regular Maintenance', 'Energy Efficiency', '24/7 Emergency Service'],
        IconComponent: AcUnit,
        buttonLink: '/services/hvac',
        altText: 'HVAC system installation',
      },
      {
        imageSrc: Painting,
        title: 'Painting Services',
        description: 'Professional interior and exterior painting services for lasting results.',
        listItems: ['Interior Painting', 'Exterior painting', 'Wall Preparation', 'Premium Finishes'],
        IconComponent: FormatPaint,
        buttonLink: '/services/painting',
        altText: 'Professional painting services',
      },
    ],
    ar: [
      {
        imageSrc: plumbing,
        title: 'خدمات السباكة',
        description: 'إصلاحات وصيانة سباكة احترافية للممتلكات التجارية والسكنية.',
        listItems: ['إصلاح وتركيب الأنابيب', 'حلول الصرف', 'صيانة نظام المياه', 'سباكة الطوارئ'],
        IconComponent: Plumbing,
        buttonLink: '/services/plumbing',
        altText: 'أدوات سباكة وفريق العمل',
      },
      {
        imageSrc: electrical,
        title: 'خدمات الكهرباء',
        description: 'أعمال كهربائية احترافية تشمل التركيبات والإصلاحات وفحوصات السلامة.',
        listItems: ['تركيبات كهربائية', 'ترقية اللوحات', 'إضاءة LED', 'فحوصات سلامة الطوارئ'],
        IconComponent: ElectricalServices,
        buttonLink: '/services/electrical',
        altText: 'كهربائي يعمل على الأسلاك',
      },
      {
        imageSrc: HVAC,
        title: 'خدمات التكييف والتهوية',
        description: 'صيانة وإصلاح كاملة للتدفئة والتهوية وتكييف الهواء.',
        listItems: ['تركيب النظام', 'صيانة دورية', 'كفاءة الطاقة', 'خدمة طوارئ 24/7'],
        IconComponent: AcUnit,
        buttonLink: '/services/hvac',
        altText: 'تركيب نظام تكييف',
      },
      {
        imageSrc: Painting,
        title: 'خدمات الدهان',
        description: 'خدمات دهان داخلية وخارجية احترافية لنتائج دائمة.',
        listItems: ['الدهان الداخلي', 'الدهان الخارجي', 'تحضير الجدران', 'تشطيبات ممتازة'],
        IconComponent: FormatPaint,
        buttonLink: '/services/painting',
        altText: 'خدمات دهان احترافية',
      },
    ],
  };

  // Bilingual text content
  const content = {
    en: {
      heading: "Our ",
      highlighted: "Services",
      description: "From Annual Maintenance Contracts (AMCs) to One-Time Services, MAAJ offers flexible solutions designed to meet the diverse needs of businesses and homeowners alike. Whether you're looking for ongoing service or immediate repairs, we have the expertise to handle it all.",
      allServices: "All Services",
    },
    ar: {
      heading: "خدماتنا ",
      highlighted: "",
      description: "من عقود الصيانة السنوية (AMCs) إلى الخدمات لمرة واحدة، تقدم MAAJ حلولاً مرنة مصممة لتلبية الاحتياجات المتنوعة للشركات وأصحاب المنازل على حد سواء. سواء كنت تبحث عن خدمة مستمرة أو إصلاحات فورية، لدينا الخبرة للتعامل مع كل شيء.",
      allServices: "جميع الخدمات",
    },
  };

  const currentContent = content[lang];
  const services = servicesData[lang];

  // SEO optimized content (INVISIBLE)
  const pageTitle = isArabic 
    ? "خدمات الصيانة الشاملة | رام المحدودة السعودية" 
    : "Comprehensive Maintenance Services | Ram Limited Saudi Arabia";
  
  const pageDescription = isArabic
    ? "خدمات الصيانة الشاملة: سباكة، كهرباء، تكييف، دهان في السعودية. عقود صيانة سنوية (AMC) وخدمات طارئة 24/7. فريق معتمد في الرياض، جدة، الدمام."
    : "Comprehensive maintenance services: plumbing, electrical, HVAC, painting in Saudi Arabia. Annual maintenance contracts (AMC) and 24/7 emergency services. Certified team in Riyadh, Jeddah, Dammam.";

  return (
    <>
      {/* INVISIBLE SEO ONLY - No design changes */}
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <link rel="canonical" href={typeof window !== 'undefined' ? window.location.origin + "/services" : ""} />
        
        {/* Open Graph - INVISIBLE */}
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={typeof window !== 'undefined' ? window.location.origin + "/services" : ""} />
        
        {/* Twitter Card - INVISIBLE */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDescription} />
        
        {/* Service Schema - INVISIBLE */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            "name": isArabic ? "قائمة خدمات الصيانة" : "Maintenance Services List",
            "description": isArabic 
              ? "جميع خدمات الصيانة المقدمة من شركة رام المحدودة في السعودية"
              : "All maintenance services provided by Ram Limited in Saudi Arabia",
            "numberOfItems": services.length,
            "itemListElement": services.map((service, index) => ({
              "@type": "ListItem",
              "position": index + 1,
              "item": {
                "@type": "Service",
                "name": service.title,
                "description": service.description,
                "provider": {
                  "@type": "Organization",
                  "name": "Ram Limited",
                  "address": {
                    "@type": "PostalAddress",
                    "addressCountry": "SA"
                  }
                },
                "serviceType": service.title,
                "areaServed": {
                  "@type": "Place",
                  "name": ["Riyadh", "Jeddah", "Dammam", "Mecca", "Medina"]
                },
                "offers": {
                  "@type": "Offer",
                  "description": isArabic ? "عقود صيانة سنوية وخدمات طارئة" : "Annual maintenance contracts and emergency services"
                }
              }
            }))
          })}
        </script>
      </Helmet>

      {/* ORIGINAL DESIGN - NO VISIBLE CHANGES */}
      <section 
        className="bg-white py-16 sm:py-20" 
        aria-label={isArabic ? "خدمات الصيانة لدينا" : "Our Maintenance Services"}
        dir={isArabic ? 'rtl' : 'ltr'}
        // INVISIBLE SEO attributes
        itemScope
        itemType="https://schema.org/Service"
      >
        <div className="max-w-[1086px] mx-auto px-4 sm:px-6 flex flex-col gap-10 sm:gap-12 lg:gap-[51px]">

          {/* Heading & Description */}
          <div className="flex flex-col gap-3 mx-auto max-w-[939px] text-center">
            <h2 
              className={`font-sans font-bold text-3xl sm:text-4xl lg:text-[48px] leading-tight lg:leading-[48px] tracking-normal ${isArabic ? 'font-arabic' : ''}`}
              itemProp="name"
            >
              {currentContent.heading}<span className="text-primary">{currentContent.highlighted}</span>
            </h2>
            <p 
              className={`text-gray-600 text-base sm:text-lg lg:text-[20px] leading-relaxed max-w-[939px] mx-auto ${isArabic ? 'font-arabic' : ''}`}
              itemProp="description"
            >
              {currentContent.description}
            </p>
          </div>

          {/* Services Cards */}
          <div 
            className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-[39px] justify-center"
            itemScope
            itemType="https://schema.org/ItemList"
          >
            {services.map((service, index) => (
              <div
                key={index}
                itemProp="itemListElement"
                itemScope
                itemType="https://schema.org/ListItem"
              >
                {/* INVISIBLE meta for structured data position */}
                <meta itemProp="position" content={index + 1} />
                <CardService
                  imageSrc={service.imageSrc}
                  title={service.title}
                  description={service.description}
                  listItems={service.listItems}
                  IconComponent={service.IconComponent}
                  buttonLink={service.buttonLink}
                  altText={service.altText}
                  className="transform hover:scale-105 transition duration-500 shadow-lg hover:shadow-2xl"
                  lang={lang}
                />
              </div>
            ))}
          </div>

          {/* All Services Button */}
          <div className="flex justify-center mt-10 md:mt-[51px]">
            <Link to="/Services">
              <button className={`w-[139px] h-11 rounded-md py-3 px-6 border-[1.6px] bg-[#023A9A] text-white flex items-center justify-center hover:opacity-90 transition-opacity ${isArabic ? 'font-arabic' : ''}`}>
                <span className="font-sans font-bold text-base leading-5 tracking-normal whitespace-nowrap">
                  {currentContent.allServices}
                </span>
              </button>
            </Link>
          </div>

          {/* INVISIBLE SEO text for search engines */}
          <div className="hidden" aria-hidden="true">
            <h3>{isArabic ? "أنواع خدمات الصيانة المقدمة:" : "Types of Maintenance Services Offered:"}</h3>
            <ul>
              <li><strong>{isArabic ? "خدمات السباكة:" : "Plumbing Services:"}</strong> {isArabic 
                ? "إصلاح وتركيب الأنابيب، حلول الصرف الصحي، صيانة أنظمة المياه، خدمات سباكة الطوارئ للمنازل والمباني التجارية في السعودية."
                : "Pipe repair and installation, drainage solutions, water system maintenance, emergency plumbing services for homes and commercial buildings in Saudi Arabia."}</li>
              <li><strong>{isArabic ? "خدمات الكهرباء:" : "Electrical Services:"}</strong> {isArabic 
                ? "تركيبات كهربائية، ترقية اللوحات الكهربائية، تركيب إضاءة LED، فحوصات سلامة كهربائية، صيانة الأنظمة الكهربائية في الرياض، جدة، الدمام."
                : "Electrical installations, panel upgrades, LED lighting installation, electrical safety inspections, maintenance of electrical systems in Riyadh, Jeddah, Dammam."}</li>
              <li><strong>{isArabic ? "خدمات التكييف والتبريد:" : "HVAC Services:"}</strong> {isArabic 
                ? "تركيب أنظمة التكييف، صيانة دورية، تحسين كفاءة الطاقة، خدمة طوارئ 24/7 لأنظمة التدفئة والتهوية وتكييف الهواء في المملكة العربية السعودية."
                : "AC system installation, regular maintenance, energy efficiency improvements, 24/7 emergency service for heating, ventilation and air conditioning systems in Saudi Arabia."}</li>
              <li><strong>{isArabic ? "خدمات الدهان:" : "Painting Services:"}</strong> {isArabic 
                ? "دهان داخلي وخارجي، تحضير الجدران، تشطيبات ممتازة، خدمات دهان تجارية وسكنية، ترميم الدهان للمباني في السعودية."
                : "Interior and exterior painting, wall preparation, premium finishes, commercial and residential painting services, building paint restoration in Saudi Arabia."}</li>
            </ul>
            <p>{isArabic 
              ? "شركة رام المحدودة تقدم عقود صيانة سنوية (AMC) لجميع خدمات الصيانة. نخدم مدن الرياض، جدة، الدمام، مكة، المدينة المنورة، والخبر. فريق معتمد ومدرب على أعلى المعايير."
              : "Ram Limited offers annual maintenance contracts (AMC) for all maintenance services. We serve Riyadh, Jeddah, Dammam, Mecca, Medina, Al Khobar. Certified and trained team to highest standards."}</p>
          </div>

        </div>
      </section>
    </>
  );
};

export default OurService;