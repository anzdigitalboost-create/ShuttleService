import { cn } from '../lib/cn'

/** Map-pin mark — same artwork as public/favicon.svg. */
export function LogoMark({ className = 'h-9 w-9' }) {
  return (
    <svg viewBox="0 0 32 32" className={className} aria-hidden="true">
      <rect width="32" height="32" rx="9" fill="#0B7A6E" />
      <path d="M16 26s7-5.6 7-11.2A7 7 0 0 0 9 14.8C9 20.4 16 26 16 26z" fill="#fff" />
      <circle cx="16" cy="14.5" r="2.8" fill="#0B7A6E" />
    </svg>
  )
}

/** Full logo: mark + wordmark. `light` is for dark backgrounds. */
export default function Logo({ light = false, className = '' }) {
  return (
    <span className={cn('inline-flex items-center gap-2.5', className)}>
      <LogoMark />
      <span className={cn('font-display text-xl font-extrabold tracking-tight leading-none', light ? 'text-white' : 'text-ink')}>
        Shuttle Service
      </span>
    </span>
  )
}
