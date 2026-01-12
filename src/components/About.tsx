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
              I recently completed my Master’s in Computer Science from UB and have hands-on experience building, deploying, and maintaining production applications. One of my key projects is <a href="https://framefindr.com/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">FrameFindr</a>, an AI-driven web application for tagging photos from marathon events. I built the system end-to-end, including backend services, REST APIs, frontend, cloud deployment, hosting, domain setup, and monitoring. The platform uses Google Cloud Vision OCR to process large volumes of images and is currently live with organizers, with an upcoming event on January 25th.
            </p>
            <p className="text-lg text-card-foreground leading-relaxed mb-6">
              I also worked as an AI Engineer Intern at Filmic, where I helped automate the manual inspection of film reels by building computer vision pipelines and backend dashboards. This replaced manual workflows and significantly reduced inspection and review time while maintaining reliability and performance.
            </p>
            <p className="text-lg text-card-foreground leading-relaxed mb-6">
              Through these experiences, I’ve developed a strong foundation in full-stack development, scalable system design, API development, and DevOps practices. I enjoy working in collaborative teams, writing clear documentation, and solving problems in fast-moving environments.
            </p>
            <p className="text-lg text-card-foreground leading-relaxed">
              I’m currently seeking full-time opportunities starting January 2026, where I can contribute to impactful, innovative engineering challenges while continuing to grow as an AI/ML and software engineer.
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
