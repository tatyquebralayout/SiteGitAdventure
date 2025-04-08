import { useState, useEffect } from 'react';
import App from './App';
import { BlogPage } from './pages/BlogPage';

export function Router() {
  const [currentRoute, setCurrentRoute] = useState<string>(window.location.hash || '#home');

  useEffect(() => {
    const handleHashChange = () => {
      setCurrentRoute(window.location.hash);
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  // Sistema de roteamento simples baseado em hash para demonstração
  // Em um projeto real, usaríamos React Router
  const renderComponent = () => {
    if (currentRoute === '#blog-page') {
      return <BlogPage />;
    }

    // Para posts individuais (exemplo: #blog-post-post-1)
    if (currentRoute.startsWith('#blog-post-')) {
      const postId = currentRoute.replace('#blog-post-', '');
      return <BlogPage postId={postId} />;
    }

    // Rota padrão - página principal
    return <App />;
  };

  return renderComponent();
} 