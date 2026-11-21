import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import siteConfig from '../config/siteConfig'

const SITE_URL = siteConfig.siteUrl
const SITE_NAME = siteConfig.siteName
const LANGS = ['en', 'zh', 'ja', 'ko', 'es', 'fr']
const OG_LOCALE = { en: 'en_NZ', zh: 'zh_CN', ja: 'ja_JP', ko: 'ko_KR', es: 'es_ES', fr: 'fr_FR' }

function setMeta(attr, key, content) {
  let el = document.head.querySelector(`meta[${attr}="${key}"]`)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute(attr, key)
    document.head.appendChild(el)
  }
  el.setAttribute('content', content)
}

function setLink(rel, href, hreflang) {
  const selector = hreflang ? `link[rel="${rel}"][hreflang="${hreflang}"]` : `link[rel="${rel}"]:not([hreflang])`
  let el = document.head.querySelector(selector)
  if (!el) {
    el = document.createElement('link')
    el.setAttribute('rel', rel)
    if (hreflang) el.setAttribute('hreflang', hreflang)
    document.head.appendChild(el)
  }
  el.setAttribute('href', href)
}

/**
 * Per-page SEO: title, description, canonical, Open Graph and hreflang
 * alternates for every supported language.
 *
 * A translated page reached as `?lang=xx` is its own URL, so its canonical
 * points at itself. If it pointed at the English URL, search engines would
 * treat the translation as a duplicate and ignore the hreflang alternates.
 *
 * Pass `noindex` for pages that must stay out of search results (404).
 */
export default function PageMeta({ title, description, noindex = false }) {
  const { pathname, search } = useLocation()
  const { t } = useTranslation()
  const siteTitle = t('meta.siteTitle')

  useEffect(() => {
    const fullTitle = title ? `${title} | ${SITE_NAME}` : siteTitle
    const url = `${SITE_URL}${pathname === '/' ? '' : pathname}`
    const langUrl = (lng) => (lng === 'en' ? url : `${url}?lang=${lng}`)

    const requested = new URLSearchParams(search).get('lang')
    const urlLang = LANGS.includes(requested) ? requested : 'en'

    document.title = fullTitle
    if (description) {
      setMeta('name', 'description', description)
      setMeta('property', 'og:description', description)
      setMeta('name', 'twitter:description', description)
    }
    setMeta('property', 'og:title', fullTitle)
    setMeta('name', 'twitter:title', fullTitle)
    setMeta('property', 'og:url', langUrl(urlLang))
    setMeta('property', 'og:locale', OG_LOCALE[urlLang])
    setLink('canonical', langUrl(urlLang))

    // hreflang alternates for international SEO
    setLink('alternate', url, 'x-default')
    LANGS.forEach((lng) => setLink('alternate', langUrl(lng), lng))

    if (noindex) {
      setMeta('name', 'robots', 'noindex')
      // Remove on leaving, so the next page is not left marked noindex.
      return () => document.head.querySelector('meta[name="robots"][content="noindex"]')?.remove()
    }
  }, [title, description, pathname, search, siteTitle, noindex])

  return null
}
