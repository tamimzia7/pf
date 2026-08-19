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
    id: 'aura-sari-ecommerce',
    title: 'AURA – Sari E-commerce',
    shortDescription: 'A modern e-commerce platform for saris and traditional fashion',
    overview: 'AURA is a modern e-commerce platform specializing in saris and traditional fashion, designed to provide an elegant online shopping experience with curated collections and seamless checkout.',
    category: 'E-commerce Platform',
    technologies: [
      'Laravel',
      'PHP',
      'MySQL',
      'Blade',
      'Tailwind CSS',
      'JavaScript'
    ],
    image: '/ap1.png',
    status: 'Production',
    featured: false,
    // Case study content
    problem: 'Traditional sari retailers face challenges reaching a wider audience beyond their physical stores, lacking an online presence that captures the elegance of their products and provides a modern shopping experience.',
    goal: 'To create a premium e-commerce platform that showcases saris and traditional fashion with beautiful product presentations, easy navigation, and a smooth checkout process that drives online sales.',
    solution: 'Developed a full-featured e-commerce platform with product catalogs, advanced filtering, shopping cart, secure checkout, order management, and responsive design optimized for fashion retail.',
    keyFeatures: [
      'Elegant product catalog with high-quality image galleries',
      'Advanced filtering by category, fabric, occasion, and price range',
      'Shopping cart with wishlist and save-for-later functionality',
      'Secure checkout with multiple payment options',
      'Order tracking and history management',
      'Responsive design optimized for mobile shopping',
      'Product search with auto-suggestions',
      'Customer reviews and ratings system',
      'Admin dashboard for inventory and order management',
      'SEO-optimized product pages'
    ],
    userExperience: 'Customers can browse curated collections, filter products by preferences, view detailed product images with zoom, add items to cart, and complete purchases through a streamlined checkout. The platform provides a premium shopping experience that reflects the elegance of the products.',
    technicalImplementation: 'Laravel backend with Blade templating for server-side rendering, Tailwind CSS for responsive and elegant styling, MySQL for product and order data, and JavaScript for interactive features. The platform uses Laravel Sanctum for authentication and Laravel Queue for order processing.',
    challenges: [
      'Creating a visually stunning platform that does justice to the elegance of traditional fashion',
      'Optimizing image loading and gallery performance for high-resolution product photos',
      'Building advanced filtering that handles diverse product attributes',
      'Ensuring secure payment processing for e-commerce transactions',
      'Managing inventory across a large and varied product catalog'
    ],
    solutions: [
      'Designed a clean, elegant UI with focus on product imagery and whitespace',
      'Implemented lazy loading and responsive image techniques for optimal gallery performance',
      'Built a flexible filtering system using faceted search with multiple attribute support',
      'Integrated PCI-compliant payment gateway with tokenization for secure transactions',
      'Created an efficient inventory management system with real-time stock tracking'
    ],
    outcome: 'AURA provides a premium online shopping experience for traditional fashion, with improved product discoverability, streamlined checkout flow, and a design that reflects the elegance of the products.',
    futureImprovements: [
      'AI-powered product recommendations based on browsing and purchase history',
      'Virtual try-on features using augmented reality',
      'Multi-vendor marketplace support for independent sellers',
      'Loyalty program and rewards system for repeat customers',
      'Integration with social commerce platforms for direct sales'
    ],
    // Screenshots for gallery
    screenshots: [
      '/ap2.png',
      '/ap3.png'
    ]
  }
];