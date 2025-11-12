"use client";

import * as React from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Checkbox } from "@/components/ui/checkbox";
import { Calendar } from "@/components/ui/calendar";
import { Sparkles, CalendarIcon, Lightbulb } from "lucide-react";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import { cn } from "@/lib/utils";
import GoBackButton from "@/components/goback";

// Schema de validação com Zod
const formSchema = z.object({
  nicho: z.string().min(3, {
    message: "O nicho deve ter pelo menos 3 caracteres.",
  }),
  publicoAlvo: z.string().min(3, {
    message: "O público-alvo deve ter pelo menos 3 caracteres.",
  }),
  tiposConteudo: z.array(z.string()).min(1, {
    message: "Selecione pelo menos um tipo de conteúdo.",
  }),
  quantidadePosts: z
    .number()
    .min(5, {
      message: "Mínimo de 5 posts.",
    })
    .max(20, {
      message: "Máximo de 20 posts.",
    }),
  dateRange: z
    .object({
      from: z.date({
        message: "Selecione a data inicial.",
      }),
      to: z.date({
        message: "Selecione a data final.",
      }),
    })
    .refine((data) => data.to >= data.from, {
      message: "A data final deve ser posterior à data inicial.",
    }),
});

type FormValues = z.infer<typeof formSchema>;

export default function CreatePage() {
  const [selectedContent, setSelectedContent] = React.useState<string[]>([]);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      nicho: "",
      publicoAlvo: "",
      tiposConteudo: [],
      quantidadePosts: 10,
      dateRange: {
        from: new Date(2025, 5, 12),
        to: new Date(2025, 6, 15),
      },
    },
  });

  const handleContentToggle = (label: string) => {
    const newSelected = selectedContent.includes(label)
      ? selectedContent.filter((item) => item !== label)
      : [...selectedContent, label];

    setSelectedContent(newSelected);
    form.setValue("tiposConteudo", newSelected, { shouldValidate: true });
  };

  const onSubmit = (values: FormValues) => {
    console.log(values);
    // Aqui você pode adicionar a lógica para processar o formulário
  };

  const contentTypes = [
    "Postagem",
    "Carrossel",
    "Artigos de Blog",
    "Reels",
    "Stories",
    "Newsletters",
  ];

  return (
    <main className="container mx-auto px-4 py-8 max-w-7xl">
      <GoBackButton />
      {/* Header Section */}
      <section className="flex items-center flex-col py-8 mb-8">
        <div className="p-5 bg-linear-to-br from-primary/10 to-primary/5 rounded-2xl mb-4 shadow-sm">
          <Sparkles className="h-10 w-10 text-primary mx-auto" />
        </div>
        <h2 className="text-3xl font-bold text-center mb-2 bg-linear-to-r from-primary to-primary/60 bg-clip-text text-transparent">
          Assistente de Conteúdo
        </h2>
        <p className="text-muted-foreground text-center max-w-2xl">
          Crie ideias incríveis para suas redes sociais em segundos
        </p>
      </section>

      {/* Form Section */}
      <div className="p-4 bg-primary/5 border border-primary/20 rounded-lg mb-4">
        <p className="text-center text-sm text-muted-foreground flex items-center justify-center gap-2">
          <Lightbulb className="h-4 w-4 text-primary" />
          Quanto mais especifico você for, melhores serão as ideias!
        </p>
      </div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          {/* Nicho de Atuação */}
          <FormField
            control={form.control}
            name="nicho"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-base font-semibold">
                  Seu Nicho de Atuação
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder="Ex: Marketing Digital, Saúde, Finanças..."
                    className="h-11"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Público-Alvo */}
          <FormField
            control={form.control}
            name="publicoAlvo"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-base font-semibold">
                  Seu Público-Alvo
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder="Ex: Jovens adultos, Profissionais de TI, Empreendedores..."
                    className="h-11"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Tipos de Conteúdo */}
          <FormField
            control={form.control}
            name="tiposConteudo"
            render={() => (
              <FormItem>
                <FormLabel className="text-base font-semibold">
                  Tipos de Conteúdo
                </FormLabel>
                <FormControl>
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                    {contentTypes.map((item) => (
                      <div
                        key={item}
                        className={cn(
                          "border px-4 py-2 rounded-md w-full gap-3 flex items-center cursor-pointer transition-colors",
                          selectedContent.includes(item)
                            ? "bg-primary/10 border-primary"
                            : "hover:bg-accent"
                        )}
                      >
                        <label className="flex items-center gap-3 cursor-pointer w-full">
                          <Checkbox
                            checked={selectedContent.includes(item)}
                            onCheckedChange={() => handleContentToggle(item)}
                          />
                          <span>{item}</span>
                        </label>
                      </div>
                    ))}
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Quantidade e Calendário */}
          <div className="space-y-4">
            <Label className="text-base font-semibold">
              Quantidade de Posts e Calendário
            </Label>

            <div className="grid lg:grid-cols-2 gap-6">
              {/* Input de Quantidade */}
              <FormField
                control={form.control}
                name="quantidadePosts"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm text-muted-foreground">
                      Número de Posts
                    </FormLabel>
                    <FormControl>
                      <Input
                        type="number"
                        placeholder="Ex: 10"
                        className="h-11 w-full"
                        min="5"
                        max="20"
                        {...field}
                        onChange={(e) => field.onChange(Number(e.target.value))}
                      />
                    </FormControl>
                    <FormDescription>
                      💡 Sugerimos entre 5 e 20 posts
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Calendário */}
              <FormField
                control={form.control}
                name="dateRange"
                render={({ field }) => (
                  <FormItem className="flex flex-col">
                    <FormLabel className="text-sm text-muted-foreground">
                      Selecione o intervalo de datas
                    </FormLabel>
                    <Popover>
                      <PopoverTrigger asChild>
                        <FormControl>
                          <Button
                            variant="outline"
                            className={cn(
                              "h-11 w-full justify-start text-left font-normal",
                              !field.value && "text-muted-foreground"
                            )}
                          >
                            <CalendarIcon className="mr-2 h-4 w-4" />
                            {field.value?.from ? (
                              field.value.to ? (
                                <>
                                  {format(field.value.from, "dd/MM/yyyy", {
                                    locale: ptBR,
                                  })}{" "}
                                  -{" "}
                                  {format(field.value.to, "dd/MM/yyyy", {
                                    locale: ptBR,
                                  })}
                                </>
                              ) : (
                                format(field.value.from, "dd/MM/yyyy", {
                                  locale: ptBR,
                                })
                              )
                            ) : (
                              <span>Selecione o período</span>
                            )}
                          </Button>
                        </FormControl>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="start">
                        <Calendar
                          mode="range"
                          defaultMonth={field.value?.from}
                          selected={field.value}
                          onSelect={field.onChange}
                          numberOfMonths={2}
                          locale={ptBR}
                        />
                      </PopoverContent>
                    </Popover>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>

          {/* Footer Info */}
          <div className="p-4 bg-primary/5 border border-primary/20 rounded-lg">
            <p className="text-center text-sm text-muted-foreground flex items-center justify-center gap-2">
              <Sparkles className="h-4 w-4 text-primary" />
              Ideias personalizadas baseadas no seu nicho e público
            </p>
          </div>

          {/* Submit Button */}
          <div className="flex justify-end gap-4">
            <Button
              type="button"
              variant="outline"
              onClick={() => form.reset()}
            >
              Limpar
            </Button>
            <Button type="submit" className="min-w-[150px]">
              <Sparkles className="mr-2 h-4 w-4" />
              Gerar Ideias
            </Button>
          </div>
        </form>
      </Form>
    </main>
  );
}
