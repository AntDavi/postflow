import { z } from "zod";
export const IdeaSchema = z.object({
  titulo: z.string(),
  tipo: z.enum([
    "Postagem",
    "Carrossel",
    "Stories",
    "Reels",
    "Newsletter",
    "Artigo de Blog",
  ]),
  descricao: z.string(),
  data_publicacao: z.string(), // valide formato se quiser: z.string().regex(/^\d{4}-\d{2}-\d{2}$/)
  hashtags: z.array(z.string()),
});
export const IdeasResponseSchema = z.object({ items: z.array(IdeaSchema) });
export type IdeasResponse = z.infer<typeof IdeasResponseSchema>;
