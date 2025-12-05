import { Badge } from "@/components/ui/badge";

const skillCategories = [
  {
    category: "Programming Languages",
    skills: ["Python", "JavaScript", "TypeScript", "C++", "Java", "SQL"]
  },
  {
    category: "ML/AI Frameworks",
    skills: ["PyTorch", "TensorFlow", "Scikit-Learn", "OpenCV", "YOLOv8", "Hugging Face"]
  },
  {
    category: "Frontend Development",
    skills: ["React", "Next.js", "Vite", "Tailwind CSS", "Material UI", "shadcn/ui", "Accessible Technologies (a11y)"]
  },
  {
    category: "Backend Development",
    skills: ["Node.js", "Express", "REST APIs", "Socket.io", "GraphQL", "API Design", "API Development"]
  },
  {
    category: "Databases",
    skills: ["PostgreSQL", "MySQL", "MongoDB", "Redis", "Supabase", "Google Cloud Spanner", "Database Design"]
  },
  {
    category: "Cloud & DevOps",
    skills: ["AWS (EC2, RDS, S3)", "Google Cloud", "Docker", "Nginx", "CI/CD", "Git", "Apache Flume"]
  },
  {
    category: "Computer Vision",
    skills: ["Object Detection", "Image Segmentation", "OCR", "Face Recognition", "Video Processing"]
  },
  {
    category: "Machine Learning",
    skills: ["Deep Learning", "Neural Networks", "Transfer Learning", "Model Optimization", "Computer Vision"]
  }
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 section-bg-alt">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-foreground">
          Technical Skills
        </h2>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-card p-6 rounded-xl shadow-soft border border-border"
            >
              <h3 className="text-xl font-semibold mb-4 text-card-foreground border-b border-border pb-2">
                {category.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, idx) => (
                  <Badge
                    key={idx}
                    variant="secondary"
                    className="px-3 py-1 text-sm hover:bg-primary hover:text-primary-foreground transition-smooth cursor-default"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
