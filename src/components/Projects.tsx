import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import { trackEvent } from "@/lib/ga";

const projects = [
  {
    title: "Virtual Poker Chips",
    description: "Architected a real-time multiplayer synchronization engine using Firebase Realtime Database and TypeScript, enabling sub-100ms latency for shared game states across 10+ concurrent users via a serverless architecture.",
    tech: ["React Native", "Expo", "Firebase", "TypeScript"],
    highlights: [
      "Engineered atomic transaction logic with Firebase Security Rules ensuring 100% data integrity without a dedicated backend",
      "Deployed production-ready Android application using EAS Build CI/CD with gesture-optimized UI",
      "Achieved sub-100ms latency for shared game states via event-driven architecture"
    ],
    date: "Jan 2026"
  },
  {
    title: "Agentic Todo App",
    description: "Developed an AI-powered task management platform using FastAPI, React, and Model Context Protocol (MCP), enabling natural language task operations through Claude AI integration with 6 custom tool definitions.",
    tech: ["FastAPI", "React", "MCP", "Docker", "SQLAlchemy", "Pydantic"],
    highlights: [
      "Implemented RESTful API endpoints with SQLAlchemy ORM and Pydantic validation, supporting dynamic filtering by completion status and tags, reducing task retrieval time to milliseconds.",
      "Designed microservices architecture (Docker), featuring stdio-based MCP server as AI bridge layer."
    ],
    date: "Jan 2026"
  },
  {
    title: "Time My Exam",
    description: "Developed a high-performance web application using React and Vite, featuring a responsive split-screen interface for simultaneous timer management and student announcements.",
    tech: ["React", "Vite", "Netlify"],
    highlights: [
      "Engineered an intuitive control system with quick-add functionality (+5/10/15m) for dynamic state management",
      "Streamlined exam administration, reducing proctor intervention time by ~90% for duration adjustments",
      "Ensured zero-latency countdown accuracy with a responsive split-screen layout"
    ],
    date: "Jan 2026",
    link: "https://timemyexam.netlify.app/"
  },
  {
    title: "Application Manager",
    description: "Developed a responsive job application management tool that reduced manual tracking time by 60% for 10+ pilot users through automated form entry, centralized records, and instant updates.",
    tech: ["Google Identity Services", "Google Sheets API", "OAuth", "Serverless"],
    highlights: [
      "Integrated Google Identity Services (OAuth) for secure, passwordless login",
      "Serverless backend using Google Sheets API for reliable cloud-based CRUD operations",
      "Seamless, cross-device data persistence validated across multiple user sessions"
    ],
    date: "Dec 2025",
    link: "https://applicationmanager.netlify.app/"
  },
  {
    title: "Frame-Findr: Event Photo Search Platform",
    description: "Full-stack web application with React/TypeScript frontend and Node.js/Express REST API backend using Google Cloud Vision API for automated OCR processing.",
    tech: ["React", "TypeScript", "Node.js", "MySQL", "Google Cloud", "Nginx"],
    highlights: [
      "Reduced photo tagging time from hours to under 2 minutes",
      "Serving 10+ marathon events",
      "93% deployment time reduction with CI/CD automation"
    ],
    date: "Nov 2025",
    link: "https://framefindr.com/"
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
    description: "Developed the B.O.L.T (Behavioral Object Locomotion & Tracking) system for the Unitree Go2 quadruped, enabling autonomous, real-time vision-guided object following.",
    tech: ["YOLOv8n", "ONNX", "Jetson Nano", "Python", "Unitree Go2", "FSM"],
    highlights: [
      "Engineered a quantized YOLOv8n perception pipeline on Jetson Nano, achieving 0.995 mAP@0.5",
      "Developed FSM control layer to abstract perception noise into stable behaviors (Search, Approach, Hold)",
      "Achieved 48ms system latency and >90% tracking success rate in indoor environments"
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
    title: "Multiplayer Rock-Paper-Scissors Game",
    description: "Real-time multiplayer game with WebSocket communication and deployed on production VPS with Nginx.",
    tech: ["React", "Node.js", "Socket.io", "Nginx", "Material UI"],
    highlights: [
      "Real-time gameplay with WebSockets",
      "Deployed on GoDaddy VPS with Ubuntu",
      "Stable performance under concurrent sessions"
    ],
    date: "Dec 2024",
    link: "http://68.178.169.207:3001/"
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
                  {project.link && (
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-8 w-8 -mr-2 text-muted-foreground hover:text-primary"
                      asChild
                    >
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => trackEvent('project_link_click', { project_title: project.title, link: project.link })}
                      >
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    </Button>
                  )}
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
