import { CiEdit } from "react-icons/ci";
import { HiTrash } from "react-icons/hi2";
import { useUser } from "../authentication/useUser";
import { useDeleteUser } from "./useDeleteUser";
import { useEditUser } from "./useEditUser";

import ActionButton from "../../ui/buttons/ActionButton";
import SpinnerMini from "../../ui/spinners/SpinnerMini";
import Column from "../../ui/Column";
import ConfirmAction from "../../ui/ConfirmAction";
import ConfirmModal from "../../ui/ConfirmModal";
import Modal from "../../ui/Modal";

export default function UserRowActions({ id }) {
  const { user, isLoading } = useUser();
  const { isDeleting, deleteUser } = useDeleteUser(id);
  const { isEditing, editUser } = useEditUser(id);

  if (isLoading) {
    return <SpinnerMini />;
  }

  const isCurrentUser = user.id === id;

  return (
    <Modal>
      {isCurrentUser ? (
        <Column.Highlight>Me</Column.Highlight>
      ) : (
        <Column.HStacked>
          <ActionButton>
            <CiEdit />
          </ActionButton>
          <Modal.Open opens="update">
            <ActionButton danger>
              <HiTrash />
            </ActionButton>
          </Modal.Open>
          <Modal.Window name="update">
            <ConfirmAction
              danger
              title="Xóa tài khoản"
              disabled={isDeleting}
              onConfirm={deleteUser}
            />
          </Modal.Window>
        </Column.HStacked>
      )}
    </Modal>
  );
}
