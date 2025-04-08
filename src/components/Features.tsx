import { Book, ScrollText, Users } from 'lucide-react';

export function Features() {
  return (
    <section className="container mx-auto px-4 py-24">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        <div className="bg-card rounded-xl p-8 border border-purple-500/20 hover:card-glow transition-all">
          <Book className="w-12 h-12 text-purple-500 mb-6" />
          <h3 className="text-2xl font-bold mb-4">Aprenda na Prática</h3>
          <p className="text-gray-400">Terminal interativo para praticar comandos Git em tempo real com feedback instantâneo.</p>
        </div>
        <div className="bg-card rounded-xl p-8 border border-purple-500/20 hover:card-glow transition-all">
          <ScrollText className="w-12 h-12 text-purple-500 mb-6" />
          <h3 className="text-2xl font-bold mb-4">Guia Mágico</h3>
          <p className="text-gray-400">Tutoriais interativos com o Octocat como seu mentor pessoal de Git e GitHub.</p>
        </div>
        <div className="bg-card rounded-xl p-8 border border-purple-500/20 hover:card-glow transition-all">
          <Users className="w-12 h-12 text-purple-500 mb-6" />
          <h3 className="text-2xl font-bold mb-4">Projetos Reais</h3>
          <p className="text-gray-400">Pratique em cenários do mundo real e aprenda as melhores práticas de colaboração.</p>
        </div>
      </div>
    </section>
  );
}