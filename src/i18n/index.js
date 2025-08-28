import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import en from '../locales/en/common.json'
import pt from '../locales/pt/common.json'
import es from '../locales/es/common.json'

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      pt: { translation: pt },
      es: { translation: es },
    },
    lng: 'en',
    fallbackLng: 'en',
    interpolation: { escapeValue: false },
  })

export default i18n
