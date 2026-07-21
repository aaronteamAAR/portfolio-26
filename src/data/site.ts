export const site = {
  name: 'Aaron Chris',
  role: 'Social Media & Community Manager',
  email: 'aaronchrischuku@gnmail.com',
  description:
    'Aaron Chris is a social media and community manager helping ambitious brands, startups, and creators turn scattered audiences into loyal, engaged communities.',
  social: {
    instagram: '#',
    linkedin: '#',
    schedule: '#',
  },
  heroStats: [
    { value: '8M+', label: 'Followers grown' },
    { value: '4+', label: 'Brands partnered' },
    { value: '3 yrs', label: 'Experience' },
  ],
} as const;

export const navLinks = [
  { id: 'about', label: 'About' },
  { id: 'services', label: 'Services' },
  { id: 'work', label: 'Work' },
  { id: 'process', label: 'Process' },
  { id: 'faq', label: 'FAQ' },
] as const;
