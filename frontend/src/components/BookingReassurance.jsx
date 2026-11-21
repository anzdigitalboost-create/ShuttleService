import { ShieldCheck, Zap, RotateCcw, Lock } from 'lucide-react'
import { useTranslation } from 'react-i18next'

const ICONS = [RotateCcw, Zap, Lock, ShieldCheck]

/** Reassurance strip for placement next to CTAs — the decision point. */
export default function BookingReassurance({ dark = false, className = '' }) {
  const { t } = useTranslation()
  const labels = t('reassure')
  return (
    <div className={`flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm ${dark ? 'text-white/70' : 'text-gray-500'} ${className}`}>
      {labels.map((label, i) => {
        const Icon = ICONS[i]
        return (
          <span key={label} className="flex items-center gap-2">
            <Icon className={`w-4 h-4 ${dark ? "text-white/70" : "text-brand"}`} />
            {label}
          </span>
        )
      })}
    </div>
  )
}
