import { certifications, education } from "@/data/portfolio";
import { Award, GraduationCap } from "lucide-react";

export const Education = () => {
  return (
    <section id="education" className="py-32 relative overflow-hidden">
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mx-auto max-w-3xl mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
            Background
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
            Education &
            <span className="font-serif italic font-normal text-white">
              {" "}
              certifications.
            </span>
          </h2>
          <p className="text-muted-foreground animate-fade-in animation-delay-200">
            Academic foundation in Computer Engineering, supported by
            certifications in frontend, MERN, and Java full-stack development.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                <GraduationCap className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-2xl font-semibold">Education</h3>
            </div>
            <div className="space-y-6">
              {education.map((item, idx) => (
                <div
                  key={item.program}
                  className="glass p-6 rounded-2xl animate-fade-in"
                  style={{ animationDelay: `${(idx + 1) * 100}ms` }}
                >
                  <span className="text-sm text-primary font-medium">
                    {item.period}
                  </span>
                  <h4 className="text-lg font-semibold mt-2">{item.program}</h4>
                  <p className="text-sm text-muted-foreground mt-1">
                    {item.school}
                  </p>
                  <p className="text-sm text-foreground/80 mt-3">{item.detail}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                <Award className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-2xl font-semibold">Certifications</h3>
            </div>
            <div className="space-y-6">
              {certifications.map((item, idx) => (
                <div
                  key={item.title}
                  className="glass p-6 rounded-2xl animate-fade-in"
                  style={{ animationDelay: `${(idx + 1) * 100}ms` }}
                >
                  <h4 className="text-lg font-semibold">{item.title}</h4>
                  <p className="text-sm text-muted-foreground mt-2">
                    {item.issuer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
