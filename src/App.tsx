import { useState } from 'react'

const sections = [
  { id: 'inicio', label: 'Inicio' },
  { id: 'tienda', label: 'La tienda' },
  { id: 'diagnostico', label: 'Diagnóstico' },
  { id: 'estrategia', label: 'Estrategia' },
  { id: 'plan', label: 'Plan de acción' },
  { id: 'presupuesto', label: 'Presupuesto' },
]

const budget = [
  { item: 'Afiches publicitarios a color', quantity: '5 unidades', price: 15000 },
  { item: 'Cartulinas para avisos', quantity: '3 unidades', price: 6000 },
  { item: 'Marcadores de colores', quantity: '2 unidades', price: 6000 },
  { item: 'Cinta adhesiva', quantity: '1 unidad', price: 4000 },
  { item: 'Volantes publicitarios', quantity: '50 unidades', price: 15000 },
  { item: 'Datos móviles para WhatsApp', quantity: '1 paquete', price: 10000 },
  { item: 'Diseño en Canva', quantity: 'Herramienta gratuita', price: 0 },
  { item: 'Tiempo del propietario', quantity: 'Apoyo propio', price: 0 },
]

const money = (value: number) =>
  value.toLocaleString('es-CO', { style: 'currency', currency: 'COP', maximumFractionDigits: 0 })

function Icon({ name }: { name: string }) {
  const paths: Record<string, React.ReactNode> = {
    pin: <><path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="2.5"/></>,
    heart: <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8l1.1 1.1L12 21l7.8-7.5 1.1-1.1a5.5 5.5 0 0 0-.1-7.8Z"/>,
    arrow: <><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></>,
    check: <path d="m5 12 4 4L19 6"/>,
    users: <><path d="M16 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="10" cy="7" r="4"/><path d="M20 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/></>,
    megaphone: <><path d="m3 11 18-5v12L3 13v-2Z"/><path d="M11.6 15.4 13 21H8l-2-7"/><path d="M21 10v4"/></>,
    calendar: <><rect x="3" y="5" width="18" height="16" rx="2"/><path d="M16 3v4M8 3v4M3 11h18"/></>,
    wallet: <><rect x="3" y="5" width="18" height="15" rx="2"/><path d="M3 9h18"/><path d="M16 15h.01"/></>,
  }
  return <svg viewBox="0 0 24 24" aria-hidden="true" className="icon" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">{paths[name] ?? paths.check}</svg>
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [active, setActive] = useState('inicio')
  const [showAllBudget, setShowAllBudget] = useState(false)
  const [presentationMode, setPresentationMode] = useState(false)

  const navigate = (id: string) => {
    setActive(id)
    setMenuOpen(false)
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  const total = budget.reduce((sum, item) => sum + item.price, 0)

  return (
    <div className={presentationMode ? 'app presentation-mode' : 'app'}>
      <div className="top-strip">
        <div className="container top-strip-inner">
          <span><Icon name="pin" /> Propuesta académica · Manizales, Caldas</span>
          <button className="presentation-toggle" onClick={() => setPresentationMode(!presentationMode)}>
            {presentationMode ? 'Salir de modo exposición' : 'Modo exposición'}
          </button>
        </div>
      </div>

      <header className="site-header">
        <div className="container nav-wrap">
          <button className="brand" onClick={() => navigate('inicio')} aria-label="Ir al inicio">
            <span className="brand-mark">P<span>.</span></span>
            <span className="brand-copy"><strong>Tienda Peralonzo</strong><small>La confianza del barrio</small></span>
          </button>
          <button className="menu-button" aria-label="Abrir menú" aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>
            <span></span><span></span><span></span>
          </button>
          <nav className={menuOpen ? 'main-nav open' : 'main-nav'} aria-label="Navegación principal">
            {sections.map(section => (
              <button key={section.id} className={active === section.id ? 'nav-link active' : 'nav-link'} onClick={() => navigate(section.id)}>
                {section.label}
              </button>
            ))}
          </nav>
        </div>
      </header>

      <main>
        <section className="hero section-anchor" id="inicio">
          <div className="hero-orb orb-one"></div><div className="hero-orb orb-two"></div>
          <div className="container hero-grid">
            <div className="hero-copy">
              <div className="eyebrow"><span className="eyebrow-dot"></span> BRIEF DE COMUNICACIÓN COMERCIAL</div>
              <h1>Lo que necesitas,<br /><em>cerca de casa.</em></h1>
              <p className="hero-lead">Una propuesta para fortalecer la comunicación de Tienda Peralonzo y hacer visibles esos detalles que la conectan con su comunidad.</p>
              <div className="hero-actions">
                <button className="button button-primary" onClick={() => navigate('estrategia')}>Conocer la propuesta <Icon name="arrow" /></button>
                <button className="button button-ghost" onClick={() => navigate('diagnostico')}>Ver el diagnóstico</button>
              </div>
              <div className="hero-note"><span className="note-icon"><Icon name="heart" /></span><span><strong>La cercanía hace la diferencia.</strong><small>Una tienda de barrio, relaciones de confianza.</small></span></div>
            </div>
            <div className="hero-visual" aria-label="Ilustración de una tienda de barrio">
              <div className="visual-card card-note"><span className="note-star">✳</span><span>Hecho para<br /><strong>el barrio</strong></span></div>
              <div className="store-illustration">
                <div className="store-sky"><div className="sun"></div><div className="cloud cloud-a"></div><div className="cloud cloud-b"></div></div>
                <div className="store-roof"><span></span><span></span><span></span><span></span><span></span><span></span></div>
                <div className="store-sign">TIENDA <b>PERALONZO</b></div>
                <div className="store-front">
                  <div className="shelf"><i></i><i></i><i></i><i></i><i></i><i></i></div>
                  <div className="store-window"><div className="window-line"></div><div className="jar jar-a"></div><div className="jar jar-b"></div><div className="jar jar-c"></div></div>
                  <div className="store-door"><div className="door-knob"></div></div>
                  <div className="plant"><span></span><span></span><span></span><b></b></div>
                </div>
                <div className="store-ground"></div>
              </div>
              <div className="visual-card card-service"><span className="service-icon">↗</span><span><strong>Más servicios,</strong><br />más cercanía.</span></div>
              <div className="floating-label"><span className="floating-dot"></span> Una tienda de confianza</div>
            </div>
          </div>
          <div className="hero-bottom container">
            <span>UNA PROPUESTA EN 6 MOMENTOS</span><span className="hero-bottom-line"></span><span>01 — 06</span>
          </div>
        </section>

        <section className="intro-band">
          <div className="container intro-grid">
            <p className="intro-kicker">LA IDEA CENTRAL</p>
            <p className="intro-text">No se trata solo de vender productos. Se trata de <strong>comunicar mejor todo lo que la tienda ofrece</strong> y seguir construyendo confianza con los vecinos.</p>
          </div>
        </section>

        <section className="section section-anchor" id="tienda">
          <div className="container">
            <div className="section-heading">
              <div><div className="eyebrow dark"><span className="eyebrow-dot"></span> 01 / CONTEXTO</div><h2>Una tienda que<br /><em>conoce su barrio.</em></h2></div>
              <p className="section-description">Tienda Peralonzo es un negocio de barrio en Manizales. La propuesta parte de sus relaciones cotidianas con los clientes y de los servicios que complementan la compra tradicional.</p>
            </div>
            <div className="feature-grid">
              <article className="feature-card feature-green"><div className="feature-number">01</div><div className="feature-icon"><Icon name="users" /></div><h3>Relación cercana</h3><p>La atención directa y el conocimiento de los vecinos son parte importante de su vínculo con la comunidad.</p><span className="feature-tag">ADN DE MARCA</span></article>
              <article className="feature-card feature-cream"><div className="feature-number">02</div><div className="feature-icon"><span className="emoji-icon">🤝</span></div><h3>Confianza cotidiana</h3><p>La tienda fía a personas conocidas del barrio, una práctica que refleja una relación de confianza con algunos clientes.</p><span className="feature-tag">DIFERENCIAL</span></article>
              <article className="feature-card feature-peach"><div className="feature-number">03</div><div className="feature-icon"><span className="emoji-icon">＋</span></div><h3>Servicios adicionales</h3><p>Además de vender productos de uso diario, ofrece servicios como el retiro de dinero.</p><span className="feature-tag">OPORTUNIDAD</span></article>
            </div>
            <div className="audience-panel">
              <div className="audience-icon"><Icon name="users" /></div>
              <div><span className="small-label">PÚBLICO PRINCIPAL</span><h3>Personas y familias del sector</h3><p>Vecinos que compran productos cotidianos y valoran la cercanía, la facilidad y una atención de confianza.</p></div>
              <div className="audience-pill">Comunidad local</div>
            </div>
          </div>
        </section>

        <section className="section diagnosis-section section-anchor" id="diagnostico">
          <div className="container">
            <div className="section-heading">
              <div><div className="eyebrow dark"><span className="eyebrow-dot"></span> 02 / DIAGNÓSTICO</div><h2>Hay algo valioso.<br /><em>Hagámoslo visible.</em></h2></div>
              <p className="section-description">La oportunidad no es cambiar la esencia de la tienda, sino comunicar de forma más clara sus productos, servicios y atención cercana.</p>
            </div>
            <div className="diagnosis-grid">
              <div className="diagnosis-main">
                <div className="diagnosis-label"><span className="status-dot"></span> OPORTUNIDAD PRIORITARIA</div>
                <h3>Que los clientes conozcan todo lo que pueden encontrar en Tienda Peralonzo.</h3>
                <p>Algunas personas podrían conocer principalmente la venta de productos y no identificar todos los servicios adicionales. La campaña propone mejorar esa visibilidad con mensajes sencillos y fáciles de encontrar.</p>
                <div className="diagnosis-bottom"><span>PROBLEMA DE COMUNICACIÓN</span><span className="arrow-round"><Icon name="arrow" /></span></div>
              </div>
              <div className="competitor-card">
                <div className="competitor-icon">↔</div><span className="small-label">ENTORNO COMPETITIVO</span><h3>Una alternativa en el mismo sector</h3>
                <p>Se identifica una tienda competidora en el barrio. Según la información disponible, su propietario se comunica poco con los clientes.</p>
                <div className="differentiator"><span className="differentiator-mark">✳</span><span><strong>Oportunidad para Peralonzo</strong><small>Destacar la atención cercana, la confianza y la información clara sobre sus servicios.</small></span></div>
              </div>
            </div>
            <div className="objective-banner">
              <div className="objective-icon"><Icon name="check" /></div>
              <div><span className="small-label">OBJETIVO DE COMUNICACIÓN</span><h3>Fortalecer el reconocimiento de la tienda en cuatro semanas.</h3><p>Comunicar sus productos, servicios y atención cercana para motivar a más vecinos a tenerla presente cuando necesiten comprar o utilizar un servicio.</p></div>
              <div className="objective-time"><strong>4</strong><span>semanas</span></div>
            </div>
          </div>
        </section>

        <section className="section strategy-section section-anchor" id="estrategia">
          <div className="container">
            <div className="section-heading">
              <div><div className="eyebrow dark"><span className="eyebrow-dot"></span> 03 / ESTRATEGIA</div><h2>Una comunicación<br /><em>simple y cercana.</em></h2></div>
              <p className="section-description">La propuesta usa mensajes directos y económicos para informar a los vecinos, recordar los servicios y reforzar la confianza que ya existe.</p>
            </div>
            <div className="message-card">
              <div className="message-top"><span className="small-label">MENSAJE CENTRAL</span><span className="message-quote">“</span></div>
              <blockquote>En Tienda Peralonzo encuentras lo que necesitas, servicios útiles y una atención cercana basada en la confianza con los vecinos.</blockquote>
              <div className="message-footer"><span>TONO DE MARCA</span><div className="tone-tags"><span>Cercano</span><span>Amable</span><span>Claro</span><span>Confiable</span></div></div>
            </div>
            <div className="strategy-cards">
              <article className="strategy-card"><div className="strategy-card-top"><span className="strategy-icon"><Icon name="megaphone" /></span><span className="strategy-index">A</span></div><h3>Hacer visible</h3><p>Ubicar afiches y avisos que muestren los productos, promociones y servicios que ofrece la tienda.</p><span className="strategy-result">Resultado esperado: más información a la vista</span></article>
              <article className="strategy-card"><div className="strategy-card-top"><span className="strategy-icon"><span className="emoji-icon">💬</span></span><span className="strategy-index">B</span></div><h3>Informar directamente</h3><p>Contar a los clientes sobre los servicios adicionales durante la atención y, si está disponible, por WhatsApp.</p><span className="strategy-result">Resultado esperado: mayor conocimiento</span></article>
              <article className="strategy-card"><div className="strategy-card-top"><span className="strategy-icon"><Icon name="heart" /></span><span className="strategy-index">C</span></div><h3>Reforzar la confianza</h3><p>Mantener un lenguaje respetuoso, cálido y sencillo, sin prometer beneficios que no se puedan cumplir.</p><span className="strategy-result">Resultado esperado: vínculo más fuerte</span></article>
            </div>
          </div>
        </section>

        <section className="section plan-section section-anchor" id="plan">
          <div className="container">
            <div className="section-heading">
              <div><div className="eyebrow dark"><span className="eyebrow-dot"></span> 04 / PLAN DE ACCIÓN</div><h2>Cuatro semanas,<br /><em>tres momentos.</em></h2></div>
              <p className="section-description">El cronograma organiza la campaña desde la preparación de los mensajes hasta la revisión de la respuesta de los clientes.</p>
            </div>
            <div className="timeline">
              <article className="timeline-item"><div className="timeline-marker"><span>01</span></div><div className="timeline-content"><div className="timeline-meta"><span>SEMANA 1</span><span className="timeline-status">Preparación</span></div><h3>Definir qué vamos a comunicar</h3><p>Revisar con el propietario los productos y servicios que se van a destacar, preparar los mensajes y diseñar los avisos.</p><div className="timeline-tags"><span>Lista de servicios</span><span>Diseño de avisos</span></div></div></article>
              <article className="timeline-item"><div className="timeline-marker"><span>02</span></div><div className="timeline-content"><div className="timeline-meta"><span>SEMANAS 2 Y 3</span><span className="timeline-status">Difusión</span></div><h3>Poner la información a la vista</h3><p>Ubicar los afiches, repartir volantes y contar a los clientes sobre los servicios adicionales. Compartir información digital si se cuenta con WhatsApp.</p><div className="timeline-tags"><span>Afiches</span><span>Volantes</span><span>Atención directa</span></div></div></article>
              <article className="timeline-item"><div className="timeline-marker"><span>03</span></div><div className="timeline-content"><div className="timeline-meta"><span>SEMANA 4</span><span className="timeline-status">Evaluación</span></div><h3>Escuchar y ajustar</h3><p>Preguntar a algunos clientes si conocían los servicios, observar qué información llama más la atención y ajustar los mensajes si es necesario.</p><div className="timeline-tags"><span>Opiniones</span><span>Observación</span><span>Mejoras</span></div></div></article>
            </div>
            <div className="frequency-note"><Icon name="calendar" /><p><strong>Frecuencia propuesta:</strong> mantener los avisos visibles, revisar su estado cada semana y compartir novedades cuando haya información confirmada.</p></div>
          </div>
        </section>

        <section className="budget-section section-anchor" id="presupuesto">
          <div className="container budget-layout">
            <div className="budget-copy">
              <div className="eyebrow light"><span className="eyebrow-dot"></span> 05 / RECURSOS</div>
              <h2>Una campaña<br />de bajo costo.</h2>
              <p>El presupuesto es una estimación académica para mostrar cómo podría ejecutarse la propuesta con materiales sencillos y herramientas gratuitas.</p>
              <div className="budget-total"><span>INVERSIÓN ESTIMADA</span><strong>{money(total)}</strong><small>Pesos colombianos · 4 semanas</small></div>
              <div className="budget-disclaimer">Los precios son supuestos y deben verificarse antes de ejecutar la campaña.</div>
            </div>
            <div className="budget-table-wrap">
              <div className="budget-table-heading"><div><span className="small-label">DESGLOSE DE RECURSOS</span><h3>¿En qué se invertiría?</h3></div><span className="budget-badge">Estimado</span></div>
              <div className="budget-table">
                <div className="budget-row budget-row-head"><span>Elemento</span><span>Valor</span></div>
                {(showAllBudget ? budget : budget.slice(0, 5)).map(item => (
                  <div className="budget-row" key={item.item}><div><strong>{item.item}</strong><small>{item.quantity}</small></div><strong>{money(item.price)}</strong></div>
                ))}
              </div>
              <button className="show-budget" onClick={() => setShowAllBudget(!showAllBudget)}>{showAllBudget ? 'Mostrar menos' : 'Ver todos los recursos'} <span>{showAllBudget ? '−' : '+'}</span></button>
              <div className="budget-footnote"><span>✓</span> Canva y el tiempo del propietario se consideran recursos propios sin costo adicional.</div>
            </div>
          </div>
        </section>

        <section className="section closing-section">
          <div className="container closing-card">
            <div className="closing-decoration">✳</div>
            <div className="eyebrow dark"><span className="eyebrow-dot"></span> EN RESUMEN</div>
            <h2>Más visible.<br /><em>Siempre cercana.</em></h2>
            <p>La propuesta aprovecha la cercanía de Tienda Peralonzo con los vecinos y plantea acciones sencillas para comunicar mejor sus productos y servicios, con una inversión estimada y un plan de cuatro semanas.</p>
            <div className="closing-points"><span><Icon name="check" /> Público: vecinos del sector</span><span><Icon name="check" /> Duración: 4 semanas</span><span><Icon name="check" /> Presupuesto: $56.000 COP</span></div>
            <button className="button button-primary" onClick={() => navigate('inicio')}>Volver al inicio <Icon name="arrow" /></button>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-inner"><div className="footer-brand"><span className="brand-mark">P<span>.</span></span><span><strong>Tienda Peralonzo</strong><small>Propuesta de comunicación comercial</small></span></div><p>Proyecto académico · SENA · Ficha 3410659</p><button onClick={() => window.print()} className="print-button">Imprimir / guardar en PDF ↗</button></div>
        <div className="container footer-note">Nota: los mensajes, acciones y valores de campaña son una propuesta. Confirmar con el propietario los servicios, precios y canales disponibles antes de publicar.</div>
      </footer>
    </div>
  )
}

export default App
