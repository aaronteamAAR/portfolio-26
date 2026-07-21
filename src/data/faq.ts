export interface FaqItem {
  question: string;
  answer: string;
}

export const faq: FaqItem[] = [
  {
    question: 'What kinds of clients do you work with?',
    answer:
      "Mostly ambitious startups, creators, and technology companies who care about building a real community rather than chasing a follower count. If you have a point of view worth gathering people around, we'll get along.",
  },
  {
    question: 'Do you work retained or per-project?',
    answer:
      "Both. Retained monthly partnerships are the most common, but I also take on defined projects like launches, audits, and community set-ups. We'll pick whatever fits your stage.",
  },
  {
    question: 'Which platforms do you specialize in?',
    answer:
      "Instagram, LinkedIn, TikTok, and X for content and growth, plus Discord, Slack, and Reddit for community. I'll always recommend the smallest set of platforms that gets you the outcome, not the most.",
  },
  {
    question: 'How involved will my team need to be?',
    answer:
      "As much or as little as you'd like. Most clients give me a monthly touchpoint and async access to subject-matter experts; I handle planning, execution, and reporting end to end.",
  },
  {
    question: 'How soon can we get started?',
    answer:
      "After an initial call, most engagements kick off within two to three weeks — enough time for a proper discovery phase without losing momentum.",
  },
];
