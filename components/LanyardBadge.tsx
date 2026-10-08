"use client";

import React, { useState } from "react";
import Image from "next/image";
import { CheckCircle2 } from "lucide-react";

export default function LanyardBadge() {
  const [isHovered, setIsHovered] = useState(false);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 14;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * -14;
    setTilt({ x, y });
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setTilt({ x: 0, y: 0 });
  };

  return (
    <div className="relative flex flex-col items-center select-none w-full max-w-[280px] sm:max-w-[310px] mx-auto group">
      {/* --- REALISTIC CURVED LANYARD STRAP (Matching reference) --- */}
      <div className="relative w-40 h-28 flex flex-col items-center pointer-events-none -mb-3 z-10">
        <svg viewBox="0 0 160 120" className="w-40 h-28 overflow-visible">
          <defs>
            <linearGradient id="strapGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ebe7e1" />
              <stop offset="50%" stopColor="#ffffff" />
              <stop offset="100%" stopColor="#ded9d0" />
            </linearGradient>
            <filter id="ribbonShadow" x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow dx="3" dy="6" stdDeviation="4" floodColor="#000000" floodOpacity="0.12" />
            </filter>
          </defs>

          {/* Curved Ribbon path coming from top-left */}
          <path
            d="M20 -20 C25 20, 60 70, 78 86"
            stroke="url(#strapGrad)"
            strokeWidth="20"
            strokeLinecap="round"
            filter="url(#ribbonShadow)"
            fill="none"
          />
          {/* Subtle inner ribbon fold highlight */}
          <path
            d="M20 -20 C25 20, 60 70, 78 86"
            stroke="#d4cebe"
            strokeWidth="1"
            fill="none"
          />

          {/* Silver Metal Swivel Clip */}
          <g transform="translate(78, 86)">
            {/* Split ring */}
            <circle cx="0" cy="5" r="7" fill="none" stroke="#9ca3af" strokeWidth="3.5" />
            <circle cx="0" cy="5" r="7" fill="none" stroke="#d1d5db" strokeWidth="1.5" />
            
            {/* Clasp body */}
            <rect x="-4.5" y="10" width="9" height="15" rx="2" fill="url(#strapGrad)" stroke="#9ca3af" strokeWidth="1" />
            <rect x="-2" y="14" width="4" height="6" rx="1" fill="#6b7280" />
            
            {/* Clasp hook latch through pouch hole */}
            <path d="M-3.5 25 C-3.5 32, 3.5 32, 3.5 25 Z" fill="#9ca3af" stroke="#6b7280" strokeWidth="1" />
          </g>
        </svg>
      </div>

      {/* --- THE ID CARD BADGE CONTAINER WITH TILT --- */}
      <div
        onMouseEnter={() => setIsHovered(true)}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          transform: `perspective(1000px) rotateX(${tilt.y}deg) rotateY(${tilt.x}deg) ${
            isHovered ? "rotateZ(-3deg) translateY(-4px)" : "rotateZ(-9deg)"
          }`,
          transition: isHovered ? "transform 0.1s ease-out" : "transform 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)",
        }}
        className="relative w-full cursor-pointer transition-shadow duration-300 ease-out"
      >
        {/* Transparent Vinyl Pouch with border weld & punch hole */}
        <div className="relative rounded-2xl p-2.5 bg-white/80 backdrop-blur-md border border-cyan-100/80 shadow-[0_25px_45px_-12px_rgba(8,145,178,0.18),0_10px_20px_rgba(0,0,0,0.06)] overflow-hidden">
          
          {/* Top Oval Hole Punch for lanyard clip */}
          <div className="w-10 h-2.5 mx-auto mb-2 rounded-full bg-stone-300/80 border border-stone-400/60 shadow-inner" />

          {/* Plastic Gloss Glare Reflection */}
          <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/45 to-transparent pointer-events-none transform -skew-x-12 translate-x-[-25%] group-hover:translate-x-[45%] transition-transform duration-1000" />

          {/* INNER PASS CARD */}
          <div className="bg-[#fcfefe] rounded-xl border border-cyan-100/90 overflow-hidden text-stone-900 shadow-sm">
            {/* Header Ribbon in Ocean Teal Theme */}
            <div className="bg-gradient-to-r from-cyan-900 via-teal-800 to-slate-900 text-white px-3.5 py-2 flex items-center justify-between">
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                <span className="text-[10px] font-semibold tracking-wider uppercase text-cyan-200">PASS &lsquo;26</span>
              </div>
              <span className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-white/10 text-cyan-200 font-medium">FULL-STACK</span>
            </div>

            {/* Profile Photo & Info */}
            <div className="p-4 flex flex-col items-center text-center">
              {/* Photo Box with Rumaisha's real avatar */}
              <div className="relative w-32 h-36 rounded-xl overflow-hidden border-2 border-cyan-200 shadow-md bg-gradient-to-b from-cyan-50 to-teal-50 mb-3 group-hover:shadow-lg transition-shadow">
                <div className="w-full h-full relative flex items-center justify-center p-1">
                  <Image
                    src="/rumaisha.png"
                    alt="Rumaisha"
                    width={160}
                    height={160}
                    className="w-full h-full object-contain object-top"
                  />
                  {/* Verified check badge */}
                  <div className="absolute bottom-1 right-1 bg-white rounded-full p-0.5 shadow-sm">
                    <CheckCircle2 className="w-3.5 h-3.5 text-cyan-600 fill-cyan-50" />
                  </div>
                </div>
              </div>

              {/* Name & Title */}
              <h3 className="text-base font-black tracking-tight text-stone-900 uppercase">Rumaisha</h3>
              <p className="text-[11px] font-semibold text-cyan-800 mt-0.5">Frontend & Full-Stack Dev</p>
              
              {/* Quick tags */}
              <div className="flex items-center justify-center gap-1.5 mt-2 flex-wrap">
                <span className="text-[9px] font-medium px-2 py-0.5 rounded-full bg-cyan-50 text-cyan-800 border border-cyan-200">Next.js</span>
                <span className="text-[9px] font-medium px-2 py-0.5 rounded-full bg-cyan-50 text-cyan-800 border border-cyan-200">TypeScript</span>
                <span className="text-[9px] font-medium px-2 py-0.5 rounded-full bg-cyan-50 text-cyan-800 border border-cyan-200">Docker</span>
              </div>

              {/* Status Indicator */}
              <div className="w-full mt-3.5 pt-2.5 border-t border-dashed border-stone-200 flex items-center justify-between text-[10px] text-stone-500 font-mono">
                <span className="flex items-center gap-1 text-teal-700 font-semibold">
                  <span className="w-1.5 h-1.5 rounded-full bg-teal-500 animate-ping" />
                  AVAILABLE NOW
                </span>
                <span className="text-stone-400">ID: RUM-2026</span>
              </div>

              {/* Barcode graphic */}
              <div className="w-full mt-2.5 flex items-center justify-between h-7 px-1 opacity-80">
                <div className="flex items-center h-full gap-[2px] w-full justify-between">
                  {[4,2,6,1,3,5,2,4,7,2,5,3,6,1,4,2,3,5,2,4,6,1,3,4,2,5,1,4].map((h, i) => (
                    <div
                      key={i}
                      className="bg-stone-900 rounded-full"
                      style={{
                        width: i % 3 === 0 ? "2px" : "1.2px",
                        height: `${60 + (h * 4)}%`,
                      }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Realistic drop shadow underneath lanyard card */}
        <div className="w-3/4 h-4 mx-auto mt-2 rounded-full bg-cyan-900/15 blur-lg" />
      </div>
    </div>
  );
}
