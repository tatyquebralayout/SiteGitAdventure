import { useState, useEffect } from 'react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { Search, Calendar, User, ArrowRight, Tag, Filter, ArrowLeft } from 'lucide-react';

type BlogPost = {
  id: string;
  title: string;
  excerpt: string;
  image: string;
  date: string;
  author: string;
  tags: string[];
  category: string;
  content?: string;
};

type BlogPageProps = {
  postId?: string;
};

export function BlogPage({ postId }: BlogPageProps = {}) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const [currentPost, setCurrentPost] = useState<BlogPost | null>(null);
  
  const categories = ['Tutoriais', 'Boas Práticas', 'Git Avançado', 'GitHub', 'Casos de Uso'];
  
  const tags = [
    'Git', 'GitHub', 'Básico', 'Avançado', 'Branches', 'Merge', 'Pull Request', 
    'Git Flow', 'Workflow', 'Equipes', 'Comandos', 'Dicas'
  ];
  
  const blogPosts: BlogPost[] = [
    {
      id: 'post-1',
      title: 'Dominando o Básico: Comandos Git Essenciais',
      excerpt: 'Aprenda os comandos fundamentais do Git que todo desenvolvedor precisa conhecer para controlar versões eficientemente.',
      image: 'https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?q=80&w=1200',
      date: '12 Jun 2023',
      author: 'João Silva',
      tags: ['Git', 'Básico', 'Comandos'],
      category: 'Tutoriais',
      content: `
# Dominando o Básico: Comandos Git Essenciais

O Git é uma ferramenta essencial para desenvolvedores modernos. Neste artigo, vamos explorar os comandos fundamentais que todo desenvolvedor precisa conhecer para trabalhar eficientemente com controle de versão.

## Inicializando um Repositório

Para começar a usar o Git em um projeto, você precisa inicializar um repositório:

\`\`\`
git init
\`\`\`

Este comando cria um novo repositório Git vazio no diretório atual.

## Clonando um Repositório Existente

Para trabalhar com um repositório remoto existente, você pode cloná-lo:

\`\`\`
git clone <url-do-repositório>
\`\`\`

## Verificando o Status do Repositório

Para ver quais arquivos foram modificados desde o último commit:

\`\`\`
git status
\`\`\`

## Adicionando Arquivos ao Stage

Para adicionar arquivos específicos ao staging area:

\`\`\`
git add <arquivo>
\`\`\`

Para adicionar todos os arquivos modificados:

\`\`\`
git add .
\`\`\`

## Criando um Commit

Para criar um commit com os arquivos em staging:

\`\`\`
git commit -m "Mensagem descritiva do commit"
\`\`\`

## Visualizando o Histórico de Commits

Para ver o histórico de commits:

\`\`\`
git log
\`\`\`

## Enviando Alterações para o Repositório Remoto

Para enviar seus commits para o repositório remoto:

\`\`\`
git push origin <nome-da-branch>
\`\`\`

## Atualizando seu Repositório Local

Para obter as alterações mais recentes do repositório remoto:

\`\`\`
git pull origin <nome-da-branch>
\`\`\`

Dominando esses comandos básicos, você já estará bem preparado para utilizar o Git em seus projetos diários. À medida que você se familiariza com essas operações, pode explorar recursos mais avançados para aprimorar seu fluxo de trabalho.
      `
    },
    {
      id: 'post-2',
      title: 'Estratégias Avançadas de Branching',
      excerpt: 'Descubra como utilizar estratégias de branching para organizar o desenvolvimento em equipes de qualquer tamanho.',
      image: 'https://images.unsplash.com/photo-1556075798-4825dfaaf498?q=80&w=1200',
      date: '28 Jul 2023',
      author: 'Maria Santos',
      tags: ['Git', 'Branches', 'Avançado'],
      category: 'Git Avançado',
      content: 'Este é o conteúdo completo do post sobre Estratégias Avançadas de Branching.'
    },
    {
      id: 'post-3',
      title: 'Git Flow: Implementando um Fluxo de Trabalho Profissional',
      excerpt: 'Como utilizar o Git Flow para estruturar seu fluxo de trabalho e melhorar a colaboração na sua equipe.',
      image: 'https://images.unsplash.com/photo-1522252234503-e356532cafd5?q=80&w=1200',
      date: '15 Ago 2023',
      author: 'Carlos Oliveira',
      tags: ['Git Flow', 'Workflow', 'Equipes'],
      category: 'Boas Práticas',
      content: 'Este é o conteúdo completo do post sobre Git Flow.'
    },
    {
      id: 'post-4',
      title: 'Gerenciando Conflitos de Merge com Confiança',
      excerpt: 'Técnicas práticas para resolver conflitos de merge de forma eficiente e sem estresse.',
      image: 'https://images.unsplash.com/photo-1607799279861-4dd421887fb3?q=80&w=1200',
      date: '03 Set 2023',
      author: 'Ana Pereira',
      tags: ['Git', 'Merge', 'Conflitos'],
      category: 'Tutoriais',
      content: 'Este é o conteúdo completo do post sobre Gerenciando Conflitos de Merge.'
    },
    {
      id: 'post-5',
      title: 'Pull Requests: Boas Práticas para Code Review',
      excerpt: 'Como utilizar Pull Requests eficientemente para melhorar a qualidade do seu código através de reviews.',
      image: 'https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?q=80&w=1200',
      date: '20 Out 2023',
      author: 'Pedro Costa',
      tags: ['GitHub', 'Pull Request', 'Code Review'],
      category: 'GitHub',
      content: 'Este é o conteúdo completo do post sobre Pull Requests.'
    },
    {
      id: 'post-6',
      title: 'GitHub Actions: Automatize seu Fluxo de Trabalho',
      excerpt: 'Um guia completo para configurar GitHub Actions e automatizar testes, build e deploy do seu projeto.',
      image: 'https://images.unsplash.com/photo-1551033406-611cf9a28f67?q=80&w=1200',
      date: '12 Nov 2023',
      author: 'Lucas Mendes',
      tags: ['GitHub', 'Actions', 'CI/CD'],
      category: 'GitHub',
      content: 'Este é o conteúdo completo do post sobre GitHub Actions.'
    }
  ];

  // Encontrar o post atual se um postId for fornecido
  useEffect(() => {
    if (postId) {
      const post = blogPosts.find(post => post.id === postId);
      if (post) {
        setCurrentPost(post);
      }
    } else {
      setCurrentPost(null);
    }
  }, [postId]);

  // Voltar para a listagem de posts
  const goBackToList = () => {
    window.location.href = '#blog-page';
  };

  // Voltar para a página principal
  const goBackToHome = () => {
    window.location.href = '#home';
  };

  // Filtragem dos posts com base nos critérios selecionados
  const filteredPosts = blogPosts.filter(post => {
    // Filtro por busca
    const matchesSearch = searchQuery === '' || 
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    
    // Filtro por categoria
    const matchesCategory = selectedCategory === null || post.category === selectedCategory;
    
    // Filtro por tag
    const matchesTag = selectedTag === null || post.tags.includes(selectedTag);
    
    return matchesSearch && matchesCategory && matchesTag;
  });

  // Renderizar um post específico
  const renderSinglePost = () => {
    if (!currentPost) return null;

    return (
      <div className="container mx-auto px-4 py-16">
        <button 
          onClick={goBackToList} 
          className="flex items-center text-purple-400 hover:text-purple-300 mb-8 transition-colors"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Voltar para todos os artigos
        </button>
        
        <div className="bg-black/40 backdrop-blur-sm rounded-xl overflow-hidden border border-purple-500/20 shadow-xl">
          <div className="h-80 overflow-hidden">
            <img 
              src={currentPost.image} 
              alt={currentPost.title} 
              className="w-full h-full object-cover" 
            />
          </div>
          
          <div className="p-8">
            <div className="flex flex-wrap justify-between items-center mb-6">
              <span className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm">
                {currentPost.category}
              </span>
              <div className="flex items-center text-gray-500 text-sm mt-2 sm:mt-0">
                <Calendar className="w-4 h-4 mr-1" />
                <span className="mr-4">{currentPost.date}</span>
                <User className="w-4 h-4 mr-1" />
                <span>{currentPost.author}</span>
              </div>
            </div>
            
            <h1 className="text-3xl md:text-4xl font-bold mb-6">
              {currentPost.title}
            </h1>
            
            <div className="flex flex-wrap gap-2 mb-8">
              {currentPost.tags.map((tag, index) => (
                <span key={index} className="text-xs px-2 py-1 bg-gray-800 text-gray-400 rounded-full">
                  {tag}
                </span>
              ))}
            </div>
            
            <div className="prose prose-invert prose-purple max-w-none">
              <div style={{ whiteSpace: 'pre-wrap' }}>{currentPost.content}</div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  // Renderizar a lista de posts
  const renderPostsList = () => {
    return (
      <>
        {/* Hero Section */}
        <div className="relative py-24 bg-gradient-to-b from-purple-900/20 to-black">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <button 
                onClick={goBackToHome}
                className="inline-flex items-center text-purple-400 hover:text-purple-300 mb-8"
              >
                <ArrowLeft className="w-5 h-5 mr-2" />
                Voltar para página inicial
              </button>
              
              <h1 className="text-5xl md:text-6xl font-bold mb-6 text-glow">Blog da Aventura</h1>
              <p className="text-xl text-gray-300 mb-12">
                Explore artigos, tutoriais e histórias sobre Git, GitHub e o universo do controle de versão
              </p>
              
              {/* Search Bar */}
              <div className="relative max-w-2xl mx-auto">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Buscar artigos..."
                  className="block w-full pl-10 pr-4 py-3 border border-purple-500/30 rounded-lg bg-black/50 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500/50"
                />
              </div>
            </div>
          </div>
        </div>
        
        {/* Conteúdo Principal */}
        <div className="container mx-auto px-4 py-12">
          <div className="flex flex-wrap lg:flex-nowrap gap-8">
            {/* Sidebar com filtros */}
            <div className="w-full lg:w-1/4">
              <div className="sticky top-24 bg-black/40 backdrop-blur-sm rounded-xl border border-purple-500/20 p-6">
                <div className="mb-8">
                  <h3 className="text-lg font-medium mb-4 flex items-center">
                    <Filter className="w-5 h-5 mr-2 text-purple-400" /> 
                    Filtrar por Categoria
                  </h3>
                  <div className="space-y-2">
                    <button 
                      onClick={() => setSelectedCategory(null)}
                      className={`block w-full text-left px-3 py-2 rounded-lg ${
                        selectedCategory === null ? 'bg-purple-500/20 text-purple-300' : 'text-gray-400 hover:bg-gray-800/50'
                      }`}
                    >
                      Todas as categorias
                    </button>
                    {categories.map((category, index) => (
                      <button 
                        key={index}
                        onClick={() => setSelectedCategory(category)}
                        className={`block w-full text-left px-3 py-2 rounded-lg ${
                          selectedCategory === category ? 'bg-purple-500/20 text-purple-300' : 'text-gray-400 hover:bg-gray-800/50'
                        }`}
                      >
                        {category}
                      </button>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h3 className="text-lg font-medium mb-4 flex items-center">
                    <Tag className="w-5 h-5 mr-2 text-purple-400" /> 
                    Tags Populares
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {tags.map((tag, index) => (
                      <button 
                        key={index}
                        onClick={() => setSelectedTag(selectedTag === tag ? null : tag)}
                        className={`text-sm px-3 py-1 rounded-full ${
                          selectedTag === tag 
                            ? 'bg-purple-500/30 text-purple-300 border border-purple-500/50' 
                            : 'bg-gray-800/50 text-gray-400 hover:bg-gray-700/50 border border-gray-700'
                        }`}
                      >
                        {tag}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            
            {/* Lista de Posts */}
            <div className="w-full lg:w-3/4">
              {filteredPosts.length === 0 ? (
                <div className="text-center py-12">
                  <p className="text-xl text-gray-400">Nenhum artigo encontrado com os critérios selecionados.</p>
                  <button 
                    onClick={() => {
                      setSearchQuery('');
                      setSelectedCategory(null);
                      setSelectedTag(null);
                    }}
                    className="mt-4 text-purple-400 hover:text-purple-300"
                  >
                    Limpar filtros
                  </button>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {filteredPosts.map((post) => (
                    <div 
                      key={post.id}
                      className="bg-black/40 backdrop-blur-sm rounded-xl overflow-hidden border border-purple-500/20 hover:border-purple-500/40 transition-all hover:shadow-lg hover:shadow-purple-500/10 group"
                    >
                      <div className="h-56 overflow-hidden">
                        <img 
                          src={post.image} 
                          alt={post.title} 
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
                        />
                      </div>
                      <div className="p-6">
                        <div className="flex justify-between items-center mb-3">
                          <span className="text-xs px-2 py-1 bg-purple-500/20 text-purple-300 rounded-full">
                            {post.category}
                          </span>
                          <div className="flex items-center text-sm text-gray-500">
                            <Calendar className="w-4 h-4 mr-1" />
                            <span>{post.date}</span>
                          </div>
                        </div>
                        <h3 className="text-xl font-semibold mb-3 group-hover:text-purple-400 transition-colors">
                          {post.title}
                        </h3>
                        <p className="text-gray-400 mb-4">
                          {post.excerpt}
                        </p>
                        <div className="flex flex-wrap gap-2 mb-4">
                          {post.tags.map((tag, index) => (
                            <span key={index} className="text-xs px-2 py-1 bg-gray-800 text-gray-400 rounded-full">
                              {tag}
                            </span>
                          ))}
                        </div>
                        <div className="flex items-center text-sm text-gray-500">
                          <User className="w-4 h-4 mr-1" />
                          <span>{post.author}</span>
                        </div>
                      </div>
                      <div className="p-4 border-t border-purple-500/20 flex justify-between items-center">
                        <button 
                          onClick={() => window.location.href = `#blog-post-${post.id}`}
                          className="text-purple-400 group-hover:text-purple-300 font-medium text-sm flex items-center transition-colors"
                        >
                          Ler artigo completo
                          <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </>
    );
  };

  return (
    <div className="min-h-screen bg-[#0A0A0B] text-white">
      <Navbar />
      
      <main className="pt-16">
        {currentPost ? renderSinglePost() : renderPostsList()}
      </main>
      
      <Footer />
    </div>
  );
} 