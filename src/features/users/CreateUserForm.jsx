import { useForm } from "react-hook-form";
import { useCreateUser } from "./useCreateUser";

import Button from "../../ui/buttons/Button";
import Form from "../../ui/forms/Form";
import FormButtonsContainer from "../../ui/forms/FormButtonsContainer";
import FormHeading from "../../ui/forms/FormHeading";
import FormRow from "../../ui/forms/FormRow";
import Input from "../../ui/forms/Input";
import Select from "../../ui/forms/Select";

import { FORM_RULES } from "../../constants/form";
import { ROLE_OPTIONS } from "../../constants/options";
import { generatePasswordFromEmail } from "../../utils/helpers";

function EditUserForm({ onCloseModal = () => {} }) {
  const { isCreating, createUser } = useCreateUser();

  const { register, handleSubmit, reset, formState, watch } = useForm({
    defaultValues: {
      name: "",
      role: ROLE_OPTIONS.at(0).value,
      email: "",
    },
  });
  const { errors } = formState;
  const password = generatePasswordFromEmail(watch("email"));

  function onSubmit(data) {
    function onSuccess() {
      reset();
      onCloseModal();
    }

    createUser({ data: { ...data, password } }, { onSuccess });
  }

  return (
    <Form type="modal" onSubmit={handleSubmit(onSubmit)}>
      <FormHeading as="h2">Cập nhật thông tin tài khoản</FormHeading>

      <FormRow label="Email" property="email" errors={errors}>
        <Input
          type="email"
          autoComplete="email"
          disabled={isCreating}
          {...register("email", FORM_RULES.EMAIL)}
        />
      </FormRow>

      <FormRow label="Hộ tên" errors={errors} property="name">
        <Input
          type="text"
          autoComplete="name"
          disabled={isCreating}
          {...register("name", FORM_RULES.FULL_NAME)}
        />
      </FormRow>

      <FormRow label="Mật khẩu">
        <Input type="text" disabled value={password} />
      </FormRow>

      <FormRow label="Phân quyền" property="role" errors={errors}>
        <Select
          disabled={isCreating}
          options={ROLE_OPTIONS}
          {...register("role")}
        />
      </FormRow>

      <FormButtonsContainer>
        <Button variation="secondary" type="reset" onClick={onCloseModal}>
          Hủy
        </Button>
        <Button disabled={isCreating}>Tạo tài khoản</Button>
      </FormButtonsContainer>
    </Form>
  );
}

export default EditUserForm;
