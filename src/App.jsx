import React from "react";

function ContactButton({ href, children, ariaLabel, ...props }) {
  return (
    <a className="contact-btn" href={href} aria-label={ariaLabel} {...props}>
      {children}
    </a>
  );
}

export default function App() {
  return (
    <div className="page">
      <header className="hero" role="banner">
        <div className="container">
          <h1 className="name">Juan Pérez</h1>
          <p className="role">Backend developer</p>
          <p className="lead">
            Desarrollo de APIs y servicios backend usando Java, REST y GraphQL. Bases de datos NoSQL y buenas prácticas en control de versiones.
          </p>

          <nav className="hero-actions" aria-label="Contacto">
            <ContactButton href="mailto:juan.perez@gmail.com" ariaLabel="Enviar email a Juan">
              juan.perez@gmail.com
            </ContactButton>
            <ContactButton href="tel:+541122334456" ariaLabel="Llamar a Juan">
              11-2233-4456
            </ContactButton>
            <ContactButton href="https://www.linkedin.com/in/Juan.Perez" ariaLabel="LinkedIn de Juan" target="_blank" rel="noopener noreferrer">
              linkedin: Juan.Perez
            </ContactButton>
          </nav>
        </div>
      </header>

      <main className="container" role="main">
        <div className="main-grid">
          <div className="left-col">
            <section aria-labelledby="skills-heading" className="card">
              <h2 id="skills-heading">Conocimientos técnicos</h2>
              <ul className="skills-list" aria-label="Lista de conocimientos">
                <li>Java</li>
                <li>REST</li>
                <li>GraphQL</li>
                <li>MongoDB</li>
                <li>Git / GitHub</li>
              </ul>
            </section>

            <section aria-labelledby="education-heading" className="card">
              <h2 id="education-heading">Educación</h2>
              <ul className="education-list" aria-label="Cursos realizados">
                <li>Creating a microservice</li>
                <li>Java 21</li>
                <li>Scrum master</li>
              </ul>
            </section>
          </div>

          <div className="right-col">
            <section aria-labelledby="projects-heading" className="card">
              <h2 id="projects-heading">Proyectos</h2>
              <p className="muted">Aún no hay proyectos publicados. Aquí aparecerán los proyectos cuando estén listos.</p>
              <div className="projects-grid" aria-hidden="true">
                {/* Placeholder visual boxes */}
                <div className="project-placeholder">Próximo proyecto</div>
                <div className="project-placeholder">Próximo proyecto</div>
              </div>
            </section>
          </div>
        </div>
      </main>

      <footer className="site-footer" role="contentinfo">
        <div className="container">
          <p>© {new Date().getFullYear()} Juan Pérez — Backend developer</p>
        </div>
      </footer>
    </div>
  );
}
