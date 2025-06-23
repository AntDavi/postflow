"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export default function PromptForm() {
    const router = useRouter();
    const [form, setForm] = useState({ audience: "", type: "", description: "", days: 7 });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        router.push("/loading?days=" + form.days);
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4 max-w-lg mx-auto p-4">
            <Input
                placeholder="Público-alvo"
                value={form.audience}
                onChange={(e) => setForm({ ...form, audience: e.target.value })}
            />
            <Input
                placeholder="Tipo de conteúdo"
                value={form.type}
                onChange={(e) => setForm({ ...form, type: e.target.value })}
            />
            <Textarea
                placeholder="Seu conteúdo / nicho"
                value={form.description}
                onChange={(e) => setForm({ ...form, description: e.target.value })}
            />
            <Input
                type="number"
                placeholder="Dias (1–30)"
                value={form.days}
                min={1}
                max={30}
                onChange={(e) => setForm({ ...form, days: Number(e.target.value) })}
            />
            <Button type="submit" className="w-full">Gerar Cronograma</Button>
        </form>
    );
}
