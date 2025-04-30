
import { Shield } from "lucide-react";
import { useRef, useState, useEffect } from "react";

const AboutSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

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
    <section ref={sectionRef} id="about" className="py-20 bg-vr-dark relative">
      <div className="container mx-auto px-4 relative z-10">
        <div className={`max-w-3xl mx-auto text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-vr-purple/10 border border-vr-purple/20 mb-6">
            <Shield className="h-4 w-4 text-vr-purple" />
            <span className="text-sm font-medium">About Our Company</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            VR Innovators <span className="vr-gradient-text">Since 2018</span>
          </h2>
          
          <p className="text-gray-300">
            We are a team of passionate developers and designers dedicated to pushing the boundaries 
            of what's possible in virtual reality gaming.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className={`relative transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <div className="absolute inset-0 bg-vr-gradient opacity-20 rounded-2xl blur-3xl"></div>
            <div className="relative z-10 grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <img 
                  src="https://images.unsplash.com/photo-1593508512255-86ab42a8e620?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                  alt="VR Development" 
                  className="rounded-lg h-48 w-full object-cover hover:scale-105 transition-all duration-300"
                />
                <img 
                  src="https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                  alt="Game Design Meeting" 
                  className="rounded-lg h-64 w-full object-cover hover:scale-105 transition-all duration-300"
                />
              </div>
              <div className="space-y-4 mt-8">
                <img 
                  src="https://images.unsplash.com/photo-1581090700227-1e37b190418e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                  alt="VR Testing" 
                  className="rounded-lg h-64 w-full object-cover hover:scale-105 transition-all duration-300"
                />
                <img 
                  src="https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                  alt="Developer Coding" 
                  className="rounded-lg h-48 w-full object-cover hover:scale-105 transition-all duration-300"
                />
              </div>
            </div>
          </div>
          
          <div className={`transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <h3 className="text-2xl font-bold mb-6">Our Story</h3>
            
            <div className="space-y-6 text-gray-300">
              <p className="transform hover:translate-x-2 transition-all duration-300">
                Founded by a group of gaming enthusiasts and VR pioneers, our studio has been at the forefront 
                of virtual reality game development since our inception in 2018.
              </p>
              
              <p className="transform hover:translate-x-2 transition-all duration-300">
                We believe that VR is not just another gaming platform - it's a whole new medium for 
                storytelling and interaction. Our team combines technical expertise with creative vision 
                to craft experiences that truly transport players to another world.
              </p>
              
              <p className="transform hover:translate-x-2 transition-all duration-300">
                With a focus on innovation and quality, we're dedicated to creating VR games that push 
                the boundaries of what's possible while remaining accessible and enjoyable for players.
              </p>
            </div>
            
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-12">
              {[
                { value: "6+", label: "Years Experience" },
                { value: "15+", label: "Team Members" },
                { value: "3", label: "VR Titles" },
                { value: "95%", label: "Client Satisfaction" }
              ].map((stat, index) => (
                <div 
                  key={index} 
                  className={`text-center transition-all duration-700 hover:scale-110 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                  style={{ transitionDelay: `${800 + index * 200}ms` }}
                >
                  <div className="text-3xl font-bold vr-gradient-text">{stat.value}</div>
                  <p className="text-sm text-gray-400 mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
