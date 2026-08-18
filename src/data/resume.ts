export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string;
  responsibilities?: string[];
}

export interface Education {
  id: string;
  degree: string;
  institution: string;
  period: string;
  description?: string;
}

export interface ResumeData {
  summary: string;
  experience: Experience[];
  education: Education[];
}

export const resumeData: ResumeData = {
  summary: "Tamim Zia is a Full Stack Developer focused on building modern web applications, backend systems, APIs, databases and business-oriented software solutions.",
  experience: [
    {
      id: 'exp1',
      role: 'Full Stack Developer',
      company: 'Your Company Name',
      period: 'Jan 2020 - Present',
      description: 'Brief description of your role and responsibilities.',
      responsibilities: [
        'Developed and maintained web applications using React, TypeScript, and Node.js.',
        'Designed and implemented RESTful APIs and integrated with third-party services.',
        'Collaborated with cross-functional teams to deliver high-quality software.'
      ]
    }
  ],
  education: [
    {
      id: 'edu1',
      degree: 'Your Degree',
      institution: 'University Name',
      period: 'Sep 2015 - Jun 2019',
      description: 'Relevant coursework or achievements.'
    }
  ]
};