// Site identity for shuttleservice.co.nz — the one place the brand name,
// domain and contact details are defined. Imported by the app, by the
// mirrored booking page (src/pages/BookNow.jsx), by SEO.jsx and by the
// prerender script, so it must stay plain data with a default export.
export const PHONE_DISPLAY = '022 355 2808'
export const PHONE_TEL = '+64223552808'
export const EMAIL = 'info@bookaride.co.nz'

const siteConfig = {
  siteName: 'Shuttle Service',
  domain: 'shuttleservice.co.nz',
  siteUrl: 'https://www.shuttleservice.co.nz',
  defaultTitle: 'Shuttle Service — Private & Group Shuttles in Auckland',
  darkHeader: false,
  email: EMAIL,
  phone: PHONE_TEL,
  phoneDisplay: PHONE_DISPLAY,
  operator: 'Book A Ride NZ',
  tagline: 'Private and Group Shuttle Hire in Auckland',
  description:
    'Shuttle Service offers private and group shuttle hire across Auckland, including airport, cruise and event transfers. Fixed prices, 24/7. Book online in 60 seconds.',
  keywords: 'shuttle service, shuttle service Auckland, private shuttle hire, group shuttle hire, airport shuttle service',
  address: 'Auckland, New Zealand',
  logo: '/favicon.svg',
  favicon: '/favicon.svg',
  primaryColor: 'brand',
}

export const getSiteConfig = () => siteConfig

export default siteConfig
