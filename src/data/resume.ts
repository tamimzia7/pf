export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string;
  responsibilities?: string[];
}

export interface Education {
  id: string;
  degree: string;
  institution: string;
  period: string;
  description?: string;
}

export interface ResumeData {
  summary: string;
  experience: Experience[];
  education: Education[];
}

export const resumeData: ResumeData = {
  summary: "Tamim Zia is a Full Stack Laravel Developer focused on building web applications, backend systems, APIs, databases and business-oriented software solutions.",
  experience: [
    {
      id: 'exp1',
      role: 'Full Stack Laravel Developer',
      company: '9AM Solution',
      period: '2025',
      description: 'Worked on web application development, backend systems, APIs, database-driven solutions, software quality assurance, and practical software development tasks.',
      responsibilities: [
        'Laravel / PHP Development',
        'Backend Development',
        'REST API Development',
        'Database Design',
        'Software Quality Assurance',
        'Software Testing',
        'Bug Detection & Debugging',
        'Secure Software Development'
      ]
    },
    {
      id: 'exp2',
      role: 'Full Stack Laravel Developer',
      company: 'Win_Win Service Provider',
      period: '2026 – Present',
      description: 'Currently working on software development and business-focused technology solutions with a focus on Laravel backend development, APIs, databases, software quality, and reliable application delivery.',
      responsibilities: [
        'Laravel / PHP Development',
        'Backend & API Development',
        'Database Design',
        'Software Quality Assurance',
        'Software Testing',
        'Application Security',
        'System Design',
        'Business-Focused Solutions'
      ]
    }
  ],
  education: [
    {
      id: 'edu1',
      degree: 'Bachelor of Science in Computer Science & Engineering',
      institution: 'Green University of Bangladesh',
      period: '2022 - 2026',
      description: 'Computer Science & Engineering'
    }
  ]
};