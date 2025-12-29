import React, { useState, useEffect, useMemo, useCallback } from "react";
import api from "../../../api/api"; // centralized API instance
import ProjectFilterBar from "../components/ProjectFilterBar";
import ProjectGrid from "./ProjectGrid";
import { Link } from "react-router-dom"; 
import { Helmet } from "react-helmet-async";
import { useLanguage } from "../../../context/LanguageContext"; // adjust path

const PAGE_SIZE = 9;

const ProjectsPage = () => {
  const { lang } = useLanguage();
  const [projects, setProjects] = useState([]);
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);
  const [loading, setLoading] = useState(true);

  // -------------------- FETCH PROJECTS --------------------
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        setLoading(true);
        const { data } = await api.get("/projects");

        const normalized = Array.isArray(data)
          ? data.map((p) => ({
              ...p,
              image: p.image || p.images?.[0]?.image_url || null,
              images: Array.isArray(p.images)
                ? p.images.map((i) => i.image_url || i)
                : [],
              challengeSolution: [
                ...(p.challenges || []).map((c) => ({ ...c, type: "challenge" })),
                ...(p.solutions || []).map((s) => ({ ...s, type: "solution" })),
              ],
              testimonial: Array.isArray(p.testimonials) ? p.testimonials[0] || {} : {},
              investment: Array.isArray(p.investments) ? p.investments[0] || {} : {},
            }))
          : [];

        setProjects(normalized);
        setFilteredProjects(normalized);
      } catch (err) {
        console.error("Error fetching projects:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchProjects();
  }, []);

  // -------------------- FILTER DATA --------------------
  const categories = useMemo(
    () => ["All Categories", ...Array.from(new Set(projects.map((p) => p.category)))],
    [projects]
  );

  const years = useMemo(() => {
    const ys = ["All Years", ...Array.from(new Set(projects.map((p) => p.year)))];
    return ys
      .filter(Boolean)
      .slice(0)
      .sort((a, b) => {
        if (a === "All Years") return -1;
        if (b === "All Years") return 1;
        return Number(b) - Number(a);
      });
  }, [projects]);

  const handleFilterChange = useCallback(
    ({ category, year }) => {
      let filtered = projects;
      if (category && category !== "All Categories")
        filtered = filtered.filter((p) => p.category === category);
      if (year && year !== "All Years") filtered = filtered.filter((p) => String(p.year) === String(year));
      setFilteredProjects(filtered);
      setVisibleCount(PAGE_SIZE);
    },
    [projects]
  );

  // -------------------- LOAD MORE --------------------
  const handleLoadMore = () => {
    setVisibleCount((s) => Math.min(filteredProjects.length, s + PAGE_SIZE));
  };

  // -------------------- SEO CONTENT --------------------
  const seoContent = {
    en: {
      title: "Our Projects | Ram Limited Contracting",
      description: "Explore a diverse range of successful construction, interior, and fit-out projects delivered by Ram Limited. Quality, innovation, and excellence in every project.",
      noResults: "No projects found matching your criteria.",
      loadMore: "Load more",
      // SEO Metadata
      meta: {
        title: "Construction Projects Portfolio | Ram Limited Contracting Saudi Arabia",
        description: "Discover our portfolio of construction, interior fit-out, and contracting projects across Saudi Arabia. Expertise in commercial, residential, and industrial construction.",
        keywords: "construction projects Saudi Arabia, contracting companies Riyadh, interior fit-out, commercial construction, residential projects, industrial construction, building contractors, project portfolio",
        ogTitle: "Ram Limited Contracting Projects - Saudi Arabia Construction Experts",
        ogDescription: "View our successful construction and fit-out projects across the Kingdom of Saudi Arabia",
        twitterTitle: "Ram Limited Projects - Quality Construction in KSA",
        twitterDescription: "Explore our portfolio of construction projects in Saudi Arabia"
      },
      // JSON-LD Structured Data
      jsonLd: {
        "@context": "https://schema.org",
        "@type": "ItemList",
        "name": "Construction Projects Portfolio",
        "description": "Portfolio of construction and contracting projects by Ram Limited in Saudi Arabia",
        "numberOfItems": projects.length,
        "itemListOrder": "https://schema.org/ItemListOrderDescending",
        "itemListElement": projects.slice(0, 5).map((project, index) => ({
          "@type": "ListItem",
          "position": index + 1,
          "item": {
            "@type": "CreativeWork",
            "name": project.title,
            "description": project.description,
            "dateCreated": project.year ? `${project.year}-01-01` : undefined,
            "location": {
              "@type": "Place",
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "SA",
                "addressRegion": "Riyadh Province"
              }
            }
          }
        }))
      }
    },
    ar: {
      title: "مشاريعنا | رام المحدودة للمقاولات",
      description: "استكشف مجموعة متنوعة من المشاريع الناجحة للبناء والتشطيب الداخلي التي نفذتها رام المحدودة. الجودة والابتكار والتميز في كل مشروع.",
      noResults: "لم يتم العثور على مشاريع تطابق معاييرك.",
      loadMore: "عرض المزيد",
      // SEO Metadata بالعربية
      meta: {
        title: "محفظة مشاريع البناء | رام المحدودة للمقاولات السعودية",
        description: "اكتشف محفظة مشاريع البناء والتشطيب الداخلي والمقاولات في جميع أنحاء المملكة العربية السعودية. خبرة في البناء التجاري والسكني والصناعي.",
        keywords: "مشاريع بناء السعودية, شركات مقاولات الرياض, تشطيب داخلي, بناء تجاري, مشاريع سكنية, بناء صناعي, مقاولون بناء, محفظة المشاريع",
        ogTitle: "مشاريع رام المحدودة للمقاولات - خبراء البناء في السعودية",
        ogDescription: "اطلع على مشاريع البناء والتشطيب الناجحة في جميع أنحاء المملكة العربية السعودية",
        twitterTitle: "مشاريع رام المحدودة - بناء عالي الجودة في المملكة",
        twitterDescription: "استكشف محفظة مشاريع البناء لدينا في السعودية"
      },
      // JSON-LD Structured Data بالعربية
      jsonLd: {
        "@context": "https://schema.org/ar",
        "@type": "ItemList",
        "name": "محفظة مشاريع البناء",
        "description": "محفظة مشاريع البناء والمقاولات من رام المحدودة في السعودية",
        "numberOfItems": projects.length,
        "itemListOrder": "https://schema.org/ItemListOrderDescending",
        "itemListElement": projects.slice(0, 5).map((project, index) => ({
          "@type": "ListItem",
          "position": index + 1,
          "item": {
            "@type": "CreativeWork",
            "name": project.title,
            "description": project.description,
            "dateCreated": project.year ? `${project.year}-01-01` : undefined,
            "location": {
              "@type": "Place",
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "SA",
                "addressRegion": "منطقة الرياض"
              }
            }
          }
        }))
      }
    }
  };

  // -------------------- CANONICAL URL & BREADCRUMB --------------------
  const canonicalUrl = "https://ramlimited.com.sa/projects";
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": lang === "ar" ? "الرئيسية" : "Home",
        "item": "https://ramlimited.com.sa/"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": lang === "ar" ? "مشاريعنا" : "Our Projects",
        "item": canonicalUrl
      }
    ]
  };

  // -------------------- RENDER --------------------
  if (loading) return <p className="text-center mt-10">Loading projects...</p>;

  return (
    <div className="bg-gray-50 min-h-screen font-inter" dir={lang === "ar" ? "rtl" : "ltr"}>
      {/* --- COMPREHENSIVE SEO META TAGS --- */}
      <Helmet>
        {/* Primary Meta Tags */}
        <title>{seoContent[lang].meta.title}</title>
        <meta name="description" content={seoContent[lang].meta.description} />
        <meta name="keywords" content={seoContent[lang].meta.keywords} />
        
        {/* Geographic Targeting for Saudi Arabia */}
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
        <link rel="alternate" hreflang="ar" href="https://ramlimited.com.sa/ar/projects" />
        <link rel="alternate" hreflang="en" href="https://ramlimited.com.sa/en/projects" />
        <link rel="alternate" hreflang="x-default" href="https://ramlimited.com.sa/projects" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:title" content={seoContent[lang].meta.ogTitle} />
        <meta property="og:description" content={seoContent[lang].meta.ogDescription} />
        <meta property="og:image" content="https://ramlimited.com.sa/images/projects-og-image.jpg" />
        <meta property="og:image:alt" content={lang === "ar" ? "مشاريع رام المحدودة" : "Ram Limited Projects"} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:site_name" content={lang === "ar" ? "رام المحدودة للمقاولات" : "Ram Limited Contracting"} />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@ramlimited" />
        <meta name="twitter:title" content={seoContent[lang].meta.twitterTitle} />
        <meta name="twitter:description" content={seoContent[lang].meta.twitterDescription} />
        <meta name="twitter:image" content="https://ramlimited.com.sa/images/projects-twitter-card.jpg" />
        
        {/* Additional Meta Tags */}
        <meta name="robots" content="index, follow, max-image-preview:large" />
        <meta name="author" content="Ram Limited Contracting" />
        <meta name="copyright" content="Ram Limited Contracting" />
        <meta name="rating" content="General" />
        
        {/* Structured Data - JSON-LD */}
        <script type="application/ld+json">
          {JSON.stringify(seoContent[lang].jsonLd)}
        </script>
        
        {/* Breadcrumb Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema)}
        </script>
        
        {/* Local Business Structured Data for Saudi Arabia */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": lang === "ar" ? "رام المحدودة للمقاولات" : "Ram Limited Contracting",
            "description": seoContent[lang].meta.description,
            "url": "https://ramlimited.com.sa",
            "telephone": "+966-11-123-4567",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": lang === "ar" ? "شارع الملك فهد" : "King Fahd Road",
              "addressLocality": lang === "ar" ? "الرياض" : "Riyadh",
              "addressRegion": lang === "ar" ? "منطقة الرياض" : "Riyadh Province",
              "postalCode": "12345",
              "addressCountry": "SA"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "24.7136",
              "longitude": "46.6753"
            },
            "openingHours": "Sa-Th 08:00-18:00",
            "priceRange": "$$$",
            "image": "https://ramlimited.com.sa/images/logo.jpg"
          })}
        </script>
      </Helmet>

      {/* --- FILTER BAR --- */}
      <ProjectFilterBar
        categories={categories}
        years={years}
        projectCount={filteredProjects.length}
        onFilterChange={handleFilterChange}
        lang={lang}
      />

      {/* --- GRID --- */}
      <ProjectGrid
        projects={filteredProjects.slice(0, visibleCount)}
        LinkComponent={Link}
        lang={lang}
      />

      {/* --- LOAD MORE --- */}
      {visibleCount < filteredProjects.length && (
        <div className="max-w-7xl mx-auto p-4 flex justify-center">
          <button
            onClick={handleLoadMore}
            className="px-6 py-2 bg-blue-600 text-white rounded-md shadow hover:bg-blue-700 transition"
          >
            {seoContent[lang].loadMore}
          </button>
        </div>
      )}

      {/* --- NO RESULTS --- */}
      {filteredProjects.length === 0 && (
        <div role="status" aria-live="polite">
          <p className="text-center text-gray-500 mt-16 text-lg p-6 bg-white rounded-lg shadow-md">
            {seoContent[lang].noResults}
          </p>
        </div>
      )}
      
      {/* --- VISIBLE PROJECTS COUNT FOR SEO (Hidden) --- */}
      <div style={{ display: 'none' }} aria-hidden="true">
        <span id="projects-count">{filteredProjects.length}</span>
        <span id="visible-projects-count">{visibleCount}</span>
        {categories.map(cat => (
          <span key={cat} className="project-category">{cat}</span>
        ))}
        {years.map(year => (
          <span key={year} className="project-year">{year}</span>
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;