"use client"
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/fade-in";
import Link from 'next/link';
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export function HeroSection() {
    return (
        <section className="h-screen min-h-[700px] md:min-h-[800px] flex items-center justify-center text-center px-4 pt-20">
            <FadeIn>
                <div className="flex flex-col items-center space-y-6">
                    <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-primary/50 shadow-lg">
                        <Image
                          src="https://i.imgur.com/pBVxTbA.jpeg"
                          alt="Matheus De Carvalho"
                          width={200}
                          height={200}
                          className="object-cover w-full h-full"
                          style={{ objectPosition: '50% 15%' }}
                          data-ai-hint="man portrait"
                        />
                    </div>
                    <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-tight">
                        Matheus De Carvalho
                    </h1>
                    <p className="text-muted-foreground font-medium text-base md:text-lg tracking-wide">SC-FLORIANÓPOLIS</p>
                    <div className="text-xl md:text-2xl text-primary font-semibold flex flex-col items-center">
                      <h2 className="text-2xl md:text-3xl font-bold text-primary">Especialista em No-Code & Micro-SaaS</h2>
                    </div>
                    <p className="max-w-2xl text-muted-foreground text-base md:text-lg">
                      Design para Social Media, Criação de Infoprodutos e Gestão de Tráfego para Resultados Reais.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4 pt-4">
                        <Button asChild size="lg" className="rounded-lg shadow-lg hover:shadow-primary/40 transition-shadow duration-300">
                            <Link href="#hiring">Entre em Contato <ArrowRight className="ml-2 h-5 w-5" /></Link>
                        </Button>
                         <Button asChild size="lg" variant="secondary" className="rounded-lg">
                            <Link href="#services">Serviços</Link>
                        </Button>
                    </div>
                </div>
            </FadeIn>
        </section>
    )
}
