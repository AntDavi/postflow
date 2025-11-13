"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Mail,
  SendHorizonal,
  Sparkles,
  Calendar,
  Zap,
  CheckCircle2,
} from "lucide-react";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";

export default function Home() {
  return (
    <>
      <header>
        <nav className="fixed z-20 w-full border-b border-border/40 bg-background/80 backdrop-blur-xl md:relative">
          <div className="m-auto max-w-6xl px-6">
            <div className="flex flex-wrap items-center justify-between gap-6 py-4 lg:gap-0 lg:py-5">
              <div className="flex w-full justify-between lg:w-auto">
                <Link
                  href="/"
                  aria-label="home"
                  className="flex items-center space-x-3 group"
                >
                  <div className="p-2 bg-primary/10 rounded-xl group-hover:bg-primary/20 transition-colors">
                    <Image src="/logo.svg" alt="Logo" width={32} height={32} />
                  </div>
                  <span className="font-bold text-xl bg-linear-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                    PostFlow
                  </span>
                </Link>
              </div>

              <div className="hidden w-full flex-wrap items-center justify-end lg:flex lg:w-fit lg:gap-6">
                <div className="flex items-center gap-3">
                  <Button asChild variant="ghost" size="sm">
                    <Link href="/login">
                      <span>Login</span>
                    </Link>
                  </Button>
                  <Button
                    asChild
                    size="sm"
                    className="shadow-md hover:shadow-lg transition-all"
                  >
                    <Link href="/login">
                      <Sparkles className="h-4 w-4 mr-2" />
                      <span>Começar Grátis</span>
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>

      <main className="relative">
        {/* Background Decoration */}
        <div
          aria-hidden
          className="absolute inset-0 isolate hidden opacity-40 contain-strict lg:block pointer-events-none"
        >
          <div className="absolute left-0 top-0 -translate-y-1/2 w-[600px] h-[600px] -rotate-45 rounded-full bg-linear-to-br from-primary/20 to-transparent blur-3xl" />
          <div className="absolute right-0 top-1/4 w-[400px] h-[400px] -rotate-45 rounded-full bg-linear-to-bl from-primary/10 to-transparent blur-3xl" />
        </div>

        {/* Hero Section */}
        <section className="relative bg-linear-to-b from-muted/30 to-background overflow-hidden">
          <div className="relative mx-auto max-w-6xl px-6 pt-32 pb-16 lg:pt-40 lg:pb-24">
            {/* Badge */}
            <div className="flex justify-center mb-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-sm font-medium text-primary">
                <Sparkles className="h-4 w-4" />
                Powered by AI
              </div>
            </div>

            {/* Hero Content */}
            <div className="relative z-10 mx-auto max-w-4xl text-center space-y-8">
              <h1 className="text-balance text-5xl font-bold tracking-tight md:text-6xl lg:text-7xl">
                Crie um{" "}
                <span className="bg-linear-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent">
                  cronograma de postagens
                </span>{" "}
                completo em minutos
              </h1>

              <p className="text-muted-foreground mx-auto max-w-2xl text-lg md:text-xl leading-relaxed">
                Transforme ideias em um plano completo de conteúdo em minutos.
                Pare de perder tempo planejando e foque em crescer.
              </p>

              {/* Email Form */}
              <div className="mx-auto max-w-md pt-4">
                <form action="" className="space-y-4">
                  <div className="relative group">
                    <div className="bg-background relative grid grid-cols-[1fr_auto] items-center rounded-2xl border-2 border-border pr-2 shadow-lg shadow-primary/5 transition-all group-focus-within:border-primary group-focus-within:shadow-primary/10">
                      <Mail className="pointer-events-none absolute inset-y-0 left-4 my-auto h-5 w-5 text-muted-foreground group-focus-within:text-primary transition-colors" />

                      <Input
                        placeholder="seu@email.com"
                        className="h-14 w-full bg-transparent pl-12 border-0 focus-visible:ring-0 focus-visible:ring-offset-0 text-base"
                        type="email"
                      />

                      <Button
                        aria-label="submit"
                        className="h-10 rounded-xl shadow-sm hover:shadow-md transition-all"
                        size="lg"
                      >
                        <span className="hidden md:block">Começar Grátis</span>
                        <SendHorizonal className="h-5 w-5 md:hidden" />
                      </Button>
                    </div>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    ✨ Sem cartão de crédito • Grátis para sempre
                  </p>
                </form>
              </div>
            </div>
          </div>

          {/* Screenshot Preview */}
          <div className="mx-auto max-w-7xl px-6 pb-16">
            <div className="relative perspective-[2000px]">
              <div className="relative transform rotate-x-6 transition-transform hover:rotate-x-2 duration-700">
                <div className="absolute -inset-4 bg-linear-to-r from-primary/20 via-primary/10 to-primary/20 rounded-3xl blur-2xl opacity-50" />
                <div className="relative rounded-2xl border-4 border-border bg-background shadow-2xl overflow-hidden">
                  <Image
                    className="w-full h-auto"
                    src="/screen.png"
                    alt="PostFlow Dashboard Preview"
                    width={2880}
                    height={2074}
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-24 bg-background">
          <div className="mx-auto max-w-6xl px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Tudo que você precisa para{" "}
                <span className="bg-linear-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                  criar conteúdo incrível
                </span>
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Ferramentas poderosas para planejar, criar e gerenciar seu
                conteúdo de forma eficiente
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="border-2 hover:border-primary/50 transition-all hover:shadow-lg group">
                <CardContent className="pt-6 space-y-4">
                  <div className="p-3 bg-primary/10 rounded-xl w-fit group-hover:bg-primary/20 transition-colors">
                    <Sparkles className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold">IA Inteligente</h3>
                  <p className="text-muted-foreground">
                    Gere ideias de conteúdo personalizadas com base no seu nicho
                    e público-alvo
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 hover:border-primary/50 transition-all hover:shadow-lg group">
                <CardContent className="pt-6 space-y-4">
                  <div className="p-3 bg-primary/10 rounded-xl w-fit group-hover:bg-primary/20 transition-colors">
                    <Calendar className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold">Cronograma Visual</h3>
                  <p className="text-muted-foreground">
                    Organize suas postagens em um calendário intuitivo e fácil
                    de usar
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 hover:border-primary/50 transition-all hover:shadow-lg group">
                <CardContent className="pt-6 space-y-4">
                  <div className="p-3 bg-primary/10 rounded-xl w-fit group-hover:bg-primary/20 transition-colors">
                    <Zap className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold">Exportação Rápida</h3>
                  <p className="text-muted-foreground">
                    Exporte seus cronogramas em PDF ou compartilhe com sua
                    equipe
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-linear-to-b from-background to-muted/30">
          <div className="mx-auto max-w-4xl px-6 text-center">
            <div className="bg-linear-to-r from-primary/10 via-primary/5 to-primary/10 rounded-3xl border-2 border-primary/20 p-12 shadow-xl">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Pronto para transformar sua criação de conteúdo?
              </h2>
              <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
                Junte-se a milhares de criadores que já estão economizando tempo
                e criando conteúdo melhor
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button
                  size="lg"
                  className="shadow-lg hover:shadow-xl transition-all hover:scale-105"
                  asChild
                >
                  <Link href="/login">
                    <Sparkles className="h-5 w-5 mr-2" />
                    Começar Gratuitamente
                  </Link>
                </Button>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <CheckCircle2 className="h-4 w-4 text-primary" />
                  Sem cartão de crédito
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
