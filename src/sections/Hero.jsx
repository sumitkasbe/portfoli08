import { Button } from "@/components/Button";
import { AnimatedBorderButton } from "@/components/AnimatedBorderButton";
import { heroSkills, profile } from "@/data/portfolio";
import { ArrowRight, ChevronDown, Download } from "lucide-react";
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

const dots = [
  { left: 8, top: 18, duration: 18, delay: 0.4 },
  { left: 22, top: 8, duration: 22, delay: 1.2 },
  { left: 41, top: 14, duration: 16, delay: 2.1 },
  { left: 63, top: 10, duration: 24, delay: 0.8 },
  { left: 81, top: 22, duration: 19, delay: 3.1 },
  { left: 92, top: 7, duration: 21, delay: 1.6 },
  { left: 12, top: 42, duration: 17, delay: 2.8 },
  { left: 28, top: 58, duration: 25, delay: 0.2 },
  { left: 47, top: 36, duration: 20, delay: 4.1 },
  { left: 58, top: 48, duration: 18, delay: 1.9 },
  { left: 74, top: 39, duration: 23, delay: 3.6 },
  { left: 88, top: 55, duration: 16, delay: 2.4 },
  { left: 6, top: 72, duration: 21, delay: 0.6 },
  { left: 19, top: 86, duration: 19, delay: 4.5 },
  { left: 36, top: 78, duration: 26, delay: 1.1 },
  { left: 52, top: 88, duration: 17, delay: 2.7 },
  { left: 69, top: 74, duration: 22, delay: 0.9 },
  { left: 84, top: 81, duration: 20, delay: 3.4 },
  { left: 95, top: 68, duration: 18, delay: 1.5 },
  { left: 33, top: 24, duration: 24, delay: 4.8 },
];

const technologies = [
  { name: "HTML5", icon: FaHtml5, color: "text-orange-500" },
  { name: "CSS3", icon: FaCss3Alt, color: "text-blue-500" },
  { name: "JavaScript", icon: FaJs, color: "text-yellow-400" },
  { name: "React.js", icon: FaReact, color: "text-cyan-400" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-cyan-400" },
  { name: "Node.js", icon: FaNodeJs, color: "text-green-500" },
  { name: "Express.js", icon: SiExpress, color: "text-gray-300" },
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
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      <div className="absolute inset-0">
        <div className="w-full h-full bg-[radial-gradient(circle_at_20%_20%,rgba(32,178,166,0.18),transparent_35%),radial-gradient(circle_at_80%_10%,rgba(245,166,35,0.08),transparent_30%),linear-gradient(180deg,#141a1f_0%,#0f1418_100%)]" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/80 to-background" />
      </div>

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {dots.map((dot, i) => (
          <div
            key={i}
            className="absolute w-1.5 h-1.5 rounded-full opacity-60"
            style={{
              backgroundColor: "#20B2A6",
              left: `${dot.left}%`,
              top: `${dot.top}%`,
              animation: `slow-drift ${dot.duration}s ease-in-out infinite`,
              animationDelay: `${dot.delay}s`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="animate-fade-in">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-primary">
                <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                {profile.badge}
              </span>
            </div>

            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight animate-fade-in animation-delay-100">
                {profile.headlineLead}{" "}
                <span className="text-primary glow-text">
                  {profile.headlineHighlight}
                </span>
                <br />
                {profile.headlineRest}
                <br />
                <span className="font-serif italic font-normal text-white">
                  {profile.headlineItalic}
                </span>
              </h1>

              <p className="text-sm uppercase tracking-[0.2em] text-primary/80 animate-fade-in animation-delay-200">
                {profile.title}
              </p>

              <p className="text-lg text-muted-foreground max-w-lg animate-fade-in animation-delay-200">
                {profile.summary}
              </p>
            </div>

            <div className="flex flex-wrap gap-4 animate-fade-in animation-delay-300">
              <Button size="lg" href="#contact">
                Contact Me
                <ArrowRight className="w-5 h-5" />
              </Button>

              <AnimatedBorderButton
                href={profile.resumePath}
                download="Sumit_Kasbe_Resume.pdf"
              >
                <Download className="w-5 h-5" />
                Download Resume
              </AnimatedBorderButton>
            </div>

            <div className="flex items-center gap-4 animate-fade-in animation-delay-400">
              <span className="text-sm text-muted-foreground">
                Connect with me:
              </span>

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
                  className="p-2 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all duration-300"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          <div className="relative animate-fade-in animation-delay-300">
            <div className="relative max-w-md mx-auto">
              <div
                className="absolute inset-0 
                rounded-3xl bg-gradient-to-br 
                from-primary/30 via-transparent 
                to-primary/10 blur-2xl animate-pulse"
              />

              <div className="relative glass rounded-3xl p-2 glow-border">
                <div className="w-full aspect-[4/5] rounded-2xl bg-gradient-to-br from-surface via-secondary to-background flex flex-col items-center justify-center gap-4">
                  <div className="w-100 h-100 rounded border border-primary/40 bg-primary/10 overflow-hidden shadow-lg">
                    <img
                      src={profile.profilePic}
                      alt={`${profile.name} profile`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="text-center px-6">
                    <p className="text-2xl font-semibold">{profile.name}</p>
                    <p className="text-sm text-muted-foreground mt-2">
                      Java Full Stack • MERN Stack
                    </p>
                  </div>
                </div>

                <div className="absolute -bottom-4 -right-4 glass rounded-xl px-4 py-3 animate-float">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                    <span className="text-sm font-medium">
                      {profile.availability}
                    </span>
                  </div>
                </div>

                <div className="absolute -top-4 -left-4 glass rounded-xl px-4 py-3 animate-float animation-delay-500">
                  <div className="text-2xl font-bold text-primary">Java</div>
                  <div className="text-xs text-muted-foreground">
                    + MERN Stack
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-20 animate-fade-in animation-delay-600">
          <p className="text-sm text-muted-foreground mb-6 text-center uppercase tracking-[0.2em]">
            Technologies I Work With
          </p>

          <div className="relative overflow-hidden">
            {/* Left fade */}
            <div
              className="
        absolute left-0 top-0 bottom-0 w-24
        bg-gradient-to-r from-background to-transparent
        z-10 pointer-events-none
      "
            />

            {/* Right fade */}
            <div
              className="
        absolute right-0 top-0 bottom-0 w-24
        bg-gradient-to-l from-background to-transparent
        z-10 pointer-events-none
      "
            />

            <div className="flex gap-4 w-max animate-marquee">
              {[...technologies, ...technologies].map((tech, idx) => {
                const TechIcon = tech.icon;

                return (
                  <div
                    key={`${tech.name}-${idx}`}
                    className="
              flex items-center gap-3
              px-5 py-3
              rounded-xl
              border border-white/10
              bg-white/[0.035]
              backdrop-blur-sm
              flex-shrink-0
              transition-all duration-300
              hover:bg-white/[0.07]
              hover:border-primary/30
              group
            "
                  >
                    <TechIcon
                      className={`
                w-6 h-6
                ${tech.color}
                transition-transform duration-300
                group-hover:scale-110
              `}
                    />

                    <span
                      className="
                text-sm
                font-semibold
                text-muted-foreground
                whitespace-nowrap
                group-hover:text-foreground
                transition-colors
              "
                    >
                      {tech.name}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 z-20">
  <a
    href="#about"
    className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors group cursor-pointer"
  >
    <span className="text-xs uppercase tracking-[0.2em]">
      Scroll
    </span>

    <ChevronDown className="w-6 h-6 animate-bounce group-hover:text-primary" />
  </a>
</div>
    </section>
  );
};
