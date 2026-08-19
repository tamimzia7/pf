import React, { useState } from 'react';
import { Section } from '@/components/layout/PortfolioLayout';
import { projects } from '@/data/projects';
import { type Project } from '@/data/projects';
import { ProjectCard } from '@/components/ui/ProjectCard';
import { CaseStudyModal } from '@/components/ui/CaseStudyModal';

const sectionLabel = 'SELECTED WORK';
const sectionTitle = 'Projects & Case Studies';
const sectionDescription = 'A selection of software projects focused on solving practical problems through thoughtful design, modern development and scalable architecture.';

export const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<null | Project>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Separate featured and non-featured projects
  const featuredProjects = projects.filter((project) => project.featured);
  const regularProjects = projects.filter((project) => !project.featured);

  const handleProjectSelect = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  return (
    <Section id="projects" className="bg-soft-background py-8 sm:py-12 lg:py-16">
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

        {/* Featured Project(s) */}
        {featuredProjects.length > 0 && ( 
          <div className="mb-12 lg:mb-16">
            <div className="space-y-8">
              {featuredProjects.map((project) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  featured={true}
                  onProjectSelect={handleProjectSelect}
                />
              ))}
            </div>
          </div>
        )}

        {/* Regular Projects Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {regularProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              featured={false}
              onProjectSelect={handleProjectSelect}
            />
          ))}
        </div>
      </div>

      {/* Case Study Modal */}
      {selectedProject && isModalOpen && (
        <CaseStudyModal
          project={selectedProject}
          isOpen={isModalOpen}
          onClose={handleModalClose}
        />
      )}
    </Section>
  );
};