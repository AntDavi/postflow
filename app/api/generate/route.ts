import { NextRequest, NextResponse } from 'next/server';
import openai from '@/lib/openai';
import { z } from 'zod';

// Schema que reflete o novo formato do formulário
const BodySchema = z.object({
    audience: z.string().min(1),
    description: z.string().min(1),
    type: z.array(z.string()).min(1),
    days: z.number().min(1).max(30),
});

export async function POST(req: NextRequest) {
    const body = await req.json();
    const parsed = BodySchema.safeParse(body);

    if (!parsed.success) {
        // Extrai apenas as mensagens de erro relevantes
        const messages = parsed.error.errors.map(e => e.message).join(' ');
        return NextResponse.json({ error: messages }, { status: 400 });
    }

    const { audience, description, type, days } = parsed.data;

    try {
        const resp = await openai.chat.completions.create({
            model: 'gpt-3.5-turbo',
            messages: [
                {
                    role: 'system',
                    content:
                        'Você é um assistente que gera cronogramas de postagem para redes sociais.',
                },
                {
                    role: 'user',
                    content: `Gere um cronograma de ${days} dias para o público "${audience}", nicho "${description}", nos formatos: ${type.join(
                        ', '
                    )}. Para cada dia, forneça título, conteúdo, hashtags que sejam relevantes, CTA.`,
                },
            ],
            temperature: 0.7,
            max_tokens: 3000,
        });

        const content = resp.choices?.[0]?.message?.content;
        return NextResponse.json({ result: content });
    } catch (err: any) {
        console.error('OpenAI error:', err);
        let msg = 'Erro interno ao gerar cronograma.';
        if (err.code === 'insufficient_quota') {
            msg =
                'Limite de uso excedido. Verifique sua conta ou tente novamente mais tarde.';
        }
        return NextResponse.json({ error: msg }, { status: 500 });
    }
}

export const GET = () =>
    NextResponse.json({ error: 'Método não permitido' }, { status: 405 });
