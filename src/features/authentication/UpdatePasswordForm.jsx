import { useForm } from "react-hook-form";

import FormRow from "../../ui/FormRow";
import Button from "../../ui/buttons/Button";
import Input from "../../ui/Input";
import Form from "../../ui/Form";
import { useUpdatePassword } from "./useUpdatePassword";

function UpdatePasswordForm() {
  const { isUpdating, updatePassword } = useUpdatePassword();
  const { register, handleSubmit, formState, getValues, reset } = useForm({
    defaultValues: {
      oldPassword: "",
      newPassword: "",
      newPasswordConfirm: "",
    },
  });
  const { errors } = formState;

  function onSubmit(data) {
    function onSuccess(data) {
      reset();
    }

    updatePassword(data, { onSuccess });
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FormRow label="Mật khẩu cũ" error={errors?.oldPassword?.message}>
        <Input
          type="password"
          disabled={isUpdating}
          id="old-password"
          {...register("oldPassword", {
            required: "Mật khẩu không được để trống",
          })}
        />
      </FormRow>
      <FormRow
        label="Mật khẩu mới (tối thiểu 8 ký tự)"
        error={errors?.newPassword?.message}
      >
        <Input
          type="password"
          disabled={isUpdating}
          id="password"
          {...register("newPassword", {
            required: "Mật khẩu không được để trống",
            minLength: {
              value: 8,
              message: "Mật khẩu phải có ít nhất 8 ký tự",
            },
          })}
        />
      </FormRow>

      <FormRow
        label="Nhập lại mật khẩu mới"
        error={errors?.newPasswordConfirm?.message}
      >
        <Input
          type="password"
          disabled={isUpdating}
          id="passwordConfirm"
          {...register("newPasswordConfirm", {
            required: "Mật khẩu không được để trống",
            validate: (value) =>
              getValues().newPassword === value || "Mật khẩu không khớp",
          })}
        />
      </FormRow>
      <FormRow hasButton>
        <Button
          onClick={reset}
          type="reset"
          variation="secondary"
          disabled={isUpdating}
        >
          Hủy
        </Button>
        <Button disabled={isUpdating}>Lưu thay đổi</Button>
      </FormRow>
    </Form>
  );
}

export default UpdatePasswordForm;
