
import { ArrowDownCircle } from "lucide-react";

const Hero = () => {
  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div 
      id="home"
      className="min-h-screen relative flex items-center justify-center overflow-hidden pt-16"
      style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-dj-dark/70 via-dj-dark/80 to-dj-dark"></div>
      
      {/* Content */}
      <div className="container relative z-10 mx-auto px-6 text-center">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold mb-6">
          <span className="block text-white drop-shadow-lg">DJ</span>
          <span className="text-gradient animate-pulse-glow">Jonas Torrens</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-3xl mx-auto">
          Música que enciende la pista – Concepción, Chile
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a 
            href="#contact" 
            className="btn-primary w-full sm:w-auto"
          >
            Contactame
          </a>
          <a 
            href="#services" 
            className="btn-secondary w-full sm:w-auto"
          >
            Mis Servicios
          </a>
        </div>
        
        <button 
          onClick={scrollToAbout}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/70 hover:text-white animate-bounce"
          aria-label="Scroll down"
        >
          <ArrowDownCircle size={36} />
        </button>
      </div>
      
      {/* Animated gradient background elements */}
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-dj-neon/20 rounded-full filter blur-3xl opacity-30 animate-pulse-glow"></div>
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-dj-blue/20 rounded-full filter blur-3xl opacity-30 animate-pulse-glow animation-delay-2000"></div>
    </div>
  );
};

export default Hero;
