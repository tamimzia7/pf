import React from 'react';
import { Section } from '@/components/layout/PortfolioLayout';
import { projects } from '@/data/projects';
import { ProjectCard } from '@/components/ui/ProjectCard';

const sectionLabel = 'SELECTED WORK';
const sectionTitle = 'Featured Projects';
const sectionDescription = 'A selection of software projects focused on solving practical problems through thoughtful design, modern development and scalable architecture.';

export const Projects: React.FC = () => {
  // Separate featured and non-featured projects
  const featuredProjects = projects.filter((project) => project.featured);
  const regularProjects = projects.filter((project) => !project.featured);

  return (
    <Section id="projects" className="bg-soft-background py-16 lg:py-20">
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

        {/* Featured Project(s) */}
        {featuredProjects.length > 0 && (
          <div className="mb-12 lg:mb-16">
            <div className="space-y-8">
              {featuredProjects.map((project) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  featured={true}
                />
              ))}
            </div>
          </div>
        )}

        {/* Regular Projects Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-2">
          {regularProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              featured={false}
            />
          ))}
        </div>
      </div>
    </Section>
  );
};