import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Play, Download, ExternalLink } from "lucide-react";
const HeroSection = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const heroImages = ["/lovable-uploads/2ac966d2-e6e3-4033-a82d-585f01b2cbf9.png", "/lovable-uploads/ff282be6-f79b-435a-bd5e-e8c7e38af6d0.png", "/lovable-uploads/2e4d4d4e-0f8a-46f0-b764-a1ac28e19305.png"];
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex(prev => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);
  return <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Images */}
      <div className="absolute inset-0">
        {heroImages.map((image, index) => <div key={index} className={`absolute inset-0 transition-opacity duration-1000 ${index === currentImageIndex ? "opacity-30" : "opacity-0"}`}>
            <img src={image} alt={`Pedro Theodoro ${index + 1}`} className="w-full h-full object-cover" />
          </div>)}
        <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/30 to-background"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
        <div className="glass-card p-8 md:p-12 rounded-3xl glow-effect animate-fade-in-up">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="text-gradient">Pedro Theodoro</span>
          </h1>
          
          <h2 className="text-2xl md:text-3xl text-foreground/80 mb-4">DJ</h2>
          
          <p className="text-lg md:text-xl text-foreground/70 mb-8 max-w-2xl mx-auto">
            Transformando momentos em experiências inesquecíveis através da música.
            
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            
            
            <Button variant="outline" className="btn-glass px-8 py-4 text-lg">
              <ExternalLink className="mr-2" size={20} />
              SoundCloud
            </Button>
            
            <Button variant="outline" className="btn-glass px-8 py-4 text-lg">
              <Download className="mr-2" size={20} />
              Press Kit
            </Button>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-primary/20 rounded-full animate-float"></div>
        <div className="absolute bottom-20 right-10 w-16 h-16 bg-accent/20 rounded-full animate-float" style={{
        animationDelay: '2s'
      }}></div>
        <div className="absolute top-1/3 right-20 w-12 h-12 bg-primary/30 rounded-full animate-float" style={{
        animationDelay: '4s'
      }}></div>
      </div>

      {/* Image Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {heroImages.map((_, index) => <button key={index} onClick={() => setCurrentImageIndex(index)} className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentImageIndex ? "bg-primary scale-125" : "bg-foreground/30 hover:bg-foreground/50"}`} />)}
      </div>
    </section>;
};
export default HeroSection;