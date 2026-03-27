import React from "react";
import styles from "../styles/services.module.css";

const ServiceModal = ({ service, onClose }) => {
  if (!service) return null;

  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeBtn} onClick={onClose}>
          &times;
        </button>

        <h2 className={styles.modalTitle}>{service.title}</h2>
        <p className={styles.modalIntro}>{service.description}</p>

        <div className={styles.gridInfo}>
          <div className={styles.modalCol}>
            <h4>🔎 Alcance del Servicio</h4>
            <ul className={styles.modalList}>
              {service.scope.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>

          <div className={styles.modalCol}>
            <h4>📌 Beneficios</h4>
            <ul className={styles.modalList}>
              {service.benefits.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>

            <div className={styles.docsBox}>
              <h4>📂 Documentos necesarios</h4>
              <p>{service.docs[0]}</p>
              <p>{service.docs[1]}</p>
              <p>{service.docs[2]}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceModal;
