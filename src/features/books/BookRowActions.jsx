import { HiEye, HiMiniPencilSquare, HiTrash } from "react-icons/hi2";
import Column from "../../ui/Column";
import ConfirmAction from "../../ui/ConfirmAction";
import Modal from "../../ui/Modal";
import ActionButton from "../../ui/buttons/ActionButton";
import { useDeleteBook } from "./useDeleteBook";

export default function BookRowActions({ book = {} }) {
  const { isDeleting, deleteBook } = useDeleteBook(book.id);

  return (
    <Modal>
      <Column.HStacked>
        <ActionButton aria-label="Xem chi tiết">
          <HiEye role="presentation" />
        </ActionButton>
        <Modal.Open opens="edit">
          <ActionButton>
            <HiMiniPencilSquare />
          </ActionButton>
        </Modal.Open>

        <Modal.Open opens="delete">
          <ActionButton danger aria-label="Xóa thông tin sách">
            <HiTrash role="presentation" />
          </ActionButton>
        </Modal.Open>

        <Modal.Window
          name="edit"
          closeButton
          aria-label="Chỉnh sửa thông tin sách"
        >
          {/* <EditBookForm bookToEdit={book} /> */}
          <div>
            <button>hello world</button>
          </div>
        </Modal.Window>

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
