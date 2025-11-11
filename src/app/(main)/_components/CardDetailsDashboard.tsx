import { Card, CardContent } from "@/components/ui/card";

export interface CardDetailsDashboardProps {
  icon: React.ReactNode;
  mount: string;
  description: string;
  bg_color?: string;
  icon_color?: string;
}

export default function CardDetailsDashboard({
  icon,
  mount,
  description,
  bg_color,
  icon_color,
}: CardDetailsDashboardProps) {
  return (
    <Card className="hover:shadow-lg transition-all duration-300 border-border/50">
      <CardContent className="p-6">
        <div className="flex items-start justify-between">
          <div className="flex flex-col gap-4">
            <div
              className="p-3 rounded-xl w-fit shadow-sm"
              style={{ backgroundColor: bg_color, color: icon_color }}
            >
              {icon}
            </div>
            <div className="space-y-1">
              <p className="text-3xl font-bold tracking-tight">{mount}</p>
              <span className="text-sm text-muted-foreground font-medium">
                {description}
              </span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
