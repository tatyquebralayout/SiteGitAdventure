import { Github, Star, Heart, Twitter, Instagram, Linkedin } from 'lucide-react';

export function Creator() {
  return (
    <section className="container mx-auto px-4 py-24">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-glow">Criadora e Apoiadores</h2>
          <p className="text-xl text-gray-400 mb-16">Conheça quem está por trás do GitAdventure</p>
        </div>

        {/* Criadora */}
        <div className="bg-card rounded-xl p-8 border border-purple-500/20 hover:card-glow transition-all mb-16">
          <div className="flex flex-col items-center">
            <div className="w-32 h-32 rounded-full overflow-hidden mb-6 ring-4 ring-purple-500/20">
              <img
                src="https://github.com/tatyquebralayout.png"
                alt="Tatiana Quebra Layout"
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-2xl font-bold text-purple-500 mb-2">Tatiana Quebra Layout</h3>
            <p className="text-gray-400 mb-6">Technology Evangelist at Expresso-TS | Colunista Tech @midianinja | TEA/ADHD</p>
            
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <a
                href="https://github.com/tatyquebralayout"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-purple-500/10 hover:bg-purple-500/20 px-4 py-2 rounded-lg transition-all"
              >
                <Github className="w-5 h-5" />
                <span>GitHub</span>
              </a>
              <a
                href="https://twitter.com/umataldetatiana"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-purple-500/10 hover:bg-purple-500/20 px-4 py-2 rounded-lg transition-all"
              >
                <Twitter className="w-5 h-5" />
                <span>Twitter</span>
              </a>
              <a
                href="https://www.instagram.com/umataldetatiana"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-purple-500/10 hover:bg-purple-500/20 px-4 py-2 rounded-lg transition-all"
              >
                <Instagram className="w-5 h-5" />
                <span>Instagram</span>
              </a>
              <a
                href="https://www.linkedin.com/in/umataldetatiana"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-purple-500/10 hover:bg-purple-500/20 px-4 py-2 rounded-lg transition-all"
              >
                <Linkedin className="w-5 h-5" />
                <span>LinkedIn</span>
              </a>
            </div>

            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="https://github.com/tatyquebralayout/GitAdventure"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-purple-600 hover:bg-purple-700 px-6 py-3 rounded-lg transition-all"
              >
                <Star className="w-5 h-5" />
                <span>Dar uma estrela no GitHub</span>
              </a>
              <a
                href="https://github.com/sponsors/tatyquebralayout"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-purple-500/10 hover:bg-purple-500/20 px-6 py-3 rounded-lg transition-all border border-purple-500/20"
              >
                <Heart className="w-5 h-5" />
                <span>Apoiar no GitHub Sponsors</span>
              </a>
            </div>
          </div>
        </div>

        {/* Padrinhos e Madrinhas */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[...Array(6)].map((_, index) => (
            <div key={index} className="bg-card rounded-xl p-6 border border-purple-500/20 hover:card-glow transition-all">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-purple-500/10 rounded-full flex items-center justify-center">
                  <Star className="w-8 h-8 text-purple-500" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-purple-500">Apoiador Estrela</h4>
                  <p className="text-gray-400">Em breve</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}