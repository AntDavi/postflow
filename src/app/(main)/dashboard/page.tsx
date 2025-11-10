import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import Link from "next/link";

export default function DashboardPage() {
  return (
    <main className="container mx-auto">
      <section className="flex items-center justify-between py-4">
        <div className="flex flex-col items-start">
          <h2 className="text-2xl font-semibold">Bem-vindo ao Dashboard</h2>
          <p className="text-zinc-500 mt-2">
            Gerencie seus cronogramas de conteúdo em um só lugar.
          </p>
        </div>

        <Button>
          <Plus className="mr-2 h-4 w-4" />
          Novo Cronograma
        </Button>
      </section>

      <section className="mt-8">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold">Cronogramas Recenters</h2>
          <Button variant="ghost" asChild>
            <Link href="#" className="text-primary">
              Ver Todos
            </Link>
          </Button>
        </div>
      </section>
    </main>
  );
}
