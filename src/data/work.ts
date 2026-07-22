export interface WorkItem {
  id: string;
  client: string;
  industry: string;
  role: string;
  title: string;
  description: string;
  metric: string;
  metricLabel: string;
  tags: string[];
  coverImage?: string;
  coverFit?: 'cover' | 'contain';
}

export const work: WorkItem[] = [
  {
    id: 'work-aura',
    client: 'Aura Displays',
    industry: 'Consumer Tech — Displays',
    role: 'Social Media & Community Manager',
    title: 'Building a 2 million-follower community across six platforms',
    description:
      'Owned organic social end to end for a portable-display brand — trend research, hook writing, video direction, publishing, and daily community response across TikTok, Instagram, YouTube, Facebook, Threads, and Pinterest.',
    metric: '2.01M',
    metricLabel: 'followers across six platforms, 437.49M impressions',
    tags: ['TikTok', 'Instagram', 'YouTube'],
    coverImage: '/images/aura-logo.png',
    coverFit: 'contain',
  },
  {
    id: 'work-tpm',
    client: 'The Portable Monitor (TPM)',
    industry: 'Consumer Tech — Monitors',
    role: 'Social Media & Community Manager',
    title: "Turning organic social into the brand's primary growth engine",
    description:
      "Took organic social from a secondary channel to TPM's main growth driver — strategy, content calendars, video production, and monthly reporting across five platforms.",
    metric: '+257%',
    metricLabel: 'TikTok view growth, 178.45M total impressions (+664%)',
    tags: ['TikTok', 'Instagram', 'Analytics'],
  },
  {
    id: 'work-acco',
    client: 'Acco Shops',
    industry: 'E-commerce — Gadget Retail',
    role: 'Social Media Manager',
    title: 'Turning one product catalog into scroll-stopping short-form',
    description:
      'Adapted a single gadget catalog into demos, POV humor, and problem/solution hooks — sustaining reach without paid spend.',
    metric: '3M',
    metricLabel: 'views on a single Reel, 1.49M unique accounts reached',
    tags: ['Instagram', 'Reels', 'Organic Growth'],
    coverImage: '/images/acco-logo.png',
    coverFit: 'contain',
  },
  {
    id: 'work-freelance',
    client: 'Independent Clients',
    industry: 'E-commerce & Personal Brands',
    role: 'Freelance Social & Community Manager',
    title: 'Launching and growing accounts for founders and Shopify stores',
    description:
      'Account setup, content strategy, posting cadence, and engagement workflows for personal brands and Shopify stores.',
    metric: '10M+',
    metricLabel: 'views generated in 2026 to date',
    tags: ['Instagram', 'Shopify', 'Content Strategy'],
  },
];
