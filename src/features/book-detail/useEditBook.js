import { useQueryClient } from "@tanstack/react-query";
import { QUERY_KEYS } from "../../constants/keys";
import { useApiMutation } from "../../hooks/useApiMutation";
import { createEditBook } from "../../services/apiBooks";

export function useEditBook(id) {
  const queryClient = useQueryClient();

  const { mutate: editBook, isLoading: isEditing } = useApiMutation({
    fn: ({ data }) => createEditBook({ data, id }),
    key: [QUERY_KEYS.BOOKS],
    onSuccess: () => {
      queryClient.invalidateQueries([QUERY_KEYS.BOOK, id]);
    },
    successMsg: "Cập nhật thông tin sách thành công!",
  });

  return { isEditing, editBook };
}
