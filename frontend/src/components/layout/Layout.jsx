import { Outlet, useLocation, Link } from 'react-router-dom'
import { ArrowRight, Phone } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import Header from './Header'
import Footer from './Footer'
import { PHONE_TEL } from '../../config/siteConfig'

export default function Layout() {
  const location = useLocation()
  const { t } = useTranslation()
  // No sticky CTA where the user is already booking or paying
  const showStickyCta = !location.pathname.startsWith('/book-now') && !location.pathname.startsWith('/payment')

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 pt-[72px]">
        <Outlet />
      </main>
      <Footer />

      {/* Sticky mobile bar — one tap to call or to a live price */}
      {showStickyCta && (
        <nav aria-label={t('nav.bookRide')} className="sticky-bar md:hidden fixed bottom-0 left-0 right-0 z-40 p-3 flex gap-2">
          <a
            href={`tel:${PHONE_TEL}`}
            aria-label={t('nav.call')}
            className="sticky-call flex items-center justify-center w-12 h-12 shrink-0"
          >
            <Phone className="w-5 h-5" />
          </a>
          <Link
            to="/book-now"
            className="btn-accent flex-1 !h-12 !py-0 !px-4 text-sm"
          >
            {t('sticky')}
            <ArrowRight className="w-4 h-4" />
          </Link>
        </nav>
      )}
    </div>
  )
}
