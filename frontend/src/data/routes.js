// SEO route manifest — consumed by scripts/prerender.mjs at build time to emit
// a static, crawlable index.html per route (unique title, description,
// canonical, hreflang) plus sitemap.xml. Titles and descriptions come from the
// English locale, so they cannot drift from what <PageMeta> shows.
import en from '../locales/en.js'
import siteConfig from '../config/siteConfig.js'
import { PAGES, AREAS } from './site.js'

const fill = (s, vars = {}) =>
  String(s).replace(/{{(\w+)}}/g, (_, k) => (k === 'brand' ? siteConfig.siteName : vars[k] ?? ''))

const page = (path, meta, priority, changefreq = 'monthly') => ({
  path, title: meta.title ? fill(meta.title) : null, desc: fill(meta.desc), priority, changefreq,
})

export const ROUTES = [
  page('/', { title: null, desc: en.meta.home.desc }, 1.0, 'weekly'),
  ...PAGES.map((p) => page(p.path, en.meta[p.id], 0.9)),
  // The booking page is mirrored from the platform and is English only.
  page('/book-now', { title: 'Book a Shuttle Online', desc: 'Book your shuttle in 60 seconds. Live fixed pricing, secure card payment and instant email confirmation.' }, 0.9),
  ...Object.entries(AREAS).map(([slug, a]) => {
    const vars = { name: en.areas[slug].name, time: fill(en.common.minutes, { range: a.driveTime }), suburbs: a.suburbs.slice(0, 4).join(', ') }
    return { path: `/areas/${slug}`, title: fill(en.area.metaTitle, vars), desc: fill(en.area.metaDesc, vars), priority: 0.8, changefreq: 'monthly' }
  }),
  page('/about', en.meta.about, 0.5, 'yearly'),
  page('/contact', en.meta.contact, 0.5, 'yearly'),
]
