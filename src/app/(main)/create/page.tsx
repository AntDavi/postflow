import { Checkbox } from "@/components/ui/checkbox";
import { Form } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { z } from "zod";
import CheckboxItem from "../_components/CheckbosItem";
import { Calendar } from "@/components/ui/calendar";

export default function CreatePage() {
  return (
    <main className="container mx-auto px-4 py-4">
      <section className="flex items-center flex-col py-4">
        <h2>Assistente de Conteúdo</h2>
        <p>Crie ideias incríveis para suas redes sociais em segundos</p>
      </section>

      <section className="gap-2 flex flex-col">
        <div>
          <Label>Seu Nicho de Atuação</Label>
          <Input placeholder="Ex: Marketing Digital, Saúde, Finanças..." />
        </div>
        <div>
          <Label>Seu Público-Alvo</Label>
          <Input placeholder="Ex: Jovens adultos, Profissionais de TI, Empreendedores..." />
        </div>
        <div>
          <Label>Tipos de Conteúdo</Label>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
            <CheckboxItem label="Postagem" />
            <CheckboxItem label="Carrossel" />
            <CheckboxItem label="Artigos de Blog" />
            <CheckboxItem label="Reels" />
            <CheckboxItem label="Stories" />
            <CheckboxItem label="Newsletters" />
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <Label>Quantidade de Posts e Calendário</Label>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Input type="number" />
              <span>Sugerimos entre 5 e 20 posts</span>
            </div>
            {/* Calendário */}
            <div>
              <Calendar />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
