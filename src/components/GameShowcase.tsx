
import { Button } from "@/components/ui/button";
import { Gamepad, Eye } from "lucide-react";
import { useEffect, useState, useRef } from "react";

const GameShowcase = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Track mouse position for hover effects
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Check if section is visible for animation triggers
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section 
      ref={sectionRef}
      id="game" 
      className="py-20 bg-gradient-to-b from-background to-vr-dark"
    >
      <div className="container mx-auto px-4">
        <div className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-vr-purple/10 border border-vr-purple/20 mb-6">
            <Gamepad className="h-4 w-4 text-vr-purple animate-pulse" />
            <span className="text-sm font-medium">Featured Game</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Experience <span className="vr-gradient-text">VR Odyssey</span>
          </h2>
          
          <p className="text-gray-300">
            Our flagship VR title takes players on an immersive journey through beautifully crafted 
            worlds with groundbreaking gameplay mechanics.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className={`order-2 lg:order-1 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <h3 className="text-2xl font-bold mb-4">VR Odyssey</h3>
            
            <p className="text-gray-300 mb-6">
              Step into a breathtaking virtual world where reality bends to your will. VR Odyssey 
              combines cutting-edge graphics with intuitive controls to create an unparalleled gaming experience.
            </p>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-start transform hover:translate-x-2 transition-all duration-300">
                <div className="bg-vr-purple/20 p-2 rounded-lg mr-4">
                  <Eye className="h-5 w-5 text-vr-purple" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Immersive Gameplay</h4>
                  <p className="text-sm text-gray-400">
                    Full 360° movement with realistic physics and interactions that make you feel truly present.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start transform hover:translate-x-2 transition-all duration-300">
                <div className="bg-vr-purple/20 p-2 rounded-lg mr-4">
                  <Eye className="h-5 w-5 text-vr-purple" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Stunning Visuals</h4>
                  <p className="text-sm text-gray-400">
                    Experience photorealistic environments and characters that push the boundaries of VR graphics.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start transform hover:translate-x-2 transition-all duration-300">
                <div className="bg-vr-purple/20 p-2 rounded-lg mr-4">
                  <Eye className="h-5 w-5 text-vr-purple" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Innovative Storytelling</h4>
                  <p className="text-sm text-gray-400">
                    Engage with a narrative that adapts to your choices, creating a personalized adventure.
                  </p>
                </div>
              </div>
            </div>
            
            <Button className="vr-button group">
              <Gamepad className="mr-2 h-4 w-4 group-hover:animate-bounce" /> Coming Soon
            </Button>
          </div>
          
          <div className={`order-1 lg:order-2 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <div 
              className="relative hover:scale-[1.02] transition-all duration-500"
              style={{ 
                transform: `perspective(1000px) rotateX(${mousePosition.y * 0.01}deg) rotateY(${mousePosition.x * 0.01}deg)` 
              }}
            >
              <div className="absolute inset-0 bg-vr-gradient opacity-30 rounded-2xl blur-2xl"></div>
              <img 
                src="https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                alt="VR Odyssey Game Screenshot" 
                className="rounded-2xl shadow-2xl relative z-10 w-full h-auto"
              />
              
              <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-vr-purple/30 rounded-full blur-2xl animate-pulse-glow"></div>
              <div className="absolute -top-10 -left-10 w-32 h-32 bg-vr-blue/30 rounded-full blur-2xl animate-pulse-glow"></div>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">
          {[0, 1, 2].map((index) => (
            <div 
              key={index}
              className={`vr-card p-6 transition-all duration-1000 hover:scale-105 hover:bg-vr-dark/80 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}
              style={{ transitionDelay: `${800 + index * 200}ms` }}
            >
              <div className="bg-vr-purple/20 w-12 h-12 flex items-center justify-center rounded-lg mb-4">
                <Gamepad className="h-5 w-5 text-vr-purple" />
              </div>
              <h4 className="text-xl font-bold mb-2">
                {index === 0 && "Compatible Devices"}
                {index === 1 && "Release Date"}
                {index === 2 && "Early Access"}
              </h4>
              <p className="text-gray-400">
                {index === 0 && "Optimized for all major VR headsets including Oculus, Vive, and Valve Index."}
                {index === 1 && "Our flagship game is currently in development with a target release in Q3 2025."}
                {index === 2 && "Join our waitlist for early beta access and be among the first to experience VR Odyssey."}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GameShowcase;
