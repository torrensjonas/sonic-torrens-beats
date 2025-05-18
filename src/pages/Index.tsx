
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import MediaSection from "@/components/MediaSection";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-dj-dark text-white overflow-x-hidden">
      <Navbar />
      <Hero />
      <AboutSection />
      <ServicesSection />
      <MediaSection />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Index;
