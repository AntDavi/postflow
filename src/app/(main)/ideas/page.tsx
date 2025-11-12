import { getIdeas } from "@/lib/data-source";

export default async function IdeasPage() {
  const ideas = await getIdeas();
  return (
    <div className="grid gap-4">
      {ideas.map((i) => (
        <article key={i.titulo} className="rounded-xl border p-4">
          <header className="flex items-center gap-2">
            <h3 className="font-semibold">{i.titulo}</h3>
            <span className="text-xs rounded bg-emerald-100 px-2 py-0.5">
              {i.tipo}
            </span>
          </header>
          <p className="mt-2 text-sm text-muted-foreground whitespace-pre-line">
            {i.descricao}
          </p>
          <footer className="mt-3 text-xs">
            <div>
              Publicar em: <strong>{i.data_publicacao}</strong>
            </div>
            <div className="mt-1 space-x-2">
              {i.hashtags.map((h) => (
                <span key={h} className="text-emerald-600">
                  #{h.replace("#", "")}
                </span>
              ))}
            </div>
          </footer>
        </article>
      ))}
    </div>
  );
}
