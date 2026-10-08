export const personalInfo = {
  name: "Nalwoga Tracy",
  title: "Software Engineer & Full-Stack Developer",
  subtitle: "Specialized in Spring Boot, React, PostgreSQL & Modern Web Applications",
  tagline: "Crafting scalable, reliable full-stack solutions with modern backend architectures and responsive user interfaces.",
  age: 23,
  country: "Uganda 🇺🇬",
  location: "Kampala / Bugema, Uganda",
  university: "Bugema University",
  degree: "BSc in Software Engineering",
  graduationYear: "2026",
  status: "Available for Software Engineering Roles & Collaboration",
  email: "tracynalwoga@gmail.com",
  phone: "+256 784 123 456",
  github: "https://github.com/nalwogatracy",
  website: "https://nalwogatracy.github.io/",
  linkedin: "https://linkedin.com/in/nalwoga-tracy",
  whatsapp: "https://wa.me/256784123456",
  bioShort: "23-year-old Ugandan Software Engineer studying at Bugema University. Focused on enterprise backend systems with Spring Boot, interactive frontend interfaces with React, and optimized PostgreSQL database design.",
  bioLong: `Hello! I'm Nalwoga Tracy, a 23-year-old Ugandan software engineer currently studying at Bugema University. I am passionate about engineering high-impact software systems that empower organizations, local communities, and digital commerce.

My technical toolkit centers around Java, Spring Boot microservices & REST APIs, React frontend development, and PostgreSQL database management. I love taking complex business logic and transforming it into clean, maintainable, and user-friendly digital products.`,
  coreValues: [
    { title: "Robust Backend Engineering", desc: "Building reliable REST APIs, database schemas, and clean Spring Boot architectures." },
    { title: "User-Centered Frontend", desc: "Designing responsive, accessible, and intuitive UI components with React & Tailwind CSS." },
    { title: "Agile & Collaborative", desc: "Enthusiastic team player with strong communication skills and a commitment to continuous learning." },
    { title: "Impact-Driven Innovation", desc: "Leveraging technology to create solutions tailored for African business environments and global scale." }
  ],
  stats: [
    { label: "Featured Projects", value: "5+" },
    { label: "Core Tech Stack", value: "8+" },
    { label: "University", value: "Bugema Univ." },
    { label: "Status", value: "Ready to Hire" }
  ]
};

export const skillsData = {
  categories: [
    { id: "all", name: "All Skills" },
    { id: "backend", name: "Backend & Systems" },
    { id: "frontend", name: "Frontend & Web" },
    { id: "database", name: "Database & Tools" },
    { id: "practices", name: "Engineering Practices" }
  ],
  items: [
    // Backend
    { name: "Java", category: "backend", level: 90, icon: "Code", color: "from-amber-500 to-red-500" },
    { name: "Spring Boot", category: "backend", level: 88, icon: "Server", color: "from-emerald-500 to-green-600" },
    { name: "RESTful APIs", category: "backend", level: 92, icon: "Globe", color: "from-blue-500 to-indigo-600" },
    { name: "Spring Security & JWT", category: "backend", level: 82, icon: "Lock", color: "from-purple-500 to-indigo-500" },
    
    // Frontend
    { name: "React.js", category: "frontend", level: 88, icon: "Atom", color: "from-cyan-400 to-blue-500" },
    { name: "JavaScript (ES6+)", category: "frontend", level: 90, icon: "Zap", color: "from-yellow-400 to-amber-500" },
    { name: "TypeScript", category: "frontend", level: 80, icon: "FileCode", color: "from-blue-600 to-cyan-500" },
    { name: "HTML5 & CSS3", category: "frontend", level: 95, icon: "Layout", color: "from-orange-500 to-red-500" },
    { name: "Tailwind CSS & Bootstrap", category: "frontend", level: 90, icon: "Palette", color: "from-teal-400 to-cyan-600" },

    // Database & Tools
    { name: "PostgreSQL", category: "database", level: 86, icon: "Database", color: "from-blue-500 to-indigo-700" },
    { name: "MySQL / Relational DBs", category: "database", level: 85, icon: "HardDrive", color: "from-blue-400 to-cyan-600" },
    { name: "Git & GitHub", category: "database", level: 90, icon: "GitBranch", color: "from-orange-600 to-red-600" },
    { name: "Postman / API Testing", category: "database", level: 88, icon: "Send", color: "from-orange-500 to-amber-600" },
    { name: "Vercel & Cloud Deployment", category: "database", level: 82, icon: "Cloud", color: "from-slate-700 to-slate-900" },

    // Engineering Practices
    { name: "Agile Software Development", category: "practices", level: 88, icon: "CheckCircle2", color: "from-emerald-400 to-teal-600" },
    { name: "Clean Code & Refactoring", category: "practices", level: 90, icon: "CheckSquare", color: "from-blue-500 to-emerald-500" },
    { name: "Database Schema Design", category: "practices", level: 86, icon: "Layers", color: "from-indigo-500 to-purple-600" },
    { name: "Responsive Web Design", category: "practices", level: 94, icon: "Smartphone", color: "from-pink-500 to-purple-600" }
  ]
};

export const projectsData = [
  {
    id: "bugema-academic-connect",
    title: "Bugema Academic Connect",
    subtitle: "Academic Management & Student Collaboration Platform",
    category: "Full-Stack Web App",
    featured: true,
    badge: "University Ecosystem",
    description: "A comprehensive web application engineered specifically for Bugema University to streamline student academic tracking, assignment submissions, course resource sharing, and real-time faculty-student communications.",
    details: [
      "Role-based access control (Student, Lecturer, Administrator) securing academic records.",
      "RESTful API integration using Spring Boot with Spring Security JWT tokens.",
      "Interactive React dashboard with assignment submission tracking, grades breakdown, and resource library.",
      "PostgreSQL relational database schema design optimized for fast queries on course enrollments and transcripts."
    ],
    tech: ["Spring Boot", "Java", "React", "PostgreSQL", "Tailwind CSS", "REST API", "JWT"],
    github: "https://github.com/nalwogatracy/bugema-academic-connect",
    demo: "https://bugema-academic-connect.vercel.app",
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1200&auto=format&fit=crop"
  },
  {
    id: "invoicehub",
    title: "InvoiceHub",
    subtitle: "Automated Billing & Invoice Generation System",
    category: "FinTech / SaaS",
    featured: true,
    badge: "Enterprise SaaS",
    description: "An automated web platform designed for small-to-medium enterprises and freelancers to quickly generate professional invoices, track payment status, compute tax calculations, and export financial reports.",
    details: [
      "Dynamic client management system and customizable invoice template engine.",
      "Automated total, tax, and discount computations with multi-currency support.",
      "Instant PDF invoice download and email dispatch workflow using Spring Mailer.",
      "Payment tracking analytics chart visualizing paid vs overdue invoices."
    ],
    tech: ["Java", "Spring Boot", "React", "PostgreSQL", "Bootstrap", "PDF Generation"],
    github: "https://github.com/nalwogatracy/invoice-hub",
    demo: "https://invoicehub-tracy.vercel.app",
    image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=1200&auto=format&fit=crop"
  },
  {
    id: "it-market",
    title: "IT Market",
    subtitle: "E-Commerce Platform for IT Hardware & Software Services",
    category: "E-Commerce",
    featured: true,
    badge: "Digital Marketplace",
    description: "A feature-rich online marketplace bridging tech vendors and consumers in Uganda. Allows users to browse gadgets, IT hardware, and book software consultancy services seamlessly.",
    details: [
      "Product catalog with keyword search, category filtering, and sorting options.",
      "Persistent shopping cart state and checkout process.",
      "Admin panel for inventory management, product uploading, and order status updates.",
      "Responsive UI designed with Tailwind CSS for mobile and desktop shoppers."
    ],
    tech: ["React", "JavaScript", "Spring Boot API", "PostgreSQL", "Tailwind CSS"],
    github: "https://github.com/nalwogatracy/it-market",
    demo: "https://it-market-uganda.vercel.app",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop"
  },
  {
    id: "smart-farmer",
    title: "Smart Farmer",
    subtitle: "AgriTech Advisory & Market Price Platform for Local Farmers",
    category: "AgriTech",
    featured: true,
    badge: "Community Impact",
    description: "An impactful agricultural web platform developed to empower local Ugandan farmers with real-time crop market prices, crop disease diagnostic guides, weather advisories, and direct buyer connections.",
    details: [
      "Live market price updates for regional Ugandan produce (Maize, Coffee, Beans, Matooke).",
      "Interactive crop diagnostics portal helping farmers identify common crop diseases.",
      "Direct buyer inquiry portal fostering direct agricultural trade.",
      "Mobile-first responsive interface accessible on low-bandwidth networks."
    ],
    tech: ["React", "Spring Boot", "PostgreSQL", "CSS3", "REST API"],
    github: "https://github.com/nalwogatracy/smart-farmer",
    demo: "https://smart-farmer-ug.vercel.app",
    image: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?q=80&w=1200&auto=format&fit=crop"
  },
  {
    id: "christ-formed-church-website",
    title: "Christ Formed Church Website",
    subtitle: "Community Web Portal & Sermon Media Center",
    category: "Web Application",
    featured: false,
    badge: "Community Outreach",
    description: "A vibrant web application built for Christ Formed Church to facilitate community announcements, weekly service livestream links, sermon audio/video archives, and event registrations.",
    details: [
      "Sermon library categorized by series, topic, and speaker with media audio player.",
      "Church events calendar with online registration forms and notification updates.",
      "Prayer request portal allowing congregation members to submit private requests.",
      "Modern aesthetic optimized for desktop, tablet, and mobile browsers."
    ],
    tech: ["React", "HTML5", "CSS3", "JavaScript", "Spring Boot"],
    github: "https://github.com/nalwogatracy/christ-formed-church-web",
    demo: "https://christformedchurch.vercel.app",
    image: "https://images.unsplash.com/photo-1438232992991-995b7058bbb3?q=80&w=1200&auto=format&fit=crop"
  }
];

export const experienceData = [
  {
    role: "Full-Stack Software Engineering Student & Lead Project Developer",
    organization: "Bugema University",
    period: "2022 - Present",
    location: "Kampala, Uganda",
    type: "Academic & Hands-on Projects",
    highlights: [
      "Architected backend microservices and RESTful API endpoints using Java and Spring Boot for university project management.",
      "Designed PostgreSQL relational database schemas, applying normalization, indexed foreign keys, and stored procedures.",
      "Developed responsive frontend web interfaces in React.js integrated with state management and Tailwind CSS.",
      "Led student development teams in agile sprint planning, code reviews, and Git workflow management."
    ]
  },
  {
    role: "Software Engineering Intern / Peer Technical Collaborator",
    organization: "Tech Initiatives & Developer Circles Uganda",
    period: "2023 - 2024",
    location: "Kampala, Uganda",
    type: "Internship & Community",
    highlights: [
      "Collaborated on building real-world enterprise prototypes including InvoiceHub and IT Market.",
      "Participated in code refactoring sessions, optimizing REST API payload speeds and backend response times.",
      "Assisted in configuring web applications for cloud hosting on Vercel and backend deployment."
    ]
  }
];

export const educationData = {
  degree: "Bachelor of Science in Software Engineering",
  institution: "Bugema University",
  location: "Uganda 🇺🇬",
  period: "2022 - 2026",
  status: "Senior Year / Final Year Student (Age 23)",
  keyCoursework: [
    "Object-Oriented Programming (Java)",
    "Data Structures & Algorithms",
    "Database Systems & PostgreSQL",
    "Web Application Architecture (React, Spring Boot)",
    "Software Testing & Quality Assurance",
    "Agile Software Methodologies",
    "Network Security & Systems Administration"
  ],
  certifications: [
    {
      title: "Spring Boot Microservices & Enterprise Java",
      issuer: "Udemy / Tech Certifications",
      date: "2024",
      icon: "Award"
    },
    {
      title: "Full-Stack Web Development (React & Node/Java APIs)",
      issuer: "FreeCodeCamp & Dev Community",
      date: "2023",
      icon: "Award"
    },
    {
      title: "PostgreSQL Database Management & SQL Design",
      issuer: "Bugema Tech Forum",
      date: "2023",
      icon: "Award"
    }
  ]
};
