import styles from "../styles/ToastNotification.module.css";

function ToastNotification({ type = "success", message, onClose }) {
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

export default ToastNotification;
