import { Compass, Book, Users, Clock, Github as Git, Wand2, Home, Network, Cog, Lock } from 'lucide-react';

const worlds = [
  { 
    name: 'Mundo Físico',
    icon: <Compass className="w-8 h-8" />,
    description: 'Aprenda os fundamentos de repositórios, arquivos e staging area',
    unlocked: true
  },
  { 
    name: 'Sistemas Naturais',
    icon: <Git className="w-8 h-8" />,
    description: 'Domine o fluxo de trabalho básico: add, commit e push',
    unlocked: true
  },
  { 
    name: 'Cultura e Sociedade',
    icon: <Users className="w-8 h-8" />,
    description: 'Explore a colaboração através de pull requests e code reviews',
    unlocked: true
  },
  { 
    name: 'História e Passado',
    icon: <Clock className="w-8 h-8" />,
    description: 'Navegue pelo histórico e aprenda a gerenciar versões',
    unlocked: true
  },
  { 
    name: 'Sistemas de Poder',
    icon: <Network className="w-8 h-8" />,
    description: 'Controle branches e resolva conflitos de merge',
    unlocked: true
  },
  { 
    name: 'Tecnologia e Magia',
    icon: <Wand2 className="w-8 h-8" />,
    description: 'Desbloqueie recursos avançados como rebase e cherry-pick',
    unlocked: true
  },
  { 
    name: 'Vida Cotidiana',
    icon: <Home className="w-8 h-8" />,
    description: 'Pratique workflows reais do dia a dia de desenvolvimento',
    unlocked: true
  },
  { 
    name: 'Interações e Relações',
    icon: <Users className="w-8 h-8" />,
    description: 'Aprenda a colaborar em projetos open source',
    unlocked: true
  },
  { 
    name: 'Sistemas de Suporte',
    icon: <Cog className="w-8 h-8" />,
    description: 'Explore GitHub Actions, Pages e outras integrações',
    unlocked: true
  },
];

export function Worlds() {
  return (
    <section className="container mx-auto px-4 py-24">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-glow">Mundos Místicos</h2>
          <p className="text-xl text-gray-400 mb-16">Explore nove reinos únicos de conhecimento Git</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-16 max-w-5xl mx-auto">
            {worlds.map((world, index) => (
              <div key={index} className={`badge-container mx-auto ${!world.unlocked ? 'badge-locked' : ''}`}>
                <div className="badge-hexagon"></div>
                <div className="badge-content">
                  {world.unlocked ? (
                    world.icon
                  ) : (
                    <Lock className="w-8 h-8 text-gray-500" />
                  )}
                </div>
                <span className="badge-name">{world.name}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-24">
          {worlds.map((world, index) => (
            <div key={index} className="bg-card rounded-xl p-8 border border-purple-500/20 hover:card-glow transition-all cursor-pointer group">
              <div className="flex items-center mb-6">
                <div className="bg-purple-500/10 rounded-lg p-4 group-hover:bg-purple-500/20 transition-all">
                  {world.icon}
                </div>
                <h3 className="text-xl font-bold ml-4">{world.name}</h3>
              </div>
              <p className="text-gray-400">{world.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}