import React, { useEffect } from 'react';
import type { Project } from '@/data/projects';

interface CaseStudyModalProps {
  project: Project;
  isOpen: boolean;
  onClose: () => void;
}

export const CaseStudyModal: React.FC<CaseStudyModalProps> = ({
  project,
  isOpen,
  onClose
}) => {
  useEffect(() => {
    if (isOpen) {
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') {
          onClose();
        }
      };
      window.addEventListener('keydown', handleKeyDown);
      return () => {
        window.removeEventListener('keydown', handleKeyDown);
      };
    }
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
      <div role="dialog" aria-modal="true" className="relative bg-background rounded-lg shadow-xl w-full max-w-4xl mx-2 sm:mx-4 h-full max-h-[90vh] overflow-hidden">
        {/* Close Button */}
        <button
          type="button"
          onClick={() => {
            onClose();
          }}
          className="case-study-close absolute top-3 right-3 sm:top-4 sm:right-4 z-20"
          aria-label="Close case study"
        >
          ×
        </button>

        <div className="h-full overflow-y-auto">
          {/* Case Study Hero / Header */}
          <div className="relative w-full bg-gradient-to-br from-primary/10 to-transparent overflow-hidden">
            {/* Background image layer */}
            <div
              className="absolute inset-0 bg-cover bg-center opacity-20"
              style={{ backgroundImage: `url('${project.image}')` }}
            />
            {/* Content layer — normal flow, no absolute positioning */}
            <div className="relative z-10 px-4 pt-12 pb-6 sm:px-6 sm:pt-16 sm:pb-8 lg:px-8 lg:pt-20 lg:pb-10">
              <span className="mb-2 inline-block px-3 py-1 text-xs font-medium text-primary bg-primary/10 rounded">
                {project.category}
              </span>
              <h2 className="mb-3 text-xl sm:text-2xl lg:text-3xl font-bold text-main-text text-center">
                {project.title}
              </h2>
              <p className="text-sm sm:text-base text-secondary-text text-center max-w-2xl mx-auto leading-relaxed">
                {project.overview}
              </p>
            </div>
          </div>

          {/* Case Study Content */}
          <div className="p-4 sm:p-6 lg:p-8 space-y-5 sm:space-y-6 lg:space-y-8">
            {/* Overview Section */}
            <div className="space-y-3">
              <h3 className="text-lg sm:text-xl font-semibold text-main-text">Overview</h3>
              <p className="text-sm sm:text-base text-secondary-text leading-relaxed">{project.overview}</p>
            </div>

            {/* Problem & Goal — single column on mobile, two columns on lg */}
            <div className="grid gap-5 sm:gap-6 lg:grid-cols-2">
              <div className="space-y-3">
                <h3 className="text-lg sm:text-xl font-semibold text-main-text">Problem</h3>
                <p className="text-sm sm:text-base text-secondary-text leading-relaxed">{project.problem}</p>
              </div>
              <div className="space-y-3">
                <h3 className="text-lg sm:text-xl font-semibold text-main-text">Goal</h3>
                <p className="text-sm sm:text-base text-secondary-text leading-relaxed">{project.goal}</p>
              </div>
            </div>

            {/* Solution */}
            <div className="space-y-3">
              <h3 className="text-lg sm:text-xl font-semibold text-main-text">Solution</h3>
              <p className="text-sm sm:text-base text-secondary-text leading-relaxed">{project.solution}</p>
            </div>

            {/* Screenshots Gallery */}
            {project.screenshots && project.screenshots.length > 0 ? (
              <div className="space-y-3">
                <h3 className="text-lg sm:text-xl font-semibold text-main-text">Screenshots</h3>
                <div className="grid gap-3 sm:gap-4 grid-cols-1 sm:grid-cols-2">
                  {project.screenshots.map((src, index) => (
                    <img
                      key={index}
                      src={src}
                      alt={`${project.title} screenshot ${index + 1}`}
                      className="w-full h-48 sm:h-56 lg:h-64 object-cover rounded-lg"
                    />
                  ))}
                </div>
              </div>
            ) : null}

            {/* Key Features & User Experience */}
            <div className="grid gap-5 sm:gap-6 lg:grid-cols-2">
              <div className="space-y-3">
                <h3 className="text-lg sm:text-xl font-semibold text-main-text">Key Features</h3>
                <div className="space-y-2">
                  {project.keyFeatures.map((feature, index) => (
                    <div key={index} className="flex items-start gap-2">
                      <div className="flex-shrink-0 h-2.5 w-2.5 rounded-full bg-primary mt-1.5"></div>
                      <p className="text-sm sm:text-base text-secondary-text leading-relaxed">{feature}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="space-y-3">
                <h3 className="text-lg sm:text-xl font-semibold text-main-text">User Experience</h3>
                <p className="text-sm sm:text-base text-secondary-text leading-relaxed">{project.userExperience}</p>
              </div>
            </div>

            {/* Technical Implementation */}
            <div className="space-y-3">
              <h3 className="text-lg sm:text-xl font-semibold text-main-text">Technical Implementation</h3>
              <p className="text-sm sm:text-base text-secondary-text leading-relaxed">{project.technicalImplementation}</p>
            </div>

            {/* Challenges & Solutions */}
            <div className="grid gap-5 sm:gap-6 lg:grid-cols-2">
              <div className="space-y-3">
                <h3 className="text-lg sm:text-xl font-semibold text-main-text">Challenges Faced</h3>
                <div className="space-y-2">
                  {project.challenges.map((challenge, index) => (
                    <div key={index} className="flex items-start gap-2">
                      <div className="flex-shrink-0 h-2.5 w-2.5 rounded-full bg-primary/20 mt-1.5"></div>
                      <p className="text-sm sm:text-base text-secondary-text leading-relaxed">{challenge}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="space-y-3">
                <h3 className="text-lg sm:text-xl font-semibold text-main-text">Solutions Implemented</h3>
                <div className="space-y-2">
                  {project.solutions.map((solution, index) => (
                    <div key={index} className="flex items-start gap-2">
                      <div className="flex-shrink-0 h-2.5 w-2.5 rounded-full bg-primary/20 mt-1.5"></div>
                      <p className="text-sm sm:text-base text-secondary-text leading-relaxed">{solution}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Technologies Used */}
            <div className="space-y-3">
              <h3 className="text-lg sm:text-xl font-semibold text-main-text">Technologies Used</h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span key={tech} className="px-3 py-1 text-xs font-medium text-secondary-text bg-secondary-text/5 border border-secondary-text/20 rounded-full">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Outcome */}
            <div className="space-y-3">
              <h3 className="text-lg sm:text-xl font-semibold text-main-text">Outcome</h3>
              <p className="text-sm sm:text-base text-secondary-text leading-relaxed">{project.outcome}</p>
            </div>

            {/* Future Improvements */}
            <div className="space-y-3">
              <h3 className="text-lg sm:text-xl font-semibold text-main-text">Future Improvements</h3>
              <div className="space-y-2">
                {project.futureImprovements.map((improvement, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <div className="flex-shrink-0 h-2.5 w-2.5 rounded-full bg-primary/20 mt-1.5"></div>
                    <p className="text-sm sm:text-base text-secondary-text leading-relaxed">{improvement}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row sm:gap-3 justify-end pt-4 sm:pt-6">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary flex-1 sm:flex-auto"
                >
                  View Live Demo
                </a>
              )}
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary flex-1 sm:flex-auto"
                >
                  View Source Code
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
