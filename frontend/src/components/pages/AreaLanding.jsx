import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { MapPin, Clock, ArrowRight, Check } from 'lucide-react'
import PageMeta from '../PageMeta'
import { PageHero, SectionHeading, FeatureGrid, Faq, CtaBand } from '../Sections'
import { AREAS } from '../../data/site'

/**
 * Area landing page. All copy is templated from `area.*` in the locales with
 * the area's translated name, its drive time and its suburb list, so adding
 * an area needs only an entry in data/site.js plus its name in each locale.
 */
export default function AreaLanding({ area }) {
  const { t } = useTranslation()
  const a = AREAS[area]
  const name = t(`areas.${area}.name`)
  const time = t('common.minutes', { range: a.driveTime })
  const vars = { name, time, suburbs: a.suburbs.slice(0, 4).join(', ') }
  const others = Object.keys(AREAS).filter((slug) => slug !== area)

  return (
    <div>
      <PageMeta title={t('area.metaTitle', vars)} description={t('area.metaDesc', vars)} />

      <PageHero eyebrow={t('area.eyebrow', vars)} icon={Clock} title={t('area.title', vars)} accent={t('area.accent', vars)}>
        {t('area.lead', vars)}
      </PageHero>

      <section className="section-padding">
        <div className="container-max">
          <SectionHeading eyebrow={t('area.whyEyebrow', vars)} title={t('area.whyTitle', vars)} />
          <FeatureGrid items={t('area.points', vars).map((p) => ({ ...p, icon: Check }))} cols={3} />
        </div>
      </section>

      <section className="section-padding band-alt">
        <div className="container-max max-w-4xl">
          <SectionHeading eyebrow={t('area.suburbsEyebrow')} title={t('area.suburbsTitle', vars)}>
            {t('area.suburbsText')}
          </SectionHeading>
          {/* Suburb names stay in English: they are what people type into the address box. */}
          <ul className="flex flex-wrap justify-center gap-3">
            {a.suburbs.map((s) => (
              <li key={s} className="pill"><MapPin className="w-4 h-4" /> {s}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-max">
          <SectionHeading eyebrow={t('common.questions')} title={t('area.faqTitle', vars)} />
          <Faq items={t('area.faqs', vars)} />
        </div>
      </section>

      <section className="section-padding band-alt">
        <div className="container-max">
          <SectionHeading eyebrow={t('area.otherEyebrow')} title={t('area.otherTitle')} />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
            {others.map((slug) => (
              <Link key={slug} to={`/areas/${slug}`} className="area-chip group">
                <span>{t(`areas.${slug}.name`)}</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CtaBand title={t('area.ctaTitle', vars)} />
    </div>
  )
}
