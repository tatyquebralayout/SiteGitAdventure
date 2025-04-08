import { Calendar, User, ArrowRight } from 'lucide-react';

type BlogPost = {
  id: string;
  title: string;
  excerpt: string;
  image: string;
  date: string;
  author: string;
  tags: string[];
};

export function Blog() {
  const blogPosts: BlogPost[] = [
    {
      id: 'post-1',
      title: 'Dominando o Básico: Comandos Git Essenciais',
      excerpt: 'Aprenda os comandos fundamentais do Git que todo desenvolvedor precisa conhecer para controlar versões eficientemente.',
      image: 'https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?q=80&w=1200',
      date: '12 Jun 2023',
      author: 'João Silva',
      tags: ['Git', 'Básico', 'Comandos']
    },
    {
      id: 'post-2',
      title: 'Estratégias Avançadas de Branching',
      excerpt: 'Descubra como utilizar estratégias de branching para organizar o desenvolvimento em equipes de qualquer tamanho.',
      image: 'https://images.unsplash.com/photo-1556075798-4825dfaaf498?q=80&w=1200',
      date: '28 Jul 2023',
      author: 'Maria Santos',
      tags: ['Git', 'Branches', 'Avançado']
    },
    {
      id: 'post-3',
      title: 'Git Flow: Implementando um Fluxo de Trabalho Profissional',
      excerpt: 'Como utilizar o Git Flow para estruturar seu fluxo de trabalho e melhorar a colaboração na sua equipe.',
      image: 'https://images.unsplash.com/photo-1522252234503-e356532cafd5?q=80&w=1200',
      date: '15 Ago 2023',
      author: 'Carlos Oliveira',
      tags: ['Git Flow', 'Workflow', 'Equipes']
    }
  ];

  const navigateToBlog = () => {
    // Em uma aplicação real, usaríamos React Router:
    // history.push('/blog');
    // Mas como é só demo, vamos simular com console.log
    console.log('Navegando para o blog completo');
    window.location.href = '#blog-page';
  };

  const navigateToPost = (postId: string) => {
    // Em uma aplicação real:
    // history.push(`/blog/${postId}`);
    console.log(`Navegando para o post: ${postId}`);
    window.location.href = `#blog-post-${postId}`;
  };

  return (
    <div className="relative py-24">
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-transparent pointer-events-none"></div>
      <div className="container mx-auto px-4 relative">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-2 text-glow">Blog da Aventura</h2>
          <p className="text-xl text-gray-400 text-center mb-12">
            Artigos, tutoriais e histórias sobre o universo Git
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <div 
                key={post.id}
                className="bg-black/40 backdrop-blur-sm rounded-xl overflow-hidden border border-purple-500/20 hover:border-purple-500/40 transition-all hover:shadow-lg hover:shadow-purple-500/10 group"
              >
                <div className="h-48 overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
                  />
                </div>
                <div className="p-6">
                  <div className="flex flex-wrap gap-2 mb-3">
                    {post.tags.map((tag, index) => (
                      <span key={index} className="text-xs px-2 py-1 bg-purple-500/20 text-purple-300 rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-purple-400 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-400 mb-4 text-sm">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-sm text-gray-500 mt-auto">
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center">
                      <User className="w-4 h-4 mr-1" />
                      <span>{post.author}</span>
                    </div>
                  </div>
                </div>
                <div className="p-4 border-t border-purple-500/20 flex justify-between items-center">
                  <button 
                    onClick={() => navigateToPost(post.id)}
                    className="text-purple-400 group-hover:text-purple-300 font-medium text-sm flex items-center transition-colors"
                  >
                    Ler artigo completo
                    <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <button 
              onClick={navigateToBlog}
              className="bg-purple-600/20 hover:bg-purple-600/30 text-purple-300 font-medium py-3 px-8 rounded-lg inline-flex items-center transition-colors border border-purple-500/30"
            >
              Ver todos os artigos
              <ArrowRight className="w-4 h-4 ml-2" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
} 