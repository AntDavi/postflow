import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  BadgePlus,
  Calendar,
  Clock,
  EllipsisVertical,
  File,
} from "lucide-react";

interface CronogramCardProps {
  title: string;
  postsCount: number;
  dateCreated?: Date;
  lastModified?: Date;
  stats: "in progress" | "completed" | "pending";
}

export default function CronogramCard({
  title,
  postsCount,
  dateCreated,
  lastModified,
  stats,
}: CronogramCardProps) {
  const statusVariant = {
    "in progress": "default",
    completed: "secondary",
    pending: "outline",
  } as const;

  const statusLabel = {
    "in progress": "Em Progresso",
    completed: "Concluído",
    pending: "Pendente",
  } as const;

  return (
    <Card className="hover:shadow-lg transition-all duration-300 hover:border-primary/50 group">
      <CardHeader className="flex flex-col items-start pb-4">
        <div className="flex items-center justify-between w-full">
          <div className="bg-primary/10 p-3 rounded-xl group-hover:bg-primary/20 transition-colors">
            <Calendar className="text-primary h-5 w-5" />
          </div>
          <Button variant="ghost" size="icon" className="h-8 w-8">
            <EllipsisVertical className="h-4 w-4" />
          </Button>
        </div>
        <CardTitle className="text-xl font-bold mt-4 line-clamp-1">
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent className="pb-4">
        <CardDescription className="flex flex-col gap-3">
          <div className="flex items-center gap-2 text-sm">
            <File size={16} className="text-muted-foreground" />
            <span className="font-medium">{postsCount} posts</span>
          </div>

          <div className="flex items-center gap-2 text-sm">
            <BadgePlus size={16} className="text-muted-foreground" />
            <span>Criado em {dateCreated?.toLocaleDateString("pt-BR")}</span>
          </div>

          <div className="flex items-center gap-2 text-sm">
            <Clock size={16} className="text-muted-foreground" />
            <span>Atualizado {lastModified?.toLocaleDateString("pt-BR")}</span>
          </div>
        </CardDescription>
      </CardContent>
      <CardFooter className="border-t pt-4 bg-muted/30">
        <Badge variant={statusVariant[stats]} className="font-medium">
          {statusLabel[stats]}
        </Badge>
      </CardFooter>
    </Card>
  );
}
