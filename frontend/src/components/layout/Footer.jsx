import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { Phone, Mail, MapPin, Clock } from 'lucide-react'
import Logo from '../Logo'
import { NAV, AREAS } from '../../data/site'
import { PHONE_DISPLAY, PHONE_TEL, EMAIL } from '../../config/siteConfig'

export default function Footer() {
  const { t } = useTranslation()
  const areaSlugs = Object.keys(AREAS)

  const columns = [
    {
      title: t('footer.colShuttles'),
      links: [
        ...NAV.filter(({ key }) => !['home', 'about', 'contact'].includes(key)).map(({ key, path }) => ({ label: t(`nav.${key}`), path })),
        { label: t('footer.bookOnline'), path: '/book-now' },
      ],
    },
    areaSlugs.length > 0 && {
      title: t('footer.colAreas'),
      links: areaSlugs.map((slug) => ({ label: t('footer.areaLink', { name: t(`areas.${slug}.name`) }), path: `/areas/${slug}` })),
    },
    {
      title: t('footer.colCompany'),
      links: [
        { label: t('footer.about'), path: '/about' },
        { label: t('footer.contact'), path: '/contact' },
        { label: t('footer.terms'), path: '/terms-and-conditions' },
        { label: t('footer.privacy'), path: '/privacy-policy' },
      ],
    },
  ].filter(Boolean)

  return (
    <footer className="footer-surface pb-20 md:pb-0">
      <div className="container-max px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className={`grid grid-cols-1 sm:grid-cols-2 gap-10 mb-12 ${columns.length === 3 ? 'lg:grid-cols-[1.4fr_1fr_1fr_1fr]' : 'lg:grid-cols-[1.6fr_1fr_1fr]'}`}>
          <div>
            <Link to="/" className="inline-block mb-5" aria-label={t('common.logoAria')}>
              <Logo light />
            </Link>
            <p className="footer-muted text-sm mb-6 leading-relaxed max-w-xs">{t('footer.blurb')}</p>
            <ul className="space-y-1 text-sm">
              <li>
                <a href={`tel:${PHONE_TEL}`} className="footer-strong flex items-center gap-2.5 py-2 font-semibold">
                  <Phone className="footer-icon w-4 h-4" /> {PHONE_DISPLAY}
                </a>
              </li>
              <li>
                <a href={`mailto:${EMAIL}`} className="footer-link flex items-center gap-2.5 py-2">
                  <Mail className="footer-icon w-4 h-4" /> {EMAIL}
                </a>
              </li>
              <li className="footer-muted flex items-center gap-2.5 py-2">
                <MapPin className="footer-icon w-4 h-4" /> {t('footer.location')}
              </li>
              <li className="footer-muted flex items-center gap-2.5 py-2">
                <Clock className="footer-icon w-4 h-4" /> {t('footer.open')}
              </li>
            </ul>
          </div>

          {columns.map(({ title, links }) => (
            <div key={title}>
              <h2 className="footer-strong font-semibold mb-4 text-sm font-sans">{title}</h2>
              <ul className="space-y-1">
                {links.map((link) => (
                  <li key={link.path}>
                    <Link to={link.path} className="footer-link inline-block py-1.5 text-sm">{link.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="footer-rule pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs footer-muted">
          <p>{t('footer.rights', { year: new Date().getFullYear() })}</p>
          <p>
            {t('footer.operated')}{' '}
            <a href="https://www.bookaride.co.nz" className="footer-link underline underline-offset-2">bookaride.co.nz</a>
          </p>
        </div>
      </div>
    </footer>
  )
}
