import Image from 'next/image'
import styles from './page.module.css'

const highlights = [
  {
    label: 'Acelera go-to-market',
    value: '4-6 semanas',
  },
  {
    label: 'Satisfaccion promedio',
    value: '98%',
  },
  {
    label: 'Proyectos entregados',
    value: '+150',
  },
]

const capabilities = [
  {
    title: 'Web de alto rendimiento',
    body: 'Sitios y plataformas con Core Web Vitals cuidados para convertir desde el primer scroll.',
    tag: 'Performance',
  },
  {
    title: 'Producto digital end-to-end',
    body: 'Desde discovery y UX hasta desarrollo y lanzamiento con backlog priorizado por negocio.',
    tag: 'Product',
  },
  {
    title: 'Automatizacion e IA aplicada',
    body: 'Flujos de ventas, operaciones y soporte que ahorran tiempo y mejoran trazabilidad.',
    tag: 'Automation',
  },
  {
    title: 'Escalado y soporte continuo',
    body: 'Monitoreo, mantenimiento evolutivo y mejoras con foco en resultados medibles.',
    tag: 'Growth',
  },
]

const process = [
  {
    step: 'Discovery',
    title: 'Descubrimiento',
    body: 'Alineamos objetivos, usuarios y KPIs para definir la mejor estrategia de producto.',
  },
  {
    step: 'Design + Build',
    title: 'Diseno y construccion',
    body: 'Creamos prototipos, validamos rapido y desarrollamos en sprints con feedback semanal.',
  },
  {
    step: 'Launch + Iterate',
    title: 'Lanzamiento y mejora',
    body: 'Publicamos, medimos impacto y optimizamos conversion con mejoras continuas.',
  },
]

const projects = [
  {
    name: 'Plataforma B2B de cotizacion',
    result: '+41% leads calificados',
    detail: 'Nuevo funnel, segmentacion de formularios y automatizacion comercial.',
  },
  {
    name: 'E-commerce de tickets premium',
    result: '+33% checkout completado',
    detail: 'Rediseno UX en pasos criticos y reduccion de friccion en mobile.',
  },
  {
    name: 'SaaS interno para operaciones',
    result: '-52% tiempo operativo',
    detail: 'Panel unificado de datos, alertas y tareas automatizadas por prioridad.',
  },
]

const testimonials = [
  {
    company: 'Fintech regional',
    quote: 'Nos dieron estructura, velocidad y criterio de producto en semanas.',
    score: '5.0',
  },
  {
    company: 'Travel scale-up',
    quote: 'No solo entregaron disenio. Mejoraron conversion y claridad comercial.',
    score: '4.9',
  },
  {
    company: 'Servicios financieros',
    quote: 'Una combinacion rara: profundidad tecnica con sensibilidad de negocio.',
    score: '5.0',
  },
]

export default function Home() {
  return (
    <main className={styles.main}>
      <header className={styles.header}>
        <nav className={styles.nav}>
          <a href="#inicio" className={styles.logoContainer}>
            <Image
              src="/assets/logos/perro-verde-icon.png"
              alt="Perro Verde"
              width={42}
              height={42}
              className={styles.logoImg}
            />
            <span className={styles.logoText}>PERRO VERDE</span>
          </a>
          <ul className={styles.navLinks}>
            <li><a href="#capacidades">Capacidades</a></li>
            <li><a href="#proceso">Proceso</a></li>
            <li><a href="#casos">Casos</a></li>
            <li><a href="#faq">FAQ</a></li>
          </ul>
          <a href="#contacto" className={styles.navCta}>Agendar llamada</a>
        </nav>
      </header>

      <section id="inicio" className={styles.hero}>
        <div className={styles.heroTop}>
          <div className={styles.heroCopy}>
            <p className={styles.kicker}>Design + Code + Business</p>
            <h1>Creamos productos digitales que hacen crecer tu negocio, sin complicarte.</h1>
            <p className={styles.heroLead}>
              Somos una empresa de sistemas cercana y resolutiva. Disenamos y desarrollamos
              sitios, plataformas y automatizaciones para que avances rapido y con claridad.
            </p>
            <div className={styles.heroActions}>
              <a href="#contacto" className={styles.btnPrimary}>Empezar proyecto</a>
              <a href="#casos" className={styles.btnSecondary}>Ver casos reales</a>
            </div>
          </div>
          <div className={styles.heroPanel}>
            <div className={styles.heroPanelGlow} />
            <div className={styles.heroPanelCard}>
              <p>Impacto promedio en 90 dias</p>
              <strong>+38% conversion</strong>
              <span>Con una mezcla simple: UX claro, velocidad tecnica y enfoque comercial</span>
            </div>
          </div>
        </div>
        <div className={styles.trustStrip}>
          {highlights.map((item) => (
            <article key={item.label} className={styles.trustItem}>
              <strong>{item.value}</strong>
              <span>{item.label}</span>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.capabilities} id="capacidades">
        <div className={styles.sectionHead}>
          <p>Capacidades</p>
          <h2>Un stack completo para construir productos digitales modernos</h2>
        </div>
        <div className={styles.bentoGrid}>
          {capabilities.map((item) => (
            <article key={item.title} className={styles.bentoCard}>
              <span>{item.tag}</span>
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="proceso" className={styles.process}>
        <div className={styles.sectionHead}>
          <p>Proceso</p>
          <h2>Trabajamos en ciclos cortos con visibilidad total</h2>
        </div>
        <div className={styles.processGrid}>
          {process.map((item) => (
            <article key={item.step} className={styles.processCard}>
              <span>{item.step}</span>
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.projects} id="casos">
        <div className={styles.sectionHead}>
          <p>Casos destacados</p>
          <h2>Resultados concretos en productos, e-commerce y operaciones</h2>
        </div>
        <div className={styles.projectsGrid}>
          {projects.map((item) => (
            <article key={item.name} className={styles.projectCard}>
              <h3>{item.name}</h3>
              <strong>{item.result}</strong>
              <p>{item.detail}</p>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.testimonials}>
        <div className={styles.sectionHead}>
          <p>Clientes</p>
          <h2>Lo que dicen quienes trabajaron con nosotros</h2>
        </div>
        <div className={styles.testimonialGrid}>
          {testimonials.map((item) => (
            <article key={item.quote} className={styles.testimonialCard}>
              <div>
                <strong>{item.score}</strong>
                <span>/ 5.0</span>
              </div>
              <p>&quot;{item.quote}&quot;</p>
              <small>{item.company}</small>
            </article>
          ))}
        </div>
      </section>

      <section id="faq" className={styles.faq}>
        <div className={styles.sectionHeader}>
          <p>FAQ</p>
          <h2>Preguntas frecuentes antes de empezar</h2>
        </div>
        <div className={styles.faqList}>
          <details>
            <summary>Cuanto tarda una landing completa?</summary>
            <p>Entre 2 y 5 semanas segun complejidad, integraciones y cantidad de iteraciones.</p>
          </details>
          <details>
            <summary>Pueden mejorar una landing que ya existe?</summary>
            <p>Si. Hacemos auditoria, rediseno y optimizacion tecnica sin rehacer todo de cero.</p>
          </details>
          <details>
            <summary>Trabajan con equipo interno del cliente?</summary>
            <p>Si. Nos integramos con marketing y ventas para alinear mensaje, UX y conversion.</p>
          </details>
        </div>
      </section>

      <section className={styles.cta} id="contacto">
        <div className={styles.ctaContent}>
          <h2>Si tu negocio esta listo para crecer, nosotros para construirlo</h2>
          <p>
            Contanos tu objetivo y en 24 horas te devolvemos un plan de accion con alcance y tiempos.
          </p>
          <div className={styles.ctaActions}>
            <a href="mailto:hola@perroverde.com" className={styles.btnWhite}>hola@perroverde.com</a>
            <a href="https://wa.me/59800000000" className={styles.btnGhost}>WhatsApp</a>
          </div>
        </div>
      </section>

      <footer className={styles.footer}>
        <p>© 2026 Perro Verde - Montevideo, Uruguay</p>
        <p>Tu companero digital para construir software que vende.</p>
      </footer>
    </main>
  )
}
