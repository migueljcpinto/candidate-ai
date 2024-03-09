export const Information = () => {
  return (
    <div className="container pt-5 pb-5 space-y-4">
      <h1 className="text-2xl font-bold text-center">Informações</h1>
      <div className="space-y-10 p-5 ">
        <p className="bg-primary/10 rounded-xl border-2 p-5">
          Bem-vindo ao AI Candidato, um projeto fascinante que mergulha no mundo
          da inteligência artificial para criar Chatbots simulando conversas de
          candidatos políticos nas eleições legislativas de Portugal. Este
          projeto tem como objetivo primordial explorar e aprender sobre o
          desenvolvimento de Chatbots e aplicações utilizando inteligência
          artificial, oferecendo uma experiência única e envolvente.
        </p>
      </div>

      <div className="p-6 space-y-4">
        <p>
          É importante salientar que todos os Chatbots foram treinados com
          informações limitadas e não atualizadas. Este projeto não visa
          fornecer dados precisos ou atualizados sobre os candidatos ou as
          eleições em questão. Assim, recomendamos que confira sempre a
          veracidade das informações dadas pelos Chatbots e consulte os
          Programas Políticos de cada Partido para informações precisas.
        </p>
        <p>
          Por favor, tenha em mente que as informações e opiniões expressas
          pelos Candidatos nos Chatbots podem não ser reais. Eles são
          representações caricatas dos candidatos e seus partidos, podendo não
          refletir suas posições reais sobre os temas abordados.
        </p>
        <p>
          Este projeto não tem qualquer intenção de influenciar a opinião do
          eleitorado. Trata-se de um exercício criativo e não deve ser
          interpretado como um ataque a qualquer candidato ou partido político.
          Como criador deste projeto, não me responsabilizo por qualquer uso
          indevido das informações aqui contidas.
        </p>
      </div>

      <div className=" p-5 space-y-3">
        <div className=" bg-primary/10 rounded-xl border-2 space-y-5 p-5">
          <p className="font-bold">Lembre-se:</p>
          <ul className="list-disc pl-4 space-y-1">
            <li>O conteúdo pode não estar atualizado.</li>
            <li>As informações dos Chatbots NÃO são reais.</li>
            <li>Não leve nada a sério! Divirta-se!</li>
          </ul>

          <p>
            <span className="font-semibold ">Sobre o projecto:</span> foram
            usadas várias tecnologias, incluindo Next.js, React, Typescript,
            Tailwind, Prisma, ferramentas de criação de imagens e conversação
            (Open AI) e Clerk para autenticação eficiente.
          </p>
        </div>

        <div>
          <p className="p-4 text-end">
            Espero que se divirta com o AI Candidato!
          </p>
        </div>
      </div>
    </div>
  );
};
