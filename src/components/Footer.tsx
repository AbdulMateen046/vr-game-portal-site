
import { Gamepad } from "lucide-react";
import { Link } from "react-router-dom";


const Footer = () => {
  const year = new Date().getFullYear();
  
  return (
    <footer className="bg-vr-dark border-t border-vr-purple/20 pt-12 pb-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="flex items-center mb-6 md:mb-0">
            <Link to="/" className="flex items-center">
              <img src="/logo.png" alt="Logo" className="h-8 w-8 object-contain mr-2" />
              <span className="font-bold text-xl vr-gradient-text">Vhype</span>
            </Link>
          </div>
          
          <div className="flex flex-wrap justify-center gap-6">
            <a href="#game" className="hover:text-vr-purple transition-colors">
              Our Game
            </a>
            <a href="#about" className="hover:text-vr-purple transition-colors">
              About Us
            </a>
            <a href="#contact" className="hover:text-vr-purple transition-colors">
              Contact
            </a>
            <a href="#privacy" className="hover:text-vr-purple transition-colors">
              Privacy Policy
            </a>
          </div>
        </div>
        
        <div className="border-t border-vr-purple/20 pt-8 mt-8 text-center text-sm text-gray-400">
          <p>© {year} Vhype. All rights reserved.</p>
          <p className="mt-2">Creating immersive virtual reality experiences</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
