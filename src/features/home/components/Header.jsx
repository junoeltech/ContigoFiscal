import React from 'react'
import styles from '../styles/header.module.css'

export default function Header(){
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.brand}>
          <div className={styles.logo}>CF</div>
          <div>
            <h1 className={styles.title}>Contigo Fiscal</h1>
            <p className={styles.subtitle}>Asesoría fiscal clara y cercana</p>
          </div>
        </div>
        <nav className={styles.nav}>
          <a className={styles.link}>Servicios</a>
          <a className={styles.link}>¿Por qué elegirnos?</a>
          <a className={styles.link}>Contacto</a>
          <button className={styles.cta}>Solicitar asesoría</button>
        </nav>
        <button className={styles.mobileMenu}>Menu</button>
      </div>
    </header>
  )
}