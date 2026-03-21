import React from "react";
import styles from "../styles/services.module.css";

export default function Services() {
  return (
    <section id="services" className={styles.servicesSection}>
      <div className={styles.header}>
        <div className={styles.titleWrapper}>
          <span className={styles.badge}>Nuestros Servicios</span>
          <h3 className={styles.mainTitle}>
            Soluciones integrales para tu salud fiscal
          </h3>
          <p className={styles.description}>
            En{" "}
            <span className="font-semibold text-gray-800">Contigo Fiscal</span>{" "}
            personalizamos nuestra asesoría para que cumplas con el SAT de forma
            correcta y sin complicaciones.
          </p>
        </div>
        <button className={styles.catalogBtn}>Descargar catálogo</button>
      </div>

      <div className={styles.grid}>
        {/* Card 1: Declaraciones */}
        <article className={styles.card}>
          <div className={styles.iconBox}>
            <svg
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
              <polyline points="14 2 14 8 20 8" />
              <line x1="16" y1="13" x2="8" y2="13" />
              <line x1="16" y1="17" x2="8" y2="17" />
              <polyline points="10 9 9 9 8 9" />
            </svg>
          </div>
          <h4 className={styles.cardTitle}>
            Declaraciones Anuales y Mensuales
          </h4>
          <p className={styles.cardText}>
            Especialistas en RESICO, honorarios y arrendamiento. Garantizamos el
            cálculo exacto para evitar requerimientos.
          </p>
          <div className={styles.tagGroup}>
            <span className={styles.tag}>Personas Físicas</span>
            <span className={styles.tag}>RESICO</span>
          </div>
        </article>

        {/* Card 2: Asesoría */}
        <article className={styles.card}>
          <div className={styles.iconBox}>
            <svg
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 1 1-7.6-11.7 8.38 8.38 0 0 1 3.8.9L21 3z" />
            </svg>
          </div>
          <h4 className={styles.cardTitle}>Planeación Fiscal</h4>
          <p className={styles.cardText}>
            Orientación estratégica para optimizar tu carga tributaria
            legalmente y evitar multas innecesarias.
          </p>
        </article>

        {/* Card 3: Trámites */}
        <article className={styles.card}>
          <div className={styles.iconBox}>
            <svg
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
              <path d="M7 11V7a5 5 0 0 1 10 0v4" />
            </svg>
          </div>
          <h4 className={styles.cardTitle}>Trámites y e.firma</h4>
          <p className={styles.cardText}>
            Renovación de firmas, actualización de RFC y atención de
            requerimientos directos de la autoridad.
          </p>
        </article>

        {/* Card 4: Regularización (Especial) */}
        <article className={styles.specialCard}>
          <div className={styles.specialContent}>
            <div className="flex-1">
              <h4 className="text-2xl font-bold text-white">
                ¿Tienes adeudos o años sin declarar?
              </h4>
              <p className="mt-2 text-blue-100/80">
                Nuestro servicio de regularización pone al día tu situación
                fiscal rápidamente, negociando actualizaciones y recargos.
              </p>
              <button className={styles.specialBtn}>
                Solicitar Regularización
              </button>
            </div>
            <div className="hidden md:flex w-32 h-32 bg-white/10 rounded-full items-center justify-center border border-white/20">
              <svg
                width="48"
                height="48"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="1.5"
              >
                <path
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  strokeLinecap="round"
                />
              </svg>
            </div>
          </div>
        </article>

        {/* Card 5: Contabilidad */}
        <article className={styles.card}>
          <h4 className={styles.cardTitle}>Contabilidad Mensual</h4>
          <p className={styles.cardText}>
            Registro sistemático de tus ingresos y gastos con conciliación
            bancaria para que siempre tengas el control.
          </p>
          <div className="mt-6 h-1 bg-gray-100 rounded-full overflow-hidden">
            <div
              className="h-full bg-orange-400"
              style={{ width: "66%" }}
            ></div>
          </div>
        </article>
      </div>
    </section>
  );
}
