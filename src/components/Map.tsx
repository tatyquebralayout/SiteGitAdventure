import { Navigation, Code, Database, Cloud, Trees as Tree } from 'lucide-react';

export function Map() {
  return (
    <section className="container mx-auto px-4 py-24">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-glow">Mapa do Mundo</h2>
          <p className="text-xl text-gray-400">Explore as diferentes regiões do nosso mundo mágico</p>
        </div>
        
        <div className="rpg-map">
          <Navigation className="compass-rose" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Região Norte */}
            <div className="map-region">
              <div className="region-title">
                <div className="region-title-icon">
                  <Code className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-purple-500">Região Norte: Terras Dinâmicas</h3>
              </div>
              <div className="space-y-4">
                <div className="map-district">
                  <h4 className="text-xl font-semibold mb-2 flex items-center gap-2">
                    <span className="text-purple-500">🐍</span> Distrito Python
                  </h4>
                  <p className="text-gray-400">Terra das serpentes sábias e códigos elegantes</p>
                </div>
                <div className="map-district">
                  <h4 className="text-xl font-semibold mb-2 flex items-center gap-2">
                    <span className="text-purple-500">⚡</span> Quarteirão JavaScript
                  </h4>
                  <p className="text-gray-400">Onde a magia dinâmica acontece</p>
                </div>
              </div>
            </div>

            {/* Região Sul */}
            <div className="map-region">
              <div className="region-title">
                <div className="region-title-icon">
                  <Code className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-purple-500">Região Sul: Terras Corporativas</h3>
              </div>
              <div className="space-y-4">
                <div className="map-district">
                  <h4 className="text-xl font-semibold mb-2 flex items-center gap-2">
                    <span className="text-purple-500">☕</span> Setor Java
                  </h4>
                  <p className="text-gray-400">Reino da programação orientada a objetos</p>
                </div>
                <div className="map-district">
                  <h4 className="text-xl font-semibold mb-2 flex items-center gap-2">
                    <span className="text-purple-500">⚔️</span> União C++
                  </h4>
                  <p className="text-gray-400">Onde o poder e a performance se encontram</p>
                </div>
              </div>
            </div>

            {/* Região Leste */}
            <div className="map-region">
              <div className="region-title">
                <div className="region-title-icon">
                  <Cloud className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-purple-500">Região Leste: Fronteiras Web</h3>
              </div>
              <div className="space-y-4">
                <div className="map-district">
                  <h4 className="text-xl font-semibold mb-2 flex items-center gap-2">
                    <span className="text-purple-500">🌐</span> WebLife
                  </h4>
                  <p className="text-gray-400">Centro da vida digital moderna</p>
                </div>
                <div className="map-district">
                  <h4 className="text-xl font-semibold mb-2 flex items-center gap-2">
                    <span className="text-purple-500">☁️</span> Nuvens Superiores
                  </h4>
                  <p className="text-gray-400">Onde a computação alcança novos horizontes</p>
                </div>
              </div>
            </div>

            {/* Região Oeste */}
            <div className="map-region">
              <div className="region-title">
                <div className="region-title-icon">
                  <Database className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-purple-500">Região Oeste: Terras Antigas</h3>
              </div>
              <div className="space-y-4">
                <div className="map-district">
                  <h4 className="text-xl font-semibold mb-2 flex items-center gap-2">
                    <span className="text-purple-500">💾</span> Reino Database
                  </h4>
                  <p className="text-gray-400">Guardiões do conhecimento estruturado</p>
                </div>
                <div className="map-district">
                  <h4 className="text-xl font-semibold mb-2 flex items-center gap-2">
                    <span className="text-purple-500">📜</span> Sistema Legacy
                  </h4>
                  <p className="text-gray-400">Onde a história da computação vive</p>
                </div>
              </div>
            </div>

            {/* Biomas Naturais */}
            <div className="map-region md:col-span-2">
              <div className="region-title">
                <div className="region-title-icon">
                  <Tree className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-purple-500">Biomas Naturais</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="map-district">
                  <h4 className="text-xl font-semibold mb-2 flex items-center gap-2">
                    <span className="text-purple-500">🌳</span> Floresta de Dados
                  </h4>
                  <p className="text-gray-400">Onde os dados crescem naturalmente</p>
                </div>
                <div className="map-district">
                  <h4 className="text-xl font-semibold mb-2 flex items-center gap-2">
                    <span className="text-purple-500">🏜️</span> Deserto de Bits
                  </h4>
                  <p className="text-gray-400">Vastidão digital inexplorada</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}