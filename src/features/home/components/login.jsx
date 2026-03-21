import React, { useState } from "react";
import styles from "../styles/login.module.css";

const Login = ({ onLogin }) => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [showPassword, setShowPassword] = useState(false); // Estado para mostrar/ocultar

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email === "admin@contigofiscal.com" && pass === "123456") {
      onLogin({ email, role: "admin" });
    } else {
      alert("Credenciales incorrectas");
    }
  };

  return (
    <div className={styles.loginContainer}>
      <div className={styles.loginCard}>
        <h2 className={styles.title}>Contigo Fiscal</h2>
        <p className={styles.subtitle}>Panel de Administración</p>

        <form className={styles.form} onSubmit={handleSubmit}>
          <input
            className={styles.input}
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Correo electrónico"
            autoComplete="username"
            required
          />

          {/* Contenedor relativo para el icono */}
          <div className={styles.passwordWrapper}>
            <input
              className={styles.input}
              // Alternamos el tipo de input según el estado
              type={showPassword ? "text" : "password"}
              value={pass}
              onChange={(e) => setPass(e.target.value)}
              placeholder="Contraseña"
              autoComplete="current-password"
              required
            />
            <button
              type="button"
              className={styles.eyeButton}
              onClick={() => setShowPassword(!showPassword)}
              tabIndex="-1" // Evita que el tabulador se detenga aquí
            >
              {showPassword ? "🙈" : "👁️"}
            </button>
          </div>

          <button className={styles.button} type="submit">
            Entrar al Dashboard
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
