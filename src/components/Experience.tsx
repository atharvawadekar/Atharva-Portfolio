import { Briefcase, Calendar } from "lucide-react";

const experiences = [
  {
    title: "Machine Learning Intern",
    company: "Filmic Technologies",
    location: "Buffalo, NY",
    period: "Aug 2025 - Present",
    description: [
      "Replaced hours-long manual reel inspection with a Snakemake pipeline that generates automated reports, cutting human review time by 80%+",
      "Developed PyTorch models for frame detection and integrated Synchformer-based AV-sync alignment",
      "Built React/TypeScript dashboard with Node.js/Express backend for pipeline management"
    ]
  },
  {
    title: "Graduate Research Assistant",
    company: "University at Buffalo",
    location: "Buffalo, NY",
    period: "Dec 2024 - Present",
    description: [
      "Extended Multi-Vehicle Dial-a-Ride Problem model to heterogeneous vehicle capacities",
      "Implemented and benchmarked HGR variants in Python with synthetic and real-world datasets",
      "Supported research workflow with experiment pipelines and LaTeX documentation"
    ]
  },
  {
    title: "Full Stack Software Developer",
    company: "SportZilla",
    location: "Pune, India",
    period: "Oct 2023 - Jul 2024",
    description: [
      "Integrated scalable payment processing module, reducing accountants' workload by 70% and boosting sales by 40%",
      "Developed Bib Expo Management Software, reducing wait times by 60%",
      "Automated participant e-certificate generation pipeline, reducing creation time by 95%"
    ]
  },
  {
    title: "Management Trainee (Technology)",
    company: "NCDEX E-Markets",
    location: "Mumbai, India",
    period: "Jul 2022 - Sep 2023",
    description: [
      "Created and maintained AWS infrastructure (EC2, RDS, S3, EBS) with security policies",
      "Automated error detection pipeline, reducing issue resolution time from 90 to 7 minutes",
      "Developed self-service campaign management dashboard for bulk communications"
    ]
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 section-bg-alt">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-foreground">
          Professional Experience
        </h2>
        <div className="max-w-4xl mx-auto space-y-8">
          {experiences.map((exp, index) => (
            <div 
              key={index} 
              className="bg-card p-6 rounded-xl shadow-soft hover:shadow-medium transition-smooth border border-border"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div className="flex items-start gap-3 mb-2 md:mb-0">
                  <Briefcase className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold text-card-foreground">{exp.title}</h3>
                    <p className="text-primary font-medium">{exp.company}</p>
                    <p className="text-sm text-muted-foreground">{exp.location}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Calendar className="h-4 w-4" />
                  <span className="text-sm">{exp.period}</span>
                </div>
              </div>
              <ul className="space-y-2 ml-9">
                {exp.description.map((item, idx) => (
                  <li key={idx} className="text-card-foreground flex items-start gap-2">
                    <span className="text-primary mt-1 flex-shrink-0">•</span>
                    <span className="flex-1">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
