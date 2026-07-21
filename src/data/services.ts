export interface Service {
  icon: string;
  title: string;
  description: string;
}

export const services: Service[] = [
  {
    icon: 'share',
    title: 'Social Media Management',
    description:
      'End-to-end ownership of your channels — planning, publishing, and daily engagement that stays on-brand.',
  },
  {
    icon: 'users',
    title: 'Community Management',
    description:
      'Moderation, rituals, and member care that turn a follower count into a place people belong.',
  },
  {
    icon: 'edit',
    title: 'Content Strategy',
    description:
      'Editorial pillars, formats, and a calendar rooted in what your audience actually wants to see.',
  },
  {
    icon: 'trending-up',
    title: 'Brand Growth',
    description:
      'Audience acquisition that compounds — the right platforms, the right voice, the right cadence.',
  },
  {
    icon: 'megaphone',
    title: 'Campaign Management',
    description: 'Launches, collabs, and seasonal moments run start to finish — brief to recap.',
  },
  {
    icon: 'bar-chart',
    title: 'Analytics & Reporting',
    description:
      'Clear monthly readouts that connect the work to outcomes you can take to the board.',
  },
  {
    icon: 'grid',
    title: 'Platform Management',
    description: 'Discord, Slack, Reddit and beyond — set up, governed, and grown with intention.',
  },
  {
    icon: 'lightbulb',
    title: 'Consulting',
    description: 'Advisory, audits, and team coaching when you want to keep the work in-house.',
  },
];
