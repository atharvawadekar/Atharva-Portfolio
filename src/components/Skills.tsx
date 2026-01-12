import { Badge } from "@/components/ui/badge";

const skillCategories = [
  {
    category: "Programming Languages",
    skills: ["Python", "JavaScript", "TypeScript", "C++", "C#", "SQL", "Java", "HTML", "CSS", "NoSQL"]
  },
  {
    category: "ML/AI Frameworks",
    skills: ["PyTorch", "TensorFlow", "Scikit-Learn", "OpenCV", "YOLOv11", "Ollama", "N8N", "MCP Server", "Prompt Engineering", "LLM Orchestration", "OCR", "Object Detection", "Image Segmentation"]
  },
  {
    category: "Frontend Development",
    skills: ["React", "Next.js", "Vite", "Tailwind CSS", "Material UI", "shadcn/ui"]
  },
  {
    category: "Backend Development",
    skills: ["Node.js", "Express", "REST APIs", "Socket.io", ".NET", "OOP", "API Design", "API Development"]
  },
  {
    category: "Databases",
    skills: ["PostgreSQL", "MySQL", "Microsoft SQL Server", "MongoDB", "Redis", "Vector Database", "Qdrant Vector Database", "Database Design"]
  },
  {
    category: "Cloud & DevOps",
    skills: ["AWS (EC2, RDS, S3, Lambda, Route53, Cloudwatch)", "Azure", "Google Cloud (APIs, Buckets)", "Docker", "Kubernetes", "Nginx", "Linux", "Grafana", "CI/CD", "Git", "GitHub"]
  },
  {
    category: "Tools & Methodologies",
    skills: ["Agile Methodology", "Jira", "Visual Studio", "Visual Studio Code", "Antigravity", "Copilot", "Claude Code", "Excel"]
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
