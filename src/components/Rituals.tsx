import { Bot as Lotus, Gift } from 'lucide-react';

export function Rituals() {
  return (
    <section className="container mx-auto px-4 py-24">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-glow">Rituais Espirituais e Práticas Místicas</h2>
          <p className="text-xl text-gray-400 mb-16">Descubra as práticas sagradas do desenvolvimento de software</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Meditação de Código */}
          <div className="bg-card rounded-xl p-8 border border-purple-500/20 hover:card-glow transition-all">
            <div className="flex flex-col items-center mb-8">
              <div className="bg-purple-500/10 rounded-full p-6 mb-4">
                <Lotus className="w-12 h-12 text-purple-500" />
              </div>
              <h3 className="text-2xl font-bold text-purple-500">Meditação de Código</h3>
            </div>
            <div className="bg-purple-500/5 rounded-lg p-6 font-mono text-sm mb-6">
              <div className="mb-4">
                <span className="text-purple-400">// Postura</span>
                <p className="text-gray-300">const postura = "Debugging Lotus";</p>
              </div>
              <div className="mb-4">
                <span className="text-purple-400">// Mantra</span>
                <p className="text-gray-300">try &#123; peace() &#125; catch &#123; breathe() &#125;</p>
              </div>
              <div>
                <span className="text-purple-400">// Duração</span>
                <p className="text-gray-300">for (let i = 0; i &lt; 108; i++) &#123; clockCycle() &#125;</p>
              </div>
            </div>
            <p className="text-gray-400 text-center italic">
              "Na quietude do código, encontramos clareza"
            </p>
          </div>

          {/* Oferendas Digitais */}
          <div className="bg-card rounded-xl p-8 border border-purple-500/20 hover:card-glow transition-all">
            <div className="flex flex-col items-center mb-8">
              <div className="bg-purple-500/10 rounded-full p-6 mb-4">
                <Gift className="w-12 h-12 text-purple-500" />
              </div>
              <h3 className="text-2xl font-bold text-purple-500">Oferendas Digitais</h3>
            </div>
            <div className="space-y-6">
              <div className="flex items-center gap-4 bg-purple-500/5 rounded-lg p-4">
                <div className="w-12 h-12 flex items-center justify-center bg-purple-500/10 rounded-full">
                  <code className="text-purple-500 text-xl">✓</code>
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-1">Commits Limpos</h4>
                  <p className="text-gray-400">Mensagens claras e mudanças atômicas</p>
                </div>
              </div>
              <div className="flex items-center gap-4 bg-purple-500/5 rounded-lg p-4">
                <div className="w-12 h-12 flex items-center justify-center bg-purple-500/10 rounded-full">
                  <code className="text-purple-500 text-xl">📖</code>
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-1">Documentação Clara</h4>
                  <p className="text-gray-400">Guias sagrados para futuros desenvolvedores</p>
                </div>
              </div>
              <div className="flex items-center gap-4 bg-purple-500/5 rounded-lg p-4">
                <div className="w-12 h-12 flex items-center justify-center bg-purple-500/10 rounded-full">
                  <code className="text-purple-500 text-xl">✨</code>
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-1">Testes Passando</h4>
                  <p className="text-gray-400">A purificação final do código</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}