import { Briefcase, Calendar } from "lucide-react";

const experiences = [
  {
    title: "AI Engineer Intern (vis CSE611)",
    company: "Filmic Technologies",
    location: "Buffalo, NY",
    period: "Aug 2025 - Present",
    description: [
      "Automated reel inspection using a Snakemake pipeline, cutting human review time by 80% per reel.",
      "Engineered PyTorch models for frame and sprocket-hole detection, achieving 94% accuracy and facilitating more precise defect localization for downstream restoration and triage processes, improving efficiency.",
      "Built a secure Node.js/Express backend and a React/TypeScript dashboard that eliminated CLI-based review and increased archivist throughput by 60% through faster filtering, browsing, and inspection of reel reports."
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
      "Integrated scalable payment processing module into event application enabling seamless handling of add-on items and automated sales reporting, reducing accountants’ workload by 70% and boosting sales by 40%.",
      "Developed and deployed Bib Expo Management Software streamlining participant check-ins, reducing wait times by 60%.",
      "Automated participant e-certificate generation by developing a graphical tool for dynamic variable placement on templates, reducing creation time by 95% and increasing user satisfaction by 60%."
    ]
  },
  {
    title: "Software Developer",
    company: "NCDEX E-Markets",
    location: "Mumbai, India",
    period: "Jul 2022 - Sep 2023",
    description: [
      "Architected cost-efficient AWS infrastructure (EC2, RDS, S3/Glacier), lowering cloud expenses by 35% and boosting profitability through optimized resource provisioning and secure system design.",
      "Built an automated error detection and reporting pipeline that cut issue resolution time from 90 to 7 minutes by sending realtime alerts to the right teams, earning a Spot Award for impact.",
      "Built a self-service campaign dashboard using the Brevo API, increasing customer outreach speed by 300% with analytics."
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
