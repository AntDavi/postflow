"use client";
import { useSearchParams } from "next/navigation";
import ContentList from "@/components/ContentList";

export default function ResultPage() {
    const params = useSearchParams();
    const days = Number(params.get("days") || 7);

    return (
        <section className="min-h-screen py-8">
            <h1 className="text-2xl font-bold text-center mb-6">Seu cronograma</h1>
            <ContentList days={days} />
        </section>
    );
}
