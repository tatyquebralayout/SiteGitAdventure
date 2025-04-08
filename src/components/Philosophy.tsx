import { Brain, Lightbulb } from 'lucide-react';

export function Philosophy() {
  return (
    <section className="container mx-auto px-4 py-24">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-glow">Sistemas de Crença e Filosofias de Código</h2>
          <p className="text-xl text-gray-400 mb-16">Explore as diferentes escolas de pensamento que guiam o desenvolvimento</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Purismo Funcional */}
          <div className="bg-card rounded-xl p-8 border border-purple-500/20 hover:card-glow transition-all">
            <div className="flex flex-col items-center mb-8">
              <div className="bg-purple-500/10 rounded-full p-6 mb-4">
                <Brain className="w-12 h-12 text-purple-500" />
              </div>
              <h3 className="text-2xl font-bold text-purple-500">Purismo Funcional</h3>
            </div>
            <ul className="space-y-6">
              <li className="flex items-start gap-4">
                <div className="w-2 h-2 rounded-full bg-purple-500 mt-2"></div>
                <div>
                  <h4 className="font-semibold text-lg mb-2">Imutabilidade como virtude</h4>
                  <p className="text-gray-400">Abraçando a constância e previsibilidade no código</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="w-2 h-2 rounded-full bg-purple-500 mt-2"></div>
                <div>
                  <h4 className="font-semibold text-lg mb-2">Pureza de função</h4>
                  <p className="text-gray-400">Mantendo a integridade e clareza em cada operação</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="w-2 h-2 rounded-full bg-purple-500 mt-2"></div>
                <div>
                  <h4 className="font-semibold text-lg mb-2">Composição divina</h4>
                  <p className="text-gray-400">Combinando elementos simples em harmonias complexas</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Pragmatismo Imperativo */}
          <div className="bg-card rounded-xl p-8 border border-purple-500/20 hover:card-glow transition-all">
            <div className="flex flex-col items-center mb-8">
              <div className="bg-purple-500/10 rounded-full p-6 mb-4">
                <Lightbulb className="w-12 h-12 text-purple-500" />
              </div>
              <h3 className="text-2xl font-bold text-purple-500">Pragmatismo Imperativo</h3>
            </div>
            <ul className="space-y-6">
              <li className="flex items-start gap-4">
                <div className="w-2 h-2 rounded-full bg-purple-500 mt-2"></div>
                <div>
                  <h4 className="font-semibold text-lg mb-2">Eficiência prática</h4>
                  <p className="text-gray-400">Priorizando soluções que funcionam no mundo real</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="w-2 h-2 rounded-full bg-purple-500 mt-2"></div>
                <div>
                  <h4 className="font-semibold text-lg mb-2">Resultados tangíveis</h4>
                  <p className="text-gray-400">Focando em entregas concretas e mensuráveis</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="w-2 h-2 rounded-full bg-purple-500 mt-2"></div>
                <div>
                  <h4 className="font-semibold text-lg mb-2">Flexibilidade adaptativa</h4>
                  <p className="text-gray-400">Adaptando-se às mudanças com pragmatismo e agilidade</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}