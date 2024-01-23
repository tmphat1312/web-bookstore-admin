import { useQueryClient } from "@tanstack/react-query";
import { QUERY_KEYS } from "../../constants/keys";
import { useApiMutation } from "../../hooks/useApiMutation";
import { createEditBook } from "../../services/apiBooks";

export function useCreateBook() {
  const queryClient = useQueryClient();

  const { isLoading: isCreating, mutate: createBook } = useApiMutation({
    fn: createEditBook,
    key: [QUERY_KEYS.BOOKS],
    onSuccess: () => {
      queryClient.invalidateQueries(QUERY_KEYS.COUNTING);
    },
    successMsg: "Thông tin sách đã được tạo thành công!",
  });

  return { isCreating, createBook };
}
