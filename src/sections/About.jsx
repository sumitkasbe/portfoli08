import { highlights, profile } from "@/data/portfolio";
import { Code2, Lightbulb, Rocket, Users } from "lucide-react";

const highlightIcons = [Code2, Rocket, Users, Lightbulb];

export const About = () => {
  return (
    <section id="about" className="py-20 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary">Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 text-left">
            <h3 className="text-2xl font-semibold">
              Computer Engineering Graduate & Full-Stack Developer
            </h3>

            {profile.about.map((paragraph) => (
              <p key={paragraph.slice(0, 24)} className="text-muted-foreground">
                {paragraph}
              </p>
            ))}

            <p className="text-foreground/90 italic border-l-2 border-primary pl-4">
              “{profile.quote}”
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center md:justify-start">
              <a href="#contact" className="cosmic-button text-center">
                Get In Touch
              </a>
              <a
                href={profile.resumePath}
                download="Sumit_Kasbe_Resume.pdf"
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300 text-center"
              >
                Download CV
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            {highlights.map((item, idx) => {
              const Icon = highlightIcons[idx];
              return (
                <div key={item.title} className="gradient-border p-6 card-hover">
                  <div className="flex items-start gap-4 text-left">
                    <div className="p-3 rounded-full bg-primary/10">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg">{item.title}</h4>
                      <p className="text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
