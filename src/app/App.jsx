import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { useState } from "react";

// 1. IMPORTA TUS COMPONENTES (Ajusta las rutas según tu carpetas)
import HomePage from "../features/home/pages/HomePage";
import Privacypolicy from "../features/home/components/Privacypolicy";
import Terms from "../features/home/components/Terms";
import Login from "../features/home/components/login";
import ProtectedRoute from "../features/home/components/ProtectedRouter";
import DashboardAdmin from "../features/home/components/Dashboard"; // <--- Tu nuevo componente

function App() {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const toggleChat = () => setIsChatOpen(true);

  // Estado del usuario con persistencia en localStorage
  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem("user_session");
    return savedUser ? JSON.parse(savedUser) : null;
  });

  const handleLogin = (userData) => {
    setUser(userData);
    localStorage.setItem("user_session", JSON.stringify(userData));
  };

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem("user_session");
  };

  return (
    <Router>
      <main>
        <Routes>
          {/* Rutas Públicas */}
          <Route
            path="/"
            element={
              <HomePage
                isChatOpen={isChatOpen}
                setIsChatOpen={setIsChatOpen}
                onOpenChat={toggleChat}
              />
            }
          />
          <Route path="/Privacypolicy" element={<Privacypolicy />} />
          <Route path="/Terms" element={<Terms />} />

          {/* Login: Redirige al dashboard si ya hay sesión */}
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

          {/* RUTA PROTEGIDA: Aquí es donde conectamos el DashboardAdmin */}
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute isAllowed={!!user}>
                <DashboardAdmin onLogout={handleLogout} />
              </ProtectedRoute>
            }
          />

          {/* Redirección por defecto */}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
