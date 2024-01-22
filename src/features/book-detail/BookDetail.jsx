import LoadingProgress from "../../ui/LoadingProgress";
import BookDetailLayout from "./BookDetailLayout";
import { useBook } from "./useBook";

export default function BookDetail({ bookId }) {
  const state = useBook(bookId);

  return (
    <LoadingProgress {...state} resourceName="Sách">
      <BookDetailLayout book={state.book} />
    </LoadingProgress>
  );
}
