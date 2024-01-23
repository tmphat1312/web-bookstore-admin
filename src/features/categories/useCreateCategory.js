import { useQueryClient } from "@tanstack/react-query";
import { QUERY_KEYS } from "../../constants/keys";
import { useApiMutation } from "../../hooks/useApiMutation";
import { createEditCategory } from "../../services/apiCategories";

export function useCreateCategory() {
  const queryClient = useQueryClient();

  const { isLoading: isCreating, mutate: createCategory } = useApiMutation({
    fn: createEditCategory,
    key: [QUERY_KEYS.CATEGORIES],
    successMsg: "Danh mục đã được tạo thành công!",
    onSuccess: () => {
      queryClient.invalidateQueries(QUERY_KEYS.BOOK_CATEGORIES);
      queryClient.invalidateQueries(QUERY_KEYS.COUNTING);
    },
  });

  return { isCreating, createCategory };
}
