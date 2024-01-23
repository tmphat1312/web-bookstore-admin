import BookCategoryFilter from "../book-detail/BookCategoryFilter";
import TableOperations from "../../ui/TableOperations";
import SearchBox from "../../ui/SearchBox";
import SortBy from "../../ui/SortBy";

const sortByOptions = [
  { value: "default", label: "Sắp xếp mặc định" },
  { value: "name-asc", label: "Sắp xếp theo tựa (A - Z)" },
  { value: "name-desc", label: "Sắp xếp theo tựa (Z - A)" },
  { value: "publishedYear-asc", label: "Sắp xếp theo năm (tăng dần)" },
  { value: "publishedYear-desc", label: "Sắp xếp theo năm (giảm dần)" },
  { value: "sellingPrice-asc", label: "Sắp xếp theo giá bán (tăng dần)" },
  { value: "sellingPrice-desc", label: "Sắp xếp theo giá bán (giảm dần)" },
];

export default function BookTableOperations() {
  return (
    <TableOperations end>
      <BookCategoryFilter />

      <SortBy options={sortByOptions} />

      <SearchBox />
    </TableOperations>
  );
}
