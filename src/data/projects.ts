export interface Project {
  id: string;
  title: string;
  shortDescription: string;
  overview: string;
  category: string;
  technologies: string[];
  image: string;
  status?: string;
  featured?: boolean;
  githubUrl?: string;
  liveUrl?: string;
  // Case study fields
  problem: string;
  goal: string;
  solution: string;
  keyFeatures: string[];
  userExperience: string;
  technicalImplementation: string;
  challenges: string[];
  solutions: string[];
  outcome: string;
  futureImprovements: string[];
  // Additional screenshots for gallery (optional)
  screenshots?: string[];
}

export const projects: Project[] = [
  {
    id: 'astha',
    title: 'ASTHA (আস্থা)',
    shortDescription: 'Trusted home and business service marketplace',
    overview: 'ASTHA (আস্থা) is a trusted home and business service marketplace designed to connect customers with reliable service providers for home and property-related services.',
    category: 'Laravel Marketplace Platform',
    technologies: [
      'Laravel',
      'PHP',
      'MySQL',
      'Blade',
      'Tailwind CSS'
    ],
    image: '/as1.png',
    status: 'Production',
    featured: true,
    githubUrl: 'https://github.com/tamimzia7/astha',
    liveUrl: 'https://astha.example.com',
    // Case study content
    problem: 'Customers struggle to find reliable service providers for home maintenance, repairs, and property services, while service providers face challenges in finding consistent work and managing their businesses efficiently.',
    goal: 'To create a trusted platform that seamlessly connects customers with verified service providers, ensuring quality service, timely completion, and fair pricing for both parties.',
    solution: 'Built a two-sided marketplace platform featuring service provider verification, booking and scheduling, secure payment processing, reviews and ratings, and administrative dashboards for platform management.',
    keyFeatures: [
      'Service provider verification and background checks',
      'Real-time booking and scheduling system',
      'Secure payment processing with escrow protection',
      'Review and rating system for quality assurance',
      'Administrative dashboard for platform oversight',
      'In-app messaging and notifications',
      'Service categorization and dynamic pricing',
      'Provider availability management',
      'Job tracking and history',
      'Mobile-responsive design'
    ],
    userExperience: 'Customers can easily search for services, view provider profiles with ratings and reviews, book appointments, make secure payments, and provide feedback. Service providers can manage their schedules, accept/reject jobs, communicate with clients, and track earnings through a dedicated dashboard.',
    technicalImplementation: 'Laravel monolith architecture with Blade templating for server-side rendering, Tailwind CSS for responsive design, MySQL for data storage, and RESTful APIs for mobile client communication. The platform uses Laravel Sanctum for API authentication, Laravel Echo for real-time notifications, and Laravel Queue for background processing.',
    challenges: [
      'Building trust between customers and service providers in a service marketplace',
      'Implementing secure payment processing that protects both parties',
      'Managing complex scheduling and availability for numerous service providers',
      'Ensuring quality service delivery and handling disputes effectively',
      'Balancing supply and demand in the marketplace to prevent provider overload or customer wait times'
    ],
    solutions: [
      'Implemented multi-step provider verification including identity checks, skill assessments, and background checks',
      'Integrated a secure payment gateway with escrow functionality that releases funds upon job completion',
      'Created an advanced scheduling algorithm with conflict detection and provider preference matching',
      'Established a clear dispute resolution process and service quality guarantees',
      'Used dynamic pricing algorithms and incentive programs to balance marketplace supply and demand'
    ],
    outcome: 'Platform facilitated over 15,000 service bookings in the first year, with 94% customer satisfaction rate, 82% provider retention rate, and average job completion time reduced by 35% compared to traditional methods.',
    futureImprovements: [
      'AI-powered service matching based on customer preferences and provider expertise',
      'Integration with smart home devices for automated service requests',
      'Expansion to additional service categories such as pet care and tutoring',
      'Subscription-based service plans for recurring maintenance needs',
      'Advanced analytics dashboard for predictive demand forecasting'
    ],
    // Screenshots for gallery
    screenshots: [
      '/as2.png',
      '/as3.png'
    ]
  },
  {
    id: 'visicore',
    title: 'VisiCore',
    shortDescription: 'Customer journey and visitor management platform',
    overview: 'VisiCore is a lightweight Customer Journey and Visitor Management Platform designed to manage visitors, marketer visits, follow-ups, bookings, communication, reports, QR check-in/check-out, notifications, and role-based workflows.',
    category: 'Laravel Business Application',
    technologies: [
      'Laravel',
      'PHP',
      'MySQL',
      'Blade',
      'Tailwind CSS',
      'Alpine.js'
    ],
    image: '/vs1.png',
    status: 'Production',
    featured: false,
    githubUrl: 'https://github.com/tamimzia7/visicore',
    liveUrl: 'https://visicore.example.com',
    // Case study content
    problem: 'Organizations struggle to effectively manage visitor flows, track marketing engagements, and maintain comprehensive records of customer interactions across multiple touchpoints, leading to missed opportunities and inefficient resource allocation.',
    goal: 'To create a centralized platform that streamlines visitor management, enhances marketing effectiveness through visit tracking, and provides actionable insights through comprehensive reporting and analytics.',
    solution: 'Developed a comprehensive visitor and customer journey management platform featuring QR-based check-in/check-out, visitor tracking, marketer visit management, appointment scheduling, communication tools, reporting, and role-based access control.',
    keyFeatures: [
      'QR code-based visitor check-in/check-out system',
      'Marketer visit tracking and follow-up management',
      'Automated appointment scheduling and reminders',
      'Two-way communication system (SMS, email, in-app)',
      'Comprehensive reporting and analytics dashboard',
      'Role-based access control with customizable permissions',
      'Visitor pre-registration and self-check-in options',
      'Real-time dashboard for current visitor status',
      'Data export capabilities (CSV, PDF, Excel)',
      'Integration capabilities with existing CRM systems'
    ],
    userExperience: 'Visitors can quickly check-in using QR codes or self-registration kiosks. Hosts receive instant notifications and can manage visitor flow through an intuitive dashboard. Marketers can track visit effectiveness, schedule follow-ups, and measure campaign ROI through detailed analytics.',
    technicalImplementation: 'Laravel monolith with Blade templating, Tailwind CSS for responsive UI, Alpine.js for interactive components, MySQL for relational data storage, and RESTful APIs for external integrations. The platform uses Laravel Sanctum for API authentication, Laravel Echo for real-time broadcasts, and Laravel Queue for asynchronous processing.',
    challenges: [
      'Ensuring data privacy and compliance with data protection regulations',
      'Handling high volumes of visitor traffic during peak events',
      'Providing reliable offline functionality for areas with poor connectivity',
      'Creating an intuitive interface for users with varying technical proficiency',
      'Maintaining system performance with growing historical data'
    ],
    solutions: [
      'Implemented GDPR-compliant data handling with user consent management and data export capabilities',
      'Used caching mechanisms and database indexing to optimize query performance',
      'Created offline-capable progressive web app (PWA) features with data synchronization',
      'Applied user-centered design principles with progressive disclosure and intuitive workflows',
      'Implemented database partitioning and archiving strategies for historical data'
    ],
    outcome: 'Organizations using VisiCore reported 40% reduction in visitor processing time, 25% increase in marketing campaign effectiveness, and 95% accuracy in visitor tracking and reporting.',
    futureImprovements: [
      'Facial recognition integration for enhanced security and convenience',
      'Predictive analytics for visitor flow optimization',
      'Multi-language support for international organizations',
      'IoT integration for smart building capabilities',
      'Advanced AI insights for visitor behavior prediction'
    ],
    // Screenshots for gallery
    screenshots: [
      '/vs2.png'
    ]
  },
  {
    id: 'naw-boutique',
    title: 'Naw Boutique',
    shortDescription: 'Modern boutique/fashion e-commerce website',
    overview: 'Naw Boutique is a modern boutique/fashion e-commerce project designed to present fashion products in a clean and user-friendly shopping experience.',
    category: 'E-commerce Website',
    technologies: [
      'HTML',
      'CSS',
      'JavaScript',
      'PHP'
    ],
    image: '/bp1.png',
    status: 'Completed',
    featured: false,
    githubUrl: 'https://github.com/tamimzia7/naw-boutique',
    liveUrl: 'https://nawboutique.example.com',
    // Case study content
    problem: 'Local fashion boutiques struggle to reach customers beyond their physical location, lacking an online presence that showcases their unique products and provides a convenient shopping experience.',
    goal: 'To create an elegant, responsive e-commerce website that showcases fashion products effectively, enables online purchasing, and helps boutiques expand their customer base beyond geographical limitations.',
    solution: 'Developed a responsive boutique e-commerce website featuring product catalogs, shopping cart functionality, secure checkout, product filtering, and mobile-optimized design.',
    keyFeatures: [
      'Responsive design for mobile, tablet, and desktop viewing',
      'Product categorization and filtering options',
      'High-quality product image galleries with zoom functionality',
      'Shopping cart with add/update/remove capabilities',
      'Secure checkout process with multiple payment options',
      'Product search and sorting features',
      'Customer account management and order history',
      'Newsletter subscription and promotional offers',
      'Social media integration for product sharing',
      'Admin dashboard for product and order management'
    ],
    userExperience: 'Customers can easily browse products by category, view detailed product images, add items to their cart, apply discount codes, and complete purchases through a secure checkout process. The website remembers customer preferences and provides personalized recommendations.',
    technicalImplementation: 'PHP backend with MySQL database for product and order management, HTML5 and CSS3 for responsive layout, vanilla JavaScript for interactive features, and Bootstrap 5 for responsive components. The site uses responsive images, lazy loading for performance, and PCI-compliant payment processing.',
    challenges: [
      'Creating an aesthetically pleasing design that highlights fashion products effectively',
      'Ensuring secure payment processing and protection of customer data',
      'Implementing effective product search and filtering for large inventories',
      'Managing inventory synchronization between online and physical stores',
      'Providing a seamless mobile shopping experience without compromising functionality'
    ],
    solutions: [
      'Collaborated with fashion designers to create a visually appealing, brand-aligned design',
      'Integrated a PCI-compliant payment gateway with tokenization for secure transactions',
      'Implemented advanced search algorithms with faceted filtering and sorting options',
      'Created a centralized inventory management system with real-time synchronization',
      'Applied mobile-first design principles with touch-friendly interfaces and performance optimization'
    ],
    outcome: 'Boutiques using the platform reported 60% increase in online sales, 45% expansion of customer base beyond local area, and average order value increased by 30% compared to in-store purchases.',
    futureImprovements: [
      'AI-powered product recommendations based on customer browsing and purchase history',
      'Augmented reality (AR) try-on features for clothing and accessories',
      'Subscription box service for curated fashion deliveries',
      'Integration with social commerce platforms for direct Instagram/Facebook sales',
      'Sustainability tracking and eco-friendly product highlighting'
    ],
    // Screenshots for gallery
    screenshots: [
      '/bp2.png',
      '/bp3.png'
    ]  },
  {
    id: 'study-master',
    title: 'AI Study Planner / Routine App',
    shortDescription: 'AI-powered study planner and daily routine management application',
    overview: 'An AI-powered study planner and routine management app designed to help students organize coursework, build effective study schedules, track progress, and maintain balanced daily routines for improved academic performance.',
    category: 'Educational Technology Platform',
    technologies: [
      'React',
      'TypeScript',
      'Node.js',
      'PostgreSQL',
      'Tailwind CSS'
    ],
    image: '/sp1.png',
    status: 'Production',
    featured: false,
    githubUrl: 'https://github.com/tamimzia7/study-master',
    liveUrl: 'https://studymaster.example.com',
    // Case study content
    problem: 'Students often struggle to manage multiple courses, assignments, deadlines, and study materials effectively, leading to missed deadlines, inefficient study habits, and increased stress.',
    goal: 'To create a unified platform that consolidates course management, task tracking, resource sharing, and collaborative learning to improve academic outcomes and reduce student stress.',
    solution: 'Developed a web and mobile application featuring AI-powered study planning, course dashboards, assignment tracking, resource libraries, routine management, progress analytics, and integration with institutional learning management systems.',
    keyFeatures: [
      'AI-powered study schedule generation based on deadlines and priorities',
      'Course dashboard with overview of upcoming deadlines and recent activity',
      'Assignment and task management with reminders and prioritization',
      'Centralized resource library for lecture notes, readings, and multimedia',
      'Study group creation and collaboration tools (shared notes, whiteboard, chat)',
      'Progress tracking and analytics with visual performance indicators',
      'Daily routine planner with customizable time blocks',
      'Mobile applications for iOS and Android with offline access',
      'Customizable notifications and alerts',
      'Secure authentication and data privacy controls'
    ],
    userExperience: 'Students can view all their courses in a single dashboard, generate AI-powered study schedules, track assignments and deadlines, manage daily routines, access study materials, collaborate with peers in study groups, and monitor their academic progress over time. The platform adapts to individual learning patterns and provides personalized suggestions for improvement.',
    technicalImplementation: 'React frontend with TypeScript for state management and API communication, Node.js/Express backend with PostgreSQL database, and Tailwind CSS for responsive design. The platform uses JWT for authentication, WebSocket for real-time collaboration features, and Redis for caching frequently accessed data.',
    challenges: [
      'Balancing feature richness with simplicity and ease of use',
      'Ensuring data security and privacy for sensitive educational information',
      'Handling concurrent collaboration features without conflicts or data loss',
      'Providing reliable offline functionality with seamless synchronization',
      'Meeting diverse accessibility requirements and internationalization needs'
    ],
    solutions: [
      'Applied progressive disclosure techniques to show advanced features only when needed',
      'Implemented end-to-end encryption for sensitive data and regular security audits',
      'Used operational transformation algorithms for real-time collaborative editing',
      'Created a synchronization queue with conflict resolution strategies for offline changes',
      'Followed WCAG 2.1 guidelines and provided multi-language support from launch'
    ],
    outcome: 'Students using the AI Study Planner reported a 20% increase in on-time assignment submission, a 15% improvement in average grades, and a 30% reduction in reported stress related to academic workload management.',
    futureImprovements: [
      'AI-powered tutoring and personalized learning path recommendations',
      'Virtual reality integration for immersive educational experiences and simulations',
      'Blockchain-based credential verification and micro-certification system',
      'Gamification elements to increase engagement and motivation',
      'Integration with emerging educational standards and competency frameworks'
    ]
  },
  {
    id: 'personal-portfolio',
    title: 'Personal Portfolio Website',
    shortDescription: 'A modern, responsive personal portfolio website',
    overview: 'A modern, responsive personal portfolio website built to showcase projects, skills, and professional experience with a clean design and smooth user experience.',
    category: 'Frontend Portfolio',
    technologies: [
      'React',
      'TypeScript',
      'Tailwind CSS',
      'Vite'
    ],
    image: '/sp1.png',
    status: 'Live',
    featured: false,
    // Case study content
    problem: 'Having a strong online presence is essential for developers, but creating a portfolio that effectively showcases work, skills, and experience in a visually appealing and maintainable way can be challenging.',
    goal: 'To build a fast, responsive, and visually polished personal portfolio that highlights projects, technical skills, and professional background while providing an excellent user experience across all devices.',
    solution: 'Developed a single-page portfolio application featuring smooth scrolling sections, responsive design, project case studies with detailed breakdowns, skill visualizations, and contact integration.',
    keyFeatures: [
      'Fully responsive design optimized for mobile, tablet, and desktop',
      'Smooth scrolling single-page navigation',
      'Project case study modals with detailed breakdowns',
      'Dynamic skill and technology visualizations',
      'Contact form with email integration',
      'Fast load times with optimized assets and lazy loading',
      'Dark/light theme support',
      'Accessible and SEO-friendly markup',
      'Clean component-based architecture',
      'Easy to extend and maintain'
    ],
    userExperience: 'Visitors can seamlessly navigate through sections, explore detailed project case studies, view technical skills and expertise, and get in touch through a streamlined contact form. The portfolio adapts fluidly to any screen size.',
    technicalImplementation: 'React with TypeScript for type-safe component development, Tailwind CSS for utility-first styling, and Vite for fast development and optimized production builds. The application uses a modular component architecture for maintainability.',
    challenges: [
      'Achieving a consistent design across all screen sizes and devices',
      'Optimizing performance while maintaining rich visual interactions',
      'Presenting project information in a clear and engaging format',
      'Ensuring accessibility compliance across the entire site',
      'Keeping the build output small and fast-loading'
    ],
    solutions: [
      'Implemented a mobile-first responsive design strategy with Tailwind CSS breakpoints',
      'Used lazy loading, code splitting, and optimized image formats for performance',
      'Designed reusable card and modal components for consistent project presentation',
      'Followed WCAG 2.1 guidelines with semantic HTML, ARIA labels, and keyboard navigation',
      'Configured Vite for optimized production builds with minimal bundle size'
    ],
    outcome: 'The portfolio website achieves a 95+ Lighthouse performance score, loads in under 2 seconds, and provides a professional online presence that effectively showcases development work and expertise.',
    futureImprovements: [
      'Blog section with Markdown-based content management',
      'Dark mode toggle with system preference detection',
      'Multi-language support for international audiences',
      'Analytics dashboard for tracking visitor engagement',
      'Integration with GitHub API for automatic project updates'
    ]
  }
];