import { Scroll, GitBranch, Sword, Users, Lock } from 'lucide-react';

export function Timeline() {
  return (
    <section className="container mx-auto px-4 py-24">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-glow">Cronologia do Mundo</h2>
          <p className="text-xl text-gray-400 mb-16">Descubra os eventos que moldaram nossa história</p>
        </div>
        
        <div className="timeline-scroll">
          <div className="timeline-container">
            {/* Era do Código Aberto */}
            <div className="timeline-era">
              <div className="timeline-era-content">
                <div className="timeline-era-icon">
                  <Scroll className="w-8 h-8" />
                </div>
                <h3 className="timeline-era-title">Era do Código Aberto</h3>
                <div className="timeline-era-status">
                  <div className="timeline-era-lock">
                    <Lock className="w-4 h-4" />
                  </div>
                  <div className="timeline-era-progress">
                    <div className="timeline-era-progress-bar" style={{ width: '0%' }}></div>
                  </div>
                </div>
                <div className="timeline-era-mystery">
                  <p>História a ser descoberta...</p>
                  <span className="timeline-era-hint">Complete missões para desbloquear</span>
                </div>
              </div>
            </div>

            {/* A Grande Bifurcação */}
            <div className="timeline-era">
              <div className="timeline-era-content">
                <div className="timeline-era-icon">
                  <GitBranch className="w-8 h-8" />
                </div>
                <h3 className="timeline-era-title">A Grande Bifurcação</h3>
                <div className="timeline-era-status">
                  <div className="timeline-era-lock">
                    <Lock className="w-4 h-4" />
                  </div>
                  <div className="timeline-era-progress">
                    <div className="timeline-era-progress-bar" style={{ width: '0%' }}></div>
                  </div>
                </div>
                <div className="timeline-era-mystery">
                  <p>História a ser descoberta...</p>
                  <span className="timeline-era-hint">Complete missões para desbloquear</span>
                </div>
              </div>
            </div>

            {/* As Guerras dos Bugs */}
            <div className="timeline-era">
              <div className="timeline-era-content">
                <div className="timeline-era-icon">
                  <Sword className="w-8 h-8" />
                </div>
                <h3 className="timeline-era-title">As Guerras dos Bugs</h3>
                <div className="timeline-era-status">
                  <div className="timeline-era-lock">
                    <Lock className="w-4 h-4" />
                  </div>
                  <div className="timeline-era-progress">
                    <div className="timeline-era-progress-bar" style={{ width: '0%' }}></div>
                  </div>
                </div>
                <div className="timeline-era-mystery">
                  <p>História a ser descoberta...</p>
                  <span className="timeline-era-hint">Complete missões para desbloquear</span>
                </div>
              </div>
            </div>

            {/* A Revolução Colaborativa */}
            <div className="timeline-era">
              <div className="timeline-era-content">
                <div className="timeline-era-icon">
                  <Users className="w-8 h-8" />
                </div>
                <h3 className="timeline-era-title">A Revolução Colaborativa</h3>
                <div className="timeline-era-status">
                  <div className="timeline-era-lock">
                    <Lock className="w-4 h-4" />
                  </div>
                  <div className="timeline-era-progress">
                    <div className="timeline-era-progress-bar" style={{ width: '0%' }}></div>
                  </div>
                </div>
                <div className="timeline-era-mystery">
                  <p>História a ser descoberta...</p>
                  <span className="timeline-era-hint">Complete missões para desbloquear</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}