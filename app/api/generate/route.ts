/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextRequest, NextResponse } from 'next/server';
import openai from '@/lib/openai';
import { z } from 'zod';

const BodySchema = z.object({
    audience: z.string().min(1),
    description: z.string().min(1),
    type: z.array(z.string()).min(1),
    days: z.number().min(1).max(30),
});

export async function POST(req: NextRequest) {
    const body = await req.json();
    console.log("[API] Body recebido:", body);

    const parsed = BodySchema.safeParse(body);
    if (!parsed.success) {
        const messages = parsed.error.errors.map(e => e.message);
        console.log("[API] Erro de validação:", messages);
        return NextResponse.json({ error: messages }, { status: 400 });
    }

    const { audience, description, type, days } = parsed.data;

    const prompt = `
Gere um cronograma de ${days} dias para redes sociais voltado para o público "${audience}" no nicho "${description}".
Os formatos dos posts devem incluir: ${type.join(', ')}.

Retorne a resposta exclusivamente no seguinte formato JSON:

[
  {
    "dia": 1,
    "tipo": "Tipo de post (ex: imagem, vídeo, carrossel)",
    "titulo": "Título do post",
    "descricao": "Descrição do que deve ser no post (ex: um carrossel com 5 imagens sobre o tema X)",
    "conteudo": "Texto principal do post",
    "hashtags": ["#hashtag1", "#hashtag2"],
  },
  ...
]

Importante:
- Não adicione texto fora do JSON.
- Cada dia deve ser um item do array.
- Use linguagem envolvente, natural e adequada ao público-alvo.
`;

    try {
        const resp = await openai.chat.completions.create({
            model: 'gpt-3.5-turbo',
            messages: [
                {
                    role: 'system',
                    content: 'Você é um assistente que gera cronogramas de postagem para redes sociais.',
                },
                {
                    role: 'user',
                    content: prompt,
                },
            ],
            temperature: 0.7,
            max_tokens: 3000,
        });

        const content = resp.choices?.[0]?.message?.content ?? '';
        console.log("[API] Resposta bruta da OpenAI:", content);

        // 🧼 Limpeza da resposta para evitar erro de parse
        const cleaned = content
            .trim()
            .replace(/^```json/, '')
            .replace(/^```/, '')
            .replace(/```$/, '')
            .trim();

        console.log("[API] Conteúdo limpo para parse:", cleaned);

        try {
            const json = JSON.parse(cleaned);
            console.log("[API] JSON parseado com sucesso");
            return NextResponse.json({ result: json });
        } catch (e) {
            console.error("[API] Falha ao parsear JSON:", e);
            return NextResponse.json({
                error: 'A resposta do modelo não pôde ser interpretada como JSON válido.',
            }, { status: 500 });
        }
    } catch (err: any) {
        console.error('OpenAI error:', err);
        let msg = 'Erro interno ao gerar cronograma.';
        if (err.code === 'insufficient_quota') {
            msg = 'Limite de uso excedido. Verifique sua conta ou tente novamente mais tarde.';
        }
        if (err.code === 'invalid_api_key') {
            msg = 'Chave de API inválida. Verifique seu .env.local.';
        }
        return NextResponse.json({ error: msg }, { status: 500 });
    }
}

export const GET = () =>
    NextResponse.json({ error: 'Método não permitido' }, { status: 405 });
