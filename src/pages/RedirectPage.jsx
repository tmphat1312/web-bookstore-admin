import { Navigate } from "react-router-dom";
import { useUser } from "../features/authentication/useUser";
import FullPageSpinner from "../ui/FullPageSpinner";

export default function RedirectPage() {
  const { isLoading, isAuthenticated } = useUser();

  if (isLoading) {
    return <FullPageSpinner />;
  }

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  return <Navigate to="/dashboard" />;
}
