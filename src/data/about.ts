export interface AboutContent {
  label: string
  title: string
  paragraphs: string[]
  highlights: string[]
}

export const aboutContent: AboutContent = {
  label: 'WHO I AM',
  title: 'About Me',
  paragraphs: [
    "I'm Tamim Zia, a Full Stack Developer who enjoys turning real-world business problems into practical, scalable software solutions. My focus is not only on writing code, but also on understanding how a system should work, how users interact with it, and how an application can stay maintainable as it grows.",
    "I work across the full stack — from modern web interfaces to backend APIs, database design and system architecture. I care about clean, maintainable code and the details that keep software reliable, secure and easy to build on over time.",
  ],
  highlights: [
    'Full Stack Development',
    'Business-Focused Solutions',
    'API & Backend Development',
    'System & Database Design',
  ],
}