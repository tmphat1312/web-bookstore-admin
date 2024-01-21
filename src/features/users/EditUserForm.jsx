import { useForm } from "react-hook-form";
import { useEditUser } from "./useEditUser";

import Button from "../../ui/buttons/Button";
import Form from "../../ui/forms/Form";
import FormButtonsContainer from "../../ui/forms/FormButtonsContainer";
import FormHeading from "../../ui/forms/FormHeading";
import FormRow from "../../ui/forms/FormRow";
import Input from "../../ui/forms/Input";
import Select from "../../ui/forms/Select";

import { FORM_RULES } from "../../constants/form";
import { ROLE_OPTIONS } from "../../constants/options";

function EditUserForm({ userToEdit = {}, onCloseModal = () => {} }) {
  const { isEditing, editUser } = useEditUser(userToEdit.id);

  const { register, handleSubmit, reset, formState } = useForm({
    defaultValues: {
      name: userToEdit.name,
      role: userToEdit.role,
    },
  });
  const { errors } = formState;

  function onSubmit(data) {
    function onSuccess() {
      reset();
      onCloseModal();
    }

    editUser({ data }, { onSuccess });
  }

  return (
    <Form type="modal" onSubmit={handleSubmit(onSubmit)}>
      <FormHeading as="h2">Cập nhật thông tin tài khoản</FormHeading>

      <FormRow label="Email" property="email" errors={errors}>
        <Input type="email" disabled value={userToEdit.email} />
      </FormRow>

      <FormRow label="Hộ tên" errors={errors} property="name">
        <Input
          type="text"
          autoComplete="name"
          disabled={isEditing}
          {...register("name", FORM_RULES.FULL_NAME)}
        />
      </FormRow>

      <FormRow label="Phân quyền" property="role" errors={errors}>
        <Select
          disabled={isEditing}
          options={ROLE_OPTIONS}
          {...register("role")}
        />
      </FormRow>

      <FormButtonsContainer>
        <Button variation="secondary" type="reset" onClick={onCloseModal}>
          Hủy
        </Button>
        <Button disabled={isEditing}>Lưu thay đổi</Button>
      </FormButtonsContainer>
    </Form>
  );
}

export default EditUserForm;
