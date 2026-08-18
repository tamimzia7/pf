export interface Testimonial {
  id: string;
  quote: string;
  name: string;
  role?: string;
  company?: string;
  avatar?: string;
  project?: string;
  verified?: boolean;
}

export const testimonials: Testimonial[] = [];