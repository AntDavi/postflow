"use client";

import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Mail, Menu, SendHorizonal, X } from "lucide-react";
import Image from "next/image";
import { Input } from "@/components/ui/input";

const menuItems = [
  { name: "Features", href: "#" },
  { name: "Solution", href: "#" },
  { name: "Pricing", href: "#" },
  { name: "About", href: "#" },
];

export default function Home() {
  const [menuState, setMenuState] = useState(false);
  return (
    <>
      <header>
        <nav
          data-state={menuState && "active"}
          className="fixed z-20 w-full border-b border-dashed bg-white backdrop-blur md:relative dark:bg-zinc-950/50 lg:dark:bg-transparent"
        >
          <div className="m-auto max-w-5xl px-6">
            <div className="flex flex-wrap items-center justify-between gap-6 py-3 lg:gap-0 lg:py-4">
              <div className="flex w-full justify-between lg:w-auto">
                <Link
                  href="/"
                  aria-label="home"
                  className="flex items-center space-x-2"
                >
                  <Image src="/logo.svg" alt="Logo" width={40} height={40} />
                </Link>
              </div>

              <div className="bg-background in-data-[state=active]:block lg:in-data-[state=active]:flex mb-6 hidden w-full flex-wrap items-center justify-end space-y-8 rounded-3xl border p-6 shadow-2xl shadow-zinc-300/20 md:flex-nowrap lg:m-0 lg:flex lg:w-fit lg:gap-6 lg:space-y-0 lg:border-transparent lg:bg-transparent lg:p-0 lg:shadow-none dark:shadow-none dark:lg:bg-transparent">
                <div className="flex w-full flex-col space-y-3 sm:flex-row sm:gap-3 sm:space-y-0 md:w-fit lg:border-l lg:pl-6">
                  <Button asChild size="sm">
                    <Link href="/login">
                      <span>Login</span>
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>

      <main>
        <div
          aria-hidden
          className="z-2 absolute inset-0 isolate hidden opacity-50 contain-strict lg:block"
        >
          <div className="w-140 h-320 -translate-y-87.5 absolute left-0 top-0 -rotate-45 rounded-full bg-[radial-gradient(68.54%_68.72%_at_55.02%_31.46%,hsla(0,0%,85%,.08)_0,hsla(0,0%,55%,.02)_50%,hsla(0,0%,45%,0)_80%)]" />
          <div className="h-320 absolute left-0 top-0 w-60 -rotate-45 rounded-full bg-[radial-gradient(50%_50%_at_50%_50%,hsla(0,0%,85%,.06)_0,hsla(0,0%,45%,.02)_80%,transparent_100%)] [translate:5%_-50%]" />
          <div className="h-320 -translate-y-87.5 absolute left-0 top-0 w-60 -rotate-45 bg-[radial-gradient(50%_50%_at_50%_50%,hsla(0,0%,85%,.04)_0,hsla(0,0%,45%,.02)_80%,transparent_100%)]" />
        </div>

        <section className="bg-muted/50 dark:bg-background overflow-hidden">
          <div className="relative mx-auto max-w-5xl px-6 pt-28 lg:pt-24">
            <div className="relative z-10 mx-auto max-w-2xl text-center">
              <h1 className="text-balance text-4xl font-semibold md:text-5xl lg:text-6xl">
                Crie um cronograma de postagens completo em minutos usando IA
              </h1>
              <p className="text-muted-foreground mx-auto my-8 max-w-2xl text-xl">
                Transforme ideias em um plano completo de conteúdo em minutos.
                Pare de perder tempo planejando e foque em crescer.
              </p>

              <div>
                <form action="" className="">
                  <div className="bg-background has-[input:focus]:ring-muted relative grid grid-cols-[1fr_auto] items-center rounded-[calc(var(--radius)+0.75rem)] border pr-3 shadow shadow-zinc-950/5 has-[input:focus]:ring-2">
                    <Mail className="text-caption pointer-events-none absolute inset-y-0 left-5 my-auto size-5" />

                    <Input
                      placeholder="Seu email aqui"
                      className="h-14 w-full bg-transparent pl-12 focus:outline-none border-0 rounded-(--radius)    "
                      type="email"
                    />

                    <div className="md:pr-1.5 lg:pr-0">
                      <Button
                        aria-label="submit"
                        className="rounded-(--radius)"
                      >
                        <span className="hidden md:block">
                          Quero experimentar
                        </span>
                        <SendHorizonal
                          className="relative mx-auto size-5 md:hidden"
                          strokeWidth={2}
                        />
                      </Button>
                    </div>
                  </div>
                </form>
              </div>

              {/* <Button asChild size="lg">
                <Link href="#">
                  <span className="btn-label">
                    🚀 Começar Agora Gratuitamente
                  </span>
                </Link>
              </Button> */}
            </div>
          </div>

          <div className="mx-auto 2xl:max-w-7xl">
            <div className="perspective-distant pl-8 lg:pl-44">
              <div className="lg:h-176 rotate-x-20 mask-b-from-55% mask-b-to-100% mask-r-from-75% skew-x-12 pl-6 pt-6">
                <Image
                  className="rounded-(--radius) border shadow-xl dark:hidden"
                  src="/screen.png"
                  alt="Tailark hero section"
                  width={2880}
                  height={2074}
                />
                <Image
                  className="rounded-(--radius) hidden border shadow-xl dark:block"
                  src="/screen.png"
                  alt="Tailark hero section"
                  width={2880}
                  height={2074}
                />
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
