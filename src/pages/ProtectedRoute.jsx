import { Navigate } from "react-router-dom";
import { useUser } from "../features/authentication/useUser";

import FullPageSpinner from "../ui/spinners/FullPageSpinner";
import AppLayout from "../ui/layout/AppLayout";

function ProtectedRoute({ children }) {
  const { isAuthenticated, isLoading } = useUser();

  if (isLoading) {
    return <FullPageSpinner />;
  }

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  return <AppLayout>{children}</AppLayout>;
}

export default ProtectedRoute;
