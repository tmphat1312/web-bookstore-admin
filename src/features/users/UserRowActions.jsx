import { CiEdit } from "react-icons/ci";
import { HiTrash } from "react-icons/hi2";
import { useUser } from "../authentication/useUser";

import ActionButton from "../../ui/buttons/ActionButton";
import SpinnerMini from "../../ui/spinners/SpinnerMini";
import Column from "../../ui/Column";

export default function UserRowActions({ id }) {
  const { user, isLoading } = useUser();

  if (isLoading) {
    return <SpinnerMini />;
  }

  const isCurrentUser = user.id === id;

  return (
    <>
      {isCurrentUser ? (
        <Column.Highlight>Me</Column.Highlight>
      ) : (
        <Column.HStacked>
          <ActionButton>
            <CiEdit />
          </ActionButton>
          <ActionButton danger>
            <HiTrash />
          </ActionButton>
        </Column.HStacked>
      )}
    </>
  );
}
