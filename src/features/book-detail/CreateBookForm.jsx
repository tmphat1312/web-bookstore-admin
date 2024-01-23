import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useCreateBook } from "./useCreateBook";

import { FORM_RULES } from "../../constants/form";

import Button from "../../ui/buttons/Button";
import Form from "../../ui/forms/Form";
import FormButtonsContainer from "../../ui/forms/FormButtonsContainer";
import FormHeading from "../../ui/forms/FormHeading";
import FormRow from "../../ui/forms/FormRow";
import Input from "../../ui/forms/Input";
import Select from "../../ui/forms/Select";
import Textarea from "../../ui/forms/Textarea";
import SpinnerMini from "../../ui/spinners/SpinnerMini";
import { useBookCategories } from "./useBookCategories";
import FileInput from "../../ui/forms/FileInput";

export default function CreateBookForm({ onImageChange, image, file }) {
  const navigate = useNavigate();
  const { isCreating, createBook } = useCreateBook();
  const { isLoading: isLoadingCategories, bookCategoryOptions } =
    useBookCategories();
  const isWorking = isCreating || isLoadingCategories;

  const defaultValues = {
    name: "",
    description: "",
    author: "",
    publishedYear: new Date().getFullYear(),
    purchasePrice: 10_000,
    sellingPrice: 10_000,
    quantity: 1,
    category: "658be841b3eba6ae4c0e382b", // unclassified
  };

  const { register, handleSubmit, reset, formState } = useForm({
    defaultValues,
  });
  const { errors } = formState;

  function onSubmit(data) {
    if (image) {
      data.image = file;
    }

    createBook({ data }, { onSuccess: () => navigate("/books") });
  }

  function resetToDefault() {
    reset(defaultValues);
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FormHeading as="h2">Điền thông tin sách cần thêm</FormHeading>

      <FormRow label="Tựa sách" property="name" errors={errors}>
        <Input {...register("name", FORM_RULES.PRODUCT_NAME)} />
      </FormRow>

      <FormRow label="Tác giả" property="author" errors={errors}>
        <Input {...register("author", FORM_RULES.FULL_NAME)} />
      </FormRow>

      <FormRow label="Bìa sách" property="image">
        <FileInput
          disabled={isWorking}
          required
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
        <Button disabled={isWorking}>Thêm thông tin</Button>
      </FormButtonsContainer>
    </Form>
  );
}
