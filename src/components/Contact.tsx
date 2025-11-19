import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, MapPin, Github, Linkedin } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 section-bg">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-foreground">
          Get In Touch
        </h2>
        <div className="max-w-4xl mx-auto">
          <Card className="shadow-medium border-border">
            <CardContent className="p-8">
              <p className="text-center text-lg text-card-foreground mb-8">
                I'm actively seeking entry-level opportunities in Software Development, Full Stack Engineering, 
                AI/ML Engineering, and related roles. Let's connect!
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="flex items-center gap-3 p-4 rounded-lg bg-accent">
                  <Mail className="h-6 w-6 text-primary flex-shrink-0" />
                  <div>
                    <p className="text-sm text-muted-foreground">Email</p>
                    <a href="mailto:wadekar@buffalo.edu" className="text-accent-foreground hover:text-primary transition-smooth">
                      wadekar@buffalo.edu
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-4 rounded-lg bg-accent">
                  <Phone className="h-6 w-6 text-primary flex-shrink-0" />
                  <div>
                    <p className="text-sm text-muted-foreground">Phone</p>
                    <a href="tel:+17166581112" className="text-accent-foreground hover:text-primary transition-smooth">
                      +1 (716) 658-1112
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-4 rounded-lg bg-accent">
                  <MapPin className="h-6 w-6 text-primary flex-shrink-0" />
                  <div>
                    <p className="text-sm text-muted-foreground">Location</p>
                    <p className="text-accent-foreground">Buffalo, NY</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-4 rounded-lg bg-accent">
                  <Github className="h-6 w-6 text-primary flex-shrink-0" />
                  <div>
                    <p className="text-sm text-muted-foreground">GitHub</p>
                    <a 
                      href="https://github.com/atharvawadekar" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-accent-foreground hover:text-primary transition-smooth"
                    >
                      @atharvawadekar
                    </a>
                  </div>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="shadow-soft">
                  <Mail className="mr-2 h-5 w-5" />
                  <a href="mailto:wadekar@buffalo.edu">Send Email</a>
                </Button>
                <Button size="lg" variant="outline">
                  <Linkedin className="mr-2 h-5 w-5" />
                  <a 
                    href="https://www.linkedin.com/in/atharvawadekar2" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    LinkedIn Profile
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
