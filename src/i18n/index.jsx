import i18n from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import { initReactI18next} from 'react-i18next'
import en from './locales/en.json'
import hy from './locales/hy.json'

i18n
.use(LanguageDetector)
.use(initReactI18next)
.init({
    resources:{
        en:{
            translation:en
        },
        hy:{
            translation:hy
        }
    },
    fallbackLng: 'en',
    interpolation:{
        escapeValue:false
    }
})
export default i18n