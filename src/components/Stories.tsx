import { Swords, Infinity } from 'lucide-react';

export function Stories() {
  return (
    <section className="container mx-auto px-4 py-24">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-glow">Histórias do GitAdventure</h2>
          <p className="text-xl text-gray-400 mb-16">Conheça as batalhas épicas que moldaram nosso mundo</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* A Grande Guerra dos Frameworks */}
          <div className="bg-card rounded-xl p-8 border border-purple-500/20 hover:card-glow transition-all">
            <div className="flex flex-col items-center mb-8">
              <div className="bg-purple-500/10 rounded-full p-6 mb-4">
                <Swords className="w-12 h-12 text-purple-500" />
              </div>
              <h3 className="text-2xl font-bold text-purple-500">A Grande Guerra dos Frameworks</h3>
            </div>
            <div className="space-y-6">
              <div className="bg-purple-500/5 rounded-lg p-6">
                <h4 className="font-semibold text-lg mb-4 text-purple-400">O Conflito</h4>
                <p className="text-gray-400 mb-4">
                  Uma batalha épica entre frameworks rivais que dividiu o reino dos desenvolvedores em facções.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-purple-500"></div>
                    <span className="text-gray-300">Angular Warriors vs React Rangers</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-purple-500"></div>
                    <span className="text-gray-300">Vue Vigilantes vs Svelte Sorcerers</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-purple-500"></div>
                    <span className="text-gray-300">A Paz dos Componentes Web</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* O Incidente do Cache Infinito */}
          <div className="bg-card rounded-xl p-8 border border-purple-500/20 hover:card-glow transition-all">
            <div className="flex flex-col items-center mb-8">
              <div className="bg-purple-500/10 rounded-full p-6 mb-4">
                <Infinity className="w-12 h-12 text-purple-500" />
              </div>
              <h3 className="text-2xl font-bold text-purple-500">O Incidente do Cache Infinito</h3>
            </div>
            <div className="space-y-6">
              <div className="bg-purple-500/5 rounded-lg p-6">
                <h4 className="font-semibold text-lg mb-4 text-purple-400">A Catástrofe</h4>
                <p className="text-gray-400 mb-4">
                  Um loop temporal causado por um cache mal configurado que ameaçou engolir todo o repositório.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-purple-500"></div>
                    <span className="text-gray-300">O Loop Temporal</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-purple-500"></div>
                    <span className="text-gray-300">A Corrida Contra o Tempo</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-purple-500"></div>
                    <span className="text-gray-300">O Grande Reset</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}