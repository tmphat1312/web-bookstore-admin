import { useParams } from "react-router-dom";
import BookDetail from "../features/book-detail/BookDetail";

export default function BookDetailPage() {
  const { id } = useParams();

  return <BookDetail bookId={id} />;
}
