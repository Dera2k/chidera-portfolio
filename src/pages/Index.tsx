import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import TechStackSection from "../components/TechStackSection";
import ProjectsSection from "../components/ProjectSection";
import ArchitectureSection from "../components/ArchitectureSection";
import ExperienceSection from "../components/ExperienceSection";
import PhilosophySection from "../components/PhilosophySection";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <TechStackSection />
      <ProjectsSection />
      <ArchitectureSection />
      <ExperienceSection />
      <PhilosophySection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;