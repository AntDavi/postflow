"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import Loading from "./Loading";

type FormState = {
    audience: string;
    description: string;
    contentTypes: Record<string, boolean>;
    days: number;
};

const CONTENT_TYPES = [
    "Imagem estática",
    "Carrossel",
    "Reels",
    "Vídeo curto",
    "Post no blog",
    "Newsletter"
];

export default function PromptForm() {
    const router = useRouter();
    const [form, setForm] = useState<FormState>({
        audience: "",
        description: "",
        contentTypes: CONTENT_TYPES.reduce((obj, type) => {
            obj[type] = false;
            return obj;
        }, {} as Record<string, boolean>),
        days: 7,
    });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | { message: string } | null>(null);

    const validate = (): boolean => {
        if (!form.audience || !form.description) {
            setError("Preencha público-alvo e descrição!");
            return false;
        }
        if (!Object.values(form.contentTypes).some(Boolean)) {
            setError("Selecione ao menos um tipo de conteúdo.");
            return false;
        }
        if (!(form.days >= 1 && form.days <= 30)) {
            setError("Dias precisa estar entre 1 e 30.");
            return false;
        }
        setError(null);
        return true;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!validate()) return;
        setLoading(true);

        try {
            const res = await fetch("/api/generate", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    audience: form.audience,
                    description: form.description,
                    type: Object.keys(form.contentTypes).filter(key => form.contentTypes[key]),
                    days: form.days,
                }),
            });

            if (!res.ok) {
                const err = await res.json();
                const message = typeof err.error === 'string' ? err.error : err.error?.message ?? 'Erro ao gerar cronograma.';
                setError(message);
                setLoading(false);
                return;
            }

            const data = await res.json();
            const payload = encodeURIComponent(data.result);
            router.push(`/result?data=${payload}&days=${form.days}`);
        } catch {
            setError("Erro de conexão. Tente novamente.");
            setLoading(false);
        }
    };

    if (loading) return <Loading />;

    return (
        <form onSubmit={handleSubmit} className="space-y-6 max-w-lg mx-auto p-4">
            {error && (
                <p className="text-red-600 text-center">
                    {typeof error === 'string' ? error : error.message}
                </p>
            )}


            <div className="space-y-2">
                <label className="font-medium">Público-alvo</label>
                <Input
                    placeholder="Ex: pequenas empresas, entusiastas de fotografia..."
                    value={form.audience}
                    onChange={(e) => setForm({ ...form, audience: e.target.value })}
                    required
                />
            </div>

            <div className="space-y-2">
                <label className="font-medium">Descrição / Nicho</label>
                <Textarea
                    placeholder="Descreva brevemente seu conteúdo ou nicho..."
                    value={form.description}
                    onChange={(e) => setForm({ ...form, description: e.target.value })}
                    required
                />
            </div>

            <div className="space-y-2">
                <label className="font-medium">Tipo de conteúdo</label>
                <div className="grid grid-cols-2 gap-2">
                    {CONTENT_TYPES.map((type) => (
                        <label key={type} className="inline-flex items-center space-x-2">
                            <input
                                type="checkbox"
                                checked={form.contentTypes[type]}
                                onChange={(e) =>
                                    setForm({
                                        ...form,
                                        contentTypes: { ...form.contentTypes, [type]: e.target.checked },
                                    })
                                }
                            />
                            <span>{type}</span>
                        </label>
                    ))}
                </div>
            </div>

            <div className="space-y-2">
                <label className="font-medium">Dias (1–30)</label>
                <Input
                    type="number"
                    value={form.days}
                    min={1}
                    max={30}
                    onChange={(e) =>
                        setForm({ ...form, days: Number(e.target.value) })
                    }
                    required
                />
            </div>

            <Button type="submit" className="w-full">
                {loading ? "Gerando..." : "Gerar Cronograma"}
            </Button>
        </form>
    );
}
