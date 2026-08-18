import TechnologyBadge from './TechnologyBadge';

interface ProjectCardProps {
  project: {
    id: string;
    title: string;
    shortDescription: string;
    description: string;
    category: string;
    technologies: string[];
    role: string;
    problem: string;
    solution: string;
    architecture: string;
    features: string[];
    challenges: string[];
    solutions: string[];
    testing: string;
    security: string;
    businessImpact: string;
    githubUrl?: string;
    liveUrl?: string;
    image: string;
    status?: string;
    featured?: boolean;
  };
  featured?: boolean;
  onProjectSelect?: (project: ProjectCardProps['project']) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, featured = false, onProjectSelect }) => {
  const imageHeight = featured ? 'h-64' : 'h-48';
  const titleSize = featured ? 'text-xl' : 'text-lg';

  const handleProjectClick = () => {
    if (onProjectSelect) {
      onProjectSelect(project);
    }
  };

  return (
    <div 
      className={`card card-hover relative overflow-hidden cursor-pointer ${featured ? 'shadow-lg' : ''}`}
      onClick={handleProjectClick}
    >
      <img
        src={project.image}
        alt={project.title}
        className={`w-full ${imageHeight} object-cover rounded-t-lg transition-transform duration-300`}
        style={{ transform: 'scale(1)' }}
        onMouseEnter={(e) => { e.currentTarget.style.transform = 'scale(1.03)'; }}
        onMouseLeave={(e) => { e.currentTarget.style.transform = 'scale(1)'; }}
      />
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
        <div className="flex justify-between items-center mt-4">
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