import PageHeading from "../ui/headings/PageHeading";
import CreateBookForm from "../features/book-detail/CreateBookForm";

export default function CreateBook() {
  return (
    <>
      <PageHeading>Thêm thông tin sách</PageHeading>
      <CreateBookForm />
    </>
  );
}
