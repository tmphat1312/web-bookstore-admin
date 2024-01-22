import { useLocation, useNavigate } from "react-router-dom";
import { QUERY_KEYS } from "../../constants/keys";
import { useApiMutation } from "../../hooks/useApiMutation";
import { deleteBook as deleteBookApi } from "../../services/apiBooks";

export function useDeleteBook(id) {
  const location = useLocation();
  const navigate = useNavigate();

  const { isLoading: isDeleting, mutate: deleteBook } = useApiMutation({
    fn: () => deleteBookApi(id),
    key: [QUERY_KEYS.BOOKS],
    onSuccess: () => {
      if (location.pathname.includes(id)) {
        navigate("/books");
      }
    },
    successMsg: "Xóa sản phẩm thành công!",
  });

  return { isDeleting, deleteBook };
}
