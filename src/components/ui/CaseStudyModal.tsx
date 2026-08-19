import React, { useEffect } from 'react';

interface CaseStudyModalProps {
  project: {
    id: string;
    title: string;
    shortDescription: string;
    overview: string;
    category: string;
    technologies: string[];
    image: string;
    status?: string;
    featured?: boolean;
    githubUrl?: string;
    liveUrl?: string;
    // Case study fields
    problem: string;
    goal: string;
    solution: string;
    keyFeatures: string[];
    userExperience: string;
    technicalImplementation: string;
    challenges: string[];
    solutions: string[];
    outcome: string;
    futureImprovements: string[];
  };
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
      <div role="dialog" aria-modal="true" className="relative bg-background rounded-lg shadow-xl w-full max-w-4xl mx-4 h-full max-h-[90vh] overflow-hidden">
        {/* Close Button */}
        <button
          type="button"
          onClick={() => {
            onClose();
          }}
          className="absolute top-4 right-4 text-secondary-text hover:text-primary transition-colors z-20"
          aria-label="Close case study"
        >
          ×
        </button>

        <div className="h-full overflow-y-auto">
          {/* Case Study Header */}
          <div className="relative h-48 w-full bg-gradient-to-br from-primary/10 to-transparent">
            <div className="absolute inset-0 bg-[url('${project.image}')] bg-cover bg-center opacity-20"></div>
            <div className="relative z-10 flex flex-col items-center justify-center pt-16 pb-8">
              <span className="mb-2 inline-block px-3 py-1 text-xs font-medium text-primary bg-primary/10 rounded">
                {project.category}
              </span>
              <h2 className="mb-4 text-3xl font-bold text-main-text text-center">{project.title}</h2>
              <p className="text-secondary-text text-center max-w-2xl">{project.overview}</p>
            </div>
          </div>

          {/* Case Study Content */}
          <div className="p-6 lg:p-8 space-y-8">
            {/* Overview Section */}
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-main-text">Overview</h3>
              <p className="text-secondary-text">{project.overview}</p>
            </div>

            {/* Problem & Goal */}
            <div className="grid gap-6 lg:grid-cols-2">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-main-text">Problem</h3>
                <p className="text-secondary-text">{project.problem}</p>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-main-text">Goal</h3>
                <p className="text-secondary-text">{project.goal}</p>
              </div>
            </div>

            {/* Solution */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-main-text">Solution</h3>
              <p className="text-secondary-text">{project.solution}</p>
            </div>

            {/* Key Features & User Experience */}
            <div className="grid gap-6 lg:grid-cols-2">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-main-text">Key Features</h3>
                <div className="space-y-2">
                  {project.keyFeatures.map((feature, index) => (
                    <div key={index} className="flex items-start space-x-2">
                      <div className="flex-shrink-0 h-3 w-3 rounded-full bg-primary mt-1"></div>
                      <div>
                        <p className="text-secondary-text">{feature}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-main-text">User Experience</h3>
                <p className="text-secondary-text">{project.userExperience}</p>
              </div>
            </div>

            {/* Technical Implementation */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-main-text">Technical Implementation</h3>
              <p className="text-secondary-text">{project.technicalImplementation}</p>
            </div>

            {/* Challenges & Solutions */}
            <div className="grid gap-6 lg:grid-cols-2">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-main-text">Challenges Faced</h3>
                <div className="space-y-2">
                  {project.challenges.map((challenge, index) => (
                    <div key={index} className="flex items-start space-x-2">
                      <div className="flex-shrink-0 h-3 w-3 rounded-full bg-primary/20 mt-1"></div>
                      <div>
                        <p className="text-secondary-text">{challenge}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-main-text">Solutions Implemented</h3>
                <div className="space-y-2">
                  {project.solutions.map((solution, index) => (
                    <div key={index} className="flex items-start space-x-2">
                      <div className="flex-shrink-0 h-3 w-3 rounded-full bg-primary/20 mt-1"></div>
                      <div>
                        <p className="text-secondary-text">{solution}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Technologies Used */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-main-text">Technologies Used</h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span key={tech} className="px-3 py-1 text-xs font-medium text-secondary-text bg-secondary-text/5 border border-secondary-text/20 rounded-full">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Outcome */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-main-text">Outcome</h3>
              <p className="text-secondary-text">{project.outcome}</p>
            </div>

            {/* Future Improvements */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-main-text">Future Improvements</h3>
              <div className="space-y-2">
                {project.futureImprovements.map((improvement, index) => (
                  <div key={index} className="flex items-start space-x-2">
                    <div className="flex-shrink-0 h-3 w-3 rounded-full bg-primary/20 mt-1"></div>
                    <div>
                      <p className="text-secondary-text">{improvement}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row sm:gap-3 justify-end pt-6">
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