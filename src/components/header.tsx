import Image from "next/image";

import { ModeToggle } from "./mode-toggle";
import AvatarMenu from "./avatar-menu";

export default function Header() {
  return (
    <header className="flex items-center justify-between p-4 border-b">
      <div className="flex items-center gap-2">
        <Image src="/logo.svg" alt="Postflow Logo" width={40} height={40} />
        <h1 className="text-xl font-bold">PostFlow</h1>
      </div>
      <div className="flex items-center gap-4">
        <ModeToggle />
        <AvatarMenu />
      </div>
    </header>
  );
}
