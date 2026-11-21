import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { Mail, MapPin, Clock, Calendar, ArrowRight, MessageCircle, Phone } from 'lucide-react'
import PageMeta from '../PageMeta'
import BookingReassurance from '../BookingReassurance'
import { PageHero } from '../Sections'
import { PHONE_DISPLAY, PHONE_TEL, EMAIL } from '../../config/siteConfig'

export default function Contact() {
  const { t } = useTranslation()
  const cards = [
    { to: '/book-now', icon: Calendar, title: t('contact.bookTitle'), text: t('contact.bookText'), action: t('common.getPrice'), featured: true },
    { href: `tel:${PHONE_TEL}`, icon: Phone, title: t('contact.callTitle'), text: t('contact.callText'), action: PHONE_DISPLAY },
    { href: `mailto:${EMAIL}`, icon: Mail, title: t('contact.emailTitle'), text: t('contact.emailText'), action: EMAIL },
  ]
  return (
    <div>
      <PageMeta title={t('meta.contact.title')} description={t('meta.contact.desc')} />

      <PageHero eyebrow={t('contact.eyebrow')} icon={MessageCircle} title={t('contact.title')} accent={t('contact.accent')}>
        {t('contact.lead')}
      </PageHero>

      <section className="section-padding band-alt">
        <div className="container-max max-w-5xl">
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {cards.map(({ to, href, icon: Icon, title, text, action, featured }) => {
              const inner = (
                <>
                  <div className={`card-icon ${featured ? 'card-icon-solid' : ''}`}><Icon className="w-6 h-6" /></div>
                  <h2 className="card-title text-xl">{title}</h2>
                  <p className="card-text mb-5">{text}</p>
                  <span className="card-action group-hover:gap-3 break-all">
                    {action} <ArrowRight className="w-5 h-5 shrink-0" />
                  </span>
                </>
              )
              const cls = `card card-link group block ${featured ? 'card-featured' : ''}`
              return to
                ? <Link key={title} to={to} className={cls}>{inner}</Link>
                : <a key={title} href={href} className={cls}>{inner}</a>
            })}
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            <div className="card flex items-center gap-4 !p-6">
              <MapPin className="icon-brand w-6 h-6 shrink-0" />
              <div>
                <h3 className="card-title !mb-0 font-sans text-base">{t('footer.location')}</h3>
                <p className="card-text text-sm">{t('contact.locText')}</p>
              </div>
            </div>
            <div className="card flex items-center gap-4 !p-6">
              <Clock className="icon-brand w-6 h-6 shrink-0" />
              <div>
                <h3 className="card-title !mb-0 font-sans text-base">{t('contact.hoursTitle')}</h3>
                <p className="card-text text-sm">{t('contact.hoursText')}</p>
              </div>
            </div>
          </div>

          <p className="section-lead text-center text-sm mt-8">{t('contact.operated')}</p>
          <BookingReassurance className="mt-8" />
        </div>
      </section>
    </div>
  )
}
