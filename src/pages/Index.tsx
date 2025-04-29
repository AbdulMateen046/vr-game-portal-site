
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import GameShowcase from "@/components/GameShowcase";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import PrivacyPolicy from "@/components/PrivacyPolicy";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <GameShowcase />
      <AboutSection />
      <ContactSection />
      <PrivacyPolicy />
      <Footer />
    </div>
  );
};

export default Index;
