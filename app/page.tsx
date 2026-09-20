import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import ServicesSection from "./components/ServicesSection";
import MapSection from "./components/MapSection";
import MilestoneSection from "./components/MilestoneSection";
import ClientsSection from "./components/ClientsSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <MapSection />
        <MilestoneSection />
        <ClientsSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}

