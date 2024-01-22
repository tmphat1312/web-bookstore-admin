import { useQueryClient } from "@tanstack/react-query";
import { QUERY_KEYS } from "../../constants/keys";
import { useApiMutation } from "../../hooks/useApiMutation";
import { createEditCategory } from "../../services/apiCategories";

export function useEditCategory(id) {
  const queryClient = useQueryClient();

  const { mutate: editCategory, isLoading: isEditing } = useApiMutation({
    fn: ({ data }) => createEditCategory({ data, id }),
    key: [QUERY_KEYS.CATEGORIES],
    successMsg: "Cập nhật thông tin danh mục thành công!",
    onSuccess: () => {
      queryClient.invalidateQueries(QUERY_KEYS.BOOK_CATEGORIES);
    },
  });

  return { isEditing, editCategory };
}
