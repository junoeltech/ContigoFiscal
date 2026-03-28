import React, { useState, useEffect } from "react";
import styles from "../styles/hero.module.css";

// Importamos tus ilustraciones
import calcImg from "../../../assets/Calculator.svg";
import compImg from "../../../assets/Completed.svg";
import consImg from "../../../assets/Consulting.svg";
import doneImg from "../../../assets/Done.svg";
import fileImg from "../../../assets/File searching.svg";
import recImg from "../../../assets/Receipt.svg";

export default function Hero({ onOpenChat }) {
  const illustrations = [calcImg, fileImg, consImg, recImg, doneImg, compImg];

  // Estado para saber qué imagen estamos mostrando actualmente
  const [currentIndex, setCurrentIndex] = useState(0);

  // Temporizador: Cambia la imagen cada 4 segundos
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % illustrations.length);
    }, 4000); // 4000 ms = 4 segundos

    return () => clearInterval(timer); // Limpiamos el temporizador si el componente se desmonta
  }, [illustrations.length]);

  return (
    <section id="start" className={styles.heroSection}>
      <div className={styles.decorationCircle} />

      <div className={styles.container}>
        {/* LADO IZQUIERDO: Textos y Botones (Intacto) */}
        <div className="space-y-8">
          <div className={styles.badge}>
            <span className={styles.ping}>
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            Asesoría Disponible 2026
          </div>

          <h2 className={styles.title}>
            Tu tranquilidad ante el{" "}
            <span className={styles.satHighlight}>SAT</span> comienza aquí.
          </h2>

          <p className={styles.description}>
            Asesoría fiscal clara, cercana y confiable. Nos encargamos de tus
            obligaciones para que tú te encargues de tu negocio.
          </p>

          <div className={styles.buttonGroup}>
            <button
              className={`${styles.primaryBtn} ${styles.ctaButton}`}
              onClick={onOpenChat}
            >
              Agenda una consulta
            </button>
            <a href="#services">
              <button className={styles.secondaryBtn}>Ver servicios</button>
            </a>
          </div>

          <div className="pt-6 border-t border-white/10 flex flex-wrap gap-x-6 gap-y-2 text-sm text-blue-100/60">
            <span className="flex items-center gap-2">✓ Declaraciones</span>
            <span className="flex items-center gap-2">✓ Asesorias</span>
            <span className="flex items-center gap-2">✓ Tramites</span>
            <span className="flex items-center gap-2">✓ Contabilidad</span>
            <span className="flex items-center gap-2">✓ Regularización</span>
          </div>
        </div>

        <div className={styles.slideshowWrapper}>
          <img
            key={currentIndex}
            src={illustrations[currentIndex]}
            alt="Ilustración Contigo Fiscal"
            className={styles.slideshowImage}
          />

          <div className={styles.dotsContainer}>
            {illustrations.map((_, idx) => (
              <div
                key={idx}
                className={`${styles.dot} ${idx === currentIndex ? styles.activeDot : ""}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
