import { useState } from "react";
import { FaAngleDoubleDown } from "react-icons/fa";
import { HiMiniPencilSquare, HiTrash } from "react-icons/hi2";
import styled from "styled-components";
import LoadingProgress from "../../ui/LoadingProgress";
import ActionButton from "../../ui/buttons/ActionButton";
import BookDetailHeader from "./BookDetailHeader";
import EditBookForm from "./EditBookForm";
import BookImage from "./_BookImage";
import BookStickyContainer from "./_BookStickyImageContainer";
import Layout from "./_Layout";
import { useBook } from "./useBook";

const StyledLayout = styled(Layout)`
  grid-template-columns: 1fr 5fr;
`;

const StyledActionContainer = styled.div`
  display: flex;
  gap: 0.25rem;
  align-items: center;

  & span {
    display: flex;
    align-items: center;
  }

  & label {
    cursor: pointer;
    width: 100%;
    height: 100%;
  }
`;

export default function EditBookLayout({ bookId }) {
  const state = useBook(bookId);
  const [previewImageUrl, setPreviewImageUrl] = useState(null);
  const [image, setImage] = useState("");
  const [file, setFile] = useState(null);

  function handlePreviewImageChange(e) {
    setImage(e.target.value);
    setFile(e.target.files[0]);

    const file = e.target.files[0];
    const reader = new FileReader();

    reader.addEventListener("load", () => {
      setPreviewImageUrl(reader.result);
    });

    reader.readAsDataURL(file);
  }

  function handleCancelPreview() {
    setPreviewImageUrl(null);
    setImage("");
    setFile(null);
  }

  return (
    <LoadingProgress {...state} resourceName="sách">
      <StyledLayout>
        <BookDetailHeader book={state.book} />

        <BookStickyContainer>
          <BookImage src={state.book.image} alt={state.book.name} />

          <FaAngleDoubleDown size={32} />

          <BookImage
            src={previewImageUrl || state.book.image}
            alt={"Ảnh xem trước"}
          />

          <StyledActionContainer>
            <label htmlFor="image">
              <ActionButton as="span" aria-label="Chỉnh sửa ảnh">
                <HiMiniPencilSquare role="presentation" />
              </ActionButton>
            </label>

            {previewImageUrl && (
              <ActionButton
                danger
                aria-label="Hủy chọn ảnh"
                onClick={handleCancelPreview}
              >
                <HiTrash role="presentation" />
              </ActionButton>
            )}
          </StyledActionContainer>
        </BookStickyContainer>

        <EditBookForm
          bookToEdit={state.book}
          onImageChange={handlePreviewImageChange}
          image={image}
          file={file}
        />
      </StyledLayout>
    </LoadingProgress>
  );
}
