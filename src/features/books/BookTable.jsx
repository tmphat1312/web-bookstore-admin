import BookRow from "./BookRow";
import { useBooks } from "./useBooks";

import LoadingProgress from "../../ui/LoadingProgress";
import Pagination from "../../ui/Pagination";
import Table from "../../ui/Table";
import CreateBookAction from "./CreateBookAction";

export default function BookTable() {
  const state = useBooks();

  return (
    <LoadingProgress {...state} resourceName="sách">
      <Table columns="90px 1.25fr 20ch 14ch 20ch 5.6rem">
        <Table.Header>
          <div>Ảnh</div>
          <div>Tựa sách</div>
          <div>Danh mục</div>
          <div>Giá</div>
          <div>Tác giả</div>
          <div>&nbsp;</div>
        </Table.Header>

        <Table.Body
          data={state.books}
          render={(book) => <BookRow key={book._id} book={book} />}
        />
        <Table.Footer>
          <Pagination count={state.count} />
        </Table.Footer>
      </Table>

      <CreateBookAction />
    </LoadingProgress>
  );
}
