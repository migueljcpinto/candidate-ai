import Image from "next/image";
import { Button } from "./ui/button";
import { Sparkles } from "lucide-react";

export const Instructions = () => {
  return (
    <div className="bg-primary/10 rounded-xl border-2 p-6 space-y-3 space-x-5 w-full h-screen">
      <div className="max-w-5xl mx-auto px-4 sm:px-4 lg:px-8 h-full">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-4 py-8 md:py-12 h-full">
          <div className="space-y-2">
            <h1 className="text-2xl md:text-left text-center font-bold text-gray-900 md:text-3xl">
              Conversa com os Candidatos
            </h1>
            <p className="text-sm md:text-2xl md:text-left text-center font-light text-gray-600 md:leading-10">
              Fica a conhecer as propostas e opiniões dos candidatos às eleições
              de 2024
            </p>
            <p></p>
          </div>

          <div className="flex justify-center md:justify-end">
            <Image
              alt="Candidato"
              src="/o-candidato.jpeg"
              width={540}
              height={540}
              className="border rounded-xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
