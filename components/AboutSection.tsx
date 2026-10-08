"use client";

import React, { useState } from "react";
import LanyardBadge from "./LanyardBadge";
import { Mail, Phone, ExternalLink, Copy, Check, GraduationCap, Cpu, Layers, Cloud, Sparkles, Terminal } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./SocialIcons";

export default function AboutSection() {
  const [copiedItem, setCopiedItem] = useState<string | null>(null);

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedItem(label);
    setTimeout(() => setCopiedItem(null), 2000);
  };

  const softwareStack = [
    { name: "Next.js", color: "bg-black text-white" },
    { name: "React", color: "bg-sky-500 text-white" },
    { name: "TypeScript", color: "bg-blue-600 text-white" },
    { name: "Tailwind CSS", color: "bg-teal-500 text-white" },
    { name: "Node.js", color: "bg-emerald-600 text-white" },
    { name: "Docker", color: "bg-cyan-600 text-white" },
    { name: "GCP", color: "bg-amber-600 text-white" },
    { name: "PostgreSQL", color: "bg-indigo-600 text-white" },
    { name: "MongoDB", color: "bg-green-700 text-white" },
    { name: "Gemini AI", color: "bg-purple-600 text-white" },
  ];

  return (
    <section id="about" className="relative py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-white border-t border-stone-200/80">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          
          {/* --- LEFT COLUMN: HANGING LANYARD PASS BADGE (Like reference) --- */}
          <div className="lg:col-span-4 flex justify-center lg:sticky lg:top-24">
            <LanyardBadge />
          </div>

          {/* --- RIGHT COLUMN: BIO, EXPERIENCE, STACK, CONTACT --- */}
          <div className="lg:col-span-8 flex flex-col justify-start">
            
            {/* Heading: "HI, I'm Rumaisha" */}
            <div className="mb-4">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-stone-900 font-sans">
                HI, I'm <span className="text-[#0891b2]">Rumaisha</span>
              </h2>
            </div>

            {/* Narrative Bio paragraph */}
            <p className="text-sm sm:text-base text-stone-600 leading-relaxed font-normal max-w-2xl mb-8">
              I am a Frontend & Full-Stack Developer and I build modern web applications because I love solving problems, questioning &lsquo;why&rsquo;, and making things feel right. Development isn&rsquo;t just about writing code; it&rsquo;s about people, smooth workflows, and the fine details that make a product intuitive and reliable. If it feels effortless without overthinking, I&rsquo;ve done my job.
            </p>

            {/* --- 3-COLUMN STRUCTURED INFO (EXPERIENCE / EDUCATION / CONTACT) --- */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6 border-t border-stone-200">
              
              {/* Column 1: FRONTEND & CORE */}
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-4 rounded-full bg-[#0891b2]" />
                  <h3 className="text-xs font-black tracking-wider uppercase text-stone-900">
                    FRONTEND DEV
                  </h3>
                </div>

                <div className="space-y-3">
                  <div>
                    <h4 className="text-xs font-bold text-stone-900">Next.js & React</h4>
                    <p className="text-[11px] text-stone-500">App Router, SSR, Server Components</p>
                  </div>

                  <div>
                    <h4 className="text-xs font-bold text-stone-900">TypeScript & JavaScript</h4>
                    <p className="text-[11px] text-stone-500">Strict typing, modern ESNext, Async</p>
                  </div>

                  <div>
                    <h4 className="text-xs font-bold text-stone-900">Tailwind CSS & Styling</h4>
                    <p className="text-[11px] text-stone-500">Fluid layouts, animations, design tokens</p>
                  </div>

                  <div>
                    <h4 className="text-xs font-bold text-stone-900">HTML5 & Web Standards</h4>
                    <p className="text-[11px] text-stone-500">Semantic markup, responsive UI, UX</p>
                  </div>
                </div>
              </div>

              {/* Column 2: BACKEND & CLOUD */}
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-4 rounded-full bg-[#0891b2]" />
                  <h3 className="text-xs font-black tracking-wider uppercase text-stone-900">
                    BACKEND & CLOUD
                  </h3>
                </div>

                <div className="space-y-3">
                  <div>
                    <h4 className="text-xs font-bold text-stone-900">Node.js & Express.js</h4>
                    <p className="text-[11px] text-stone-500">REST APIs, JWT auth, middleware</p>
                  </div>

                  <div>
                    <h4 className="text-xs font-bold text-stone-900">PostgreSQL, Mongo, MySQL</h4>
                    <p className="text-[11px] text-stone-500">Relational & NoSQL database schemas</p>
                  </div>

                  <div>
                    <h4 className="text-xs font-bold text-stone-900">Docker & Caddy Proxy</h4>
                    <p className="text-[11px] text-stone-500">Containerization & auto HTTPS</p>
                  </div>

                  <div>
                    <h4 className="text-xs font-bold text-stone-900">GCP, AWS & Git</h4>
                    <p className="text-[11px] text-stone-500">Compute engine, version control, CI/CD</p>
                  </div>

                  <div>
                    <h4 className="text-xs font-bold text-stone-900">RAG & AI Integrations</h4>
                    <p className="text-[11px] text-stone-500">Pinecone Vector DB, Gemini API</p>
                  </div>
                </div>
              </div>

              {/* Column 3: EDUCATION & CONTACT */}
              <div className="space-y-5">
                {/* Education */}
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-4 rounded-full bg-[#0891b2]" />
                    <h3 className="text-xs font-black tracking-wider uppercase text-stone-900">
                      EDUCATION
                    </h3>
                  </div>
                  <div className="bg-stone-50 rounded-lg p-2.5 border border-stone-200/80">
                    <div className="flex items-start gap-2">
                      <GraduationCap className="w-4 h-4 text-stone-700 mt-0.5 shrink-0" />
                      <div>
                        <h4 className="text-xs font-bold text-stone-900 leading-snug">
                          Diploma in Computer Application & Business Management
                        </h4>
                        <span className="text-[10px] text-stone-500 block mt-0.5 font-medium">
                          Foundations in Software & Management
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Contact Links */}
                <div id="contact" className="space-y-2.5">
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-4 rounded-full bg-[#0891b2]" />
                    <h3 className="text-xs font-black tracking-wider uppercase text-stone-900">
                      CONTACT
                    </h3>
                  </div>

                  <div className="space-y-1.5 text-xs text-stone-700">
                    {/* Email */}
                    <div className="flex items-center justify-between p-1.5 rounded-md hover:bg-stone-50 group border border-transparent hover:border-stone-200 transition-colors">
                      <a
                        href="mailto:rumaisharumi27@gmail.com"
                        className="flex items-center gap-2 truncate text-stone-800 font-medium hover:text-amber-800"
                      >
                        <Mail className="w-3.5 h-3.5 text-stone-500 shrink-0" />
                        <span className="truncate text-[11px]">rumaisharumi27@gmail.com</span>
                      </a>
                      <button
                        onClick={() => copyToClipboard("rumaisharumi27@gmail.com", "email")}
                        className="p-1 text-stone-400 hover:text-stone-700 rounded transition-colors"
                        title="Copy email"
                      >
                        {copiedItem === "email" ? (
                          <Check className="w-3 h-3 text-emerald-600" />
                        ) : (
                          <Copy className="w-3 h-3" />
                        )}
                      </button>
                    </div>

                    {/* Phone */}
                    <div className="flex items-center justify-between p-1.5 rounded-md hover:bg-stone-50 group border border-transparent hover:border-stone-200 transition-colors">
                      <a
                        href="tel:9947257480"
                        className="flex items-center gap-2 text-stone-800 font-medium hover:text-amber-800"
                      >
                        <Phone className="w-3.5 h-3.5 text-stone-500 shrink-0" />
                        <span className="text-[11px]">+91 9947257480</span>
                      </a>
                      <button
                        onClick={() => copyToClipboard("9947257480", "phone")}
                        className="p-1 text-stone-400 hover:text-stone-700 rounded transition-colors"
                        title="Copy phone"
                      >
                        {copiedItem === "phone" ? (
                          <Check className="w-3 h-3 text-emerald-600" />
                        ) : (
                          <Copy className="w-3 h-3" />
                        )}
                      </button>
                    </div>

                    {/* LinkedIn */}
                    <div className="p-1.5 rounded-md hover:bg-stone-50 border border-transparent hover:border-stone-200 transition-colors">
                      <a
                        href="https://www.linkedin.com/in/rumaisha-pk-666702294/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-stone-800 font-medium hover:text-blue-600"
                      >
                        <LinkedinIcon className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                        <span className="truncate text-[11px]">linkedin/rumaisha-pk</span>
                        <ExternalLink className="w-2.5 h-2.5 text-stone-400 ml-auto shrink-0" />
                      </a>
                    </div>

                    {/* GitHub */}
                    <div className="p-1.5 rounded-md hover:bg-stone-50 border border-transparent hover:border-stone-200 transition-colors">
                      <a
                        href="https://github.com/rumaishapk"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-stone-800 font-medium hover:text-stone-950"
                      >
                        <GithubIcon className="w-3.5 h-3.5 text-stone-900 shrink-0" />
                        <span className="truncate text-[11px]">github.com/rumaishapk</span>
                        <ExternalLink className="w-2.5 h-2.5 text-stone-400 ml-auto shrink-0" />
                      </a>
                    </div>
                  </div>
                </div>

              </div>

            </div>

            {/* --- SOFTWARES / TECH STACK PILL ROW (MATCHING REFERENCE "SOFTWARES" ROW) --- */}
            <div className="mt-8 pt-6 border-t border-stone-200">
              <div className="flex items-center justify-between mb-3">
                <span className="text-[11px] font-black tracking-widest uppercase text-stone-800">
                  SOFTWARES & TECHNOLOGIES
                </span>
                <span className="text-[10px] text-stone-400 font-mono">10+ PRODUCTION TOOLS</span>
              </div>

              <div className="flex flex-wrap items-center gap-2">
                {softwareStack.map((tech) => (
                  <div
                    key={tech.name}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-stone-100 hover:bg-stone-200 border border-stone-200 text-stone-800 text-xs font-semibold transition-all hover:scale-105 select-none shadow-xs"
                  >
                    <span className={`w-2 h-2 rounded-full ${tech.color.split(" ")[0]}`} />
                    <span>{tech.name}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
