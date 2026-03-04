import React from 'react'
import styles from '../styles/hero.module.css'

export default function Hero(){
  return (
    <section className={styles.hero}>
      <div className={styles.inner}>
        <div className={styles.left}>
          <h2 className={styles.title}>Tu tranquilidad ante el SAT comienza aquí.</h2>
          <p className={styles.lead}>Asesoría fiscal clara, cercana y confiable para personas físicas y morales. Nos encargamos de que cumplas con tus obligaciones sin estrés.</p>
          <div className={styles.actions}>
            <button className={styles.ghost}>📌 Ver servicios</button>
            <button className={styles.primary}>💬 Agenda una consulta</button>
          </div>
          <div className={styles.note}><strong>Atención:</strong> Declaraciones, trámites, contabilidad y regularización fiscal.</div>
        </div>
        <div className={styles.visual}>
          {/* placeholder visual */}
          <div className={styles.card} />
        </div>
      </div>
    </section>
  )
}
