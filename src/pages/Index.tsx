import Navbar from "../components/Navbar";
import AboutSection from "../components/AboutSection";
import ProjectsSection from "../components/ProjectSection";
import ArchitectureSection from "../components/ArchitectureSection";
import CurrentlyBuildingSection from "../components/CurrentlyBuildingSection";
import ExperienceSection from "../components/ExperienceSection";
import PhilosophySection from "../components/PhilosophySection";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";
import TechStackSection from "../components/TechStackSection";


const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <ProjectsSection />
      <AboutSection />
      <TechStackSection />
      <ArchitectureSection />
      <CurrentlyBuildingSection />
      <ExperienceSection />
      <PhilosophySection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
