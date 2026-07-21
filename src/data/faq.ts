export interface FaqItem {
  question: string;
  answer: string;
}

export const faq: FaqItem[] = [
  {
    question: 'What kinds of clients do you work with?',
    answer:
      "Mostly e-commerce and consumer-tech brands, plus founders and Shopify stores — but the process adapts to any brand or industry. Give me a product and an audience, and I'll figure out the platforms and voice that fit.",
  },
  {
    question: 'Do you work retained or per-project?',
    answer:
      "Both. Retained monthly partnerships are the most common, but I also take on defined projects like launches, audits, and community set-ups. We'll pick whatever fits your stage.",
  },
  {
    question: 'Which platforms do you specialize in?',
    answer:
      "TikTok, Instagram, and YouTube for short-form growth, plus Facebook, Threads, and Pinterest for distribution. I'll always recommend the platforms that match where your audience actually is.",
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
