import { QUERY_KEYS } from "../../constants/keys";
import { useApiMutation } from "../../hooks/useApiMutation";
import { createEditCategory } from "../../services/apiCategories";

export function useCreateCategory() {
  const { isLoading: isCreating, mutate: createCategory } = useApiMutation({
    fn: createEditCategory,
    key: [QUERY_KEYS.CATEGORIES],
    successMsg: "Danh mục đã được tạo thành công!",
  });

  return { isCreating, createCategory };
}
