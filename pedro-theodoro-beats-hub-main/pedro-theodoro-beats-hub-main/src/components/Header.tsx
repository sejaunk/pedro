import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Music, User, Image, Calendar } from "lucide-react";
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const navItems = [{
    label: "Home",
    href: "#home",
    icon: User
  }, {
    label: "Música",
    href: "#music",
    icon: Music
  }, {
    label: "Galeria",
    href: "#gallery",
    icon: Image
  }, {
    label: "Contato",
    href: "#contact",
    icon: Calendar
  }];
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({
      behavior: "smooth"
    });
    setIsMenuOpen(false);
  };
  return <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "glass-card backdrop-blur-md border-b border-border/50" : "bg-transparent"}`}>
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold text-gradient bg-slate-950">
            Pedro Theodoro
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map(item => <button key={item.label} onClick={() => scrollToSection(item.href)} className="text-foreground/80 hover:text-primary transition-colors duration-300 hover:scale-105">
                {item.label}
              </button>)}
            <Button className="btn-primary">
              Contratar
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && <div className="md:hidden mt-4 glass-card rounded-lg p-4">
            <div className="flex flex-col space-y-4">
              {navItems.map(item => {
            const Icon = item.icon;
            return <button key={item.label} onClick={() => scrollToSection(item.href)} className="flex items-center space-x-3 text-foreground/80 hover:text-primary transition-colors duration-300 p-2 rounded-lg hover:bg-primary/10">
                    <Icon size={20} />
                    <span>{item.label}</span>
                  </button>;
          })}
              <Button className="btn-primary mt-4">
                Contratar
              </Button>
            </div>
          </div>}
      </nav>
    </header>;
};
export default Header;