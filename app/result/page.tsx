"use client";
import { useSearchParams } from "next/navigation";

export default function ResultPage() {
    const params = useSearchParams();
    const data = params.get("data") || "";
    const days = Number(params.get("days") || 7);

    return (
        <section className="min-h-screen py-8 px-4">
            <h1 className="text-2xl font-bold text-center mb-6">
                Seu cronograma ({days} dias)
            </h1>
            <pre className="whitespace-pre-wrap bg-gray-100 rounded p-4">
                {decodeURIComponent(data)}
            </pre>
        </section>
    );
}
