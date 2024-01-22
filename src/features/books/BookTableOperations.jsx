import BookCategoryFilter from "../book-detail/BookCategoryFilter";
import TableOperations from "../../ui/TableOperations";
import SearchBox from "../../ui/SearchBox";

export default function BookTableOperations() {
  return (
    <TableOperations between>
      <BookCategoryFilter />

      {/* sort by */}
      <SearchBox />
    </TableOperations>
  );
}
