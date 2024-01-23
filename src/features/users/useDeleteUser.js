import { useQueryClient } from "@tanstack/react-query";
import { QUERY_KEYS } from "../../constants/keys";
import { useApiMutation } from "../../hooks/useApiMutation";
import { deleteUser as deleteUserApi } from "../../services/apiUsers";

export function useDeleteUser(id) {
  const queryClient = useQueryClient();

  const { isLoading: isDeleting, mutate: deleteUser } = useApiMutation({
    fn: () => deleteUserApi(id),
    key: [QUERY_KEYS.USERS],
    onSuccess: () => {
      queryClient.invalidateQueries(QUERY_KEYS.COUNTING);
    },
    successMsg: "Xóa người dùng thành công!",
  });

  return { isDeleting, deleteUser };
}
