import { HiEye, HiMiniPencilSquare, HiTrash } from "react-icons/hi2";
import { useNavigate } from "react-router-dom";
import { useDeleteBook } from "./useDeleteBook";

import Column from "../../ui/Column";
import ConfirmAction from "../../ui/ConfirmAction";
import Modal from "../../ui/Modal";
import ActionButton from "../../ui/buttons/ActionButton";

export default function BookRowActions({ book = {} }) {
  const { isDeleting, deleteBook } = useDeleteBook(book.id);
  const navigate = useNavigate();

  return (
    <Modal>
      <Column.HStacked>
        <ActionButton
          aria-label="Xem chi tiết"
          onClick={() => navigate(`/books/${book.id}`)}
        >
          <HiEye role="presentation" />
        </ActionButton>

        <ActionButton
          aria-label="Chỉnh sửa thông tin sách"
          onClick={() => navigate(`/books/${book.id}/edit`)}
        >
          <HiMiniPencilSquare />
        </ActionButton>

        <Modal.Open opens="delete">
          <ActionButton danger aria-label="Xóa thông tin sách">
            <HiTrash role="presentation" />
          </ActionButton>
        </Modal.Open>

        <Modal.Window name="delete">
          <ConfirmAction
            danger
            title="Xóa thông tin sách"
            disabled={isDeleting}
            onConfirm={deleteBook}
          />
        </Modal.Window>
      </Column.HStacked>
    </Modal>
  );
}
