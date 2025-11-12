import { getIdeas } from "@/lib/data-source";
import IdeaCard from "../_components/IdeaCard";

export default async function IdeasPage() {
  const ideas = await getIdeas();
  return (
    <div className="grid gap-4">
      {ideas.map((i) => (
        <IdeaCard key={i.titulo} {...i} />
      ))}
    </div>
  );
}
