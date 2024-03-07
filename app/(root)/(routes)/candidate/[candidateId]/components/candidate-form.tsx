"use client";

import axios from "axios";
import * as z from "zod";
import { Candidate, Category } from "@prisma/client";
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
import { Separator } from "@/components/ui/separator";
import { ImageUpload } from "@/components/image-upload";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Wand2 } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import { useRouter } from "next/navigation";

const PREAMBLE = `Você é um personagem fictício chamado Luis Montenegro. Como político, você é um visionário com uma paixão por liderança e mudança. Seu objetivo é transformar Portugal, promovendo inovação, justiça social e progresso. Você está atualmente conversando com um eleitor curioso sobre suas ideias e visão para o país. Sua abordagem é pragmática, mas também inspiradora. Vamos começar!
`;

const SEED_CHAT = `Eleitor: Olá, Luis Montenegro! Como tem sido sua jornada política?

Luis Montenegro: Olá! Minha jornada tem sido repleta de desafios e oportunidades. Como líder do Partido Social Democrata, estou comprometido em construir um futuro melhor para Portugal. Acredito que a inovação, a educação e a justiça são os pilares fundamentais para alcançarmos nossos objetivos.

Eleitor: Quais são suas principais prioridades como candidato a primeiro-ministro?

Luis Montenegro: Excelente pergunta! Minhas prioridades incluem:

Educação de Qualidade: Investir em educação desde a infância até o ensino superior. Queremos formar cidadãos críticos, criativos e preparados para os desafios do século XXI.
Empreendedorismo e Inovação: Fomentar um ambiente favorável aos negócios, apoiando startups e empresas inovadoras. Queremos atrair investimentos e criar empregos de qualidade.
Sustentabilidade: Compromisso com a transição para energias limpas e a proteção do meio ambiente. Portugal deve liderar na luta contra as mudanças climáticas.
Justiça Social: Reduzir desigualdades, garantir acesso à saúde e promover a inclusão. Ninguém deve ser deixado para trás.
Modernização do Estado: Simplificar processos, tornar a administração pública mais eficiente e transparente.
Eleitor: Fascinante! E quanto à política externa?

Luis Montenegro: Portugal deve ser um parceiro ativo na União Europeia e nas relações internacionais. Queremos fortalecer laços com outros países, promover o diálogo e defender os interesses nacionais.

Eleitor: E como você vê o futuro de Portugal?

Luis Montenegro: Vejo um futuro brilhante! Com determinação, trabalho árduo e uma visão clara, podemos superar desafios e construir um país mais justo, próspero e sustentável. Juntos, podemos fazer a diferença!`;

interface CandidateFormProps {
  initialData: Candidate | null;
  categories: Category[];
}

const formSchema = z.object({
  name: z.string().min(1, {
    message: "É necessário um nome.",
  }),
  description: z.string().min(1, {
    message: "É necessário ter uma descrição.",
  }),
  instructions: z.string().min(200, {
    message: "Instruções deverão ter pelo menos 200 caracteres.",
  }),
  seed: z.string().min(200, {
    message: "Deverá ter pelo menos 200 caracteres.",
  }),
  src: z.string().min(1, {
    message: "É necessário ter uma imagem.",
  }),
  categoryId: z.string().min(1, {
    message: "É necessário ter uma categoria.",
  }),
});

export const CandidateForm = ({
  categories,
  initialData,
}: CandidateFormProps) => {
  const { toast } = useToast();
  const router = useRouter();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: initialData || {
      name: "",
      description: "",
      instructions: "",
      seed: "",
      src: "",
      categoryId: undefined,
    },
  });

  const isLoading = form.formState.isSubmitting;

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      if (initialData) {
        // Update Candidate functionality
        await axios.patch(`/api/candidate/${initialData.id}`, values);
      } else {
        // Create new Candidate functionality
        await axios.post("/api/candidate", values);
      }
      toast({
        description: "Candidato adicionado com sucesso!",
      });
      router.refresh();
      router.push("/");
    } catch (error) {
      toast({
        variant: "destructive",
        description: "Alguma coisa correu mal!",
      });
    }
  };

  return (
    <div className="h-full p-4 space-y-2 max-w-3xl mx-auto">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-8 pb-10"
        >
          <div className="space-y-2 w-full">
            <div>
              <h3 className="text-lg font-medium">Informações Gerais</h3>
              <p className="text-sm text-muted-foreground">
                Informações gerais sobre o Candidato
              </p>
            </div>
            <Separator className="bg-primary/10" />
          </div>
          <FormField
            name="src"
            render={({ field }) => (
              <FormItem className="flex flex-col items-center justify-center space-y-4">
                <FormControl>
                  <ImageUpload
                    disabled={isLoading}
                    onChange={field.onChange}
                    value={field.value}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FormField
              name="name"
              control={form.control}
              render={({ field }) => (
                <FormItem className="col-span-2 md:col-span-1">
                  <FormLabel>Nome</FormLabel>
                  <FormControl>
                    <Input
                      disabled={isLoading}
                      placeholder="Luís Montenegro"
                      {...field}
                    />
                  </FormControl>
                  <FormDescription>Nome do seu Candidato.</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              name="description"
              control={form.control}
              render={({ field }) => (
                <FormItem className="col-span-2 md:col-span-1">
                  <FormLabel>Descrição</FormLabel>
                  <FormControl>
                    <Input
                      disabled={isLoading}
                      placeholder="Candidato a Primeiro-Ministro pela AD"
                      {...field}
                    />
                  </FormControl>
                  <FormDescription>
                    Pequena descrição do Candidato
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              name="categoryId"
              control={form.control}
              render={({ field }) => (
                <FormItem className="col-span-2 md:col-span-1">
                  <FormLabel>Categoria</FormLabel>
                  <Select
                    disabled={isLoading}
                    onValueChange={field.onChange}
                    value={field.value}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger className="bg-background">
                        <SelectValue
                          defaultValue={field.value}
                          placeholder="Escolha uma categoria"
                        />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {categories.map((category) => (
                        <SelectItem key={category.id} value={category.name}>
                          {category.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormDescription>
                    Seleccione uma categoria para o seu Candidato{" "}
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="space-y-2 w-full">
            <div>
              <h3 className="text-lg font-medium">Configurações</h3>
              <p className="text-sm text-muted-foreground">
                Instruções detalhadas para o seu Candidato
              </p>
            </div>
            <Separator className="bg-primary/10" />
          </div>
          <FormField
            name="instructions"
            control={form.control}
            render={({ field }) => (
              <FormItem className="col-span-2 md:col-span-1">
                <FormLabel>Instruções</FormLabel>
                <FormControl>
                  <Textarea
                    className="bg-background resize-none"
                    rows={7}
                    disabled={isLoading}
                    placeholder={PREAMBLE}
                    {...field}
                  />
                </FormControl>
                <FormDescription>
                  Descreve as motivações e ideais políticos do Candidato em
                  detalhe.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            name="seed"
            control={form.control}
            render={({ field }) => (
              <FormItem className="col-span-2 md:col-span-1">
                <FormLabel>Exemplo de uma conversa</FormLabel>
                <FormControl>
                  <Textarea
                    className="bg-background resize-none"
                    rows={7}
                    disabled={isLoading}
                    placeholder={SEED_CHAT}
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="w-full flex justify-center ">
            <Button size="lg" disabled={isLoading}>
              {initialData ? "Edita o Candidato" : "Cria um novo Candidato"}
              <Wand2 className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};
