import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import heroImage from "@/assets/amogus.png";
import { DecryptedText } from "./DecryptedText";

export function Hero() {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };
  const scrollToExperience = () => {
    document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' });
  };
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-secondary relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-background/50" />
      <div className="absolute top-20 left-20 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse delay-1000" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-bold">
                <span className="block text-foreground">
                  <DecryptedText text="Hi, I'm" speed={30} />
                </span>
                <span className="block bg-gradient-primary bg-clip-text text-transparent">
                  <DecryptedText text="James Philip" speed={30} />
                </span>
              </h1>
              <p className="text-xl lg:text-2xl text-muted-foreground">
                <DecryptedText text="Full Stack Developer & Machine Learning Engineer" speed={20} />
              </p>
              <p className="text-lg text-muted-foreground max-w-md">
                <DecryptedText text="I create beautiful, functional web applications that deliver exceptional user experiences." speed={10} />
              </p>
            </div>
            
            <div className="flex flex-wrap gap-4">
              <Button variant="hero" size="lg" className="group" onClick={scrollToExperience}>
                View My Work
                <ArrowDown className="ml-2 group-hover:translate-y-1 transition-transform" />
              </Button>
              <Button variant="outline" size="lg" onClick={scrollToContact}>
                Get In Touch
              </Button>
            </div>
            
            {/* Social links */}
            <div className="flex gap-4 pt-4">
              <a href="https://github.com/JamesVSeVERYBODY" target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" size="icon" className="hover:text-accent">
                  <Github className="h-5 w-5" />
                </Button>
              </a>
              <a href="https://linkedin.com/in/james-philip-a7475a190" target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" size="icon" className="hover:text-accent">
                  <Linkedin className="h-5 w-5" />
                </Button>
              </a>
              <a href="mailto:jamesphilipxd@gmail.com">
                <Button variant="ghost" size="icon" className="hover:text-accent">
                  <Mail className="h-5 w-5" />
                </Button>
              </a>
            </div>
          </div>
          
          {/* Hero image */}
          <div className="relative animate-slide-up">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-primary rounded-full blur-2xl opacity-20 animate-glow" />
              <img
                src={heroImage}
                alt="Developer portrait"
                className="relative z-10 w-full max-w-md mx-auto rounded-full border-4 border-primary/20 shadow-glow-primary"
              />
            </div>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <Button
            variant="ghost"
            size="icon"
            onClick={scrollToAbout}
            className="rounded-full"
          >
            <ArrowDown className="h-6 w-6" />
          </Button>
        </div>
      </div>
    </section>
  );
}