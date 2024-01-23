import { useQueryClient } from "@tanstack/react-query";
import { QUERY_KEYS } from "../../constants/keys";
import { useApiMutation } from "../../hooks/useApiMutation";
import { createEditUser } from "../../services/apiUsers";

export function useCreateUser() {
  const queryClient = useQueryClient();

  const { isLoading: isCreating, mutate: createUser } = useApiMutation({
    fn: createEditUser,
    key: [QUERY_KEYS.USERS],
    onSuccess: () => {
      queryClient.invalidateQueries(QUERY_KEYS.COUNTING);
    },
    successMsg: "Tài khoản người dùng đã được tạo thành công!",
  });

  return { isCreating, createUser };
}
