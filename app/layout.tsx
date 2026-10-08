import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Rumaisha — Frontend & Full-Stack Developer",
  description:
    "Portfolio of Rumaisha, a Frontend & Full-Stack Developer specializing in Next.js, TypeScript, React, Docker, GCP, and AI-powered systems.",
  keywords: [
    "Rumaisha",
    "Frontend Developer",
    "Full-Stack Developer",
    "Next.js Portfolio",
    "React Developer",
    "TypeScript",
    "Docker",
    "GCP",
  ],
  authors: [{ name: "Rumaisha" }],
  openGraph: {
    title: "Rumaisha — Frontend & Full-Stack Developer",
    description:
      "Crafting high-impact web applications with Next.js, TypeScript, Cloud DevOps, and AI integrations.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} antialiased scroll-smooth`}>
      <body className="min-h-screen flex flex-col bg-[#faf8f5] text-stone-900 selection:bg-[#c59b6b] selection:text-white">
        {children}
      </body>
    </html>
  );
}
