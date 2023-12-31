import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import translationEN from "./assets/locales/en/translation.json";
import translationES from "./assets/locales/es/translation.json";

const fallbackLng = ["es"];
const availableLanguages = ["es", "en"];

const resources = {
  en: {
    translation: translationEN,
  },
  es: {
    translation: translationES,
  },
};

i18n.use(initReactI18next).init({
  resources,
  fallbackLng,
  detection: {
    checkWhitelist: true,
  },

  debug: false,

  whitelist: availableLanguages,

  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
