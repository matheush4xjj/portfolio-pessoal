import { FadeIn } from "@/components/fade-in";
import { Sparkles } from "lucide-react";

export function AiSection() {
    return (
        <section id="ai" className="py-20 md:py-32">
            <div className="container mx-auto px-4 md:px-6">
                <FadeIn>
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <div className="flex items-center gap-3 mb-4">
                                <Sparkles className="h-8 w-8 text-primary" />
                                <h2 className="text-3xl md:text-4xl font-bold">O Futuro da Criação com IA</h2>
                            </div>
                            <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
                                <p>
                                    A inteligência artificial está revolucionando a criação de conteúdo. Ferramentas como Veo 3 e Sora 2 permitem gerar vídeos e imagens ultrarrealistas, reduzindo drasticamente custos e tempo de produção.
                                </p>
                                <p>
                                    No entanto, o verdadeiro poder não está apenas na ferramenta, mas na habilidade de dominá-la. Criar resultados de alto impacto exige conhecimento técnico e o uso de prompts profissionais para guiar a IA. É a diferença entre um resultado genérico e uma obra que realmente se destaca.
                                </p>
                                <p>
                                    Com meu conhecimento em engenharia de prompts e manipulação de mídia com IA, ajudo sua empresa a explorar esse universo, garantindo que a tecnologia trabalhe a seu favor para criar campanhas e conteúdos que cativem seu público.
                                </p>
                            </div>
                        </div>
                        <div className="rounded-lg overflow-hidden shadow-2xl border border-border/20">
                             <video 
                                src="https://i.imgur.com/1HkpcOn.mp4" 
                                controls
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                </FadeIn>
            </div>
        </section>
    );
}
