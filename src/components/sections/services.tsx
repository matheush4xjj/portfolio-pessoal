import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FadeIn } from "@/components/fade-in";
import { Code, Database, Palette, Video, BarChart, BrainCircuit, Target, Sparkles } from "lucide-react";

const services = [
  {
    icon: BrainCircuit,
    title: "Desenvolvimento No-Code",
    description: "Crio produtos digitais, MVPs e sistemas internos de forma ágil e escalável, utilizando as melhores ferramentas no-code do mercado.",
  },
  {
    icon: Code,
    title: "Automação e Processos",
    description: "Desenvolvo soluções para automatizar tarefas repetitivas, otimizar fluxos de trabalho e integrar diferentes sistemas via APIs.",
  },
  {
    icon: Palette,
    title: "Branding e Identidade Visual",
    description: "Desenvolvo o branding e a identidade visual de produtos, criando materiais para redes sociais e vídeos para posicionamento de marca.",
  },
  {
    icon: Sparkles,
    title: "Criação de Mídia com IA",
    description: "Utilizo IAs de ponta como Veo 3 e Sora 2 para criar e manipular vídeos e imagens, gerando conteúdo visual inovador e de alta qualidade.",
  },
  {
    icon: Target,
    title: "Gestão de Produtos Digitais",
    description: "Atuo desde a concepção de infoprodutos até a gestão de tráfego, com foco em lançamento e estratégias de conversão.",
  },
];

export function ServicesSection() {
  return (
    <section id="services" className="py-20 md:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <FadeIn>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Minhas Competências</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <Card key={index} className="bg-card/50 border-border/50 text-center p-6 flex flex-col items-center shadow-lg hover:shadow-primary/20 hover:-translate-y-2 transition-all duration-300">
                <CardHeader className="p-0 mb-4">
                  <div className="bg-primary/10 p-4 rounded-full inline-block mb-4">
                    <service.icon className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle>{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
