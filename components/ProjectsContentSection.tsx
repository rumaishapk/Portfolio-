"use client";

import React, { useState } from "react";
import { Sparkles, Database, ArrowUpRight, Maximize2, X, Search, CheckCircle2 } from "lucide-react";
import { GithubIcon } from "./SocialIcons";

interface Project {
  id: number;
  numberStr: string;
  title: string;
  subtitle: string;
  category: string;
  bgColor: string;
  textColor: string;
  accentColor: string;
  description: string;
  details: string[];
  techStack: string[];
  githubUrl: string;
  liveUrl?: string;
  highlights: string;
}

export default function ProjectsContentSection() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const projects: Project[] = [
    {
      id: 1,
      numberStr: "1",
      title: "AI Chatbot",
      subtitle: "Conversational Agent & Doc Intelligence",
      category: "Full-Stack & Generative AI",
      bgColor: "#315caa", // Vibrant blue like reference column 1
      textColor: "#ffffff",
      accentColor: "#93c5fd",
      description:
        "Full-stack AI conversational chatbot built with Next.js and TypeScript featuring real-time token streaming, multimodal document & PDF uploads, Docker containerization, automated Caddy reverse proxy, and GCP cloud deployment.",
      details: [
        "Real-time LLM token streaming with sub-50ms TTFT",
        "Document & PDF upload parser with semantic text chunking",
        "Google Gemini API integration with context retention",
        "Containerized with Docker & routed via Caddy TLS proxy",
        "Deployed on Google Cloud Platform (GCP) Compute Engine",
      ],
      techStack: ["Next.js", "TypeScript", "Gemini API", "Docker", "GCP", "Caddy", "Tailwind CSS"],
      githubUrl: "https://github.com/rumaishapk",
      liveUrl: "https://github.com/rumaishapk",
      highlights: "Real-time streaming • PDF Upload • GCP Deployed",
    },
    {
      id: 2,
      numberStr: "2",
      title: "Slack Clone",
      subtitle: "Team Collaboration Platform",
      category: "Full-Stack Web App",
      bgColor: "#dfceb7", // Warm sand / beige like reference column 2
      textColor: "#2b251e",
      accentColor: "#846542",
      description:
        "A full-stack team collaboration application inspired by Slack. Features real-time multi-channel messaging, direct messaging, secure authentication, separate frontend/backend architecture, and responsive UX.",
      details: [
        "Real-time bi-directional messaging with instant delivery",
        "Dynamic channel creation, deletion, and member roles",
        "One-on-one direct messaging with read states",
        "Clean decoupled frontend & backend architecture",
        "Responsive desktop and mobile workstation interface",
      ],
      techStack: ["React", "Next.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS"],
      githubUrl: "https://github.com/rumaishapk",
      liveUrl: "https://github.com/rumaishapk",
      highlights: "Real-time Messaging • Channels • Direct Chats",
    },
    {
      id: 3,
      numberStr: "3",
      title: "RAG Engine",
      subtitle: "Vector Search & Document Intelligence",
      category: "AI & Vector Architecture",
      bgColor: "#759374", // Sage green like reference column 3
      textColor: "#ffffff",
      accentColor: "#d1e7d0",
      description:
        "Retrieval-Augmented Generation (RAG) platform indexing unstructured documents into Pinecone vector databases. Utilizes Gemini API embeddings to perform cosine similarity searches with zero-hallucination citations.",
      details: [
        "High-dimensional vector embedding generation",
        "Pinecone index management and top-K similarity filtering",
        "Dynamic prompt injection with source citations",
        "Fast document ingestion pipeline",
      ],
      techStack: ["Pinecone", "Gemini API", "Next.js", "TypeScript", "Node.js"],
      githubUrl: "https://github.com/rumaishapk",
      liveUrl: "https://github.com/rumaishapk",
      highlights: "Pinecone Vector DB • Semantic RAG • Gemini Embeddings",
    },
    {
      id: 4,
      numberStr: "4",
      title: "Cloud & DevOps",
      subtitle: "Docker, Caddy & GCP Architecture",
      category: "DevOps & Cloud Systems",
      bgColor: "#cf4a40", // Coral red like reference column 4
      textColor: "#ffffff",
      accentColor: "#fecaca",
      description:
        "Production-grade infrastructure pipeline implementing multi-stage Docker builds, automated zero-config HTTPS via Caddy reverse proxy, and robust deployments across Google Cloud Platform and AWS.",
      details: [
        "Multi-stage optimized Docker images with minimal attack surface",
        "Caddy reverse proxy with automatic SSL renewal",
        "GCP cloud firewall, VPC setup, and DNS routing",
        "Continuous integration and automated container lifecycles",
      ],
      techStack: ["Docker", "GCP", "AWS", "Caddy", "Git", "GitHub Actions", "Linux"],
      githubUrl: "https://github.com/rumaishapk",
      liveUrl: "https://github.com/rumaishapk",
      highlights: "Multi-stage Docker • Caddy SSL • GCP Compute",
    },
    {
      id: 5,
      numberStr: "5",
      title: "Full-Stack API",
      subtitle: "PostgreSQL, Mongo & REST Services",
      category: "Backend & Database Engineering",
      bgColor: "#44509f", // Royal slate violet like reference column 5
      textColor: "#ffffff",
      accentColor: "#c7d2fe",
      description:
        "Scalable backend architectures built with Node.js and Express.js, featuring relational modeling in PostgreSQL and MySQL, alongside flexible document modeling in MongoDB with secure JWT auth.",
      details: [
        "Normalized relational schemas in PostgreSQL & MySQL",
        "High-performance REST API endpoints with pagination & caching",
        "MongoDB aggregations for real-time analytics",
        "Clean middleware for authentication, logging, and error handling",
      ],
      techStack: ["Node.js", "Express.js", "PostgreSQL", "MongoDB", "MySQL", "REST APIs"],
      githubUrl: "https://github.com/rumaishapk",
      liveUrl: "https://github.com/rumaishapk",
      highlights: "PostgreSQL & MongoDB • REST APIs • Scalable Backend",
    },
  ];

  return (
    <section id="projects" className="relative py-20 sm:py-28 px-4 sm:px-6 lg:px-8 overflow-hidden bg-[#faf8f5]">
      <div className="max-w-7xl mx-auto relative select-none">
        
        {/* --- BACKGROUND OUTLINE WATERMARK TYPOGRAPHY (Exactly like reference) --- */}
        {/* Top Numbers: 01   03   05 */}
        <div className="flex justify-between items-center text-stone-300 font-black tracking-widest text-3xl sm:text-5xl md:text-6xl font-mono mb-2 px-8 sm:px-24 pointer-events-none">
          <span className="text-[#c59b6b]/35">01</span>
          <span className="text-[#c59b6b]/35">03</span>
          <span className="text-[#c59b6b]/35">05</span>
        </div>

        {/* Large Outlined "CONTENT" Watermark */}
        <div className="relative text-center pointer-events-none -my-6 sm:-my-10 z-0">
          <span
            className="text-6xl sm:text-8xl md:text-9xl lg:text-[140px] font-black tracking-[0.22em] uppercase font-sans select-none block"
            style={{
              WebkitTextStroke: "1.5px rgba(180, 160, 140, 0.4)",
              color: "transparent",
            }}
          >
            CONTENT
          </span>
          {/* Lower numbers in watermark: 02  04 */}
          <div className="absolute inset-0 flex items-center justify-around pointer-events-none px-20 sm:px-36">
            <span className="text-[#c59b6b]/30 text-2xl sm:text-4xl font-mono font-bold translate-y-6">02</span>
            <span className="text-[#c59b6b]/30 text-2xl sm:text-4xl font-mono font-bold translate-y-6">04</span>
          </div>
        </div>

        {/* --- 5 COLORED VERTICAL COLUMNS SHOWCASE (MATCHING REFERENCE POSTER) --- */}
        <div className="relative z-10 mt-6 shadow-2xl rounded-2xl sm:rounded-3xl overflow-hidden border border-stone-200/80 bg-white">
          <div className="grid grid-cols-1 md:grid-cols-5 min-h-[520px] sm:min-h-[580px]">
            {projects.map((proj, idx) => {
              const isDark = proj.textColor === "#ffffff";

              return (
                <div
                  key={proj.id}
                  onMouseEnter={() => setHoveredIndex(idx)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  onClick={() => setSelectedProject(proj)}
                  style={{ backgroundColor: proj.bgColor }}
                  className="relative group cursor-pointer transition-all duration-300 ease-out flex flex-col justify-between p-4 sm:p-5 border-b md:border-b-0 md:border-r last:border-r-0 border-black/10 overflow-hidden"
                >
                  {/* Subtle hover gloss */}
                  <div className="absolute inset-0 bg-white/0 group-hover:bg-white/10 transition-colors duration-300 pointer-events-none" />

                  {/* TOP: Mockup / Device illustration */}
                  <div className="relative z-10 w-full h-40 sm:h-44 flex items-center justify-center my-1 transform group-hover:scale-105 group-hover:-translate-y-1 transition-transform duration-300">
                    {idx === 0 && (
                      // Mockup 1: AI Chatbot Mobile Frame
                      <div className="relative w-28 h-38 bg-slate-900 rounded-2xl p-1.5 shadow-2xl border-2 border-white/30 flex flex-col justify-between">
                        <div className="w-8 h-1 bg-white/20 rounded-full mx-auto" />
                        <div className="bg-slate-800 rounded-md p-1 text-[7px] text-white flex items-center justify-between">
                          <span className="font-bold flex items-center gap-1">
                            <Sparkles className="w-2 h-2 text-blue-400" /> AI Bot
                          </span>
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                        </div>
                        <div className="space-y-1 my-1">
                          <div className="bg-blue-600 text-white text-[6.5px] p-1 rounded-md rounded-br-none self-end">
                            Analyze PDF context?
                          </div>
                          <div className="bg-slate-700 text-blue-100 text-[6.5px] p-1 rounded-md rounded-bl-none self-start">
                            Generating summary... ⚡
                          </div>
                        </div>
                        <div className="h-3.5 bg-slate-800 rounded px-1 flex items-center text-[5.5px] text-slate-400">
                          Type prompt...
                        </div>
                      </div>
                    )}

                    {idx === 1 && (
                      // Mockup 2: Slack Clone Interface
                      <div className="relative w-36 h-36 bg-[#3F0E40] rounded-xl p-1.5 shadow-2xl border-2 border-stone-800 flex overflow-hidden">
                        <div className="w-10 bg-[#350d36] rounded-l p-1 text-[6px] text-stone-200">
                          <div className="font-bold text-[6.5px] text-white mb-1"># Slack</div>
                          <div className="text-white/80"># general</div>
                          <div className="text-white/60"># dev</div>
                        </div>
                        <div className="flex-1 bg-white rounded-r p-1 text-[6.5px] text-stone-900 flex flex-col justify-between">
                          <div>
                            <div className="font-bold text-stone-800"># general</div>
                            <div className="mt-1 space-y-0.5">
                              <div><span className="font-bold">Rumaisha:</span> Shipped v1.0! 🚀</div>
                              <div className="text-stone-500">Fast streaming response</div>
                            </div>
                          </div>
                          <div className="bg-stone-100 rounded px-1 text-[5.5px] text-stone-400">
                            Reply in thread...
                          </div>
                        </div>
                      </div>
                    )}

                    {idx === 2 && (
                      // Mockup 3: Pinecone RAG Embeddings Card
                      <div className="relative w-32 h-36 bg-emerald-950/90 rounded-2xl p-2 shadow-2xl border-2 border-white/20 flex flex-col justify-between">
                        <div className="flex items-center justify-between text-white text-[7.5px] font-bold">
                          <span className="flex items-center gap-1">
                            <Database className="w-2.5 h-2.5 text-emerald-400" /> Pinecone
                          </span>
                          <span className="text-[6.5px] text-emerald-300">1536-dim</span>
                        </div>
                        <div className="h-16 w-full bg-emerald-900/40 rounded-lg p-1.5 flex flex-col justify-around border border-emerald-500/20">
                          <div className="flex items-center justify-between text-[6.5px] text-emerald-200">
                            <span>Similarity:</span>
                            <span className="font-mono font-bold text-white">0.984</span>
                          </div>
                          <div className="w-full bg-emerald-950 rounded-full h-1 overflow-hidden">
                            <div className="bg-emerald-400 h-full w-[95%]" />
                          </div>
                          <div className="text-[6px] text-emerald-300 flex items-center gap-1">
                            <Sparkles className="w-2 h-2 text-yellow-300" /> Gemini API Augmented
                          </div>
                        </div>
                        <div className="text-[6px] text-center text-emerald-200 font-mono">Vector Ingestion: Active</div>
                      </div>
                    )}

                    {idx === 3 && (
                      // Mockup 4: Docker & Caddy Terminal
                      <div className="relative w-34 h-36 bg-stone-900 rounded-xl p-2 shadow-2xl border-2 border-red-300/40 font-mono text-[6.5px] text-stone-200 flex flex-col justify-between">
                        <div className="flex items-center justify-between border-b border-stone-700 pb-1">
                          <div className="flex gap-1">
                            <div className="w-1.5 h-1.5 rounded-full bg-red-500" />
                            <div className="w-1.5 h-1.5 rounded-full bg-yellow-500" />
                            <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                          </div>
                          <span className="text-[5.5px] text-stone-400">caddy:443</span>
                        </div>
                        <div className="space-y-0.5">
                          <div className="text-emerald-400">$ docker compose up</div>
                          <div>✔ caddy proxy: UP [TLS]</div>
                          <div>✔ node api: PORT 5000</div>
                          <div>✔ postgres: CONNECTED</div>
                        </div>
                        <div className="bg-red-950/90 text-red-200 text-[6px] py-0.5 rounded text-center">
                          GCP Cloud Verified
                        </div>
                      </div>
                    )}

                    {idx === 4 && (
                      // Mockup 5: Responsive Web Devices
                      <div className="relative w-34 h-36 flex items-center justify-center">
                        <div className="w-28 h-20 bg-slate-900 rounded-lg p-1 shadow-2xl border border-white/30 flex flex-col">
                          <div className="h-1.5 bg-slate-800 rounded-t flex items-center px-1 gap-0.5">
                            <div className="w-1 h-1 rounded-full bg-rose-400" />
                            <div className="w-1 h-1 rounded-full bg-emerald-400" />
                          </div>
                          <div className="flex-1 bg-slate-950 p-1 flex flex-col justify-center items-center text-center">
                            <span className="text-[7px] text-white font-bold">Next.js 16</span>
                            <span className="text-[5.5px] text-indigo-300">Fast & Responsive</span>
                          </div>
                        </div>
                        <div className="absolute -bottom-1 -right-1 w-10 h-16 bg-slate-900 rounded-lg border-2 border-indigo-400 p-0.5 shadow-xl flex flex-col justify-between">
                          <div className="w-2.5 h-0.5 bg-white/40 rounded-full mx-auto" />
                          <div className="text-center text-[5px] text-white">Full-Stack</div>
                          <div className="w-2 h-0.5 bg-white/30 rounded-full mx-auto" />
                        </div>
                      </div>
                    )}
                  </div>

                  {/* MIDDLE: THE GIANT NUMERAL '1', '2', '3', '4', '5' (MATCHING REFERENCE POSTER) */}
                  <div className="relative my-2 flex flex-col items-center select-none">
                    <span
                      className="text-7xl sm:text-8xl md:text-9xl font-black leading-none tracking-tighter opacity-95 transition-transform duration-300 group-hover:scale-105"
                      style={{
                        color: isDark ? "#ffffff" : "#2b251e",
                      }}
                    >
                      {proj.numberStr}
                    </span>
                  </div>

                  {/* BOTTOM: PROJECT TITLE & SHORT CAPTION */}
                  <div className="relative z-10 flex flex-col items-center text-center mt-1">
                    <h3
                      className="text-sm sm:text-base font-black tracking-tight uppercase"
                      style={{ color: proj.textColor }}
                    >
                      {proj.title}
                    </h3>
                    <p
                      className="text-[10px] sm:text-[11px] font-medium line-clamp-1 mt-0.5 opacity-85 max-w-[180px]"
                      style={{ color: proj.textColor }}
                    >
                      {proj.subtitle}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* --- FLOATING CONTROLS & BADGES (MATCHING REFERENCE BUTTONS) --- */}
        <div className="mt-8 flex flex-wrap items-center justify-between gap-4 px-2">
          {/* Left pill button: "↗ Visit site" badge (exactly like reference!) */}
          <a
            href="https://github.com/rumaishapk"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-white text-stone-900 hover:bg-stone-50 border border-stone-200/90 shadow-xl hover:shadow-2xl transition-all duration-300 font-bold text-xs sm:text-sm group"
          >
            <ArrowUpRight className="w-4 h-4 text-stone-900 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            <span>Visit site</span>
          </a>

          {/* Right floating helper icons: Expand & Search badges like reference */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setSelectedProject(projects[0])}
              className="p-2.5 rounded-full bg-white text-stone-800 border border-stone-200 shadow-md hover:scale-105 transition-all"
              title="Expand Details"
            >
              <Maximize2 className="w-4 h-4" />
            </button>
            <button
              onClick={() => setSelectedProject(projects[0])}
              className="p-2.5 rounded-full bg-white text-stone-800 border border-stone-200 shadow-md hover:scale-105 transition-all"
              title="Inspect Projects"
            >
              <Search className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>

      {/* --- INTERACTIVE PROJECT MODAL --- */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-950/60 backdrop-blur-sm animate-in fade-in duration-200">
          <div
            className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-stone-200 overflow-hidden transform animate-in zoom-in-95 duration-200 max-h-[90vh] flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div
              className="p-6 text-white relative flex items-start justify-between"
              style={{ backgroundColor: selectedProject.bgColor }}
            >
              <div>
                <span className="text-xs uppercase tracking-widest font-mono px-2 py-0.5 rounded bg-black/20 font-bold">
                  Project 0{selectedProject.numberStr} • {selectedProject.category}
                </span>
                <h3 className="text-2xl sm:text-3xl font-black mt-2">{selectedProject.title}</h3>
                <p className="text-sm opacity-90 mt-1">{selectedProject.subtitle}</p>
              </div>

              <button
                onClick={() => setSelectedProject(null)}
                className="w-9 h-9 rounded-full bg-black/20 hover:bg-black/30 text-white flex items-center justify-center transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Content */}
            <div className="p-6 overflow-y-auto space-y-5 text-stone-800">
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-stone-500 mb-2">Overview</h4>
                <p className="text-sm sm:text-base leading-relaxed text-stone-700">{selectedProject.description}</p>
              </div>

              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-stone-500 mb-2.5">Key Implementation Details</h4>
                <div className="space-y-2">
                  {selectedProject.details.map((item, i) => (
                    <div key={i} className="flex items-start gap-2 text-sm text-stone-700">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-2 shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-stone-500 mb-2.5">Technologies Used</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs font-semibold px-3 py-1 rounded-full bg-stone-100 text-stone-800 border border-stone-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="p-4 rounded-xl bg-amber-50 border border-amber-200/80 text-amber-900 flex items-center gap-3">
                <Sparkles className="w-5 h-5 text-amber-600 shrink-0" />
                <div className="text-xs sm:text-sm">
                  <span className="font-bold">Highlight: </span>
                  {selectedProject.highlights}
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="p-5 bg-stone-50 border-t border-stone-200 flex items-center justify-between">
              <a
                href={selectedProject.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-stone-900 text-white hover:bg-stone-800 text-xs sm:text-sm font-semibold shadow transition-all"
              >
                <GithubIcon className="w-4 h-4" />
                <span>View on GitHub</span>
              </a>

              <button
                onClick={() => setSelectedProject(null)}
                className="px-4 py-2 rounded-xl border border-stone-300 text-stone-700 hover:bg-stone-100 text-xs sm:text-sm font-medium transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
