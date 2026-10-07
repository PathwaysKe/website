/**
 * Single source of truth for facts the site states publicly.
 * Verified 2026-10-07 — see CLAUDE.md "Pricing" and "Open decisions" before changing.
 */
export const SITE = {
  name: 'Pathways',
  tagline: 'Learn together.',
  domain: 'pathways.ke',
  url: 'https://pathways.ke',
  email: 'hello@pathways.ke',
  /** Technical support line, shown as a WhatsApp button. */
  whatsapp: { display: '0704 236 788', e164: '254704236788' },
  portalUrl: 'https://app.pathways.ke',
  playStoreUrl: 'https://play.google.com/store/apps/details?id=com.pathways.ke',
  /** Set once there is an App Store listing. Until then iOS CTAs are hidden. */
  appStoreUrl: '',
  plausibleDomain: 'pathways.ke',
  pilotSchools: ['Thorn Grove Schools'],
} as const;

/** Parent app: Standard plan priced per household by number of children (KES). */
export const PARENT_PRICING = {
  trialDays: 14,
  tiers: [
    { children: '1 child', monthly: 200, yearly: 2000 },
    { children: '2 children', monthly: 300, yearly: 3000 },
    { children: '3+ children', monthly: 400, yearly: 4000 },
  ],
  free: [
    'First sub-strand of every strand',
    'A taste of the AI tutor',
    '3 generated tests a month',
  ],
  standard: [
    'Full CBC study notes library',
    'Unlimited practice tests and quizzes',
    'Unlimited AI tutor chat',
    'Progress per child',
    'School results, calendar and announcements when linked',
  ],
} as const;

export const NAV = [
  { href: '/schools', label: 'For Schools' },
  { href: '/parents', label: 'For Parents' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
] as const;

export const fmtKES = (n: number) => `KES ${n.toLocaleString('en-KE')}`;
