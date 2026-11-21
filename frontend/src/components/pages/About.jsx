import { useTranslation } from 'react-i18next'
import { Shield, Clock, Heart, CreditCard, Info } from 'lucide-react'
import PageMeta from '../PageMeta'
import GoogleReviews from '../GoogleReviews'
import { PageHero, SectionHeading, FeatureGrid, CtaBand, withIcons } from '../Sections'

const VALUE_ICONS = [Shield, Clock, CreditCard, Heart]

export default function About() {
  const { t } = useTranslation()
  return (
    <div>
      <PageMeta title={t('meta.about.title')} description={t('meta.about.desc')} />

      <PageHero eyebrow={t('about.eyebrow')} icon={Info} title={t('about.title')} accent={t('about.accent')}>
        {t('about.lead')}
      </PageHero>

      <section className="section-padding">
        <div className="container-max grid lg:grid-cols-2 gap-12 items-center max-w-5xl">
          <div>
            <span className="eyebrow">{t('about.storyEyebrow')}</span>
            <h2 className="section-title text-3xl sm:text-4xl mt-2 mb-5">{t('about.storyTitle')}</h2>
            <p className="section-lead text-lg mb-4">{t('about.p1')}</p>
            <p className="section-lead text-lg mb-4">{t('about.p2')}</p>
            <p className="section-lead text-lg">{t('about.p3')}</p>
          </div>
          <img
            src="/images/fleet-van.webp"
            alt={t('about.imgAlt')}
            width="840" height="1120" loading="lazy" decoding="async"
            className="photo w-full h-[440px] object-cover"
          />
        </div>
      </section>

      <section className="section-padding band-alt">
        <div className="container-max">
          <SectionHeading eyebrow={t('about.valuesEyebrow')} title={t('about.valuesTitle')} />
          <FeatureGrid items={withIcons(t('about.values'), VALUE_ICONS)} cols={4} />
        </div>
      </section>

      <GoogleReviews />

      <CtaBand />
    </div>
  )
}
