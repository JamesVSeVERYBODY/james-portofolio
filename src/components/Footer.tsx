import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Heart } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com/jamesVSeVERYBODY",
      label: "GitHub"
    },
    {
      icon: Linkedin,
      href: "https://linkedin.com/in/james-philip-a7475a190",
      label: "LinkedIn"
    },
    {
      icon: Mail,
      href: "mailto:jamesphilipxd@gmail.com",
      label: "Email"
    }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-background border-t border-border">
      <div className="container mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand */}
          <div className="text-center md:text-left">
            <button
              onClick={scrollToTop}
              className="text-xl font-bold hover:text-primary transition-colors"
            >
              <span className="text-foreground">James</span>
              <span className="text-primary">Portfolio</span>
            </button>
            <p className="text-muted-foreground mt-2">
              James Philip's Portfolio
            </p>
          </div>

          {/* Social Links */}
          <div className="flex gap-4">
            {socialLinks.map((social, index) => (
              <Button
                key={index}
                variant="ghost"
                size="icon"
                asChild
                className="hover:text-primary hover:bg-primary/10"
              >
                <a
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              </Button>
            ))}
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-border text-center">
          <p className="text-muted-foreground flex items-center justify-center gap-2">
            © {currentYear} James Philip. Made with 
            <Heart className="h-4 w-4 text-red-500 fill-current" />
            using React & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}