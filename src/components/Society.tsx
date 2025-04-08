import { Users, Code, Shield, Palette } from 'lucide-react';

export function Society() {
  return (
    <section className="container mx-auto px-4 py-24">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-glow">A Sociedade do GitAdventure</h2>
          <p className="text-xl text-gray-400 mb-16">Conheça as classes e hierarquias que mantêm nosso mundo em ordem</p>
        </div>

        <div className="space-y-12">
          {/* Alto Comando */}
          <div className="bg-card rounded-xl p-8 border border-purple-500/20 hover:card-glow transition-all">
            <div className="flex items-center gap-4 mb-8">
              <div className="bg-purple-500/10 rounded-full p-4">
                <Users className="w-8 h-8 text-purple-500" />
              </div>
              <h3 className="text-2xl font-bold text-purple-500">Alto Comando</h3>
            </div>
            <div className="pl-4 border-l-2 border-purple-500/20">
              <h4 className="text-xl font-semibold mb-4 text-purple-400">Os Anciões do Código</h4>
              <p className="text-gray-400 mb-4">
                Guardiões da sabedoria ancestral e arquitetos das decisões fundamentais que moldam nosso universo digital.
              </p>
            </div>
          </div>

          {/* Elite Desenvolvedora */}
          <div className="bg-card rounded-xl p-8 border border-purple-500/20 hover:card-glow transition-all">
            <div className="flex items-center gap-4 mb-8">
              <div className="bg-purple-500/10 rounded-full p-4">
                <Code className="w-8 h-8 text-purple-500" />
              </div>
              <h3 className="text-2xl font-bold text-purple-500">Elite Desenvolvedora</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="pl-4 border-l-2 border-purple-500/20">
                <h4 className="text-xl font-semibold mb-4 text-purple-400">Arquitetos de Sistema</h4>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-purple-500 mt-2"></div>
                    <div>
                      <h5 className="font-semibold mb-1">Mestres do Kernel</h5>
                      <p className="text-gray-400">Dominam os mistérios do núcleo do sistema</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-purple-500 mt-2"></div>
                    <div>
                      <h5 className="font-semibold mb-1">Engenheiros de Realidade</h5>
                      <p className="text-gray-400">Moldam a infraestrutura do nosso mundo digital</p>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="pl-4 border-l-2 border-purple-500/20">
                <h4 className="text-xl font-semibold mb-4 text-purple-400">Desenvolvedores Seniores</h4>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-purple-500 mt-2"></div>
                    <div>
                      <h5 className="font-semibold mb-1">Especialistas Backend</h5>
                      <p className="text-gray-400">Mestres das engrenagens invisíveis</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-purple-500 mt-2"></div>
                    <div>
                      <h5 className="font-semibold mb-1">Mestres Frontend</h5>
                      <p className="text-gray-400">Tecelões da interface com o usuário</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Guardiões */}
          <div className="bg-card rounded-xl p-8 border border-purple-500/20 hover:card-glow transition-all">
            <div className="flex items-center gap-4 mb-8">
              <div className="bg-purple-500/10 rounded-full p-4">
                <Shield className="w-8 h-8 text-purple-500" />
              </div>
              <h3 className="text-2xl font-bold text-purple-500">Guardiões</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="pl-4 border-l-2 border-purple-500/20">
                <h4 className="text-xl font-semibold mb-4 text-purple-400">Debuggers</h4>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-purple-500 mt-2"></div>
                    <div>
                      <h5 className="font-semibold mb-1">Caçadores de Bugs</h5>
                      <p className="text-gray-400">Rastreadores implacáveis de erros</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-purple-500 mt-2"></div>
                    <div>
                      <h5 className="font-semibold mb-1">Analistas de Vulnerabilidade</h5>
                      <p className="text-gray-400">Protetores contra ameaças digitais</p>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="pl-4 border-l-2 border-purple-500/20">
                <h4 className="text-xl font-semibold mb-4 text-purple-400">Patrulheiros</h4>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-purple-500 mt-2"></div>
                    <div>
                      <h5 className="font-semibold mb-1">Guardas de Firewall</h5>
                      <p className="text-gray-400">Sentinelas das fronteiras digitais</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-purple-500 mt-2"></div>
                    <div>
                      <h5 className="font-semibold mb-1">Sentinelas de Rede</h5>
                      <p className="text-gray-400">Vigilantes dos caminhos de dados</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Artesãos */}
          <div className="bg-card rounded-xl p-8 border border-purple-500/20 hover:card-glow transition-all">
            <div className="flex items-center gap-4 mb-8">
              <div className="bg-purple-500/10 rounded-full p-4">
                <Palette className="w-8 h-8 text-purple-500" />
              </div>
              <h3 className="text-2xl font-bold text-purple-500">Artesãos</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="pl-4 border-l-2 border-purple-500/20">
                <h4 className="text-xl font-semibold mb-4 text-purple-400">Code Artists</h4>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-purple-500 mt-2"></div>
                    <div>
                      <h5 className="font-semibold mb-1">Designers de Interface</h5>
                      <p className="text-gray-400">Artistas da experiência visual</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-purple-500 mt-2"></div>
                    <div>
                      <h5 className="font-semibold mb-1">Escultores de Algoritmos</h5>
                      <p className="text-gray-400">Criadores de soluções elegantes</p>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="pl-4 border-l-2 border-purple-500/20">
                <h4 className="text-xl font-semibold mb-4 text-purple-400">Criadores</h4>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-purple-500 mt-2"></div>
                    <div>
                      <h5 className="font-semibold mb-1">Desenvolvedores Creative</h5>
                      <p className="text-gray-400">Inovadores de experiências únicas</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-purple-500 mt-2"></div>
                    <div>
                      <h5 className="font-semibold mb-1">Inovadores</h5>
                      <p className="text-gray-400">Pioneiros de novas fronteiras</p>
                    </div>
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