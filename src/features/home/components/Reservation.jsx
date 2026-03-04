import React from 'react'
import styles from '../styles/reservation.module.css'

export default function ReservationSection(){
  return (
    <section className={styles.reservation}>
      <h3>Servicios</h3>
      <div className={styles.grid}>
        <article className={styles.card}>
          <div className={styles.icon} />
          <h4>Declaraciones de impuestos</h4>
          <p>Mensuales y anuales. Revisión y corrección.</p>
        </article>
        <article className={styles.card}>
          <div className={styles.icon} />
          <h4>Asesoría fiscal personalizada</h4>
          <p>Planeación fiscal, aclaraciones y apoyo ante el SAT.</p>
        </article>
        <article className={styles.card}>
          <div className={styles.icon} />
          <h4>Trámites ante el SAT</h4>
          <p>RFC, e.firma y atención a requerimientos.</p>
        </article>
      </div>
    </section>
  )
}