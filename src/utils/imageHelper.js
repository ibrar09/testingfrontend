// src/utils/imageHelper.js
import { BACKEND_URL } from "../api/api";

export const normalizeImage = (img, folder = "projects") => {
  if (!img) return null;

  const raw = typeof img === "string" ? img : img.image_url;
  if (!raw) return null;

  if (raw.startsWith("http")) return raw; // Already full URL
  if (raw.startsWith("/uploads")) return `${BACKEND_URL}${raw}`; // Already starts with /uploads
  return `${BACKEND_URL}/uploads/${folder}/${raw}`; // Default: add folder
};
