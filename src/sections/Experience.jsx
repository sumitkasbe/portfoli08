import { experiences } from "@/data/portfolio";

export const Experience = () => {
  return (
    <section id="experience" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Work <span className="text-primary">Experience</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Project-based internships where I contributed to real web
          applications, practiced frontend and web development, and
          strengthened testing, debugging, and problem-solving skills.
        </p>

        <div className="relative">
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-primary/40 md:-translate-x-1/2" />

          <div className="space-y-12">
            {experiences.map((exp, idx) => (
              <div key={exp.company} className="relative grid md:grid-cols-2 gap-8">
                <div className="absolute left-0 md:left-1/2 top-6 w-3 h-3 bg-primary rounded-full -translate-x-1/2 ring-4 ring-background z-10" />

                <div
                  className={`pl-8 md:pl-0 ${
                    idx % 2 === 0 ? "md:pr-12 md:text-right" : "md:col-start-2 md:pl-12"
                  }`}
                >
                  <div className="bg-card p-6 rounded-lg shadow-xs card-hover text-left md:text-inherit">
                    <span className="text-sm text-primary font-medium">
                      {exp.period}
                    </span>
                    <h3 className="text-xl font-semibold mt-2">{exp.role}</h3>
                    <p className="text-muted-foreground">{exp.company}</p>
                    <p className="text-xs text-primary/80 mt-1">{exp.type}</p>
                    <p className="text-sm text-muted-foreground mt-4">
                      {exp.description}
                    </p>
                    <div
                      className={`flex flex-wrap gap-2 mt-4 ${
                        idx % 2 === 0 ? "md:justify-end" : ""
                      }`}
                    >
                      {exp.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-secondary text-xs rounded-full text-secondary-foreground border"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
