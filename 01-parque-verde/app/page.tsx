import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <header className={styles.header}">
        <nav className={styles.nav}>
          <div className={styles.logoContainer}>
            <Image
              src="/assets/logos/perro-verde-real.png"
              alt="Perro Verde"
              width={50}
              height={50}
              className={styles.logoImg}
            />
            <span className={styles.logoText}>PERRO VERDE</span>
          </div>
          <ul className={styles.navLinks}>
            <li><a href="#servicios">Servicios</a></li>
            <li><a href="#contacto">Contacto</a></li>
          </ul>
        </nav>
      </header>

      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <div className={styles.heroText}>
            <h1>
              Tu compañero<br/>
              digital <span className={styles.highlight}>más leal</span>
            </h1>
            <p>
              Creamos software con la dedicación de un perro fiel 
              y la frescura del código más verde.
            </p>
            <div className={styles.ctaButtons}>
              <a href="#contacto" className={styles.btnPrimary}>
                ¡Ladremos juntos! 🎾
              </a>
              <a href="#servicios" className={styles.btnSecondary}>
                Ver servicios
              </a>
            </div>
          </div>
          
          <div className={styles.heroImage}>
            <Image
              src="/assets/logos/perro-verde-real.png"
              alt="Perro Verde Logo"
              width={450}
              height={450}
              className={styles.heroLogo}
            />
          </div>
        </div>
      </section>

      <section className={styles.services} id="servicios">
        <div className={styles.servicesGrid}>
          <div className={styles.serviceCard}>
            <span className={styles.serviceIcon}>🌐</span>
            <h3>Web & Mobile</h3>
            <p>Aplicaciones que corren tan rápido como un perro persiguiendo su juguete favorito.</p>
          </div>
          
          <div className={styles.serviceCard}>
            <span className={styles.serviceIcon}>🏢</span>
            <h3>Sistemas Empresariales</h3>
            <p>Software que organiza mejor que un border collie pastoreando ovejas.</p>
          </div>
          
          <div className={styles.serviceCard}>
            <span className={styles.serviceIcon}>🎨</span>
            <h3>Diseño UX/UI</h3>
            <p>Interfaces tan intuitivas que hasta el golden más distraído las entendería.</p>
          </div>
          
          <div className={styles.serviceCard}>
            <span className={styles.serviceIcon}>☁️</span>
            <h3>Cloud & DevOps</h3>
            <p>Infraestructura que nunca duerme, como un guardián de cuatro patas.</p>
          </div>
        </div>
      </section>

      <section className={styles.cta} id="contacto">
        <div className={styles.ctaContent}>
          <h2>¿Listos para jugar? 🎾</h2>
          <p>
            Ladramos de emoción por conocer tu proyecto.<br/>
            ¡Empecemos a crear algo increíble!
          </p>
          <a href="mailto:hola@perroverde.com" className={styles.btnWhite}>
            Hablemos: hola@perroverde.com
          </a>
        </div>
      </section>

      <footer className={styles.footer}>
        <p>© 2026 Perro Verde • Montevideo, Uruguay 🇺🇾</p>
        <p>Código con 💚 y muchas croquetas</p>
      </footer>
    </main>
  )
}
