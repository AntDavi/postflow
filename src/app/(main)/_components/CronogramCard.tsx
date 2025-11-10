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
  return (
    <Card>
      <CardHeader className="flex flex-col items-start">
        <div className="flex items-center justify-between w-full">
          <div className="bg-primary p-2 rounded-md">
            <Calendar className="text-secondary" />
          </div>
          <Button variant="ghost" size="icon">
            <EllipsisVertical />
          </Button>
        </div>
        <CardTitle className="text-lg font-semibold mt-4">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="flex flex-col gap-2">
          <div className="flex gap-1">
            <File size={15} />
            <span>{postsCount} posts</span>
          </div>

          <div className="flex gap-1">
            <BadgePlus size={15} />
            <span>{dateCreated?.toLocaleDateString()}</span>
          </div>
          <div className="flex gap-1">
            <Clock size={15} />
            <span>{lastModified?.toLocaleDateString()}</span>
          </div>
        </CardDescription>
      </CardContent>
      <CardFooter className="border-t">
        <Badge>{stats}</Badge>
      </CardFooter>
    </Card>
  );
}
