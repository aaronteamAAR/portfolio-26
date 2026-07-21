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
      'We map your audience, goals, and current voice — and agree on what winning looks like.',
  },
  {
    step: '02',
    title: 'Strategy',
    description:
      'Content pillars, platform plan, and community rituals — a document your whole team can rally behind.',
  },
  {
    step: '03',
    title: 'Execution',
    description:
      'Consistent publishing, live engagement, and campaigns — the daily craft that builds trust.',
  },
  {
    step: '04',
    title: 'Growth',
    description:
      'We read the data, double down on what works, and compound the results month over month.',
  },
];
