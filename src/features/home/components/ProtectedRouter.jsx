import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ isAllowed, children }) => {
  if (!isAllowed) {
    // Redirigimos al login con un parámetro de estado
    return <Navigate to="/login?error=unauthorized" replace />;
  }

  // IMPORTANTE: Si isAllowed es true, DEBES retornar los hijos (el Dashboard)
  return children; 
};

export default ProtectedRoute;