import LoadingProgress from "../../ui/LoadingProgress";
import BookDetailHeader from "./BookDetailHeader";
import { StyledImage, StyledLayout, StyledSticky } from "./BookDetailLayout";
import EditBookForm from "./EditBookForm";
import { useBook } from "./useBook";

export default function EditBookLayout({ bookId }) {
  const state = useBook(bookId);

  return (
    <LoadingProgress {...state} resourceName="sách">
      <StyledLayout>
        <BookDetailHeader book={state.book} />
        <StyledSticky>
          <StyledImage src={state.book.image} alt={state.book.name} />
        </StyledSticky>
        <EditBookForm bookToEdit={state.book} />
      </StyledLayout>
    </LoadingProgress>
  );
}
