import { CiEdit } from "react-icons/ci";
import { HiTrash } from "react-icons/hi2";
import { useUser } from "../authentication/useUser";

import ActionButton from "../../ui/buttons/ActionButton";
import SpinnerMini from "../../ui/spinners/SpinnerMini";
import Column from "../../ui/Column";
import ConfirmAction from "../../ui/ConfirmAction";
import ConfirmModal from "../../ui/ConfirmModal";

export default function UserRowActions({ id }) {
  const { user, isLoading } = useUser();

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
            <ConfirmAction />
          </ConfirmModal.Window>
        </Column.HStacked>
      )}
    </ConfirmModal>
  );
}
