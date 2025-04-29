
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Gamepad, Mail, Eye } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed w-full top-0 z-50 bg-background/80 backdrop-blur-md border-b border-vr-purple/20">
      <div className="container mx-auto flex items-center justify-between py-4">
        <Link to="/" className="flex items-center space-x-2">
          <Gamepad className="text-vr-purple h-8 w-8" />
          <span className="font-bold text-xl sm:text-2xl vr-gradient-text">VRGameStudio</span>
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <a href="#game" className="text-sm font-medium hover:text-vr-purple transition-colors">
            Our Game
          </a>
          <a href="#about" className="text-sm font-medium hover:text-vr-purple transition-colors">
            About Us
          </a>
          <a href="#contact" className="text-sm font-medium hover:text-vr-purple transition-colors">
            Contact
          </a>
          <a href="#privacy" className="text-sm font-medium hover:text-vr-purple transition-colors">
            Privacy Policy
          </a>
        </nav>

        <div className="hidden md:block">
          <Button className="vr-button" asChild>
            <a href="#contact">
              <Mail className="mr-2 h-4 w-4" /> Contact Us
            </a>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button onClick={toggleMenu} className="md:hidden text-vr-purple">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6"
          >
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav className="md:hidden bg-vr-dark py-4 border-b border-vr-purple/20">
          <div className="container mx-auto space-y-3">
            <a 
              href="#game" 
              className="block px-4 py-2 hover:bg-vr-purple/10 rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              Our Game
            </a>
            <a 
              href="#about" 
              className="block px-4 py-2 hover:bg-vr-purple/10 rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              About Us
            </a>
            <a 
              href="#contact" 
              className="block px-4 py-2 hover:bg-vr-purple/10 rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </a>
            <a 
              href="#privacy" 
              className="block px-4 py-2 hover:bg-vr-purple/10 rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              Privacy Policy
            </a>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Navbar;
