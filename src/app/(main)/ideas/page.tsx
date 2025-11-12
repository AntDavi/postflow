import { getIdeas } from "@/lib/data-source";
import IdeaCard from "../_components/IdeaCard";
import { Button } from "@/components/ui/button";
import { Download, Save, Share } from "lucide-react";
import GoBackButton from "@/components/goback";

export default async function IdeasPage() {
  const ideas = await getIdeas();
  return (
    <main className="container mx-auto px-4 py-8 max-w-7xl">
      {/* Back Button */}
      <div className="mb-6">
        <GoBackButton />
      </div>

      {/* Header Section */}
      <section className="flex flex-col lg:flex-row items-start lg:items-center justify-between py-6 mb-8 gap-6">
        <div className="flex flex-col items-start gap-2">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
            Suas Ideias de Conteúdo
          </h2>
          <p className="text-muted-foreground text-base">
            Organize, edite e exporte suas ideias criativas de forma eficiente.
          </p>
          <div className="flex items-center gap-2 mt-2">
            <div className="h-2 w-2 rounded-full bg-primary animate-pulse" />
            <span className="text-sm text-muted-foreground font-medium">
              {ideas.length}{" "}
              {ideas.length === 1 ? "ideia gerada" : "ideias geradas"}
            </span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center gap-3">
          <Button
            size="lg"
            className="shadow-md hover:shadow-lg transition-all hover:scale-105"
            variant="outline"
          >
            <Share className="h-5 w-5 mr-2" />
            Compartilhar
          </Button>
          <Button
            size="lg"
            className="shadow-md hover:shadow-lg transition-all hover:scale-105"
          >
            <Save className="h-5 w-5 mr-2" />
            Iniciar Cronograma
          </Button>
          <Button
            size="lg"
            className="shadow-md hover:shadow-lg transition-all hover:scale-105"
            variant="secondary"
          >
            <Download className="h-5 w-5 mr-2" />
            Exportar PDF
          </Button>
        </div>
      </section>

      {/* Ideas Grid/List Section */}
      <section className="space-y-6">
        <div className="flex items-center justify-between pb-4 border-b">
          <h3 className="text-xl font-semibold text-foreground">
            Todas as Ideias
          </h3>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span>Arraste para reordenar</span>
          </div>
        </div>

        {ideas.length > 0 ? (
          <div className="grid grid-cols-1 gap-6">
            {ideas.map((i, index) => (
              <div
                key={i.titulo}
                className="animate-in fade-in slide-in-from-bottom-4"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <IdeaCard {...i} />
              </div>
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-16 px-4 border-2 border-dashed rounded-lg bg-muted/20">
            <div className="p-4 bg-primary/10 rounded-full mb-4">
              <Save className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Nenhuma ideia ainda</h3>
            <p className="text-muted-foreground text-center max-w-md mb-6">
              Comece criando seu primeiro cronograma de conteúdo para gerar
              ideias incríveis!
            </p>
            <Button size="lg" asChild>
              <a href="/create">Criar Primeiro Cronograma</a>
            </Button>
          </div>
        )}
      </section>

      {/* Footer Info */}
      {ideas.length > 0 && (
        <div className="mt-10 p-6 bg-primary/5 border border-primary/20 rounded-lg">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div className="flex items-start gap-3">
              <div className="p-2 bg-primary/10 rounded-lg">
                <Save className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h4 className="font-semibold mb-1">Dica Profissional</h4>
                <p className="text-sm text-muted-foreground">
                  Arraste as ideias para reordená-las e clique em editar para
                  personalizar o conteúdo.
                </p>
              </div>
            </div>
            <Button
              variant="ghost"
              className="text-primary hover:text-primary/80"
            >
              Ver Tutorial
            </Button>
          </div>
        </div>
      )}
    </main>
  );
}
