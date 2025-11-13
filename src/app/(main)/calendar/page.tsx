"use client";

import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  ChevronLeft,
  ChevronRight,
  Calendar as CalendarIcon,
  FileText,
  Hash,
  X,
  Loader2,
} from "lucide-react";
import { cn } from "@/lib/utils";
import type { Idea } from "@/lib/types";
import { getIdeas } from "@/lib/data-source";

export default function CalendarPage() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedIdea, setSelectedIdea] = useState<Idea | null>(null);
  const [ideas, setIdeas] = useState<Idea[]>([]);
  const [loading, setLoading] = useState(true);

  // Carregar ideias
  useEffect(() => {
    const loadIdeas = async () => {
      try {
        setLoading(true);
        const data = await getIdeas();
        setIdeas(data);
      } catch (error) {
        console.error("Erro ao carregar ideias:", error);
      } finally {
        setLoading(false);
      }
    };

    loadIdeas();
  }, []);

  // Funções de navegação
  const goToPreviousMonth = () => {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1)
    );
  };

  const goToNextMonth = () => {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1)
    );
  };

  const goToToday = () => {
    setCurrentDate(new Date());
  };

  // Gerar dias do calendário
  const getDaysInMonth = () => {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDayOfWeek = firstDay.getDay();

    const days = [];

    // Dias do mês anterior
    for (let i = 0; i < startingDayOfWeek; i++) {
      days.push(null);
    }

    // Dias do mês atual
    for (let day = 1; day <= daysInMonth; day++) {
      days.push(new Date(year, month, day));
    }

    return days;
  };

  // Obter ideias para um dia específico
  const getIdeasForDay = (date: Date | null) => {
    if (!date) return [];
    const dateStr = date.toISOString().split("T")[0];
    return ideas.filter((idea) => idea.data_publicacao === dateStr);
  };

  // Verificar se é hoje
  const isToday = (date: Date | null) => {
    if (!date) return false;
    const today = new Date();
    return (
      date.getDate() === today.getDate() &&
      date.getMonth() === today.getMonth() &&
      date.getFullYear() === today.getFullYear()
    );
  };

  const days = getDaysInMonth();
  const monthName = currentDate.toLocaleDateString("pt-BR", { month: "long" });
  const year = currentDate.getFullYear();

  const tipoColors = {
    Postagem: "default",
    Carrossel: "secondary",
    Stories: "outline",
    Reels: "default",
    Newsletter: "secondary",
    "Artigo de Blog": "outline",
  } as const;

  return (
    <main className="container mx-auto px-4 py-8 max-w-7xl">
      {/* Header */}
      <section className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 mb-8">
        <div className="flex flex-col items-start gap-2">
          <h2 className="text-4xl font-bold bg-linear-to-r from-primary to-primary/60 bg-clip-text text-transparent">
            Calendário de Conteúdo
          </h2>
          <p className="text-muted-foreground text-base">
            Visualize e gerencie seu cronograma de postagens de forma eficiente.
          </p>
          {!loading && (
            <div className="flex items-center gap-2 mt-1">
              <div className="h-2 w-2 rounded-full bg-primary animate-pulse" />
              <span className="text-sm text-muted-foreground font-medium">
                {ideas.length}{" "}
                {ideas.length === 1 ? "ideia agendada" : "ideias agendadas"}
              </span>
            </div>
          )}
        </div>

        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <div className="h-3 w-3 rounded-full bg-primary" />
            <span>Com postagens</span>
          </div>
          <div className="flex items-center gap-2 ml-4">
            <div className="h-3 w-3 rounded-full bg-primary/20 border-2 border-primary" />
            <span>Hoje</span>
          </div>
        </div>
      </section>

      {/* Loading State */}
      {loading && (
        <div className="flex items-center justify-center py-20">
          <div className="flex flex-col items-center gap-4">
            <Loader2 className="h-8 w-8 animate-spin text-primary" />
            <p className="text-muted-foreground">Carregando calendário...</p>
          </div>
        </div>
      )}

      {/* Calendar Content */}
      {!loading && (
        <>
          {/* Calendar Controls */}
          <Card className="mb-6">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-2xl font-bold capitalize">
                  {monthName} {year}
                </CardTitle>
                <div className="flex items-center gap-2">
                  <Button variant="outline" size="sm" onClick={goToToday}>
                    Hoje
                  </Button>
                  <div className="flex items-center gap-1">
                    <Button
                      variant="outline"
                      size="icon"
                      className="h-9 w-9"
                      onClick={goToPreviousMonth}
                    >
                      <ChevronLeft className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="outline"
                      size="icon"
                      className="h-9 w-9"
                      onClick={goToNextMonth}
                    >
                      <ChevronRight className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </CardHeader>
          </Card>

          {/* Calendar Grid */}
          <Card>
            <CardContent className="p-6">
              {/* Week days header */}
              <div className="grid grid-cols-7 gap-2 mb-4">
                {["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"].map(
                  (day) => (
                    <div
                      key={day}
                      className="text-center text-sm font-semibold text-muted-foreground py-2"
                    >
                      {day}
                    </div>
                  )
                )}
              </div>

              {/* Calendar days */}
              <div className="grid grid-cols-7 gap-2">
                {days.map((date, index) => {
                  const dayIdeas = getIdeasForDay(date);
                  const hasIdeas = dayIdeas.length > 0;
                  const isTodayDate = isToday(date);

                  return (
                    <div
                      key={index}
                      className={cn(
                        "min-h-[120px] p-2 rounded-lg border-2 transition-all",
                        date
                          ? "bg-card hover:border-primary/50"
                          : "bg-muted/20 border-transparent",
                        isTodayDate && "border-primary bg-primary/5",
                        !date && "cursor-not-allowed"
                      )}
                    >
                      {date && (
                        <>
                          <div className="flex items-center justify-between mb-2">
                            <span
                              className={cn(
                                "text-sm font-semibold",
                                isTodayDate ? "text-primary" : "text-foreground"
                              )}
                            >
                              {date.getDate()}
                            </span>
                            {hasIdeas && (
                              <div className="h-2 w-2 rounded-full bg-primary" />
                            )}
                          </div>

                          {/* Mini cards for ideas */}
                          <div className="space-y-1">
                            {dayIdeas.slice(0, 2).map((idea, ideaIndex) => (
                              <button
                                key={ideaIndex}
                                onClick={() => setSelectedIdea(idea)}
                                className="w-full text-left p-2 rounded-md bg-primary/10 hover:bg-primary/20 transition-colors group"
                              >
                                <p className="text-xs font-medium text-foreground line-clamp-1 group-hover:text-primary transition-colors">
                                  {idea.titulo}
                                </p>
                                <Badge
                                  variant={tipoColors[idea.tipo]}
                                  className="text-[10px] h-4 mt-1"
                                >
                                  {idea.tipo}
                                </Badge>
                              </button>
                            ))}
                            {dayIdeas.length > 2 && (
                              <button
                                onClick={() => setSelectedIdea(dayIdeas[2])}
                                className="w-full text-center text-xs text-primary hover:underline py-1"
                              >
                                +{dayIdeas.length - 2} mais
                              </button>
                            )}
                          </div>
                        </>
                      )}
                    </div>
                  );
                })}
              </div>
            </CardContent>
          </Card>
        </>
      )}

      {/* Expanded Card Modal */}
      {selectedIdea && (
        <div
          className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedIdea(null)}
        >
          <Card
            className="w-full max-w-2xl shadow-2xl border-2 animate-in fade-in zoom-in duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            <CardHeader className="border-b">
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1 space-y-2">
                  <CardTitle className="text-2xl font-bold">
                    {selectedIdea.titulo}
                  </CardTitle>
                  <div className="flex items-center gap-2">
                    <Badge
                      variant={tipoColors[selectedIdea.tipo]}
                      className="font-medium"
                    >
                      {selectedIdea.tipo}
                    </Badge>
                    <div className="flex items-center gap-1 text-sm text-muted-foreground">
                      <CalendarIcon className="h-4 w-4" />
                      {new Date(
                        selectedIdea.data_publicacao
                      ).toLocaleDateString("pt-BR", {
                        day: "2-digit",
                        month: "long",
                        year: "numeric",
                      })}
                    </div>
                  </div>
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setSelectedIdea(null)}
                  className="shrink-0"
                >
                  <X className="h-5 w-5" />
                </Button>
              </div>
            </CardHeader>

            <CardContent className="pt-6 space-y-6">
              {/* Description */}
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm font-semibold text-muted-foreground">
                  <FileText className="h-4 w-4" />
                  Descrição
                </div>
                <p className="text-foreground leading-relaxed pl-6">
                  {selectedIdea.descricao}
                </p>
              </div>

              {/* Hashtags */}
              {selectedIdea.hashtags && selectedIdea.hashtags.length > 0 && (
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm font-semibold text-muted-foreground">
                    <Hash className="h-4 w-4" />
                    Hashtags
                  </div>
                  <div className="flex flex-wrap gap-2 pl-6">
                    {selectedIdea.hashtags.map((tag, index) => (
                      <span
                        key={index}
                        className="text-sm font-medium text-primary bg-primary/10 px-3 py-1 rounded-md"
                      >
                        #{tag.replace("#", "")}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Actions */}
              <div className="flex items-center gap-3 pt-4 border-t">
                <Button className="flex-1">Editar Postagem</Button>
                <Button variant="outline" className="flex-1">
                  Compartilhar
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </main>
  );
}
