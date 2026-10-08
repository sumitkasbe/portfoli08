import { AnimatedBorderButton } from "@/components/AnimatedBorderButton";
import { profile, projects } from "@/data/portfolio";
import { ArrowUpRight } from "lucide-react";
import { FaGithub } from "react-icons/fa6";

export const Projects = () => {
  return (
    <section
      id="projects"
      className="py-24 relative overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">

        {/* Section Heading */}
        <div className="text-center mx-auto max-w-3xl mb-12">

          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
            Featured Work
          </span>

          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-5 animate-fade-in animation-delay-100 text-secondary-foreground">
            Things I've{" "}
            <span className="font-serif italic font-normal text-white">
              built.
            </span>
          </h2>

          <p className="text-muted-foreground animate-fade-in animation-delay-200">
            Full-stack projects built with modern technologies,
            focused on practical features like authentication,
            bookings, dashboards, and role-based workflows.
          </p>

        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">

          {projects.map((project, idx) => (
            <div
              key={project.title}
              className="group glass rounded-2xl overflow-hidden border border-border/50 animate-fade-in flex flex-col"
              style={{
                animationDelay: `${(idx + 1) * 100}ms`,
              }}
            >

              {/* Project Image */}
              <div className="relative overflow-hidden aspect-[16/9] bg-surface">

                <img
                  src={project.image}
                  alt={`${project.title} project preview`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                {/* Image Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              </div>

              {/* Project Content */}
              <div className="p-5 flex flex-col flex-1">

                {/* Title + GitHub Arrow */}
                <div className="flex items-start justify-between gap-3 mb-3">

                  <div>
                    <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>

                    <p className="text-xs text-primary mt-1">
                      {project.subtitle}
                    </p>
                  </div>

                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${project.title} on GitHub`}
                      className="flex-shrink-0"
                    >
                      <ArrowUpRight
                        className="
                          w-5 h-5
                          text-muted-foreground
                          group-hover:text-primary
                          group-hover:translate-x-1
                          group-hover:-translate-y-1
                          transition-all
                        "
                      />
                    </a>
                  )}

                </div>

                {/* Description */}
                <p className="text-muted-foreground text-sm leading-relaxed mb-5">
                  {project.description}
                </p>

                {/* Technology Tags */}
                <div className="flex flex-wrap gap-2 mb-6">

                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="
                        px-3 py-1.5
                        rounded-full
                        bg-surface
                        text-xs
                        font-medium
                        border border-border/50
                        text-muted-foreground
                        hover:border-primary/50
                        hover:text-primary
                        transition-all
                        duration-300
                      "
                    >
                      {tag}
                    </span>
                  ))}

                </div>

                {/* Buttons */}
                <div className="flex gap-3 mt-auto">

                  {/* Live Demo */}
                  {project.liveDemo ? (
                    <a
                      href={project.liveDemo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="
                        flex-1
                        flex
                        items-center
                        justify-center
                        gap-2
                        px-4
                        py-3
                        rounded-xl
                        bg-primary
                        text-primary-foreground
                        font-semibold
                        text-sm
                        hover:opacity-90
                        transition-all
                      "
                    >
                      Live Demo
                      <ArrowUpRight className="w-4 h-4" />
                    </a>
                  ) : (
                    <button
                      type="button"
                      disabled
                      className="
                        flex-1
                        flex
                        items-center
                        justify-center
                        gap-2
                        px-4
                        py-3
                        rounded-xl
                        bg-primary/30
                        text-primary-foreground/60
                        font-semibold
                        text-sm
                        cursor-not-allowed
                      "
                    >
                      Live Demo
                      <ArrowUpRight className="w-4 h-4" />
                    </button>
                  )}

                  {/* GitHub */}
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${project.title} GitHub repository`}
                      className="
                        w-12
                        h-12
                        flex
                        items-center
                        justify-center
                        rounded-xl
                        border
                        border-border/60
                        glass
                        hover:bg-primary
                        hover:text-primary-foreground
                        transition-all
                      "
                    >
                      <FaGithub className="w-5 h-5" />
                    </a>
                  )}

                </div>

              </div>
            </div>
          ))}

        </div>

        {/* GitHub Profile Button */}
        <div className="text-center mt-10 animate-fade-in animation-delay-500">

          <AnimatedBorderButton
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
          >
            View GitHub Profile
            <ArrowUpRight className="w-5 h-5" />
          </AnimatedBorderButton>

        </div>

      </div>
    </section>
  );
};