import { useLanguage } from "../context/LanguageContext";
import en from "../translations/en.json";
import ar from "../translations/ar.json";

const translations = { en, ar };

export const useTranslate = () => {
  const { lang } = useLanguage();

  const t = (key) => {
    const keys = key.split(".");
    let value = translations[lang];
    for (let k of keys) {
      value = value?.[k];
      if (!value) return key;
    }
    return value;
  };

  return { t };
};
