import React from 'react';
import { Section } from '@/components/layout/PortfolioLayout';
import { Server, ShieldCheck, LayoutDashboard, Plug } from 'lucide-react';

const sectionLabel = 'THOUGHTS & INSIGHTS';
const sectionTitle = 'Blog & Articles';
const sectionDescription = 'I write about software development, system design, Laravel, automation, APIs and practical technology solutions.';

const topics = [
  {
    icon: Server,
    title: 'Laravel & Backend',
    description: 'Building scalable Laravel applications, APIs, architecture and backend engineering.',
  },
  {
    icon: ShieldCheck,
    title: 'Software Quality',
    description: 'Testing strategies, QA, debugging and building reliable software.',
  },
  {
    icon: LayoutDashboard,
    title: 'System Design',
    description: 'Architecture decisions, database design and scalable systems.',
  },
  {
    icon: Plug,
    title: 'Automation & APIs',
    description: 'AI automation, API integrations and practical workflows.',
  },
];

export const Blog: React.FC = () => {
  return (
    <Section id="blog" className="bg-soft-background py-8 sm:py-12 lg:py-16">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Heading */}
        <div className="reveal mb-6 sm:mb-8 lg:mb-10">
          <p className="mb-3 text-sm font-medium uppercase tracking-wider text-primary">
            {sectionLabel}
          </p>
          <h2 className="text-xl font-bold text-main-text sm:text-2xl lg:text-3xl">
            {sectionTitle}
          </h2>
          <p className="mb-6 text-secondary-text lg:text-lg leading-relaxed">
            {sectionDescription}
          </p>
        </div>

        {/* Featured Topics Grid */}
        <div className="reveal reveal-group grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10" data-stagger="70">
          {topics.map((topic) => {
            const Icon = topic.icon;
            return (
              <div
                key={topic.title}
                className="card p-5 flex flex-col"
              >
                <Icon className="mb-3 h-6 w-6 text-primary" aria-hidden="true" />
                <h3 className="mb-1 text-base font-semibold text-main-text">
                  {topic.title}
                </h3>
                <p className="mb-3 text-sm text-secondary-text leading-relaxed flex-1">
                  {topic.description}
                </p>
                <span className="inline-block self-start px-2 py-0.5 text-xs font-medium text-primary bg-primary/10 rounded">
                  Coming Soon
                </span>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="reveal text-center">
          <p className="text-main-text font-medium">
            Articles are currently in progress.
          </p>
          <p className="mt-1 text-sm text-secondary-text">
            Practical lessons, engineering decisions and real-world solutions will be published here.
          </p>
        </div>
      </div>
    </Section>
  );
};