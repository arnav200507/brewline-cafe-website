import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import DrinksSection from "@/components/DrinksSection";
import AmbienceSection from "@/components/AmbienceSection";
import AboutSection from "@/components/AboutSection";
import VisitSection from "@/components/VisitSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <DrinksSection />
      <AmbienceSection />
      <AboutSection />
      <VisitSection />
      <Footer />
    </div>
  );
};

export default Index;
