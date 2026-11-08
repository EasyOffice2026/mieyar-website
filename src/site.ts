// Contact details: leave a value empty ('') to show "coming soon" on the site.
export const site = {
  phone: '',
  whatsapp: '', // international format without + or spaces, e.g. 96512345678
  email: 'mieyar.consulting@gmail.com',
  instagram: 'mieyar.consulting', // handle without @
  x: 'mieyar_co', // X (Twitter) handle without @
  address: {
    en: 'Office No. 30, 2nd Floor, Burj Al Tujjar, Mirqab, Kuwait City',
    ar: 'مكتب رقم 30، الدور الثاني، برج التجار، المرقاب، مدينة الكويت',
  },
  mapUrl: 'https://www.google.com/maps/search/?api=1&query=Burj+Al+Tujjar+Mirqab+Kuwait+City',
  mapEmbedUrl: 'https://maps.google.com/maps?q=Burj%20Al%20Tujjar%2C%20Mirqab%2C%20Kuwait%20City&z=17&output=embed',
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
