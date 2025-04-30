
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import GameShowcase from "@/components/GameShowcase";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import PrivacyPolicy from "@/components/PrivacyPolicy";
import Footer from "@/components/Footer";
import { useEffect, useState } from "react";

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);

  // Add loading animation
  useEffect(() => {
    // Simulate loading delay for smoother animation
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {isLoading ? (
        <div className="fixed inset-0 bg-background flex items-center justify-center z-50">
          <div className="relative">
            <div className="w-20 h-20 border-4 border-vr-purple/30 border-t-vr-purple rounded-full animate-spin"></div>
            <div className="mt-4 text-center text-vr-purple font-medium">VR Game Studio</div>
          </div>
        </div>
      ) : (
        <>
          <div className="fixed inset-0 pointer-events-none">
            <div className="absolute top-0 left-0 w-1/3 h-1/3 bg-vr-purple/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-0 w-1/3 h-1/3 bg-vr-blue/5 rounded-full blur-3xl"></div>
          </div>
          <Navbar />
          <HeroSection />
          <GameShowcase />
          <AboutSection />
          <ContactSection />
          <PrivacyPolicy />
          <Footer />
        </>
      )}
    </div>
  );
};

export default Index;
