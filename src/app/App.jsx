import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { useState } from "react";
import HomePage from "../features/home/pages/HomePage";
import Privacypolicy from "../features/home/components/Privacypolicy";
import Terms from "../features/home/components/Terms";
import Login from "../features/home/components/login";
import ProtectedRoute from "../features/home/components/ProtectedRouter";
import GlobalToast from "../features/home/components/GlobalToast"; // Importamos el toast

function App() {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [toast, setToast] = useState(null); // Estado global para el toast

  const toggleChat = () => {
    setIsChatOpen(true);
  };

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
          <Route 
            path="/" 
            element={
              <HomePage 
                isChatOpen={isChatOpen} 
                setIsChatOpen={setIsChatOpen} 
                onOpenChat={toggleChat} 
                setGlobalToast={setToast} // Pasamos el setter al HomePage
              />
            } 
          />
          <Route path="/Privacypolicy" element={<Privacypolicy />} />
          <Route path="/Terms" element={<Terms />} />
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
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute isAllowed={!!user}>
                <Dashboard onLogout={handleLogout} />
              </ProtectedRoute>
            }
          />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </main>

      {/* Renderizamos el toast global */}
      {toast && (
        <GlobalToast
          type={toast.type}
          message={toast.message}
          onClose={() => setToast(null)}
        />
      )}
    </Router>
  );
}

const Dashboard = ({ onLogout }) => (
  <div style={{ padding: "40px", textAlign: "center", fontFamily: "sans-serif" }}>
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
