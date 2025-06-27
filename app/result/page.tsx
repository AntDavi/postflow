"use client";
import { useSearchParams } from "next/navigation";
import ContentList from "@/components/ContentList";
import { useMemo } from "react";
import { Button } from "@/components/ui/button";

type ContentItem = {
    dia: number;
    titulo: string;
    conteudo: string;
    hashtags: string[];
    cta: string;
    tipo: string;
    descricao: string;
};

export default function ResultPage() {
    const params = useSearchParams();
    const encodedData = params.get("data") || "";
    const days = Number(params.get("days") || 7);

    console.log("[FRONT] Query param `data` codificado:", encodedData); // ← LOG A

    const parsedData: ContentItem[] = useMemo(() => {
        try {
            const decoded = decodeURIComponent(encodedData);
            console.log("[FRONT] Data decodificado:", decoded);
            const json = JSON.parse(decoded);
            console.log("[FRONT] JSON parseado:", json);
            return json;
        } catch (err) {
            console.error("[FRONT] Erro ao decodificar JSON:", err);
            return [];
        }
    }, [encodedData]);


    return (
        <section className="min-h-screen py-8 px-4 relative">
            <h1 className="text-2xl font-bold text-center mb-6">
                Seu cronograma ({days} dias)
            </h1>
            {parsedData.length > 0 ? (
                <ContentList items={parsedData} />
            ) : (
                <p className="text-center text-red-600">Nenhum dado encontrado.</p>
            )}

            <div className="flex flex-col space-y-2 fixed bottom-4 right-4">
                <Button variant="outline">Exportar PDF</Button>
                <Button>Enviar por e‑mail</Button>
            </div>
        </section>
    );
}
