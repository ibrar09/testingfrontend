// src/pages/Projects/ProjectDetailsPage.jsx
import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import api, { BACKEND_URL } from "../../api/api";
import { useLanguage } from "../../context/LanguageContext";

import ProjectDetailsHero from "./components/ProjectDetailsHero";
import ProjectDetailsDetail from "./components/ProjectDetailsDetail";
import ProjectDetailsOverview from "./components/ProjectDetailsOverview";
import ProjectGallery from "./components/ProjectGallery";
import ChallengesSolutionCard from "./components/ChallengeSolutionCard";
import TestimonialSection from "./components/TestimonialCard";
import ProjectInvestmentBlock from "./components/ProjectInvestmentBlock";
import ProjectDetailJourney from "./components/ProjectDetailJourny";
import ContactForm from "../ContactPage/ContactForm";

// ----------------- NORMALIZE IMAGE URLS ----------------- //
const normalizeImage = (img) => {
  if (!img) return "https://placehold.co/1200x800?text=No+Image+Found";

  // Handle both string paths and object paths (from the images array)
  let raw = typeof img === "string" ? img : img.image_url;
  
  if (!raw) return "https://placehold.co/1200x800?text=No+Image+Found";

  // 1. Clean the Base URL (remove trailing slash)
  const base = BACKEND_URL.endsWith('/') ? BACKEND_URL.slice(0, -1) : BACKEND_URL;

  // 2. THE FIX: Inject /projects/ if it's missing from the path
  let fixedPath = raw;
  if (raw.startsWith("/uploads/") && !raw.includes("/projects/")) {
    fixedPath = raw.replace("/uploads/", "/uploads/projects/");
  }

  // 3. Ensure the path starts with a slash
  const cleanPath = fixedPath.startsWith('/') ? fixedPath : `/${fixedPath}`;

  const finalUrl = `${base}${cleanPath}`;
  
  // LOG for debugging: Copy this link from console to see if it opens in a browser
  console.log("📸 Project Page Image:", finalUrl);
  
  return finalUrl;
};

// ----------------- PROJECT DETAILS PAGE ----------------- //
const ProjectDetailsPage = () => {
  const { lang } = useLanguage();
  const isRTL = lang === "ar";

  // ✅ Use slug instead of id
  const { slug } = useParams();
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!slug) return;

    const fetchProject = async () => {
      setLoading(true);
      try {
        // ✅ API call by slug
        const response = await api.get(`/projects/slug/${slug}`);
        const projectData = response.data?.data || response.data;

        if (!projectData) {
          setProject(null);
          return;
        }

        const normalized = {
          ...projectData,
          image: normalizeImage(projectData.image) || normalizeImage(projectData.images?.[0]),
          images: Array.isArray(projectData.images)
            ? projectData.images.map(normalizeImage).filter(Boolean)
            : [],
          challenges: Array.isArray(projectData.challenges) ? projectData.challenges : [],
          solutions: Array.isArray(projectData.solutions) ? projectData.solutions : [],
          testimonials: Array.isArray(projectData.testimonials)
            ? projectData.testimonials.map((t) => ({ ...t, image: normalizeImage(t.image) }))
            : [],
          investment: projectData.investment || {},
        };

        setProject(normalized);
      } catch (err) {
        console.error("Error fetching project:", err.response?.data || err.message);
        setProject(null);
      } finally {
        setLoading(false);
      }
    };

    fetchProject();
  }, [slug]);

  if (loading)
    return (
      <p className={`text-center mt-10 ${isRTL ? "text-right" : "text-left"}`}>
        {isRTL ? "جارٍ تحميل المشروع..." : "Loading project..."}
      </p>
    );

  if (!project) {
    return (
      <div className={`p-16 ${isRTL ? "text-right" : "text-left"}`} dir={isRTL ? "rtl" : "ltr"}>
        <h2 className="text-2xl font-bold">{isRTL ? "المشروع غير موجود" : "Project Not Found"}</h2>
        <p className="text-gray-600 mt-2">
          {isRTL ? "المشروع الذي تبحث عنه غير موجود." : "The project you are looking for does not exist."}
        </p>
        <Link to="/projects" className="mt-4 inline-block text-blue-600 underline">
          {isRTL ? "العودة إلى المشاريع" : "Back to Projects"}
        </Link>
      </div>
    );
  }

  // ----------------- TEXT BASED ON LANGUAGE ----------------- //
  const name = isRTL ? project.name_ar || project.name : project.name;
  const category = isRTL ? project.category_ar || project.category : project.category;
  const client = isRTL ? project.client_ar || project.client : project.client;
  const description = isRTL ? project.description_ar || project.description : project.description;

  const hero = {
    image: project.image,
    category,
    title: name,
    subtitle: isRTL
      ? `العميل: ${client || "N/A"} | السنة: ${project.year || "N/A"}`
      : `Client: ${client || "N/A"} | Year: ${project.year || "N/A"}`,
  };

  const details = [
    { iconName: "Calendar", label: isRTL ? "السنة" : "Year", value: project.year || "N/A" },
    { iconName: "LayoutGrid", label: isRTL ? "الفئة" : "Category", value: category || "N/A" },
    { iconName: "Clock", label: isRTL ? "المدة" : "Duration", value: project.duration || "N/A" },
    { iconName: "DollarSign", label: isRTL ? "الميزانية" : "Budget", value: project.budget || "N/A" },
    { iconName: "Star", label: isRTL ? "مميز" : "Featured", value: project.featured ? (isRTL ? "نعم" : "Yes") : (isRTL ? "لا" : "No") },
  ];

  const overview = {
    title: name,
    description,
    clientName: client,
    teamSize: project.teamSize,
    image: project.images?.[0] || project.image,
  };

  const galleryImages = project.images.length > 0 ? project.images : ["/fallback-hero.jpg"];

  return (
    <div dir={isRTL ? "rtl" : "ltr"} className={isRTL ? "text-right" : "text-left"}>
      <ProjectDetailsHero hero={hero} />
      <ProjectDetailsDetail details={details} />
      <ProjectDetailsOverview project={overview} />
      <ProjectDetailJourney />
      <ProjectGallery images={galleryImages} />
      <ChallengesSolutionCard challenges={project.challenges} solutions={project.solutions} />
      <TestimonialSection testimonials={project.testimonials} />
      <ProjectInvestmentBlock investment={project.investment} />
      <ContactForm />
    </div>
  );
};

export default ProjectDetailsPage;
