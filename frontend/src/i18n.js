import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import en from './locales/en.js'
import siteConfig from './config/siteConfig.js'

export const SUPPORTED_LANGUAGES = [
  { code: 'en', nativeName: 'English', flag: '🇬🇧' },
  { code: 'zh', nativeName: '中文', flag: '🇨🇳' },
  { code: 'ja', nativeName: '日本語', flag: '🇯🇵' },
  { code: 'ko', nativeName: '한국어', flag: '🇰🇷' },
  { code: 'es', nativeName: 'Español', flag: '🇪🇸' },
  { code: 'fr', nativeName: 'Français', flag: '🇫🇷' },
]

// English ships in the main bundle. Every other language is a separate chunk,
// fetched only when a visitor actually uses it, so English visitors do not
// download five translations they will never read.
const LOADERS = {
  zh: () => import('./locales/zh.js'),
  ja: () => import('./locales/ja.js'),
  ko: () => import('./locales/ko.js'),
  es: () => import('./locales/es.js'),
  fr: () => import('./locales/fr.js'),
}

async function loadLanguage(lng) {
  const code = (lng || 'en').split('-')[0]
  if (!LOADERS[code] || i18n.hasResourceBundle(code, 'translation')) return
  try {
    const mod = await LOADERS[code]()
    i18n.addResourceBundle(code, 'translation', mod.default, true, true)
  } catch {
    // Chunk failed to load (offline, deploy in progress): English stays visible.
  }
}

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: { en: { translation: en } },
    partialBundledLanguages: true,
    fallbackLng: 'en',
    supportedLngs: SUPPORTED_LANGUAGES.map((l) => l.code),
    nonExplicitSupportedLngs: true,
    load: 'languageOnly',
    returnObjects: true,
    // {{brand}} is available in every string, so shared copy (About, Contact,
    // footer) never hard-codes the site name.
    interpolation: { escapeValue: false, defaultVariables: { brand: siteConfig.siteName } },
    detection: {
      order: ['querystring', 'localStorage', 'navigator'],
      lookupQuerystring: 'lang',
      caches: ['localStorage'],
    },
    // Re-render when a lazily loaded language arrives.
    react: { bindI18nStore: 'added', useSuspense: false },
  })

// Keep <html lang> in step with the active language. languageChanged does not
// fire for the language detected at startup (e.g. ?lang=zh), so set it once
// here as well.
const setHtmlLang = (lng) => {
  document.documentElement.lang = (lng || 'en').split('-')[0]
}

i18n.on('languageChanged', (lng) => {
  setHtmlLang(lng)
  loadLanguage(lng)
})
// i18n.language is the detected language; resolvedLanguage would still be
// 'en' here because the detected language's chunk has not loaded yet.
setHtmlLang(i18n.language)
loadLanguage(i18n.language)

export default i18n
