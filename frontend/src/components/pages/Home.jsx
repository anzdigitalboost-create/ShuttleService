import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { ArrowRight, ArrowUpRight, Navigation, Users, Plane, Shield, Clock, Check, CreditCard, Baby } from 'lucide-react'
import GoogleReviews from '../GoogleReviews'
import PageMeta from '../PageMeta'
import { fadeUp, SectionHeading, FeatureGrid, Steps, Faq, CtaBand, HeroActions, withIcons } from '../Sections'

// Icons and links pair with the translated items in locales/*.js by position.
const WAY_ICONS = [Navigation, Users, Plane]
const WAY_PATHS = ['/private-shuttle', '/group-shuttle', '/airport-shuttle']
const WHY_ICONS = [Users, CreditCard, Clock, Baby]

export default function Home() {
  const { t } = useTranslation()
  const ways = t('home.ways')
  const chips = [
    { icon: Shield, label: t('chips.insured') },
    { icon: Clock, label: t('chips.always') },
    { icon: Check, label: t('chips.fixed') },
    { icon: Plane, label: t('chips.flight') },
  ]

  return (
    <div>
      <PageMeta title={null} description={t('meta.home.desc')} />

      {/* ── HERO: editorial split, photo in an arch ─────────── */}
      <section className="hero-surface overflow-hidden">
        <div className="container-max px-4 sm:px-6 lg:px-8 pt-14 pb-16 sm:pt-20 sm:pb-20">
          <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-12 lg:gap-16 items-end">
            <div>
              <motion.div initial="hidden" animate="visible" variants={fadeUp} className="hero-chip mb-6">
                <span className="w-8 h-px bg-brand" />
                {t('hero.badge')}
              </motion.div>
              <motion.h1 initial="hidden" animate="visible" custom={1} variants={fadeUp} className="hero-title text-5xl sm:text-6xl lg:text-7xl mb-7">
                {t('hero.title1')}
                <br />
                <span className="hero-accent">{t('hero.title2')}</span>
              </motion.h1>
              <motion.p initial="hidden" animate="visible" custom={2} variants={fadeUp} className="hero-lead text-xl max-w-xl mb-9">
                {t('hero.subtitle')}
              </motion.p>
              <motion.div initial="hidden" animate="visible" custom={3} variants={fadeUp}>
                <HeroActions />
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6, ease: 'easeOut' }}
              className="hidden lg:block relative"
            >
              <img
                src="/images/fleet-van.webp"
                alt={t('home.fleetAlt')}
                width="840" height="1120" loading="lazy" decoding="async"
                className="w-full h-[500px] object-cover rounded-t-full border border-paper-300"
              />
              <div className="absolute bottom-6 -left-8 bg-white border border-paper-300 rounded-lg px-5 py-4">
                <div className="font-display text-xl font-semibold text-ink leading-tight">{t('home.fleetBadgeTitle')}</div>
                <div className="text-ink-700 text-sm">{t('home.fleetBadgeText')}</div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Trust strip */}
        <div className="border-t border-paper-300 bg-white">
          <ul className="container-max px-4 sm:px-6 lg:px-8 py-5 grid grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-3 text-sm font-medium text-ink-700">
            {chips.map(({ icon: Icon, label }) => (
              <li key={label} className="flex items-center gap-2.5">
                <Icon className="w-4 h-4 text-brand shrink-0" /> {label}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── THREE WAYS ──────────────────────────────────────── */}
      <section className="section-padding">
        <div className="container-max">
          <SectionHeading eyebrow={t('home.waysEyebrow')} title={t('home.waysTitle')} center={false}>
            {t('home.waysText')}
          </SectionHeading>
          <div className="grid md:grid-cols-3 gap-px bg-paper-300 border border-paper-300 rounded-lg overflow-hidden">
            {ways.map(({ title, text }, i) => {
              const Icon = WAY_ICONS[i]
              return (
                <Link key={title} to={WAY_PATHS[i]} className="group bg-white p-8 sm:p-10 flex flex-col hover:bg-brand-50 transition-colors">
                  <div className="flex items-start justify-between mb-10">
                    <Icon className="w-8 h-8 text-brand" />
                    <ArrowUpRight className="w-5 h-5 text-ink-700 group-hover:text-brand group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                  <h3 className="font-display text-2xl font-semibold text-ink mb-3">{title}</h3>
                  <p className="text-ink-700 leading-relaxed mb-6">{text}</p>
                  <span className="mt-auto inline-flex items-center gap-1.5 text-brand font-semibold text-sm">
                    {t('common.learnMore')} <ArrowRight className="w-4 h-4" />
                  </span>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── WHY ─────────────────────────────────────────────── */}
      <section className="section-padding band-alt">
        <div className="container-max">
          <SectionHeading eyebrow={t('home.whyEyebrow')} title={t('home.whyTitle')} />
          <FeatureGrid items={withIcons(t('home.why'), WHY_ICONS)} cols={4} />
        </div>
      </section>

      {/* ── STEPS ───────────────────────────────────────────── */}
      <section className="section-padding">
        <div className="container-max">
          <SectionHeading eyebrow={t('home.stepsEyebrow')} title={t('home.stepsTitle')} center={false} />
          <Steps items={t('home.steps')} />
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
