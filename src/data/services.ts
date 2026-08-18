import { Code2, Server, LayoutDashboard, Database, Plug, Bot } from 'lucide-react'

export interface Service {
  id: string;
  title: string;
  description: string;
  Icon: any; // LucideIcon component
  technologies?: string[];
  featured?: boolean;
}

export const services: Service[] = [
  {
    id: 'full-stack',
    title: 'Full Stack Web Development',
    description: 'Build scalable, secure and maintainable web applications using modern frontend and backend technologies.',
    Icon: Code2,
    technologies: [
      'React',
      'TypeScript',
      'Node.js',
      'Express.js',
      'REST API',
      'HTML5',
      'CSS3'
    ],
    featured: true
  },
  {
    id: 'backend',
    title: 'Backend & API Development',
    description: 'Design and implement robust REST APIs, authentication systems, and third-party integrations.',
    Icon: Server,
    technologies: [
      'Node.js',
      'Express.js',
      'REST API',
      'Authentication',
      'Authorization',
      'API Integration',
      'Webhooks'
    ],
    featured: false
  },
  {
    id: 'business-systems',
    title: 'Business Management Systems',
    description: 'Create custom dashboards, workflow systems and business-focused applications tailored to your needs.',
    Icon: LayoutDashboard,
    technologies: [
      'React',
      'TypeScript',
      'Node.js',
      'Express.js',
      'MongoDB',
      'REST API'
    ],
    featured: false
  },
  {
    id: 'database',
    title: 'Database & System Design',
    description: 'Design efficient data models, optimize database performance and architect scalable data structures.',
    Icon: Database,
    technologies: [
      'MongoDB',
      'MySQL',
      'Database Design',
      'Data Modeling',
      'Performance Optimization'
    ],
    featured: false
  },
  {
    id: 'integrations',
    title: 'API & Webhook Integration',
    description: 'Connect your applications with external platforms, services and automate workflows through APIs and webhooks.',
    Icon: Plug,
    technologies: [
      'REST API',
      'Webhooks',
      'Third-party Integrations',
      'Authentication',
      'Data Mapping'
    ],
    featured: false
  },
  {
    id: 'ai-automation',
    title: 'AI & Automation',
    description: 'Build practical AI-powered automation workflows, integrate AI agents and automate repetitive tasks.',
    Icon: Bot,
    technologies: [
      'AI Agent',
      'Webhooks',
      'APIs',
      'Automation Workflow',
      'Process Automation'
    ],
    featured: false
  }
];