// src/pages/OurWork.jsx
import React, { useEffect, useState } from "react";
import api from "../../api/api"; 
import WorkCard from "../../components/Cards/WorkCard";
import { Helmet } from "react-helmet-async";
import { useLanguage } from "../../context/LanguageContext"; // Assuming you have language context

const OurWork = () => {
  const { lang } = useLanguage(); // Get language from context
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [visibleCount, setVisibleCount] = useState(6);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const { data } = await api.get("/projects");
        const projectsArray = Array.isArray(data) ? data : data.data || [];
        setProjects(projectsArray);
      } catch (err) {
        console.error("[OurWork] Fetch error:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchProjects();
  }, []);

  const handleLoadMore = () => {
    setVisibleCount(prev => prev + 3);
  };

  // --- SEO Content ---
  const seoContent = {
    en: {
      title: "Our Construction Projects Portfolio | Ram Limited Contracting Saudi Arabia",
      description: "Explore Ram Limited's portfolio of construction, fit-out, and interior projects in Saudi Arabia. Commercial, residential, and retail projects completed in Riyadh and across KSA.",
      keywords: "construction projects Saudi Arabia, building portfolio Riyadh, commercial construction projects, residential villas KSA, retail fit-out projects, office interiors, completed projects 2025, construction company portfolio",
      ogTitle: "Ram Limited Construction Portfolio - Projects in Saudi Arabia",
      ogDescription: "View our completed construction and fit-out projects across Saudi Arabia. Quality workmanship and innovative solutions.",
      jsonLd: {
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        "name": "Our Work - Construction Projects Portfolio",
        "description": "Portfolio of construction and contracting projects completed by Ram Limited in Saudi Arabia",
        "publisher": {
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
        "mainEntity": {
          "@type": "ItemList",
          "numberOfItems": projects.length,
          "itemListElement": projects.slice(0, 6).map((project, index) => ({
            "@type": "ListItem",
            "position": index + 1,
            "item": {
              "@type": "CreativeWork",
              "name": project.title || "Construction Project",
              "description": project.description || "Construction project by Ram Limited",
              "dateCreated": project.year ? `${project.year}-01-01` : undefined,
              "locationCreated": {
                "@type": "Place",
                "address": {
                  "@type": "PostalAddress",
                  "addressCountry": "SA",
                  "addressRegion": project.location || "Riyadh"
                }
              }
            }
          }))
        }
      }
    },
    ar: {
      title: "محفظة مشاريع البناء | رام المحدودة للمقاولات السعودية",
      description: "استكشف محفظة مشاريع البناء والتشطيب الداخلي لرام المحدودة في السعودية. مشاريع تجارية وسكنية وتجزئة مكتملة في الرياض وعبر المملكة.",
      keywords: "مشاريع بناء السعودية, محفظة بناء الرياض, مشاريع بناء تجارية, فلل سكنية المملكة, مشاريع تشطيب محلات, ديكور مكاتب, مشاريع مكتملة 2025, محفظة شركة بناء",
      ogTitle: "محفظة مشاريع رام المحدودة - مشاريع في السعودية",
      ogDescription: "شاهد مشاريع البناء والتشطيب المكتملة في جميع أنحاء السعودية. إتقان في العمل وحلول مبتكرة.",
      jsonLd: {
        "@context": "https://schema.org/ar",
        "@type": "CollectionPage",
        "name": "أعمالنا - محفظة مشاريع البناء",
        "description": "محفظة مشاريع البناء والمقاولات المكتملة من قبل رام المحدودة في السعودية",
        "publisher": {
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
        "mainEntity": {
          "@type": "ItemList",
          "numberOfItems": projects.length,
          "itemListElement": projects.slice(0, 6).map((project, index) => ({
            "@type": "ListItem",
            "position": index + 1,
            "item": {
              "@type": "CreativeWork",
              "name": project.title || "مشروع بناء",
              "description": project.description || "مشروع بناء من رام المحدودة",
              "dateCreated": project.year ? `${project.year}-01-01` : undefined,
              "locationCreated": {
                "@type": "Place",
                "address": {
                  "@type": "PostalAddress",
                  "addressCountry": "SA",
                  "addressRegion": project.location || "الرياض"
                }
              }
            }
          }))
        }
      }
    }
  };

  // Canonical URLs
  const canonicalUrl = `https://ramlimited.com.sa/${lang === "ar" ? "ar" : "en"}/our-work`;

  return (
    <>
      {/* --- COMPREHENSIVE SEO META TAGS --- */}
      <Helmet>
        {/* Primary Meta Tags */}
        <title>{seoContent[lang].title}</title>
        <meta name="description" content={seoContent[lang].description} />
        <meta name="keywords" content={seoContent[lang].keywords} />
        
        {/* Geographic Targeting */}
        <meta name="geo.region" content="SA" />
        <meta name="geo.placename" content={lang === "ar" ? "الرياض" : "Riyadh"} />
        <meta name="geo.position" content="24.7136;46.6753" />
        <meta name="ICBM" content="24.7136, 46.6753" />
        
        {/* Language & Locale */}
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
        
        {/* Alternate Language Versions */}
        <link rel="alternate" hreflang="ar" href="https://ramlimited.com.sa/ar/our-work" />
        <link rel="alternate" hreflang="en" href="https://ramlimited.com.sa/en/our-work" />
        <link rel="alternate" hreflang="x-default" href="https://ramlimited.com.sa/our-work" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:title" content={seoContent[lang].ogTitle} />
        <meta property="og:description" content={seoContent[lang].ogDescription} />
        <meta property="og:image" content="https://ramlimited.com.sa/images/projects-portfolio-og.jpg" />
        <meta property="og:image:alt" content={lang === "ar" ? "محفظة مشاريع رام المحدودة" : "Ram Limited Projects Portfolio"} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:site_name" content={lang === "ar" ? "رام المحدودة للمقاولات" : "Ram Limited Contracting"} />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@ramlimited" />
        <meta name="twitter:title" content={seoContent[lang].ogTitle} />
        <meta name="twitter:description" content={seoContent[lang].ogDescription} />
        <meta name="twitter:image" content="https://ramlimited.com.sa/images/projects-portfolio-twitter.jpg" />
        
        {/* Additional Meta Tags */}
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="author" content="Ram Limited Contracting" />
        <meta name="copyright" content="Ram Limited Contracting" />
        <meta name="rating" content="General" />
        
        {/* Structured Data - JSON-LD */}
        <script type="application/ld+json">
          {JSON.stringify(seoContent[lang].jsonLd)}
        </script>
        
        {/* Breadcrumb Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": lang === "ar" ? "الرئيسية" : "Home",
                "item": `https://ramlimited.com.sa/${lang === "ar" ? "ar" : "en"}`
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": lang === "ar" ? "أعمالنا" : "Our Work",
                "item": canonicalUrl
              }
            ]
          })}
        </script>
      </Helmet>

      <section 
        className="w-full py-16 lg:py-24 bg-[#FAFAFA] min-h-screen"
        dir={lang === "ar" ? "rtl" : "ltr"}
        itemScope
        itemType="https://schema.org/CollectionPage"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hidden schema markup */}
          <meta itemProp="name" content={lang === "ar" ? "أعمالنا" : "Our Work"} />
          <meta itemProp="description" content={seoContent[lang].description} />
          
          {/* Header Section with Schema markup */}
          <header className="max-w-3xl mb-16 text-left">
            <h4 
              className="text-[#023A9A] font-bold uppercase tracking-widest text-sm mb-3"
              itemProp="alternativeHeadline"
            >
              Portfolio
            </h4>
            <h1 
              className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6"
              itemProp="headline"
            >
              {lang === "ar" ? "أعمال" : "Our"} <span className="text-[#023A9A]">{lang === "ar" ? "نحن" : "Work"}</span>
            </h1>
            <p 
              className="text-lg text-gray-600 leading-relaxed"
              itemProp="abstract"
            >
              {lang === "ar" 
                ? "من تشطيب المحلات إلى الفلل الحديثة، نحن نقدم التميز في كل قطاع. استكشف أحدث مشاريعنا المكتملة في 2025."
                : "From retail fit-outs to modern villas, we deliver excellence across every sector. Explore our latest projects completed in 2025."
              }
            </p>
          </header>

          {/* Grid Section */}
          {loading ? (
            <div 
              className="flex flex-col items-center justify-center py-20"
              role="status"
              aria-live="polite"
            >
              <div className="w-12 h-12 border-4 border-gray-200 border-t-[#023A9A] rounded-full animate-spin"></div>
              <p className="mt-4 text-gray-500 font-medium">
                {lang === "ar" ? "جاري تحميل المشاريع الرائعة..." : "Loading amazing projects..."}
              </p>
            </div>
          ) : (
            <>
              <div 
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                itemProp="mainEntity"
                itemScope
                itemType="https://schema.org/ItemList"
              >
                {projects.slice(0, visibleCount).map((project, index) => (
                  <div 
                    key={project.id} 
                    itemProp="itemListElement"
                    itemScope
                    itemType="https://schema.org/ListItem"
                    className="h-full"
                  >
                    <meta itemProp="position" content={index + 1} />
                    <WorkCard 
                      project={project} 
                      lang={lang} // Pass language to WorkCard for SEO
                    />
                  </div>
                ))}
              </div>

              {/* Load More Button */}
              {visibleCount < projects.length && (
                <div className="mt-16 flex justify-center">
                  <button 
                    onClick={handleLoadMore}
                    className="px-8 py-3 bg-white border-2 border-[#023A9A] text-[#023A9A] font-bold rounded-full hover:bg-[#023A9A] hover:text-white transition-all duration-300 shadow-sm"
                    aria-label={lang === "ar" ? "عرض المزيد من المشاريع" : "View more projects"}
                    role="button"
                  >
                    {lang === "ar" ? "عرض المزيد من المشاريع" : "View More Projects"}
                  </button>
                </div>
              )}
            </>
          )}
          
          {/* Hidden structured content for SEO */}
          <div style={{ display: 'none' }} aria-hidden="true">
            <meta itemProp="numberOfItems" content={projects.length} />
            <meta itemProp="lastReviewed" content={new Date().toISOString().split('T')[0]} />
            
            {/* Project statistics for search engines */}
            <span id="total-projects">{projects.length} projects completed</span>
            <span id="visible-projects">{Math.min(visibleCount, projects.length)} projects displayed</span>
            
            {/* Geographic mentions */}
            <span>Construction projects in Saudi Arabia</span>
            <span>Building projects in Riyadh</span>
            <span>Contracting work in KSA</span>
            {lang === "ar" && (
              <>
                <span>مشاريع بناء في السعودية</span>
                <span>مشاريع بناء في الرياض</span>
                <span>أعمال مقاولات في المملكة</span>
              </>
            )}
            
            {/* Project categories (extracted from projects) */}
            {Array.from(new Set(projects.map(p => p.category))).slice(0, 5).map(category => (
              <span key={category} className="project-category">{category}</span>
            ))}
            
            {/* Year information */}
            <span>Latest projects 2025</span>
            <span>Construction portfolio updated {new Date().toLocaleDateString()}</span>
          </div>
        </div>
      </section>
    </>
  );
};

export default OurWork;