import { AnimatedBorderButton } from "@/components/AnimatedBorderButton";
import { profile } from "@/data/portfolio";
import { ArrowDown, Download } from "lucide-react";
import {
  FaGithub,
  FaLinkedin,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaJava,
  FaGitAlt,
} from "react-icons/fa6";
import {
  SiTailwindcss,
  SiExpress,
  SiSpringboot,
  SiMongodb,
  SiMysql,
  SiPostgresql,
  SiDocker,
  SiRedis,
  SiPostman,
} from "react-icons/si";

const technologies = [
  { name: "HTML5", icon: FaHtml5, color: "text-orange-500" },
  { name: "CSS3", icon: FaCss3Alt, color: "text-blue-500" },
  { name: "JavaScript", icon: FaJs, color: "text-yellow-400" },
  { name: "React.js", icon: FaReact, color: "text-cyan-400" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-cyan-400" },
  { name: "Node.js", icon: FaNodeJs, color: "text-green-500" },
  { name: "Express.js", icon: SiExpress, color: "text-foreground/70" },
  { name: "Java", icon: FaJava, color: "text-orange-400" },
  { name: "Spring Boot", icon: SiSpringboot, color: "text-green-500" },
  { name: "MySQL", icon: SiMysql, color: "text-blue-400" },
  { name: "MongoDB", icon: SiMongodb, color: "text-green-500" },
  { name: "PostgreSQL", icon: SiPostgresql, color: "text-blue-400" },
  { name: "Docker", icon: SiDocker, color: "text-blue-400" },
  { name: "Redis", icon: SiRedis, color: "text-red-500" },
  { name: "Git", icon: FaGitAlt, color: "text-orange-500" },
  { name: "Postman", icon: SiPostman, color: "text-orange-500" },
];

export const Hero = () => {
  const [firstName, lastName] = profile.name.split(" ");

  return (
    <section
  id="home"
  className="relative min-h-screen flex flex-col items-center px-4 pt-24 pb-24"
>
      <div className="container max-w-6xl mx-auto z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 text-center lg:text-left">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
              <span className="opacity-0 animate-fade-in">Hi, I'm</span>
              <span className="text-primary opacity-0 animate-fade-in-delay-1">
                {" "}
                {firstName}
              </span>
              <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2">
                {lastName}
              </span>
            </h1>

            <p className="text-sm uppercase tracking-[0.2em] text-primary opacity-0 animate-fade-in-delay-3">
              {profile.title}
            </p>

            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto lg:mx-0 opacity-0 animate-fade-in-delay-3">
              {profile.summary}
            </p>

            <div className="flex flex-wrap gap-4 pt-2 justify-center lg:justify-start opacity-0 animate-fade-in-delay-4">
              <a href="#projects" className="cosmic-button">
                View My Work
              </a>
              <AnimatedBorderButton
                href={profile.resumePath}
                download="Sumit_Kasbe_Resume.pdf"
              >
                <Download className="w-4 h-4" />
                Download Resume
              </AnimatedBorderButton>
            </div>

            <div className="flex items-center gap-4 justify-center lg:justify-start opacity-0 animate-fade-in-delay-4">
              {[
                { icon: FaGithub, href: profile.github, label: "GitHub" },
                { icon: FaLinkedin, href: profile.linkedin, label: "LinkedIn" },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="p-2 rounded-full bg-primary/10 text-foreground/80 hover:text-primary transition-colors"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          <div className="relative max-w-sm mx-auto opacity-0 animate-fade-in-delay-2">
            <div className="absolute inset-0 rounded-full bg-primary/20 blur-3xl" />
            <div className="relative bg-card rounded-2xl p-3 shadow-lg card-hover">
              <div className="rounded-xl overflow-hidden aspect-[4/5]">
                <img
                  src={profile.profilePic}
                  alt={`${profile.name} profile`}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-3 -right-3 bg-card border border-border rounded-xl px-4 py-3 shadow-md animate-float">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                  <span className="text-sm font-medium">
                    {profile.availability}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-20 w-full pb-8">
          <p className="text-sm text-muted-foreground mb-6 text-center uppercase tracking-[0.2em]">
            Technologies I Work With
          </p>
          <div className="relative overflow-hidden">
            <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
            <div className="flex gap-4 w-max animate-marquee">
              {[...technologies, ...technologies].map((tech, idx) => {
                const TechIcon = tech.icon;
                return (
                  <div
                    key={`${tech.name}-${idx}`}
                    className="flex items-center gap-3 px-5 py-3 rounded-xl border border-border bg-card flex-shrink-0 card-hover"
                  >
                    <TechIcon className={`w-6 h-6 ${tech.color}`} />
                    <span className="text-sm font-semibold text-muted-foreground whitespace-nowrap">
                      {tech.name}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center animate-bounce text-muted-foreground hover:text-primary transition-colors"
      >
        <span className="text-sm mb-2">Scroll</span>
        <ArrowDown className="h-5 w-5 text-primary" />
      </a>
    </section>
  );
};
