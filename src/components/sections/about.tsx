import { FadeIn } from "@/components/fade-in";
import { Card } from "@/components/ui/card";
import { Database, Code, Palette, Film, Target, BrainCircuit, ShoppingCart, Filter, Sparkles } from "lucide-react";

const skills = [
  {
    category: "Desenvolvimento No-Code & Low-Code",
    tools: [
      { name: "Firebase", icon: BrainCircuit },
      { name: "Supabase", icon: Database },
      { name: "Lovable", icon: Code },
      { name: "Bolt", icon: Code },
    ],
  },
    {
    category: "Inteligência Artificial",
    tools: [
      { name: "Veo 3", icon: Sparkles },
      { name: "Sora 2", icon: Sparkles },
    ],
  },
  {
    category: "Design & Conteúdo",
    tools: [
      { name: "Canva", icon: Palette },
      { name: "CapCut", icon: Film },
    ],
  },
  {
    category: "Marketing & Estratégia",
    tools: [
        { name: "Infoprodutor", icon: ShoppingCart },
        { name: "Facebook Ads", icon: Target },
        { name: "Funil de Vendas", icon: Filter },
    ]
  }
];

export function AboutSection() {
    return (
        <section id="about" className="py-20 md:py-32">
            <div className="container mx-auto px-4 md:px-6">
                <FadeIn>
                    <div className="grid md:grid-cols-5 gap-12 items-start">
                        <div className="md:col-span-3">
                            <h2 className="text-3xl md:text-4xl font-bold mb-8">Sobre Mim</h2>
                            <div className="space-y-6 text-muted-foreground text-lg leading-relaxed">
                                <p>
                                    Me chamo Matheus Carvalho, tenho 24 anos e moro em Florianópolis/SC. Atualmente trabalho desenvolvendo sistemas micro-SaaS no-code, integrando bancos de dados como Firebase e Supabase, além de APIs personalizadas que otimizam fluxos e automatizam tarefas dentro das plataformas que crio.
                                </p>
                                <p>
                                    Sou o fundador do TributoHub, um sistema voltado para advogados tributaristas que simplifica o processo de criação, envio e gestão de propostas jurídicas, atualmente com um MRR de R$2.000.
                                </p>
                                <p>
                                    Com domínio em Social Media, Canva e CapCut, desenvolvo o branding e o posicionamento visual dos sistemas que crio. Já atuei também com infoprodutores, criando produtos digitais e gerenciando tráfego direto via Facebook Ads.
                                </p>
                                <p>
                                    Sou movido por desafios e estou em constante evolução, sempre buscando novas oportunidades para transformar ideias em soluções práticas e escaláveis.
                                </p>
                            </div>
                        </div>
                        <div className="md:col-span-2 space-y-8">
                             <h3 className="text-2xl font-bold text-center">Meu Toolkit</h3>
                            {skills.map((skill, index) => (
                                <Card key={index} className="p-6 bg-card/50 border-border/50">
                                    <h4 className="text-xl font-semibold mb-4 text-accent">{skill.category}</h4>
                                    <div className="flex flex-wrap gap-4">
                                        {skill.tools.map((tool, toolIndex) => (
                                        <div key={toolIndex} className="flex items-center gap-2 bg-background/50 py-1 px-3 rounded-md border border-border/50">
                                            <tool.icon className="h-5 w-5 text-primary" />
                                            <span className="text-sm font-medium">{tool.name}</span>
                                        </div>
                                        ))}
                                    </div>
                                </Card>
                            ))}
                        </div>
                    </div>
                </FadeIn>
            </div>
        </section>
    )
}
