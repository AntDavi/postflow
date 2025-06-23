"use client";
import { Button } from "@/components/ui/button";

export default function ContentList({ days = 7 }: { days?: number }) {
    const fake = Array.from({ length: days }, (_, i) => ({
        title: `Post Dia ${i + 1}`,
        content: "Conteúdo gerado vai aparecer aqui...",
    }));

    return (
        <div className="max-w-2xl mx-auto p-4 space-y-4">
            {fake.map((item, idx) => (
                <div key={idx} className="p-4 border rounded bg-white">
                    <h3 className="font-semibold">{item.title}</h3>
                    <p className="mt-2 text-sm">{item.content}</p>
                </div>
            ))}
            <div className="flex justify-end space-x-2">
                <Button variant="outline">Exportar PDF</Button>
                <Button>Enviar por e‑mail</Button>
            </div>
        </div>
    );
}
