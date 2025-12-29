// src/Components/DeliveredService.jsx
import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { ALL_PROJECTS } from "../ProjectsPage/components/projectsData";
import { useLanguage } from "../../context/LanguageContext";

// Normalize image URLs
import { BACKEND_URL } from "../../api/config";

const normalizeImage = (img) => {
  if (!img) return "https://via.placeholder.com/400x300?text=No+Image";
  if (img.startsWith("http")) return img;
  if (img.startsWith("/uploads")) return `${BACKEND_URL}${img}`;
  return `${BACKEND_URL}/uploads/projects/${img}`;
};

const ProjectCard = ({ project, lang, index }) => {
  const projectName = project?.name || (lang === "en" ? "Untitled Project" : "مشروع بدون عنوان");
  const projectCategory = project?.category || (lang === "en" ? "N/A" : "غير متوفر");
  const projectLocation = project?.location || (lang === "en" ? "Saudi Arabia" : "السعودية");
  const projectYear = project?.year || new Date().getFullYear();

  // SEO-friendly alt text
  const getImageAlt = () => {
    if (lang === "ar") {
      return `${projectName} - مشروع ${projectCategory} في ${projectLocation} ${projectYear}`;
    }
    return `${projectName} - ${projectCategory} project in ${projectLocation} ${projectYear}`;
  };

  return (
    <Link
      to={`/projects/${project.id}`}
      className="group relative w-full sm:w-[300px] md:w-[430px] h-[220px] sm:h-[250px] md:h-[270px] 
                 bg-black/50 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
      aria-label={lang === "ar" ? `عرض مشروع ${projectName}` : `View ${projectName} project`}
      itemScope
      itemType="https://schema.org/CreativeWork"
      itemProp="itemListElement"
      title={lang === "ar" ? `عرض تفاصيل مشروع ${projectName}` : `View details of ${projectName} project`}
    >
      <meta itemProp="position" content={index + 1} />

      {/* Image with Schema markup */}
      <div itemProp="image" itemScope itemType="https://schema.org/ImageObject">
        <img
          src={normalizeImage(project?.image)}
          alt={getImageAlt()}
          loading="lazy"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 animate-fadeIn"
          onError={(e) => {
            e.target.src = "https://via.placeholder.com/400x300?text=Image+Not+Found";
            e.target.alt = lang === "ar" ? "الصورة غير متوفرة" : "Image not available";
          }}
          width="430"
          height="270"
          sizes="(max-width: 640px) 100vw, (max-width: 768px) 300px, 430px"
          itemProp="url"
        />
        <meta itemProp="width" content="430" />
        <meta itemProp="height" content="270" />
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>

      {/* Text Overlay */}
      <div className="absolute bottom-5 left-5 flex flex-col gap-1 animate-fadeUp">
        <span
          className="text-primary bg-white/80 px-3 py-1 text-[14px] font-medium rounded-md"
          itemProp="genre"
        >
          {projectCategory}
        </span>
        <span
          className="text-white text-[18px] sm:text-[20px] font-semibold drop-shadow-md"
          itemProp="name"
        >
          {projectName}
        </span>
      </div>

      {/* Hidden structured data */}
      <div style={{ display: 'none' }} aria-hidden="true">
        <meta itemProp="description" content={project?.description || `${projectCategory} project by Ram Limited`} />
        <meta itemProp="dateCreated" content={`${projectYear}-01-01`} />
        <div itemProp="locationCreated" itemScope itemType="https://schema.org/Place">
          <meta itemProp="name" content={projectLocation} />
          <div itemProp="address" itemScope itemType="https://schema.org/PostalAddress">
            <meta itemProp="addressCountry" content="SA" />
            <meta itemProp="addressRegion" content={projectLocation.includes("Riyadh") ? "Riyadh Province" : "Saudi Arabia"} />
          </div>
        </div>
        <meta itemProp="creator" content="Ram Limited Contracting" />
        <meta itemProp="publisher" content="Ram Limited Contracting" />
      </div>
    </Link>
  );
};

const DeliveredService = () => {
  const { lang } = useLanguage();
  const displayedProjects = (ALL_PROJECTS || []).slice(0, 5); // Safe fallback

  // SEO Content for Saudi Arabia
  const seoContent = {
    en: {
      title: "Our Completed Construction Projects | Ram Limited Portfolio | Saudi Arabia",
      description: "Explore Ram Limited's completed construction and fit-out projects in Saudi Arabia. Commercial, residential, and industrial projects delivered with excellence in Riyadh and across KSA.",
      keywords: "completed construction projects Saudi Arabia, building portfolio Riyadh, delivered projects KSA, commercial fit-out, residential construction, industrial projects",
      ogTitle: "Ram Limited Delivered Projects - Construction Portfolio Saudi Arabia",
      ogDescription: "View our successfully completed construction and fit-out projects across Saudi Arabia. Quality workmanship and client satisfaction.",
      jsonLd: {
        "@context": "https://schema.org",
        "@type": "ItemList",
        "name": "Delivered Construction Projects",
        "description": "Portfolio of successfully completed construction projects by Ram Limited in Saudi Arabia",
        "numberOfItems": displayedProjects.length,
        "itemListOrder": "https://schema.org/ItemListOrderDescending",
        "itemListElement": displayedProjects.map((project, index) => ({
          "@type": "ListItem",
          "position": index + 1,
          "item": {
            "@type": "CreativeWork",
            "name": project?.name || "Construction Project",
            "description": project?.description || "Completed construction project by Ram Limited",
            "dateCreated": project?.year ? `${project.year}-01-01` : undefined,
            "locationCreated": {
              "@type": "Place",
              "name": project?.location || "Saudi Arabia"
            }
          }
        }))
      }
    },
    ar: {
      title: "مشاريعنا المكتملة | محفظة رام المحدودة | السعودية",
      description: "استعرض مشاريع البناء والتشطيب المكتملة لرام المحدودة في السعودية. مشاريع تجارية وسكنية وصناعية منفذة بتميز في الرياض وعبر المملكة.",
      keywords: "مشاريع بناء مكتملة السعودية, محفظة بناء الرياض, مشاريع منجزة المملكة, تشطيب تجاري, بناء سكني, مشاريع صناعية",
      ogTitle: "مشاريع رام المحدودة المنجزة - محفظة بناء السعودية",
      ogDescription: "شاهد مشاريع البناء والتشطيب المكتملة بنجاح في جميع أنحاء السعودية. إتقان في العمل ورضا العملاء.",
      jsonLd: {
        "@context": "https://schema.org/ar",
        "@type": "ItemList",
        "name": "المشاريع الإنشائية المنجزة",
        "description": "محفظة مشاريع البناء المكتملة بنجاح من قبل رام المحدودة في السعودية",
        "numberOfItems": displayedProjects.length,
        "itemListOrder": "https://schema.org/ItemListOrderDescending",
        "itemListElement": displayedProjects.map((project, index) => ({
          "@type": "ListItem",
          "position": index + 1,
          "item": {
            "@type": "CreativeWork",
            "name": project?.name || "مشروع بناء",
            "description": project?.description || "مشروع بناء مكتمل من رام المحدودة",
            "dateCreated": project?.year ? `${project.year}-01-01` : undefined,
            "locationCreated": {
              "@type": "Place",
              "name": project?.location || "السعودية"
            }
          }
        }))
      }
    }
  };

  // Translations for UI
  const translations = {
    en: {
      heading: "Delivered Projects",
      paragraph: "A showcase of our finest completed projects across multiple industries—built with precision, performance, and passion.",
      button: "View Full Portfolio",
      projectImageAlt: "Construction Project Image",
      projectCategoryNA: "Construction",
      projectNameUntitled: "Construction Project",
    },
    ar: {
      heading: "المشاريع المنجزة",
      paragraph: "عرض لأفضل مشاريعنا المكتملة عبر صناعات متعددة—تم تنفيذها بدقة وأداء وشغف.",
      button: "عرض المحفظة الكاملة",
      projectImageAlt: "صورة مشروع بناء",
      projectCategoryNA: "بناء",
      projectNameUntitled: "مشروع بناء",
    },
  };

  // Canonical URL
  const canonicalUrl = `https://ramlimited.com.sa/${lang === "ar" ? "ar" : "en"}/completed-projects`;

  return (
    <>
      <Helmet>
        {/* Primary Meta Tags */}
        <title>{seoContent[lang].title}</title>
        <meta name="description" content={seoContent[lang].description} />
        <meta name="keywords" content={seoContent[lang].keywords} />

        {/* Geographic Targeting */}
        <meta name="geo.region" content="SA" />
        <meta name="geo.placename" content={lang === "ar" ? "الرياض" : "Riyadh"} />

        {/* Language & Locale */}
        <html lang={lang} dir={lang === "ar" ? "rtl" : "ltr"} />
        {lang === "ar" ? (
          <>
            <meta name="language" content="Arabic" />
            <meta httpEquiv="content-language" content="ar-SA" />
            <meta property="og:locale" content="ar_SA" />
          </>
        ) : (
          <>
            <meta name="language" content="English" />
            <meta httpEquiv="content-language" content="en-SA" />
            <meta property="og:locale" content="en_SA" />
          </>
        )}

        {/* Canonical URL */}
        <link rel="canonical" href={canonicalUrl} />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:title" content={seoContent[lang].ogTitle} />
        <meta property="og:description" content={seoContent[lang].ogDescription} />
        <meta property="og:image" content="https://ramlimited.com.sa/images/completed-projects-og.jpg" />
        <meta property="og:image:alt" content={lang === "ar" ? "المشاريع المنجزة" : "Completed Projects"} />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={seoContent[lang].ogTitle} />
        <meta name="twitter:description" content={seoContent[lang].ogDescription} />
        <meta name="twitter:image" content="https://ramlimited.com.sa/images/completed-projects-twitter.jpg" />

        {/* Structured Data - JSON-LD */}
        <script type="application/ld+json">
          {JSON.stringify(seoContent[lang].jsonLd)}
        </script>

        {/* Additional Portfolio Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            "name": "Delivered Projects Portfolio",
            "description": "Collection of completed construction projects by Ram Limited Contracting",
            "publisher": {
              "@type": "Organization",
              "name": "Ram Limited Contracting",
              "url": "https://ramlimited.com.sa"
            },
            "mainEntity": {
              "@type": "ItemList",
              "numberOfItems": displayedProjects.length
            }
          })}
        </script>
      </Helmet>

      <section
        className={`w-full py-14 px-4 sm:px-6 md:px-10 lg:px-20 bg-gray-50 ${lang === "ar" ? "text-right" : "text-left"
          }`}
        itemScope
        itemType="https://schema.org/ItemList"
        role="region"
        aria-label={lang === "ar" ? "المشاريع المنجزة" : "Delivered Projects"}
      >
        {/* Hidden schema markup */}
        <meta itemProp="name" content={seoContent[lang].title} />
        <meta itemProp="description" content={seoContent[lang].description} />
        <meta itemProp="numberOfItems" content={displayedProjects.length} />

        {/* Heading */}
        <div className="text-center mb-10">
          <h2
            className="text-3xl sm:text-4xl font-bold font-sans text-primary mb-3 animate-slideUp"
            itemProp="headline"
          >
            {translations[lang].heading}
          </h2>
          <p
            className="text-[16px] sm:text-[18px] text-black/70 max-w-2xl mx-auto animate-fadeInSlow"
            itemProp="description"
          >
            {translations[lang].paragraph}
          </p>
          <div className="h-[3px] bg-primary w-[120px] mx-auto mt-4 rounded-full animate-growLine"></div>
        </div>

        {/* Project Cards */}
        <div
          className="max-w-7xl mx-auto flex flex-wrap gap-6 justify-center"
          itemProp="itemListElement"
          itemScope
          itemType="https://schema.org/ItemList"
        >
          {displayedProjects.map((project, index) => (
            <ProjectCard
              key={project?.id}
              project={project}
              lang={lang}
              index={index}
            />
          ))}
        </div>

        {/* Button */}
        <div className="flex justify-center mt-10">
          <Link
            to="/projects"
            aria-label={lang === "ar" ? "عرض جميع المشاريع" : "View all projects"}
            title={lang === "ar" ? "عرض محفظة المشاريع الكاملة" : "View complete projects portfolio"}
          >
            <button
              className="relative w-[200px] h-[48px] rounded-lg bg-primary text-white
                         font-semibold text-[16px] shadow-md hover:bg-primary/90
                         transition-all duration-300 group overflow-hidden"
              role="button"
            >
              <span className="relative z-10">{translations[lang].button}</span>
              <span className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] 
                               transition-transform duration-700"></span>
            </button>
          </Link>
        </div>

        {/* Hidden semantic content for SEO */}
        <div style={{ display: 'none' }} aria-hidden="true">
          {/* Project statistics */}
          <span>{displayedProjects.length} completed projects showcased</span>
          <span>Portfolio of construction projects in Saudi Arabia</span>

          {/* Geographic mentions */}
          <span>Completed building projects in Riyadh</span>
          <span>Construction portfolio in Saudi Arabia</span>
          <span>Delivered fit-out projects in KSA</span>

          {/* Arabic keywords */}
          {lang === "ar" && (
            <>
              <span>مشاريع بناء مكتملة في الرياض</span>
              <span>محفظة بناء في السعودية</span>
              <span>مشاريع تشطيب منجزة في المملكة</span>
            </>
          )}

          {/* Project types */}
          {Array.from(new Set(displayedProjects.map(p => p?.category))).map(category => (
            <span key={category} className="project-category">{category} projects</span>
          ))}

          {/* Quality mentions */}
          <span>Quality construction projects completed</span>
          <span>Client satisfaction proven projects</span>
          <span>Successfully delivered building solutions</span>

          {/* Company information */}
          <span>Ram Limited Contracting portfolio</span>
          <span>ISO certified construction company projects</span>
          <span>Award-winning project examples</span>

          {/* Call to action context */}
          <p>View our complete portfolio of construction projects delivered across Saudi Arabia.</p>
          <p>Explore more successful building and fit-out projects by Ram Limited.</p>
        </div>
      </section>
    </>
  );
};

export default DeliveredService;