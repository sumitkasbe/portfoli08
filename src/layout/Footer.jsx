import { profile } from "@/data/portfolio";
import { ArrowUp } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa6";

const socialLinks = [
  { icon: FaGithub, href: profile.github, label: "GitHub" },
  { icon: FaLinkedin, href: profile.linkedin, label: "LinkedIn" },
];

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 px-4 bg-card relative border-t border-border mt-12">
      <div className="container flex flex-wrap justify-between items-center gap-4">
        <p className="text-sm text-muted-foreground">
          &copy; {currentYear} {profile.name}. All rights reserved.
        </p>

        <div className="flex items-center gap-3">
          {socialLinks.map((social) => (
            <a
              key={social.label}
              href={social.href}
              aria-label={social.label}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors"
            >
              <social.icon className="w-4 h-4" />
            </a>
          ))}
          <a
            href="#home"
            aria-label="Back to top"
            className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors"
          >
            <ArrowUp size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
};
