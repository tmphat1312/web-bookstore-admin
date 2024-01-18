import { useForm } from "react-hook-form";

import { useLogin } from "./useLogin";

import { FORM_RULES } from "../../constants/form";

import SpinnerMini from "../../ui/spinners/SpinnerMini";
import Button from "../../ui/buttons/Button";
import Row from "../../ui/layout/Row";

import FormRow from "../../ui/forms/FormRowVertical";
import Form from "../../ui/forms/Form";
import Input from "../../ui/forms/Input";

function LoginForm() {
  const { login, isLoading } = useLogin();
  const { register, handleSubmit, formState } = useForm({
    defaultValues: {
      email: localStorage.getItem("email") ?? "",
      password: "",
    },
  });
  const { errors } = formState;

  function onSubmit({ email, password }) {
    login({ email, password });
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FormRow label="Email" error={errors.email?.message}>
        <Input
          type="email"
          id="email"
          disabled={isLoading}
          autoComplete="email"
          {...register("email", FORM_RULES.EMAIL)}
        />
      </FormRow>

      <FormRow label="Mật khẩu" error={errors.password?.message}>
        <Input
          type="password"
          id="password"
          disabled={isLoading}
          autoComplete="current-password"
          {...register("password", FORM_RULES.PASSWORD)}
        />
      </FormRow>

      <FormRow>
        <Row>
          <Button size="large" disabled={isLoading}>
            {isLoading ? <SpinnerMini /> : "Đăng nhập"}
          </Button>
        </Row>
      </FormRow>
    </Form>
  );
}

export default LoginForm;
