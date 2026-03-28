import React from "react";
import styles from "../styles/contact.module.css";

export default function Contact() {
  return (
    <section id="contact" className={styles.section}>
      <div className={styles.grid}>
        {/* Contenido de Confianza (Sustituye al formulario) */}
        <div className={styles.trustContent}>
          <h3 className="text-4xl font-black text-gray-900 leading-tight">
            ¿Listo para poner tus{" "}
            <span style={{ color: "var(--brand-primary)" }}>
              impuestos en orden?
            </span>
          </h3>
          <p className="mt-6 text-xl text-gray-600">
            Simplificamos tu relación con el SAT para que tú te enfoques en
            crecer tu negocio. Elige el medio que prefieras y hablemos.
          </p>

          <ul className="mt-8 space-y-4">
            <li className="flex items-center gap-3 text-gray-700 font-medium">
              <span className="text-green-500">✔</span> Asesoría fiscal
              personalizada
            </li>
            <li className="flex items-center gap-3 text-gray-700 font-medium">
              <span className="text-green-500">✔</span> Respuesta en menos de 24
              horas
            </li>
            <li className="flex items-center gap-3 text-gray-700 font-medium">
              <span className="text-green-500">✔</span> Expertos en
              actualización fiscal 2026
            </li>
          </ul>
        </div>

        {/* Barra Lateral (Ahora como columna principal de contacto) */}
        <aside className={styles.sidebar}>
          <div className={styles.infoCard}>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-white/5 rounded-full" />
            <h4 className="text-xl font-bold mb-6 text-white">
              Contacto Directo
            </h4>

            <div className="space-y-6 text-white">
              <div className="flex items-start gap-4 group">
                <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center group-hover:bg-blue-500 transition-colors">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-gray-400 font-bold uppercase">
                    Escríbenos
                  </p>
                  <p className="text-sm font-medium">
                    contigofiscal@hotmail.com
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center group-hover:bg-blue-500 transition-colors">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-gray-400 font-bold uppercase">
                    Llámanos
                  </p>
                  <p className="text-sm font-medium">+52 247 121 2578</p>
                </div>
              </div>
            </div>

            <div className="mt-10">
              <a
                href="https://wa.me/522471212578"
                className={styles.whatsappBtn}
              >
                Chat vía WhatsApp
              </a>
            </div>
          </div>

          <div className={styles.hoursCard}>
            <h5 className="font-bold text-blue-900 mb-2">
              Horario de atención
            </h5>
            <p className="text-sm text-blue-700/80">
              Lunes a Viernes: 9:00 AM - 6:00 PM <br />
              Sábados: 10:00 AM - 2:00 PM
            </p>
          </div>
        </aside>
      </div>
    </section>
  );
}
