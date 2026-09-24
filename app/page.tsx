import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import HomeAboutSection from "./components/HomeAboutSection";
import ServicesSection from "./components/ServicesSection";
import MapSection from "./components/MapSection";
import ClientsSection from "./components/ClientsSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <HomeAboutSection />
        <ServicesSection />
        <MapSection />
        <ClientsSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
