import { useParams } from "react-router-dom";
import EditBookLayout from "../features/book-detail/EditBookLayout";

export default function EditBook() {
  const { id } = useParams();

  return <EditBookLayout bookId={id} />;
}
