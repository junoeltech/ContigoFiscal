import React, { useState } from "react";
import styles from "../styles/login.module.css";
import Service from "../services/Service"; // Importa tu clase de servicio

const Login = ({ onLogin }) => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false); 

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      
      const userData = await Service.login(email, pass);
      
      
      onLogin(userData); 
      
    } catch (error) {
      alert(error); 
    } finally {
      setLoading(false);
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
            disabled={loading}
          />

          <div className={styles.passwordWrapper}>
            <input
              className={styles.input}
              type={showPassword ? "text" : "password"}
              value={pass}
              onChange={(e) => setPass(e.target.value)}
              placeholder="Contraseña"
              autoComplete="current-password"
              required
              disabled={loading}
            />
            <button
              type="button"
              className={styles.eyeButton}
              onClick={() => setShowPassword(!showPassword)}
              tabIndex="-1"
            >
              {showPassword ? "🙈" : "👁️"}
            </button>
          </div>

          <button 
            className={styles.button} 
            type="submit" 
            disabled={loading}
          >
            {loading ? "Verificando..." : "Entrar al Dashboard"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;