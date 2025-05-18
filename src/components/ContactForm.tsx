
import { useState } from 'react';
import { Mail, Instagram } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const ContactForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Mensaje enviado",
        description: "Gracias por tu mensaje. Me pondré en contacto contigo pronto.",
      });
      setFormData({ name: '', email: '', message: '' });
    }, 1500);
  };

  return (
    <section id="contact" className="bg-dj-dark relative overflow-hidden py-20">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 -mr-40 -mt-40 w-96 h-96 bg-dj-purple/10 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-0 left-0 -ml-40 -mb-40 w-96 h-96 bg-dj-blue/10 rounded-full filter blur-3xl"></div>
      
      <div className="container-section relative z-10">
        <h2 className="section-title text-center">Contacto</h2>
        <p className="section-subtitle text-center">
          ¿Listo para hacer vibrar tu evento? Escríbeme y creemos algo increíble juntos
        </p>
        
        <div className="max-w-4xl mx-auto mt-12">
          <div className="gradient-border">
            <div className="bg-dj-dark/95 rounded-lg p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-white mb-2">Nombre</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-md px-4 py-3 text-white placeholder-dj-gray/50 focus:outline-none focus:ring-2 focus:ring-dj-purple"
                    placeholder="Tu nombre"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-white mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-md px-4 py-3 text-white placeholder-dj-gray/50 focus:outline-none focus:ring-2 focus:ring-dj-purple"
                    placeholder="tu@email.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-white mb-2">Mensaje</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full bg-white/5 border border-white/10 rounded-md px-4 py-3 text-white placeholder-dj-gray/50 focus:outline-none focus:ring-2 focus:ring-dj-purple resize-none"
                    placeholder="Cuéntame sobre tu evento..."
                  />
                </div>
                
                <div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full btn-primary ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                  >
                    {isSubmitting ? 'Enviando...' : 'Enviar Mensaje'}
                  </button>
                </div>
              </form>
              
              <div className="mt-8 pt-8 border-t border-white/10">
                <div className="flex flex-col sm:flex-row justify-center gap-6">
                  <a 
                    href="mailto:jonastorrens@example.com"
                    className="flex items-center justify-center gap-2 text-dj-gray hover:text-white transition-colors"
                  >
                    <Mail size={20} />
                    <span>jonastorrens@example.com</span>
                  </a>
                  <a 
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 text-dj-gray hover:text-white transition-colors"
                  >
                    <Instagram size={20} />
                    <span>@jonastorrens</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
