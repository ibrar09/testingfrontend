// src/utils/normalizeImage.js
import { BACKEND_URL } from "../api/api";

// folder = "projects" or "testimonials"
export const normalizeImage = (img, folder = "projects") => {
  if (!img) return null;

  const raw = typeof img === "string" ? img : img.image_url;

  if (!raw) return null;

  if (raw.startsWith("http")) return raw;
  if (raw.startsWith("/uploads")) return `${BACKEND_URL}${raw}`;
  return `${BACKEND_URL}/uploads/${folder}/${raw}`;
};
