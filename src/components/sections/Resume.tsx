import React from 'react';
import { Section } from '@/components/layout/PortfolioLayout';
import { resumeData } from '@/data/resume';

const sectionLabel = 'PROFESSIONAL JOURNEY';
const sectionTitle = 'Resume';
const sectionDescription = 'A concise professional overview of my development experience, technical focus and continuous growth.';

export const Resume: React.FC = () => {
  return (
    <Section id="resume" className="bg-soft-background py-16 lg:py-20">
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

        {/* Summary */}
        <div className="fade-in-up mb-12 lg:mb-16 p-6 bg-background rounded-lg border border-border">
          <p className="text-secondary-text">{resumeData.summary}</p>
        </div>

        {/* Experience and Education */}
        <div className="grid gap-10 lg:grid-cols-2">
          {/* Experience */}
          <div className="space-y-8">
            <h3 className="mb-4 text-2xl font-semibold text-main-text">Professional Experience</h3>
            {resumeData.experience.map((exp) => (
              <div
                key={exp.id}
                className="card p-6 fade-in-up"
                style={{ animationDelay: `${resumeData.experience.indexOf(exp) * 80}ms` }}
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 h-3 w-3 rounded-full bg-primary" />
                  <div>
                    <h4 className="mb-1 text-lg font-semibold text-main-text">
                      {exp.role}
                    </h4>
                    <p className="mb-1 text-secondary-text">
                      {exp.company} <span className="mx-2">•</span> {exp.period}
                    </p>
                    <p className="mb-2 text-secondary-text">{exp.description}</p>
                    {exp.responsibilities && exp.responsibilities.length > 0 && (
                      <ul className="list-disc list-inside space-y-1 text-secondary-text">
                        {exp.responsibilities.map((resp, idx) => (
                          <li key={idx}>{resp}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Education */}
          <div className="space-y-8">
            <h3 className="mb-4 text-2xl font-semibold text-main-text">Education</h3>
            {resumeData.education.map((edu) => (
              <div
                key={edu.id}
                className="card p-6 fade-in-up"
                style={{ animationDelay: `${resumeData.education.indexOf(edu) * 80}ms` }}
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 h-3 w-3 rounded-full bg-primary" />
                  <div>
                    <h4 className="mb-1 text-lg font-semibold text-main-text">
                      {edu.degree}
                    </h4>
                    <p className="mb-1 text-secondary-text">
                      {edu.institution} <span className="mx-2">•</span> {edu.period}
                    </p>
                    {edu.description && (
                      <p className="text-secondary-text">{edu.description}</p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};