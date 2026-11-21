import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { ArrowRight, Phone, ChevronDown, Check } from 'lucide-react'
import BookingReassurance from './BookingReassurance'
import { PHONE_DISPLAY, PHONE_TEL } from '../config/siteConfig'

// All visual styling in this file comes from semantic classes (.card,
// .hero-surface, .btn-accent, …) defined in src/styles/index.css. The markup
// is shared between sibling storefronts; each site's look lives in its CSS.

export const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({ opacity: 1, y: 0, transition: { delay: i * 0.08, duration: 0.5, ease: 'easeOut' } }),
}

/** Pair translated {title, text} items with their icons, by position. */
export const withIcons = (items, icons = []) => items.map((item, i) => ({ ...item, icon: icons[i] }))

/** Primary + phone buttons used in heroes. */
export function HeroActions({ className = '' }) {
  const { t } = useTranslation()
  return (
    <div className={`flex flex-col sm:flex-row gap-3 ${className}`}>
      <Link to="/book-now" className="btn-accent">
        {t('common.getPrice')} <ArrowRight className="w-5 h-5" />
      </Link>
      <a href={`tel:${PHONE_TEL}`} className="btn-ghost">
        <Phone className="w-5 h-5" /> {PHONE_DISPLAY}
      </a>
    </div>
  )
}

/** Hero band used at the top of every inner page. */
export function PageHero({ eyebrow, title, accent, children, icon: Icon }) {
  return (
    <section className="hero-surface relative overflow-hidden">
      <div className="container-max px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="max-w-3xl">
          {eyebrow && (
            <motion.div initial="hidden" animate="visible" variants={fadeUp}>
              <div className="hero-chip mb-6">
                {Icon && <Icon className="w-4 h-4" />}
                <span>{eyebrow}</span>
              </div>
            </motion.div>
          )}
          <motion.h1 initial="hidden" animate="visible" custom={1} variants={fadeUp} className="hero-title text-4xl sm:text-5xl lg:text-6xl mb-6">
            {title}
            {accent && <> <span className="hero-accent">{accent}</span></>}
          </motion.h1>
          <motion.div initial="hidden" animate="visible" custom={2} variants={fadeUp} className="hero-lead text-lg sm:text-xl max-w-2xl">
            {children}
          </motion.div>
          <motion.div initial="hidden" animate="visible" custom={3} variants={fadeUp}>
            <HeroActions className="mt-9" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export function SectionHeading({ eyebrow, title, children, center = true }) {
  return (
    <div className={`${center ? 'text-center mx-auto' : ''} max-w-2xl mb-12`}>
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <h2 className="section-title text-3xl sm:text-4xl mt-2 mb-4">{title}</h2>
      {children && <p className="section-lead text-lg">{children}</p>}
    </div>
  )
}

/** Icon + title + text card grid. */
export function FeatureGrid({ items, cols = 3 }) {
  const grid = cols === 4 ? 'md:grid-cols-2 lg:grid-cols-4' : cols === 2 ? 'md:grid-cols-2' : 'md:grid-cols-3'
  return (
    <div className={`grid grid-cols-1 ${grid} gap-6`}>
      {items.map(({ icon: Icon, title, text }, i) => (
        <motion.div
          key={title}
          initial="hidden" whileInView="visible" custom={i % 4} variants={fadeUp}
          viewport={{ once: true, margin: '-40px' }}
          className="card"
        >
          {Icon && (
            <div className="card-icon">
              <Icon className="w-6 h-6" />
            </div>
          )}
          <h3 className="card-title">{title}</h3>
          <p className="card-text">{text}</p>
        </motion.div>
      ))}
    </div>
  )
}

/** Two (or more) larger cards, each with a tick list. */
export function CheckCards({ items }) {
  return (
    <div className="grid md:grid-cols-2 gap-6">
      {items.map(({ icon: Icon, title, text, points }) => (
        <div key={title} className="card card-lg">
          {Icon && (
            <div className="card-icon card-icon-solid">
              <Icon className="w-7 h-7" />
            </div>
          )}
          <h2 className="card-title text-2xl">{title}</h2>
          <p className="card-text mb-6">{text}</p>
          <ul className="space-y-2.5">
            {points.map((p) => (
              <li key={p} className="check-row">
                <Check className="w-5 h-5 shrink-0" /> <span>{p}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  )
}

/** Numbered steps. */
export function Steps({ items }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {items.map(({ title, text }, i) => (
        <motion.div
          key={title}
          initial="hidden" whileInView="visible" custom={i} variants={fadeUp}
          viewport={{ once: true, margin: '-40px' }}
          className="step"
        >
          <div className="step-number">{i + 1}</div>
          <h3 className="step-title">{title}</h3>
          <p className="step-text">{text}</p>
        </motion.div>
      ))}
    </div>
  )
}

/** FAQ list using native <details>; also emits FAQPage structured data. */
export function Faq({ items }) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map(({ q, a }) => ({
      '@type': 'Question',
      name: q,
      acceptedAnswer: { '@type': 'Answer', text: a },
    })),
  }
  return (
    <div className="max-w-3xl mx-auto space-y-3">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      {items.map(({ q, a }) => (
        <details key={q} className="faq-item group">
          <summary className="flex items-center justify-between gap-4 cursor-pointer list-none">
            {q}
            <ChevronDown className="faq-chevron w-5 h-5 shrink-0 transition-transform group-open:rotate-180" />
          </summary>
          <p className="faq-answer mt-3">{a}</p>
        </details>
      ))}
    </div>
  )
}

/** Closing call-to-action band. */
export function CtaBand({ title, text }) {
  const { t } = useTranslation()
  return (
    <section className="cta-band">
      <div className="container-max px-4 sm:px-6 lg:px-8 py-20 text-center">
        <h2 className="cta-title text-3xl sm:text-4xl mb-4">{title || t('cta.title')}</h2>
        <p className="cta-text text-lg mb-9 max-w-xl mx-auto">{text || t('cta.text')}</p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link to="/book-now" className="btn-accent">
            {t('common.getPrice')} <ArrowRight className="w-5 h-5" />
          </Link>
          <a href={`tel:${PHONE_TEL}`} className="btn-cta-ghost">
            <Phone className="w-5 h-5" /> {t('common.callPhone', { phone: PHONE_DISPLAY })}
          </a>
        </div>
        <BookingReassurance dark className="mt-10" />
      </div>
    </section>
  )
}
