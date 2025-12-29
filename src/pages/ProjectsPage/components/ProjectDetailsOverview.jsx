// src/pages/Projects/components/ProjectDetailsOverview.jsx
import React from "react";
import { Users, Briefcase } from "lucide-react";
import { useLanguage } from "../../../context/LanguageContext"; // Language context
import api from "../../../api/api"; // axios instance

import { BACKEND_URL } from "../../../api/config";

// -------- IMAGE NORMALIZER -------- //
const normalizeImage = (img) => {
  if (!img) return null;

  const raw = typeof img === "string" ? img : img.image_url || img;

  if (!raw) return null;

  // Full URL
  if (raw.startsWith("http")) return raw;

  // Already correct path
  if (raw.startsWith("/uploads/projects") || raw.startsWith("/uploads")) return `${BACKEND_URL}${raw}`;

  // Otherwise assume it's missing folder
  return `${BACKEND_URL}/uploads/projects/${raw}`;
};

const ProjectDetailsOverview = ({ project }) => {
  const { lang } = useLanguage();
  const isRTL = lang === "ar";

  if (!project) return null;

  // Titles and description
  const title = project.name || project.title || (isRTL ? "مشروع بدون عنوان" : "Untitled Project");
  const description = project.description || (isRTL ? "لا يوجد وصف متاح." : "No description provided.");
  const teamSize = project.teamSize || "N/A";
  const clientName = project.client || project.clientName || "N/A";

  // Image selection
  const image =
    project.images?.[0]
      ? normalizeImage(project.images[0])
      : project.image
        ? normalizeImage(project.image)
        : "https://placehold.co/1000x600/D1D5DB/1F2937?text=Project+Image+Placeholder";

  return (
    <section className="w-full bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className={`max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${isRTL ? "text-right" : "text-left"}`} dir={isRTL ? "rtl" : "ltr"}>

        {/* LEFT TEXT */}
        <div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-6">{title}</h1>
          <p className="text-lg text-gray-600 mb-8">{description}</p>

          <div className="grid grid-cols-2 gap-4">
            <div className="bg-blue-600 p-6 rounded-xl text-white shadow-lg">
              <Users size={20} className="mb-2" />
              <p className="text-xl font-semibold">{teamSize}</p>
              <p className="text-sm">{isRTL ? "حجم الفريق" : "Team Size"}</p>
            </div>

            <div className="bg-purple-600 p-6 rounded-xl text-white shadow-lg">
              <Briefcase size={20} className="mb-2" />
              <p className="text-xl font-semibold">{clientName}</p>
              <p className="text-sm">{isRTL ? "العميل" : "Client"}</p>
            </div>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="w-full h-80 sm:h-96 lg:h-full overflow-hidden rounded-xl shadow-xl">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover"
            onError={(e) => {
              e.target.src = "https://placehold.co/1000x600?text=Image+Not+Found";
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default ProjectDetailsOverview;
