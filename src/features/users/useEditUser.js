import { QUERY_KEYS } from "../../constants/keys";
import { useApiMutation } from "../../hooks/useApiMutation";
import { createEditUser } from "../../services/apiUsers";

export function useEditUser(id) {
  const { mutate: editUser, isLoading: isEditing } = useApiMutation({
    fn: ({ data }) => createEditUser({ data, id }),
    key: [QUERY_KEYS.USERS],
    successMsg: "Cập nhật thông tin người dùng thành công!",
  });

  return { isEditing, editUser };
}
