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
    "I'm Tamim Zia, a CSE student and Laravel-focused web developer who enjoys turning real-world business problems into practical, scalable software solutions. My primary focus is building web applications with Laravel, PHP, MySQL, Blade, Tailwind CSS, and REST APIs.",
    "I work across the full stack – from backend APIs and database design to frontend interfaces using Blade and Tailwind CSS. I specialize in Laravel development, API development, software quality assurance, and secure application development. I care about clean, maintainable code and the details that keep software reliable, secure and easy to build on over time.",
  ],
  highlights: [
    'Laravel / PHP Development',
    'REST API Development',
    'MySQL / Database Design',
    'Blade & Tailwind CSS',
    'Full Stack Web Development',
    'Software Quality Assurance',
    'Software Testing & Bug Detection',
    'Secure Software Development',
    'System Architecture',
    'Business-Focused Solutions',
  ],
}