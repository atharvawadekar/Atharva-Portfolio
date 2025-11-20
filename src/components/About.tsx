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
              I'm a Computer Science graduate student at the University at Buffalo with a stellar 3.95 GPA, 
              passionate about leveraging cutting-edge technologies to solve real-world problems. My expertise 
              spans across machine learning, deep learning, computer vision, and full-stack development.
            </p>
            <p className="text-lg text-card-foreground leading-relaxed mb-6">
              Currently, I'm working as a Machine Learning Intern at Filmic Technologies, where I've built 
              automated pipelines that reduce manual inspection time by over 80%. I also serve as a Graduate 
              Research Assistant, extending state-of-the-art algorithms in vehicle routing and combinatorial 
              optimization.
            </p>
            <p className="text-lg text-card-foreground leading-relaxed">
              With hands-on experience in PyTorch, TensorFlow, React, Node.js, and cloud technologies, I'm 
              seeking entry-level opportunities where I can contribute to innovative projects while continuing 
              to grow as a software engineer and AI/ML specialist.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">3.95</div>
              <div className="text-sm text-muted-foreground">GPA</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">10+</div>
              <div className="text-sm text-muted-foreground">Projects</div>
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
