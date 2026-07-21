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
      'End-to-end ownership of TikTok, Instagram, YouTube, Facebook, Threads, and Pinterest — trend research, hook writing, publishing, and reporting.',
  },
  {
    icon: 'users',
    title: 'Community Management',
    description:
      'Daily comments, DMs, and UGC replies handled in a consistent brand voice, including crisis and negative-feedback resolution.',
  },
  {
    icon: 'edit',
    title: 'Short-Form Video Strategy',
    description:
      'Hooks, formats, and calendars built around what actually earns watch-time and shares on TikTok and Reels.',
  },
  {
    icon: 'trending-up',
    title: 'Brand Growth',
    description:
      "Organic growth strategy that's taken brands from a secondary channel to their primary growth engine.",
  },
  {
    icon: 'megaphone',
    title: 'Campaign Management',
    description: 'Contests and campaign pushes planned and run start to finish, from brief to recap.',
  },
  {
    icon: 'bar-chart',
    title: 'Analytics & Reporting',
    description:
      'Monthly performance reporting that connects views and impressions to referral traffic and tracked sales.',
  },
  {
    icon: 'video',
    title: 'Video Direction & Editing',
    description:
      'Concept-to-cut video production using Canva, CapCut, and AI tools like Higgsfield — built for speed without losing brand feel.',
  },
  {
    icon: 'lightbulb',
    title: 'Consulting',
    description: 'Advisory and audits for teams who want to keep organic social in-house.',
  },
];
