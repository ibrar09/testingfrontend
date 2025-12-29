import axios from "axios";
import { API_BASE_URL } from "../../../api/config";

const API_BASE = `${API_BASE_URL}/products`;

// Upload multiple images
export const uploadMultipleImages = async (files) => {
  const formData = new FormData();
  files.forEach((file) => formData.append("images", file));

  const res = await axios.post(`${API_BASE}/upload-multiple`, formData, {
    headers: { "Content-Type": "multipart/form-data" },
  });

  return res.data.fileUrls; // Array of uploaded image URLs
};
