import { useLocation, useNavigate } from "react-router-dom";
import { QUERY_KEYS } from "../../constants/keys";
import { useApiMutation } from "../../hooks/useApiMutation";
import { deleteBook as deleteBookApi } from "../../services/apiBooks";
import { useQueryClient } from "@tanstack/react-query";

export function useDeleteBook(id) {
  const location = useLocation();
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const { isLoading: isDeleting, mutate: deleteBook } = useApiMutation({
    fn: () => deleteBookApi(id),
    key: [QUERY_KEYS.BOOKS],
    onSuccess: () => {
      if (location.pathname.includes(id)) {
        navigate("/books");
      }

      queryClient.invalidateQueries(QUERY_KEYS.COUNTING);
    },
    successMsg: "Xóa sản phẩm thành công!",
  });

  return { isDeleting, deleteBook };
}
