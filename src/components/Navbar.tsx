import { useState, useEffect } from 'react';
import { Github, Menu, X } from 'lucide-react';

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
      
      // Determine which section is currently in view
      const sections = [
        'hero', 'features', 'worlds', 'map', 'timeline', 
        'festivals', 'philosophy', 'rituals', 'stories', 
        'legends', 'society', 'creator', 'blog', 'faq', 'cta'
      ];
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          // If the top of the element is near the top of the viewport
          if (rect.top <= 150 && rect.bottom >= 150) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
      setActiveSection(id);
    }
  };

  const getMenuItemClass = (section: string) => {
    return `${
      activeSection === section 
        ? 'text-purple-400 font-medium' 
        : 'text-gray-300 hover:text-purple-400'
    } transition-colors px-2`;
  };

  const getMobileMenuItemClass = (section: string) => {
    return `block ${
      activeSection === section 
        ? 'text-purple-400 font-medium bg-gray-900/50' 
        : 'text-gray-300 hover:text-purple-400 hover:bg-gray-900/50'
    } w-full text-left py-2 px-3 rounded-lg`;
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-black/80 backdrop-blur-lg shadow-lg' : 'bg-transparent'
    } ${scrolled ? 'border-b border-purple-500/20' : ''}`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <button onClick={() => scrollToSection('hero')} className="flex items-center focus:outline-none">
              <Github className="w-8 h-8 text-purple-600 mr-2" />
              <span className="text-xl font-bold text-white">Git Adventure</span>
            </button>
          </div>
          
          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-4">
            <button onClick={() => scrollToSection('features')} className={getMenuItemClass('features')}>Features</button>
            <button onClick={() => scrollToSection('worlds')} className={getMenuItemClass('worlds')}>Mundos</button>
            <button onClick={() => scrollToSection('map')} className={getMenuItemClass('map')}>Mapa</button>
            <button onClick={() => scrollToSection('timeline')} className={getMenuItemClass('timeline')}>Timeline</button>
            <button onClick={() => scrollToSection('festivals')} className={getMenuItemClass('festivals')}>Festivais</button>
            <button onClick={() => scrollToSection('philosophy')} className={getMenuItemClass('philosophy')}>Filosofia</button>
            <button onClick={() => scrollToSection('rituals')} className={getMenuItemClass('rituals')}>Rituais</button>
            <button onClick={() => scrollToSection('stories')} className={getMenuItemClass('stories')}>Histórias</button>
            <button onClick={() => scrollToSection('blog')} className={getMenuItemClass('blog')}>Blog</button>
            <button onClick={() => scrollToSection('faq')} className={getMenuItemClass('faq')}>FAQ</button>
            <button onClick={() => scrollToSection('cta')} className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg transition-colors ml-2">
              Iniciar
            </button>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-gray-300 focus:outline-none">
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-black/95 border-b border-purple-500/20">
          <div className="container mx-auto px-4 py-3 space-y-1">
            <button onClick={() => scrollToSection('features')} className={getMobileMenuItemClass('features')}>Features</button>
            <button onClick={() => scrollToSection('worlds')} className={getMobileMenuItemClass('worlds')}>Mundos</button>
            <button onClick={() => scrollToSection('map')} className={getMobileMenuItemClass('map')}>Mapa</button>
            <button onClick={() => scrollToSection('timeline')} className={getMobileMenuItemClass('timeline')}>Timeline</button>
            <button onClick={() => scrollToSection('festivals')} className={getMobileMenuItemClass('festivals')}>Festivais</button>
            <button onClick={() => scrollToSection('philosophy')} className={getMobileMenuItemClass('philosophy')}>Filosofia</button>
            <button onClick={() => scrollToSection('rituals')} className={getMobileMenuItemClass('rituals')}>Rituais</button>
            <button onClick={() => scrollToSection('stories')} className={getMobileMenuItemClass('stories')}>Histórias</button>
            <button onClick={() => scrollToSection('legends')} className={getMobileMenuItemClass('legends')}>Lendas</button>
            <button onClick={() => scrollToSection('society')} className={getMobileMenuItemClass('society')}>Sociedade</button>
            <button onClick={() => scrollToSection('creator')} className={getMobileMenuItemClass('creator')}>Criador</button>
            <button onClick={() => scrollToSection('blog')} className={getMobileMenuItemClass('blog')}>Blog</button>
            <button onClick={() => scrollToSection('faq')} className={getMobileMenuItemClass('faq')}>FAQ</button>
            <button onClick={() => scrollToSection('cta')} className="block bg-purple-600 hover:bg-purple-700 text-white w-full text-center py-2 px-3 rounded-lg mt-3">
              Iniciar Jornada
            </button>
          </div>
        </div>
      )}
    </nav>
  );
} 