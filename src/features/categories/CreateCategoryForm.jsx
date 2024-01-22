import { useForm } from "react-hook-form";
import { useCreateCategory } from "./useCreateCategory";

import Button from "../../ui/buttons/Button";
import Form from "../../ui/forms/Form";
import FormButtonsContainer from "../../ui/forms/FormButtonsContainer";
import FormHeading from "../../ui/forms/FormHeading";
import FormRow from "../../ui/forms/FormRow";
import Input from "../../ui/forms/Input";
import Textarea from "../../ui/forms/Textarea";

import { FORM_RULES } from "../../constants/form";

function CreateCategoryForm({ onCloseModal = () => {} }) {
  const { isCreating, createCategory } = useCreateCategory();

  const { register, handleSubmit, reset, formState } = useForm({
    defaultValues: {
      name: "",
      description: "",
    },
  });
  const { errors } = formState;

  function onSubmit(data) {
    function onSuccess() {
      reset();
      onCloseModal();
    }

    createCategory({ data }, { onSuccess });
  }

  return (
    <Form type="modal" onSubmit={handleSubmit(onSubmit)}>
      <FormHeading as="h2">Thêm thông tin danh mục</FormHeading>

      <FormRow label="Tên" property="name" errors={errors}>
        <Input type="name" {...register("name", FORM_RULES.PRODUCT_NAME)} />
      </FormRow>

      <FormRow label="Mô tả" property="description" errors={errors}>
        <Textarea
          type="description"
          {...register("description", FORM_RULES.DESCRIPTION)}
        />
      </FormRow>

      <FormButtonsContainer>
        <Button variation="secondary" type="reset" onClick={onCloseModal}>
          Hủy
        </Button>
        <Button disabled={isCreating}>Thêm thông tin</Button>
      </FormButtonsContainer>
    </Form>
  );
}

export default CreateCategoryForm;
