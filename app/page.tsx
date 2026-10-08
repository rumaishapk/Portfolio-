import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProjectsContentSection from "@/components/ProjectsContentSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col w-full overflow-x-hidden bg-[#faf8f5]">
      {/* Navigation bar */}
      <Navbar />

      {/* Hero section matching reference: PORTFOLIO '26 with overlapping Rumaisha avatar */}
      <HeroSection />

      {/* About section: Hanging ID Lanyard pass badge + Experience + Education + Contact + Softwares */}
      <AboutSection />

      {/* Projects section: Watermark typography + 5 colored vertical columns with interactive details */}
      <ProjectsContentSection />

      {/* Footer */}
      <Footer />
    </main>
  );
}
