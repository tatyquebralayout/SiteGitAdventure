import { Bug } from 'lucide-react';

export function Legends() {
  return (
    <section className="container mx-auto px-4 py-24">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-glow">Lendas do Código</h2>
          <p className="text-xl text-gray-400 mb-16">Histórias místicas passadas através das gerações</p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-card rounded-xl p-8 border border-purple-500/20 hover:card-glow transition-all">
            <div className="flex flex-col items-center mb-8">
              <div className="bg-purple-500/10 rounded-full p-6 mb-4">
                <Bug className="w-12 h-12 text-purple-500" />
              </div>
              <h3 className="text-2xl font-bold text-purple-500">O Mito do Primeiro Bug</h3>
            </div>
            <div className="space-y-8">
              <div className="bg-purple-500/5 rounded-lg p-6">
                <p className="text-gray-400 italic text-center text-lg mb-6">
                  "No princípio, havia apenas código puro..."
                </p>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-2 h-2 rounded-full bg-purple-500 mt-2"></div>
                    <div>
                      <h4 className="font-semibold text-lg mb-2">A Mariposa Original</h4>
                      <p className="text-gray-400">
                        Dizem que o primeiro bug foi literalmente um inseto, uma mariposa presa entre os relés de um computador ancestral.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-2 h-2 rounded-full bg-purple-500 mt-2"></div>
                    <div>
                      <h4 className="font-semibold text-lg mb-2">O Debug Primordial</h4>
                      <p className="text-gray-400">
                        A primeira caçada ao bug estabeleceu o ritual sagrado de debugging que praticamos até hoje.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-2 h-2 rounded-full bg-purple-500 mt-2"></div>
                    <div>
                      <h4 className="font-semibold text-lg mb-2">O Legado</h4>
                      <p className="text-gray-400">
                        Desde então, todo desenvolvedor carrega consigo a responsabilidade de manter o código livre de bugs.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-center">
                <p className="text-purple-400 italic">
                  "E assim nasceu a eterna vigilância contra os bugs, uma tradição que perdura até hoje..."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}