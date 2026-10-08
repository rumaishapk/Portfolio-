"use client";

import React from "react";

export default function AvatarIllustration({ className = "" }: { className?: string }) {
  return (
    <div className={`relative flex items-center justify-center select-none ${className}`}>
      {/* Ambient warm glow behind avatar */}
      <div className="absolute inset-0 bg-gradient-to-t from-amber-200/40 via-amber-100/20 to-transparent rounded-full blur-3xl transform scale-95 -z-10" />

      <svg
        viewBox="0 0 520 620"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto drop-shadow-[0_25px_40px_rgba(0,0,0,0.18)] max-w-[430px]"
      >
        <defs>
          {/* Skin tones */}
          <linearGradient id="skinBase" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#ffdfcc" />
            <stop offset="60%" stopColor="#f8cbb1" />
            <stop offset="100%" stopColor="#f2b999" />
          </linearGradient>
          <linearGradient id="skinShadow" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#e8aa89" />
            <stop offset="100%" stopColor="#d99572" />
          </linearGradient>

          {/* Blazer camel shades matching reference */}
          <linearGradient id="blazerMain" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#d9a87d" />
            <stop offset="45%" stopColor="#c8976b" />
            <stop offset="100%" stopColor="#b48256" />
          </linearGradient>
          <linearGradient id="blazerLapel" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#c29064" />
            <stop offset="100%" stopColor="#a37246" />
          </linearGradient>

          {/* Luscious dark hair */}
          <linearGradient id="hairDark" x1="20%" y1="0%" x2="80%" y2="100%">
            <stop offset="0%" stopColor="#2c2420" />
            <stop offset="50%" stopColor="#1e1714" />
            <stop offset="100%" stopColor="#120e0c" />
          </linearGradient>
          <linearGradient id="hairSheen" x1="0%" y1="0%" x2="100%" y2="50%">
            <stop offset="0%" stopColor="#4d3b32" stopOpacity="0.8" />
            <stop offset="50%" stopColor="#695145" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#3d2e26" stopOpacity="0.8" />
          </linearGradient>

          {/* White inner top */}
          <linearGradient id="topWhite" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="100%" stopColor="#ede9e4" />
          </linearGradient>
        </defs>

        {/* ================= BACK HAIR VOLUME ================= */}
        <path
          d="M160 170 C110 210 90 310 100 420 C108 480 135 550 170 560 C185 520 185 450 185 390 Z"
          fill="url(#hairDark)"
        />
        <path
          d="M360 170 C410 210 430 310 420 420 C412 480 385 550 350 560 C335 520 335 450 335 390 Z"
          fill="url(#hairDark)"
        />

        {/* ================= BODY / TORSO ================= */}
        {/* Tailored trousers & belt */}
        <path d="M190 540 L330 540 L345 620 L175 620 Z" fill="#202024" />
        <rect x="185" y="534" width="150" height="15" rx="3" fill="#151518" />
        <rect x="245" y="531" width="30" height="20" rx="3" fill="#c59b6b" stroke="#7a5528" strokeWidth="2" />
        <rect x="252" y="536" width="16" height="10" rx="1.5" fill="#151518" />

        {/* Inner white top */}
        <path
          d="M210 320 C210 320 225 430 230 535 L290 535 C295 430 310 320 310 320 Z"
          fill="url(#topWhite)"
        />

        {/* Collarbone / delicate neckline */}
        <path
          d="M222 315 C235 370 285 370 298 315 Z"
          fill="url(#skinBase)"
        />
        <path d="M236 332 Q248 340 256 334" stroke="#dfa282" strokeWidth="2" strokeLinecap="round" />
        <path d="M284 332 Q272 340 264 334" stroke="#dfa282" strokeWidth="2" strokeLinecap="round" />

        {/* ================= BLAZER (BEIGE/CAMEL) ================= */}
        {/* Left shoulder and sleeve */}
        <path
          d="M215 285 C185 292 140 335 125 430 C115 500 135 570 155 620 L205 620 C195 540 190 460 215 380 Z"
          fill="url(#blazerMain)"
          stroke="#94653a"
          strokeWidth="1.5"
        />
        {/* Right shoulder and sleeve */}
        <path
          d="M305 285 C335 292 380 335 395 430 C405 500 385 570 365 620 L315 620 C325 540 330 460 305 380 Z"
          fill="url(#blazerMain)"
          stroke="#94653a"
          strokeWidth="1.5"
        />

        {/* Left blazer torso & folded lapel */}
        <path d="M215 285 L210 390 L190 545 L245 540 L260 410 L215 285 Z" fill="url(#blazerMain)" />
        <path
          d="M215 285 L260 405 L230 412 L198 320 Z"
          fill="url(#blazerLapel)"
          stroke="#855428"
          strokeWidth="1.5"
        />

        {/* Right blazer torso & folded lapel */}
        <path d="M305 285 L310 390 L330 545 L275 540 L260 410 L305 285 Z" fill="url(#blazerMain)" />
        <path
          d="M305 285 L260 405 L290 412 L322 320 Z"
          fill="url(#blazerLapel)"
          stroke="#855428"
          strokeWidth="1.5"
        />

        {/* Blazer tailoring details */}
        <line x1="200" y1="465" x2="225" y2="465" stroke="#855428" strokeWidth="2" strokeLinecap="round" />
        <line x1="320" y1="465" x2="295" y2="465" stroke="#855428" strokeWidth="2" strokeLinecap="round" />

        {/* ================= NECK & HEAD ================= */}
        <path d="M236 230 L236 312 C236 318 284 318 284 312 L284 230 Z" fill="url(#skinBase)" />
        {/* Chin drop shadow */}
        <path d="M236 232 C248 258 272 258 284 232 L284 245 C268 268 252 268 236 245 Z" fill="url(#skinShadow)" />

        {/* Face oval shape */}
        <path
          d="M222 145 C210 185 220 238 260 248 C300 238 310 185 298 145 C290 120 230 120 222 145 Z"
          fill="url(#skinBase)"
        />

        {/* Delicate ears */}
        <ellipse cx="218" cy="188" rx="6" ry="11" fill="#fbbda1" />
        <ellipse cx="302" cy="188" rx="6" ry="11" fill="#fbbda1" />
        {/* Gold stud earrings */}
        <circle cx="218" cy="198" r="2.8" fill="#e5b458" stroke="#a0751a" strokeWidth="0.8" />
        <circle cx="302" cy="198" r="2.8" fill="#e5b458" stroke="#a0751a" strokeWidth="0.8" />

        {/* Soft cheek blush */}
        <ellipse cx="236" cy="195" rx="10" ry="6" fill="#f79a8e" opacity="0.38" />
        <ellipse cx="284" cy="195" rx="10" ry="6" fill="#f79a8e" opacity="0.38" />

        {/* ================= FACIAL FEATURES (EXPRESSIVE & CHARMING) ================= */}
        {/* Eyebrows */}
        <path d="M230 166 Q242 160 252 165" stroke="#231915" strokeWidth="2.8" strokeLinecap="round" fill="none" />
        <path d="M290 166 Q278 160 268 165" stroke="#231915" strokeWidth="2.8" strokeLinecap="round" fill="none" />

        {/* Left eye */}
        <path d="M230 177 C235 171 247 171 253 177 C247 183 235 183 230 177 Z" fill="#ffffff" />
        <circle cx="242" cy="177" r="4.8" fill="#2d211b" />
        <circle cx="242" cy="177" r="2.5" fill="#120c09" />
        <circle cx="244" cy="175" r="1.5" fill="#ffffff" />
        {/* Lash line and flick */}
        <path d="M228 176 C235 169 248 169 255 175" stroke="#1a110e" strokeWidth="2.4" strokeLinecap="round" fill="none" />
        <path d="M253 174 L258 171" stroke="#1a110e" strokeWidth="1.8" strokeLinecap="round" />

        {/* Right eye */}
        <path d="M267 177 C273 171 285 171 290 177 C285 183 273 183 267 177 Z" fill="#ffffff" />
        <circle cx="278" cy="177" r="4.8" fill="#2d211b" />
        <circle cx="278" cy="177" r="2.5" fill="#120c09" />
        <circle cx="280" cy="175" r="1.5" fill="#ffffff" />
        {/* Lash line and flick */}
        <path d="M265 175 C272 169 285 169 292 176" stroke="#1a110e" strokeWidth="2.4" strokeLinecap="round" fill="none" />
        <path d="M290 174 L295 171" stroke="#1a110e" strokeWidth="1.8" strokeLinecap="round" />

        {/* Delicate nose */}
        <path d="M259 178 L258 198 Q260 202 264 200" stroke="#d59174" strokeWidth="1.8" strokeLinecap="round" fill="none" />

        {/* Warm smile */}
        <path d="M245 215 Q260 211 275 215" stroke="#bf4b53" strokeWidth="1.8" fill="none" />
        <path d="M245 215 Q260 227 275 215 Q260 220 245 215 Z" fill="#d95e67" />
        <path d="M250 215 Q260 212 270 215" stroke="#ffffff" strokeWidth="1.2" opacity="0.9" />

        {/* ================= FLOWING FRONT HAIR (RICH WAVES & VOLUME) ================= */}
        {/* Crown and sweeping waves */}
        <path
          d="M218 150 C210 110 230 75 260 74 C295 72 320 105 315 150 C328 195 340 255 345 320 C352 385 340 450 310 480 C298 460 305 410 302 360 C298 290 285 220 280 180 C272 145 248 135 232 140 C222 144 218 155 218 170 C215 210 200 270 185 330 C175 385 165 445 180 480 C160 440 152 375 162 315 C172 250 202 180 218 150 Z"
          fill="url(#hairDark)"
        />

        {/* Gloss hair strands & texture */}
        <path
          d="M252 75 C244 95 225 125 216 155 C210 180 204 235 192 295 C182 348 176 400 185 440"
          stroke="url(#hairSheen)"
          strokeWidth="4"
          strokeLinecap="round"
          fill="none"
        />
        <path
          d="M268 75 C288 102 310 135 318 178 C328 225 332 288 334 350 C336 405 325 450 308 470"
          stroke="url(#hairSheen)"
          strokeWidth="4"
          strokeLinecap="round"
          fill="none"
        />

        {/* Forehead fringe / bangs */}
        <path d="M245 78 Q232 115 220 140 C225 142 238 138 250 126 C262 112 268 96 265 78 Z" fill="url(#hairDark)" />
        <path d="M260 78 Q278 110 292 135 C286 138 278 130 270 118 Z" fill="url(#hairDark)" />

        {/* Soft wave highlights */}
        <path d="M238 98 Q260 88 282 98" stroke="#5d483e" strokeWidth="3" strokeLinecap="round" opacity="0.75" />
      </svg>
    </div>
  );
}
