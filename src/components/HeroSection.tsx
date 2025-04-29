
import { Button } from "@/components/ui/button";
import { Gamepad } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="pt-28 pb-20 min-h-[90vh] flex items-center relative overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-30">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-vr-purple/40 to-transparent" />
        <div className="absolute bottom-0 right-0 w-3/4 h-3/4 bg-gradient-to-tl from-vr-blue/30 to-transparent rounded-full blur-3xl" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-vr-purple/10 border border-vr-purple/20 mb-6">
              <Gamepad className="h-4 w-4 text-vr-purple" />
              <span className="text-sm font-medium">Virtual Reality Game Development</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Crafting Immersive <span className="vr-gradient-text">VR Experiences</span>
            </h1>
            
            <p className="text-lg text-gray-300 mb-8 max-w-lg">
              Pushing the boundaries of reality with innovative virtual reality game development. 
              Enter a new dimension of gaming with our cutting-edge VR titles.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="vr-button" asChild>
                <a href="#game">Explore Our Game</a>
              </Button>
              
              <Button variant="outline" className="border-vr-purple/30 hover:border-vr-purple text-vr-purple hover:bg-vr-purple/10" asChild>
                <a href="#contact">Get In Touch</a>
              </Button>
            </div>
          </div>
          
          <div className="relative animate-float">
            <div className="absolute inset-0 bg-vr-purple/20 rounded-full blur-3xl animate-pulse-glow"></div>
            <img 
              src="https://images.unsplash.com/photo-1525800189582-3a994e9e29c9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
              alt="Person wearing VR headset" 
              className="rounded-2xl object-cover w-full h-[500px] relative z-10"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
