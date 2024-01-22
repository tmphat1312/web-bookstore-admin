import BookTable from "../features/books/BookTable";
import BookTableOperations from "../features/books/BookTableOperations";
import PageHeading from "../ui/headings/PageHeading";

function Books() {
  return (
    <>
      <PageHeading reset>Sản phẩm</PageHeading>
      <BookTableOperations />
      <BookTable />
    </>
  );
}

export default Books;
