import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './en';
import uk from './ua';
import ru from './ru';

i18n.use(initReactI18next).init({
  lng: 'en',
  fallbackLng: 'en',
  debug: true,
  resources: {
    en: {
      translation: en,
    },
    uk: {
      translation: uk,
    },
    ru: {
      translation: ru,
    },
  },
});

export default i18n;
