import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
const GallerySection = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const images = [{
    src: "/lovable-uploads/2ac966d2-e6e3-4033-a82d-585f01b2cbf9.png",
    alt: "Pedro Theodoro - Studio Portrait",
    category: "Portrait"
  }, {
    src: "/lovable-uploads/ff282be6-f79b-435a-bd5e-e8c7e38af6d0.png",
    alt: "Pedro Theodoro - Action Shot",
    category: "Performance"
  }, {
    src: "/lovable-uploads/2e4d4d4e-0f8a-46f0-b764-a1ac28e19305.png",
    alt: "Pedro Theodoro - Blue Light",
    category: "Portrait"
  }, {
    src: "/lovable-uploads/93ccf39b-0952-4f98-986d-e804fcee519d.png",
    alt: "Pedro Theodoro - Live Performance",
    category: "Event"
  }];
  const openModal = (index: number) => {
    setSelectedImage(index);
  };
  const closeModal = () => {
    setSelectedImage(null);
  };
  const navigate = (direction: 'prev' | 'next') => {
    if (selectedImage === null) return;
    if (direction === 'prev') {
      setSelectedImage(selectedImage > 0 ? selectedImage - 1 : images.length - 1);
    } else {
      setSelectedImage(selectedImage < images.length - 1 ? selectedImage + 1 : 0);
    }
  };
  const categories = ["Todos", "Portrait", "Performance", "Event"];
  const [activeCategory, setActiveCategory] = useState("Todos");
  const filteredImages = activeCategory === "Todos" ? images : images.filter(img => img.category === activeCategory);
  return <section id="gallery" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gradient">Galeria</span>
          </h2>
          
        </div>

        {/* Category Filter */}
        <div className="flex justify-center mb-12">
          <div className="flex flex-wrap gap-3">
            {categories.map(category => <Button key={category} variant={activeCategory === category ? "default" : "outline"} className={activeCategory === category ? "btn-primary" : "btn-glass"} onClick={() => setActiveCategory(category)}>
                {category}
              </Button>)}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredImages.map((image, index) => <Card key={index} className="glass-card overflow-hidden cursor-pointer group hover:glow-effect transition-all duration-300" onClick={() => openModal(index)}>
              <CardContent className="p-0 relative">
                <img src={image.src} alt={image.alt} className="w-full h-80 object-cover transition-transform duration-300 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="glass-card px-3 py-1 text-sm rounded-full">
                    {image.category}
                  </span>
                </div>
              </CardContent>
            </Card>)}
        </div>

        {/* Modal */}
        {selectedImage !== null && <div className="fixed inset-0 bg-background/95 backdrop-blur-md z-50 flex items-center justify-center p-4">
            <div className="relative max-w-4xl w-full">
              {/* Close Button */}
              <Button variant="outline" size="sm" className="absolute -top-12 right-0 btn-glass" onClick={closeModal}>
                <X size={20} />
              </Button>

              {/* Navigation Buttons */}
              <Button variant="outline" size="sm" className="absolute left-4 top-1/2 transform -translate-y-1/2 btn-glass" onClick={() => navigate('prev')}>
                <ChevronLeft size={20} />
              </Button>

              <Button variant="outline" size="sm" className="absolute right-4 top-1/2 transform -translate-y-1/2 btn-glass" onClick={() => navigate('next')}>
                <ChevronRight size={20} />
              </Button>

              {/* Image */}
              <div className="glass-card p-4 rounded-2xl">
                <img src={images[selectedImage].src} alt={images[selectedImage].alt} className="w-full max-h-[80vh] object-contain rounded-lg" />
                <div className="text-center mt-4">
                  <h3 className="text-lg font-semibold text-foreground/80">
                    {images[selectedImage].alt}
                  </h3>
                  <p className="text-sm text-foreground/60">
                    {selectedImage + 1} de {images.length}
                  </p>
                </div>
              </div>
            </div>
          </div>}
      </div>
    </section>;
};
export default GallerySection;