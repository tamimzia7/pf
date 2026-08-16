export interface SocialLink {
  platform: string
  url: string
  icon: React.ComponentType<{ size?: number }>
}

export const socialLinks: SocialLink[] = [
  {
    platform: 'GitHub',
    url: 'https://github.com/tamimzia',
    icon: () => null, // Placeholder - will be replaced with Lucide icon
  },
  {
    platform: 'LinkedIn',
    url: 'https://linkedin.com/in/tamimzia',
    icon: () => null,
  },
  {
    platform: 'Email',
    url: 'mailto:tamimzia@example.com',
    icon: () => null,
  },
]

export const navigationLinks = [
  { id: 'home', title: 'Home', url: '#home' },
  { id: 'about', title: 'About', url: '#about' },
  { id: 'skills', title: 'Skills', url: '#skills' },
  { id: 'projects', title: 'Projects', url: '#projects' },
  { id: 'services', title: 'Services', url: '#services' },
  { id: 'resume', title: 'Resume', url: '#resume' },
  { id: 'blog', title: 'Blog', url: '#blog' },
  { id: 'contact', title: 'Contact', url: '#contact' },
]

export const hireMeText = 'Hire Me'