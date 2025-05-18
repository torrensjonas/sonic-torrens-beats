
import { useState } from "react";
import { Headphones, Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-lg bg-dj-dark/80 border-b border-white/10">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Headphones className="w-8 h-8 text-dj-neon animate-pulse-glow" />
            <span className="ml-2 text-xl font-['Montserrat'] font-bold text-white">Jonas Torrens</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <button onClick={() => scrollToSection('home')} className="text-white hover:text-dj-purple transition-colors">
              Inicio
            </button>
            <button onClick={() => scrollToSection('about')} className="text-white hover:text-dj-purple transition-colors">
              Sobre Mí
            </button>
            <button onClick={() => scrollToSection('services')} className="text-white hover:text-dj-purple transition-colors">
              Servicios
            </button>
            <button onClick={() => scrollToSection('media')} className="text-white hover:text-dj-purple transition-colors">
              Media
            </button>
            <button onClick={() => scrollToSection('contact')} className="text-white hover:text-dj-purple transition-colors">
              Contacto
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-white">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pt-4 pb-2 space-y-3">
            <button 
              onClick={() => scrollToSection('home')} 
              className="block w-full text-left py-2 px-3 rounded-md hover:bg-white/5 text-white"
            >
              Inicio
            </button>
            <button 
              onClick={() => scrollToSection('about')} 
              className="block w-full text-left py-2 px-3 rounded-md hover:bg-white/5 text-white"
            >
              Sobre Mí
            </button>
            <button 
              onClick={() => scrollToSection('services')} 
              className="block w-full text-left py-2 px-3 rounded-md hover:bg-white/5 text-white"
            >
              Servicios
            </button>
            <button 
              onClick={() => scrollToSection('media')} 
              className="block w-full text-left py-2 px-3 rounded-md hover:bg-white/5 text-white"
            >
              Media
            </button>
            <button 
              onClick={() => scrollToSection('contact')} 
              className="block w-full text-left py-2 px-3 rounded-md hover:bg-white/5 text-white"
            >
              Contacto
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
