import ErrorLoading from "../../ui/ErrorLoading";
import SelectFilter from "../../ui/SelectFIlter";
import SpinnerMini from "../../ui/spinners/SpinnerMini";
import { useBookCategories } from "./useBookCategories";

export default function BookCategoryFilter() {
  const { isLoading, error, bookCategoryOptions } = useBookCategories();

  if (isLoading) {
    return <SpinnerMini />;
  }

  if (error) {
    return <ErrorLoading error={error} />;
  }

  bookCategoryOptions.unshift({ value: "all", label: "Tất cả danh mục" });

  return <SelectFilter options={bookCategoryOptions} filterField="category" />;
}
