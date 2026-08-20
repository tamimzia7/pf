import React from 'react';
import { Section } from '@/components/layout/PortfolioLayout';
import { services } from '@/data/services';
import { ServiceCard } from '@/components/ui/ServiceCard';

const sectionLabel = 'WHAT I OFFER';
const sectionTitle = 'Services';
const sectionDescription = 'Practical software development services focused on building reliable, scalable and business-oriented digital solutions.';

export const Services: React.FC = () => {
  // Separate featured and non-featured services
  const featuredServices = services.filter((service) => service.featured);
  const regularServices = services.filter((service) => !service.featured);

  return (
    <Section id="services" className="bg-soft-background py-8 sm:py-12 lg:py-16">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Heading */}
        <div className="reveal mb-6 sm:mb-8 lg:mb-10">
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

        {/* Featured Service(s) */}
        {featuredServices.length > 0 && (
          <div className="reveal mb-12 lg:mb-16">
            {featuredServices.map((service) => (
              <ServiceCard
                key={service.id}
                title={service.title}
                description={service.description}
                Icon={service.Icon}
                technologies={service.technologies}
                featured={true}
              />
            ))}
          </div>
        )}

        {/* Regular Services Grid */}
        <div className="reveal reveal-group grid gap-8 sm:grid-cols-2 lg:grid-cols-3" data-stagger="70">
          {regularServices.map((service) => (
            <ServiceCard
              key={service.id}
              title={service.title}
              description={service.description}
              Icon={service.Icon}
              technologies={service.technologies}
              featured={false}
            />
          ))}
        </div>
      </div>
    </Section>
  );
};