import React from "react";

export default function VideoDemo() {
  return (
    <div className="bg-primary/10 rounded-xl w-full h-full flex flex-col justify-center items-center">
      <div className="md:pt-5 pb-5 space-y-3 text-center text-sm md:text-xl font-light text-muted-foreground">
        <p>
          Esta plataforma está agora desativada, porque o seu objectivo temático
          já terminou (Eleições Legislativas de Portugal 2024).
        </p>
        <p>
          Podes visualizar um pequeno video demonstrativo do funcionamento da
          plataforma.
        </p>
        <p>
          Se gostavas de saber mais sobre o projecto, ou tens ideias para
          partilhar, entra em contacto.
        </p>{" "}
      </div>
      <div className="p-3">
        <iframe
          src="https://www.youtube.com/embed/MyW3k2Jr54g"
          frameBorder={0}
          allowFullScreen
          title="Video Demo"
          className="rounded-xl w-full h-full md:h-[500px] md:w-[800px]"
        />
      </div>
    </div>
  );
}
