import axios from "axios";

const PROVIDER = "libre"; // can later switch to 'google' or 'microsoft'
const LOCAL_STORAGE_KEY = "translations_cache";

// Load cache from localStorage
let cache = {};
try {
  const stored = localStorage.getItem(LOCAL_STORAGE_KEY);
  if (stored) cache = JSON.parse(stored);
} catch (err) {
  console.warn("Failed to parse translations cache", err);
}

// Helper to save cache
const saveCache = () => {
  try {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(cache));
  } catch (err) {
    console.warn("Failed to save translations cache", err);
  }
};

export const translateText = async (text, target = "ar") => {
  if (!text) return text;

  // Return cached translation if exists
  const cacheKey = `${text}__${target}`;
  if (cache[cacheKey]) return cache[cacheKey];

  switch (PROVIDER) {
    case "libre":
      try {
        const res = await axios.post(process.env.REACT_APP_TRANSLATION_URL || "http://localhost:5100/translate", {
          q: text,
          source: "en",
          target,
          format: "text",
        });

        const translated = res.data.translatedText;
        // Save to cache
        cache[cacheKey] = translated;
        saveCache();

        return translated;
      } catch (err) {
        console.error("Translation error:", err);
        return text;
      }

    case "google":
      // placeholder for Google Translate API
      return text;

    case "microsoft":
      // placeholder for Microsoft Translator API
      return text;

    default:
      return text;
  }
};
