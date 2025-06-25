"use client";
import { Button } from "@/components/ui/button";

type ContentItem = {
    dia: number;
    tipo: string;
    titulo: string;
    descricao: string;
    conteudo: string;
    hashtags: string[];
    cta: string;
};

export default function ContentList({
    items,
}: {
    items: ContentItem[];
}) {
    return (
        <div className="max-w-2xl mx-auto p-4 space-y-4">
            {items.map((item, idx) => (
                <div key={idx} className="p-4 border rounded bg-white shadow">
                    <span className="font-semibold text-md">
                        Dia {item.dia}: {item.tipo}
                    </span>
                    <h3 className="font-semibold text-lg">Titulo: {item.titulo}</h3>
                    <p className="mt-2 text-sm">{item.descricao}</p>
                    <p className="mt-2 text-sm"><strong className="text-gray-600">Legenda:</strong> {item.conteudo}</p>
                    <p className="mt-2 text-sm text-gray-600">
                        <strong>Hashtags:</strong> {item.hashtags.join(" ")}
                    </p>
                    <p className="mt-1 italic text-blue-700">{item.cta}</p>
                </div>
            ))}
            <div className="flex justify-end space-x-2 pt-4">
                <Button variant="outline">Exportar PDF</Button>
                <Button>Enviar por e‑mail</Button>
            </div>
        </div>
    );
}
