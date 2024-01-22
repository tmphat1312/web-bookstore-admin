import { QUERY_KEYS } from "../../constants/keys";
import { useApiMutation } from "../../hooks/useApiMutation";
import { createEditCategory } from "../../services/apiCategories";

export function useEditCategory(id) {
  const { mutate: editCategory, isLoading: isEditing } = useApiMutation({
    fn: ({ data }) => createEditCategory({ data, id }),
    key: [QUERY_KEYS.CATEGORIES],
    successMsg: "Cập nhật thông tin danh mục thành công!",
  });

  return { isEditing, editCategory };
}
