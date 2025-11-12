import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Idea } from "@/lib/types";
import { Calendar, GripVertical, Hash, Pen } from "lucide-react";

export default function IdeaCard({
  titulo,
  tipo,
  data_publicacao,
  descricao,
  hashtags,
}: Idea) {
  const tipoVariant = {
    Postagem: "default",
    Carrossel: "secondary",
    "Artigos de Blog": "outline",
    Reels: "default",
    Stories: "secondary",
    Newsletters: "outline",
  } as const;

  return (
    <Card className="hover:shadow-lg transition-all duration-300 hover:border-primary/50 group">
      <CardHeader className="flex flex-row items-start gap-3 space-y-0 pb-3">
        <div className="cursor-grab active:cursor-grabbing text-muted-foreground hover:text-primary transition-colors">
          <GripVertical className="h-5 w-5" />
        </div>

        <div className="flex-1 space-y-2">
          <div className="flex items-start justify-between gap-2">
            <CardTitle className="text-xl font-bold line-clamp-2 group-hover:text-primary transition-colors">
              {titulo}
            </CardTitle>
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8 shrink-0 hover:bg-primary/10 hover:text-primary"
            >
              <Pen className="h-4 w-4" />
            </Button>
          </div>

          <Badge
            variant={tipoVariant[tipo as keyof typeof tipoVariant] || "default"}
            className="font-medium"
          >
            {tipo}
          </Badge>
        </div>
      </CardHeader>

      <CardContent className="space-y-4 pt-3">
        <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3">
          {descricao}
        </p>

        <div className="flex items-center gap-2 text-sm pt-2 border-t">
          <Calendar className="h-4 w-4 text-muted-foreground" />
          <span className="text-muted-foreground">Publicar em:</span>
          <strong className="text-foreground">{data_publicacao}</strong>
        </div>

        {hashtags && hashtags.length > 0 && (
          <div className="flex flex-wrap gap-2 pt-2">
            <Hash className="h-4 w-4 text-primary shrink-0 mt-0.5" />
            <div className="flex flex-wrap gap-2">
              {hashtags.map((h) => (
                <span
                  key={h}
                  className="text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded-md hover:bg-primary/20 transition-colors"
                >
                  #{h.replace("#", "")}
                </span>
              ))}
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
