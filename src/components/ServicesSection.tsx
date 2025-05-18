
import { Headphones, Music, Radio, Sparkles } from "lucide-react";

const services = [
  {
    icon: <Headphones className="w-12 h-12 text-dj-neon" />,
    title: "DJ para Eventos",
    description: "Servicios de DJ profesional para eventos privados y corporativos con equipo de alta calidad y repertorio personalizado."
  },
  {
    icon: <Music className="w-12 h-12 text-dj-purple" />,
    title: "Sets Personalizados",
    description: "Creación de sets y playlists personalizadas adaptadas perfectamente al estilo y ambiente que buscas para tu evento."
  },
  {
    icon: <Radio className="w-12 h-12 text-dj-blue" />,
    title: "Streaming y Mezclas",
    description: "Mezclas en vivo y transmisiones por streaming para eventos híbridos y digitales con la mejor calidad de sonido."
  },
  {
    icon: <Sparkles className="w-12 h-12 text-dj-pink" />,
    title: "Asesoría Técnica",
    description: "Asesoría profesional en sonido y ambientación para lograr la experiencia perfecta en cualquier tipo de evento."
  }
];

const ServicesSection = () => {
  return (
    <section id="services" className="bg-dj-dark relative overflow-hidden py-20">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-dj-dark via-dj-dark to-black z-0"></div>
      
      <div className="container-section relative z-10">
        <h2 className="section-title text-center">Mis Servicios</h2>
        <p className="section-subtitle text-center">
          Ofrezco servicios completos para elevar la experiencia musical de tu evento
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="glass-card p-6 flex flex-col items-center text-center transition-all duration-300 hover:transform hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(139,92,246,0.2)]"
            >
              <div className="mb-6 p-4 rounded-full bg-white/5">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">{service.title}</h3>
              <p className="text-dj-gray">{service.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <a href="#contact" className="btn-primary">
            Solicitar Información
          </a>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
