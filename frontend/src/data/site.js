// Site structure for shuttleservice.co.nz: which marketing pages exist, what
// each one is made of, and what the navigation shows. The words themselves
// live in src/locales/<lang>.js under `pages.<id>` and `meta.<id>`.
//
// To add a page: add it here, add `pages.<id>` and `meta.<id>` to all six
// locale files, and add its `nav.<key>` label if it belongs in the menu.
// Icons are lucide-react names, paired with list items by position.
export const PAGES = [
  {
    id: 'private',
    path: '/private-shuttle',
    icon: 'Navigation',
    blocks: [
      { type: 'features', key: 'uses', icons: ['Wine', 'Music', 'Ship', 'Mountain', 'Briefcase', 'Moon'] },
      { type: 'faq', key: 'faqs' },
    ],
  },
  {
    id: 'groups',
    path: '/group-shuttle',
    icon: 'Users',
    blocks: [
      { type: 'checks', key: 'types', icons: ['PartyPopper', 'Trophy'] },
      { type: 'features', key: 'included', icons: ['Users', 'CreditCard', 'Luggage'] },
      { type: 'faq', key: 'faqs' },
    ],
  },
  {
    id: 'airport',
    path: '/airport-shuttle',
    icon: 'Plane',
    blocks: [
      { type: 'checks', key: 'directions', icons: ['PlaneTakeoff', 'PlaneLanding'] },
      { type: 'features', key: 'included', icons: ['Plane', 'Baby', 'CreditCard'] },
      { type: 'faq', key: 'faqs' },
    ],
  },
]

export const NAV = [
  { key: 'home', path: '/' },
  { key: 'private', path: '/private-shuttle' },
  { key: 'groups', path: '/group-shuttle' },
  { key: 'airport', path: '/airport-shuttle' },
  { key: 'about', path: '/about' },
  { key: 'contact', path: '/contact' },
]

// This site has no area landing pages.
export const AREAS = {}

export const REDIRECTS = { '/services': '/private-shuttle' }
