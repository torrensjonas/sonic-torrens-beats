
import { Headphones, Instagram, Mail, Volume2 } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-black py-12 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center mb-8">
          <div className="flex items-center mb-4">
            <Headphones className="w-8 h-8 text-dj-neon" />
            <span className="ml-2 text-2xl font-bold text-white">Jonas Torrens</span>
          </div>
          <p className="text-dj-gray text-center max-w-md">
            Elevando la experiencia musical en cada evento con sonidos únicos y atmósferas inolvidables
          </p>
        </div>
        
        <div className="flex justify-center space-x-6 mb-8">
          <a 
            href="https://instagram.com" 
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-dj-purple hover:bg-dj-purple/20 hover:text-white transition-colors"
            aria-label="Instagram"
          >
            <Instagram size={20} />
          </a>
          <a 
            href="mailto:jonastorrens@example.com"
            className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-dj-purple hover:bg-dj-purple/20 hover:text-white transition-colors"
            aria-label="Email"
          >
            <Mail size={20} />
          </a>
          <a 
            href="https://soundcloud.com"
            target="_blank"
            rel="noopener noreferrer" 
            className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-dj-purple hover:bg-dj-purple/20 hover:text-white transition-colors"
            aria-label="SoundCloud"
          >
            <Volume2 size={20} />
          </a>
        </div>
        
        <div className="border-t border-white/10 pt-8 text-center">
          <p className="text-dj-gray text-sm">
            &copy; {currentYear} DJ Jonas Torrens. Todos los derechos reservados.
          </p>
        </div>
      </div>
      
      {/* Background elements */}
      <div className="absolute bottom-0 left-0 w-full h-12 bg-gradient-to-r from-dj-blue/20 via-dj-neon/20 to-dj-pink/20 opacity-30"></div>
    </footer>
  );
};

export default Footer;
