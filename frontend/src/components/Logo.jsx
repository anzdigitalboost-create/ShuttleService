import { cn } from '../lib/cn'

/** Round mark — same artwork as public/favicon.svg. */
export function LogoMark({ className = 'h-10 w-10' }) {
  return (
    <svg viewBox="0 0 32 32" className={className} aria-hidden="true">
      <circle cx="16" cy="16" r="16" fill="#15803D" />
      <path d="M9 21c0-6 3-10 7-10s7 4 7 10" fill="none" stroke="#FAF7F2" strokeWidth="2.6" strokeLinecap="round" />
      <circle cx="16" cy="21" r="2.6" fill="#FAF7F2" />
    </svg>
  )
}

/** Full logo: mark + serif wordmark. `light` is for dark backgrounds. */
export default function Logo({ light = false, className = '' }) {
  return (
    <span className={cn('inline-flex items-center gap-2.5', className)}>
      <LogoMark />
      <span className={cn('font-display text-xl font-semibold tracking-tight leading-none', light ? 'text-white' : 'text-ink')}>
        Shuttle <span className={cn('italic', light ? 'text-brand-300' : 'text-brand-500')}>Service</span>
      </span>
    </span>
  )
}
