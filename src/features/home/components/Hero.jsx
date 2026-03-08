import React from "react";
import styles from "../styles/hero.module.css";

export default function Hero() {
  return (
    <section className={styles.heroSection}>
      <div className={styles.decorationCircle} />

      <div className={styles.container}>
        <div className="space-y-8">
          {/* Badge */}
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
            <button className={styles.primaryBtn}>Agenda una consulta</button>
            <button className={styles.secondaryBtn}>Ver servicios</button>
          </div>

          {/* Quick Services */}
          <div className="pt-6 border-t border-white/10 flex flex-wrap gap-x-6 gap-y-2 text-sm text-blue-100/60">
            <span className="flex items-center gap-2">✓ Declaraciones</span>
            <span className="flex items-center gap-2">✓ Contabilidad</span>
            <span className="flex items-center gap-2">✓ Regularización</span>
          </div>
        </div>

        {/* Visual Mockup */}
        <div className={styles.mockupWrapper}>
          <div className={styles.mockupCard}>
            <div className="space-y-4">
              <div className="h-4 w-1/3 bg-white/20 rounded-full" />
              <div className="grid grid-cols-3 gap-4">
                <div className="h-20 bg-white/10 rounded-2xl" />
                <div className="h-20 bg-white/10 rounded-2xl" />
                <div className="h-20 bg-white/10 rounded-2xl" />
              </div>
              <div className="h-32 bg-linear-to-br from-orange-400/20 to-orange-400/5 rounded-2xl border border-orange-400/20 flex items-center justify-center">
                <span className="text-orange-300 font-bold">
                  Resumen Fiscal Anual
                </span>
              </div>
            </div>
          </div>
          <div className="absolute -inset-4 bg-orange-500/20 blur-2xl rounded-full" />
        </div>
      </div>
    </section>
  );
}
