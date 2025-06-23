// src/app/page.tsx
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function HomePage() {
    return (
        <section className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-blue-50 to-white p-6 text-center">
            <h1 className="text-4xl font-bold mb-4">
                PostFlow: Cronograma de postagens em segundos
            </h1>
            <p className="text-lg mb-8 max-w-xl">
                Receba um cronograma completo com título, conteúdo, hashtags e CTAs — pronto para exportar em PDF ou enviar por e‑mail. Simples, rápido e eficiente.
            </p>
            <Link href="/prompt">
                <Button size="lg">Começar Agora</Button>
            </Link>
        </section>
    );
}
