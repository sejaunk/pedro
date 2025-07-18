import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { 
  Phone, 
  Mail, 
  Instagram, 
  Music,
  Send,
  MapPin,
  Clock
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    eventType: "",
    date: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Mensagem enviada!",
      description: "Retornarei em breve com mais informações.",
    });
    setFormData({
      name: "",
      email: "",
      phone: "",
      eventType: "",
      date: "",
      message: ""
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const contactInfo = [
    {
      icon: Phone,
      label: "Telefone",
      value: "(11) 96344-2458",
      link: "tel:+5511963442458"
    },
    {
      icon: Mail,
      label: "E-mail",
      value: "contato@conexaounk.com",
      link: "mailto:contato@conexaounk.com"
    },
    {
      icon: Instagram,
      label: "Instagram",
      value: "@djpedrotheodoro",
      link: "https://instagram.com/djpedrotheodoro"
    },
    {
      icon: Music,
      label: "SoundCloud",
      value: "DJ Pedro Theodoro",
      link: "https://soundcloud.com/djpedrotheodoro"
    }
  ];

  return (
    <section id="contact" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gradient">Contato</span>
          </h2>
          <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
            Vamos conversar sobre seu evento? Entre em contato e vamos criar juntos uma experiência inesquecível.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="glass-card glow-effect">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-6">Solicitar Orçamento</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name">Nome *</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="mt-2"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">E-mail *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="mt-2"
                      required
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="phone">Telefone</Label>
                    <Input
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="mt-2"
                    />
                  </div>
                  <div>
                    <Label htmlFor="date">Data do Evento</Label>
                    <Input
                      id="date"
                      name="date"
                      type="date"
                      value={formData.date}
                      onChange={handleChange}
                      className="mt-2"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="eventType">Tipo de Evento</Label>
                  <select
                    id="eventType"
                    name="eventType"
                    value={formData.eventType}
                    onChange={(e) => setFormData(prev => ({ ...prev, eventType: e.target.value }))}
                    className="mt-2 w-full px-3 py-2 bg-background border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  >
                    <option value="">Selecione o tipo de evento</option>
                    <option value="Casamento">Casamento</option>
                    <option value="Festa Corporativa">Festa Corporativa</option>
                    <option value="Aniversário">Aniversário</option>
                    <option value="Formatura">Formatura</option>
                    <option value="Balada">Balada</option>
                    <option value="Festival">Festival</option>
                    <option value="Outro">Outro</option>
                  </select>
                </div>

                <div>
                  <Label htmlFor="message">Mensagem</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="mt-2 min-h-[120px]"
                    placeholder="Conte-me mais sobre seu evento..."
                  />
                </div>

                <Button type="submit" className="btn-primary w-full py-3">
                  <Send className="mr-2" size={18} />
                  Enviar Mensagem
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Info */}
          <div className="space-y-8">
            {/* Contact Details */}
            <Card className="glass-card">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6">Informações de Contato</h3>
                <div className="space-y-6">
                  {contactInfo.map((info, index) => {
                    const Icon = info.icon;
                    return (
                      <a
                        key={index}
                        href={info.link}
                        className="flex items-center space-x-4 p-4 rounded-lg hover:bg-primary/10 transition-colors group"
                        target={info.link.startsWith('http') ? '_blank' : '_self'}
                        rel={info.link.startsWith('http') ? 'noopener noreferrer' : ''}
                      >
                        <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center group-hover:bg-primary/30 transition-colors">
                          <Icon className="text-primary" size={20} />
                        </div>
                        <div>
                          <div className="text-sm text-foreground/60">{info.label}</div>
                          <div className="text-foreground group-hover:text-primary transition-colors">
                            {info.value}
                          </div>
                        </div>
                      </a>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;