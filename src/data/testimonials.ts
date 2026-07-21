export interface Testimonial {
  id: string;
  quote: string;
  name: string;
  role: string;
}

export const testimonials: Testimonial[] = [
  {
    id: 'testimonial-priya',
    quote:
      'Aaron gave our community a personality. Engagement stopped being a chore and started feeling like a conversation — and the numbers followed.',
    name: 'Priya Sharma',
    role: 'Head of Marketing, Lumen Skincare',
  },
  {
    id: 'testimonial-daniel',
    quote:
      'We hired Aaron to build a community and got a strategist. He understood our product, our users, and our tone better than we did.',
    name: 'Daniel Osei',
    role: 'Co-founder, Northwind AI',
  },
  {
    id: 'testimonial-elena',
    quote:
      'Our biggest launch ever, run calmly and completely. Aaron is the rare person who is equally good at the plan and the people.',
    name: 'Elena Marlow',
    role: 'Founder, Marlow & Co.',
  },
];
