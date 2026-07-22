/**
 * Shared contact / social links for Footer and Contact page.
 */

export const email = 'a.horie@commissure.co.jp';

export const socialLinks = [
  {
    label: 'X',
    url: 'https://twitter.com/ArataHorie',
  },
  {
    label: 'LinkedIn',
    url: 'https://www.linkedin.com/in/arata-horie-a620a3315/',
  },
  {
    label: 'Google Scholar',
    shortLabel: 'Scholar',
    url: 'https://scholar.google.com/citations?user=OFt87kQAAAAJ&hl=en',
  },
  {
    label: 'researchmap',
    url: 'https://researchmap.jp/aratahorie',
  },
] as const;

export const affiliations = [
  {
    role: 'Project Sr. Asst. Professor',
    roleJa: '特任講師（非常勤）',
    org: 'Keio University Graduate School of Media Design',
    url: 'https://www.kmd.keio.ac.jp/',
  },
  {
    role: 'Founder & CTO',
    org: 'commissure Inc.',
    url: 'https://commissure.co.jp/',
  },
] as const;
