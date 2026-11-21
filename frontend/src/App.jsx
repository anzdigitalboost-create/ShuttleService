import { lazy, Suspense, useEffect } from 'react'
import { Routes, Route, Navigate, useLocation } from 'react-router-dom'
import Layout from './components/layout/Layout'
import Home from './components/pages/Home'
import ContentPage from './components/pages/ContentPage'
import AreaLanding from './components/pages/AreaLanding'
import About from './components/pages/About'
import Contact from './components/pages/Contact'
import Terms from './components/pages/Terms'
import Privacy from './components/pages/Privacy'
import NotFound from './components/pages/NotFound'
import LoadingSpinner from './components/LoadingSpinner'
import { Toaster } from './components/ui/sonner'
import { PAGES, AREAS, REDIRECTS } from './data/site'

// The booking flow (date picker, form primitives, Stripe return page) is the
// heaviest part of the site and most visitors land on a marketing page first,
// so it loads on demand.
const BookNow = lazy(() => import('./pages/BookNow'))
const PaymentSuccess = lazy(() => import('./pages/PaymentSuccess'))

const withSuspense = (el) => (
  <Suspense fallback={<div className="min-h-[60vh] flex items-center justify-center"><LoadingSpinner /></div>}>
    {el}
  </Suspense>
)

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo(0, 0) }, [pathname])
  return null
}

export default function App() {
  return (
    <>
      <Toaster />
      <ScrollToTop />
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />

          {/* Marketing pages — defined in src/data/site.js, copy in src/locales */}
          {PAGES.map((page) => (
            <Route key={page.id} path={page.path.slice(1)} element={<ContentPage page={page} />} />
          ))}
          {Object.keys(AREAS).map((slug) => (
            <Route key={slug} path={`areas/${slug}`} element={<AreaLanding area={slug} />} />
          ))}

          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="terms-and-conditions" element={<Terms />} />
          <Route path="privacy-policy" element={<Privacy />} />

          {/* Booking flow — mirrored verbatim from bookaride.co.nz */}
          <Route path="book-now" element={withSuspense(<BookNow />)} />
          <Route path="payment/success" element={withSuspense(<PaymentSuccess />)} />
          <Route path="payment-success" element={withSuspense(<PaymentSuccess />)} />

          {Object.entries(REDIRECTS).map(([from, to]) => (
            <Route key={from} path={from.slice(1)} element={<Navigate to={to} replace />} />
          ))}
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  )
}
