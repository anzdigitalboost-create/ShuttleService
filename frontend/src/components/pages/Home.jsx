import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { ArrowRight, Navigation, Users, Plane, Shield, Clock, Check, CreditCard, Baby } from 'lucide-react'
import GoogleReviews from '../GoogleReviews'
import PageMeta from '../PageMeta'
import { fadeUp, SectionHeading, FeatureGrid, Faq, CtaBand, HeroActions, withIcons } from '../Sections'

// Icons and links pair with the translated items in locales/*.js by position.
const WAY_ICONS = [Navigation, Users, Plane]
const WAY_PATHS = ['/private-shuttle', '/group-shuttle', '/airport-shuttle']
const WHY_ICONS = [Users, CreditCard, Clock, Baby]

export default function Home() {
  const { t } = useTranslation()
  const chips = [
    { icon: Shield, label: t('chips.insured') },
    { icon: Clock, label: t('chips.always') },
    { icon: Check, label: t('chips.fixed') },
    { icon: Plane, label: t('chips.flight') },
  ]

  return (
    <div>
      <PageMeta title={null} description={t('meta.home.desc')} />

      {/* ── HERO: copy left, route card with the booking steps right ── */}
      <section className="hero-surface overflow-hidden">
        <div className="container-max px-4 sm:px-6 lg:px-8 pt-12 pb-12 sm:pt-16 sm:pb-14">
          <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-10 lg:gap-14 items-center">
            <div>
              <motion.div initial="hidden" animate="visible" variants={fadeUp}>
                <div className="hero-chip mb-6">{t('hero.badge')}</div>
              </motion.div>
              <motion.h1 initial="hidden" animate="visible" custom={1} variants={fadeUp} className="hero-title text-[2.6rem] sm:text-6xl mb-6">
                {t('hero.title1')}
                <br />
                <span className="hero-accent">{t('hero.title2')}</span>
              </motion.h1>
              <motion.p initial="hidden" animate="visible" custom={2} variants={fadeUp} className="hero-lead text-lg sm:text-xl max-w-xl mb-8">
                {t('hero.subtitle')}
              </motion.p>
              <motion.div initial="hidden" animate="visible" custom={3} variants={fadeUp}>
                <HeroActions />
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6, ease: 'easeOut' }}
              className="route-card"
            >
              {/* Decorative route: pickup dot to destination dot */}
              <svg aria-hidden="true" viewBox="0 0 440 120" className="w-full h-auto block mb-5">
                <path d="M30 90 C 120 0, 210 120, 290 50 S 380 20, 410 28" fill="none" stroke="#0B7A6E" strokeWidth="4" strokeDasharray="2 12" strokeLinecap="round" />
                <circle cx="30" cy="90" r="12" fill="#06302B" />
                <circle cx="410" cy="28" r="12" fill="#C2410C" />
              </svg>
              <h2 className="font-display font-extrabold text-ink text-xl mb-4">{t('home.stepsTitle')}</h2>
              <ol className="space-y-4">
                {t('home.steps').map(({ title, text }, i) => (
                  <li key={title} className="route-step">
                    <span className="route-dot">{i + 1}</span>
                    <span className="leading-snug">
                      <strong className="block text-ink">{title}</strong>
                      <span className="text-ink-700 text-[15px]">{text}</span>
                    </span>
                  </li>
                ))}
              </ol>
            </motion.div>
          </div>

          {/* Trust chips */}
          <ul className="mt-10 flex flex-wrap gap-3">
            {chips.map(({ icon: Icon, label }) => (
              <li key={label} className="pill">
                <Icon className="w-4 h-4 text-brand shrink-0" /> {label}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── THREE WAYS ──────────────────────────────────────── */}
      <section className="section-padding band-alt">
        <div className="container-max">
          <SectionHeading eyebrow={t('home.waysEyebrow')} title={t('home.waysTitle')}>
            {t('home.waysText')}
          </SectionHeading>
          <div className="grid md:grid-cols-3 gap-5">
            {t('home.ways').map(({ title, text }, i) => {
              const Icon = WAY_ICONS[i]
              return (
                <Link key={title} to={WAY_PATHS[i]} className="way-card group">
                  <span className="way-icon"><Icon className="w-6 h-6" /></span>
                  <span className="flex flex-col gap-1.5">
                    <strong className="font-display font-extrabold text-ink text-lg">{title}</strong>
                    <span className="text-ink-700 text-[15px] leading-relaxed">{text}</span>
                    <span className="card-action text-sm mt-1">
                      {t('common.learnMore')} <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </span>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── WHY ─────────────────────────────────────────────── */}
      <section className="section-padding">
        <div className="container-max">
          <SectionHeading eyebrow={t('home.whyEyebrow')} title={t('home.whyTitle')} />
          <FeatureGrid items={withIcons(t('home.why'), WHY_ICONS)} cols={4} />
        </div>
      </section>

      {/* Live Google reviews of our operator */}
      <GoogleReviews />

      {/* ── FAQ ─────────────────────────────────────────────── */}
      <section className="section-padding band-alt">
        <div className="container-max">
          <SectionHeading eyebrow={t('common.questions')} title={t('home.faqTitle')} />
          <Faq items={t('home.faqs')} />
        </div>
      </section>

      <CtaBand />
    </div>
  )
}
