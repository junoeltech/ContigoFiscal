import { useEffect } from "react";
import styles from "../styles/GlobalToast.module.css";

function GlobalToast({ type = "success", message, onClose }) {
  // Auto-cierre en 5 segundos
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 5000);
    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div className={`${styles.toast} ${styles[type]}`}>
      <span className={styles.icon}>
        {type === "success" ? "✅" : "⚠️"}
      </span>
      <p>{message}</p>
      <button className={styles.closeBtn} onClick={onClose}>✖</button>
    </div>
  );
}

export default GlobalToast;
