import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { ArrowRight } from 'lucide-react'
import PageMeta from '../PageMeta'

export default function NotFound() {
  const { t } = useTranslation()
  return (
    <div className="min-h-[60vh] flex items-center justify-center px-4 py-24 text-center">
      <PageMeta title={t('notFound.title')} noindex />
      <div>
        <p className="eyebrow mb-3">404</p>
        <h1 className="section-title text-4xl mb-4">{t('notFound.title')}</h1>
        <p className="section-lead mb-8">{t('notFound.text')}</p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link to="/" className="btn-outline">{t('notFound.home')}</Link>
          <Link to="/book-now" className="btn-primary">{t('notFound.book')} <ArrowRight className="w-5 h-5" /></Link>
        </div>
      </div>
    </div>
  )
}
