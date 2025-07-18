import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Play, ExternalLink } from "lucide-react";

const MusicSection = () => {

  const tracks = [
    {
      title: "MAGIC LIVE SET WARMUP",
      duration: "58:54",
      description: "Dj Pedro Theodoro",
      soundcloudUrl: "https://soundcloud.com/dj_pedro_theodoro/pedro-theodoro-magic-live-set-warmup?si=693f41813626447f94fd0c476154f829&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing",
    },
    {
      title: "Anyma - Pictures Of You ft Johnny Bass (SUZY PRADO & PEDRO THEODORO MASHUP) FREE DOWNLOAD",
      duration: "3:00",
      description: "Dj Pedro Theodoro, Dj Suzy Prado",
      soundcloudUrl: "https://soundcloud.com/dj_pedro_theodoro/anyma-pictures-of-you-ft?si=d7cc52b916be4c6e9da5e82e69c445e9&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing",
    }
  ];
  const featuredTrack = tracks[0];
  return (
    <section id="music" className="py-20 px-4 bg-gradient-to-b from-background to-background/50">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Minha <span className="text-gradient">Música</span>
          </h2>
          <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
            Explore meus sets e descubra o som que define cada momento especial.
          </p>
        </div>

        {/* Featured Track */}
        <div className="mb-16">
          <Card className="glass-card glow-effect overflow-hidden">
            <CardContent className="p-0">
              <div className="grid md:grid-cols-2 gap-0">
                <div className="relative h-80 md:h-auto">
                  <img
                    src="/lovable-uploads/2e4d4d4e-0f8a-46f0-b764-a1ac28e19305.png"
                    alt={featuredTrack.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent"></div>
                  <Button
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 btn-primary w-16 h-16 rounded-full p-0"
                  >
                    <Play size={24} />
                  </Button>
                </div>
                
                <div className="p-8 flex flex-col justify-center">
                  <div className="mb-4">
                    <h3 className="text-2xl font-bold mb-2">{featuredTrack.title}</h3>
                    <p className="text-primary font-medium">Featured Track</p>
                  </div>
                  
                  <div className="flex gap-4">
                    <Button className="btn-primary">
                      <Play className="mr-2" size={16} />
                      Reproduzir
                    </Button>
                    <Button variant="outline" className="btn-glass" onClick={() => window.open(featuredTrack.soundcloudUrl, "_blank")}>
                      <ExternalLink className="mr-2" size={16} />
                      SoundCloud
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Track List */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8 text-center">Outros Sets</h3>
          <div className="grid gap-6">
            {tracks.slice(1).map((track, index) => (
              <Card key={index} className="glass-card hover:glow-effect transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <h4 className="text-xl font-semibold mb-2">{track.title}</h4>
                      <p className="text-foreground/70 mb-3">{track.description}</p>
                      <div className="flex items-center gap-4 text-sm text-foreground/60">
                        <span>{track.duration}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Button variant="outline" size="sm" className="btn-glass">
                        <Play size={16} />
                      </Button>
                      <Button variant="outline" size="sm" className="btn-glass" onClick={() => window.open(track.soundcloudUrl, "_blank")}>
                        <ExternalLink size={16} />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default MusicSection;