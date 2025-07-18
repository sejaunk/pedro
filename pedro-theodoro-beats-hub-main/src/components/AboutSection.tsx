import { Card, CardContent } from "@/components/ui/card";
import { Music, Users, Award, Clock } from "lucide-react";
const AboutSection = () => {
   return <section className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative">
            <div className="glass-card p-6 rounded-3xl glow-effect">
              <img src="/lovable-uploads/93ccf39b-0952-4f98-986d-e804fcee519d.png" alt="Pedro Theodoro Performance" className="w-full h-[500px] object-cover rounded-2xl" />
              
            </div>
          </div>

          {/* Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Sobre <span className="text-gradient">Pedro Theodoro</span>
              </h2>
              
              <div className="space-y-4 text-foreground/80 text-lg">
                <p>Com mais de 5 anos de experiência nas pistas, Pedro Theodoro vem conquistando a cena. Especializado em tribal house, Pedro tem a habilidade única de ler a energia da pista e criar jornadas sonoras que ficam gravadas na memória.</p>
               
                <p>
                  Suas performances são conhecidas pela precisão técnica, seleção musical impecável e pela capacidade de 
                  conectar diferentes gerações de amantes da música eletrônica.
                </p>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => {
              const Icon = stat.icon;
              return <Card key={index} className="glass-card hover:glow-effect transition-all duration-300">
                    
                  </Card>;
            })}
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default AboutSection;
