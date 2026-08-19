import TechnologyBadge from './TechnologyBadge';
import type { Project } from '@/data/projects';

interface ProjectCardProps {
  project: Project;
  featured?: boolean;
  onProjectSelect?: (project: Project) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, featured = false, onProjectSelect }) => {
  const imageHeight = featured ? 'h-64' : 'h-48';
  const titleSize = featured ? 'text-xl' : 'text-lg';

  const handleProjectClick = () => {
    if (onProjectSelect) {
      onProjectSelect(project);
    }
  };

  const handleProjectKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleProjectClick();
    }
  };

  return (
    <div 
      className={`card card-hover relative overflow-hidden cursor-pointer ${featured ? 'shadow-lg' : ''}`}
      role="button"
      tabIndex={0}
      onClick={handleProjectClick}
      onKeyDown={handleProjectKeyDown}
    >
      <div className="image-content">
        <img
          loading="lazy"
          src={project.image}
          alt={project.title}
          className={`w-full ${imageHeight} object-cover rounded-t-lg`}
        />
      </div>
      <div className="p-5">
        <span className="mb-2 inline-block px-2 py-0.5 text-xs font-medium text-primary bg-primary/10 rounded">
          {project.category}
        </span>
        <h3 className={`mb-2 ${titleSize} font-semibold text-main-text`}>{project.title}</h3>
        <p className="mb-4 text-secondary-text">{project.shortDescription}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech) => (
            <TechnologyBadge
              key={tech}
              technology={tech}
              variant="secondary"
              size="default"
            />
          ))}
        </div>
        <div className="flex flex-wrap justify-between items-center gap-3 mt-4">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              View Demo
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-secondary-text hover:text-primary"
            >
              GitHub
            </a>
          )}
        </div>
      </div>
    </div>
  );
};