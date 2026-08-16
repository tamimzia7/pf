export interface Profile {
  name: string;
  title: string;
  bio: string;
  email: string;
  location?: string;
  avatar?: string;
}

export interface Project {
  id: string;
  name: string;
  description: string;
  technologies: string[];
  image?: string;
  url?: string;
  github?: string;
}

export interface Skill {
  name: string;
  level?: number; // 1-5
  category?: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon?: string;
}

export interface Experience {
  id: string;
  company: string;
  position: string;
  startDate: string; // ISO string or just year?
  endDate?: string;
  summary: string;
  technologies?: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  image?: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  tags?: string[];
}

export interface SocialLink {
  platform: string;
  url: string;
  icon?: string;
}