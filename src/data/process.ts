export interface ProcessStep {
  step: string;
  title: string;
  description: string;
}

export const process: ProcessStep[] = [
  {
    step: '01',
    title: 'Discovery',
    description:
      'We map your platforms, audience, and current content — and agree what winning looks like in views, engagement, and revenue.',
  },
  {
    step: '02',
    title: 'Strategy',
    description:
      'Hooks, formats, and a content calendar built around what actually earns watch-time on TikTok and Reels.',
  },
  {
    step: '03',
    title: 'Execution',
    description:
      'Video direction, editing, and daily community management — the consistent output that builds trust and reach.',
  },
  {
    step: '04',
    title: 'Growth',
    description:
      "Monthly reporting reads the data, doubles down on what's working, and compounds results platform by platform.",
  },
];
