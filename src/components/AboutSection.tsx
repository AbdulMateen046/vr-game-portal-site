
import { Shield } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-vr-dark relative">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-vr-purple/10 border border-vr-purple/20 mb-6">
            <Shield className="h-4 w-4 text-vr-purple" />
            <span className="text-sm font-medium">About Our Company</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            VR Innovators <span className="vr-gradient-text">Since 2023</span>
          </h2>
          
          <p className="text-gray-300">
            We are a team of passionate developers and designers dedicated to pushing the boundaries 
            of what's possible in virtual reality gaming.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="absolute inset-0 bg-vr-gradient opacity-20 rounded-2xl blur-3xl"></div>
            <div className="relative z-10 grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <img 
                  src="https://images.unsplash.com/photo-1593508512255-86ab42a8e620?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                  alt="VR Development" 
                  className="rounded-lg h-48 w-full object-cover"
                />
                <img 
                  src="https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                  alt="Game Design Meeting" 
                  className="rounded-lg h-64 w-full object-cover"
                />
              </div>
              <div className="space-y-4 mt-8">
                <img 
                  src="https://images.unsplash.com/photo-1581090700227-1e37b190418e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                  alt="VR Testing" 
                  className="rounded-lg h-64 w-full object-cover"
                />
                <img 
                  src="https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                  alt="Developer Coding" 
                  className="rounded-lg h-48 w-full object-cover"
                />
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-2xl font-bold mb-6">Our Story</h3>
            
            <div className="space-y-6 text-gray-300">
              <p>
                Founded by a group of gaming enthusiasts and VR pioneers, our studio has been at the forefront 
                of virtual reality game development since our inception in 2018.
              </p>
              
              <p>
                We believe that VR is not just another gaming platform - it's a whole new medium for 
                storytelling and interaction. Our team combines technical expertise with creative vision 
                to craft experiences that truly transport players to another world.
              </p>
              
              <p>
                With a focus on innovation and quality, we're dedicated to creating VR games that push 
                the boundaries of what's possible while remaining accessible and enjoyable for players.
              </p>
            </div>
            
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-12">
              <div className="text-center">
                <div className="text-3xl font-bold vr-gradient-text">2+</div>
                <p className="text-sm text-gray-400 mt-1">Years Experience</p>
              </div>
              
              <div className="text-center">
                <div className="text-3xl font-bold vr-gradient-text">15+</div>
                <p className="text-sm text-gray-400 mt-1">Team Members</p>
              </div>
              
              <div className="text-center">
                <div className="text-3xl font-bold vr-gradient-text">3</div>
                <p className="text-sm text-gray-400 mt-1">VR Titles</p>
              </div>
              
              <div className="text-center">
                <div className="text-3xl font-bold vr-gradient-text">95%</div>
                <p className="text-sm text-gray-400 mt-1">Client Satisfaction</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
