import { Star, ChevronRight } from 'lucide-react';

export function CallToAction() {
  return (
    <section className="container mx-auto px-4 py-24">
      <div className="bg-card rounded-2xl p-12 max-w-4xl mx-auto border border-purple-500/20 hover:card-glow transition-all">
        <div className="text-center">
          <Star className="w-16 h-16 text-purple-500 mx-auto mb-8" />
          <h2 className="text-4xl font-bold mb-6 text-glow">
            Comece Sua Jornada Mágica
          </h2>
          <p className="text-xl text-gray-400 mb-12">
            Junte-se aos milhares de desenvolvedores que já dominaram a arte do Git através do Git Adventure.
          </p>
          <div className="flex flex-col md:flex-row gap-6 justify-center">
            <button className="bg-purple-600 hover:bg-purple-700 text-white font-medium py-4 px-8 rounded-lg text-lg inline-flex items-center transition-all hover:scale-105 hover:card-glow">
              Criar Conta Gratuita
              <ChevronRight className="ml-2" />
            </button>
            <button className="bg-card hover:bg-purple-500/10 text-white font-medium py-4 px-8 rounded-lg text-lg inline-flex items-center transition-all border border-purple-500/20">
              Ver Demo
              <ChevronRight className="ml-2" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}