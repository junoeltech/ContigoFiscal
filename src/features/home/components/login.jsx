import React, { useState } from "react";
import styles from "../styles/login.module.css";
import LogoImg from "../../../assets/contigofiscal_logo.png";

const Login = ({ onLogin }) => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState(false); // Estado para la animación de error

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email === "admin@contigofiscal.com" && pass === "123456") {
      onLogin({ email, role: "admin" });
    } else {
      setError(true);
      setTimeout(() => setError(false), 500); // Quitamos el error después de la animación
      alert("Acceso denegado: Credenciales no válidas");
    }
  };

  return (
    <div className={styles.loginPage}>
      {/* Fondo decorativo moderno */}
      <div className={styles.bgDecoration}></div>

      <div className={`${styles.loginCard} ${error ? styles.shake : ""}`}>
        <div className={styles.cardHeader}>
          <h2 className={styles.title}>Panel Administrativo</h2>
          <p className={styles.subtitle}>
            Gestiona tus prospectos con seguridad
          </p>
        </div>

        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.inputField}>
            <label>Usuario / Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="tu correo electronico"
              required
            />
          </div>

          <div className={styles.inputField}>
            <label>Contraseña</label>
            <div className={styles.passwordContainer}>
              <input
                type={showPassword ? "text" : "password"}
                value={pass}
                onChange={(e) => setPass(e.target.value)}
                placeholder="contraseña"
                required
              />
              <button
                type="button"
                className={styles.eyeBtn}
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path>
                    <line x1="1" y1="1" x2="23" y2="23"></line>
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                    <circle cx="12" cy="12" r="3"></circle>
                  </svg>
                )}
              </button>
            </div>
          </div>

          <button className={styles.submitBtn} type="submit">
            Ingresar ahora
          </button>
        </form>

        <footer className={styles.cardFooter}>
          <p>&copy; 2026 Contigo Fiscal. Acceso restringido.</p>
        </footer>
      </div>
    </div>
  );
};

export default Login;
