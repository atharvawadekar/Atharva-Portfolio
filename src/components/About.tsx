const About = () => {
  return (
    <section id="about" className="py-20 section-bg">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-foreground">
            About Me
          </h2>
          <div className="bg-card p-8 rounded-2xl shadow-medium">
            <p className="text-lg text-card-foreground leading-relaxed mb-6">
              I’m a Computer Science graduate student at the University at Buffalo (GPA 3.95) with a passion for applying machine learning, deep learning, and computer vision to real-world problems. I enjoy building intelligent systems that blend strong engineering fundamentals with practical impact.
            </p>
            <p className="text-lg text-card-foreground leading-relaxed mb-6">
              Currently, at Filmic Technologies, I’m developing automated computer-vision pipelines that cut manual inspection time by over 80%. Outside this role, I’ve built full-stack applications like FrameFindr, a scalable photo-matching and OCR platform, and Application Tracker, a secure tool used for managing job applications. These projects strengthened my skills in PyTorch, React, Node.js, backend design, and cloud technologies.
            </p>
            <p className="text-lg text-card-foreground leading-relaxed">
              I’m seeking full-time opportunities starting January 2026, where I can contribute to impactful, innovative engineering challenges while continuing to grow as an AI/ML and software engineer.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">3.95</div>
              <div className="text-sm text-muted-foreground">GPA</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">2+</div>
              <div className="text-sm text-muted-foreground">Years of experience</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">2</div>
              <div className="text-sm text-muted-foreground">Internships</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">5+</div>
              <div className="text-sm text-muted-foreground">Certifications</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
