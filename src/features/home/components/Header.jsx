import React from "react";
import styles from "../styles/header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        {/* Logotipo y Título */}
        <div className={styles.logoWrapper}>
          <div className={styles.logoBox}>
            <span className="text-white font-bold text-lg tracking-wider">
              CF
            </span>
          </div>
          <div className="flex flex-col">
            <h1 className={styles.brandName}>
              Contigo <span>Fiscal</span>
            </h1>
            <p className={styles.tagline}>Asesoría clara y cercana</p>
          </div>
        </div>

        {/* Navegación Desktop */}
        <nav className={styles.nav}>
          <a href="#servicios" className={styles.navLink}>
            Servicios
          </a>
          <a href="#nosotros" className={styles.navLink}>
            ¿Por qué elegirnos?
          </a>
          <a href="#contacto" className={styles.navLink}>
            Contacto
          </a>

          <button className={styles.ctaButton}>Solicitar asesoría</button>
        </nav>

        {/* Botón Móvil */}
        <div className="md:hidden">
          <button className={styles.mobileMenuBtn}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}
