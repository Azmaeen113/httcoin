import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "./locales/en.json";
import es from "./locales/es.json";
import fr from "./locales/fr.json";
import zh from "./locales/zh.json";
import ar from "./locales/ar.json";

const resources = {
  en: { translation: en },
  es: { translation: es },
  fr: { translation: fr },
  zh: { translation: zh },
  ar: { translation: ar },
};

const stored = typeof window !== "undefined" ? window.localStorage.getItem("httcoin-lang") : null;

i18n
  .use(initReactI18next)
  .init({
    resources,
  lng: stored || "en",
    fallbackLng: "en",
    interpolation: { escapeValue: false },
    detection: { order: ["localStorage", "navigator"] },
  });

export default i18n;
