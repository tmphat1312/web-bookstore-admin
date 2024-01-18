import { Navigate } from "react-router-dom";

import LoginForm from "../features/authentication/LoginForm";
import { useUser } from "../features/authentication/useUser";

import FullPageSpinner from "../ui/spinners/FullPageSpinner";
import SubHeading from "../ui/headings/SubHeading";
import FormLayout from "../ui/forms/FormLayout";
import Logo from "../ui/Logo";

function Login() {
  const { isLoading, isAuthenticated } = useUser();

  if (isLoading) {
    return <FullPageSpinner />;
  }

  if (isAuthenticated) {
    return <Navigate to="/" />;
  }

  return (
    <FormLayout>
      <Logo />
      <SubHeading className="text-center">Đăng nhập vào hệ thống</SubHeading>
      <LoginForm />
    </FormLayout>
  );
}

export default Login;
