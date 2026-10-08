import profilePic from "@/assets/profilePic.png";
import TripNest from "@/assets/TripNest.png";
import RepairWalla from "@/assets/RepairWalla.png";
import TradeFlow from "@/assets/TradeFlow.png";

export const profile = {
  name: "Sumit Kasbe",
  initials: "Sumit Kasbe",
  profilePic,
  title: "Computer Engineering Graduate & Full-Stack Developer",
  badge: "Full Stack Developer • Java & MERN",
  headlineLead: "Building",
  headlineHighlight: "modern",
  headlineRest: "web applications",
  headlineItalic: "with purpose.",
  summary:
    "Hi, I'm Sumit Kasbe — a Computer Engineering graduate and full-stack developer with knowledge of Java, Spring Boot, React.js, Node.js, and modern web technologies. I enjoy turning ideas into practical, user-friendly applications.",
  about: [
    "I am a Computer Engineering graduate from Government Engineering College, Daman, with a strong interest in full-stack web development. I work across Java Full Stack and the MERN stack, and I enjoy building applications that are responsive, reliable, and easy to use.",
    "Through project-based internships, I contributed to dashboards, portals, and e-commerce applications, and I developed responsive interfaces with HTML, CSS, and JavaScript. I also gained practical experience in testing, validation, debugging, and identifying issues.",
    "I build complete web applications using Java, Spring Boot, React.js, Node.js, Express.js, MongoDB, SQL, and related tools such as REST APIs, JWT authentication, Git, GitHub, Docker, and Postman. I am focused on writing clean code, solving problems, and continuously improving as a developer.",
  ],
  quote:
    "My goal is to build efficient, user-focused applications while continuously learning. I believe good software comes from clear problem-solving, thoughtful interfaces, and a willingness to keep improving.",
  availability: "Open to Opportunities",
  availabilityNote:
    "I'm currently looking for full-time opportunities where I can contribute to real-world projects, strengthen my development skills, and grow as a full-stack developer.",
  location: "Pune, Maharashtra, India",
  email: "sumitkasbe8382@gmail.com",
  phone: "+91 6355949869",
  phoneHref: "tel:+916355949869",
  github: "https://github.com/sumitkasbe",
  linkedin: "https://www.linkedin.com/in/sumit-kasbe-604b35371",
  resumePath: `${import.meta.env.VITE_BASE_URL}/Sumit_Kasbe_Resume.html`,
};

export const navLinks = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#education", label: "Education" },
];

export const heroSkills = [
  "Java",
  "JavaScript",
  "SQL",
  "React.js",
  "HTML",
  "CSS",
  "Tailwind CSS",
  "Node.js",
  "Express.js",
  "Spring Boot",
  "MySQL",
  "MongoDB",
  "PostgreSQL",
  "REST APIs",
  "JWT",
  "Docker",
  "Redis",
  "Git",
  "GitHub",
  "Postman",
];

export const skillGroups = [
  {
    title: "Programming Languages",
    type: "languages",
    items: ["Java", "JavaScript", "SQL"],
  },
  {
    title: "Frontend Development",
    type: "frontend",
    items: ["React.js", "HTML5", "CSS3", "Tailwind CSS"],
  },
  {
    title: "Backend Development",
    type: "backend",
    items: [
      "Node.js",
      "Express.js",
      "Spring Boot",
      "REST APIs",
      "JWT Authentication",
    ],
  },
  {
    title: "Full-Stack Development",
    type: "fullstack",
    items: ["MERN Stack", "Java Full Stack"],
  },
  {
    title: "Database Management",
    type: "database",
    items: ["MySQL", "MongoDB", "PostgreSQL / Supabase"],
  },
  {
    title: "Core Engineering Concepts",
    type: "concepts",
    items: [
      "Object-Oriented Programming",
      "REST API Development",
      "Authentication",
      "Role-Based Access Control",
      "API Integration",
    ],
  },
  {
    title: "Software Testing",
    type: "testing",
    items: [
      "UI Testing",
      "Functional Testing",
      "Validation & Debugging",
    ],
  },
  {
    title: "Development Tools",
    type: "tools",
    items: [
      "Git",
      "GitHub",
      "Docker",
      "Redis",
      "Postman",
      "VS Code",
    ],
  },
];

export const experiences = [
  {
    period: "6 Months",
    role: "Web Developer Intern",
    company: "ThunderCube Pvt. Ltd.",
    type: "Project-Based Internship",
    description:
      "Worked as a Web Developer during a 6-month project-based internship. Contributed to dashboards, portals, and e-commerce applications, and performed testing, validation, debugging, and issue identification.",
    technologies: [
      "Web Development",
      "Dashboards",
      "Portals",
      "E-commerce",
      "Testing",
      "Debugging",
    ],
    current: false,
  },
  {
    period: "1 Month",
    role: "Frontend Web Developer Intern",
    company: "IBM SkillsBuild × CSRBOX",
    type: "Project-Based Internship",
    description:
      "Completed a project-based Frontend Web Development internship. Developed responsive and user-friendly interfaces using HTML, CSS, and JavaScript, and gained practical experience in frontend development, UI implementation, and responsive web design.",
    technologies: ["HTML", "CSS", "JavaScript", "Responsive Design"],
    current: false,
  },
];

export const projects = [
  {
    title: "RepairWalla",
    subtitle: "Hyperlocal Service Marketplace",
    image: RepairWalla,
    description:
      "A full-stack marketplace where users can book local services. Includes service request management, role-based dashboards, provider verification, booking management, JWT authentication, Redis integration, and Docker-based deployment.",
    tags: [
      "React.js",
      "Node.js",
      "Express.js",
      "PostgreSQL (Supabase)",
      "Redis",
      "Tailwind CSS",
      "JWT",
      "Docker",
    ],
    liveDemo: "https://repair-walla.vercel.app/",
    github: "https://github.com/sumitkasbe/Hyperlocal-Service-Marketplace",
  },
  {
    title: "TripNest",
    subtitle: "Property Rental Web App",
    image: TripNest,
    description:
      "A major full-stack property rental application with property listings, search, booking, secure authentication, and image uploads. Built with MVC architecture, Cloudinary for media, and deployed on Render.",
    tags: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "Mongoose",
      "Cloudinary",
      "HTML",
      "CSS",
      "JavaScript",
    ],
    liveDemo: "https://tripnest-gewl.onrender.com/",
    github: "https://github.com/sumitkasbe/TripNest",
  },
  {
    title: "TradeFlow",
    subtitle: "Stock Trading Platform",
    image: TradeFlow,
    description:
      "A full-stack trading platform inspired by modern stock trading applications, featuring authentication, dashboards, holdings, positions, and portfolio management.",
    tags: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "REST APIs",
      "JWT",
      "Postman",
      "Tailwind CSS",
    ],
    liveDemo: "https://tradeflowfrontend.onrender.com",
    github: "YOUR_TRADEFLOW_GITHUB_URL",
  },
];

export const education = [
  {
    school: "Government Engineering College, Daman",
    program: "Bachelor of Engineering (B.E.) in Computer Engineering",
    period: "2022 – 2026",
    detail: "CGPA: 7.89/10",
  },
  {
    school: "Maharashtra State Board of Secondary & Higher Secondary Education, Pune",
    program: "XII – HSC (Science)",
    period: "2020 – 2022",
    detail: "60%",
  },
  {
    school: "Maharashtra State Board of Secondary & Higher Secondary Education, Pune",
    program: "X – SSC",
    period: "2020",
    detail: "78%",
  },
];

export const certifications = [
  {
    title: "Click, Code, Create: Beginner’s Guide to Frontend Web Development",
    issuer: "IBM • SkillsBuild CSRBOX",
  },
  {
    title: "Delta MERN Stack Web Development",
    issuer: "Apna College",
  },
  {
    title: "Java Full Stack Development",
    issuer: "Kiran Academy",
  },
];

export const highlights = [
  {
    title: "Full Stack Development",
    description:
      "Building responsive frontend applications with React and developing backend APIs with Node.js and Spring Boot.",
  },
  {
    title: "Internship Experience",
    description:
      "Contributed to dashboards, portals, and e-commerce applications, and built responsive user interfaces during project-based internships.",
  },
  {
    title: "Problem Solving",
    description:
      "Comfortable with testing, validation, debugging, and identifying issues to deliver practical, working solutions.",
  },
  {
    title: "Continuous Learning",
    description:
      "Continuously improving Java Full Stack and MERN skills by applying them to real projects and user-focused applications.",
  },
];
