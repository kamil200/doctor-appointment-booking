import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import enTranslation from './locales/en.json';
import hiTranslation from './locales/hi.json';
import guTranslation from './locales/gu.json';
import kangriTranslation from "./locales/ka.json"
// Function to get the preferred language from local storage
const getLanguageFromLocalStorage = () => {
  const storedLanguage = localStorage.getItem('selectedLanguage');
  if (storedLanguage) {
    return storedLanguage;
  }
  return 'en'; // Default to English if not found in local storage
};

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: enTranslation,
      },
      hi: {
        translation: hiTranslation,
      },
      gu: {
        translation: guTranslation,
      },
      kangri: {
        translation: kangriTranslation,
      },
    },
    lng: getLanguageFromLocalStorage(), // Set the language from local storage
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  })
  .then(() => {
    // Once i18n is initialized, update the selected language in local storage when it changes
    i18n.on('languageChanged', (lng) => {
      localStorage.setItem('selectedLanguage', lng);
    });
  });

export default i18n;
