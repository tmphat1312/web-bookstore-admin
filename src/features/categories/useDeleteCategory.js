import { useQueryClient } from "@tanstack/react-query";
import { QUERY_KEYS } from "../../constants/keys";
import { useApiMutation } from "../../hooks/useApiMutation";
import { deleteCategory as deleteCategoryApi } from "../../services/apiCategories";

export function useDeleteCategory(id) {
  const queryClient = useQueryClient();

  const { isLoading: isDeleting, mutate: deleteCategory } = useApiMutation({
    fn: () => deleteCategoryApi(id),
    key: [QUERY_KEYS.CATEGORIES],
    successMsg: "Xóa danh mục sản phẩm thành công!",
    onSuccess: () => {
      queryClient.invalidateQueries(QUERY_KEYS.BOOK_CATEGORIES);
    },
  });

  return { isDeleting, deleteCategory };
}
