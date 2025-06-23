import { NextRequest, NextResponse } from "next/server";
import openai from "@/lib/openai";
import { z } from "zod";

const BodySchema = z.object({
    audience: z.string().min(1),
    type: z.string().min(1),
    description: z.string().min(1),
    days: z.number().min(1).max(30),
});

export async function POST(req: NextRequest) {
    const body = await req.json();
    const parsed = BodySchema.safeParse(body);
    if (!parsed.success) {
        return NextResponse.json({ error: parsed.error.errors }, { status: 400 });
    }
    const { audience, type, description, days } = parsed.data;

    try {
        const resp = await openai.chat.completions.create({
            model: "gpt-3.5-turbo",
            messages: [
                { role: "system", content: "Você é um gerador de cronograma de posts." },
                {
                    role: "user",
                    content: `Gere um cronograma de ${days} dias para público "${audience}", tipo "${type}", nicho: ${description}`,
                },
            ],
            temperature: 0.7,
            max_tokens: 1500,
        });

        const content = resp.choices?.[0]?.message?.content;
        return NextResponse.json({ result: content });
    } catch (err) {
        console.error("Erro OpenAI:", err);
        return NextResponse.json({ error: "Erro interno ao gerar cronograma" }, { status: 500 });
    }
}

// Bloqueie outros métodos
export const GET = () =>
    NextResponse.json({ error: "Método não permitido" }, { status: 405 });
