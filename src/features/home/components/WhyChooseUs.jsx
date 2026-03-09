import React from "react";
import styles from "../styles/whychooseus.module.css";

export default function WhyChooseUs() {
  const benefits = [
    {
      title: "Claridad Absoluta",
      desc: "Explicamos cada paso sin tecnicismos complejos.",
      icon: "M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
    },
    {
      title: "Blindaje Fiscal",
      desc: "Estrategias preventivas para evitar multas y recargos.",
      icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
    },
    {
      title: "Experiencia Real",
      desc: "Especialistas en Personas Físicas, Morales y RESICO.",
      icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4",
    },
  ];

  const steps = [
    {
      step: "01",
      title: "Diagnóstico Inicial",
      desc: "Analizamos tu situación actual sin costo.",
    },
    {
      step: "02",
      title: "Recolección Digital",
      desc: "Subes tus documentos a nuestra plataforma segura.",
    },
    {
      step: "03",
      title: "Ejecución Experta",
      desc: "Nosotros nos encargamos de toda la contabilidad.",
    },
    {
      step: "04",
      title: "Resultados y Paz",
      desc: "Recibes tu acuse y duermes tranquilo.",
    },
  ];

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {/* Columna Izquierda: Valores */}
        <div className="space-y-8">
          <div>
            <span className={styles.badge}>Diferencial</span>
            <h3 className={styles.title}>
              ¿Por qué confiar en <br />
              <span style={{ color: "var(--brand-primary)" }}>
                Contigo Fiscal
              </span>
              ?
            </h3>
            <p className="mt-4 text-gray-600 text-lg">
              No solo hacemos números; traducimos el lenguaje del SAT para que
              tomes decisiones informadas.
            </p>
          </div>

          <div className="grid gap-6">
            {benefits.map((item, index) => (
              <div
                key={index}
                className="flex gap-4 p-4 rounded-xl hover:bg-gray-50 transition-colors group"
              >
                <div
                  className={styles.benefitIconBox + " group-hover:scale-110"}
                >
                  <svg
                    className="w-6 h-6"
                    style={{ color: "var(--brand-primary)" }}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d={item.icon}
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">{item.title}</h4>
                  <p className="text-sm text-gray-600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Columna Derecha: Proceso */}
        <div className={styles.processCard}>
          <div className="absolute -top-10 -right-10 w-32 h-32 bg-orange-100/50 rounded-full blur-3xl -z-10" />

          <h4 className="text-2xl font-black text-gray-900 mb-8 flex items-center gap-3">
            <span className="w-8 h-1 bg-orange-400 rounded-full" />
            Proceso Sencillo
          </h4>

          <div className="space-y-8 relative">
            <div className={styles.stepLine} />
            {steps.map((item, index) => (
              <div key={index} className="relative pl-12 group">
                <div
                  className={
                    styles.stepCircle +
                    " group-hover:border-blue-500 group-hover:text-blue-500"
                  }
                >
                  {item.step}
                </div>
                <h5 className="font-bold text-gray-900 transition-colors group-hover:text-blue-600">
                  {item.title}
                </h5>
                <p className="text-sm text-gray-500 mt-1">{item.desc}</p>
              </div>
            ))}
          </div>

          <button className={styles.submitBtn}>
            Empezar mi diagnóstico hoy
          </button>
        </div>
      </div>
    </section>
  );
}
