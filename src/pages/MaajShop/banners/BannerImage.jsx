import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { BACKEND_URL } from "../../../api/api";

const BannerImage = ({ banner }) => {
  const navigate = useNavigate();
  const location = useLocation();

  if (!banner) return null;

  const getFullUrl = (url) => {
    if (!url) return "";
    if (url.startsWith("http")) return url;
    return url.startsWith("/") ? `${BACKEND_URL}${url}` : `${BACKEND_URL}/${url}`;
  };

  const desktopSrc = getFullUrl(banner.image_url ?? banner.image);
  const mobileSrc = getFullUrl(banner.mobile_image_url ?? banner.image_url ?? banner.image);
  const alt = banner.alt ?? banner.title ?? "Banner";
  const link = banner.link ?? "/shop#products";

  const handleClick = (e) => {
    e.preventDefault();
    const [path, hash] = link.split("#");
    const targetPath = path || "/shop";
    if (location.pathname === targetPath) {
      if (hash) {
        const el = document.getElementById(hash);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      navigate(targetPath, { state: { scrollTo: hash } });
    }
  };

  return (
    <button
      onClick={handleClick}
      className="w-full block p-0 border-none m-0 bg-transparent outline-none cursor-pointer"
    >
      <picture className="w-full">
        {/* If you have a separate mobile image, it loads here */}
        <source media="(max-width: 767px)" srcSet={mobileSrc} />
        <img
          src={desktopSrc}
          alt={alt}
          loading="lazy"
          draggable={false}
          className="
            w-full 
            h-auto         /* This is the most important line */
            display-block 
            object-contain   /* This ensures NO cropping happens */
          "
        />
      </picture>
    </button>
  );
};

export default BannerImage;