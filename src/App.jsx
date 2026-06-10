import './App.css'; 

function App() {
  return (
    <div>
      {/* Menu de Navegação */}
      <nav style={{ padding: '20px', background: '#222', color: '#fff', position: 'sticky', top: 0, zIndex: 1000 }}>
        <ul style={{ listStyle: 'none', display: 'flex', gap: '20px', margin: 0 }}>
          <li><a href="#sobre" style={{ color: '#fff', textDecoration: 'none' }}>Sobre Mim</a></li>
          <li><a href="#projetos" style={{ color: '#fff', textDecoration: 'none' }}>Projetos e Estudos</a></li>
          <li><a href="#conteudo" style={{ color: '#fff', textDecoration: 'none' }}>Conteúdo</a></li>
        </ul>
      </nav>

      {/* Seção Sobre Mim */}
      <section id="sobre" style={{ padding: '50px', minHeight: '60vh', scrollMarginTop: '80px' }}>
        <h2>Sobre Mim</h2>
        <p>
          Sou João Victor, entusiasta de tecnologia e estudante de ADS. Minha jornada começou nos bastidores de sistemas de alta performance, e hoje busco traduzir esse conhecimento técnico em desenvolvimento de software. Seja otimizando hardware ou construindo interfaces no front-end, meu objetivo é claro: criar soluções que entreguem performance e experiência real. Além de desenvolvedor, sou um entusiasta da educação e busco, através da tecnologia, trilhar o caminho para a docência.
        </p>
      </section>

      {/* Seção Projetos e Estudos */}
      <section id="projetos" style={{ padding: '100px', minHeight: '80vh', color: '#333' }}>
        <h2>Meus Projetos e Estudos</h2>
        
        <div style={{ border: '1px solid #ccc', padding: '20px', borderRadius: '8px', marginBottom: '20px', background: '#fff' }}>
          <h3>Jornada Acadêmica: ADS (UNIT EAD)</h3>
          <p>Atualmente cursando o segundo semestre, consolidando conhecimentos em lógica de programação, arquitetura de sistemas e desenvolvimento web.</p>
        </div>
        
        <div style={{ border: '1px solid #ccc', padding: '20px', borderRadius: '8px', marginBottom: '20px', background: '#fff' }}>
          <h3>Estudo de Performance em Hardware</h3>
          <p>Investigação técnica sobre otimização de sistemas, incluindo configurações de BIOS (PBO, Resizable BAR) e tecnologias de renderização (DLSS/Frame Gen).</p>
        </div>

        <div style={{ border: '1px solid #444', padding: '20px', borderRadius: '8px', marginBottom: '20px' }}>
          <h3>Manutenção e Hardware</h3>
          <p>Experiência prática em montagem, desmontagem e diagnóstico (troubleshooting) de hardware.</p>
          <div style={{ display: 'inline-block', backgroundColor: '#333', color: '#00ffcc', padding: '4px 10px', borderRadius: '4px', fontSize: '0.8rem', fontWeight: 'bold', marginBottom: '15px' }}>
            Serviço Realizado: Computador de Cliente
          </div>
          <br />
          <a 
            href="https://photos.app.goo.gl/Umn1yz4cQHpxr63z9" 
            target="_blank" 
            rel="noopener noreferrer"
            style={{ display: 'inline-block', padding: '10px 20px', backgroundColor: '#00ffcc', color: '#000', textDecoration: 'none', borderRadius: '5px', fontWeight: 'bold' }}
          >
            Ver Galeria do Serviço
          </a>
        </div>
      </section>

      {/* Seção Conteúdo e Engajamento */}
      <section id="conteudo" style={{ padding: '50px', minHeight: '80vh', scrollMarginTop: '100px' }}>
        <h2>Conteúdo e Engajamento</h2>
        
        <div style={{ marginTop: '30px', display: 'flex', gap: '20px', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center' }}>
          <div style={{ border: '1px solid #444', padding: '15px', borderRadius: '8px', background: '#222' }}>
            <h3 style={{ color: '#fff', marginBottom: '10px' }}>Trial of the Devourer - POV: DPS</h3>
            
            <a 
              href="https://www.youtube.com/watch?v=upYGUM6JQ30" 
              target="_blank" 
              rel="noopener noreferrer"
              style={{ display: 'block', padding: '20px', backgroundColor: '#333', color: '#fff', textDecoration: 'none', borderRadius: '5px', textAlign: 'center' }}
            >
              ▶ Assistir Vídeo no YouTube
            </a>
            
            <p style={{ color: '#ccc', fontSize: '0.9rem', marginTop: '10px' }}>
              Trecho de gameplay focado em performance e técnica.
            </p>
          </div>
        </div>
      </section>

      {/* NOVA SEÇÃO: Tech Stack */}
      <section style={{ padding: '40px', textAlign: 'center', background: '#111' }}>
        <h3 style={{ color: '#fff', marginBottom: '20px' }}>Tecnologias que estou estudando</h3>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '15px', flexWrap: 'wrap' }}>
          {['React', 'JavaScript', 'HTML5', 'Node.js'].map(tech => (
            <span key={tech} style={{ padding: '8px 16px', backgroundColor: '#00ffcc', borderRadius: '20px', color: '#000', fontWeight: 'bold' }}>
              {tech}
            </span>
          ))}
        </div>
      </section>

{/* Rodapé Final */}
<footer style={{ padding: '40px', textAlign: 'center', background: '#000', color: '#888' }}>
  <p>© 2026 João Victor - Estudante de ADS</p>
  <p>Confira meus códigos no -
     <a 
       href="https://github.com/jvlg19966" 
       target="_blank" 
       rel="noopener noreferrer" 
       style={{ color: '#00ffcc', marginLeft: '10px', textDecoration: 'none', fontWeight: 'bold' }}
     >
       GitHub
     </a>
  </p>
</footer>
    </div>
  );
}

export default App;