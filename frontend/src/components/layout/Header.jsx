import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, Phone } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { cn } from '../../lib/cn'
import LanguageSelector from '../LanguageSelector'
import Logo from '../Logo'
import siteConfig, { PHONE_DISPLAY, PHONE_TEL } from '../../config/siteConfig'
import { NAV } from '../../data/site'

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()
  const { t } = useTranslation()
  const dark = siteConfig.darkHeader

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 8)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => { setMobileOpen(false) }, [location.pathname])

  return (
    <header className={cn('site-header fixed top-0 left-0 right-0 z-50', scrolled && 'is-scrolled')}>
      <nav className="container-max px-4 sm:px-6 lg:px-8 h-[72px] flex items-center justify-between gap-4">
        <Link to="/" aria-label={t('common.logoAria')} className="shrink-0">
          <Logo light={dark} />
        </Link>

        {/* Desktop nav */}
        <div className="hidden xl:flex items-center gap-1">
          {NAV.map(({ key, path }) => (
            <Link key={path} to={path} className={cn('nav-link', location.pathname === path && 'is-active')}>
              {t(`nav.${key}`)}
            </Link>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-3 md:ml-auto xl:ml-0">
          <LanguageSelector light={dark} />
          <a href={`tel:${PHONE_TEL}`} className="header-phone hidden 2xl:flex">
            <Phone className="w-4 h-4" />
            {PHONE_DISPLAY}
          </a>
          <Link to="/book-now" className="btn-header">
            {t('nav.bookRide')}
          </Link>
        </div>

        {/* Mobile menu toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="menu-toggle xl:hidden"
          aria-label={t('common.menu')}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </nav>

      {/* Mobile nav */}
      {mobileOpen && (
        <div className="mobile-menu xl:hidden px-4 pb-5 pt-3 space-y-1 animate-slide-down max-h-[calc(100vh-72px)] overflow-y-auto">
          {NAV.map(({ key, path }) => (
            <Link key={path} to={path} className={cn('mobile-link', location.pathname === path && 'is-active')}>
              {t(`nav.${key}`)}
            </Link>
          ))}
          <div className="md:hidden px-2 py-1">
            <LanguageSelector light={dark} />
          </div>
          <a href={`tel:${PHONE_TEL}`} className="mobile-link flex items-center gap-2 font-semibold">
            <Phone className="w-4 h-4" /> {PHONE_DISPLAY}
          </a>
          <Link to="/book-now" className="btn-header block w-full text-center !py-3">
            {t('nav.bookRide')}
          </Link>
        </div>
      )}
    </header>
  )
}
