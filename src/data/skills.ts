export interface SkillCategory {
  id: string;
  title: string;
  description: string;
  technologies: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    id: 'frontend',
    title: 'Frontend Development',
    description: 'Building responsive and interactive user interfaces with modern web technologies.',
    technologies: [
      'React',
      'TypeScript',
      'JavaScript',
      'HTML5',
      'CSS3',
      'Tailwind CSS',
      'Bootstrap'
    ]
  },
  {
    id: 'laravel-php',
    title: 'Laravel / PHP Development',
    description: 'Building server-side applications and APIs using Laravel and PHP ecosystem.',
    technologies: [
      'Laravel',
      'PHP'
    ]
  },
  {
    id: 'sqa',
    title: 'Software Quality Assurance',
    description: 'Ensuring software quality through testing, bug detection, and quality engineering practices.',
    technologies: [
      'Software Testing',
      'Bug Detection',
      'Quality Engineering'
    ]
  },
  {
    id: 'backend',
    title: 'Backend Development',
    description: 'Designing and implementing server-side logic, APIs, and system architecture.',
    technologies: [
      'Node.js',
      'Express.js',
      'REST API',
      'Authentication',
      'Authorization',
      'API Integration',
      'Webhooks'
    ]
  },
  {
    id: 'database',
    title: 'Database',
    description: 'Designing and managing data storage solutions for optimal performance and scalability.',
    technologies: [
      'MongoDB',
      'MySQL',
      'Database Design',
      'Data Modeling'
    ]
  },
  {
    id: 'tools',
    title: 'Development Tools',
    description: 'Utilizing industry-standard tools for efficient development, testing, and collaboration.',
    technologies: [
      'Git',
      'GitHub',
      'VS Code',
      'Postman',
      'npm'
    ]
  },
  {
    id: 'architecture',
    title: 'Architecture & Engineering',
    description: 'Applying proven architectural patterns and engineering principles for maintainable systems.',
    technologies: [
      'MVC Architecture',
      'REST Architecture',
      'Component Architecture',
      'System Design',
      'Clean Code',
      'Reusable Components',
      'Error Handling',
      'Validation'
    ]
  }
];

// Core Stack - Primary technologies that receive stronger visual emphasis
export const coreStack: string[] = [
  'Laravel',
  'React',
  'TypeScript',
  'Node.js',
  'Express.js',
  'MongoDB'
];