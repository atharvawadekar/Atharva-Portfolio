import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const projects = [
  {
    title: "Bib-Findr: Event Photo Search Platform",
    description: "Full-stack web application with React/TypeScript frontend and Node.js/Express REST API backend using Google Cloud Vision API for automated OCR processing.",
    tech: ["React", "TypeScript", "Node.js", "MySQL", "Google Cloud", "Nginx"],
    highlights: [
      "Reduced photo tagging time from hours to under 2 minutes",
      "Serving 10+ marathon events",
      "93% deployment time reduction with CI/CD automation"
    ],
    date: "Nov 2025"
  },
  {
    title: "Face Sketch-to-Photo Generation (Pix2Pix)",
    description: "Implemented paired image-to-image translation model using Pix2Pix architecture to generate realistic grayscale face photos from hand-drawn sketches.",
    tech: ["PyTorch", "U-Net", "PatchGAN", "Computer Vision"],
    highlights: [
      "Trained on 1,504 paired images from CUFS dataset",
      "Achieved validation L1 = 0.165, PSNR = 16.45",
      "Delivered modular PyTorch codebase with tracking"
    ],
    date: "Aug 2025"
  },
  {
    title: "Autonomous Ball-Tracking Quadruped Robot",
    description: "Real-time computer vision pipeline using YOLOv8 for object detection and NanoTrack for continuous tracking on a quadruped robot platform.",
    tech: ["YOLOv8", "NanoTrack", "ROS", "PID Control", "Python"],
    highlights: [
      "Robust ball detection under varying lighting",
      "Integrated vision-to-motion control system",
      "Low-latency ROS-based architecture"
    ],
    date: "Jun 2025"
  },
  {
    title: "Multi-Modal Detection & Recognition System",
    description: "Comprehensive person detection pipeline with bib number recognition for race events using multiple deep learning models.",
    tech: ["PyTorch", "YOLOv8", "CRAFT", "Computer Vision"],
    highlights: [
      "95.0% mAP@0.5 on INRIA Person Dataset",
      "92.9% precision on bib number recognition",
      "20.6ms inference time"
    ],
    date: "May 2025"
  },
  {
    title: "Vision Transformer for Image Classification",
    description: "Implemented Vision Transformer architecture for binary image classification on Cats vs Dogs dataset using transfer learning.",
    tech: ["PyTorch", "ViT", "Transfer Learning"],
    highlights: [
      "97.76% validation accuracy",
      "Processed 24,998 images",
      "Automated corrupted file detection"
    ],
    date: "Apr 2025"
  },
  {
    title: "Multiplayer Rock-Paper-Scissors Game",
    description: "Real-time multiplayer game with WebSocket communication and deployed on production VPS with Nginx.",
    tech: ["React", "Node.js", "Socket.io", "Nginx", "Material UI"],
    highlights: [
      "Real-time gameplay with WebSockets",
      "Deployed on GoDaddy VPS with Ubuntu",
      "Stable performance under concurrent sessions"
    ],
    date: "Dec 2024"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 section-bg">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-foreground">
          Featured Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <Card key={index} className="shadow-soft hover:shadow-medium transition-smooth border-border group">
              <CardHeader>
                <div className="flex items-start justify-between mb-2">
                  <CardTitle className="text-xl group-hover:text-primary transition-smooth">
                    {project.title}
                  </CardTitle>
                </div>
                <CardDescription className="text-sm text-muted-foreground">{project.date}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-card-foreground mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>
                <div className="space-y-3">
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, idx) => (
                      <Badge key={idx} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <ul className="space-y-1">
                    {project.highlights.map((highlight, idx) => (
                      <li key={idx} className="text-xs text-muted-foreground flex items-start gap-2">
                        <span className="text-primary mt-1 flex-shrink-0">•</span>
                        <span className="flex-1">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
