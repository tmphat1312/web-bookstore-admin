import { useForm } from "react-hook-form";
import { useEditCategory } from "./useEditCategory";

import Button from "../../ui/buttons/Button";
import Form from "../../ui/forms/Form";
import FormButtonsContainer from "../../ui/forms/FormButtonsContainer";
import FormHeading from "../../ui/forms/FormHeading";
import FormRow from "../../ui/forms/FormRow";
import Input from "../../ui/forms/Input";
import Textarea from "../../ui/forms/Textarea";

import { FORM_RULES } from "../../constants/form";

function EditCategoryForm({ categoryToEdit = {}, onCloseModal = () => {} }) {
  const { isEditing, editCategory } = useEditCategory(categoryToEdit.id);

  const { register, handleSubmit, reset, formState } = useForm({
    defaultValues: {
      name: categoryToEdit.name,
      description: categoryToEdit.description,
    },
  });
  const { errors } = formState;

  function onSubmit(data) {
    function onSuccess() {
      reset();
      onCloseModal();
    }

    editCategory({ data }, { onSuccess });
  }

  return (
    <Form type="modal" onSubmit={handleSubmit(onSubmit)}>
      <FormHeading as="h2">Cập nhật thông tin danh mục</FormHeading>

      <FormRow label="Name" property="name" errors={errors}>
        <Input type="name" {...register("name", FORM_RULES.PRODUCT_NAME)} />
      </FormRow>

      <FormRow label="Description" property="description" errors={errors}>
        <Textarea
          rows={4}
          type="description"
          {...register("description", FORM_RULES.DESCRIPTION)}
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

export default EditCategoryForm;
