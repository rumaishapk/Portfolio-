"use client";

import React from "react";
import Image from "next/image";
import { ArrowDown, Mail, ArrowUpRight, Sparkles } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./SocialIcons";

export default function HeroSection() {
  return (
    <section className="relative min-h-[92vh] sm:min-h-[98vh] flex flex-col justify-center items-center pt-24 sm:pt-28 pb-16 px-4 sm:px-6 overflow-hidden bg-[#fbfdfd]">
      {/* Ambient turquoise/cyan luminous glow matching avatar theme */}
      <div className="absolute top-12 left-1/2 -translate-x-1/2 w-[850px] h-[450px] bg-gradient-to-b from-cyan-200/35 via-teal-100/20 to-transparent blur-3xl pointer-events-none -z-10" />

      {/* Main Hero Container */}
      <div className="relative w-full max-w-6xl mx-auto flex flex-col items-center">
        
        {/* --- ARTISTIC "RUMAISHA ‘26" CUTOUT TYPOGRAPHY + AVATAR --- */}
        <div className="relative w-full flex items-center justify-center min-h-[460px] sm:min-h-[540px] md:min-h-[600px]">
          
          {/* Scoped styles ensuring individual letter hover animation applies immediately */}
          <style>{`
            @keyframes rumaishaLetterBob {
              0%, 100% {
                transform: translateY(0px);
              }
              50% {
                transform: translateY(-26px);
              }
            }

            .rumaisha-letter-target {
              display: inline-block;
              cursor: pointer;
              position: relative;
            }

            .rumaisha-letter-glyph {
              display: inline-block;
              transition: transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1), color 0.2s ease, filter 0.2s ease;
              will-change: transform;
            }

            /* Moves up and down ONLY when hovering over that specific letter */
            .rumaisha-letter-target:hover .rumaisha-letter-glyph {
              animation: rumaishaLetterBob 1.05s ease-in-out infinite;
              color: #06b6d4 !important;
              filter: drop-shadow(0 12px 24px rgba(6, 182, 212, 0.45));
            }
          `}</style>

          {/* BACKGROUND BOLD ARTISTIC CUTOUT TYPOGRAPHY (Spelling RUMAISHA) */}
          <div className="absolute inset-x-0 top-0 sm:top-2 flex items-start justify-center select-none pointer-events-auto z-0">
            <div 
              className="relative flex items-center justify-center font-black tracking-tighter text-[#0891b2] leading-none drop-shadow-[0_8px_24px_rgba(8,145,178,0.18)]"
              title="Rumaisha"
            >
              
              {/* LEFT GROUP: R U M (Arched over left shoulder) */}
              <div className="flex items-center text-6xl sm:text-8xl md:text-[120px] lg:text-[145px] font-black text-[#0891b2] pr-1 sm:pr-3">
                <span className="rumaisha-letter-target transform -rotate-6 inline-block">
                  <span className="rumaisha-letter-glyph">R</span>
                </span>
                <span className="rumaisha-letter-target transform rotate-2 inline-block -ml-2 sm:-ml-4">
                  <span className="rumaisha-letter-glyph">U</span>
                </span>
                <span className="rumaisha-letter-target transform -rotate-3 inline-block -ml-2 sm:-ml-4">
                  <span className="rumaisha-letter-glyph">M</span>
                </span>
              </div>

              {/* CENTER TALL CROSS 'A' (Towering centerpiece like reference) */}
              <div className="relative flex flex-col items-center -mt-8 sm:-mt-14 z-20">
                <span className="rumaisha-letter-target text-8xl sm:text-[140px] md:text-[180px] lg:text-[210px] font-black text-[#0891b2] leading-none inline-block">
                  <span className="rumaisha-letter-glyph">A</span>
                </span>
              </div>

              {/* RIGHT GROUP: I S H A */}
              <div className="relative flex items-center text-6xl sm:text-8xl md:text-[120px] lg:text-[145px] font-black text-[#0891b2] pl-1 sm:pl-3">
                <span className="rumaisha-letter-target transform -rotate-2 inline-block mx-0.5 sm:mx-1 text-[#0891b2]">
                  <span className="rumaisha-letter-glyph">I</span>
                </span>
                <span className="rumaisha-letter-target transform rotate-3 inline-block -ml-1 sm:-ml-3 text-[#0891b2]">
                  <span className="rumaisha-letter-glyph">S</span>
                </span>
                <span className="rumaisha-letter-target transform -rotate-2 inline-block -ml-1 sm:-ml-3 text-[#0891b2]">
                  <span className="rumaisha-letter-glyph">H</span>
                </span>
                <span className="rumaisha-letter-target transform -rotate-6 inline-block -ml-1 sm:-ml-3 text-[#0891b2]">
                  <span className="rumaisha-letter-glyph">A</span>
                </span>
              </div>

            </div>
          </div>

          {/* CENTRAL AVATAR (User's real avatar wearing turquoise dress & white hijab) */}
          <div className="relative z-10 mt-12 sm:mt-16 w-[310px] sm:w-[390px] md:w-[450px] pointer-events-none transition-transform hover:scale-[1.015] duration-300 flex items-center justify-center">
            {/* Soft turquoise backlight halo behind avatar */}
            <div className="absolute inset-4 rounded-full bg-gradient-to-t from-cyan-400/25 via-teal-300/20 to-transparent blur-2xl -z-10 pointer-events-none" />

            <Image
              src="/rumaisha.png"
              alt="Rumaisha - Frontend & Full-Stack Developer"
              width={520}
              height={520}
              priority
              className="w-full h-auto object-contain drop-shadow-[0_20px_35px_rgba(8,145,178,0.22)] select-none pointer-events-none"
            />
          </div>

        </div>

        {/* --- ROLE & QUICK BIO (TURQUOISE / GOLD ACCENT THEME) --- */}
        <div className="relative z-20 flex flex-col items-center text-center mt-1 sm:mt-2">
          {/* Subtitle / Role Badge (Semantic h1 for SEO) */}
          <div className="flex items-center gap-2">
            <h1 className="text-xs sm:text-sm md:text-base font-semibold tracking-wider uppercase text-cyan-950 bg-cyan-50/90 border border-cyan-200/90 px-4 py-1.5 rounded-full shadow-xs flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse" />
              <span>Frontend & Full-Stack Developer</span>
            </h1>
          </div>

          {/* Micro bio summary line */}
          <p className="mt-2.5 text-xs sm:text-sm text-stone-600 max-w-md font-medium px-4">
            Specializing in Next.js, TypeScript, Cloud DevOps & Generative AI integrations
          </p>

          {/* Quick CTA Actions */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <a
              href="#about"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-stone-900 text-white hover:bg-cyan-900 text-xs sm:text-sm font-semibold shadow-md hover:shadow-lg transition-all"
            >
              <span>Discover My Work</span>
              <ArrowDown className="w-3.5 h-3.5 text-cyan-300 animate-bounce" />
            </a>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-cyan-950 hover:bg-cyan-50 border border-cyan-200 text-xs sm:text-sm font-semibold shadow-xs hover:shadow transition-all"
            >
              <span>Get in Touch</span>
            </a>

            {/* Direct social links with teal highlights */}
            <div className="flex items-center gap-1.5 ml-1">
              <a
                href="https://github.com/rumaishapk"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                className="p-2 rounded-full bg-white border border-cyan-100 text-stone-700 hover:text-cyan-700 hover:bg-cyan-50 transition-colors shadow-xs"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <a
                href="https://www.linkedin.com/in/rumaisha-pk-666702294/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className="p-2 rounded-full bg-white border border-cyan-100 text-stone-700 hover:text-blue-600 hover:bg-cyan-50 transition-colors shadow-xs"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
              <a
                href="mailto:rumaisharumi27@gmail.com"
                aria-label="Send Email"
                className="p-2 rounded-full bg-white border border-cyan-100 text-stone-700 hover:text-cyan-700 hover:bg-cyan-50 transition-colors shadow-xs"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
