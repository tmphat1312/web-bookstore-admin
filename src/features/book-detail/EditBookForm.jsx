import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useBookCategories } from "./useBookCategories";
import { useEditBook } from "./useEditBook";

import { FORM_RULES } from "../../constants/form";

import Button from "../../ui/buttons/Button";
import FileInput from "../../ui/forms/FileInput";
import Form from "../../ui/forms/Form";
import FormButtonsContainer from "../../ui/forms/FormButtonsContainer";
import FormHeading from "../../ui/forms/FormHeading";
import FormRow from "../../ui/forms/FormRow";
import Input from "../../ui/forms/Input";
import Select from "../../ui/forms/Select";
import Textarea from "../../ui/forms/Textarea";
import SpinnerMini from "../../ui/spinners/SpinnerMini";

export default function EditBookForm({
  bookToEdit = {},
  onImageChange,
  image,
  file,
}) {
  const navigate = useNavigate();
  const { isEditing, editBook } = useEditBook(bookToEdit.id);
  const { isLoading: isLoadingCategories, bookCategoryOptions } =
    useBookCategories();
  const isWorking = isEditing || isLoadingCategories;

  const defaultValues = {
    name: bookToEdit.name,
    description: bookToEdit.description,
    author: bookToEdit.author,
    publishedYear: bookToEdit.publishedYear,
    purchasePrice: bookToEdit.purchasePrice,
    sellingPrice: bookToEdit.sellingPrice,
    quantity: bookToEdit.quantity,
  };

  const { register, handleSubmit, reset, formState } = useForm({
    defaultValues,
  });
  const { errors } = formState;

  function onSubmit(data) {
    if (image) {
      data.image = file;
    }

    editBook({ data }, { onSuccess: () => navigate(-1) });
  }

  function resetToDefault() {
    reset(defaultValues);
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FormHeading as="h2">Cập nhật thông tin sách</FormHeading>

      <FormRow label="Tựa sách" property="name" errors={errors}>
        <Input {...register("name", FORM_RULES.PRODUCT_NAME)} />
      </FormRow>

      <FormRow label="Tác giả" property="author" errors={errors}>
        <Input {...register("author", FORM_RULES.FULL_NAME)} />
      </FormRow>

      <FormRow label="Bìa sách" property="image">
        <FileInput
          disabled={isWorking}
          accept="image/*"
          onChange={onImageChange}
          value={image}
        />
      </FormRow>

      <FormRow label="Năm xuất bản" property="publishedYear" errors={errors}>
        <Input type="number" {...register("publishedYear", FORM_RULES.YEAR)} />
      </FormRow>

      <FormRow label="Danh mục" property="category" errors={errors}>
        {isLoadingCategories ? (
          <SpinnerMini />
        ) : (
          <Select options={bookCategoryOptions} {...register("category")} />
        )}
      </FormRow>

      <FormRow label="Giá nhập" property="purchasePrice" errors={errors}>
        <Input
          step={1000}
          type="number"
          {...register("purchasePrice", FORM_RULES.PRICE)}
        />
      </FormRow>

      <FormRow label="Giá bán" property="sellingPrice" errors={errors}>
        <Input
          step={1000}
          type="number"
          {...register("sellingPrice", FORM_RULES.PRICE)}
        />
      </FormRow>

      <FormRow label="Số lượng tồn" property="quantity" errors={errors}>
        <Input
          step={1}
          type="number"
          {...register("quantity", FORM_RULES.STOCK_AMOUNT)}
        />
      </FormRow>

      <FormRow label="Mô tả" property="description" errors={errors}>
        <Textarea
          rows={6}
          {...register("description", FORM_RULES.DESCRIPTION)}
        />
      </FormRow>

      <FormButtonsContainer>
        <Button variation="secondary" type="button" onClick={resetToDefault}>
          Hủy
        </Button>
        <Button disabled={isWorking}>Lưu thay đổi</Button>
      </FormButtonsContainer>
    </Form>
  );
}
