export type IdeaType =
  | "Postagem"
  | "Carrossel"
  | "Stories"
  | "Reels"
  | "Newsletter"
  | "Artigo de Blog";

export interface Idea {
  titulo: string;
  tipo: IdeaType;
  descricao: string;
  data_publicacao: string; // ISO date (YYYY-MM-DD)
  hashtags: string[];
}
