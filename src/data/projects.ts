export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  featured?: boolean;
}

export const projects: Project[] = [
  {
    id: 'visicore',
    title: 'VisiCore',
    category: 'Business Platform',
    description: 'A multi-tenant customer journey intelligence platform designed to centralize visitor interactions, relationships and journey history in one system.',
    image: '/assets/projects/visicore.webp',
    technologies: [
      'React',
      'TypeScript',
      'Node.js',
      'Express.js',
      'MongoDB',
      'REST API'
    ],
    githubUrl: undefined,
    liveUrl: undefined,
    featured: true
  },
  {
    id: 'astha',
    title: 'ASTHA',
    category: 'Home Services Platform',
    description: 'A digital platform designed to connect customers with trusted service providers while supporting property maintenance and transport-related workflows.',
    image: '/assets/projects/astha.webp',
    technologies: [
      'React',
      'TypeScript',
      'Node.js',
      'Express.js',
      'MongoDB',
      'REST API'
    ],
    githubUrl: undefined,
    liveUrl: undefined,
    featured: false
  },
  {
    id: 'ai-automation',
    title: 'AI Automation System',
    category: 'AI & Automation',
    description: 'An automation workflow that receives user input, processes it through an AI agent and connects the result to external services through webhooks and APIs.',
    image: '/assets/projects/ai-automation.webp',
    technologies: [
      'AI Agent',
      'Webhooks',
      'APIs',
      'Automation Workflow',
      'Telegram Integration'
    ],
    githubUrl: undefined,
    liveUrl: undefined,
    featured: false
  },
  {
    id: 'weather-app',
    title: 'Weather Forecasting Website',
    category: 'Web Application',
    description: 'A responsive weather application that retrieves weather information through an external API and presents it through a clean user interface.',
    image: '/assets/projects/weather-app.webp',
    technologies: [
      'HTML',
      'CSS',
      'JavaScript',
      'OpenWeather API'
    ],
    githubUrl: undefined,
    liveUrl: undefined,
    featured: false
  }
];