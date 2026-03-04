import React from 'react'
import styles from '../styles/contact.module.css'

export default function Contact(){
  return (
    <section className={styles.contact}>
      <div className={styles.container}>
        <div className={styles.formCard}>
          <h3>¿Listo para empezar?</h3>
          <p>Agenda una consulta y deja que te ayudemos a llevar tus obligaciones sin estrés.</p>
          <form onSubmit={(e)=>{e.preventDefault(); alert('Envío mock')}} className={styles.form}>
            <input className={styles.input} placeholder="Nombre completo" />
            <input className={styles.input} placeholder="Correo electrónico" />
            <input className={styles.input} placeholder="Teléfono / WhatsApp" />
            <textarea className={styles.textarea} rows={4} placeholder="Cuéntanos tu caso o pregunta"></textarea>
            <button className={styles.submit}>Enviar solicitud</button>
          </form>
        </div>
        <aside className={styles.aside}>
          <h4>Contacto rápido</h4>
          <p>Correo: contacto@contigofiscal.com</p>
          <p>Tel: +52 55 0000 0000</p>
          <a className={styles.whatsapp}>Agenda vía WhatsApp</a>
        </aside>
      </div>
    </section>
  )
}