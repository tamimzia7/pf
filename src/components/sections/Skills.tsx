import React from 'react';
import { Section } from '@/components/layout/PortfolioLayout';
import { skillCategories, coreStack } from '@/data/skills';
import TechnologyBadge from '@/components/ui/TechnologyBadge';

const sectionLabel = 'MY EXPERTISE';
const sectionTitle = 'Skills & Technology';
const sectionDescription = 'Technologies and tools I use to design, build and maintain modern web applications and business-focused software systems.';

export const Skills: React.FC = () => {
  return (
    <Section id="skills" className="bg-soft-background py-8 sm:py-12 lg:py-16">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Heading */}
        <div className="fade-in-up mb-6 sm:mb-8 lg:mb-10">
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

        {/* Core Stack */}
        <div className="fade-in-up mb-12 lg:mb-16">
          <h3 className="mb-4 text-lg sm:text-xl font-semibold text-main-text">
            Core Stack
          </h3>
          <div className="flex flex-wrap gap-3">
            {coreStack.map((tech) => (
              <TechnologyBadge
                key={tech}
                technology={tech}
                variant="primary"
                size="large"
              />
            ))}
          </div>
        </div>

        {/* Skill Categories */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category) => (
            <article
              key={category.id}
              className="card card-hover fade-in-up p-4 sm:p-5 lg:p-6"
              style={{ animationDelay: `${skillCategories.indexOf(category) * 60}ms` }}
            >
              <h3 className="mb-4 text-base sm:text-lg font-semibold text-main-text">
                {category.title}
              </h3>
              <p className="mb-5 text-secondary-text leading-relaxed">
                {category.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {category.technologies.map((tech) => (
                  <TechnologyBadge
                    key={`${category.id}-${tech}`}
                    technology={tech}
                    variant="secondary"
                    size="default"
                  />
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </Section>
  );
};