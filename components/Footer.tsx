"use client";

import React from "react";
import { ArrowUp, Mail, Phone, Heart } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./SocialIcons";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-stone-900 text-stone-200 py-16 px-4 sm:px-6 lg:px-8 border-t border-stone-800">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-stone-800">
          {/* Brand & Statement */}
          <div className="md:col-span-5 space-y-3">
            <div className="flex items-center gap-2">
              <span className="text-xl font-black tracking-widest uppercase text-white font-sans">
                RUMAISHA
              </span>
            </div>
            <p className="text-xs sm:text-sm text-stone-400 max-w-sm leading-relaxed">
              Frontend & Full-Stack Developer specializing in Next.js, TypeScript, cloud deployments, and AI integrations. Building products that feel effortless.
            </p>
            <div className="pt-2 flex items-center gap-2 text-xs text-stone-400">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              <span>Available for remote & on-site opportunities</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-2.5">
            <h4 className="text-xs font-mono uppercase tracking-widest text-stone-400 font-bold">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-stone-300">
              <li>
                <a href="#about" className="hover:text-white transition-colors">
                  About Me & Bio
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-white transition-colors">
                  Tech Stack & Softwares
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-white transition-colors">
                  Featured Projects (01 - 05)
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">
                  Contact Information
                </a>
              </li>
            </ul>
          </div>

          {/* Direct Channels */}
          <div className="md:col-span-4 space-y-2.5">
            <h4 className="text-xs font-mono uppercase tracking-widest text-stone-400 font-bold">
              Connect Directly
            </h4>
            <div className="space-y-2 text-xs sm:text-sm text-stone-300">
              <div>
                <a
                  href="mailto:rumaisharumi27@gmail.com"
                  className="hover:text-amber-300 transition-colors flex items-center gap-2"
                >
                  <Mail className="w-3.5 h-3.5 text-stone-400" />
                  <span>rumaisharumi27@gmail.com</span>
                </a>
              </div>
              <div>
                <a
                  href="tel:9947257480"
                  className="hover:text-amber-300 transition-colors flex items-center gap-2"
                >
                  <Phone className="w-3.5 h-3.5 text-stone-400" />
                  <span>+91 9947257480</span>
                </a>
              </div>
              <div className="pt-2 flex items-center gap-2">
                <a
                  href="https://github.com/rumaishapk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-stone-800 hover:bg-stone-700 text-white transition-colors"
                  aria-label="GitHub"
                >
                  <GithubIcon className="w-4 h-4" />
                </a>
                <a
                  href="https://www.linkedin.com/in/rumaisha-pk-666702294/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-stone-800 hover:bg-blue-600 text-white transition-colors"
                  aria-label="LinkedIn"
                >
                  <LinkedinIcon className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-500">
          <div className="flex items-center gap-1">
            <span>© 2026 Rumaisha. Crafted with Next.js, TypeScript & Tailwind CSS.</span>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-stone-400 hover:text-white transition-colors group"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
}
