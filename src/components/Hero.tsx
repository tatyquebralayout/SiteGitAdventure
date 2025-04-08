import { GitCommit, GitBranch, GitMerge, GitPullRequest, ChevronRight } from 'lucide-react';

export function Hero() {
  return (
    <div className="relative">
      <div className="absolute inset-0 hero-gradient"></div>
      <header className="container mx-auto px-4 py-24 pt-28 relative">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex justify-center mb-8">
            <div className="relative">
              <img 
                src="/SiteGitAdventure/images/logo.webp" 
                alt="Git Adventure Logo" 
                className="h-48 object-contain"
              />
            </div>
          </div>
          <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto mb-12">
            Uma jornada mágica para dominar Git & GitHub através de uma experiência única de aprendizado
          </p>
          <div className="flex flex-wrap gap-6 justify-center mb-12">
            <div className="flex items-center bg-card rounded-lg px-6 py-3 border border-purple-500/20">
              <GitCommit className="w-5 h-5 mr-3 text-purple-500" />
              <span className="text-gray-300">Commits</span>
            </div>
            <div className="flex items-center bg-card rounded-lg px-6 py-3 border border-purple-500/20">
              <GitBranch className="w-5 h-5 mr-3 text-purple-500" />
              <span className="text-gray-300">Branches</span>
            </div>
            <div className="flex items-center bg-card rounded-lg px-6 py-3 border border-purple-500/20">
              <GitMerge className="w-5 h-5 mr-3 text-purple-500" />
              <span className="text-gray-300">Merging</span>
            </div>
            <div className="flex items-center bg-card rounded-lg px-6 py-3 border border-purple-500/20">
              <GitPullRequest className="w-5 h-5 mr-3 text-purple-500" />
              <span className="text-gray-300">Pull Requests</span>
            </div>
          </div>
          <button 
            onClick={() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-purple-600 hover:bg-purple-700 text-white font-medium py-4 px-8 rounded-lg text-lg flex items-center mx-auto transition-all transform hover:scale-105 hover:card-glow"
          >
            Iniciar Jornada
            <ChevronRight className="ml-2" />
          </button>
        </div>
      </header>
    </div>
  );
}