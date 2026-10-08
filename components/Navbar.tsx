"use client";

import React, { useState, useEffect } from "react";
import { Mail, ArrowUpRight, Menu, X } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./SocialIcons";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? "bg-[#faf8f5]/85 backdrop-blur-md border-b border-stone-200/80 shadow-xs py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand */}
        <a href="#" className="flex flex-col group">
          <span className="font-extrabold text-base tracking-widest uppercase text-stone-900 group-hover:text-cyan-700 transition-colors">
            Rumaisha
          </span>
          <span className="text-[10px] text-stone-500 font-mono -mt-0.5 flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 animate-pulse" />
            Full-Stack Developer
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-7 text-xs font-semibold tracking-wider uppercase text-stone-600">
          <a href="#about" className="hover:text-stone-900 transition-colors">
            About
          </a>
          <a href="#about" className="hover:text-stone-900 transition-colors">
            Experience
          </a>
          <a href="#projects" className="hover:text-stone-900 transition-colors">
            Projects
          </a>
          <a href="#contact" className="hover:text-stone-900 transition-colors">
            Contact
          </a>
        </nav>

        {/* Right Action Buttons */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href="https://github.com/rumaishapk"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="p-2 rounded-full hover:bg-stone-200/60 text-stone-700 transition-colors"
          >
            <GithubIcon className="w-4 h-4" />
          </a>
          <a
            href="https://www.linkedin.com/in/rumaisha-pk-666702294/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="p-2 rounded-full hover:bg-stone-200/60 text-stone-700 transition-colors"
          >
            <LinkedinIcon className="w-4 h-4" />
          </a>
          <a
            href="mailto:rumaisharumi27@gmail.com"
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-stone-900 text-white hover:bg-stone-800 text-xs font-semibold shadow-xs transition-all hover:scale-105"
          >
            <span>Say Hello</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-amber-400" />
          </a>
        </div>

        {/* Mobile menu button */}
        <div className="flex sm:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg text-stone-700 hover:bg-stone-200/50"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="sm:hidden bg-[#faf8f5] border-b border-stone-200 px-6 py-5 flex flex-col gap-4 text-sm font-semibold uppercase tracking-wider text-stone-800 animate-in slide-in-from-top-3">
          <a
            href="#about"
            onClick={() => setMobileMenuOpen(false)}
            className="py-1 hover:text-amber-800"
          >
            About & Experience
          </a>
          <a
            href="#projects"
            onClick={() => setMobileMenuOpen(false)}
            className="py-1 hover:text-amber-800"
          >
            Featured Projects (01 - 05)
          </a>
          <a
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="py-1 hover:text-amber-800"
          >
            Contact Details
          </a>
          <div className="pt-3 border-t border-stone-200 flex items-center justify-between">
            <div className="flex gap-3">
              <a href="https://github.com/rumaishapk" target="_blank" rel="noopener noreferrer">
                <GithubIcon className="w-5 h-5 text-stone-700" />
              </a>
              <a
                href="https://www.linkedin.com/in/rumaisha-pk-666702294/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <LinkedinIcon className="w-5 h-5 text-stone-700" />
              </a>
            </div>
            <a
              href="mailto:rumaisharumi27@gmail.com"
              className="px-4 py-2 bg-stone-900 text-white rounded-full text-xs font-bold"
            >
              Contact Me
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
