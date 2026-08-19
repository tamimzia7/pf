import React from 'react';
import { Section } from '@/components/layout/PortfolioLayout';
import { Briefcase, ShieldCheck, Users } from 'lucide-react';

const sectionLabel = 'CLIENT FEEDBACK';
const sectionTitle = 'Testimonials';
const sectionDescription = 'What people say about working with me and the solutions I build.';

const cards = [
  {
    icon: Briefcase,
    title: 'Project Experience',
    description: 'Client feedback on working together, communication, and project delivery.',
  },
  {
    icon: ShieldCheck,
    title: 'Solution Quality',
    description: 'Feedback on the quality, reliability, and maintainability of the solutions I build.',
  },
  {
    icon: Users,
    title: 'Collaboration',
    description: 'Insights from future collaborations, projects, and long-term partnerships.',
  },
];

export const Testimonials: React.FC = () => {
  return (
    <Section id="testimonials" className="bg-soft-background py-16 lg:py-20">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Heading */}
        <div className="fade-in-up mb-10 lg:mb-14">
          <p className="mb-3 text-sm font-medium uppercase tracking-wider text-primary">
            {sectionLabel}
          </p>
          <h2 className="text-3xl font-bold text-main-text sm:text-4xl lg:text-5xl">
            {sectionTitle}
          </h2>
          <p className="mb-6 text-secondary-text lg:text-lg leading-relaxed">
            {sectionDescription}
          </p>
        </div>

        {/* Feedback Preview Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
          {cards.map((card) => {
            const Icon = card.icon;
            return (
              <div
                key={card.title}
                className="card p-5 flex flex-col"
              >
                <Icon className="mb-3 h-6 w-6 text-primary" aria-hidden="true" />
                <h3 className="mb-1 text-base font-semibold text-main-text">
                  {card.title}
                </h3>
                <p className="mb-3 text-sm text-secondary-text leading-relaxed flex-1">
                  {card.description}
                </p>
                <span className="inline-block self-start px-2 py-0.5 text-xs font-medium text-primary bg-primary/10 rounded">
                  Coming Soon
                </span>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <p className="text-main-text font-medium">
            Building meaningful partnerships through reliable software.
          </p>
          <div className="mt-4">
            <a href="#contact" className="btn-primary">
              Start a Conversation
            </a>
          </div>
        </div>
      </div>
    </Section>
  );
};