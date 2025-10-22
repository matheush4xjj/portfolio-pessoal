import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/fade-in";
import { Linkedin, Mail, MessageCircle, Instagram } from "lucide-react";

export function HiringSection() {
    return (
        <section id="hiring" className="py-20 md:py-32 text-center bg-card/10">
            <div className="container mx-auto px-4 md:px-6">
                <FadeIn>
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">Buscando um especialista para tirar suas ideias do papel?</h2>
                    <p className="max-w-3xl mx-auto text-muted-foreground mb-8 text-xl">
                        Sou apaixonado por transformar conceitos em produtos digitais funcionais e escaláveis. Se sua empresa precisa de um profissional que entende o ciclo completo de um produto, da validação e desenvolvimento ágil até a estratégia de lançamento, estou pronto para colaborar.
                    </p>
                    <div className="flex justify-center flex-wrap gap-4">
                        <Button asChild size="lg" className="rounded-full shadow-lg hover:shadow-glow transition-shadow duration-300">
                        <a href="https://www.linkedin.com/in/matheus-carvalho-8888ab201/?trk=opento_sprofile_details" target="_blank" rel="noopener noreferrer">
                            <Linkedin className="mr-2 h-5 w-5" /> LinkedIn
                        </a>
                        </Button>
                        <Button asChild size="lg" variant="secondary" className="rounded-full">
                        <a href="mailto:matheustot2001@gmail.com">
                            <Mail className="mr-2 h-5 w-5" /> E-mail
                        </a>
                        </Button>
                        <Button asChild size="lg" variant="secondary" className="rounded-full">
                        <a href="https://wa.me/5551996218346" target="_blank" rel="noopener noreferrer">
                            <MessageCircle className="mr-2 h-5 w-5" /> WhatsApp
                        </a>
                        </Button>
                        <Button asChild size="lg" variant="secondary" className="rounded-full">
                        <a href="https://www.instagram.com/matheus_h4xj/" target="_blank" rel="noopener noreferrer">
                            <Instagram className="mr-2 h-5 w-5" /> Instagram
                        </a>
                        </Button>
                    </div>
                </FadeIn>
            </div>
        </section>
    )
}
