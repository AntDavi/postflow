"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

type FormState = {
    audience: string;
    type: string;
    description: string;
    days: number;
};

export default function PromptForm() {
    const router = useRouter();
    const [form, setForm] = useState<FormState>({
        audience: "",
        type: "",
        description: "",
        days: 7,
    });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const validate = (): boolean => {
        if (!form.audience || !form.type || !form.description) {
            setError("Preencha todos os campos!");
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
                body: JSON.stringify(form),
            });

            if (!res.ok) {
                const err = await res.json();
                setError(err.error || "Erro ao gerar cronograma.");
                setLoading(false);
                return;
            }

            const data = await res.json();
            const payload = encodeURIComponent(data.result);
            router.push(`/result?data=${payload}&days=${form.days}`);
        } catch (err) {
            console.error(err);
            setError("Erro de conexão. Tente novamente.");
            setLoading(false);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4 max-w-lg mx-auto p-4">
            {error && (
                <p className="text-red-600 text-center font-medium">{error}</p>
            )}
            <Input
                placeholder="Público-alvo"
                value={form.audience}
                onChange={(e) => setForm({ ...form, audience: e.target.value })}
                required
            />
            <Input
                placeholder="Tipo de conteúdo"
                value={form.type}
                onChange={(e) => setForm({ ...form, type: e.target.value })}
                required
            />
            <Textarea
                placeholder="Seu conteúdo / nicho"
                value={form.description}
                onChange={(e) => setForm({ ...form, description: e.target.value })}
                required
            />
            <Input
                type="number"
                placeholder="Dias (1–30)"
                value={form.days}
                min={1}
                max={30}
                onChange={(e) =>
                    setForm({ ...form, days: Number(e.target.value) })
                }
                required
            />
            <Button type="submit" className="w-full" disabled={loading}>
                {loading ? "Gerando..." : "Gerar Cronograma"}
            </Button>
        </form>
    );
}
