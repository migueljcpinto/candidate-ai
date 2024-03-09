export const Information = () => {
  return (
    <div className="container px-5 py-20 space-y-4">
      {/*     className="  cursor-pointer hover:opacity-75 transition"
       */}
      <h1 className="text-2xl font-bold text-center">Informações</h1>
      <div className=" prose text-gray-700 space-y-4 p-5 text-justify">
        <p>
          O AI Candidato é um projecto de ficção que utiliza inteligência
          artificial para criar Chatbots que simulam conversas dos candidatos
          políticos nas eleições legislativas de Portugal. O objetivo do
          projecto é simplesmente explorar e aprender sobre o desenvolvimento de
          Chats e aplicativos utilizando inteligência artificial.
        </p>
        <div className="bg-primary/10 rounded-xl border-2 p-5 space-y-3">
          <p className="font-medium">É importante salientar que:</p>
          <ul className="list-disc pl-4 space-y-1 ">
            <li>
              As informações e opiniões expressas pelos Chatbots podem não ser
              reais. Eles são caricaturas dos candidatos e dos seus partidos, e
              podem não refletir as suas posições reais sobre os temas
              abordados.
            </li>
            <li>
              Este projeto não tem qualquer intenção de influênciar a opinião do
              eleitorado. É apenas um exercício criativo e não deve ser
              interpretado como um ataque a qualquer candidato ou partido
              político.
            </li>
            <li>
              Como criador deste projecto, não me responsabilizo por qualquer
              uso indevido das informações aqui contidas.
            </li>
          </ul>
          <p className="p-4 ">Esperamos que se divirta com o AI Candidato!</p>
          <p className="font-bold">Lembre-se:</p>
          <ul className="list-disc pl-4 space-y-1">
            <li>O conteúdo é satírico e humorístico.</li>
            <li>As informações dos Chatbots NÃO são reais.</li>
            <li>Não leve nada a sério! Divirta-se!</li>
          </ul>
        </div>
      </div>
    </div>
  );
};
