import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import translationEN from "../assets/languages/en/translationEN.json";
import translationES from "../assets/languages/es/translationES.json";
import translationPT_BR from "../assets/languages/pt-br/translationPT_BR.json";
import moment from "moment";

/*################################################## 
***Service***
    language
***Description***
    ......... 
***Props***
    none
###################################################*/
const defaultLanguage = "en";

const resources = {
  en: {
    translation: translationEN,
  },
  "es-ES": {
    translation: translationES,
  },
  "pt-BR": {
    translation: translationPT_BR,
  },
  pt: {
    translation: translationPT_BR,
  },
};
let fallbackLanguage: string;
if (typeof window !== 'undefined' && typeof window.navigator !== 'undefined')
{
  const userLanguage = navigator.language;
  moment.locale(userLanguage);
  const supportedLanguages = Object.keys(resources);
   fallbackLanguage = supportedLanguages.includes(userLanguage)
    ? userLanguage
    : defaultLanguage;
}
else
  fallbackLanguage = defaultLanguage;

i18n.use(LanguageDetector).use(initReactI18next).init({
  resources,
  lng: fallbackLanguage,
  debug: false,
});

export default i18n;