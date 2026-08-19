import { Code2, Server, LayoutDashboard, Database, Plug } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

export interface Capability {
  id: string
  title: string
  description: string
  icon: LucideIcon
}

export const capabilities: Capability[] = [
  {
    id: 'full-stack',
    title: 'Full Stack Development',
    description: 'Build modern web applications using React, TypeScript and Node.js.',
    icon: Code2,
  },
  {
    id: 'backend',
    title: 'Backend & API Development',
    description: 'Design secure and maintainable REST APIs, authentication systems and integrations.',
    icon: Server,
  },
  {
    id: 'business-software',
    title: 'Business Software',
    description: 'Build dashboards, management systems and workflow-based applications for real-world business needs.',
    icon: LayoutDashboard,
  },
  {
    id: 'database-design',
    title: 'Database & System Design',
    description: 'Design structured data models and scalable application architecture.',
    icon: Database,
  },
  {
    id: 'api-integration',
    title: 'API Integration',
    description: 'Connect applications with third-party APIs, webhooks and external services.',
    icon: Plug,
  },
]