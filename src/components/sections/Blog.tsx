import React from 'react';
import { Section } from '@/components/layout/PortfolioLayout';

const sectionLabel = 'THOUGHTS & INSIGHTS';
const sectionTitle = 'Blog & Articles';
const sectionDescription = 'I write about software development, system design, Laravel, automation, APIs and practical technology solutions.';

export const Blog: React.FC = () => {
  return (
    <Section id="blog" className="bg-soft-background py-16 lg:py-20">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Heading */}
        <div className="fade-in-up mb-10 lg:mb-14">
          <p className="mb-3 text-sm font-medium uppercase tracking-wider text-primary">
            {sectionLabel}
          </p>
          <h2 className="text-4xl font-bold text-main-text lg:text-5xl">
            {sectionTitle}
          </h2>
          <p className="mb-6 text-secondary-text lg:text-lg leading-relaxed">
            {sectionDescription}
          </p>
        </div>

        {/* Empty State for Blog */}
        <div className="text-center p-10">
          <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-lg bg-primary-light mx-auto">
            <span className="text-primary text-xl font-bold">B</span>
          </div>
          <h3 className="mb-3 text-2xl font-semibold text-main-text">
            No articles yet
          </h3>
          <p className="mb-6 text-secondary-text lg:text-lg max-w-2xl mx-auto">
            Blog articles will be added here as they are written.
          </p>
          <a href="#contact" className="btn-primary">
            Start a Conversation
          </a>
        </div>
      </div>
    </Section>
  );
};