// Contact details: leave a value empty ('') to show "coming soon" on the site.
export const site = {
  phone: '',
  whatsapp: '', // international format without + or spaces, e.g. 96512345678
  email: 'mieyar.consulting@gmail.com',
  instagram: 'mieyar.consulting', // handle without @
  x: 'mieyar_co', // X (Twitter) handle without @
  address: { en: '', ar: '' },
  mapEmbedUrl: '',
};

export type Lang = 'en' | 'ar';
export const langs: Lang[] = ['en', 'ar'];

export const pages = {
  home: '',
  about: 'about',
  accounting: 'accounting-bookkeeping',
  solutions: 'solutions',
  advisory: 'advisory',
  clients: 'clients',
  contact: 'contact',
} as const;

export type PageKey = keyof typeof pages;

export const solutionSections = ['sme', 'clinics', 'inventory'] as const;
export type SectionKey = (typeof solutionSections)[number];
export type LinkKey = PageKey | SectionKey;

const isSection = (key: LinkKey): key is SectionKey => (solutionSections as readonly string[]).includes(key);

export const href = (lang: Lang, key: LinkKey) =>
  isSection(key) ? `/${lang}/${pages.solutions}/#${key}` : `/${lang}/${pages[key] ? pages[key] + '/' : ''}`;
