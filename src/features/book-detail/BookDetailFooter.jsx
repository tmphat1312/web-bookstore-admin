import styled from "styled-components";
import { useMoveBack } from "../../hooks/useMoveBack";
import ConfirmAction from "../../ui/ConfirmAction";
import Modal from "../../ui/Modal";
import Button from "../../ui/buttons/Button";
import { useDeleteBook } from "../books/useDeleteBook";

const StyledFooter = styled.footer`
  grid-column: 1 / -1;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 0.75rem;
`;

export default function BookDetailFooter({ book = {} }) {
  const moveBack = useMoveBack();
  const { isDeleting, deleteBook } = useDeleteBook(book.id);

  return (
    <Modal>
      <StyledFooter>
        <Modal.Open opens="edit">
          <Button>Chỉnh sửa</Button>
        </Modal.Open>

        <Modal.Open opens="delete">
          <Button variation="danger" aria-label="Xóa thông tin sách">
            Xóa sách
          </Button>
        </Modal.Open>

        <Modal.Window
          name="edit"
          closeButton
          aria-label="Chỉnh sửa thông tin sách"
        >
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
        <Button onClick={moveBack} variation="secondary">
          Quay lại
        </Button>
      </StyledFooter>
    </Modal>
  );
}
