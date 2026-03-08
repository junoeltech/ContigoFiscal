import React from "react";
import styles from "../styles/footer.module.css";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.topGrid}>
          {/* Columna 1: Branding */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg flex items-center justify-center bg-(--brand-primary)">
                <span className="text-white font-bold text-sm">CF</span>
              </div>
              <span className="text-xl font-bold text-white tracking-tight">
                Contigo Fiscal
              </span>
            </div>
            <p className="text-sm leading-relaxed text-gray-400">
              Asesoría fiscal humana y profesional. Transformamos tus
              obligaciones en tranquilidad para que te enfoques en tu
              crecimiento.
            </p>
          </div>

          {/* Columna 2: Navegación */}
          <div>
            <h4 className={styles.columnTitle}>Navegación</h4>
            <ul className={styles.linkList}>
              <li className={styles.linkItem}>
                <a href="#" className={styles.link}>
                  Inicio
                </a>
              </li>
              <li className={styles.linkItem}>
                <a href="#servicios" className={styles.link}>
                  Servicios Fiscales
                </a>
              </li>
              <li className={styles.linkItem}>
                <a href="#nosotros" className={styles.link}>
                  ¿Por qué elegirnos?
                </a>
              </li>
              <li className={styles.linkItem}>
                <a href="#contacto" className={styles.link}>
                  Contacto
                </a>
              </li>
            </ul>
          </div>

          {/* Columna 3: Servicios */}
          <div>
            <h4 className={styles.columnTitle}>Servicios</h4>
            <ul className={styles.linkList}>
              <li className={styles.linkItem}>
                <a href="#" className={styles.link}>
                  Declaración Anual
                </a>
              </li>
              <li className={styles.linkItem}>
                <a href="#" className={styles.link}>
                  Régimen RESICO
                </a>
              </li>
              <li className={styles.linkItem}>
                <a href="#" className={styles.link}>
                  Trámites e.firma
                </a>
              </li>
              <li className={styles.linkItem}>
                <a href="#" className={styles.link}>
                  Contabilidad Mensual
                </a>
              </li>
            </ul>
          </div>

          {/* Columna 4: Newsletter */}
          <div>
            <h4 className={styles.columnTitle}>Mantente al día</h4>
            <p className="text-xs text-gray-500 mb-4 italic">
              Recibe actualizaciones sobre cambios en el SAT.
            </p>
            <div className={styles.newsletterWrapper}>
              <input className={styles.input} placeholder="Tu email" />
              <button className={styles.subscribeBtn}>
                <svg
                  className="w-4 h-4 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Barra Inferior */}
        <div className={styles.bottomBar}>
          <div className="flex flex-wrap justify-center gap-6">
            <p>
              © {currentYear} Contigo Fiscal. Todos los derechos reservados.
            </p>
            <p className="hidden md:block">|</p>
            <p>Hecho con precisión fiscal en México.</p>
          </div>
          <div className="flex gap-6 uppercase tracking-tighter font-bold">
            <a href="#" className={styles.link}>
              Aviso de Privacidad
            </a>
            <a href="#" className={styles.link}>
              Términos
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
