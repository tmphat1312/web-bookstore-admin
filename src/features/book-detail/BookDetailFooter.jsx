import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useDeleteBook } from "../books/useDeleteBook";

import ConfirmAction from "../../ui/ConfirmAction";
import Modal from "../../ui/Modal";
import Button from "../../ui/buttons/Button";

const StyledFooter = styled.footer`
  grid-column: 1 / -1;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 0.75rem;
`;

export default function BookDetailFooter({ book = {} }) {
  const navigate = useNavigate();
  const { isDeleting, deleteBook } = useDeleteBook(book.id);

  return (
    <Modal>
      <StyledFooter>
        <Button onClick={() => navigate(`/books/${book.id}/edit`)}>
          Chỉnh sửa
        </Button>

        <Modal.Open opens="delete">
          <Button variation="danger" aria-label="Xóa thông tin sách">
            Xóa sách
          </Button>
        </Modal.Open>

        <Modal.Window name="delete">
          <ConfirmAction
            danger
            title="Xóa thông tin sách"
            disabled={isDeleting}
            onConfirm={deleteBook}
          />
        </Modal.Window>
        <Button onClick={() => navigate(-1)} variation="secondary">
          Quay lại
        </Button>
      </StyledFooter>
    </Modal>
  );
}
