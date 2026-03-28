import React, { useState } from "react";
import styles from "../styles/header.module.css";
import LogoSvg from "../../../assets/ContigoFiscal.svg";

export default function Header({ onOpenChat }) {
  // Estado para controlar si el menú está abierto o cerrado
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Función para alternar el menú
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Función para cerrar el menú al hacer clic en un link
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        {/* Logotipo */}
        <a href="/" className={styles.logoWrapper}>
          <div className={styles.logoBox}>
            <img
              src={LogoSvg}
              alt="Contigo Fiscal Logo"
              className={styles.mainLogo}
            />
          </div>
          <div className={styles.textWrapper}>
            <h1 className={styles.brandName}>
              Contigo <span>Fiscal</span>
            </h1>
            <p className={styles.tagline}>Asesoría clara y cercana</p>
          </div>
        </a>

        {/* Navegación Desktop */}
        <nav className={styles.nav}>
          <a href="#services" className={styles.navLink}>
            Servicios
          </a>
          <a href="#whychooseus" className={styles.navLink}>
            ¿Por qué nosotros?
          </a>
          <a href="#contact" className={styles.navLink}>
            Contacto
          </a>
          <button className={styles.ctaButton} onClick={onOpenChat}>
            Solicitar asesoría
          </button>
        </nav>

        {/* Botón Hamburguesa Dinámico */}
        <div className={styles.mobileActions}>
          <button
            className={styles.mobileMenuBtn}
            onClick={onOpenChat}
            aria-label="Abrir menú"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              className={styles.menuIcon}
            >
              {isMenuOpen ? (
                /* Icono de X (Cerrar) */
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                /* Icono de Hamburguesa (Abrir) */
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* MENÚ MÓVIL DESPLEGABLE */}
      {isMenuOpen && (
        <nav className={styles.mobileNav}>
          <a href="#services" className={styles.mobileLink} onClick={closeMenu}>
            Servicios
          </a>
          <a
            href="#whychooseus"
            className={styles.mobileLink}
            onClick={closeMenu}
          >
            ¿Por qué elegirnos?
          </a>
          <a href="#contact" className={styles.mobileLink} onClick={closeMenu}>
            Contacto
          </a>
          <button
            className={styles.mobileCta}
            onClick={() => {
              onOpenChat();
              closeMenu();
            }}
          >
            Solicitar asesoría
          </button>
        </nav>
      )}
    </header>
  );
}
