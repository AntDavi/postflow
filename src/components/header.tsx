import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

import { ModeToggle } from "./mode-toggle";

export default function Header() {
  return (
    <header className="flex items-center justify-between p-4 border-b">
      <Image src="/logo.svg" alt="Postflow Logo" width={40} height={40} />
      <div className="flex items-center gap-4">
        <ModeToggle />
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </div>
    </header>
  );
}
