import { QUERY_KEYS } from "../../constants/keys";
import { useApiMutation } from "../../hooks/useApiMutation";
import { deleteBook as deleteBookApi } from "../../services/apiBooks";

export function useDeleteBook(id) {
  const { isLoading: isDeleting, mutate: deleteBook } = useApiMutation({
    fn: () => deleteBookApi(id),
    key: [QUERY_KEYS.BOOKS],
    successMsg: "Xóa sản phẩm thành công!",
  });

  return { isDeleting, deleteBook };
}
