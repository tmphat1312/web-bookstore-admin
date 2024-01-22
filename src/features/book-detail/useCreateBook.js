import { QUERY_KEYS } from "../../constants/keys";
import { useApiMutation } from "../../hooks/useApiMutation";
import { createEditBook } from "../../services/apiBooks";

export function useCreateBook() {
  const { isLoading: isCreating, mutate: createBook } = useApiMutation({
    fn: createEditBook,
    key: [QUERY_KEYS.BOOKS],
    successMsg: "Thông tin sách đã được tạo thành công!",
  });

  return { isCreating, createBook };
}
