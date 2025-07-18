import { Card } from "@/components/ui/card";
import { Instagram, Music, Mail, Phone } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: Instagram,
      label: "Instagram",
      url: "https://www.instagram.com/djpedrotheodoro/"
    },
    {
      icon: Music,
      label: "SoundCloud",
      url: "https://soundcloud.com/dj_pedro_theodoro"
    },
    {
      icon: Mail,
      label: "E-mail",
      url: "mailto:contato@conexaounk.com"
    },
    {
      icon: Phone,
      label: "WhatsApp",
      url: "https://wa.me/5511963442454"
    }
  ];

  const quickLinks = [
    { label: "Home", href: "#home" },
    { label: "Sobre", href: "#about" },
    { label: "Música", href: "#music" },
    { label: "Galeria", href: "#gallery" },
    { label: "Contato", href: "#contact" }
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="py-16 px-4 border-t border-border/20">
      <div className="container mx-auto max-w-6xl">
        <Card className="glass-card p-8">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Brand */}
            <div className="text-center md:text-left">
              <h3 className="text-3xl font-bold text-gradient mb-4">
                Pedro Theodoro
              </h3>
              <p className="text-foreground/70 mb-6"></p>
              <div className="flex justify-center md:justify-start space-x-4">
                {socialLinks.map((link, index) => {
                  const Icon = link.icon;
                  return (
                    <a
                      key={index}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center hover:bg-primary/30 transition-colors group"
                      aria-label={link.label}
                    >
                      <Icon className="text-primary group-hover:scale-110 transition-transform" size={18} />
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Quick Links */}
            <div className="text-center">
              <h4 className="text-xl font-semibold mb-6">Links Rápidos</h4>
              <div className="space-y-3">
                {quickLinks.map((link, index) => (
                  <button
                    key={index}
                    onClick={() => scrollToSection(link.href)}
                    className="block w-full text-foreground/70 hover:text-primary transition-colors"
                  >
                    {link.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Contact Info */}
            <div className="text-center md:text-right">
              <h4 className="text-xl font-semibold mb-6">Contato</h4>
              <div className="space-y-3 text-foreground/70">
                <p>
                  <strong>Telefone:</strong><br />
                  (11) 96344-2458
                </p>
                <p>
                  <strong>E-mail:</strong><br />
                  contato@conexaounk.com
                </p>
                <p>
                  <strong>Instagram:</strong><br />
                  <a href="https://www.instagram.com/djpedrotheodoro/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">@djpedrotheodoro</a>
                </p>
              </div>
            </div>
          </div>

          <div className="border-t border-border/20 mt-8 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center text-sm text-foreground/60">
              <p>
                © {currentYear} Pedro Theodoro. Todos os direitos reservados.
              </p>
            </div>
          </div>
        </Card>
      </div>
    </footer>
  );
};

export default Footer;