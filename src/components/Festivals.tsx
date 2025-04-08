import { Sun, Cloud, Leaf, Snowflake } from 'lucide-react';

export function Festivals() {
  return (
    <section className="container mx-auto px-4 py-24">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-glow">Celebrações e Festivais</h2>
          <p className="text-xl text-gray-400 mb-16">Participe dos eventos sazonais do mundo mágico do Git</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Primavera */}
          <div className="bg-card rounded-xl p-8 border border-purple-500/20 hover:card-glow transition-all">
            <div className="flex flex-col items-center mb-6">
              <div className="bg-purple-500/10 rounded-full p-6 mb-4">
                <Sun className="w-12 h-12 text-purple-500" />
              </div>
              <h3 className="text-2xl font-bold text-purple-500">Primavera</h3>
            </div>
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-purple-500"></div>
                <span className="text-gray-300">Festival do Novo Código</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-purple-500"></div>
                <span className="text-gray-300">Limpeza de Repositórios</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-purple-500"></div>
                <span className="text-gray-300">Plantio de Projetos</span>
              </li>
            </ul>
          </div>

          {/* Verão */}
          <div className="bg-card rounded-xl p-8 border border-purple-500/20 hover:card-glow transition-all">
            <div className="flex flex-col items-center mb-6">
              <div className="bg-purple-500/10 rounded-full p-6 mb-4">
                <Cloud className="w-12 h-12 text-purple-500" />
              </div>
              <h3 className="text-2xl font-bold text-purple-500">Verão</h3>
            </div>
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-purple-500"></div>
                <span className="text-gray-300">Hackathon Solar</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-purple-500"></div>
                <span className="text-gray-300">Competições de Debug</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-purple-500"></div>
                <span className="text-gray-300">Celebrações de Deploy</span>
              </li>
            </ul>
          </div>

          {/* Outono */}
          <div className="bg-card rounded-xl p-8 border border-purple-500/20 hover:card-glow transition-all">
            <div className="flex flex-col items-center mb-6">
              <div className="bg-purple-500/10 rounded-full p-6 mb-4">
                <Leaf className="w-12 h-12 text-purple-500" />
              </div>
              <h3 className="text-2xl font-bold text-purple-500">Outono</h3>
            </div>
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-purple-500"></div>
                <span className="text-gray-300">Colheita de Commits</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-purple-500"></div>
                <span className="text-gray-300">Festival da Documentação</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-purple-500"></div>
                <span className="text-gray-300">Rituais de Backup</span>
              </li>
            </ul>
          </div>

          {/* Inverno */}
          <div className="bg-card rounded-xl p-8 border border-purple-500/20 hover:card-glow transition-all">
            <div className="flex flex-col items-center mb-6">
              <div className="bg-purple-500/10 rounded-full p-6 mb-4">
                <Snowflake className="w-12 h-12 text-purple-500" />
              </div>
              <h3 className="text-2xl font-bold text-purple-500">Inverno</h3>
            </div>
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-purple-500"></div>
                <span className="text-gray-300">Hibernação de Código</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-purple-500"></div>
                <span className="text-gray-300">Manutenção Profunda</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-purple-500"></div>
                <span className="text-gray-300">Contemplação Sistema</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}