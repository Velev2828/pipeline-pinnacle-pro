import { Button } from "@/components/ui/button";

const Navigation = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    contactSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-lg border-b border-border z-50">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo Placeholder */}
        <div className="flex items-center">
          <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
            <div className="w-8 h-8 bg-primary/20 rounded"></div>
          </div>
          <span className="ml-3 text-xl font-bold text-foreground">MTC</span>
        </div>

        {/* CTA Button */}
        <Button 
          onClick={scrollToContact}
          className="bg-primary hover:bg-primary-glow text-white px-6 py-2 font-semibold shadow-hero transition-smooth hover:shadow-glow"
        >
          Свържете се с нас
        </Button>
      </div>
    </nav>
  );
};

export default Navigation;