import { Button } from "@/components/ui/button";
import { Mail, Github, Linkedin, FileDown } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center gradient-hero relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold text-primary-foreground mb-6">
            Atharva Wadekar
          </h1>
          <p className="text-xl md:text-2xl text-primary-foreground/90 mb-4">
            Software Developer | Full Stack Engineer | AI/ML Specialist
          </p>
          <p className="text-lg text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Computer Science graduate student specializing in machine learning, deep learning, and computer vision.
            Building scalable applications and deploying production-ready AI systems.
          </p>
          <div className="flex flex-wrap gap-4 justify-center mb-8">
            <Button asChild size="lg" className="bg-card text-card-foreground hover:bg-card/90 shadow-medium">
              <a href="mailto:wadekar@buffalo.edu">
                <Mail className="mr-2 h-5 w-5" />
                Contact Me
              </a>
            </Button>
            <Button asChild size="lg" className="bg-card text-card-foreground hover:bg-card/90 shadow-medium">
              <a href="/Atharva-Portfolio/resume.pdf" download="Atharva_Wadekar_Resume.pdf">
                <FileDown className="mr-2 h-5 w-5" />
                Resume
              </a>
            </Button>
          </div>
          <div className="flex gap-4 justify-center">
            <a
              href="https://github.com/atharvawadekar"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-smooth"
            >
              <Github className="h-6 w-6 text-primary-foreground" />
            </a>
            <a
              href="https://www.linkedin.com/in/atharvawadekar2"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-smooth"
            >
              <Linkedin className="h-6 w-6 text-primary-foreground" />
            </a>
          </div>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#about" className="text-primary-foreground/60 hover:text-primary-foreground/90 transition-smooth">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </a>
      </div>
    </section>
  );
};

export default Hero;
