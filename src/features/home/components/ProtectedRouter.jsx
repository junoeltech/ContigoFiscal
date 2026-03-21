import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ isAllowed, children }) => {
  if (!isAllowed) {
    // La alerta que me pediste
    alert(
      "⛔ Acceso Denegado: Debes iniciar sesión para entrar al panel administrativo de Contigo Fiscal.",
    );

    // Redirigimos al login. Usamos 'replace' para que no pueda darle "atrás" y entrar.
    return <Navigate to="/login" replace />;
  }

  // Si todo está bien, lo dejamos pasar al Dashboard
  return children;
};

export default ProtectedRoute;
