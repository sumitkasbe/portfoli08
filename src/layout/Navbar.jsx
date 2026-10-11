import { ThemeToggle } from "@/components/ThemeToggle";
import { navLinks, profile } from "@/data/portfolio";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const items = [{ href: "#home", label: "Home" }, ...navLinks, { href: "#contact", label: "Contact" }];

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed w-full z-40 transition-all duration-300",
        isScrolled ? "py-3 bg-background/80 backdrop-blur-md shadow-xs" : "py-5"
      )}
    >
      <div className="container flex items-center justify-between">
        <a className="text-xl font-bold text-primary flex items-center shrink-0 mr-8" href="#home">
          <span className="relative z-10 whitespace-nowrap">
            <span className="text-glow text-foreground">Sumit</span> Kasbe
          </span>
        </a>

        <div className="hidden md:flex items-center space-x-5 lg:space-x-8">
          {items.map((link) => (
            <a
              href={link.href}
              key={link.href}
              className="text-foreground/80 hover:text-primary transition-colors duration-300"
            >
              {link.label}
            </a>
          ))}
          <ThemeToggle />
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <button
            className="p-2 text-foreground z-50"
            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        <div
          className={cn(
            "fixed inset-0 bg-background/95 backdrop-blur-md z-40 flex flex-col items-center justify-center",
            "transition-all duration-300 md:hidden",
            isMobileMenuOpen
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          )}
        >
          <div className="flex flex-col space-y-8 text-xl">
            {items.map((link) => (
              <a
                href={link.href}
                key={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-foreground/80 hover:text-primary transition-colors duration-300"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};
