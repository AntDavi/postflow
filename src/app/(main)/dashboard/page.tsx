import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import Link from "next/link";
import CronogramCard from "../_components/CronogramCard";

export default function DashboardPage() {
  return (
    <main className="container mx-auto px-4">
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

      <section className="mt-4">
        <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
          {/* Aqui você pode mapear e renderizar os cartões de estatísticas */}
        </div>
      </section>

      <section className="mt-4">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold">Cronogramas Recentes</h2>
          <Button variant="ghost" asChild>
            <Link href="#" className="text-primary">
              Ver Todos
            </Link>
          </Button>
        </div>

        <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
          {/* Aqui você pode mapear e renderizar os cartões de cronograma */}
          <CronogramCard
            title="Cronograma de Março"
            postsCount={12}
            dateCreated={new Date()}
            lastModified={new Date()}
            stats="in progress"
          />
          <CronogramCard
            title="Cronograma de Março"
            postsCount={12}
            dateCreated={new Date()}
            lastModified={new Date()}
            stats="in progress"
          />
          <CronogramCard
            title="Cronograma de Março"
            postsCount={12}
            dateCreated={new Date()}
            lastModified={new Date()}
            stats="in progress"
          />
          <CronogramCard
            title="Cronograma de Março"
            postsCount={12}
            dateCreated={new Date()}
            lastModified={new Date()}
            stats="in progress"
          />
        </div>
      </section>
    </main>
  );
}
