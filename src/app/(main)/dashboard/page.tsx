import { Button } from "@/components/ui/button";
import { Calendar, File, Plus, Sparkles } from "lucide-react";
import Link from "next/link";
import CronogramCard from "../_components/CronogramCard";
import CardDetailsDashboard from "../_components/CardDetailsDashboard";

export default function DashboardPage() {
  return (
    <main className="container mx-auto px-4 py-4">
      <section className="flex items-center justify-between py-4">
        <div className="flex flex-col items-start">
          <h2 className="text-2xl font-semibold">Bem-vindo ao Dashboard</h2>
          <p className="text-zinc-500 mt-2">
            Gerencie seus cronogramas de conteúdo em um só lugar.
          </p>
        </div>

        <Button asChild>
          <Link href="/create" className="flex items-center gap-2">
            <Plus className="mr-2 h-4 w-4" />
            Novo Cronograma
          </Link>
        </Button>
      </section>

      <section className="mt-4">
        <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {/* Aqui você pode mapear e renderizar os cartões de estatísticas */}
          <CardDetailsDashboard
            icon={<File />}
            mount="12"
            description="Cronogramas Ativos"
            bg_color="oklch(90.1% 0.058 230.902)"
            icon_color="oklch(68.5% 0.169 237.323)"
          />
          <CardDetailsDashboard
            icon={<Sparkles />}
            mount="124"
            description="Cronogramas Criados"
            bg_color="oklch(90.1% 0.057 293.283)"
            icon_color="oklch(62.7% 0.265 303.9)"
          />
          <CardDetailsDashboard
            icon={<Calendar />}
            mount="2"
            description="Postagens para Hoje"
            bg_color="oklch(95% 0.052 163.051)"
            icon_color="oklch(72.3% 0.219 149.579)"
          />
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
