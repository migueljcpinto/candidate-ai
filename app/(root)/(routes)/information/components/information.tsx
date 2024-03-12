"use client";

import { Button } from "@/components/ui/button";
import { DoorOpen } from "lucide-react";
import { useRouter } from "next/navigation";

export const Information = () => {
  const router = useRouter();

  return (
    <div className="container pt-5 pb-5 space-y-3">
      <h1 className="text-2xl font-bold text-center ">Informações</h1>
      <div className="space-y-7 p-5 ">
        <p className="bg-primary/10 rounded-xl border-2 p-5 text-sm md:text-base">
          Bem-vindo ao AI Candidato, um projeto que procura utilizar a
          inteligência artificial para criar Chatbots, simulando conversas de
          candidatos políticos para as eleições legislativas de Portugal. Este
          projeto tem como objetivo primordial explorar e aprender sobre o
          desenvolvimento de Chatbots e aplicações utilizando inteligência
          artificial, oferecendo uma experiência única.
        </p>
      </div>
      <div className="p-6 space-y-4 text-sm md:text-base">
        <p>
          É importante salientar que todos os Chatbots foram treinados com
          informações limitadas e não atualizadas. Este projeto não visa
          fornecer dados precisos ou atualizados sobre os candidatos ou as
          eleições em questão. Assim, recomendamos que confiras sempre a
          veracidade das informações dadas pelos Chatbots e consultes os
          Programas Políticos de cada Partido para informações mais precisas.
        </p>
        <p>
          Por favor, tem em mente que as informações e opiniões expressas pelos
          Candidatos nos Chatbots podem não ser reais. Eles são representações
          fictícias dos candidatos e dos seus partidos, podendo não refletir as
          suas posições reais sobre os temas abordados.
        </p>
        <p>
          Este projeto não tem qualquer intenção de influênciar a opinião do
          eleitorado. Trata-se de um exercício educativo e, por isso, não deve
          ser interpretado como um ataque a qualquer candidato ou partido
          político.
        </p>
      </div>
      <div className="text-sm p-5 space-y-3 md:text-base">
        <div className=" bg-primary/10 rounded-xl border-2 space-y-5 p-5">
          <p className="text-sm font-semibold md:text-base">Lembra-te:</p>
          <ul className="list-disc pl-4 space-y-1">
            <li>O conteúdo pode não estar atualizado.</li>
            <li>As informações dos Chatbots NÃO são reais.</li>
            <li>Não leves nada a sério! Informa-te!</li>
          </ul>

          <p className="text-sm font-semibold md:text-base">
            Sobre o projecto:
          </p>
          <p>
            Foram usadas várias tecnologias, incluindo Next.js, React.js,
            Typescript, Tailwind CSS, Prisma, ferramentas de criação de imagens
            e conversação (Open AI) e Clerk para autenticação eficiente.
          </p>
        </div>
        <div>
          <p className="p-4 text-end text-sm md:text-base">
            Divirte-te com o AI Candidato!
          </p>
        </div>
        <Button
          size="icon"
          variant="link"
          onClick={() => router.push("https://mikebitedev.vercel.app/")}
        >
          <DoorOpen />
        </Button>
      </div>
      <small className="mb-2 block text-xs text-center">
        &copy; 2024 Miguel Pinto. All rights reserved.
      </small>{" "}
    </div>
  );
};
