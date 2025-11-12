"use client";

import { useRouter } from "next/navigation";
import { Button } from "./ui/button";

export default function GoBackButton() {
  const router = useRouter();

  const handleGoBack = () => {
    router.back();
  };
  return (
    <Button variant="link" onClick={handleGoBack} className="">
      Voltar
    </Button>
  );
}
