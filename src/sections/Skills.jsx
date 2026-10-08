import { skillGroups } from "@/data/portfolio";

import {
  Code2,
  Globe,
  Server,
  Layers,
  Database,
  ShieldCheck,
  Wrench,
  TestTube2,
  FileCode2,
  Braces,
  Monitor,
} from "lucide-react";

import {
  FaJava,
  FaJs,
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaDocker,
} from "react-icons/fa";

import {
  SiTailwindcss,
  SiExpress,
  SiSpringboot,
  SiMongodb,
  SiMysql,
  SiPostgresql,
  SiRedis,
  SiPostman,
  SiJsonwebtokens,
  SiApachemaven,
} from "react-icons/si";


// --------------------------------------------------
// Category Icons
// --------------------------------------------------

const categoryIcons = [
  Code2,
  Globe,
  Server,
  Layers,
  Database,
  ShieldCheck,
  TestTube2,
  Wrench,
];


// --------------------------------------------------
// Technology Icons
// --------------------------------------------------

const techIcons = {
  Java: FaJava,
  JavaScript: FaJs,

  HTML5: FaHtml5,
  CSS3: FaCss3Alt,
  SQL: Database,

  "React.js": FaReact,
  "Tailwind CSS": SiTailwindcss,

  "Node.js": FaNodeJs,
  "Express.js": SiExpress,
  "Spring Boot": SiSpringboot,

  MongoDB: SiMongodb,
  MySQL: SiMysql,
  "PostgreSQL / Supabase": SiPostgresql,

  "JWT Authentication": SiJsonwebtokens,

  Git: FaGitAlt,
  GitHub: FaGithub,
  Docker: FaDocker,
  Redis: SiRedis,
  Postman: SiPostman,
  Maven: SiApachemaven,

  "VS Code": Monitor,

  "MERN Stack": Layers,
  "Java Full Stack": Code2,

  "REST APIs": Server,
  Authentication: ShieldCheck,
  "Role-Based Access Control": ShieldCheck,
  "API Integration": Braces,

  "UI Testing": TestTube2,
  "Functional Testing": TestTube2,
  "Validation & Debugging": ShieldCheck,
  Debugging: Wrench,

  "Object-Oriented Programming": Code2,
  "REST API Development": Server,
};


// --------------------------------------------------
// Technology Icon Colors
// --------------------------------------------------

const techColors = {
  Java: "text-orange-400",
  JavaScript: "text-yellow-400",

  HTML5: "text-orange-500",
  CSS3: "text-blue-500",
  SQL: "text-cyan-400",

  "React.js": "text-cyan-400",
  "Tailwind CSS": "text-cyan-400",

  "Node.js": "text-green-500",
  "Express.js": "text-gray-300",
  "Spring Boot": "text-green-500",

  MongoDB: "text-green-500",
  MySQL: "text-blue-400",
  "PostgreSQL / Supabase": "text-blue-400",

  "JWT Authentication": "text-purple-400",

  Git: "text-orange-500",
  GitHub: "text-white",
  Docker: "text-blue-400",
  Redis: "text-red-500",
  Postman: "text-orange-500",
  Maven: "text-red-400",

  "VS Code": "text-blue-400",

  "MERN Stack": "text-green-400",
  "Java Full Stack": "text-orange-400",

  "REST APIs": "text-purple-400",
  Authentication: "text-cyan-400",
  "Role-Based Access Control": "text-green-400",
  "API Integration": "text-blue-400",

  "UI Testing": "text-indigo-400",
  "Functional Testing": "text-green-400",
  Validation: "text-cyan-400",
  Debugging: "text-orange-400",

  "Object-Oriented Programming": "text-purple-400",
  "REST API Development": "text-purple-400",
};

// --------------------------------------------------
// Skills Component
// --------------------------------------------------

export const Skills = () => {
  return (
    <section
      id="skills"
      className="py-32 relative overflow-hidden"
    >

      {/* Background Glow */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

      <div className="absolute bottom-0 left-0 w-80 h-80 bg-highlight/5 rounded-full blur-3xl" />


      <div className="container mx-auto px-6 relative z-10">

        {/* Section Heading */}
        <div className="text-center mx-auto max-w-3xl mb-16">

          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
            Tech Stack
          </span>

          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
            Skills I use to{" "}
            <span className="font-serif italic font-normal text-white">
              build with.
            </span>
          </h2>

          <p className="text-muted-foreground animate-fade-in animation-delay-200">
            A practical set of programming languages, frameworks, databases,
            development tools, and core concepts I use across Java Full Stack
            and MERN projects.
          </p>

        </div>


        {/* Skills Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">

          {skillGroups.map((group, idx) => {

            const CategoryIcon =
              categoryIcons[idx] ?? Code2;

            return (
              <div
                key={group.title}
                className="
                  group
                  glass
                  p-6
                  rounded-2xl
                  border
                  border-border/50
                  hover:border-primary/30
                  hover:bg-card/80
                  transition-all
                  duration-300
                  animate-fade-in
                "
                style={{
                  animationDelay: `${(idx + 1) * 100}ms`,
                }}
              >

                {/* Category Header */}
                <div className="flex items-center gap-4 mb-6">

                  <div
                    className="
                      w-11
                      h-11
                      rounded-xl
                      bg-primary/10
                      border
                      border-primary/10
                      flex
                      items-center
                      justify-center
                      group-hover:bg-primary/15
                      transition-colors
                    "
                  >
                    <CategoryIcon className="w-5 h-5 text-primary" />
                  </div>

                  <h3 className="text-base md:text-lg font-semibold">
                    {group.title}
                  </h3>

                </div>


                {/* Technology Tags */}
                <div className="flex flex-wrap gap-2">

                  {group.items.map((item) => {

                    const TechIcon = techIcons[item];

                    return (
                      <div
                        key={item}
                        className="
                          flex
                          items-center
                          gap-2
                          px-3
                          py-2
                          rounded-lg
                          bg-surface
                          border
                          border-border/50
                          text-xs
                          font-medium
                          text-muted-foreground
                          hover:text-foreground
                          hover:border-primary/40
                          hover:bg-primary/5
                          transition-all
                          duration-300
                        "
                      >

                        {TechIcon && (
                          <TechIcon
                            className={`w-4 h-4 ${
                              techColors[item] || "text-primary"
                            }`}
                          />
                        )}

                        <span>{item}</span>

                      </div>
                    );
                  })}

                </div>

              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
};