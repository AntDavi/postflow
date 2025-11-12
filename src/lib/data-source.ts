import { IdeasResponseSchema } from "./schema";
import { supabase } from "./supabase";
import { Idea } from "./types";

const DS = process.env.NEXT_PUBLIC_DATA_SOURCE ?? "mock";

export async function getIdeas(): Promise<Idea[]> {
  if (DS === "supabase") {
    // Tabela "ideas" com mesmas colunas do JSON (snake_case opcional)
    const { data, error } = await supabase
      .from("ideas")
      .select("titulo,tipo,descricao,data_publicacao,hashtags")
      .order("data_publicacao", { ascending: true });

    if (error) throw error;
    // supabase pode retornar null -> normalize
    return (data ?? []).map((row) => ({
      titulo: row.titulo,
      tipo: row.tipo,
      descricao: row.descricao,
      data_publicacao: row.data_publicacao, // já em string YYYY-MM-DD
      hashtags: Array.isArray(row.hashtags) ? row.hashtags : [],
    }));
  }

  // modo mock (lê arquivo local)
  const mod = await import("../../utils/data/ideas.json"); // bundler-friendly
  const parsed = IdeasResponseSchema.parse(mod.default ?? mod);
  return parsed.items;
}
