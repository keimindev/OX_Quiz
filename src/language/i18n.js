import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "./en.json";
import kr from "./kr.json";

const resource = {
  en: {
    translation: en,
  },
  kr: {
    translation: kr,
  },
};
i18n.use(initReactI18next).init({
  resources: resource,
  lng: "kr",
  fallbackLng: "kr",
  debug: true,
  keySeparator: false,
  interpolation: { escapeValue: false },
});

export default i18n;