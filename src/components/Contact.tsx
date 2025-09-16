import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-gradient-section">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6 text-foreground">Свържете се с нас</h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Contact Form */}
          <Card className="p-8 shadow-card border-0">
            <form className="space-y-6">
              <div>
                <Label htmlFor="name" className="text-sm font-medium text-foreground mb-2 block">Name</Label>
                <Input 
                  id="name"
                  placeholder="Your name"
                  className="w-full"
                />
              </div>
              
              <div>
                <Label htmlFor="email" className="text-sm font-medium text-foreground mb-2 block">Email</Label>
                <Input 
                  id="email"
                  type="email"
                  placeholder="your.email@example.com"
                  className="w-full"
                />
              </div>
              
              <div>
                <Label htmlFor="message" className="text-sm font-medium text-foreground mb-2 block">Message</Label>
                <Textarea 
                  id="message"
                  placeholder="Type your message..."
                  rows={6}
                  className="w-full resize-none"
                />
              </div>
              
              <Button 
                type="submit" 
                size="lg"
                className="w-full bg-primary hover:bg-primary-glow text-primary-foreground transition-smooth"
              >
                Изпрати съобщение
              </Button>
            </form>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="p-8 shadow-card border-0">
              <h3 className="text-2xl font-bold mb-6 text-foreground">Адрес:</h3>
              <p className="text-muted-foreground leading-relaxed">
                гр. София, бул. Евлоги и Христо Георгиеви, 38, НС "Васил Левски", сектор "В", офис № 4
              </p>
            </Card>

            <Card className="p-8 shadow-card border-0">
              <h3 className="text-2xl font-bold mb-6 text-foreground">Телефон и имейл за вразка:</h3>
              <div className="space-y-4 text-muted-foreground">
                <div>
                  <p className="font-semibold text-foreground">Радослав Козлеков</p>
                  <p className="text-primary hover:text-primary-glow transition-smooth cursor-pointer">+359877714747</p>
                </div>
                <div className="space-y-2">
                  <p className="text-primary hover:text-primary-glow transition-smooth cursor-pointer">info@mtc.bg</p>
                  <p className="text-primary hover:text-primary-glow transition-smooth cursor-pointer">office@mtc.bg</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;