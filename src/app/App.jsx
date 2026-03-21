import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { useState, useEffect } from "react"; // Añadimos useEffect
import HomePage from "../features/home/pages/HomePage";
import Privacypolicy from "../features/home/components/Privacypolicy";
import Terms from "../features/home/components/Terms";
import Login from "../features/home/components/login";
import ProtectedRoute from "../features/home/components/ProtectedRouter"; // Asegúrate que el archivo se llame así

function App() {
  // 1. Inicializamos el estado buscando si ya había un usuario en el navegador
  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem("user_session");
    return savedUser ? JSON.parse(savedUser) : null;
  });

  // 2. Función para manejar el inicio de sesión y GUARDAR en el navegador
  const handleLogin = (userData) => {
    setUser(userData);
    localStorage.setItem("user_session", JSON.stringify(userData));
  };

  // 3. Función para cerrar sesión y LIMPIAR el navegador
  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem("user_session");
  };

  return (
    <Router>
      <main>
        <Routes>
          {/* Rutas Públicas */}
          <Route path="/" element={<HomePage />} />
          <Route path="/Privacypolicy" element={<Privacypolicy />} />
          <Route path="/Terms" element={<Terms />} />

          {/* Ruta de Login: Si ya está logueado, lo manda al dashboard directamente */}
          <Route
            path="/login"
            element={
              user ? (
                <Navigate to="/dashboard" replace />
              ) : (
                <Login onLogin={handleLogin} />
              )
            }
          />

          {/* Ruta Protegida: Usamos tu componente ProtectedRoute con la alerta */}
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute isAllowed={!!user}>
                <Dashboard onLogout={handleLogout} />
              </ProtectedRoute>
            }
          />

          {/* Redirección por defecto si la ruta no existe */}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </main>
    </Router>
  );
}

// Dashboard con botón de Logout real
const Dashboard = ({ onLogout }) => (
  <div
    style={{ padding: "40px", textAlign: "center", fontFamily: "sans-serif" }}
  >
    <h1 style={{ color: "#0d2c4f" }}>Bienvenido al Panel de Contigo Fiscal</h1>
    <p>Aquí verás los datos enviados por los clientes.</p>
    <button
      onClick={onLogout}
      style={{
        padding: "10px 20px",
        backgroundColor: "#d4a34d",
        color: "white",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer",
        fontWeight: "bold",
      }}
    >
      Cerrar Sesión
    </button>
  </div>
);

export default App;
