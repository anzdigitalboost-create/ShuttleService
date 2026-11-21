import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import * as Icons from 'lucide-react'
import PageMeta from '../PageMeta'
import { PageHero, SectionHeading, FeatureGrid, CheckCards, Steps, Faq, CtaBand, withIcons } from '../Sections'
import { AREAS } from '../../data/site'

const icon = (name) => Icons[name] || Icons.Circle
const icons = (names = []) => names.map(icon)

/**
 * Renders one marketing page from its definition in src/data/site.js (PAGES)
 * and its copy in src/locales/<lang>.js under `pages.<id>`.
 *
 * A page is a hero plus a list of blocks. For a block with key `k`, the
 * locale provides `<k>Eyebrow`, `<k>Title`, optionally `<k>Text`, and the
 * list `<k>` itself. Icons are paired with list items by position.
 */
export default function ContentPage({ page }) {
  const { t } = useTranslation()
  const base = `pages.${page.id}`
  const has = (key) => t(`${base}.${key}`, { defaultValue: '' }) !== ''

  return (
    <div>
      <PageMeta title={t(`meta.${page.id}.title`)} description={t(`meta.${page.id}.desc`)} />

      <PageHero eyebrow={t(`${base}.eyebrow`)} icon={icon(page.icon)} title={t(`${base}.title`)} accent={t(`${base}.accent`)}>
        {t(`${base}.lead`)}
      </PageHero>

      {page.blocks.map((block, i) => {
        const k = `${base}.${block.key}`
        const heading = (
          <SectionHeading eyebrow={has(`${block.key}Eyebrow`) ? t(`${k}Eyebrow`) : block.type === 'faq' ? t('common.questions') : undefined} title={t(`${k}Title`)}>
            {has(`${block.key}Text`) ? t(`${k}Text`) : null}
          </SectionHeading>
        )
        return (
          <section key={block.key} className={`section-padding ${i % 2 ? 'band-alt' : ''}`}>
            <div className="container-max">
              {heading}
              {block.type === 'features' && <FeatureGrid items={withIcons(t(k), icons(block.icons))} cols={block.cols || 3} />}
              {block.type === 'checks' && <CheckCards items={withIcons(t(k), icons(block.icons))} />}
              {block.type === 'steps' && <Steps items={t(k)} />}
              {block.type === 'faq' && <Faq items={t(k)} />}
              {block.type === 'areas' && (
                <div className="max-w-3xl mx-auto area-list">
                  {Object.entries(AREAS).map(([slug, a]) => (
                    <Link key={slug} to={`/areas/${slug}`} className="area-row group">
                      <span className="flex items-center gap-3 font-semibold">
                        <Icons.MapPin className="w-5 h-5" /> {t(`areas.${slug}.name`)}
                      </span>
                      <span className="flex items-center gap-4 text-sm">
                        {t('common.minutes', { range: a.driveTime })}
                        <Icons.ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </span>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </section>
        )
      })}

      <CtaBand title={t(`${base}.ctaTitle`)} />
    </div>
  )
}
