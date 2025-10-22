import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { FadeIn } from "@/components/fade-in";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Badge } from "@/components/ui/badge";

const projects = [
    {
        id: "tributohub",
        title: "TributoHub",
        role: "Fundador e Desenvolvedor",
        imageUrlId: "tributohub-mockup",
        imageHint: "application mockup",
        description: "Um Micro-SaaS whitelabel que automatiza a criação de propostas para advogados.",
        details: [
            {
                title: "Solução Completa",
                text: "Idealizei e construí um Micro-SaaS completo para advogados tributaristas. A plataforma é whitelabel, permitindo que cada escritório personalize o sistema com sua própria marca e identidade visual."
            },
            {
                title: "Automação e Pagamentos",
                text: "Desenvolvi uma experiência totalmente automatizada. O sistema é integrado a um gateway de pagamento, permitindo que os usuários escolham um plano, paguem e comecem a usar a plataforma instantaneamente, sem qualquer intervenção manual."
            },
            {
                title: "Conquista Chave",
                text: "Validei o modelo de negócio e escalei o produto para R$ 2.000 de Receita Mensal Recorrente (MRR) em apenas 3 meses, demonstrando a capacidade de gerenciar o ciclo de vida completo de um produto, da ideia à monetização."
            }
        ]
    },
    {
        id: "lovebudget",
        title: "Love Budget",
        role: "Fundador e Desenvolvedor",
        imageUrlId: "love-budget-mockup",
        imageHint: "finance app",
        description: "Um Micro-SaaS para casais que buscam organizar suas finanças e economizar juntos.",
        details: [
            {
                title: "Conceito",
                text: "Criei o Love Budget para ajudar casais a unificar o planejamento financeiro. A plataforma oferece um espaço compartilhado para definir metas, registrar despesas e visualizar o progresso em direção a objetivos comuns, como uma viagem ou a compra de um imóvel."
            },
            {
                title: "Como Funciona",
                text: "O sistema permite que ambos os parceiros cadastrem suas receitas e despesas, categorizem gastos e estabeleçam metas de economia mensais. Com dashboards intuitivos, o casal pode acompanhar a evolução do orçamento e tomar decisões financeiras mais alinhadas."
            },
            {
                title: "Tecnologia",
                text: "Desenvolvido com uma abordagem No-Code, o Love Budget utiliza Supabase como banco de dados e autenticação, garantindo segurança e escalabilidade para gerenciar os dados financeiros dos usuários de forma eficiente."
            }
        ]
    },
    {
        id: "franzoi-sistema",
        title: "Sistema Franzoi Advocacia",
        role: "Desenvolvedor Freelancer",
        imageUrlId: "franzoi-mockup",
        imageHint: "login screen",
        description: "Sistema de gestão interno e personalizado para o escritório Franzoi Advocacia.",
        details: [
            {
                title: "Solução Sob Medida",
                text: "Desenvolvi um sistema interno exclusivo para atender às necessidades específicas do escritório. O projeto foi criado do zero para otimizar os fluxos de trabalho e a gestão de informações da equipe."
            },
            {
                title: "Abordagem Personalizada",
                text: "Diferente de um SaaS de prateleira, este sistema foi totalmente customizado. Trabalhei em colaboração direta com o cliente para garantir que cada funcionalidade entregasse o máximo de valor e eficiência para suas operações diárias."
            },
            {
                title: "Tecnologia e Entrega",
                text: "A plataforma foi construída com tecnologias No-Code para garantir uma entrega rápida e um produto de alta qualidade, demonstrando minha capacidade de desenvolver soluções robustas sob demanda para clientes específicos."
            }
        ]
    }
];

export function ProjectsSection() {
    return (
        <section id="portfolio" className="py-20 md:py-32 bg-card/10">
            <div className="container mx-auto px-4 md:px-6">
                <FadeIn>
                    <div className="text-center mb-12 md:mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold mb-2">Projetos em Destaque</h2>
                        <p className="text-muted-foreground text-lg">Conheça alguns dos produtos que desenvolvi do zero.</p>
                    </div>

                    <div className="grid gap-12 lg:gap-20">
                        {projects.map((project, index) => {
                            const projectImage = PlaceHolderImages.find(img => img.id === project.imageUrlId);
                            return (
                                <Card key={project.id} className="overflow-hidden shadow-2xl bg-card/50 border-border/50 backdrop-blur-sm w-full max-w-6xl mx-auto">
                                    <div className="grid md:grid-cols-2 items-center gap-0">
                                        <div className={`p-6 md:p-8 flex flex-col justify-center order-2 ${index % 2 === 0 ? 'md:order-1' : 'md:order-2'}`}>
                                            <CardHeader className="p-0 mb-4 md:mb-6">
                                                <div className="mb-2">
                                                    <Badge variant="secondary" className="text-sm">{project.role}</Badge>
                                                </div>
                                                <CardTitle className="text-2xl lg:text-3xl font-bold">{project.title}</CardTitle>
                                                <CardDescription className="text-base lg:text-lg text-muted-foreground pt-1">{project.description}</CardDescription>
                                            </CardHeader>
                                            <CardContent className="p-0 space-y-4">
                                                {project.details.map(detail => (
                                                    <div key={detail.title}>
                                                        <h4 className="font-semibold text-foreground mb-1">{detail.title}</h4>
                                                        <p className="text-muted-foreground leading-relaxed text-sm md:text-base">{detail.text}</p>
                                                    </div>
                                                ))}
                                            </CardContent>
                                        </div>
                                        <div className={`order-1 ${index % 2 === 0 ? 'md:order-2' : 'md:order-1'}`}>
                                            {projectImage && (
                                                <div className="bg-background/20 aspect-video md:h-full flex items-center justify-center">
                                                    <Image 
                                                        src={projectImage.imageUrl} 
                                                        alt={projectImage.description}
                                                        width={800}
                                                        height={600}
                                                        className="object-cover w-full h-full"
                                                        data-ai-hint={projectImage.imageHint}
                                                    />
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </Card>
                            )
                        })}
                    </div>
                </FadeIn>
            </div>
        </section>
    )
}
