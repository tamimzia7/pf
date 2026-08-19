import { GitFork, Briefcase, Mail } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

export interface NavigationLink {
  id: string
  title: string
  url: string
}

export interface SocialLink {
  platform: string
  url: string
  icon: LucideIcon
}

export const navigationLinks: NavigationLink[] = [
  { id: 'home', title: 'Home', url: '#home' },
  { id: 'about', title: 'About', url: '#about' },
  { id: 'what-i-do', title: 'What I Do', url: '#what-i-do' },
  { id: 'skills', title: 'Skills', url: '#skills' },
  { id: 'projects', title: 'Projects', url: '#projects' },
  { id: 'services', title: 'Services', url: '#services' },
  { id: 'resume', title: 'Resume', url: '#resume' },
  { id: 'testimonials', title: 'Testimonials', url: '#testimonials' },
  { id: 'blog', title: 'Blog', url: '#blog' },
  { id: 'contact', title: 'Contact', url: '#contact' },
]

export const socialLinks: SocialLink[] = [
  {
    platform: 'GitHub',
    url: 'https://github.com/tamimzia7',
    icon: GitFork,
  },
  {
    platform: 'LinkedIn',
    url: 'https://linkedin.com/in/tamimzia',
    icon: Briefcase,
  },
  {
    platform: 'Email',
    url: 'mailto:tamimziaweb27@gmail.com',
    icon: Mail,
  },
]

export const hireMeText = 'Hire Me'