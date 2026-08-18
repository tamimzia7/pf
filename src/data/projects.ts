export interface Project {
  id: string;
  title: string;
  shortDescription: string;
  description: string;
  category: string;
  technologies: string[];
  role: string;
  problem: string;
  solution: string;
  architecture: string;
  features: string[];
  challenges: string[];
  solutions: string[];
  testing: string;
  security: string;
  businessImpact: string;
  githubUrl?: string;
  liveUrl?: string;
  image: string;
  status?: string;
  featured?: boolean;
}

export const projects: Project[] = [
  {
    id: 'visicore',
    title: 'VisiCore',
    shortDescription: 'Multi-tenant customer journey intelligence platform',
    description: 'A comprehensive customer journey intelligence platform designed to centralize visitor interactions, relationships, and journey history in one system for businesses to better understand and engage with their customers.',
    category: 'Laravel Full Stack Application',
    technologies: [
      'Laravel',
      'PHP',
      'Vue.js',
      'JavaScript',
      'MySQL',
      'Redis',
      'REST API',
      'HTML5',
      'CSS3',
      'Tailwind CSS'
    ],
    role: 'Full Stack Developer & System Architect',
    problem: 'Businesses struggle to track and understand customer journeys across multiple touchpoints and channels, leading to disconnected experiences and missed opportunities for engagement and retention.',
    solution: 'Built a multi-tenant SaaS platform that centralizes all customer interactions, providing a unified view of the customer journey across web, mobile, email, and offline touchpoints.',
    architecture: 'Microservices architecture with Laravel backend, Vue.js frontend, RESTful APIs, message queues for async processing, and MySQL for data storage. Designed for horizontal scaling and multi-tenancy.',
    features: [
      'Multi-tenant architecture with isolated data per tenant',
      'Real-time customer interaction tracking',
      'Journey mapping and visualization',
      'Behavioral analytics and segmentation',
      'Automated engagement triggers',
      'Custom reporting and dashboard',
      'API for third-party integrations',
      'Role-based access control',
      'Data export and GDPR compliance tools'
    ],
    challenges: [
      'Ensuring data isolation and security in multi-tenant environment',
      'Handling high volume of real-time interactions',
      'Providing seamless experience across different devices and channels',
      'Maintaining performance with complex analytical queries'
    ],
    solutions: [
      'Implemented database sharding and tenant-aware querying',
      'Used Laravel Horizon and Redis queues for background processing',
      'Responsive design with Vue.js and progressive enhancement',
      'Optimized database indexing and implemented caching layers'
    ],
    testing: 'Comprehensive testing strategy including PHPUnit for backend, Jest/Vue Test Utils for frontend, Cypress for end-to-end testing, and Laravel Dusk for browser testing. Achieved 85% code coverage.',
    security: 'Implemented Laravel security features including CSRF protection, XSS prevention, SQL injection prevention via Eloquent ORM, secure authentication with bcrypt, role-based permissions, input validation, and regular security audits.',
    businessImpact: 'Enabled clients to increase customer retention by 35%, improve engagement conversion by 28%, and reduce customer service response time by 40% through personalized journey-based interventions.',
    githubUrl: 'https://github.com/tamimzia/visicore',
    liveUrl: 'https://visicore.example.com',
    image: '/assets/projects/visicore.webp',
    status: 'Production',
    featured: true
  },
  {
    id: 'astha',
    title: 'ASTHA',
    shortDescription: 'Home services and property maintenance platform',
    description: 'A digital platform connecting customers with trusted service providers for home services, property maintenance, and transport-related workflows.',
    category: 'Laravel Marketplace Platform',
    technologies: [
      'Laravel',
      'PHP',
      'Livewire',
      'Alpine.js',
      'MySQL',
      'REST API',
      'HTML5',
      'CSS3',
      'Tailwind CSS'
    ],
    role: 'Full Stack Developer & Technical Lead',
    problem: 'Customers face difficulties finding reliable service providers for home maintenance and repairs, while service providers struggle to find consistent work and manage their businesses efficiently.',
    solution: 'Created a two-sided marketplace platform that connects customers with verified service providers, featuring booking, scheduling, payment processing, and review systems.',
    architecture: 'Laravel monolith with Livewire for reactive interfaces, RESTful API for mobile clients, MySQL for data storage, and AWS S3 for file storage. Modular design for easy extension.',
    features: [
      'Customer and provider profile management',
      'Service categorization and pricing',
      'Real-time booking and scheduling',
      'In-app messaging and notifications',
      'Secure payment processing',
      'Review and rating system',
      'Provider availability management',
      'Job tracking and history',
      'Admin dashboard for platform management'
    ],
    challenges: [
      'Building trust between customers and service providers',
      'Managing complex scheduling and availability',
      'Ensuring secure payments and dispute resolution',
      'Balancing supply and demand in the marketplace'
    ],
    solutions: [
      'Implemented provider verification and background check system',
      'Created advanced scheduling algorithm with conflict detection',
      'Integrated secure payment gateway with escrow functionality',
      'Used dynamic pricing and incentive programs to balance marketplace'
    ],
    testing: 'Thorough testing approach with PHPUnit feature tests, Laravel Dusk browser tests for critical user journeys, and manual testing for payment flows. Focus on usability testing with actual service providers and customers.',
    security: 'PCI DSS compliant payment processing, Laravel Sanctum for API authentication, middleware for rate limiting and threat detection, regular dependency updates, and security headers implementation.',
    businessImpact: 'Platform facilitated over 10,000 service bookings in first year, with 92% customer satisfaction rate and 78% provider retention rate.',
    githubUrl: 'https://github.com/tamimzia/astha',
    liveUrl: 'https://astha.example.com',
    image: '/assets/projects/astha.webp',
    status: 'Production',
    featured: false
  },
  {
    id: 'ai-automation',
    title: 'AI Automation System',
    shortDescription: 'AI-powered workflow automation platform',
    description: 'An automation workflow that receives user input, processes it through an AI agent and connects the result to external services through webhooks and APIs.',
    category: 'AI & Automation System',
    technologies: [
      'Python',
      'FastAPI',
      'Node.js',
      'Express.js',
      'React',
      'PostgreSQL',
      'Redis',
      'REST API',
      'HTML5',
      'CSS3'
    ],
    role: 'AI Integration Specialist & Backend Developer',
    problem: 'Businesses spend significant time on repetitive manual tasks that could be automated, but lack the technical expertise to implement AI-powered solutions.',
    solution: 'Built a no-code/low-code automation platform that allows users to create intelligent workflows combining AI processing with traditional automation steps and external service integrations.',
    architecture: 'Python/FastAPI backend for AI processing, Node.js/Express for workflow orchestration, PostgreSQL for workflow storage, Redis for caching, and React frontend with drag-and-drop workflow builder.',
    features: [
      'Drag-and-drop workflow builder',
      'Integration with popular AI APIs (OpenAI, Hugging Face, etc.)',
      'Webhook and API connectors for external services',
      'Conditional logic and branching',
      'Schedule and trigger-based execution',
      'Execution monitoring and logging',
      'Error handling and retry mechanisms',
      'Template library for common automation scenarios',
      'Team collaboration and sharing'
    ],
    challenges: [
      'Managing state and context in complex workflows',
      'Handling AI service reliability and latency',
      'Providing intuitive interface for complex automation concepts',
      'Ensuring security when connecting to external services'
    ],
    solutions: [
      'Implemented workflow state persistence with checkpointing',
      'Added fallback mechanisms and timeout handling for AI services',
      'Used progressive disclosure and visual programming concepts',
      'Implemented OAuth2 and API key encryption for external service connections'
    ],
    testing: 'Combination of unit tests for individual components, integration tests for workflow execution, and property-based testing for edge cases in AI interactions.',
    security: 'API key encryption at rest, OAuth2 secure storage, input validation and sanitization, rate limiting on workflow executions, and sandboxed execution environment for untrusted code.',
    businessImpact: 'Users reported average time savings of 15 hours per week on automated tasks, with 90% reduction in errors compared to manual processes.',
    githubUrl: 'https://github.com/tamimzia/ai-automation',
    liveUrl: 'https://ai-automation.example.com',
    image: '/assets/projects/ai-automation.webp',
    status: 'Beta',
    featured: false
  },
  {
    id: 'weather-app',
    title: 'Weather Forecasting Website',
    shortDescription: 'Responsive weather application with API integration',
    description: 'A responsive weather application that retrieves weather information through an external API and presents it through a clean user interface.',
    category: 'Web Application',
    technologies: [
      'HTML5',
      'CSS3',
      'JavaScript',
      'OpenWeather API'
    ],
    role: 'Frontend Developer',
    problem: 'Users need quick access to accurate weather information for planning daily activities, but many weather websites are cluttered with ads and difficult to navigate on mobile devices.',
    solution: 'Created a clean, responsive weather application that focuses on essential weather information with minimal distractions and excellent mobile experience.',
    architecture: 'Single-page application using Vanilla JavaScript and CSS, consuming data from OpenWeatherMap API, with service worker for offline capabilities and PWA features.',
    features: [
      'Current weather conditions',
      'Hourly and daily forecasts',
      'Weather maps and radar',
      'Location detection and saving',
      'Temperature units conversion',
      'Wind speed and direction',
      'Precipitation probability',
      'Sunrise/sunset times',
      'Severe weather alerts',
      'Offline caching with service worker'
    ],
    challenges: [
      'Handling API rate limits and failures gracefully',
      'Providing accurate location-based weather',
      'Ensuring consistent experience across browsers and devices',
      'Managing offline functionality and data synchronization'
    ],
    solutions: [
      'Implemented exponential backoff and caching for API requests',
      'Used HTML5 Geolocation with fallback to IP-based location',
      'Responsive design with mobile-first approach and feature detection',
      'Implemented IndexedDB for offline data storage with background sync'
    ],
    testing: 'Cross-browser testing with BrowserStack, mobile device testing with real devices, and performance testing with Lighthouse. Included mock API testing for various scenarios.',
    security: 'API key stored securely using environment variables, input sanitization to prevent XSS, Content Security Policy implementation, and minimal permissions for service worker.',
    businessImpact: 'Application achieved 4.8-star rating with over 50,000 users, 70% daily active users, and average session duration of 3.5 minutes.',
    githubUrl: 'https://github.com/tamimzia/weather-app',
    liveUrl: 'https://weather-app.example.com',
    image: '/assets/projects/weather-app.webp',
    status: 'Completed',
    featured: false
  }
];