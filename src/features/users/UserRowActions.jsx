import { HiMiniPencilSquare, HiTrash } from "react-icons/hi2";
import { useUser } from "../authentication/useUser";
import { useDeleteUser } from "./useDeleteUser";

import Column from "../../ui/Column";
import ConfirmAction from "../../ui/ConfirmAction";
import Modal from "../../ui/Modal";
import ActionButton from "../../ui/buttons/ActionButton";
import SpinnerMini from "../../ui/spinners/SpinnerMini";
import EditUserForm from "./EditUserForm";

export default function UserRowActions({ user = {} }) {
  const { user: currentUser, isLoading } = useUser();
  const { isDeleting, deleteUser } = useDeleteUser(user.id);

  if (isLoading) {
    return <SpinnerMini />;
  }

  const isCurrentUser = currentUser.id === user.id;

  return (
    <Modal>
      {isCurrentUser ? (
        <Column.Highlight>Me</Column.Highlight>
      ) : (
        <Column.HStacked>
          <Modal.Open opens="edit">
            <ActionButton>
              <HiMiniPencilSquare />
            </ActionButton>
          </Modal.Open>

          <Modal.Open opens="delete">
            <ActionButton danger>
              <HiTrash />
            </ActionButton>
          </Modal.Open>

          <Modal.Window name="edit" closeButton>
            <EditUserForm userToEdit={user} />
          </Modal.Window>

          <Modal.Window name="delete">
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
