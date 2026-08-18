import React from 'react';
import { Section } from '@/components/layout/PortfolioLayout';

const sectionLabel = 'CLIENT FEEDBACK';
const sectionTitle = 'Testimonials';
const sectionDescription = 'What people say about working with me and the solutions I build.';

export const Testimonials: React.FC = () => {
  return (
    <Section id="testimonials" className="bg-soft-background py-16 lg:py-20">
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

        {/* Empty State */}
        <div className="text-center p-10">
          <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-lg bg-primary-light mx-auto">
            <span className="text-primary text-xl font-bold">TF</span>
          </div>
          <h3 className="mb-3 text-2xl font-semibold text-main-text">
            Building meaningful partnerships
          </h3>
          <p className="mb-6 text-secondary-text lg:text-lg max-w-2xl mx-auto">
            Client feedback will be added here as projects and collaborations grow.
          </p>
          <a href="#contact" className="btn-primary">
            Start a Conversation
          </a>
        </div>
      </div>
    </Section>
  );
};