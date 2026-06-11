import './App.css'; 

function App() {
  return (
    <div style={{ backgroundColor: '#0d1117', color: '#c9d1d9', minHeight: '100vh' }}>
      {/* Menu de Navegação */}
      <nav style={{ padding: '20px', background: '#161b22', borderBottom: '1px solid #30363d', position: 'sticky', top: 0, zIndex: 1000 }}>
        <ul style={{ listStyle: 'none', display: 'flex', gap: '20px', margin: 0, justifyContent: 'center' }}>
          <li><a href="#sobre" style={{ color: '#00ffcc', textDecoration: 'none', fontWeight: 'bold' }}>Sobre Mim</a></li>
          <li><a href="#projetos" style={{ color: '#00ffcc', textDecoration: 'none', fontWeight: 'bold' }}>Projetos e Estudos</a></li>
          <li><a href="#conteudo" style={{ color: '#00ffcc', textDecoration: 'none', fontWeight: 'bold' }}>Conteúdo</a></li>
        </ul>
      </nav>

      {/* Seção Sobre Mim */}
      <section id="sobre" style={{ paddingTop: '100px', padding: '50px 20px', maxWidth: '800px', margin: 'auto' }}>
        <h2 style={{ color: '#00ffcc' }}>Sobre Mim</h2>
        <p>Sou João Victor, entusiasta de tecnologia e estudante de ADS. Minha jornada começou nos bastidores de sistemas de alta performance, e hoje busco traduzir esse conhecimento técnico em desenvolvimento de software. Seja otimizando hardware ou construindo interfaces no front-end, meu objetivo é claro: criar soluções que entreguem performance e experiência real.</p>
      </section>

      {/* Seção Projetos e Estudos */}
      <section id="projetos" style={{ paddingTop: '100px', padding: '50px 20px', maxWidth: '1000px', margin: 'auto' }}>
        <h2 style={{ color: '#00ffcc' }}>Meus Projetos e Estudos</h2>
        <div className="card-tech">
          <h3>Jornada Acadêmica: ADS (UNIT EAD)</h3>
          <p>Atualmente cursando o segundo semestre, consolidando conhecimentos em lógica de programação, arquitetura de sistemas e desenvolvimento web.</p>
        </div>
        
        <div className="card-tech">
          <h3>Estudo de Performance em Hardware</h3>
          <p>Investigação técnica sobre otimização de sistemas, incluindo configurações de BIOS (PBO, Resizable BAR) e tecnologias de renderização (DLSS/Frame Gen).</p>
        </div>

        <div className="card-tech" style={{ borderLeft: '4px solid #00ffcc' }}>
          <h3>Manutenção e Hardware</h3>
          <p>Experiência prática em montagem, desmontagem e diagnóstico (troubleshooting) de hardware.</p>
          <div style={{ display: 'inline-block', backgroundColor: '#333', color: '#00ffcc', padding: '4px 10px', borderRadius: '4px', fontSize: '0.8rem', fontWeight: 'bold', marginBottom: '15px' }}>
            Serviço Realizado: Computador de Cliente
          </div>
          <br />
          <a href="https://photos.app.goo.gl/Umn1yz4cQHpxr63z9" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-block', padding: '10px 20px', backgroundColor: '#00ffcc', color: '#000', textDecoration: 'none', borderRadius: '5px', fontWeight: 'bold' }}>
            Ver Galeria do Serviço
          </a>
        </div>
      </section>

      {/* Seção Conteúdo */}
      <section id="conteudo" style={{ padding: '50px 20px', maxWidth: '800px', margin: 'auto' }}>
        <h2 style={{ color: '#00ffcc' }}>Conteúdo e Engajamento</h2>
        <div className="card-tech" style={{ textAlign: 'center' }}>
          <h3>Trial of the Devourer - POV: DPS</h3>
          <a href="https://www.youtube.com/watch?v=upYGUM6JQ30" target="_blank" rel="noopener noreferrer" style={{ display: 'block', padding: '15px', backgroundColor: '#333', color: '#fff', textDecoration: 'none', borderRadius: '5px' }}>
            ▶ Assistir Vídeo no YouTube
          </a>
          <p style={{ fontSize: '0.9rem', marginTop: '10px' }}>Trecho de gameplay focado em performance e técnica.</p>
        </div>
      </section>

      {/* Seção Tech Stack */}
      <section style={{ padding: '40px', textAlign: 'center', background: '#111' }}>
        <h3 style={{ color: '#fff' }}>Tecnologias que estou estudando</h3>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '15px', flexWrap: 'wrap', marginTop: '20px' }}>
          {['React', 'JavaScript', 'HTML5', 'Node.js'].map(tech => (
            <span key={tech} style={{ padding: '8px 16px', backgroundColor: '#00ffcc', borderRadius: '20px', color: '#000', fontWeight: 'bold' }}>
              {tech}
            </span>
          ))}
        </div>
      </section>

      {/* Rodapé */}
      <footer style={{ padding: '40px', textAlign: 'center', background: '#000', color: '#888' }}>
        <p>© 2026 João Victor - Estudante de ADS</p>
        <p>Confira meus códigos no 
          <a href="https://github.com/jvlg19966" target="_blank" rel="noopener noreferrer" style={{ color: '#00ffcc', marginLeft: '10px', textDecoration: 'none', fontWeight: 'bold' }}>GitHub</a>
        </p>
      </footer>
    </div>
  );
}

export default App;