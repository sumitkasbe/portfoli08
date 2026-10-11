import { certifications, education } from "@/data/portfolio";
import { Award, GraduationCap } from "lucide-react";

export const Education = () => {
  return (
    <section id="education" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Education & <span className="text-primary">Certifications</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Academic foundation in Computer Engineering, supported by
          certifications in frontend, MERN, and Java full-stack development.
        </p>

        <div className="grid lg:grid-cols-2 gap-12 text-left">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-full bg-primary/10">
                <GraduationCap className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-2xl font-semibold">Education</h3>
            </div>
            <div className="space-y-6">
              {education.map((item) => (
                <div key={item.program} className="bg-card p-6 rounded-lg shadow-xs card-hover">
                  <span className="text-sm text-primary font-medium">
                    {item.period}
                  </span>
                  <h4 className="text-lg font-semibold mt-2">{item.program}</h4>
                  <p className="text-sm text-muted-foreground mt-1">
                    {item.school}
                  </p>
                  <p className="text-sm mt-3">{item.detail}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-full bg-primary/10">
                <Award className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-2xl font-semibold">Certifications</h3>
            </div>
            <div className="space-y-6">
              {certifications.map((item) => (
                <div key={item.title} className="gradient-border p-6 card-hover">
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
