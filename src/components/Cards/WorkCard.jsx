// src/components/Cards/WorkCard.jsx
import React from "react";
import { Link } from "react-router-dom";
import { BACKEND_URL } from "../../api/api"; 

const WorkCard = ({ project, lang = "en" }) => {
  if (!project) return null;

  // Optimized Image Path Logic
  const getImageUrl = () => {
    const rawPath = project.image;
    if (!rawPath) return "https://placehold.co/600x400?text=No+Image";

    const base = BACKEND_URL.endsWith('/') ? BACKEND_URL.slice(0, -1) : BACKEND_URL;
    
    // Auto-inject /projects/ if missing from the DB path
    let fixedPath = rawPath;
    if (rawPath.startsWith("/uploads/") && !rawPath.includes("/projects/")) {
      fixedPath = rawPath.replace("/uploads/", "/uploads/projects/");
    }

    return `${base}${fixedPath.startsWith('/') ? '' : '/'}${fixedPath}`;
  };

  const imageUrl = getImageUrl();
  const projectSlug = project.slug || `project-${project.id}`;
  const projectName = project.name || "Construction Project";
  const projectCategory = project.category || "Fit-Out";
  const projectClient = project.client || "Client";
  const projectYear = project.year || new Date().getFullYear();
  const projectLocation = project.location || "Riyadh, Saudi Arabia";
  
  // SEO-friendly alt text
  const getImageAlt = () => {
    if (lang === "ar") {
      return `${projectName} - مشروع ${projectCategory} في ${projectLocation} من تنفيذ رام المحدودة`;
    }
    return `${projectName} - ${projectCategory} project in ${projectLocation} by Ram Limited Contracting`;
  };

  // SEO-friendly title attribute
  const getLinkTitle = () => {
    if (lang === "ar") {
      return `عرض مشروع ${projectName} - ${projectCategory} - ${projectYear}`;
    }
    return `View ${projectName} project - ${projectCategory} - ${projectYear}`;
  };

  return (
    <Link 
      to={`/projects/${projectSlug}`}
      className="group relative block w-full bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-500 overflow-hidden"
      title={getLinkTitle()}
      aria-label={lang === "ar" 
        ? `عرض تفاصيل مشروع ${projectName}` 
        : `View details of ${projectName} project`
      }
      itemScope
      itemType="https://schema.org/CreativeWork"
      itemProp="item"
    >
      {/* Hidden structured data */}
      <meta itemProp="name" content={projectName} />
      <meta itemProp="description" content={project.description || `Construction project by Ram Limited in ${projectLocation}`} />
      <meta itemProp="dateCreated" content={`${projectYear}-01-01`} />
      <meta itemProp="locationCreated" content={projectLocation} />
      <meta itemProp="creator" content="Ram Limited Contracting" />
      
      {/* Image Container with Schema markup */}
      <div 
        className="aspect-[4/3] w-full overflow-hidden bg-gray-100"
        itemProp="image"
        itemScope
        itemType="https://schema.org/ImageObject"
      >
        <img
          src={imageUrl}
          alt={getImageAlt()}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          onError={(e) => {
            e.target.src = "https://placehold.co/600x400?text=Image+Not+Found";
            e.target.alt = lang === "ar" 
              ? "صورة المشروع غير متوفرة" 
              : "Project image not available";
          }}
          itemProp="url"
          loading="lazy"
          width="600"
          height="450"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <meta itemProp="contentUrl" content={imageUrl} />
        <meta itemProp="thumbnailUrl" content={imageUrl} />
        <meta itemProp="width" content="600" />
        <meta itemProp="height" content="450" />
      </div>

      {/* Modern Gradient Overlay */}
      <div 
        className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent flex flex-col justify-end p-5 opacity-100"
        role="presentation"
      >
        <div className="transform transition-all duration-300 group-hover:-translate-y-2">
          {/* Category badge with Schema markup */}
          <span 
            className="inline-block px-2 py-1 mb-2 text-[10px] font-bold uppercase tracking-widest text-white bg-[#023A9A] rounded"
            itemProp="genre"
          >
            {projectCategory}
          </span>
          
          {/* Project name with Schema markup */}
          <h3 
            className="text-white font-bold text-xl lg:text-2xl leading-tight"
            itemProp="headline"
          >
            {projectName}
          </h3>
          
          {/* Project metadata with Schema markup */}
          <div 
            className="flex items-center gap-2 mt-2"
            itemProp="author"
            itemScope
            itemType="https://schema.org/Organization"
          >
            <meta itemProp="name" content={projectClient} />
            
            <p 
              className="text-gray-300 text-sm font-medium"
              itemProp="name"
            >
              {projectClient}
            </p>
            <span 
              className="w-1 h-1 bg-gray-500 rounded-full"
              aria-hidden="true"
            ></span>
            <p 
              className="text-gray-400 text-sm"
              itemProp="datePublished"
            >
              {projectYear}
            </p>
          </div>
        </div>
      </div>
      
      {/* Hidden structured content for SEO */}
      <div style={{ display: 'none' }} aria-hidden="true">
        {/* Additional schema properties */}
        <meta itemProp="publisher" content="Ram Limited Contracting" />
        <meta itemProp="provider" content="Ram Limited Contracting" />
        <meta itemProp="serviceType" content="Construction Services" />
        
        {/* Geographic information */}
        <div itemProp="locationCreated" itemScope itemType="https://schema.org/Place">
          <meta itemProp="name" content={projectLocation} />
          <div itemProp="address" itemScope itemType="https://schema.org/PostalAddress">
            <meta itemProp="addressCountry" content="SA" />
            <meta itemProp="addressRegion" content={projectLocation.includes("Riyadh") ? "Riyadh Province" : "Saudi Arabia"} />
          </div>
        </div>
        
        {/* Project keywords for search engines */}
        <span className="seo-keyword">{projectCategory} project Saudi Arabia</span>
        <span className="seo-keyword">Construction project {projectYear}</span>
        <span className="seo-keyword">Ram Limited {projectLocation}</span>
        {lang === "ar" && (
          <>
            <span className="seo-keyword">مشروع {projectCategory} السعودية</span>
            <span className="seo-keyword">مشروع بناء {projectYear}</span>
            <span className="seo-keyword">رام المحدودة {projectLocation}</span>
          </>
        )}
        
        {/* Service information */}
        <meta itemProp="offers" itemScope itemType="https://schema.org/Offer" />
        <link itemProp="url" href={`https://ramlimited.com.sa/projects/${projectSlug}`} />
      </div>
    </Link>
  );
};

// Additional schema.org helper function for structured data
export const getProjectStructuredData = (project, lang = "en") => {
  if (!project) return null;
  
  return {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    "name": project.name || "Construction Project",
    "description": project.description || `Construction project by Ram Limited Contracting in Saudi Arabia`,
    "image": getImageUrl(project),
    "dateCreated": project.year ? `${project.year}-01-01` : undefined,
    "author": {
      "@type": "Organization",
      "name": "Ram Limited Contracting",
      "url": "https://ramlimited.com.sa",
      "address": {
        "@type": "PostalAddress",
        "addressCountry": "SA",
        "addressRegion": lang === "ar" ? "منطقة الرياض" : "Riyadh Province"
      }
    },
    "publisher": {
      "@type": "Organization",
      "name": "Ram Limited Contracting"
    },
    "locationCreated": {
      "@type": "Place",
      "name": project.location || "Riyadh, Saudi Arabia"
    },
    "genre": project.category || "Construction",
    "keywords": lang === "ar" 
      ? `مشاريع بناء, ${project.category}, السعودية, رام المحدودة`
      : `construction projects, ${project.category}, Saudi Arabia, Ram Limited`
  };
};

// Helper function for image URL
const getImageUrl = (project) => {
  const rawPath = project.image;
  if (!rawPath) return "https://placehold.co/600x400?text=No+Image";

  const base = BACKEND_URL.endsWith('/') ? BACKEND_URL.slice(0, -1) : BACKEND_URL;
  
  let fixedPath = rawPath;
  if (rawPath.startsWith("/uploads/") && !rawPath.includes("/projects/")) {
    fixedPath = rawPath.replace("/uploads/", "/uploads/projects/");
  }

  return `${base}${fixedPath.startsWith('/') ? '' : '/'}${fixedPath}`;
};

export default React.memo(WorkCard);