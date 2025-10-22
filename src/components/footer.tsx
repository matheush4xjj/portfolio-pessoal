import { Linkedin, Mail, MessageCircle, Instagram } from "lucide-react";
import { Button } from "./ui/button";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="py-12 border-t border-border/10">
      <div className="container mx-auto px-4 md:px-6 text-center text-muted-foreground">
        <div className="flex justify-center space-x-4 mb-4">
          <Button variant="ghost" size="icon" asChild>
            <a href="https://www.linkedin.com/in/matheus-carvalho-8888ab201/?trk=opento_sprofile_details" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <Linkedin className="h-5 w-5" />
            </a>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <a href="mailto:matheustot2001@gmail.com" aria-label="Email">
              <Mail className="h-5 w-5" />
            </a>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <a href="https://wa.me/5551996218346" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
              <MessageCircle className="h-5 w-5" />
            </a>
          </Button>
           <Button variant="ghost" size="icon" asChild>
            <a href="https://www.instagram.com/matheus_h4xj/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <Instagram className="h-5 w-5" />
            </a>
          </Button>
        </div>
        <p className="text-sm">
          &copy; {year} Matheus Carvalho. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
