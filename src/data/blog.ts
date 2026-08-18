export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  category: string;
  publishedAt?: string;
  readTime?: string;
  image?: string;
  tags?: string[];
  url?: string;
  featured?: boolean;
}

export const blogPosts: BlogPost[] = [];