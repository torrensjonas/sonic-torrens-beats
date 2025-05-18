
const AboutSection = () => {
  return (
    <section id="about" className="bg-dj-dark py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-dj-purple/10 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-dj-blue/10 rounded-full filter blur-3xl"></div>
      </div>
      
      <div className="container-section relative z-10">
        <h2 className="section-title text-center">Sobre Mí</h2>
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-12 mt-16">
          <div className="w-full md:w-2/5 flex justify-center">
            <div className="relative">
              <div className="w-64 h-64 rounded-full overflow-hidden border-2 border-dj-purple p-1">
                <div className="w-full h-full rounded-full bg-gradient-to-br from-dj-neon/50 to-dj-purple/50 flex items-center justify-center">
                  <svg className="w-32 h-32 text-white/70" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 12C14.21 12 16 10.21 16 8C16 5.79 14.21 4 12 4C9.79 4 8 5.79 8 8C8 10.21 9.79 12 12 12Z" fill="currentColor" />
                    <path d="M12 14C9.33 14 4 15.34 4 18V20H20V18C20 15.34 14.67 14 12 14Z" fill="currentColor" />
                  </svg>
                </div>
              </div>
              <div className="absolute -inset-0.5 bg-gradient-to-r from-dj-blue via-dj-neon to-dj-purple rounded-full blur opacity-30 group-hover:opacity-70 transition duration-1000 group-hover:duration-200 animate-pulse-glow"></div>
            </div>
          </div>
          
          <div className="w-full md:w-3/5">
            <h3 className="text-3xl font-bold mb-6 text-white">Jonas Torrens</h3>
            <p className="text-lg text-dj-gray mb-6 leading-relaxed">
              Soy Jonas Torrens, DJ de Concepción con pasión por la mezcla y la creación de atmósferas únicas. 
              Tengo experiencia en fiestas privadas, clubes y eventos corporativos. Combino la música con tecnología 
              para ofrecer experiencias únicas e innovadoras.
            </p>
            <p className="text-lg text-dj-gray mb-8 leading-relaxed">
              Mi filosofía es simple: crear momentos inolvidables a través de la música. Cada evento es una oportunidad 
              para conectar con el público y transformar cualquier espacio en una experiencia sensorial completa.
            </p>
            <a href="#contact" className="btn-primary">Trabajemos Juntos</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
