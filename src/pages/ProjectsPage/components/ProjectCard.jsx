import React from "react";
import { Link } from "react-router-dom";
import { BACKEND_URL } from "../../../api/api";

// ------------------- IMAGE NORMALIZATION ------------------- //
const normalizeImage = (img) => {
  if (!img) return "https://placehold.co/300x200/36454F/ffffff?text=No+Image";
  const raw = typeof img === "string" ? img : img.image_url || img;
  if (!raw) return "https://placehold.co/300x200/36454F/ffffff?text=No+Image";
  if (raw.startsWith("http")) return raw;
  if (raw.startsWith("/uploads/projects")) return `${BACKEND_URL}${raw}`;
  if (raw.startsWith("/uploads")) return `${BACKEND_URL}/uploads/projects/${raw.replace("/uploads/", "")}`;
  return `${BACKEND_URL}/uploads/projects/${raw}`;
};

const ProjectCard = ({ project, large, LinkComponent }) => {
  const LinkComp = LinkComponent || (({ children }) => <>{children}</>);

  const imageUrl = normalizeImage(project?.image);

  const typeColor = {
    Commercial: "bg-blue-600",
    CommercialOffices: "bg-blue-600",
    Residential: "bg-yellow-600",
    Retail: "bg-red-600",
    "Retail Fit-Out": "bg-red-600",
    Healthcare: "bg-green-600",
    Industrial: "bg-gray-600",
    "Restaurant & Hospitality": "bg-purple-600",
    "Featured Project": "bg-[#023A9A]",
  }[project?.category] || "bg-blue-600";

  return (
    <div className="bg-white rounded-lg border border-gray-200 overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col h-[403px] w-full max-w-full">
      <div className={`relative w-full ${large ? "h-[254px]" : "h-[256px]"}`}>
        <img
          loading="lazy"
          src={imageUrl}
          alt={project?.name || "Project"}
          className="w-full h-full object-cover rounded-t-lg"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = "https://placehold.co/300x200/36454F/ffffff?text=No+Image";
          }}
        />

        <span
          className={`absolute top-2 left-2 z-10 text-[10px] sm:text-xs md:text-sm font-semibold px-3 py-1 text-white ${typeColor} rounded-full shadow-md`}
        >
          {project?.category || "Uncategorized"}
        </span>

        {project?.featured && (
          <div className="absolute top-2 right-2 sm:top-3 sm:right-3 z-10">
            <span className="text-[10px] sm:text-xs md:text-sm font-semibold px-2 sm:px-3 py-1 bg-yellow-400 text-black rounded-full shadow-md">
              Featured
            </span>
          </div>
        )}

        <div className="absolute bottom-0 left-0 w-full p-3 sm:p-4 bg-gradient-to-t from-black/70 via-black/40 to-transparent z-0">
          <h3 className={`text-white font-bold w-full ${large ? "text-[24px] leading-[32px]" : "text-[20px] leading-[28px]"}`}>
            {project?.name}
          </h3>
          <p className={`text-white w-full ${large ? "text-[14px] leading-[20px]" : "text-[14px] leading-[20px]"}`}>
            Client: {project?.client || "N/A"}
          </p>
        </div>
      </div>

      <div className="flex flex-col justify-between flex-grow p-5">
        <p className="line-clamp-2 text-[14px] leading-[22.75px] font-normal text-gray-700">
          {project?.description || "No description available."}
        </p>

        {/* ✅ Updated link to use slug */}
        <LinkComp to={`/projects/${project?.slug}`}>
          <Link
            to={`/projects/${project?.slug}`}
            className="mt-4 py-2 text-center block border-gray-300 font-semibold text-gray-900 hover:bg-gray-100 transition duration-200 w-full rounded-[6px] border-[1px] text-[14px] leading-[20px]"
          >
            View Project Details
          </Link>
        </LinkComp>
      </div>
    </div>
  );
};

export default React.memo(ProjectCard);
