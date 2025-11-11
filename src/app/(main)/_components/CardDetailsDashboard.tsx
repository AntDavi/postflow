import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
} from "@/components/ui/card";

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
    <Card>
      <CardContent>
        <div className="flex flex-col gap-3 w-fit">
          <div
            className="p-2 rounded-md"
            style={{ backgroundColor: bg_color, color: icon_color }}
          >
            {icon}
          </div>
          <p className="text-2xl font-semibold">{mount}</p>
        </div>
        <span className="text-gray-400">{description}</span>
      </CardContent>
    </Card>
  );
}
