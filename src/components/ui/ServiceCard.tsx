import React from 'react';
import TechnologyBadge from './TechnologyBadge';

interface ServiceCardProps {
  title: string;
  description: string;
  Icon: any; // LucideIcon component
  technologies?: string[];
  featured?: boolean;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  Icon,
  technologies = [],
  featured = false
}) => {
  const iconSize = featured ? 'h-12 w-12' : 'h-10 w-10';
  const titleSize = featured ? 'text-xl' : 'text-lg';

  return (
    <div className={`card card-hover relative overflow-hidden ${featured ? 'shadow-lg' : ''}`}>
      <div className="p-6">
        {/* Icon */}
        <div className={`mb-4 flex ${iconSize} items-center justify-center rounded-lg bg-primary/10`}>
          <Icon className="h-5 w-5 text-primary" />
        </div>

        {/* Title */}
        <h3 className={`mb-2 ${titleSize} font-semibold text-main-text`}>{title}</h3>

        {/* Description */}
        <p className="mb-4 text-secondary-text">{description}</p>

        {/* Technologies */}
        {technologies.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-6">
            {technologies.map((tech) => (
              <TechnologyBadge
                key={tech}
                technology={tech}
                variant="secondary"
                size="default"
              />
            ))}
          </div>
        )}

        {/* CTA Link */}
        <a href="#contact" className="btn-primary w-full">
          Discuss a Project
        </a>
      </div>
    </div>
  );
};