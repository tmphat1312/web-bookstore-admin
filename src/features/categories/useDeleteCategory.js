import { QUERY_KEYS } from "../../constants/keys";
import { useApiMutation } from "../../hooks/useApiMutation";
import { deleteCategory as deleteCategoryApi } from "../../services/apiCategories";

export function useDeleteCategory(id) {
  const { isLoading: isDeleting, mutate: deleteCategory } = useApiMutation({
    fn: () => deleteCategoryApi(id),
    key: [QUERY_KEYS.CATEGORIES],
    successMsg: "Xóa danh mục sản phẩm thành công!",
  });

  return { isDeleting, deleteCategory };
}
