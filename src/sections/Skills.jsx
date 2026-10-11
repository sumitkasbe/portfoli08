import { skillGroups } from "@/data/portfolio";
import { cn } from "@/lib/utils";
import { useState } from "react";
import {
  Code2,
  Globe,
  Server,
  Layers,
  Database,
  ShieldCheck,
  Wrench,
  TestTube2,
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

const techColors = {
  Java: "text-orange-400",
  JavaScript: "text-yellow-400",
  HTML5: "text-orange-500",
  CSS3: "text-blue-500",
  SQL: "text-cyan-400",
  "React.js": "text-cyan-400",
  "Tailwind CSS": "text-cyan-400",
  "Node.js": "text-green-500",
  "Express.js": "text-foreground/70",
  "Spring Boot": "text-green-500",
  MongoDB: "text-green-500",
  MySQL: "text-blue-400",
  "PostgreSQL / Supabase": "text-blue-400",
  "JWT Authentication": "text-purple-400",
  Git: "text-orange-500",
  GitHub: "text-foreground",
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
  Debugging: "text-orange-400",
  "Object-Oriented Programming": "text-purple-400",
  "REST API Development": "text-purple-400",
};

const categories = ["all", ...skillGroups.map((group) => group.title)];

export const Skills = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredGroups = skillGroups.filter(
    (group) => activeCategory === "all" || group.title === activeCategory
  );

  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          My <span className="text-primary">Skills</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          A practical set of programming languages, frameworks, databases,
          development tools, and core concepts I use across Java Full Stack and
          MERN projects.
        </p>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2 rounded-full transition-colors duration-300 capitalize text-sm",
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/70 text-foreground hover:bg-secondary"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredGroups.map((group) => {
            const CategoryIcon = categoryIcons[skillGroups.indexOf(group)] ?? Code2;

            return (
              <div
                key={group.title}
                className="bg-card p-6 rounded-lg shadow-xs card-hover text-left"
              >
                <div className="flex items-center gap-3 mb-5">
                  <div className="p-3 rounded-full bg-primary/10">
                    <CategoryIcon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg">{group.title}</h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => {
                    const TechIcon = techIcons[item];
                    return (
                      <div
                        key={item}
                        className="flex items-center gap-2 px-3 py-2 rounded-full border bg-secondary text-xs font-medium text-secondary-foreground"
                      >
                        {TechIcon && (
                          <TechIcon
                            className={`w-4 h-4 ${techColors[item] || "text-primary"}`}
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
