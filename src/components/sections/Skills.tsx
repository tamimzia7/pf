import React from 'react';
import { Section } from '@/components/layout/PortfolioLayout';
import { skillCategories, coreStack } from '@/data/skills';
import TechnologyBadge from '@/components/ui/TechnologyBadge';

const sectionLabel = 'MY EXPERTISE';
const sectionTitle = 'Skills & Technology';
const sectionDescription = 'Technologies and tools I use to design, build and maintain modern web applications and business-focused software systems.';

export const Skills: React.FC = () => {
  return (
    <Section id="skills" className="bg-soft-background py-16 lg:py-20">
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

        {/* Core Stack */}
        <div className="fade-in-up mb-12 lg:mb-16">
          <h3 className="mb-4 text-2xl font-semibold text-main-text">
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
              className="card card-hover fade-in-up p-6 lg:p-8"
              style={{ animationDelay: `${skillCategories.indexOf(category) * 60}ms` }}
            >
              <h3 className="mb-4 text-xl font-semibold text-main-text">
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