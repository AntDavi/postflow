import { Button } from "@/components/ui/button";
import { Calendar, Calendar1, File, Plus, Sparkles } from "lucide-react";
import Link from "next/link";
import CronogramCard from "../_components/CronogramCard";
import CardDetailsDashboard from "../_components/CardDetailsDashboard";

export default function DashboardPage() {
  return (
    <main className="container mx-auto px-4 py-8 max-w-7xl">
      {/* Header Section */}
      <section className="flex items-center justify-between py-6 mb-6">
        <div className="flex flex-col items-start gap-2">
          <h2 className="text-3xl font-bold bg-linear-to-r from-primary to-primary/60 bg-clip-text text-transparent">
            Bem-vindo ao Dashboard
          </h2>
          <p className="text-muted-foreground text-base">
            Gerencie seus cronogramas de conteúdo em um só lugar.
          </p>
        </div>

        <div className="gap-3 flex">
          <Button
            asChild
            size="lg"
            className="shadow-md hover:shadow-lg transition-shadow"
          >
            <Link href="/create" className="flex items-center gap-2">
              <Plus className="h-5 w-5" />
              Novo Cronograma
            </Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="secondary"
            className="shadow-md hover:shadow-lg transition-shadow"
          >
            <Link href="/calendar" className="flex items-center gap-2">
              <Calendar1 className="h-5 w-5" />
              Visualize Calendário
            </Link>
          </Button>
        </div>
      </section>

      {/* Statistics Cards Section */}
      <section className="mb-10">
        <h3 className="text-lg font-semibold mb-4 text-muted-foreground">
          Estatísticas
        </h3>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
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

      {/* Recent Cronograms Section */}
      <section>
        <div className="flex items-center justify-between mb-6">
          <div>
            <h3 className="text-2xl font-semibold">Cronogramas Recentes</h3>
            <p className="text-sm text-muted-foreground mt-1">
              Seus últimos cronogramas criados
            </p>
          </div>
          <Button
            variant="ghost"
            asChild
            className="text-primary hover:text-primary/80"
          >
            <Link href="#" className="flex items-center gap-2">
              Ver Todos
              <Calendar className="h-4 w-4" />
            </Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
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
