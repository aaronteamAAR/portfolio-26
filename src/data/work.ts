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
}

export const work: WorkItem[] = [
  {
    id: 'work-lumen',
    client: 'Lumen Skincare',
    industry: 'DTC Beauty',
    role: 'Community Lead',
    title: 'Building a skincare ritual community',
    description:
      'Launched and grew a members-only space where customers shared routines and results — turning first-time buyers into repeat advocates.',
    metric: '+185%',
    metricLabel: 'repeat-purchase rate in 6 months',
    tags: ['Instagram', 'Discord', 'UGC'],
  },
  {
    id: 'work-northwind',
    client: 'Northwind AI',
    industry: 'B2B SaaS',
    role: 'Social Strategy',
    title: 'A developer community from zero',
    description:
      'Stood up a technical community and content engine that made a young platform feel established — and gave the product team a direct line to users.',
    metric: '0 → 22k',
    metricLabel: 'members in the first year',
    tags: ['Discord', 'X', 'LinkedIn'],
  },
  {
    id: 'work-marlow',
    client: 'Marlow & Co.',
    industry: 'Lifestyle Retail',
    role: 'Campaign Lead',
    title: 'A launch that sold out in a weekend',
    description:
      'Orchestrated a multi-platform product launch with creators, teasers, and a community-first drop that outpaced every prior release.',
    metric: '3.1x',
    metricLabel: 'launch-day revenue vs. prior',
    tags: ['TikTok', 'Instagram', 'Creators'],
  },
];
