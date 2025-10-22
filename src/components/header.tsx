"use client";

import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { Menu, Mountain } from "lucide-react";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled ? "bg-background/80 backdrop-blur-sm border-b border-border/20" : "bg-transparent"
      )}
    >
      <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-6">
        <Link href="#" className="flex items-center gap-2 text-lg font-bold tracking-wider text-foreground hover:text-primary transition-colors">
          <Mountain className="h-6 w-6 text-primary" />
          Matheus Carvalho
        </Link>
        <nav className="hidden md:flex items-center space-x-8">
          <Link href="#about" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            Sobre
          </Link>
          <Link href="#portfolio" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            Projetos
          </Link>
          <Link href="#services" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            Serviços
          </Link>
          <Link href="#hiring" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            Contato
          </Link>
        </nav>
        <div className="md:hidden">
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Abrir menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[280px]">
              <div className="flex flex-col h-full py-8">
                 <Link href="#" className="flex items-center gap-2 text-lg font-bold tracking-wider text-foreground mb-8" onClick={() => setIsMobileMenuOpen(false)}>
                  <Mountain className="h-6 w-6 text-primary" />
                  Matheus Carvalho
                </Link>
                <nav className="flex flex-col items-start space-y-6 text-lg">
                  <Link href="#about" onClick={() => setIsMobileMenuOpen(false)} className="text-muted-foreground hover:text-foreground transition-colors">
                    Sobre
                  </Link>
                   <Link href="#portfolio" onClick={() => setIsMobileMenuOpen(false)} className="text-muted-foreground hover:text-foreground transition-colors">
                    Projetos
                  </Link>
                  <Link href="#services" onClick={() => setIsMobileMenuOpen(false)} className="text-muted-foreground hover:text-foreground transition-colors">
                    Serviços
                  </Link>
                  <Link href="#hiring" onClick={() => setIsMobileMenuOpen(false)} className="text-muted-foreground hover:text-foreground transition-colors">
                    Contato
                  </Link>
                </nav>
                 <Button asChild className="mt-auto w-full">
                    <Link href="#hiring" onClick={() => setIsMobileMenuOpen(false)}>Vamos Conversar</Link>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
        <Button asChild className="hidden md:inline-flex rounded-lg shadow-lg hover:shadow-primary/40 transition-shadow duration-300">
            <Link href="#hiring">Vamos Conversar</Link>
        </Button>
      </div>
    </header>
  );
}