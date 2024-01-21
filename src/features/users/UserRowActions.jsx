import { CiEdit } from "react-icons/ci";
import { HiTrash } from "react-icons/hi2";
import { useUser } from "../authentication/useUser";
import { useDeleteUser } from "./useDeleteUser";

import ActionButton from "../../ui/buttons/ActionButton";
import SpinnerMini from "../../ui/spinners/SpinnerMini";
import Column from "../../ui/Column";
import ConfirmAction from "../../ui/ConfirmAction";
import ConfirmModal from "../../ui/ConfirmModal";

export default function UserRowActions({ id }) {
  const { user, isLoading } = useUser();
  const { isDeleting, deleteUser } = useDeleteUser(id);

  if (isLoading) {
    return <SpinnerMini />;
  }

  const isCurrentUser = user.id === id;

  return (
    <ConfirmModal>
      {isCurrentUser ? (
        <Column.Highlight>Me</Column.Highlight>
      ) : (
        <Column.HStacked>
          <ActionButton>
            <CiEdit />
          </ActionButton>
          <ConfirmModal.Open opens="update">
            <ActionButton danger>
              <HiTrash />
            </ActionButton>
          </ConfirmModal.Open>
          <ConfirmModal.Window name="update">
            <ConfirmAction
              danger
              title="Xóa tài khoản"
              disabled={isDeleting}
              onConfirm={deleteUser}
            />
          </ConfirmModal.Window>
        </Column.HStacked>
      )}
    </ConfirmModal>
  );
}
