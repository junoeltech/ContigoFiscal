import React, { useState } from "react";
import styles from "../styles/services.module.css";
import { SERVICES_DATA } from "../constants/servicesData";
import ServiceModal from "./ServiceModal";

export default function Services() {
  const [selectedService, setSelectedService] = useState(null);

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
        {/* <button className={styles.catalogBtn}>Descargar catálogo</button> */}
      </div>

      <div className={styles.grid}>
        {/* Tarjeta 1: Declaración */}
        <article
          className={styles.card}
          onClick={() => setSelectedService(SERVICES_DATA.declaraciones)}
        >
          <div className={`${styles.iconBox} ${styles.blueGrad}`}>
            <svg
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19 3H5C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3Z"
                stroke="currentColor"
                strokeWidth="1.5"
              />
              <path
                d="M7 7H17M7 12H17M7 17H13"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
              <circle
                cx="17"
                cy="17"
                r="3"
                fill="currentColor"
                fillOpacity="0.2"
              />
            </svg>
          </div>
          <h4 className={styles.cardTitle}>Declaración de impuestos</h4>
          <p className={styles.cardText}>
            Determinación, cálculo y presentación de obligaciones ante el SAT.
          </p>
          <button className={styles.cardAction} onClick={() => setSelectedService(SERVICES_DATA.declaraciones)}>
            Ver más →
          </button>
        </article>

        {/* Tarjeta 2: Asesoría */}
        <article
          className={styles.card}
          onClick={() => setSelectedService(SERVICES_DATA.asesoria)}
        >
          <div className={`${styles.iconBox} ${styles.goldGrad}`}>
            <svg
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 15L15 12M15 12L12 9M15 12H9"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                stroke="currentColor"
                strokeWidth="1.5"
              />
              <path
                d="M8 12C8 9.79086 9.79086 8 12 8"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                fill="currentColor"
                fillOpacity="0.1"
              />
            </svg>
          </div>
          <h4 className={styles.cardTitle}>Asesoría Personalizada</h4>
          <p className={styles.cardText}>
            Estrategias diseñadas para optimizar tu carga fiscal legalmente.
          </p>
          <button className={styles.cardAction} onClick={() => setSelectedService(SERVICES_DATA.asesoria)}>
            Ver más →
          </button>
        </article>

        {/* Tarjeta 3: Trámites */}
        <article
          className={styles.card}
          onClick={() => setSelectedService(SERVICES_DATA.tramites)}
        >
          <div className={`${styles.iconBox} ${styles.blueGrad}`}>
            <svg
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="3"
                y="6"
                width="18"
                height="15"
                rx="2"
                stroke="currentColor"
                strokeWidth="1.5"
              />
              <path
                d="M16 10V5C16 3.89543 15.1046 3 14 3H10C8.89543 3 8 3.89543 8 5V10"
                stroke="currentColor"
                strokeWidth="1.5"
              />
              <circle
                cx="12"
                cy="13"
                r="2"
                fill="currentColor"
                fillOpacity="0.2"
                stroke="currentColor"
                strokeWidth="1"
              />
            </svg>
          </div>
          <h4 className={styles.cardTitle}>Trámites SAT</h4>
          <p className={styles.cardText}>
            Gestión de e.firma, RFC y requerimientos sin complicaciones.
          </p>
          <button className={styles.cardAction} onClick={() => setSelectedService(SERVICES_DATA.tramites)}>
            Ver más →
          </button>
        </article>

        {/* Tarjeta 4: Contabilidad */}
        <article
          className={styles.card}
          onClick={() => setSelectedService(SERVICES_DATA.contabilidad)}
        >
          <div className={`${styles.iconBox} ${styles.goldGrad}`}>
            <svg
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M21 7V17C21 19.2091 18.7614 21 16 21H8C5.23858 21 3 19.2091 3 17V7"
                stroke="currentColor"
                strokeWidth="1.5"
              />
              <path
                d="M21 7C21 9.20914 18.7614 11 16 11H8C5.23858 11 3 9.20914 3 7C3 4.79086 5.23858 3 8 3H16C18.7614 3 21 4.79086 21 7Z"
                stroke="currentColor"
                strokeWidth="1.5"
              />
              <path
                d="M11 15H13"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
          </div>
          <h4 className={styles.cardTitle}>Contabilidad Integral</h4>
          <p className={styles.cardText}>
            Control y administración financiera para orden permanente.
          </p>
          <button className={styles.cardAction} onClick={() => setSelectedService(SERVICES_DATA.contabilidad)}>
            Ver más →
          </button>
        </article>

        {/* Tarjeta 5: Regularización */}
        <article
          className={styles.card}
          onClick={() => setSelectedService(SERVICES_DATA.regularizacion)}
        >
          <div className={`${styles.iconBox} ${styles.blueGrad}`}>
            <svg
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 22C12 22 20 18 20 12V5L12 2L4 5V12C4 18 12 22 12 22Z"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M9 12L11 14L15 10"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M12 22V2"
                stroke="currentColor"
                strokeWidth="0.5"
                strokeDasharray="2 2"
              />
            </svg>
          </div>
          <h4 className={styles.cardTitle}>Regularización Fiscal</h4>
          <p className={styles.cardText}>
            Corrección de atrasos y omisiones de forma estratégica.
          </p>
          <button className={styles.cardAction} onClick={() => setSelectedService(SERVICES_DATA.regularizacion)}>
            Ver más →
          </button>
        </article>
      </div>

      <ServiceModal
        service={selectedService}
        onClose={() => setSelectedService(null)}
      />
    </section>
  );
}
