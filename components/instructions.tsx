"use client";

import Image from "next/image";
import { routes } from "./sidebar";
import { usePathname, useRouter } from "next/navigation";

export const Instructions = () => {
  const pathname = usePathname();
  const router = useRouter();

  const onNavigate = (url: string, pro: boolean) => {
    return router.push(url);
  };

  return (
    <div className="bg-primary/10 rounded-xl w-full h-screen">
      <div className="max-w-5xl mx-auto px-4 sm:px-4 lg:px-8 h-screen">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-4 md:gap-10 py-4 md:py-6 h-screen">
          <div className="space-y-2 md:space-y-14 text-center">
            <h1 className="text-2xl md:text-left  font-bold text-gray-900 md:text-3xl">
              Conversa com os Candidatos
            </h1>
            <p className="text-sm md:text-2xl md:text-left font-light text-gray-600 md:leading-10">
              Fica a conhecer as propostas e opiniões dos candidatos às eleições
              de 2024
            </p>

            <div className="flex flex-col justify-center items-center gap-5  pt-10">
              {routes.slice(-2).map((route) => (
                <div
                  onClick={() => onNavigate(route.href, route.pro)}
                  key={route.href}
                  className="flex text-slate-900 p-3 w-full justify-center text-lg font-medium cursor-pointer hover:text-primary hover:bg-primary/10 border border-slate-700 rounded-lg transition"
                >
                  <div className="flex flex-col gap-y-2 items-center flex-1">
                    {route.label}
                  </div>
                </div>
              ))}
            </div>
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
