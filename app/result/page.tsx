"use client";
import { useSearchParams } from "next/navigation";
import ContentList from "@/components/ContentList";
import { useMemo } from "react";

type ContentItem = {
    dia: number;
    titulo: string;
    conteudo: string;
    hashtags: string[];
    cta: string;
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
        <section className="min-h-screen py-8 px-4">
            <h1 className="text-2xl font-bold text-center mb-6">
                Seu cronograma ({days} dias)
            </h1>
            {parsedData.length > 0 ? (
                <ContentList items={parsedData} />
            ) : (
                <p className="text-center text-red-600">Nenhum dado encontrado.</p>
            )}
        </section>
    );
}
