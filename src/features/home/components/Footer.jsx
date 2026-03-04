import React from 'react'
import styles from '../styles/footer.module.css'

export default function Footer(){
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div>© {new Date().getFullYear()} Contigo Fiscal. Todos los derechos reservados.</div>
        <div>Política de privacidad · Aviso de privacidad</div>
      </div>
    </footer>
  )
}